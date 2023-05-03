from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    profile_picture = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'

    def __str__(self):
        return f'{self.profile_picture}: {self.user.username}'


class Post(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile', null=False)
    body = models.TextField(max_length=512, null=False)

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
        ordering = ('-id', )

    def __str__(self):
        return f'{self.id}: {self.profile} : {self.body}'

    def to_json(self):
        return {
            'id': self.id,
            'body': self.body,
            'username': self.profile.user.username,
            'profile_picture': self.profile.profile_picture,
            'user_id': self.profile.pk
        }


class Media(models.Model):
    url = models.TextField(max_length=512)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Media'
        verbose_name_plural = 'Medias'

    def __str__(self):
        return f'{self.id}: {self.url}'


class Tweet(models.Model):
    username = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='tweets', null=False)
    profilePicture = models.CharField(max_length=255)
    body = models.TextField(max_length=255)

    class Meta:
        verbose_name = 'Tweet'
        verbose_name_plural = 'Tweets'

    def __str__(self):
        return f'{self.post}: {self.username}'
