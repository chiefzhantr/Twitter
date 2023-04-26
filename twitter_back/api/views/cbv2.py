from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from .models import Tweet

class TweetListView(ListView):
    model = Tweet

class TweetCreateView(CreateView):
    model = Tweet
    fields = ['username', 'user_id', 'profilePicture', 'body', 'post_id']

class TweetUpdateView(UpdateView):
    model = Tweet
    fields = ['username', 'user_id', 'profilePicture', 'body', 'post_id']

class TweetDeleteView(DeleteView):
    model = Tweet
    success_url = reverse_lazy('tweet_list')
