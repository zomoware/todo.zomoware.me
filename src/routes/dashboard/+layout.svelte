<script>
  import "../../app.css";


  let show = false;

  function toggle() {
    show = !show;
  }

  function signout() {
    show = !show;
    console.log("user.signout.function");
  }


  import {Plus, Search, Fingerprint, Home, CheckCircle2, KanbanSquare, Settings, LogOut} from 'lucide-svelte';
  import {fly} from 'svelte/transition';
</script>


<main class="layout flex-col min-h-screen w-screen p-0">
  <div class="theme bg-white dark:bg-black border-b-2 layout h-20 w-full p-0 fixed top-0 inset-0 z-10">
    <button class="click"><Plus/></button>
    <button class="click"><Search/></button>
    <button on:click={toggle} class="click"><Fingerprint/></button>
  </div>

  {#if show}
    <div transition:fly={{ y: 20, duration: 200}} class="theme bg-white dark:bg-black border-2 rounded-xl layout flex-col m-3 fixed top-20 right-0 z-10">
      <p class="font-bold">user.name</p>


      <a href="/dashboard" on:click={toggle} class="click justify-evenly w-40">
        <Home class="fill-black/30 dark:fill-white/30 w-10"/>
        <p class="w-full">home</p>
      </a>

      <a href="/dashboard/tasks" on:click={toggle} class="click justify-evenly w-40">
        <CheckCircle2 class="fill-black/30 dark:fill-white/30 w-10"/>
        <p class="w-full">tasks</p>
      </a>

      <a href="/dashboard/boards" on:click={toggle} class="click justify-evenly w-40">
        <KanbanSquare class="fill-black/30 dark:fill-white/30 w-10"/>
        <p class="w-full">boards</p>
      </a>

      <a href="/dashboard/settings" on:click={toggle} class="click justify-evenly w-40">
        <Settings class="fill-black/30 dark:fill-white/30 w-10"/>
        <p class="w-full">settings</p>
      </a>

      <button  on:click={signout} class="click justify-evenly w-40">
        <LogOut class="fill-black/30 dark:fill-white/30 w-10"/>
        <p class="w-full">logout</p>
      </button>
    </div>
  {/if}


  <slot/>
</main>
