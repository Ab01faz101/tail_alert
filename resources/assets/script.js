document.addEventListener("DOMContentLoaded", function () {
    Livewire.on("tail_alert_success", (data) => showAlert("success", ...data));
    Livewire.on("tail_alert_error", (data) => showAlert("error", ...data));
    Livewire.on("tail_alert_info", (data) => showAlert("info", ...data));
    Livewire.on("tail_alert_warning", (data) => showAlert("warning", ...data));
});


function clearAlertBox(){
    let alert = document.querySelector(".tail_alert_item");
    if(!alert ){
        let alertBox = document.querySelector("#alert_boxes_tail_alert");
        alertBox.remove();
    }
}


function showAlert(type, data) {
    if (type === 'success') {
        successMessage(data.message, data.description);
    } else if (type === 'error') {
        errorMessage(data.message, data.description);
    } else if (type === 'info') {
        infoMessage(data.message, data.description);
    }else if (type === 'warning') {
        warningMessage(data.message, data.description);
    }
}

function clearAlert(newAlert) {
    let remainingTime = 5000;

    let clearAlertTimeOut = setTimeout(function () {
        newAlert.remove();
        clearAlertBox();
    }, 5000);

    newAlert.addEventListener('mousemove', function () {
        clearTimeout(clearAlertTimeOut);
        newAlert.querySelector('.tail_alert_time_animation').style.animationPlayState = "paused";
    });
    newAlert.addEventListener('mouseleave', function () {
        newAlert.querySelector('.tail_alert_time_animation').style.animation = 'none'; // انیمیشن رو متوقف می‌کنیم
        newAlert.querySelector('.tail_alert_time_animation').offsetHeight; // این خط باعث میشه انیمیشن دوباره از ابتدا اجرا بشه
        newAlert.querySelector('.tail_alert_time_animation').style.animation = 'fullWidthAnimate 5s ease'; // انیمیشن رو دوباره تنظیم می‌کنیم

        clearAlertTimeOut = setTimeout(function () {
            newAlert.remove();
            clearAlertBox();
        }, 5000);

    });
}


function infoMessage(message, description = null) {
    let alertBox = document.querySelector("#alert_boxes_tail_alert");
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = "alert_boxes_tail_alert";
        alertBox.className = "fixed z-50 transition-all flex flex-col items-start justify-start top-0 right-0  h-auto max-h-auto max-h-screen overflow-x-hidden overflow-y-auto  w-[200px] sm:w-[500px] p-4";
        document.querySelector("body").appendChild(alertBox);
    }
    let alert = `
              <div class="flex mx-2">
                <div
                  class="w-10 h-10 flex items-center justify-center bg-white border border-blue-300 rounded-full"
                >
                <span class="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </span>
                </div>
              </div>
              <div class="flex w-full flex-col items-start justify-center">
                <h3 class="text-lg font-semibold text-gray-900">${message}</h3>
                <p class="text-gray-700 text-justify text-sm">
                  ${description}
                </p>
              </div>
              <button class="close_tail_alert_item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <span class="absolute tail_alert_time_animation bottom-0 left-0 bg-blue-600 h-1"></span>
        `;


    let newAlert = document.createElement('div');
    newAlert.className = "w-full min-h-max relative overflow-hidden  transition-all tail_alert_item transition-all mb-4 p-4 border border-white rounded-lg  flex-row  bg-gradient-to-b from-blue-100 to-blue-50 flex items-start space-x-3 shadow-md";
    newAlert.innerHTML = alert;
    alertBox.prepend(newAlert);
    newAlert.classList.add("active");
    clearAlert(newAlert);
    document.querySelectorAll('.tail_alert_item .close_tail_alert_item').forEach(tail_alert_item => {
        tail_alert_item.addEventListener('click', function () {
            tail_alert_item.parentElement.remove();
            clearAlertBox();
        });
    });
}


