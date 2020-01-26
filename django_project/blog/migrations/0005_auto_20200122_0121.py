# Generated by Django 2.2.5 on 2020-01-22 01:21

from django.db import migrations, models
import django.utils.timezone
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20200122_0043'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='date_of_brith',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='post',
            name='first',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='height',
            field=models.IntegerField(default=0, null=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='last',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(default='', max_length=128, region=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='weight',
            field=models.IntegerField(default=0, null=True),
            preserve_default=False,
        ),
    ]
