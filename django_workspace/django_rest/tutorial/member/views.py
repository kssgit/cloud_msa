#from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import Member
# Create your views here.

class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        #meta데이터로 선언을하면 알아서 모델을 필드값으로 json형태로 변환
        model = Member
        fields=['id','name', 'email'] 
        #fields='__all__' #모든 컬럼다(권장 X)

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    