from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='profiles/')
    location = models.CharField(max_length=100)

class SocialLink(models.Model):
    platform = models.CharField(max_length=50)
    url = models.URLField()
    profile = models.ForeignKey(Profile, related_name='social_links', on_delete=models.CASCADE)
