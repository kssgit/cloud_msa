from django.db import models

# Create your models here.
class Books(models.Model):
    object = models.Manager()
    ISBN = models.CharField(max_length=200)
    title= models.CharField(max_length=200)
    author= models.CharField(max_length=200)
    publisher= models.CharField(max_length=200)
    price =models.IntegerField()
    imgUrl= models.CharField(max_length=200)
    introduce=models.TextField()