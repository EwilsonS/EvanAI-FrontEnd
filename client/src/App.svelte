<script>
  import Chat2 from './lib/Chat2.svelte';
  import { Router, Route } from "svelte-routing";
  import Header from './lib/components/Header.svelte';
  import UserInput from "./lib/components/UserInput.svelte";
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EvanAI</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <link rel="icon" type="image/x-icon" href="favicon.ico">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KE9M2KGZNF"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-KE9M2KGZNF');
    </script>
</svelte:head>
<Router>
  <div>
    <Route path="/">
      <Header />
      <Chat2 agent="agent"/>
      <UserInput />
    </Route>
  </div>
</Router>
