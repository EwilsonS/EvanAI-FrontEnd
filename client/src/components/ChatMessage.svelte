<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no, user-scalable=0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" type="text/css" href="../styles.css">
</svelte:head>
<script>
    import { onMount } from "svelte";
    import { clearBlinkers, buttonizeSuggestions, generateInternalConversation } from "../chat_script2";

    export let sender
    export let index
    export let animate
    export let message
    export let callback
    export let addMessage
    export let welcomeMessage

    let showGenBtn = false
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,;0123456789'
    const regexTags = /<[^>]+>|[^<]+/g // matches both text and HTML tags
    let messageDiv
    let chunkSpan

    onMount(() => {
        if (addMessage) {
            if (animate) {
                const cursorSpan = document.createElement('span')
                cursorSpan.className = 'blinker'
                cursorSpan.textContent = ' █'
                messageDiv.appendChild(cursorSpan)
                cursorSpan.style.animation = 'fadeout 1s 0s reverse'                
            }

            if (animate) {
                setTimeout(() => {
                typeWriter(chunkSpan, message.replace(/\n/g, '<br>'), callback)
                }, 1000)
            } else {
                chunkSpan.innerHTML = message.replace(/\n/g, '<br>')
            }
           
            buttonizeSuggestions(chunkSpan)
        }
        else {
            const curserSpan = document.createElement('span')
            curserSpan.className = 'blinker'
            curserSpan.textContent = ' █'
            messageDiv.appendChild(curserSpan)
            curserSpan.style.animation = 'fadeout 1s 0s reverse'
        }
    })

    export function getChunkSpan () {
        return chunkSpan
    }

    function getRandomCharacter () {
        const randomIndex = Math.floor(Math.random() * chars.length)
        return chars[randomIndex]
    }

    function typeWriter (container, text, callback, currentChunkIndex = 0, charIndex = 0) {
        const chunks = text.match(regexTags) // split the text into chunks
        if (currentChunkIndex < chunks.length) {
            const currentChunk = chunks[currentChunkIndex]

            // If chunk is an anchor tag or a <br>, append the entire chunk
            if (currentChunk.startsWith('<a') || currentChunk.startsWith('<br')) {
            container.innerHTML += currentChunk
            charIndex = 0
            currentChunkIndex++
            setTimeout(() => typeWriter(container, text, callback, currentChunkIndex, charIndex), 1)
            } else {
            // Introduce a 5% chance to make a mistake
            const makeMistake = Math.random() < 0.000
            if (makeMistake && charIndex !== 0) { // Ensure not to make mistake on first character
                // Add a wrong character
                container.innerHTML += getRandomCharacter()
                setTimeout(() => {
                container.innerHTML = container.innerHTML.slice(0, -1) // Remove wrong character
                setTimeout(() => typeWriter(container, text, callback, currentChunkIndex, charIndex), 300)
                }, 300) // Delay for backspacing
            } else {
                container.innerHTML += currentChunk[charIndex]
                charIndex++
                if (charIndex < currentChunk.length) {
                setTimeout(() => typeWriter(container, text, callback, currentChunkIndex, charIndex), 1)
                } else {
                charIndex = 0
                currentChunkIndex++
                setTimeout(() => typeWriter(container, text, callback, currentChunkIndex, charIndex), 1)
                }
            }
            }
        } else {
            if (callback) {
            callback() // call the callback after typing is complete
            }
            setTimeout(() => {
                clearBlinkers()
                if (message === welcomeMessage) {
                    showGenBtn = true
                }
            }, 1000) // clear cursors after a brief delay
        }
        
    }

</script>
<div bind:this={messageDiv} class={`${sender}-message`} id={index}>
    <span bind:this={chunkSpan} class='textContent' id={index}>
    </span>
    {#if showGenBtn}
        <br><br>
        <button id='gen-suggestion-btn' on:click={generateInternalConversation}>Generate Topics For Me</button>
    {/if}
</div>
