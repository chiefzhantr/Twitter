from rest_framework import serializers

from api.models import User, Tweet


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'profile_picture', 'password', 'phone_number')

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