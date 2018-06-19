from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

def index(requests):
    return render(requests, 'main/index.html')

def works_details(requests):
    return render(requests, 'main/works_details.html')

def about(requests):
    return render(requests, 'main/about.html')

def blog(requests):
    return render(requests, 'main/blog.html')

def blog_details(requests):
    return render(requests, 'main/blog_details.html')

def contact(requests):
    return render(requests, 'main/contact.html')


# def home_filter(requests, filt_num):
#     num = requests.GET.get('numbers', None)
#     data = {
#         'filt_data': Product.objects.filter(id = num)
#     }
#     return JsonResponse(data)