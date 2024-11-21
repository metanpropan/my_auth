<script>
import { ref } from "vue";
import CountriesTable from "./CountriesTable.vue";
import CountryAddForm from "./CountryAddForm.vue"

export default {
  name: "ListCountries",
  components: {
    CountriesTable,
    CountryAddForm,
  },
  setup() {
    let listCountries = ref([]);    
    let isDisable = ref("");

    let addCountry = (name, description) => {
      listCountries.value.push({
        id: Date.now(),
        name: name,
        description: description,
      });
    };

    let deleteCountry = (id) => {
            var result = confirm("Вы действительно хотите удалить описание?");
            if (result) {
                listCountries.value.splice(
                    listCountries.value.findIndex((item) => item.id == id), 1);
            }
        };
        
    return {
      addCountry,
      deleteCountry,
      isDisable,
      listCountries,
    };
  },  
};
</script>
<template>
  <div>
    <CountryAddForm @addCountry="addCountry" />
    <table class="w3-table w3-striped">
      <tbody>
        <tr>
          <th>Название</th>
          <th>Краткое описние</th>
          <th>Действия</th>
        </tr>
        <CountriesTable v-for="country in listCountries" 
                        :key="country.id" 
                        :id="country.id" 
                        :name="country.name"
                        :description="country.description" 
                        @deleteCountry="deleteCountry"/> 
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
