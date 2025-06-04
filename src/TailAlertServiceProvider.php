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
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'tail-alert');

        $this->publishes([
            __DIR__ . '/../resources/assets/script.js' => public_path('vendor/tail_alert/alert.js'),
        ], 'public');

        $this->publishes([
            __DIR__ . '/../resources/views/components/alerts.blade.php' => resource_path('views/components/alerts.blade.php'),
        ], 'view');

        $this->publishes([
            __DIR__ . '/../resources/lang/en/alert.php' => lang_path('en/alert.php'),
            __DIR__ . '/../resources/lang/fa/alert.php' => lang_path('fa/alert.php'),
        ], 'lang');


    }

}
