
from django.db import models


class Register(models.Model):
    image = models.FileField(upload_to='media')
# Create your models here.
