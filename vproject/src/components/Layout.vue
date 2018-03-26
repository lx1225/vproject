<template>
	<div id="app">
		<div class="app-header">
			<div class="header-list">
				<ul>
					<li>登录</li>
					<li>注册</li>
					<li>退出</li>
				</ul>
			</div>
		</div>
		<div class="app-main">
			<router-view></router-view>
		</div>
		<div class="app-footer">
			<p>@版权所有530</p>
		</div>
		<apple></apple>
	</div>
</template>
<script>
import Apple from "./Apple"
	export default{
		components:{
			Apple
		},
		name:'Layout',
		data () {
		    return {
		      msg: 'Welcome to Apple'
		    }
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	.app-header{
		position:relative;
		width:100%;
		height:80px;
		border:1px solid red;
	}
	.header-list{
		position:absolute;
		right:0;
		top:0;
		width:200px;
		height:80px;
		line-height:80px;
		background:#eeccee
	}
	.header-list ul{
		width:100%;
		height:100%;
	}
	.header-list ul li{
		cursor:pointer;
		list-style:none;
		float:left;
		margin-right:20px
	}
	.app-footer{
		width:100%;
		border:1px solid black;
		height:100px;
		line-height:100px;
		background:#efefef
	}
	.app-footer p{
		margin-left:48%;
	}
</style>