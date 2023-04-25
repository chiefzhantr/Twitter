from django.contrib import admin

from api.models import User


# Register your models here.
@admin.register(User)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'first_name', 'last_name', 'profile_picture', 'password', 'phone_number')