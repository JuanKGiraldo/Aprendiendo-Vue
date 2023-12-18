<template>
  <div v-for="data in dataBlog" :key="data.name">
    <h2>{{ data.title }}</h2>
    <p>{{ data.description }}</p>
  </div>
</template>
<script setup>
import { dataBlog } from "../util/dataBlog";
</script>
