<script>
  import { link } from "svelte-spa-router";
  import SEULogo from "../assets/seu-logo.svg";
</script>

<header
  class="relative flex flex-wrap w-full items-center justify-between bg-white text-neutral-900 caddy-shadow mb-8 px-caddy py-6 grow-0 shrink-0"
>
  <div class="caddy-wrapper">
    <div class="flex max-w-caddy flex-wrap items-center basis-full">
      <a class="flex items-center mt-2 no-underline" href="/" use:link>
        <img class="mr-2 h-8 w-8 opacity-95" src={SEULogo} alt="SEU Logo" />
        <span class="font-medium text-xl"
          >东南大学开源镜像站 <span class="text-neutral-400">/</span> SEU Mirrors<sup class="text-blue-600 ml-0.5">α</sup></span
        >
      </a>
    </div>

    <div class="mt-8 mb-4 space-y-2 basis-full">
      <h1 class="font-medium text-black text-4xl">稳定、可靠的开源镜像服务</h1>
      <p class="text-xl">基于「快照」的原子化同步，无中间状态，始终完整。</p>
    </div>
  </div>
</header>
