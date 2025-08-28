<template>
    <div class="bg-gray-50 min-h-screen">
        <AppNavigation />

        <div class="max-w-4xl mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">Post a Job</h1>
                <p class="text-xl text-gray-600">Find the perfect freelancer for your project</p>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-8">
                <form @submit.prevent="handleSubmit" class="space-y-8">
                    <!-- Job Title -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                            Job Title *
                        </label>
                        <input id="title" v-model="form.title" type="text" required
                            placeholder="e.g. Build a responsive website"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    </div>

                    <!-- Category -->
                    <div>
                        <label for="category" class="block text-sm font-medium text-gray-700 mb-2">
                            Category *
                        </label>
                        <select id="category" v-model="form.category" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            <option value="">Select a category</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-development">Mobile Development</option>
                            <option value="design">Design & Creative</option>
                            <option value="writing">Writing & Translation</option>
                            <option value="marketing">Marketing & Sales</option>
                            <option value="data">Data & Analytics</option>
                            <option value="admin">Admin & Customer Support</option>
                        </select>
                    </div>

                    <!-- Description -->
                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                            Project Description *
                        </label>
                        <textarea id="description" v-model="form.description" rows="6" required
                            placeholder="Describe your project in detail..."
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                    </div>

                    <!-- Skills Required -->
                    <div>
                        <label for="skills" class="block text-sm font-medium text-gray-700 mb-2">
                            Skills Required
                        </label>
                        <input id="skills" v-model="form.skills" type="text"
                            placeholder="e.g. JavaScript, React, Node.js (comma separated)"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    </div>

                    <!-- Budget -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="budget-type" class="block text-sm font-medium text-gray-700 mb-2">
                                Budget Type *
                            </label>
                            <select id="budget-type" v-model="form.budgetType" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                <option value="">Select budget type</option>
                                <option value="fixed">Fixed Price</option>
                                <option value="hourly">Hourly Rate</option>
                            </select>
                        </div>

                        <div v-if="form.budgetType === 'fixed'">
                            <label for="budget-amount" class="block text-sm font-medium text-gray-700 mb-2">
                                Budget Amount ($) *
                            </label>
                            <input id="budget-amount" v-model="form.budgetAmount" type="number" min="0" step="0.01"
                                placeholder="1000"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        </div>

                        <div v-if="form.budgetType === 'hourly'" class="space-y-4">
                            <div>
                                <label for="hourly-min" class="block text-sm font-medium text-gray-700 mb-2">
                                    Min Hourly Rate ($) *
                                </label>
                                <input id="hourly-min" v-model="form.hourlyMin" type="number" min="0" step="0.01"
                                    placeholder="25"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            </div>
                            <div>
                                <label for="hourly-max" class="block text-sm font-medium text-gray-700 mb-2">
                                    Max Hourly Rate ($) *
                                </label>
                                <input id="hourly-max" v-model="form.hourlyMax" type="number" min="0" step="0.01"
                                    placeholder="50"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            </div>
                        </div>
                    </div>

                    <!-- Timeline -->
                    <div>
                        <label for="timeline" class="block text-sm font-medium text-gray-700 mb-2">
                            Project Timeline *
                        </label>
                        <select id="timeline" v-model="form.timeline" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            <option value="">Select timeline</option>
                            <option value="less-than-1-week">Less than 1 week</option>
                            <option value="1-2-weeks">1-2 weeks</option>
                            <option value="2-4-weeks">2-4 weeks</option>
                            <option value="1-3-months">1-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="more-than-6-months">More than 6 months</option>
                        </select>
                    </div>

                    <!-- Experience Level -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Experience Level Required *
                        </label>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input v-model="form.experienceLevel" type="radio" value="entry"
                                    class="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300">
                                <span class="ml-2 text-sm text-gray-700">Entry Level - Looking for someone relatively
                                    new to this field</span>
                            </label>
                            <label class="flex items-center">
                                <input v-model="form.experienceLevel" type="radio" value="intermediate"
                                    class="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300">
                                <span class="ml-2 text-sm text-gray-700">Intermediate - Looking for substantial
                                    experience in this field</span>
                            </label>
                            <label class="flex items-center">
                                <input v-model="form.experienceLevel" type="radio" value="expert"
                                    class="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300">
                                <span class="ml-2 text-sm text-gray-700">Expert - Looking for comprehensive and deep
                                    expertise in this field</span>
                            </label>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="flex justify-end space-x-4">
                        <Button type="button" variant="outline" @click="() => navigateTo('/')">
                            Cancel
                        </Button>
                        <Button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3">
                            Post Job
                        </Button>
                    </div>
                </form>
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
const form = reactive({
    title: '',
    category: '',
    description: '',
    skills: '',
    budgetType: '',
    budgetAmount: '',
    hourlyMin: '',
    hourlyMax: '',
    timeline: '',
    experienceLevel: ''
})

const handleSubmit = () => {
    // Handle form submission
    console.log('Job posted:', form)
    // Redirect to job listing or dashboard
    navigateTo('/find-work')
}

useHead({
    title: 'Post a Job - Talent Income',
    meta: [
        { name: 'description', content: 'Post your project and find the perfect freelancer. Get quality work done by skilled professionals.' }
    ]
})
</script>