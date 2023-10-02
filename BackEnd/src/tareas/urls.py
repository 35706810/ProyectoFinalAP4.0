from django.urls import path
from .views import lista_tareas, detalle_tarea
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TareaViewSet
urlpatterns = [
    path('tareas/', lista_tareas),
    path('tareas/<int:pk>/', detalle_tarea),
]

router = DefaultRouter()
router.register(r'tareas', TareaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]