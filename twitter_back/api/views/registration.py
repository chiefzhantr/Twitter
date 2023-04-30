import json

from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.dispatch import receiver
from django.views.decorators.csrf import csrf_exempt
from django.utils.crypto import get_random_string
from django.http import JsonResponse

from api.models import Profile


@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        email = data.get('email')
        password = data.get('password')

        user = User.objects.create_user(username=email, email=email, password=password)
        user.save()
        profile = Profile.objects.create(user=user, profile_picture='1.png', phone_number='_')
        profile.save()
        # # Generate a verification code
        # verification_code = get_random_string(length=10)
        #
        # # Save the verification code to the user's profile
        # user.profile.verification_code = verification_code
        # user.profile.save()
        #
        # # Send an email with the verification code
        # send_mail(
        #     'Verification code',
        #     f'Your verification code: {verification_code}',
        #     'noreply@example.com',
        #     [email],
        #     fail_silently=False,
        # )

        return JsonResponse({'success': True})

    return JsonResponse({'success': False})


@csrf_exempt
def send_verification_code(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        print(data.get('email'))
        print(data.get('code'))
        email = data.get('email')
        code = data.get('code')
        send_mail(
            'Код подтверждения',
            f'Ваш код подтверждения: {code}',
            'webmaster@localhost',
            [email],
            fail_silently=False,
        )
    return JsonResponse({'success': True})
