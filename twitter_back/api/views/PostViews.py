import json

from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

from api.models import Post, Media, Profile, User
from api.serializers import PostSerializer, MediaSerializer, ProfileSerializer


@csrf_exempt
def posts_list(request):
    if request.method == 'GET':
        text = request.GET.get('search', '')
        if not text:
            posts = Post.objects.all().order_by('-id')
        else:
            posts = Post.objects.filter(body__contains=text).order_by('-id')
        objects = []
        for post in posts:
            post = post.to_json()
            post_medias = Media.objects.filter(post_id=post["id"])
            post["medias"] = MediaSerializer(post_medias, many=True).data
            objects.append(post)

        return JsonResponse(objects, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username', None)
        text = data.get('body')
        medias = data.get('medias', [])

        user = User.objects.get(username=username)
        profile = Profile.objects.get(user=user)
        post = Post.objects.create(profile=profile, body=text)

        media_list = []
        for media_url in medias:
            media_serializer = MediaSerializer(
                data={
                    "url": media_url,
                    "post": post
                }
            )

            media_serializer.is_valid(raise_exception=True)
            media_serializer.save()
            media_list.append(media_serializer.data)
        data = post.to_json()
        data["medias"] = media_list
        return JsonResponse(data)


@csrf_exempt
def post_retrieve(request, pk):
    try:
        post = get_object_or_404(Post, pk=pk)
    except Post.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        medias = Media.objects.filter(post_id=pk)
        media_list = MediaSerializer(medias, many=True)
        data = post.to_json()
        data["medias"] = media_list.data
        return JsonResponse(data)
    elif request.method == 'DELETE':
        post.delete()
        return JsonResponse({'deleted': True})
    elif request.method == 'PUT':
        data = json.loads(request.body)
        medias = data['medias']
        del data['medias']
        username = data.pop('username')

        user = User.objects.get(username=username)
        profile = Profile.objects.get(user=user)

        serializer = PostSerializer(instance=post, data={
            "profile": profile,
            **data
        })
        serializer.is_valid(raise_exception=True)
        serializer.save()

        media_list = []
        for media_url in medias:
            media_serializer = MediaSerializer(
                data={
                    "url": media_url,
                    "post": post.id
                }
            )

            media_serializer.is_valid(raise_exception=True)
            media_serializer.save()
            media_list.append(media_serializer.data)

        data = post.to_json()
        data["medias"] = media_list
        return JsonResponse(data)


@api_view(['GET'])
def get_posts_by_username(request):
    id = request.GET.get('id')
    user = User.objects.get(pk=id)
    profile = Profile.objects.get(user=user)

    posts = Post.objects.filter(profile=profile)

    objects = []
    for post in posts:
        post = post.to_json()
        post_medias = Media.objects.filter(post_id=post["id"])
        post["medias"] = MediaSerializer(post_medias, many=True).data
        objects.append(post)

    return JsonResponse(objects, safe=False)
