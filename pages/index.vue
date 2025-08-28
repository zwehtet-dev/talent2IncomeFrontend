<template>
  <div class="bg-gray-50">
    <!-- Navigation -->
    <AppNavigation />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Why Choose Us Section -->
    <WhyChooseUsSection />

    <!-- How It Works Section -->
    <HowItWorksSection />

    <!-- Featured Opportunities Section -->
    <FeaturedOpportunitiesSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Call to Action Section -->
    <CallToActionSection />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Page-specific meta
useHead({
  title: 'Talent Income - Turn Your Talent Into Income',
  meta: [
    { name: 'description', content: 'Connect with clients who value your skills. Join thousands of professionals building successful careers.' }
  ]
})
</script>