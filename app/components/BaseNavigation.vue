<script setup lang="ts"></script>
<template>
  <header class="border-b py-4">
    <nav class="container flex items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" densities="x1" src="/icon-green.png" alt="" />
        <span class="font-bold text-3xl">Nuxtcipes</span>
      </NuxtLink>
      <ul class="flex capitalize font-bold gap-6 ml-auto text-xl">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
