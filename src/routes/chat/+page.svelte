<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  import { bubble } from "svelte/internal";

  let eliza = new ElizaBot();

  import { chat_store } from "$lib/stores";
  /* https://svelte.dev/tutorial/in-and-out */

  /* https://svelte.dev/tutorial/reactive-statements */

  $: chat_string = $chat_store;
  import { onMount } from "svelte";
  let chat = [];
  onMount(()=> {
    if (chat_string.length>1){
      chat = JSON.parse(chat_string);
    }
    else{
    chat = [{ user: "eliza", text: eliza.getInitial() }]; 
    }
  })

  

  async function write(message) {
    // TODO: yeet in the new message
    chat = [...chat,{ user:"me", text:message}]
    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    // TODO: write the text

    chat = [...chat,{user:"eliza",text:eliza.transform(message)}]
    chat_string = JSON.stringify(chat);
    chat_store.set(chat_string)
  }
</script>
<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />

  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
    .eliza{
      width: fit-content;
      margin-right: auto;
    }
    .me{
      background-color: aqua;
      text-align: right;
      width: fit-content;
      margin-left: auto;
    }
  </style>
</svelte:head>


<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    
      {#each chat as message}
      <article class={message.user}>
      <span>
        {message.text}
      </span>
      </article>
      {/each}
   
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
    }}
  >
    <input type="text" name="text" />
  </form>
</div>



