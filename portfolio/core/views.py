# views.py
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Profile
from .serializers import ProfileSerializer

# core/views.py
from rest_framework.generics import RetrieveAPIView
from .models import Profile
from .serializers import ProfileSerializer

class ProfileDetailView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
