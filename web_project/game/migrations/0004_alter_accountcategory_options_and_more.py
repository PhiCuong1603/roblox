# Generated by Django 4.2.11 on 2024-05-13 10:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0003_alter_accountcategory_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='accountcategory',
            options={'verbose_name_plural': '2.Danh mục các tài khoản của game'},
        ),
        migrations.AlterModelOptions(
            name='accountdetail',
            options={'verbose_name_plural': '4.Chi tiết tài khoản'},
        ),
        migrations.AlterModelOptions(
            name='accounttype',
            options={'verbose_name_plural': '3.Mô tả về loại tài khoản'},
        ),
        migrations.AlterModelOptions(
            name='gameaccountcategory',
            options={'verbose_name_plural': '1.Danh mục các game'},
        ),
    ]
