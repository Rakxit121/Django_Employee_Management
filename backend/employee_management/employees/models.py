from django.db import models

class Qualification(models.Model):
    name = models.CharField(max_length=100)
    certificate_image = models.ImageField(upload_to='certificates/')
    institution = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Employee(models.Model):
    STATUS_CHOICES = [
        ('present', 'Present'),
        ('absent', 'Absent'),
        ('active', 'Active'),
        ('terminated', 'Terminated'),
    ]
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    address = models.CharField(max_length=255)
    phone_no = models.CharField(max_length=15)
    level = models.IntegerField(choices=[(1, 'Level 1'), (2, 'Level 2'), (3, 'Level 3'), (4, 'Level 4')])
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    qualifications = models.ManyToManyField(Qualification)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)

    def __str__(self):
        return self.name
