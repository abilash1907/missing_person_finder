from email.mime import image
import json
from django.shortcuts import render,redirect
from rest_framework.decorators import parser_classes
from rest_framework.views import    APIView
from rest_framework.parsers import MultiPartParser, FormParser,FileUploadParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from .models import Register
from django.forms.models import model_to_dict


def front(request):
    context={ }
    return render(request,"index.html",context)



class PostView(APIView):
    

    def get(self, request, *args, **kwargs):
        posts = Register.objects.all()
        serializer = RegisterSerializer(posts, many=True)
        return Response(serializer.data)
    @parser_classes((FormParser, MultiPartParser, FileUploadParser))
    def post(self, request):
        

        '''
        firstname=datas['firstname']
        lastname=datas['lastname']
        images=datas['image']
        register_obj=Register.objects.create(firstname=firstname)
        register_obj.lastname=lastname
        
        for img in images:
            ImageUpload.objects.create(image=img, info=register_obj)

        register_obj.save()
        return redirect('/')
        
        '''

        posts_serializer = RegisterSerializer(data=request.data,many=True)
        print(posts_serializer)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        