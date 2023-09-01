<script>
import './assets/tailwind.css'
</script>

<template>
  <div class="w-11/12 max-w-md bg-gradient-to-br from-teal-400 to-indigo-700 text-white mx-auto mt-20 mb-0 rounded-2xl p-3 text-center">
    <div class="w-full my-4 px-4 flex items-center justify-around">
      <input type="text" class="border-0 outline-none bg-blue-200 text-black py-2.5 px-6 pr-12 h-10 rounded-3xl flex-grow mr-4 text-lg placeholder-gray-500" placeholder="Enter city name" spellcheck="false">
      <button class="border-0 outline-none bg-blue-200 rounded-full w-8 h-8 cursor-pointer"><img src="./images/search.png" class="w-4 mx-auto"></button>
    </div>
    <div class="weather p-3">
            <img src="./images/rain.png" class="w-40 mt-8 mx-auto">
            <h1 class="text text-7xl font-medium">22°C</h1>
            <h2 class="city text-5xl font-normal -mt-1">Rabat</h2>
            <div class="details flex items-center justify-between py-0 px-5 mt-12 font-bold">
                
                <div class="col flex items-center text-left">
                    <img src="./images/humidity.png" class="w-10 mr-2">
                    <div>
                        <p class="humidity text-2xl -mt-2">69%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col flex items-center text-left">
                    <img src="./images/wind.png" class="w-10 mr-2">
                    <div>
                        <p class="wind">5 km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
