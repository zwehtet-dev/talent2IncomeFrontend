<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">What Our Users Say</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <UserIcon class="w-8 h-8 text-gray-400" />
          </div>
          <p class="text-gray-600 mb-4 italic">
            "Talent Income transformed my freelance career. I've found my income and found amazing clients who value my design skills."
          </p>
          <h4 class="font-semibold text-gray-900">Sarah Johnson</h4>
        </div>

        <!-- Testimonial 2 -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <UserIcon class="w-8 h-8 text-gray-400" />
          </div>
          <p class="text-gray-600 mb-4 italic">
            "As a developer, I was struggling to find consistent work. Now I have more projects than I can handle for a steady income stream."
          </p>
          <h4 class="font-semibold text-gray-900">Michael Chen</h4>
        </div>

        <!-- Testimonial 3 -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <UserIcon class="w-8 h-8 text-gray-400" />
          </div>
          <p class="text-gray-600 mb-4 italic">
            "The secure payment system gives me peace of mind, and the platform makes it easy to showcase my writing portfolio to potential clients."
          </p>
          <h4 class="font-semibold text-gray-900">Emma Rodriguez</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/outline'
</script>