# 사용자가 만들어야 한다
from django.urls import path

from . import views

urlpatterns = [
    # url(기본루트는 config 파일인 hello/urls.py에 적은 hello/이다), 컨트롤할 메서드 , 메서드 이름
    path('', views.index, name='index'),
]
