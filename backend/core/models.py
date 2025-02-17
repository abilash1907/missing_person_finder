from distutils.command.upload import upload
from django.db import models
import os


def get_image_path(instance, filename):

    #return os.path.join( '{f}{l}'.format(f="".join(c for c in instance.firstname if c.isalpha()),l="".join(c for c in instance.lastname if c.isalpha())), filename)
    return os.path.join( '{f}{l}'.format(f=instance.firstname, l=instance.lastname), filename)

class Register(models.Model):
    firstname=models.CharField(max_length=20)
    lastname=models.CharField(max_length=10)
    image=models.FileField(upload_to=get_image_path)

'''
class ImageUpload(models.Model):
    info=models.ForeignKey(Register,on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_image_path)
'''
    
# Create your models here.
