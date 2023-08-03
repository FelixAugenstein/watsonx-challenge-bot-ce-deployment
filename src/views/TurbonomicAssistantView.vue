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
    integrationID: "6d0a9bce-e3c8-4cb6-9c94-9095cacf793a", // The ID of this integration.
    region: "eu-de", // The region your integration is hosted in.
    serviceInstanceID: "a4a3dab3-8bad-42bd-8870-9378981ed003", // The ID of your service instance.
    hideCloseButton: false, // this hides the web chat close button
    openChatByDefault: true, // keeps chat always open
    showRestartButton: true,
    namespace: "Turbonomic-assistant",
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
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