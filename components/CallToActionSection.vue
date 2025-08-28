<template>
  <section class="py-20 bg-yellow-50">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Turn Your Talent Into Income?</h2>
      <p class="text-xl text-gray-600 mb-8">Join thousands of professionals who are building successful careers on our platform</p>
      <Button 
        class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
        @click="handleJoinNow"
      >
        Join Talent Income Today
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleJoinNow = () => {
  navigateTo('/signup')
}
</script>