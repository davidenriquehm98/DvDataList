<template>
  <v-container
    fill-height >
    <v-layout
      justify-center
      wrap >
      <v-flex
        xs12
        md10
        offset-md-1
        style="background: white;" >
        <span class="display-1" >
          Dv Data List
          <v-chip
            label
            outline
            color="red" >
            <strong>
              dv-data-list
            </strong>
          </v-chip>
        </span>
        <br>
        <slot name="head-line" />
        <example1 ref="ex1" />
        <v-card class="px-2" >
          <span class="font-weight-medium" style="color: #cfcdcd;" >
            > API
          </span>
          <dv-data-list :data="data" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { Api } from './API'
import Example1 from './components/example1'
export default {
  name: 'App',
  components: {
    Example1
  },
  data () {
    return {
      data: [ ...Api ]
    }
  }
}
</script>
<style>
  body {
    background-color: #072d1a;
    background-image: url("https://www.entropiacreatividad.com/wp-content/uploads/2017/12/fondo-web-entropia-1920x1200-grisoscuro3-1200x900.png");
    background-repeat: repeat;
    font-family: 'Varela Round', sans-serif;
  }
</style>
