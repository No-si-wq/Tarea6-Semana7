import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import ServicesAPI from '../api/ServicesApi'
export const useServicesStore = defineStore('services', () => {

    const services = ref([])
    onMounted(async () =>{
        try{
            const { data } = await ServicesAPI.all()
            services.value = data
        } catch(error) {
            console.log(error)
        }
    })

    return { services }
})