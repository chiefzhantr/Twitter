import json

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Post, Media
from api.serializers import PostSerializer, MediaSerializer


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@csrf_exempt
def posts_list(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)

        for post in serializer.data:
            post["medias"] = Media.objects.filter(post_id=post)

        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)

        if hasattr(data, 'medias'):
            medias = data.medias
            del data.medias

        serializer = PostSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        for media_url in medias:
            media_serializer = MediaSerializer(
                {
                    "url": media_url,
                    "post_id": serializer.data.id
                }
            )

            media_serializer.is_valid(raise_exception=True)
            serializer.save()

        return JsonResponse(serializer.data)


@csrf_exempt
def post_retrieve(request, pk):
    try:
        post = get_object_or_404(Post, pk=pk)
    except Post.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = PostSerializer(post)
        return JsonResponse(serializer.data)
    elif request.method == 'DELETE':
        post.delete()
        return JsonResponse({'deleted': True})
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = PostSerializer(instance=post, data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse(serializer.data)
