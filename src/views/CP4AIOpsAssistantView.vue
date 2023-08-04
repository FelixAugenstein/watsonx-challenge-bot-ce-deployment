<template>
    <HeaderComponent />

    <div class="headerspace"></div>
    
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>CP4AIOps assistant</h1>
          <p></p>
        </div>
      </div>
    </div>

    <FooterComponent />
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted( () => {
  window.watsonAssistantChatOptions = {
    integrationID: "c6bb6af5-914a-4647-8c12-79bf7adec288", // The ID of this integration.
    region: "eu-de", // The region your integration is hosted in.
    serviceInstanceID: "a4a3dab3-8bad-42bd-8870-9378981ed003", // The ID of your service instance.
    hideCloseButton: false, // this hides the web chat close button
    openChatByDefault: true, // keeps chat always open
    showRestartButton: true,
    namespace: "CP4AIOps-assistant",
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
h1, h2, h3 {
  font-weight: 300;
}
</style>