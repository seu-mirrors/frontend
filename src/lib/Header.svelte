<script>
  import { link, location } from "svelte-spa-router";
  import SEULogo from "../assets/seu-logo.svg";

  import active from 'svelte-spa-router/active'
</script>

<header
  class="relative flex flex-wrap w-full items-center justify-between bg-white text-neutral-900 caddy-shadow px-caddy py-6 grow-0 shrink-0"
>
  <div class="caddy-wrapper">
    <div class="flex max-w-caddy flex-wrap items-center basis-full justify-between font-medium">
      <a class="flex items-center no-underline hover:no-underline" href="/" use:link>
        <img class="mr-2 h-8 w-8 opacity-95" src={SEULogo} alt="SEU Logo" />
        <span class="text-xl"
          >东南大学开源镜像站 <span class="text-neutral-400">/</span> SEU Mirrors<sup class="text-blue-600 ml-0.5">α</sup></span>
      </a>

      <div class="space-x-4 header-nav max-sm:mt-6">
        <a href="/" use:link use:active>首页</a>
        <a href="/status" use:link use:active>同步状态</a>
      </div>
    </div>

    <div class={($location == "/") ? "mt-8 mb-4 space-y-2 basis-full" : "hidden"}>
      <h1 class="font-medium text-black text-4xl">稳定、可靠的开源镜像服务</h1>
      <p class="text-xl">基于「快照」的原子化同步，无中间状态，始终完整。</p>
    </div>
  </div>
</header>
