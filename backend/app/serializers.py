from dj_rest_auth.serializers import UserDetailsSerializer
from dj_rest_auth.models import TokenModel
from rest_framework import serializers

from django.contrib.auth.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username",]


class CustomTokenSerializer(serializers.ModelSerializer):
    user = UserDetailsSerializer(read_only=True)

    class Meta:
        model = TokenModel
        fields = ["key", "user",]
