#from django.shortcuts import render
# from rest_framework import viewsets
from .models import Member
from .memberdto import MemberSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# class MemberViewSet(viewsets.ModelViewSet):
#     queryset = Member.objects.all()
#     serializer_class = MemberSerializer
    
@api_view(['GET'])
def memberList(request):
    members= Member.objects.all()
    #데이터가 여러개면 many=true 를 해줘야 한다 (하나일경우 fales인데 생략가능)
    serializer = MemberSerializer(members,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def memberDetail(request,pk):
    member = Member.objects.get(id=pk)
    serializer =MemberSerializer(member)
    return Response(serializer.data)

@api_view(['DELETE'])
def memberDelete(request, pk):
    member = Member.objects.get(id = pk)
    member.delete()
    return Response('Deleted !!')

@api_view(['PUT'])
def memberUpdate(request,pk):
    member = Member.objects.get(id=pk)
    #역 직렬화()
    serializer = MemberSerializer(instance = member , data=request.data)
    #save할 경우 valid 검사를 해야한다
    if(serializer.is_valid()):
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def memberCreate(request):
    #역 직렬화()
    serializer = MemberSerializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
    return Response(serializer.data)