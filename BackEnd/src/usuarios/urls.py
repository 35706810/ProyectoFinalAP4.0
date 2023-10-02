from django.urls import path
from .views import registro
from .views import InicioSesion
urlpatterns = [
    path('registro/', registro, name='registro'),
    path('inicio_sesion/', InicioSesion, name='inicio_sesion'),
]