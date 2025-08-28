<template>
  <div class="bg-gray-50 min-h-screen">
    <AppNavigation />
    
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
        <p class="text-xl text-gray-600">Get started in three simple steps</p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <!-- Step 1 -->
        <div class="text-center">
          <div class="w-20 h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            1
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Create Your Profile</h3>
          <p class="text-gray-600 mb-6">Sign up and showcase your skills, experience, and portfolio. Add your best work samples and set your rates.</p>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <UserCircleIcon class="w-12 h-12 text-yellow-500 mx-auto mb-2" />
            <p class="text-sm text-gray-500">Complete profile setup</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="text-center">
          <div class="w-20 h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            2
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Find & Apply for Jobs</h3>
          <p class="text-gray-600 mb-6">Browse opportunities that match your expertise. Submit compelling proposals and connect with clients.</p>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <MagnifyingGlassIcon class="w-12 h-12 text-yellow-500 mx-auto mb-2" />
            <p class="text-sm text-gray-500">Search and apply</p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="text-center">
          <div class="w-20 h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            3
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Complete Work & Get Paid</h3>
          <p class="text-gray-600 mb-6">Deliver quality work on time and receive secure payments. Build your reputation and grow your business.</p>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <CurrencyDollarIcon class="w-12 h-12 text-yellow-500 mx-auto mb-2" />
            <p class="text-sm text-gray-500">Secure payments</p>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="bg-white rounded-lg p-8 shadow-sm">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Platform Features</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="flex items-start space-x-4">
            <ShieldCheckIcon class="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Secure Payments</h4>
              <p class="text-gray-600 text-sm">All payments are processed securely with escrow protection for both parties.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <ChatBubbleLeftRightIcon class="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Direct Communication</h4>
              <p class="text-gray-600 text-sm">Built-in messaging system to communicate directly with clients and freelancers.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <StarIcon class="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Rating System</h4>
              <p class="text-gray-600 text-sm">Build your reputation through client reviews and ratings.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <ClockIcon class="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Time Tracking</h4>
              <p class="text-gray-600 text-sm">Built-in time tracking tools for hourly projects.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <DocumentCheckIcon class="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Contract Management</h4>
              <p class="text-gray-600 text-sm">Clear contracts and milestone management for all projects.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <AcademicCapIcon class="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">Skill Verification</h4>
              <p class="text-gray-600 text-sm">Verify your skills with tests and certifications.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p class="text-xl text-gray-600 mb-8">Join thousands of professionals already using our platform</p>
        <div class="space-x-4">
          <Button 
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
            @click="() => navigateTo('/signup')"
          >
            Join as Freelancer
          </Button>
          <Button 
            variant="outline"
            class="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-full text-lg font-semibold"
            @click="() => navigateTo('/post-job')"
          >
            Hire Talent
          </Button>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { 
  UserCircleIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  ClockIcon,
  DocumentCheckIcon,
  AcademicCapIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: 'How It Works - Talent Income',
  meta: [
    { name: 'description', content: 'Learn how Talent Income works in three simple steps. Create your profile, find work, and get paid securely.' }
  ]
})
</script>