<template>
    <HeaderComponent />

    <div class="headerspace"></div>

    <FooterComponent />
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted( () => {
  window.watsonAssistantChatOptions = {
    integrationID: "d5ca4f54-1507-475d-873c-7337b2bca937", // The ID of this integration.
    region: "eu-de", // The region your integration is hosted in.
    serviceInstanceID: "a4a3dab3-8bad-42bd-8870-9378981ed003", // The ID of your service instance.
    hideCloseButton: false, // this hides the web chat close button
    openChatByDefault: true, // keeps chat always open
    showRestartButton: true,
    namespace: "Instana-assistant",
    onLoad: function(instance) { 
      instance.updateCSSVariables({
        // 'BASE-width': '95vh',
        // 'BASE-height': '16vh',
        // 'BASE-max-height': '16vh',
        // 'BASE-bottom-position': '18vh',
        // 'BASE-right-position': '32px'
        // 'LAUNCHER-position-bottom': '160px',
        // 'LAUNCHER-position-right': '32px'
      });
      
      instance.render(); 
    }
  }
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  })
})

onBeforeUnmount (() => {

  console.log('unmounting...')
  // Find all elements with the specified class name
  const elementsToHide = document.querySelectorAll('.WatsonAssistantChatHost');

  // Loop through each element and hide them
  elementsToHide.forEach(element => {
    element.style.display = 'none';
  });

})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerspace {
  height: 120px;
  display: block;
}
</style>