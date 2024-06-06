<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Subscribe to our newsletter'
  },
  description: {
    type: String,
    default: 'Stay updated on new releases and features, guides, and community updates.'
  }
})

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit () {
  if (loading.value) { return }
  loading.value = true

  $fetch('https://api.nuxt.com/newsletter/subscribe', {
    method: 'POST',
    body: { email: email.value }
  }).then(() => {
    toast.add({ title: 'Subscription pending', description: 'Please check your emails to confirm your subscription.', color: 'green' })
    email.value = ''
  }).catch((err) => {
    const description = err.data?.message || 'Something went wrong. Please try again later.'
    toast.add({ title: 'Subscription failed', description, color: 'red' })
  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <form class="sm:w-2/3" @submit.prevent="onSubmit">
    <UFormGroup name="email" size="xl" :ui="{ label: { base: 'font-semibold' }, container: 'mt-3' }">
      <p class="font-semibold text-center text-sm lg:text-left">
        {{ label }}
      </p>
      <p class="mt-4 text-center text-sm lg:text-left">
        {{ description }}
      </p>
      <UInput
        v-model="email"
        type="email"
        placeholder="you@domain.com"
        :ui="{ icon: { trailing: { pointer: '' } } }"
        required
        autocomplete="off"
        class="mt-2"
      >
        <template #trailing>
          <UButton type="submit" size="xs" color="black" :label="loading ? 'Subscribing' : 'Subscribe'" :loading="loading" />
        </template>
      </UInput>
    </UFormGroup>
  </form>
</template>
