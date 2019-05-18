<template>
  <div class="subnav_box">
    <div class="nav_content" :class="{'detail':isIndex=='0'}">
      <img v-if="isIndex==2" @click="goIndex" src="../assets/img/mlogo.png" />
      <router-link v-else tag="div" class="logo" style="cursor: pointer;" target="_target " to="/"></router-link>
      <!-- <div @click="this.$router.push('/')" class="logo" ></div> -->
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isIndex: {
        default () {
          return 0
        },
        type: Number
      }
    },
    name: 'Header',
    data: () => {
      return {

      }
    },
    methods:{
      goIndex(){
        this.$router.push('/mindex');
      }
    }
  }

</script>
<style lang="sass">
</style>
