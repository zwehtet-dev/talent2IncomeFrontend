<template>
  <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
    <div class="flex justify-between items-start mb-4">
      <div class="flex-1">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ job.title }}</h3>
        <p class="text-gray-600 mb-4">{{ job.description }}</p>
        
        <div class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <span class="flex items-center">
            <CalendarIcon class="w-4 h-4 mr-1" />
            Posted {{ job.postedDate }}
          </span>
          <span class="flex items-center">
            <UserGroupIcon class="w-4 h-4 mr-1" />
            {{ job.proposals }} proposals
          </span>
          <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
            {{ job.category }}
          </span>
        </div>
      </div>
    </div>
    
    <div class="flex justify-between items-center">
      <div class="text-lg font-semibold text-gray-900">
        {{ job.budget }}
      </div>
      <Button 
        class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2"
        @click="handleApply"
      >
        Apply Now
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon, UserGroupIcon } from '@heroicons/vue/24/outline'

interface Job {
  id: number
  title: string
  description: string
  budget: string
  category: string
  postedDate: string
  proposals: number
}

defineProps<{
  job: Job
}>()

const handleApply = () => {
  // Handle job application
  console.log('Apply for job')
}
</script>