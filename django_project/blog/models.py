from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from phonenumber_field.modelfields import PhoneNumberField

class Post(models.Model):

    first = models.CharField(max_length=100)
    last = models.CharField(max_length=100)
    date_of_brith = models.DateTimeField("Date",default="1980-01-26 12:09:58")
    phone_number = PhoneNumberField()
    height = models.IntegerField(null = True)
    weight = models.IntegerField(null = True)

    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)


    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})
