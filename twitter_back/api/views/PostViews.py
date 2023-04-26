import json

from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Post, Media
from api.serializers import PostSerializer, MediaSerializer


@csrf_exempt
def posts_list(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        objects = []
        for post in posts:
            post = post.to_json()
            post_medias = Media.objects.filter(post_id=post["id"])
            post["medias"] = MediaSerializer(post_medias, many=True).data
            objects.append(post)

        return JsonResponse(objects, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        medias = None
        if hasattr(data, 'medias'):
            medias = data.medias
            del data['medias']

        serializer = PostSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        media_list = []
        if medias:
            for media_url in medias:
                media_serializer = MediaSerializer(
                    {
                        "url": media_url,
                        "post_id": serializer.data.id
                    }
                )

                media_serializer.is_valid(raise_exception=True)
                media_serializer.save()
                media_list.append(media_serializer.data)

        return JsonResponse({
            "medias": media_list,
            **serializer.data
        })


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
