from api.models import Tweet, Post, Profile
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.http import HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

import json

@csrf_exempt
def post_tweets(request, id):
    print(request)
    if request.method == "GET":
        post = get_object_or_404(Post, id=id)
        tweets = post.tweets.all()
        data = {
            "tweets": list(tweets.values())
        }
        return JsonResponse(data)
    if request.method == "POST":
        post = get_object_or_404(Post, id=id)
        data = json.loads(request.body)
        profileId = data.get('profileId'),
        profile = get_object_or_404(Profile, pk=profileId)
#         print('USERNAME:')
#         print(data.get('username'))
#         print(data.get('profilePicture'))
#         print(data.get('body'))
        tweet = Tweet.objects.create(
            username=data.get('username'),
            profilePicture= profile.profile_picture,
            body=data.get('body'),
            post=post
        )
        return JsonResponse({'success': True})

@csrf_exempt
def post_tweet_update(request, post_id, tweet_id):
    if request.method == "PUT":
        data = json.loads(request.body)

        post = get_object_or_404(Post, id=post_id)

        tweet = get_object_or_404(Tweet, id=tweet_id, post=post)
        tweet.body = data.get('body', tweet.body)
        tweet.save()
        return JsonResponse({'success': True})
    elif request.method == "DELETE":
        post = get_object_or_404(Post, id=post_id)
        tweet = get_object_or_404(Tweet, id=tweet_id, post=post)
        tweet.delete()
        return JsonResponse({'success': True})
    else:
        return HttpResponse(status=405)  # Method Not Allowed
