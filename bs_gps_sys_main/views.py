from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    print('Index Running')
    return render(request, "bs_gps_sys_main/bs_gps_sys_main.html")
