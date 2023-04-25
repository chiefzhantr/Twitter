from django.db import models
from django.contrib.auth import get_user_model


class User(models.Model):
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    profile_picture = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return f'{self.id}: {self.username}'


class Post(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user', null=False)
    body = models.TextField(max_length=512, null=False)

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self):
        return f'{self.id}: {self.user_id.username}'

    def get_profile_picture(self):
        return self.user_id.profile_picture

    def get_username(self):
        return self.user_id.username


class Media(models.Model):
    url = models.TextField(max_length=512)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Media'
        verbose_name_plural = 'Medias'

    def __str__(self):
        return f'{self.id}: {self.url}'
