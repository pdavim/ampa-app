var app = angular.module("ampaapp", ["ngRoute"]);

// Menu Sidebar
app.config(function($routeProvider) {
  $routeProvider
        .when("/",{
          templateUrl: "./views/main.html"
        })
        .when("/models",{
          templateUrl: "./views/models_main.html"
        })
        .when("/add_model",{
          templateUrl: "./views/add_form_models.html"
        })
        .when('/location',{
          templateUrl: './views/location_main.html'
        })
        .when('/add_location', {
          templateUrl:"./views/add_location_form.html"
        })
        .when('/props',{
          templateUrl: './views/props_main.html'
        })
        .when("/gearstudio",{
          templateUrl: './views/gearstudio_main.html'
        })
        .when("/contacts",{
          templateUrl: './views/contacts_main.html'
        });

});
