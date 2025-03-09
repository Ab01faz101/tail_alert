@if (session('alert'))
    @php
        $type = session('alert.type'); // success, error, warning, info
        $message = session('alert.message');
    @endphp

    <section x-data="{ show: true }">
        <section x-show="show" x-cloak x-transition.opacity.scale.75
                 class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">

            <section class="w-[90%] md:w-[40%] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100">
                <!-- Header -->
                <header class="flex items-center justify-between px-6 py-4"
                        :class="{
                            'bg-gradient-to-r from-green-500 to-green-600 text-white': '{{ $type }}' === 'success',
                            'bg-gradient-to-r from-red-500 to-red-600 text-white': '{{ $type }}' === 'error',
                            'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white': '{{ $type }}' === 'warning',
                            'bg-gradient-to-r from-blue-500 to-blue-600 text-white': '{{ $type }}' === 'info'
                        }">
                    <span class="text-lg font-semibold">
                        @if ($type === 'success') 🎉 Successful Operation
                        @elseif ($type === 'error') 😒 An Error Occurred!
                        @elseif ($type === 'warning') ⚠ Warning
                        @elseif ($type === 'info') ℹ Information
                        @endif
                    </span>
                    <button @click="show = false" class="p-2 rounded-full hover:bg-white/20 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                             stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </header>

                <!-- Body -->
                <div class="flex flex-col items-center p-6 text-center space-y-4">
                    <!-- SVG Animation -->
                    <div class="w-24 h-24 flex items-center justify-center rounded-full shadow-inner"
                         :class="{
                            'bg-green-100 text-green-600': '{{ $type }}' === 'success',
                            'bg-red-100 text-red-600': '{{ $type }}' === 'error',
                            'bg-yellow-100 text-yellow-600': '{{ $type }}' === 'warning',
                            'bg-blue-100 text-blue-600': '{{ $type }}' === 'info'
                        }">
                        <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  :d="{
                                    'success': 'M5 13l4 4L19 7',
                                    'error': 'M6 18L18 6M6 6l12 12',
                                    'warning': 'M12 8v4m0 4h.01',
                                    'info': 'M12 8v4m0 4h.01'
                                  }['{{ $type }}']"
                                  stroke-dasharray="22"
                                  stroke-dashoffset="22">
                                <animate attributeName="stroke-dashoffset" from="22" to="0" dur="0.5s" begin="0.2s" fill="freeze"/>
                            </path>
                        </svg>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-800">{{ $message }}</h2>
                    <p class="text-gray-600">Please take the necessary action.</p>
                </div>

                <!-- Footer -->
                <footer class="flex justify-center p-4 bg-gray-100 border-t">
                    <button @click="show = false"
                            class="px-6 py-2 text-white text-lg font-semibold rounded-lg shadow-md transition duration-200"
                            :class="{
                                'bg-green-500 hover:bg-green-600': '{{ $type }}' === 'success',
                                'bg-red-500 hover:bg-red-600': '{{ $type }}' === 'error',
                                'bg-yellow-500 hover:bg-yellow-600': '{{ $type }}' === 'warning',
                                'bg-blue-500 hover:bg-blue-600': '{{ $type }}' === 'info'
                            }">
                        Got it
                    </button>
                </footer>
            </section>
        </section>
    </section>
@endif
