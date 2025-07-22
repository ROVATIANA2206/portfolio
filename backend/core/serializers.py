from rest_framework import serializers
from .models import Profile, SocialLink

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    social_links = SocialLinkSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'
