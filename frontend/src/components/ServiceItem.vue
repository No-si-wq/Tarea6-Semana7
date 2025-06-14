<script setup>
    import { useAppointmentsStore } from '../stores/appointments'

    const appointments = useAppointmentsStore()
    defineProps({
        service: {
            type: Object
        }
    })
</script>

<template>
    <div
        class="p-5 space-y-5 rounded-lg cursor-pointer bg-white text-black"
        :class="appointments.isServiceSelected(service._id) ? 'bg-blue-500 text-black' : 'bg-white'"
        @click="appointments.onServiceSelected(service)"
    >
        <p class="text-2xl font-black">{{ service.nombre }}</p>
        <p class="text-4xl font-black text-blue-600">{{ service.edad }}</p>
    </div>
</template>