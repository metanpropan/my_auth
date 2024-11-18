<script>
import { onUpdated, ref } from "vue";

export default {
  name: "ListCountries",
  setup() {
    const nameCountry = ref(""),    //название страны
          descriptionCountry = ref("");     //описание страны

    let listCountries = ref([]);    // объект для хранения информации по странам
    let i = "";
    let isDisable = ref("");

    let addCountry = (name, description) => {      // функция добавления информации по стране
      listCountries.value.push({
        id: i++,
        name: name,
        description: description,
      });
      nameCountry.value = ""
      descriptionCountry.value = ""
    };

    let deleteCountry = (id) => {      // функция удаления информации по стране
      var result = confirm("Вы действительно хотите удалить описание?");
      if (result) {
        listCountries.value.splice(
          listCountries.value.findIndex((item) => item.id == id),1);
      }
    };

    let changeCountry = (id) => {      // функция изменения информации по стране
    };

    return {
      addCountry,
      deleteCountry,
      changeCountry,
      isDisable,
      listCountries,
      nameCountry,
      descriptionCountry,
    };
  },
  computed: {
    isDisable() {
      if (this.nameCountry != "" && this.descriptionCountry != "") {
        return this.isDisable = false;
      } else {
        return this.isDisable = true;
      }
    }
  }
};
</script>
<template>
  <div>
    <div>
      <form @submit.prevent="onSubmit">
        <label class="w3-padding">Название
        <input
          type="text"
          placeholder="Россия"
          v-model="nameCountry"
        />
        </label>
        <label class="w3-padding">Описание
        <input
          type="text"
          placeholder="Самая большая..."
          v-model="descriptionCountry"
        />
        </label>
        <button
          type="submit"
          :disabled = isDisable
          @click = "addCountry(nameCountry, descriptionCountry)"
        > Добавить </button>
      </form>
    </div>
    <div>
      <table class="w3-table w3-striped">
        <tbody>
          <tr>
            <th>Название</th>
            <th>Краткое описние</th>
            <th>Действия</th>
          </tr>
          <tr v-for="country in listCountries" :key="country.id">
            <td>{{ country.name }}</td>
            <td>{{ country.description }}</td>
            <td>
              <i
                class="fa-solid fa-trash cursor"
                @click="deleteCountry(country.id)"
              ></i>
              <i 
                class="fa-solid fa-pen cursor" 
                @click="changeCountry(country.id)">
              </i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
