# Generated by Django 3.2.12 on 2022-04-05 05:34

import core.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_auto_20220402_1539'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='image',
            field=models.FileField(upload_to=core.models.get_image_path),
        ),
    ]
