<template>
    <HeaderComponent />

    <div class="headerspace"></div>

    <div class="container">

      <div class="row">
        <div class="col-12">
          <h1>Welcome to the watsonx Challenge bot</h1>
          <p>Select one of the IBM product assistants and start a conversation about the corresponding product</p>
        </div>
      </div>

      <div class="row g-3">
        <div class="col-12 col-md-4">
          <router-link to="/instana-assistant">
            <div class="item"><h2>Instana assistant</h2></div>
          </router-link>
        </div>
        <div class="col-12 col-md-4">
          <div class="item"><h2>Turbonomic assistant</h2></div>
        </div>
        <div class="col-12 col-md-4">
          <div class="item"><h2>Cloud Object Storage assistant</h2></div>
        </div>
      </div>
    </div>

    <FooterComponent />
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

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
a{
  text-decoration: none; 
  color: #212529
}
.item{
  background-color: #f4f4f4;
  padding: 0.75rem;
  min-height: 250px;
  border-left: 2px solid #0F62FF;
  transition: 0.2s;
  opacity: 0.9;
}
.item:hover{
  background-color: #e0e0e0;
}
</style>