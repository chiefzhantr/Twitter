from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import Http404
from django.contrib.auth.models import User
from api.models import Profile
from api.serializers import ProfileSerializer, UserSerializer


class ProfileListAPIView(APIView):
    def get(self, request):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)


class ProfileDetailAPIView(APIView):

    def get_object(self, id):
        try:
            return Profile.objects.get(pk=id)
        except Profile.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        instance = self.get_object(id)
        serializer = ProfileSerializer(instance)
        return Response(data={
            **UserSerializer(instance.user).data,
            **serializer.data
        })

    def put(self, request, id):
        instance = self.get_object(id)
        serializer = ProfileSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            data_for_user = {"first_name": request.data.pop("first_name"),
                             "last_name": request.data.pop("last_name")}

            User.objects.filter(username=instance.user.username).update(**data_for_user)
            serializer.save()
            return Response(data={
                **UserSerializer(instance.user).data,
                **serializer.data
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        instance = self.get_object(id)
        instance.delete()
        return Response({'deleted': True})
