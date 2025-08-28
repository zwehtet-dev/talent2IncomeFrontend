<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-gray-900">
            Talent 2 Income
          </NuxtLink>
        </div>
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/find-work" class="text-gray-700 hover:text-gray-900 transition-colors">
            Find Work
          </NuxtLink>
          <NuxtLink to="/post-job" class="text-gray-700 hover:text-gray-900 transition-colors">
            Post a Job
          </NuxtLink>
          <NuxtLink to="/how-it-works" class="text-gray-700 hover:text-gray-900 transition-colors">
            How It Works
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/signin" class="text-gray-700 hover:text-gray-900 transition-colors">
            Sign In
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>