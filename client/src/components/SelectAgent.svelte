<!--
  This component is a button to help toggle between views/agents.
  Add the component below with boolean prop to whichever components
  you want to toggle between. Add vars and <a> tags to this as necessary

  <SelectAgent isAdvisor={true} />
-->

<script>
  export let selection = ''
  export let isEvanai = false
  export let isPortfolio = false

  switch(selection) {
    case 'evanai': {
      isEvanai = true
      isPortfolio = false
    }
    break;
    case 'portfolio': {
      isPortfolio = true
      isEvanai = false
    }
    break;
  }


</script>
<span id='agent-btn-container'>
  <a href='/' class='select-agent-btn {isEvanai ? 'active-btn': ''}'>EvanAI</a>
  <a href='/portfolio' class='select-agent-btn {isPortfolio ? 'active-btn': ''}'>Portfolio</a>
</span>

<style>
  #agent-btn-container {
    margin-left: 2em;
  }
  .select-agent-btn {
    color: white;
    background-color: black;
    margin-left: 5px;
    font-size: small;
    text-decoration: none;
    padding: 5px;
    transition: .2s;
  }

  .select-agent-btn:hover  {
    background-color: rgb(83, 83, 83);
  }

  .active-btn  {
    background-color: rgb(164, 2, 2);
  }

  @media (max-width: 419px) {
    #agent-btn-container {
      margin: 0;
      flex-direction: row;
    }

    .select-agent-btn {      
      font-size: x-small;
      text-decoration: none;
      padding: 2px;
      transition: .2s;
    }
  }
</style>
