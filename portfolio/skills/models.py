from django.db import models

class SkillCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Skill(models.Model):
    category = models.ForeignKey(SkillCategory, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    level = models.IntegerField(default=80)  # % ou échelle personnalisée
    icon = models.CharField(max_length=100, blank=True)  # nom d'icône FontAwesome ou autre

    def __str__(self):
        return self.name
