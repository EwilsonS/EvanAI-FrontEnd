<script>
  import SelectLanguage from "./SelectLanguage.svelte";
  import SelectAgent from "./SelectAgent.svelte";

  export let showLanguage = true
  export let title = ''
</script>

<div id="header-container">
  <p id="header-title">{title}</p>
  <SelectAgent selection={title.toLowerCase()}/>
  <div style="margin-left:45vw">
    {#if showLanguage}
      <SelectLanguage />
    {/if}
  </div>
</div>

<style>
  #header-title {
    margin: 0;
  }
</style>