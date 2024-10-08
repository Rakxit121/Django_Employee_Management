from rest_framework import serializers
from .models import Employee, Qualification

class QualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qualification
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    qualifications = QualificationSerializer(many=True)

    class Meta:
        model = Employee
        fields = '__all__'
