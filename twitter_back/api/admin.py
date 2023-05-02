from django.contrib import admin

from api.models import Post, Profile


# Register your models here.
@admin.register(Profile)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('user', 'profile_picture', 'phone_number')


admin.site.register(Post)
