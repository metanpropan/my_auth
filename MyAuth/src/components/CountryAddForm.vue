<script>
import { ref } from "vue";
export default {
    name: 'CountryAddForm',
    props: {
        nameCountry: String,
        descriptionCountry: String,
    },
    setup() {
        const nameCountry = ref(""),
              descriptionCountry = ref("");
        return {
            nameCountry,
            descriptionCountry,
        };
    },

    methods: {
        addCountry(nameCountry, descriptionCountry) {
            this.$emit('addCountry', nameCountry, descriptionCountry);
            this.nameCountry = "";
            this.descriptionCountry = "";
        }
    },

    watch: {
        listCountries(newVal) {
            this.listCountries = newVal;
        }
    },

    computed: {
        isDisable() {
            if (this.nameCountry != "" && this.descriptionCountry != "") {
                return this.isDisable = false;
            } else {
                return this.isDisable = true;
            }
        }
    },
}
</script>
<template>
    <div>
        <form @submit.prevent="onSubmit">
            <label class="w3-padding">Название
                <input type="text" 
                        placeholder="Россия" 
                        v-model="nameCountry" />
            </label>
            <label class="w3-padding">Описание
                <input type="text" 
                        placeholder="Самая большая..." 
                        v-model="descriptionCountry" />
            </label>
            <button type="submit" 
                    :disabled=isDisable 
                    @click="addCountry(nameCountry, descriptionCountry)"> Добавить
            </button>
        </form>
    </div>
</template>
<style scoped></style>