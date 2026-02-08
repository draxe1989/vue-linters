<template>
  <div>
    <DataTable :value="products" table-style="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
  import { DataTable, Column } from 'primevue'

  const products = [
    { code: 'f230fh1g3', name: 'P100', category: 'Office', quantity: 65 },
    { code: 'f230fh1g4', name: 'P200', category: 'Office', quantity: 24 },
    { code: 'f230fh1g5', name: 'P300', category: 'Office', quantity: 98 },
  ]
</script>
