from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api import views

urlpatterns = [
    # path("", views.index, name="index"),
    path("login/", obtain_jwt_token),
    path("users/", views.UserListAPIView.as_view()),
    path("users/<int:id>/", views.UserDetailAPIView.as_view())
]
