<template>
    <HeaderComponent />

    <div class="headerspace"></div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>404 not found</h1>
          <p>Return to the homepage <a href="/">here</a>.</p>
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
</style>