from django.urls import path

from . import views

urlpatterns = [

    path('index', views.index, name='index'),

    path('works_details', views.works_details, name='works_details'),

    path('about', views.about, name='about'),

    path('blog', views.blog, name='blog'),

    path('blog_details', views.blog_details, name='blog_details'),

    path('contact', views.contact, name='contact'),

]