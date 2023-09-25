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
