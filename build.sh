#!/usr/bin/env bash
# Installer les dépendances backend
pip install -r backend/requirements.txt

# Migrer la base de données
python backend/manage.py migrate

# Collecter les fichiers statiques
python backend/manage.py collectstatic --noinput
