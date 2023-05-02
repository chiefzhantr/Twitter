from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import Http404
from api.models import Profile
from api.serializers import ProfileSerializer


class ProfileListAPIView(APIView):
    def get(self, request):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileDetailAPIView(APIView):

    def get_object(self, id):
        try:
            return Profile.objects.get(pk=id)
        except Profile.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        instance = self.get_object(id)
        serializer = ProfileSerializer(instance)
        return Response(serializer.data)

    def put(self, request, id):
        instance = self.get_object(id)
        serializer = ProfileSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        instance = self.get_object(id)
        instance.delete()
        return Response({'deleted': True})
