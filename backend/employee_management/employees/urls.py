from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmployeeViewSet, QualificationViewSet

router = DefaultRouter()
router.register(r'employees', EmployeeViewSet)
router.register(r'qualifications', QualificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
