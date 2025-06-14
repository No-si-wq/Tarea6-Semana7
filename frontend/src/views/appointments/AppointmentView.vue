<script setup>
   import SelectedService from '../../components/SelectedService.vue'
   import { useAppointmentsStore } from '../../stores/appointments'

   const appointments = useAppointmentsStore()
</script>

<template>
  <h2 class="text-4xl font-extrabold text-black">Registros de Personas</h2>
  <p class="text-black text-lg">A Continuación se le muestra una lista de personas</p>

  <h3 class="text-3xl font-extrabold text-black">Personas</h3>

  <p v-if="appointments.noServicesSelected" 
  class="text-black text-2xl text-center">No hay personas Seleccionadas</p>

  <div v-else class="grid gap-5">
    <SelectedService
        v-for="service in appointments.services"
        :key="service._id"
        :service="service"

    />
  </div>

</template>


