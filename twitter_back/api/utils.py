from .serializers import ProfileSerializer  # you have already created UserSerializer


def jwt_response_payload_handler(token, user=None, request=None):
    print(dir(user))
    print(dir(request))

    return {
        'token': token,
        'id': int(user.pk),
        'username': str(user.get_username())
    }
