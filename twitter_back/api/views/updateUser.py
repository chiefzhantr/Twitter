import json

from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.dispatch import receiver
from django.views.decorators.csrf import csrf_exempt
from django.utils.crypto import get_random_string
from django.http import JsonResponse

from api.models import Profile

from api.models import Profile


@csrf_exempt
def update(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        first_name = data.get('firstname')
        last_name = data.get('lastname')
        password = data.get('password')
        id = data.get('id')
        user = User.objects.get(id=id)
        user.username = username
        user.first_name = first_name
        user.last_name = last_name
        user.password = password
        user.save()

        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
