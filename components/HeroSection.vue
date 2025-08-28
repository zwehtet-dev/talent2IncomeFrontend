<template>
  <section class="bg-white py-20">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">
        Turn Your Talent Into Income
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Connect with clients who value your skills
      </p>
      <Button 
        class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
        @click="handleGetStarted"
      >
        Get Started
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleGetStarted = () => {
  // Navigate to signup or show modal
  navigateTo('/signup')
}
</script>