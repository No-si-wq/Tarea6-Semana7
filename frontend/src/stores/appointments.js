import { ref, computed } from 'vue'
import { defineStore } from 'pinia' 

export const useAppointmentsStore = defineStore('appointments', () => {

    const services = ref([])

    function onServiceSelected(service) {
        if(services.value.some(selectedService => selectedService._id === service._id)){
            services.value = services.value.filter(selectedService => selectedService._id !== service._id )
        }else{
            services.value.push(service)
        }
    }
    const isServiceSelected = computed(() => {
        return (id) => services.value.some( service => service._id === id )
    })

    const noServicesSelected = computed(() => services.value.length === 0)

    return{
        services,
        onServiceSelected,
        isServiceSelected,
        noServicesSelected,
    }
})