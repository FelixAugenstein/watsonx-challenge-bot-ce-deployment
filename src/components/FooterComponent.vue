<template>

  <!-- Footer -->
  <footer class="footer mt-auto py-3">
        <div class="container">
            Created by team 'Client Engineering Ecosystem Germany & friends'
            <!-- <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <a href="https://www.ibm.com/products/watsonx-ai" target="_blank">
                        <strong>watsonx.ai</strong> - a next generation enterprise studio for AI builders to train, validate, tune and deploy AI models.
                    </a>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <a href="https://www.ibm.com/products/watsonx-data" target="_blank">
                        <strong>watsonx.data</strong> - a fit-for-purpose data store built to scale AI workloads, for all your data, anywhere.
                    </a>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <a href="https://www.ibm.com/products/watsonx-governance" target="_blank">
                        <strong>watsonx.governance</strong> - accelerate responsible, transparent and explainable AI workflows. 
                    </a>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <a href="/" target="_blank">
                        Created by team 'Client Engineering Ecosystem Germany & friends'
                    </a>
                </div>
            </div> -->

        </div>
    </footer>

</template>

<script setup>

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: #c6c6c6;
    padding: 0.7rem 0;
    transition: 0.2s;
    font-size: 1rem;
}
a:hover{
    color: #fff !important;
}

footer {
    color: #c6c6c6;
    background: #393939;
    margin: 0;
    padding: 2px;
    text-align: center;
    font-size: 1rem;
}
.py-3 {
    padding-top: 0.75rem!important;
    padding-bottom: 0.75rem!important;
}
.col-12{
    margin: 5px 0;
}
@media (max-width: 991px) {
    footer {
    color: #c6c6c6;
    background: #393939;
    margin: 0;
    padding: 2px;
    text-align: center;
    font-size: 0.5rem;
}
}
</style>
