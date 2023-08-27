<script>
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  
  import Home from './routes/Home.svelte';

  import Router from 'svelte-spa-router'

  const routes = {
    // Exact path
    '/': Home,

    // // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // // Wildcard parameter
    // '/book/*': Book,

    // // Catch-all
    // // This is optional, but if present it must be the last
    // '*': NotFound,
}
</script>



<main class="flex flex-col min-h-screen">
  <Header />
  <!-- <h1 class="py-8 px-4 border border-indigo-900 shadow-lg">Hello {name}!</h1> -->
  <!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <Counter /> -->


  <Router {routes}/>

  <Footer />
</main>


