<script lang="ts">
	import Footer from '@/components/layout/Footer.svelte';
	import Header from '@/components/layout/Header.svelte';
  import { fade } from 'svelte/transition'
  import './tailwindcss.svelte';
  import Router from "svelte-spa-router"
  import routes from "@/routes"
</script>

<div in:fade>
  <Header/>
    <Router {routes} />
  <Footer/>
</div>