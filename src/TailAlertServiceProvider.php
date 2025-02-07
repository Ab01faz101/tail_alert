<?php
namespace Ab01faz101\TailAlert;
use Illuminate\Support\ServiceProvider;

class TailAlertServiceProvider extends ServiceProvider
{

    public function register(): void
    {
        $this->app->singleton('tail_alert' , function (){
            return new TailAlert();
        });
    }


    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../resources/assets/script.js' => public_path('vendor/tail_alert/alert.js'),
            __DIR__ . '/../resources/assets/style.css' => public_path('vendor/tail_alert/style.css'),
        ], 'public');
    }

}
