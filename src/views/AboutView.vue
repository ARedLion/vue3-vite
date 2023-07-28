<template>
   <div class="about">
      <h1 class="test">This is an about page</h1>
   </div>
</template>

<script setup lang="ts">

   console.log(_?.a)
   console.log($?.b)
   console.log(myGlobalVariable.b)

   import type { RouterOptions } from 'vue-router'

   interface Re extends RouterOptions {
      a: number
      delete: number
   }

   console.log('222')
   // import { defineComponent } from 'vue'

   // export default defineComponent({
   // 	name: 'AboutView',
   // 	setup() {
   // 		return {}
   // 	},
   // })

   let ccc = _ => {
      console.log(ccc)
   }

   let v = {
      a: 1
   }

   const x = _ => {

   }

   let q = _ => {

   }

   let b = $ => {

   }

   let c = (a, b) => {
      b
      // console.log(b)
   }

   let d = apple => {

   }

   queueMicrotask(() => {
      console.log('queueMicrotask')
   });

   let f = () => {

   }

   let g = _ => {

   }

   queueMicrotask(f)

   // console.log(_?.a)
   // console.log($?.b)

   console.log(x)

   const a = 12
   console.log(a)
</script>

<style lang="stylus">

   .test {


      color red

      .aaa {
         color: blue
      }
   }

   :hover
      color: green


   @media (min-width: 1024px) {
      .about {
         min-height: 100vh;
         display: flex;
         align-items: center;
      }
   }
</style>
