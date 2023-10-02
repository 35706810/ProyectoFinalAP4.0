from django.urls import path, include
from django.shortcuts import redirect  # Agrega esta importación
from django.contrib import admin
urlpatterns = [
    path('', lambda request: redirect('api/')),  # Redirige la raíz a la API
    path('admin/', admin.site.urls),
    path('usuarios/', include('usuarios.urls')),
    path('api/', include('tareas.urls')),
]
