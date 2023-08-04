<template>
    <HeaderComponent />

    <div class="headerspace"></div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>About section</h1>
          <p>
            This is the watsonx Challenge solution provided by the team <strong>Client Engineering Ecosystem Germany & friends</strong>.<br>
            We address FAQ queries by providing this chat application - based on Watson Assistant - for questions regarding IBM Instana, Turbonomic and Cloud Pak for AI Ops.<br>
            The application is connected to a watsonx.ai Foundation Model/Generative AI as well as Watson Discovery collection to crawl the corresponding product knowledge base and build a Prompt for the LLM to help generate answers to common questions quickly.
          </p>
          <p>For complete instructions on how to set up this application, take a look at this <a href="">GitHub repository</a>.</p>
          <h5>Team collaborators:</h5>

          <div class="row">
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/110026724" target="_blank">
                      <img src="./../../public/team/matthias.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Matthias Gräfe</strong><br>
                        Director of Global Supply Chain Transformation<br>
                        - <br>
                        Team role: Consultant
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/138931724" target="_blank">
                      <img src="./../../public/team/christoph.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Christoph Maier</strong><br>
                        Leader IBM Client Engineering DACH - Select Territory<br>
                        - <br>
                        Team role: General contributor
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/175738724" target="_blank">
                      <img src="./../../public/team/soeren.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Sören Aurich</strong><br>
                        Client Engineer - Designer<br>
                        - <br>
                        Team role: Designer
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/165867724" target="_blank">
                      <img src="./../../public/team/felixa.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Felix Augenstein</strong><br>
                        Client Engineering Data Scientist, Ecosystem, IBM Technology, Germany<br>
                        - <br>
                        Team role: Team Lead
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/062159724" target="_blank">
                      <img src="./../../public/team/beate.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Beate Melcher</strong><br>
                        Senior Client Engineering Data Scientist, Ecosystem, IBM Technology, Germany<br>
                        - <br>
                        Team role: Data scientist
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/115357724" target="_blank">
                      <img src="./../../public/team/denis.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Denis Ley</strong><br>
                        Executive IT Specialist | Technology Engineer | Cloud Solution Architect, Client Engineering, Ecosystem<br>
                        - <br>
                        Team role: Architect
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/176156724" target="_blank">
                      <img src="./../../public/team/vera.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Vera Handel</strong><br>
                        Infrastructure, Technology Lifecycle Services<br>
                        - <br>
                        Team role: Seller
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/104544724" target="_blank">
                      <img src="./../../public/team/cordula.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Cordula Eichstädt</strong><br>
                        Brand Digital Sales Specialist - Automation<br>
                        - <br>
                        Team role: General contributor
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/157398724" target="_blank">
                      <img src="./../../public/team/marc.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Marc Häcker</strong><br>
                        Advisory Client Engineering Technology Engineer, Ecosystem, IBM Technology, Germany<br>
                        - <br>
                        Team role: Technical support or engineer
                      </p>
                  </a>
              </div>
              <div class="col-6 col-md-4 col-lg-2">
                  <a href="https://w3.ibm.com/#/people/167902724" target="_blank">
                      <img src="./../../public/team/felixk.jpeg" width="85%" height="auto" />
                      <p>
                        <strong>Felix Kunath</strong><br>
                        Business Technology Leader, Client Engineering Ecosystem<br>
                        - <br>
                        Team role: Consultant
                      </p>
                  </a>
              </div>
          </div>

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
p{
  text-decoration: none; 
  color: #212529
}
a{
  text-decoration: none; 
  color: #0F62FF
}
strong {
    font-weight: bold;
}
img{
  box-shadow: 4px 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
}
h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
}
</style>