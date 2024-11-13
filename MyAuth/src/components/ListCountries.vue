<script>
import { ref } from 'vue'

export default {
    name: 'ListCountries',
    setup() {
        const _NAMECOUNTRY = ref(""), //название страны
              _DESCRIPTIONCOUNTRY = ref("") ; //описание страны

        const _LISTCOUNTRIES = ref([]); // объект для хранения информации по странам

        let addCountry = (name,description) => { // функция добавления информации по стране
            _LISTCOUNTRIES.value.push({
                name: name,
                description: description,
            })  
        };
        let delCountry = (id) => { // функция удаления информации по стране
            var result = confirm('Вы действительно хотите удалить описание?');
            if (result) {
                _LISTCOUNTRIES.value.splice(id,1)
            }
            
        }
    return {
        addCountry,
        delCountry,
        _LISTCOUNTRIES,
        _NAMECOUNTRY,
        _DESCRIPTIONCOUNTRY
    }
    },
    
}
</script>
<template>
    <div class="">
        <div class="">
            <form action="">
                <label class="w3-padding">Название</label>
                <input type="text"
                        placeholder="Введите название страны"
                        v-model="_NAMECOUNTRY">
                <label class="w3-padding">Описание</label>
                <input type="text"
                        placeholder="Описание страны"
                        v-model="_DESCRIPTIONCOUNTRY">
                <input type="button" 
                        value="Добавить" 
                        @click="addCountry(_NAMECOUNTRY,_DESCRIPTIONCOUNTRY)">
            </form>
        </div>
        <div class="">
            <table class="w3-table w3-striped">
                <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Краткое описние</th>
                        <th>Действия</th>
                    </tr>
                    <tr v-for="country in _LISTCOUNTRIES" :key="country.id">
                        <td>{{country.name}}</td>
                        <td>{{country.description}}</td>
                        <td>
                            <i class="fa-solid fa-trash" @click="delCountry(country.id)"></i>
                            <i class="fa-solid fa-pen"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>

</style>