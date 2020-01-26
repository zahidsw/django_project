from django.core.serializers import serialize
from django.db.models.query import QuerySet
import json
from django.template import Library
from django import template
import datetime

register = template.Library()


def jsonify(object):
    if isinstance(object, QuerySet):
        return serialize('json', object)
    return json.dumps(object)


register.filter('jsonify', jsonify)
