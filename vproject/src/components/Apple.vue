<template>
	<div class="div1">
		apple
		
		<slot>hhhh</slot>
	</div>
</template>
<script>
export default {
  name: 'Apple',
  data () {
    return {
      msg: 'Welcome to Apple'
    }
  },
  methods:{
  	getParam(){
  		console.log(this.$route.params)
  	}
  }
}
</script>
<style>
	.div1{
	width:100px;
	height:200px;
	border:1px solid red;
	}
</style>