# Generated by Django 2.1.2 on 2018-10-05 20:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='client',
            old_name='street_name',
            new_name='street_address',
        ),
        migrations.RemoveField(
            model_name='client',
            name='street_number',
        ),
        migrations.RemoveField(
            model_name='client',
            name='unit_number',
        ),
    ]
