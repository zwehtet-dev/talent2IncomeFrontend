<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Talent Income</h3>
          <p class="text-gray-400 text-sm">The premier platform connecting skilled professionals with clients who value quality work</p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">For Talent</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/find-work" class="hover:text-white transition-colors">Find Work</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="hover:text-white transition-colors">Build Portfolio</NuxtLink></li>
            <li><NuxtLink to="/success-stories" class="hover:text-white transition-colors">Success Stories</NuxtLink></li>
            <li><NuxtLink to="/resources" class="hover:text-white transition-colors">Resources</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">For Clients</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/post-job" class="hover:text-white transition-colors">Post a Job</NuxtLink></li>
            <li><NuxtLink to="/find-talent" class="hover:text-white transition-colors">Find Talent</NuxtLink></li>
            <li><NuxtLink to="/enterprise" class="hover:text-white transition-colors">Enterprise Solutions</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:text-white transition-colors">Pricing Plans</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/careers" class="hover:text-white transition-colors">Careers</NuxtLink></li>
            <li><NuxtLink to="/press" class="hover:text-white transition-colors">Press</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Talent Income. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>