function successMessage(message, description = null) {
    let alertBox = document.querySelector("#alert_boxes_tail_alert");
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = "alert_boxes_tail_alert";
        alertBox.className = "fixed z-50 transition-all flex flex-col items-start justify-start top-0 right-0 h-auto max-h-screen overflow-x-hidden overflow-y-auto w-[200px] sm:w-[500px] p-4";
        document.querySelector("body").appendChild(alertBox);
    }
    let alert = `
              <div class="flex mx-2">
                <div
                  class="w-10 h-10 flex items-center justify-center bg-white border border-green-300 rounded-full"
                >
                  <span class="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="flex w-full flex-col items-start justify-center">
                <h3 class="text-lg font-semibold text-gray-900">${message}</h3>
                <p class="text-gray-700 text-justify text-sm">
                  ${description}
                </p>
              </div>
              <button class="close_tail_alert_item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <span class="absolute tail_alert_time_animation bottom-0 left-0 bg-green-600 h-1"></span>
        `;



    let newAlert = document.createElement('div');
    newAlert.className = "w-full min-h-max relative overflow-hidden  transition-all tail_alert_item transition-all mb-4 p-4 border border-white rounded-lg  flex-row  bg-gradient-to-b from-green-100 to-green-50 flex items-start space-x-3 shadow-md";
    newAlert.innerHTML = alert;
    alertBox.prepend(newAlert);
    newAlert.classList.add("active");
    clearAlert(newAlert);
    document.querySelectorAll('.tail_alert_item .close_tail_alert_item').forEach(tail_alert_item => {
        tail_alert_item.addEventListener('click', function () {
            tail_alert_item.parentElement.remove();
            clearAlertBox();
        });
    });
}



function warningMessage(message, description = null) {
    let alertBox = document.querySelector("#alert_boxes_tail_alert");
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = "alert_boxes_tail_alert";
        alertBox.className = "fixed z-50 transition-all flex flex-col items-start justify-start top-0 right-0 h-auto max-h-screen overflow-x-hidden overflow-y-auto w-[200px] sm:w-[500px] p-4";
        document.querySelector("body").appendChild(alertBox);
    }
    let alert = `
              <div class="flex mx-2">
                <div
                  class="w-10 h-10 flex items-center justify-center bg-white border border-yellow-300 rounded-full"
                >
                  <span class="text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="flex w-full flex-col items-start justify-center">
                <h3 class="text-lg font-semibold text-gray-900">${message}</h3>
                <p class="text-gray-700 text-justify text-sm">
                  ${description}
                </p>
              </div>
              <button class="close_tail_alert_item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <span class="absolute tail_alert_time_animation bottom-0 left-0 bg-yellow-600 h-1"></span>
        `;


    let newAlert = document.createElement('div');
    newAlert.className = "w-full min-h-max relative overflow-hidden  transition-all tail_alert_item transition-all mb-4 p-4 border border-white rounded-lg  flex-row  bg-gradient-to-b from-yellow-100 to-yellow-50 flex items-start space-x-3 shadow-md";
    newAlert.innerHTML = alert;
    alertBox.prepend(newAlert);
    newAlert.classList.add("active");
    clearAlert(newAlert);
    document.querySelectorAll('.tail_alert_item .close_tail_alert_item').forEach(tail_alert_item => {
        tail_alert_item.addEventListener('click', function () {
            tail_alert_item.parentElement.remove();
            clearAlertBox();
        });
    });
}




function errorMessage(message, description = null) {
    let alertBox = document.querySelector("#alert_boxes_tail_alert");
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = "alert_boxes_tail_alert";
        alertBox.className = "fixed z-50 transition-all flex flex-col items-start justify-start top-0 right-0 h-auto max-h-screen overflow-x-hidden overflow-y-auto w-[200px] sm:w-[500px] p-4";
        document.querySelector("body").appendChild(alertBox);
    }
    let alert = `
              <div class="flex mx-2">
                <div
                  class="w-10 h-10 flex items-center justify-center bg-white border border-red-300 rounded-full"
                >
                  <span class="text-red-500">
                    <svg
                      class="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="flex w-full flex-col items-start justify-center">
                <h3 class="text-lg font-semibold text-gray-900">${message}</h3>
                <p class="text-gray-700 text-justify text-sm">
                  ${description}
                </p>
              </div>
              <button class="close_tail_alert_item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <span class="absolute tail_alert_time_animation bottom-0 left-0 bg-red-600 h-1"></span>
        `;


    let newAlert = document.createElement('div');
    newAlert.className = "w-full min-h-max relative overflow-hidden  transition-all tail_alert_item transition-all mb-4 p-4 border border-white rounded-lg  flex-row  bg-gradient-to-b from-red-100 to-red-50 flex items-start space-x-3 shadow-md";
    newAlert.innerHTML = alert;
    alertBox.prepend(newAlert);
    newAlert.classList.add("active");
    clearAlert(newAlert);
    document.querySelectorAll('.tail_alert_item .close_tail_alert_item').forEach(tail_alert_item => {
        tail_alert_item.addEventListener('click', function () {
            tail_alert_item.parentElement.remove();
            clearAlertBox();
        });
    });


}


