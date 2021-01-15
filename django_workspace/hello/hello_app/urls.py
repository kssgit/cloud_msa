# 사용자가 만들어야 한다
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),  # url , 파일 위치 , 함수 이름
]
