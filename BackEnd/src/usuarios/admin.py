from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser
from .forms import CustomUserCreationForm

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    model = CustomUser
    list_display = ['email', 'username', 'first_name', 'last_name', 'is_staff']

admin.site.register(CustomUser, CustomUserAdmin)

