from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api import views

urlpatterns = [
    # path("", views.index, name="index"),
    path("login/", obtain_jwt_token),
    path("register/", views.register),
    path("send_code/", views.send_verification_code),
    path("users/", views.ProfileListAPIView.as_view()),
    path("users/<int:id>/", views.ProfileDetailAPIView.as_view()),
    path('post/<int:id>/tweets/', views.post_tweets),
    path('post/<int:id>/tweets/create/', views.post_tweets),
    path('post/<int:post_id>/tweets/update/<int:tweet_id>', views.post_tweet_update),

    path("news/", views.posts_list),
    path("news/<int:pk>/", views.post_retrieve),
    path("profile-post", views.get_posts_by_username)
]

