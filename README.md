![Tail Alert Logo](https://cv.abolfazl01.ir/images/tail-alert-logo.jpg)
# Tail Alert - Livewire Toast Notifications 🚀
![Packagist Version](https://img.shields.io/packagist/v/Ab01faz101/tail-alert)
![Downloads](https://img.shields.io/packagist/dt/Ab01faz101/tail-alert)
![License](https://img.shields.io/github/license/Ab01faz101/tail_alert)

**Tail Alert** is a lightweight **Livewire alert package** for **Laravel**, providing stylish **toast notifications** built with **Tailwind CSS**. It helps you display modern notifications easily in any **Livewire component**.


## 📦 Installation & Links
- **GitHub Repo**: [Tail Alert on GitHub](https://github.com/Ab01faz101/tail_alert)
- **Packagist**: [Tail Alert on Packagist](https://packagist.org/packages/ab01faz101/tail-alert)


## 🚀 Why Use Tail Alert?
- No need for extra JavaScript libraries
- Works seamlessly with **Livewire**
- Uses **Tailwind CSS** for modern designs
- Lightweight and fast 🚀



## Features
✔ Modern and minimal design with **Tailwind**  
✔ Fully compatible with **Livewire**  
✔ Supports different alert types (success, warning, error, info)  

## Preview
![Tail Alert Preview](https://cv.abolfazl01.ir/images/tail-alert-demo.png)
![Tail Alert Preview](https://cv.abolfazl01.ir/images/tail-alert-modal.png)


## 🛠️ Installation
### You can install the package via composer:
```sh
composer require ab01faz101/tail-alert
```
```sh
 php artisan vendor:publish --provider="Ab01faz101\TailAlert\TailAlertServiceProvider" --force
```

### Add the following codes to your custom style or app.css.
```css
@source '../../public/vendor/tail_alert/alert.js"';

.tail_alert_item.active{
    animation: tail_alert_item_move .4s;
}

.tail_alert_item.active .tail_alert_time_animation{
    margin: 0!important;
    animation: fullWidthAnimate 5s ease;
}



@keyframes fullWidthAnimate {
    0%{
        width: 0;
    }
    100%{
        width: 100%;
    }
}

@keyframes tail_alert_item_move {
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0);
    }
}


```
### Next, add the scripts component to your template after the @livewireScripts.
```php
<script src="{{ asset('vendor/tail_alert/alert.js') }}"></script>
```


### Add this line of code to your Livewire component.
```php
@include('components.alerts')
```


**Note:** This package requires **Tailwind CSS** to be installed in your project.

## 🔔 Usage

### You can use Tail Alert  by using the AlertTrait trait.

```php
use Ab01faz101\TailAlert\Traits\TailAlertTrait;
 
class Index extends Component
{
    use TailAlertTrait;
    
    public function submit()
    {
        $this->alert('success', 'Basic Alert');
    }
}
```





In your Livewire component, you can trigger an alert like this:
```php
$this->alert('success', 'alert message'  , "description");
$this->alert('info', 'alert message'  , "description");
$this->alert('warning', 'alert message' , "description");
$this->alert('error', 'alert message'  , "description");
```

<a href="https://www.youtube.com/watch?v=2cfV8cwz7wo"><img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></a>

```php
public function flashSuccess() {
    session()->flash('alert', [
        'type' => 'success',
        'message' => 'Successful Operation!'
    ]);
}

public function flashError() {
    session()->flash('alert', [
        'type' => 'error',
        'message' => 'An Error Occurred.'
    ]);
}

public function flashWarning() {
    session()->flash('alert', [
        'type' => 'warning',
        'message' => 'Warning.'
    ]);
}

public function flashInfo() {
    session()->flash('alert', [
        'type' => 'info',
        'message' => 'Information.'
    ]);
}
```

```php
public function redirectAlert() {
    return redirect()->route('test')->with('alert' , [
        'type' => 'success',
        'message' => 'mission successfully!'
    ]);
}
```

💡 The **type** can be `success`, `error`, `warning`, or `info`.


## 🔍 Keywords  
Livewire Toast Notifications, Laravel Alerts, Tailwind CSS Alerts, Livewire Notifications, Laravel Toast  


## License
This package is released under the **MIT License**.
