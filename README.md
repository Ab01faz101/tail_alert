![Tail Alert Logo](https://cv.abolfazl01.ir/images/tail-alert-logo.jpg)
# Tail Alert - Livewire Toast Notifications 🚀


**Tail Alert** is a lightweight **Livewire alert package** for **Laravel**, providing stylish **toast notifications** built with **Tailwind CSS**. It helps you display modern notifications easily in any **Livewire component**.

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


## Installation
### You can install the package via composer:
```sh
composer require ab01faz101/tail-alert
```
```sh
 php artisan vendor:publish --provider="Ab01faz101\TailAlert\TailAlertServiceProvider" --force
```

### Next, add the scripts component to your template after the @livewireStyles.
```php
<link rel="stylesheet" href="{{asset('vendor/tail_alert/style.css')}}">
```

### Next, add the scripts component to your template after the @livewireScripts.
```php
<script src="{{ asset('vendor/tail_alert/alert.js') }}"></script>
```

## Tailwind Configuration

Before using this package, make sure to add the following path to your `tailwind.config.js` file:

```js
module.exports = {
  content: [
    // ...
    "./public/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```




### You can use Tail Alert  by using the AlertTrait trait.
```php
use Ab01faz101\TailAlert\Traits\AlertTrait;
 
class Index extends Component
{
    use AlertTrait;
    
    public function submit()
    {
        $this->alert('success', 'Basic Alert');
    }
}
```




**Note:** This package requires **Tailwind CSS** to be installed in your project.

## Usage
In your Livewire component, you can trigger an alert like this:
```php
$this->alert('success', 'alert message'  , "description");
$this->alert('info', 'alert message'  , "description");
$this->alert('warning', 'alert message' , "description");
$this->alert('error', 'alert message'  , "description");
```
💡 The **type** can be `success`, `error`, `warning`, or `info`.

## License
This package is released under the **MIT License**.
