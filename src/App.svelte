<script>
  import Footer from './lib/Footer.svelte';
  import Header from './lib/Header.svelte';
  
  import Home from './routes/Home.svelte';

  import Router from 'svelte-spa-router'
  import Status from './routes/Status.svelte';

  const routes = {
    // Exact path
    '/': Home,

    '/status': Status

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

  <div class="caddy-wrapper flex flex-wrap bg-white text-neutral-900 gap-0 lg:divide-x max-lg:divide-y caddy-main grow">
    <Router {routes}/>
  </div>

  <Footer />
</main>


