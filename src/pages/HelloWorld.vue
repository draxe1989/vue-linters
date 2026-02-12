<template>
  <div>
    <div class="mb-4">
      <Button label="load-data" :loading="loading" @click="getData" />
    </div>
    <div v-if="error">{{ error }}</div>
    <DataTable
      v-else
      size="small"
      :value="products"
      table-style="min-width: 50rem"
      :loading="loading"
    >
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
  import { _fetch, API_URL } from '@/api'
  import { Button, DataTable, Column } from 'primevue'
  import { ref } from 'vue'
  const products = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function getData() {
    loading.value = true
    error.value = null
    try {
      const res = await _fetch(API_URL + '/products')
      if (!res.ok) throw Error(await res.json())
      const result = await res.json()
      products.value = result
    } catch (e) {
      error.value = (e as { message: string }).message
    } finally {
      loading.value = false
    }
  }
</script>
