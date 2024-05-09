# Generated by Django 4.2.11 on 2024-05-02 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_user_email_alter_user_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(default='', max_length=254, unique=True, verbose_name='Email Address'),
        ),
    ]