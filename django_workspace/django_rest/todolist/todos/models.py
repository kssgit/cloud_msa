from django.db import models

# Create your models here.
class Todo(models.Model):
    object = models.Manager()
    title = models.CharField(max_length=200)
    