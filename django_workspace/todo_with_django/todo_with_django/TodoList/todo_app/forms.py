# 사용자가 만들어야 한다
from django.forms import ModelForm
from .models import Todo


class TodoForm(ModelForm):
    class Meta:
        model = Todo
        fields = {'id', 'content'}
