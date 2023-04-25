from django.db import models
from django.contrib.auth import get_user_model

"""
create table user(
    username varchar(255),
    first_name varchar(255),
    last_name varchar(255),
    profile_picture varchar(255),
    password varchar (255),
    phone_number varchar (255),
)
"""


# Create your models here.
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
