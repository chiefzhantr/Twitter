from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.utils.crypto import get_random_string
from django.http import JsonResponse


@csrf_exempt
def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Create a new user
        user = User.objects.create_user(username, email, password)

        # Generate a verification code
        verification_code = get_random_string(length=10)

        # Save the verification code to the user's profile
        user.profile.verification_code = verification_code
        user.profile.save()

        # Send an email with the verification code
        send_mail(
            'Код подтверждения',
            f'Ваш код подтверждения: {verification_code}',
            'noreply@example.com',
            [email],
            fail_silently=False,
        )

        return JsonResponse({'success': True})

    return JsonResponse({'success': False})

@csrf_exempt
def verify(request):
    if request.method == 'POST':
        code = request.POST.get('code')
        user = request.user

        # Check if the verification code matches the one saved in the user's profile
        if user.profile.verification_code == code:
            # Mark the user's account as verified
            user.is_active = True
            user.profile.verification_code = ''
            user.profile.save()
            user.save()

            return JsonResponse({'success': True})

    return JsonResponse({'success': False})
