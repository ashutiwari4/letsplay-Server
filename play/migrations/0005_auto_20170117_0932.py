# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-17 09:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('play', '0004_auto_20170117_0843'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='name',
            field=models.CharField(max_length=200),
        ),
    ]
