# Generated by Django 4.2.11 on 2024-05-09 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='defError',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('errnum', models.CharField(max_length=10)),
                ('errdesc', models.TextField()),
                ('en_errdesc', models.TextField()),
            ],
            options={
                'db_table': 'deferror',
            },
        ),
    ]