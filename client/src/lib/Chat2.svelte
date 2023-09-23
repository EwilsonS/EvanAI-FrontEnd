<script>
  import { onMount } from "svelte";
  import {
    loadConversationHistory,
  } from "../chat_script2";
  import UserInput from "./components/UserInput.svelte";
  import SelectLanguage from "./components/SelectLanguage.svelte";

  export let agent = ''

  let showModal = false;
  let showList =false;
  let showProfileModal = false;
  const box = document.getElementById("text-field-container");

  // Load the conversation history when the page loads
  onMount(() => loadConversationHistory());
  const queryParams = new URLSearchParams(location.search);
  queryParams.set('agent', agent);
  history.replaceState({}, '', `${location.pathname}?${queryParams}`);
</script>

<div id="header-container">
  <h4>EvanAI</h4>
  <div style="margin-left:45vw">
    <SelectLanguage />
  </div>
</div>
<div id="chat-box">
  <div id="chat-container2" />
</div>
<div id="text-field-container">
  <div id="hide-bar" />
  <UserInput />
</div>
