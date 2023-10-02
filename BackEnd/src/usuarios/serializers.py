from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='nombre')
    last_name = serializers.CharField(source='apellido')
    email = serializers.EmailField(source='correo')
    contrasena = serializers.CharField(source='contrasena')
    

    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'is_active', 'is_staff', 'contrasena')
