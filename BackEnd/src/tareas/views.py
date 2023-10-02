from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Tarea
from .serializers import TareaSerializer

@api_view(['GET', 'POST'])
def lista_tareas(request):
    if request.method == 'GET':
        tareas = Tarea.objects.all()
        serializer = TareaSerializer(tareas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TareaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def detalle_tarea(request, pk):
    try:
        tarea = Tarea.objects.get(pk=pk)
    except Tarea.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TareaSerializer(tarea)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TareaSerializer(tarea, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        tarea.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    class TareaViewSet(viewsets.ModelViewSet):
        queryset = Tarea.objects.all()
        serializer_class = TareaSerializer
