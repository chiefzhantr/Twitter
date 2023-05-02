from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api import views

urlpatterns = [
    # path("", views.index, name="index"),
    path("login/", obtain_jwt_token),
    path("register/", views.register),
    path("update/", views.update),
    path("send_code/", views.send_verification_code),
    path("users/", views.ProfileListAPIView.as_view()),
    path("users/<int:id>/", views.ProfileDetailAPIView.as_view()),
    path('post/<int:pk>/tweets/', views.TweetListView.as_view()),
    # path('post/<int:pk>/tweets/create/', TweetCreateView.as_view()),
    # path('post/<int:pk>/tweets/<int:pk>/update/', TweetUpdateView.as_view()),
    # path('post/<int:pk>/tweets/<int:pk>/delete/', TweetDeleteView.as_view()),

    path("news/", views.posts_list),
    path("news/<int:pk>/", views.post_retrieve),
]

