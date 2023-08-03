<template>

    <!-- Header -->
    <header class="position-fixed">
    
    <!-- Menu -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a href="/" class="logo">
                watsonx Challenge bot
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerElement" aria-controls="navbarTogglerElement" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerElement">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/instana-assistant" class="nav-link">
                            Instana
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/turbonomic-assistant" class="nav-link">
                            Turbonomic
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cp4aiops-assistant" class="nav-link">
                            CP4AIOps
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            About
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </header>
    <!-- end: Header -->

</template>

<script setup>

</script>

<style scoped>
header {
    width: 100%;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
    z-index: 1023;
}
.navbar{
    --bs-navbar-nav-link-padding-x: 2rem;
    --bs-navbar-padding-y: 0;
}
.logo{
    color: #fff;
    text-decoration: none;
    padding: 0.8rem 0;
    font-size: 1.1rem;
}
.nav-link {
    transition: 0.2s;
    font-weight: 400;
    font-size: 1.1em;
    font-weight: 300;
    padding: 0.8rem;
    color: #fff !important;
    border-bottom: 2px solid rgb(0 0 0 / 10%);
 }
 .nav-link:hover, .router-link-active{
    background-color: #393939 !important;
    border-bottom: 2px solid #0F62FF;
 }
</style>
