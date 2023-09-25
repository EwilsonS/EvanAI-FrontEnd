<script>
  import { onMount } from "svelte";
  import { loadConversationHistory } from "../chat_script2";

  export let agent = ''

  // Load the conversation history when the page loads
  onMount(() => loadConversationHistory());

  const queryParams = new URLSearchParams(location.search);
  queryParams.set('agent', agent);
  history.replaceState({}, '', `${location.pathname}?${queryParams}`);
</script>

<div id="chat-box">
  <div id="chat-container2" />
</div>
 <style>
    #chat-box {
    height: 90vh;
    justify-content: center;
    flex: 1;
    margin: 0 auto;
    width: 100vw; /* Set width to 100vh to make it the same as the height */
    box-sizing: border-box;
    background-color: #343541;
    position: relative;
    min-height: 81vh;
    align-items: unset;
    border-bottom: #2a2b32;
    border-top: #2a2b32;
  }

  #chat-container2 {
    height: 90vh;
    justify-content: center;
    flex: 1;
    margin: 0 auto;
    width: 100vw; /* Set width to 100vh to make it the same as the height */
    box-sizing: border-box;
    background-color: #004549;
    position: relative;
    min-height: 81vh;
    align-items: unset;
    border-bottom: #2a2b32;
    border-top: #2a2b32;
    overflow-y: auto;
  }
 </style>