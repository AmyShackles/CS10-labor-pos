"""POSserver URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.conf.urls import url
from django.contrib import admin
from server.models import User
from rest_framework import routers, serializers, viewsets
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from django.urls import path, re_path, include
from .views import GeneratePDF
from payment.views import checkout

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username']

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("admin/", admin.site.urls),
    re_path(r"^graphql/$", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    re_path(r"^graphql/pdf/$", csrf_exempt(GeneratePDF.as_view())),
    re_path(r"^graphql/create-charge/$", csrf_exempt(checkout)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
