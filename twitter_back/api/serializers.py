from rest_framework import serializers

from api.models import Profile, Post, Media, Tweet


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    username = serializers.CharField(max_length=200)
    first_name = serializers.CharField(max_length=200)
    last_name = serializers.CharField(max_length=200)


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'


# class TweetSerializer(serializers.Serializer):
#     username = serializers.CharField(max_length=255)
#     user_id = serializers.IntegerField(read_only=True)
#     profilePicture = serializers.CharField()
#     body = serializers.CharField()
#     post_id = serializers.IntegerField()


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ('__all__')
