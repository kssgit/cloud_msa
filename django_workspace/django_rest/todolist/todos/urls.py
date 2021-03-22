from django.urls import path
from . import views

urlpatterns=[
    path('',views.todoList, name='todos'),
    path('detail/<str:pk>',views.todoDitail, name='detail'),
    path('create/',views.todoCreate, name='creat'),
    path('update/<str:pk>',views.todoUpdate, name='update'),
    path('delete/<str:pk>',views.todoDelete, name='delete'),
]