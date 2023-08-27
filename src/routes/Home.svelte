<script>
  import MirrorList from "../lib/MirrorList.svelte";
  import Sidebar from "../lib/Sidebar.svelte";
</script>

<div class="caddy-wrapper flex flex-wrap bg-white text-neutral-900 gap-0 divide-x divide-y caddy-main grow">
  <div class="basis-full lg:basis-2/3">
    <MirrorList />
  </div>
  <div class="basis-full lg:basis-1/3">
    <Sidebar />
  </div>
</div>
