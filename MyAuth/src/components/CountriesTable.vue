<script>
import { ref } from "vue";
export default {
    name: 'CountriesTable',
    props: {
        id: Number,
        name: String,
        description: String,
    },
    setup() {
        
    },
    methods: {
    deleteCountry (id) {
        this.$emit('deleteCountry', id)
    }  
  },
}
</script>
<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ description }}</td>
        <td>
            <i class="fa-solid fa-trash cursor" @click="deleteCountry(id)"></i>
            <i class="fa-solid fa-pen cursor" @click="changeCountry(id)">
            </i>
        </td>
    </tr>
</template>
<style scoped>
.cursor {
    cursor: pointer;
}
</style>