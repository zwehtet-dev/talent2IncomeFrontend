<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">Featured Opportunities</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Website Development -->
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <CodeBracketIcon class="w-6 h-6 text-yellow-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Website Development</h3>
              <p class="text-gray-600 text-sm mb-3">Create a responsive e-commerce website with payment integration</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-semibold text-gray-900">$1,500 - $3,000</span>
                <Button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Photography -->
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <CameraIcon class="w-6 h-6 text-yellow-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Product Photography</h3>
              <p class="text-gray-600 text-sm mb-3">Professional photos of fashion accessories for online store</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-semibold text-gray-900">$500 - $800</span>
                <Button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Writing -->
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <PencilIcon class="w-6 h-6 text-yellow-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Content Writing</h3>
              <p class="text-gray-600 text-sm mb-3">Write engaging blog posts for a health and wellness brand</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-semibold text-gray-900">$50 - $100 per article</span>
                <Button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Translation Services -->
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <LanguageIcon class="w-6 h-6 text-yellow-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Translation Services</h3>
              <p class="text-gray-600 text-sm mb-3">Translate marketing materials from English to Spanish</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-semibold text-gray-900">$25 - $50 per page</span>
                <Button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CodeBracketIcon, 
  CameraIcon, 
  PencilIcon, 
  LanguageIcon 
} from '@heroicons/vue/24/outline'
</script>