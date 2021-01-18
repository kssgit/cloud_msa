from django.shortcuts import render  # HTML 렌더링하기 위한 모듈

# Create your views here.

from django.http import HttpResponse  # HTTP 를 처리하기위한 모듈


def index(request):
    return HttpResponse("Hello, world. You're at the Hello Django App index.")
