<script setup lang="ts">
const { footerLinks } = useNavigation()
</script>
<template>
    <UFooter :ui="{
      bottom: { wrapper: 'border-t border-gray-200 dark:border-gray-800', container: '!py-6' },
      top: { wrapper: 'border-t border-gray-200 dark:border-gray-800', container: 'py-8 lg:py-12' }
    }">
        <template #top>
            <div class="flex flex-wrap">
                <UFooterColumns :links="[footerGroups]" v-for="(footerGroups, index) in footerLinks" :key="index" class="mb-12 w-1/2 sm:w-1/3 lg:w-1/5">
</UFooterColumns>
                <NewsletterForm class="sm:mx-auto lg:w-2/5"/>
            </div>
        </template>
        <template #left>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2016-{{ new Date().getFullYear() }} Nuxt - <NuxtLink class="hover:underline" to="https://github.com/nuxt/nuxt/blob/main/LICENSE" target="_blank">
                    MIT License
</NuxtLink> </p>
        </template>
        <template #right>
            <UButton aria-label="Nuxt on X" to="https://x.com/nuxt_js" target="_blank" icon="i-simple-icons-x" v-bind="($ui.button.secondary as any)"/>
            <UButton aria-label="Nuxt on Discord" to="https://discord.com/invite/ps2h6QT" target="_blank" icon="i-simple-icons-discord" v-bind="($ui.button.secondary as any)"/>
            <UButton aria-label="Nuxt on GitHub" to="https://github.com/nuxt/nuxt" target="_blank" icon="i-simple-icons-github" v-bind="($ui.button.secondary as any)"/>
        </template>
    </UFooter>
</template>
