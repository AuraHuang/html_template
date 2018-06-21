from django.urls import path

from . import views

urlpatterns = [

    path('', views.index, name='index'),

    path('<str:rtns>/<int:ds>/', views.index, name='indexs'),


    # path('works_details/<int:stock_id>/', views.works_details, name='stock_id'),

    path('works_details/', views.works_details, name='works_details'),

    path('about/', views.about, name='about'),

    path('blog/', views.blog, name='blog'),

    path('blog/blog_details/', views.blog_details, name='blog_details'),

    path('contact/', views.contact, name='contact'),

    # ajax response
    # path('ajax/filter/', views.filter_condiction, name='filt_condic'),

]