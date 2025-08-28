<template>
  <div class="bg-gray-50 min-h-screen">
    <AppNavigation />
    
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Find Work</h1>
        <p class="text-xl text-gray-600">Discover opportunities that match your skills</p>
      </div>

      <!-- Search and Filters -->
      <div class="bg-white rounded-lg p-6 shadow-sm mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Search Jobs</label>
            <input 
              type="text" 
              placeholder="Enter keywords..." 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>All Categories</option>
              <option>Web Development</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Marketing</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>Any Budget</option>
              <option>$0 - $500</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <Button class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2">
            Search Jobs
          </Button>
        </div>
      </div>

      <!-- Job Listings -->
      <div class="space-y-6">
        <JobCard 
          v-for="job in jobs" 
          :key="job.id" 
          :job="job" 
        />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
interface Job {
  id: number
  title: string
  description: string
  budget: string
  category: string
  postedDate: string
  proposals: number
}

const jobs: Job[] = [
  {
    id: 1,
    title: "E-commerce Website Development",
    description: "Looking for an experienced developer to build a modern e-commerce website with payment integration and inventory management.",
    budget: "$2,000 - $4,000",
    category: "Web Development",
    postedDate: "2 days ago",
    proposals: 12
  },
  {
    id: 2,
    title: "Logo Design for Tech Startup",
    description: "Need a creative designer to create a modern, professional logo for our new tech startup. Should be scalable and work across all platforms.",
    budget: "$300 - $800",
    category: "Design",
    postedDate: "1 day ago",
    proposals: 8
  },
  {
    id: 3,
    title: "Content Writing for Health Blog",
    description: "Seeking an experienced health and wellness writer to create engaging blog posts. Must have knowledge of SEO best practices.",
    budget: "$50 - $100 per article",
    category: "Writing",
    postedDate: "3 hours ago",
    proposals: 5
  }
]

useHead({
  title: 'Find Work - Talent Income',
  meta: [
    { name: 'description', content: 'Browse thousands of job opportunities and find work that matches your skills.' }
  ]
})
</script>