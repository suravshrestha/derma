from . import views

from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import path

# format_suffix_patterns allows handling multiple content types eg. json, api
# http://localhost:8000/api/v1/users.json
# http://localhost:8000/api/v1/users/1.json
# http://localhost:8000/api/v1/users/1.api

urlpatterns = format_suffix_patterns([
    path("", views.api_root),

    path("users/", views.UserList.as_view(), name="user-list"),
    path("users/<int:pk>/", views.UserDetail.as_view(), name="user-detail"),
])
