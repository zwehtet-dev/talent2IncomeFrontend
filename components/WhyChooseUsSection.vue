<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Find Work Fast -->
        <div class="text-center">
          <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BoltIcon class="w-8 h-8 text-yellow-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Find Work Fast</h3>
          <p class="text-gray-600 text-sm">Browse thousands of opportunities that match your skills and availability</p>
        </div>

        <!-- Showcase Your Skills -->
        <div class="text-center">
          <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <DocumentTextIcon class="w-8 h-8 text-yellow-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Showcase Your Skills</h3>
          <p class="text-gray-600 text-sm">Highlight your expertise and experience</p>
        </div>

        <!-- Secure Payments -->
        <div class="text-center">
          <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <LockClosedIcon class="w-8 h-8 text-yellow-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
          <p class="text-gray-600 text-sm">Get paid safely through our protected payment system</p>
        </div>

        <!-- Build Your Portfolio -->
        <div class="text-center">
          <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BriefcaseIcon class="w-8 h-8 text-yellow-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Build Your Portfolio</h3>
          <p class="text-gray-600 text-sm">Enhance your professional reputation</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  BoltIcon, 
  DocumentTextIcon, 
  LockClosedIcon, 
  BriefcaseIcon 
} from '@heroicons/vue/24/outline'
</script>