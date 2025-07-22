from django.core.management.base import BaseCommand
from skills.models import SkillCategory, Skill
from core.models import Profile  # si besoin

class Command(BaseCommand):
    help = 'Insert des données test pour les compétences et le profil'

    def handle(self, *args, **kwargs):
        # Supprimer les anciennes données (optionnel)
        Skill.objects.all().delete()
        SkillCategory.objects.all().delete()
        Profile.objects.all().delete()

        # Création catégories
        categories = {
            'Frontend': SkillCategory.objects.create(name='Frontend'),
            'Backend': SkillCategory.objects.create(name='Backend'),
            'Outils & IA': SkillCategory.objects.create(name='Outils & IA'),
            'Bases de données': SkillCategory.objects.create(name='Bases de données'),
            'Big Data': SkillCategory.objects.create(name='Big Data'),
        }

        # Création compétences
        Skill.objects.create(category=categories['Frontend'], name='React', level=90, icon='react')
        Skill.objects.create(category=categories['Backend'], name='Django', level=85, icon='django')
        Skill.objects.create(category=categories['Outils & IA'], name='Intelligence Artificielle', level=70, icon='brain')
        Skill.objects.create(category=categories['Outils & IA'], name='Docker', level=75, icon='docker')
        Skill.objects.create(category=categories['Bases de données'], name='MongoDB', level=80, icon='database')
        Skill.objects.create(category=categories['Bases de données'], name='SQL', level=80, icon='database')
        Skill.objects.create(category=categories['Big Data'], name='Big Data', level=65, icon='database')

        # Création profil
        profile = Profile.objects.create(
            name="Rovatiana",
            bio="Étudiant en Master à l'ESMIA, développeur full stack spécialisé Django et React, passionné par l'IA, cybersécurité, Docker, bases SQL et NoSQL, Big Data.",
            location="Madagascar",
            profile_image="http://localhost:8000/media/profile.jpg",
        )
        profile.social_links.create(platform="GitHub", url="https://github.com/rovatiana")
        profile.social_links.create(platform="LinkedIn", url="https://linkedin.com/in/rovatiana")

        self.stdout.write(self.style.SUCCESS("Insertion des données terminée avec succès !"))
