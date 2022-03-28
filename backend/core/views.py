from django.shortcuts import render
from rest_framework.views import    APIView
from rest_framework.parsers import MultiPartParser, FormParser,FileUploadParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from .models import Register
from .helper import modify_input_for_multiple_files

def front(request):
    context={ }
    return render(request,"index.html",context)

class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Register.objects.all()
        serializer = RegisterSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = RegisterSerializer(data=request.data)
        print(posts_serializer)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)