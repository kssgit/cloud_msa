from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Todo
from .forms import TodoForm
# Create your views(controller) here.
# request로부터 parameter값 받아서 valid 체크
# business method(service) 호출  또는 구현
# view(template)에서 참조할 데이터 저장
# view(template) 선택


# todo_app/
def index(request):
    todos = Todo.objects.all()  # 클래스변수 # 모든데이터를 가져온다
    context = {"todos": todos}
    return render(request, 'todo_app/index.html', context)  # 렌더링할 파일


# todo_app/createTodo
def createTodo(request):
    # todoContent = request.POST['todoContent']
    # index.html 에서 보내주는 name과 일치해야한다
    todoContent = TodoForm(request.POST)
    new_todo = Todo(content=todoContent)
    new_todo.save()
    return HttpResponseRedirect(reverse("index"))  # index 메서드로 리다이렉트


# todo_app/deleteTodo
def delteTodo(request):
    # delete_todo_id = request.GET['id']
    delete_todo_id = TodoForm(request.GET)
    todos = Todo.objects.get(id=delete_todo_id)
    todos.delete()
    return HttpResponseRedirect(reverse("index"))
