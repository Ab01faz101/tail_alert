document.addEventListener("DOMContentLoaded", () => {
  // گوش دادن به رویدادهای Livewire
  Livewire.on("tail_alert_success", (data) => showMessage("success", ...data));
  Livewire.on("tail_alert_error", (data) => showMessage("error", ...data));
  Livewire.on("tail_alert_info", (data) => showMessage("info", ...data));
  Livewire.on("tail_alert_warning", (data) => showMessage("warning", ...data));
});

// پیکربندی انواع هشدار
const alertConfig = {
  info: {
    borderColor: "border-blue-300",
    textColor: "text-blue-500",
    gradientFrom: "from-blue-100",
    gradientTo: "to-blue-50",
    timeBg: "bg-blue-600",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>
    `,
  },
  success: {
    borderColor: "border-green-300",
    textColor: "text-green-500",
    gradientFrom: "from-green-100",
    gradientTo: "to-green-50",
    timeBg: "bg-green-600",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    `,
  },
  warning: {
    borderColor: "border-yellow-300",
    textColor: "text-yellow-500",
    gradientFrom: "from-yellow-100",
    gradientTo: "to-yellow-50",
    timeBg: "bg-yellow-600",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    `,
  },
  error: {
    borderColor: "border-red-300",
    textColor: "text-red-500",
    gradientFrom: "from-red-100",
    gradientTo: "to-red-50",
    timeBg: "bg-red-600",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
        <path clip-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill-rule="evenodd"/>
      </svg>
    `,
  },
};

// ایجاد یا دریافت کانتینر هشدارها
function getAlertContainer() {
  let container = document.querySelector("#alert_boxes_tail_alert");
  if (!container) {
    container = document.createElement("div");
    container.id = "alert_boxes_tail_alert";
    container.className =
      "fixed z-50 transition-all flex flex-col items-start justify-start top-0 right-0 h-auto max-h-screen overflow-x-hidden overflow-y-auto min-w-max w-full sm:w-[500px] p-4";
    document.body.appendChild(container);
  }
  return container;
}

// حذف کانتینر در صورتی که هیچ هشداری وجود نداشته باشد
function checkAndRemoveContainer() {
  const container = document.querySelector("#alert_boxes_tail_alert");
  if (container && container.children.length === 0) {
    container.remove();
  }
}

// تنظیم حذف خودکار هشدار همراه با انیمیشن
function clearAlert(alertElem) {
  const timeAnimation = alertElem.querySelector(".tail_alert_time_animation");
  let timeoutId = setTimeout(() => {
    alertElem.remove();
    checkAndRemoveContainer();
  }, 5000);

  alertElem.addEventListener("mousemove", () => {
    clearTimeout(timeoutId);
    timeAnimation.style.animationPlayState = "paused";
  });

  alertElem.addEventListener("mouseleave", () => {
    timeAnimation.style.animation = "none";
    // restart animation
    void timeAnimation.offsetWidth;
    timeAnimation.style.animation = "fullWidthAnimate 5s ease";
    timeoutId = setTimeout(() => {
      alertElem.remove();
      checkAndRemoveContainer();
    }, 5000);
  });
}

// ایجاد المان هشدار بر اساس نوع، پیام و توضیحات
function createAlertElement(type, message, description) {
  const config = alertConfig[type];
  const iconHTML = config.icon;
  const alertHTML = `
    <div class="flex mx-2">
      <div class="w-10 h-10 flex items-center justify-center bg-white ${config.borderColor} rounded-full">
        <span class="${config.textColor}">
          ${iconHTML}
        </span>
      </div>
    </div>
    <div class="flex flex-col items-start justify-center w-full">
      <h3 class="text-lg font-semibold text-gray-900">${message}</h3>
      ${description ? `<p class="text-gray-700 text-justify text-sm">${description}</p>` : ""}
    </div>
    <button class="close_tail_alert_item">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <span class="absolute tail_alert_time_animation bottom-0 left-0 ${config.timeBg} h-1"></span>
  `;

  const alertElem = document.createElement("div");
  alertElem.className = `
    w-full min-h-max relative overflow-hidden transition-all tail_alert_item mb-4 p-4 border border-white rounded-lg flex flex-row items-start space-x-3 shadow-md
    bg-gradient-to-b ${config.gradientFrom} ${config.gradientTo}
  `;
  alertElem.innerHTML = alertHTML;
  return alertElem;
}

// تابع عمومی برای نمایش هشدار
function showMessage(type, data) {
  const { message, description } = data;
  const container = getAlertContainer();
  const alertElem = createAlertElement(type, message, description);
  container.prepend(alertElem);
  alertElem.classList.add("active");
  clearAlert(alertElem);

  // اضافه کردن رویداد بسته شدن
  const closeBtn = alertElem.querySelector(".close_tail_alert_item");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      alertElem.remove();
      checkAndRemoveContainer();
    });
  }
}
