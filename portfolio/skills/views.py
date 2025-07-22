from rest_framework import generics
from .models import SkillCategory
from .serializers import SkillCategorySerializer

class SkillCategoryListView(generics.ListAPIView):
    queryset = SkillCategory.objects.prefetch_related('skills').all()
    serializer_class = SkillCategorySerializer
