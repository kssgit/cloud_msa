
from .models import Todo
from .api import TodoSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

#create
@api_view(['POST'])
def todoCreate(request):
    #역 직렬화
    serializer = TodoSerializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
    return Response(serializer.data)

#read
@api_view(['GET'])
def todoList(request):
    todos = Todo.object.all()
    print(todos)
    serializer = TodoSerializer(todos,many=True)
    return Response(serializer.data)

#read
@api_view(['GET'])
def todoDitail(request,pk):
    todo = Todo.object.get(id=pk)
    serializer = TodoSerializer(todo)
    return Response(serializer.data)

#update
@api_view(['PUT'])
def todoUpdate(request,pk):
    todo = Todo.object.get(id = pk)
    serializer=TodoSerializer(instance=todo , data = request.data)
    if(serializer.is_valid()):
        serializer.save()
    return Response(serializer.data)

#delete
@api_view(['DELETE'])
def todoDelete(request,pk):
    todo = Todo.object.get(id=pk)
    todo.delete()
    return Response('Delete !!')



