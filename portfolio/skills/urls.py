from django.urls import path
from .views import SkillCategoryListView

urlpatterns = [
    path('', SkillCategoryListView.as_view(), name='skills-list'),
]
