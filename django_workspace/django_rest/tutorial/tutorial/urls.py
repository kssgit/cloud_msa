"""tutorial URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
# from rest_framework import routers
from member import views
# from rest_framework_swagger.views import get_swagger_view

#swagger
# doc_view = get_swagger_view(title='Member API')


# router = routers.DefaultRouter()
# router.register(r'members',views.MemberViewSet) 
# r 은 정규표현식으로 작성할 때

#app_name = 'members'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/members/',include('member.urls')),
    # path('api/', include(router.urls)),
    # path('api/doc/',doc_view),
    #path('api/v1/',include((router.urls,'members'),namespace='api')),
    #path('api_admin/', include('rest_framework.urls', namespace='api')),
    #api/members 로 요청을 하면 MemberViewSet클래스가 응답되어 json형태로 
    #member 테이블 응답
]
