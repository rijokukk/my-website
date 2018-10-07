<!-- Mina page -->
<template>
   <div>
      <section class="intro">
         <h1>Kuka minä olen?</h1>
      </section>
      <div class="content">
         <h2>Osaaminen</h2>
         <img id="potrait" src="~assets/images/potrait.jpg" alt="Potrait">
         <p>Opiskelen tällä hetkellä ohjelmistotekniikkaa Jyväskylän yliopistossa.
            Koodaamisessa minua kiinnostaa erityisesti web-devaaminen ja uudet teknologiat.
         </p>
         <p>
            Frontend puolelta minulla on hallussa normaalin JavaScriptin lisäksi jQuery, Vue.js, Nuxt.js ja React.js sekä normaali CSS ja Bootstrap. 
            Backend puolella olen käyttänyt projekteissa Node.js:ää ja Flaskia sekä valmiita tietokanta-alustoja RESTful API kutsuilla kuten Firebasea.
         </p>
         <p>Web-devauksen lisäksi minulla on hyvin hallussa Java-, C#- ja Python-ohjelmointikielet sekä kokemusta löytyy 
            erilaisten tekoälyteknologioiden käytöstä kuten IBM Watson työkaluista. Nykyisten ohjelmointitaitojen lisäksi minulla on halu ja mielenkiinto oppia uusia ohjelmointikieliä 
            ja -teknologioita. <img id="dogs" src="~assets/images/koissut.jpg" alt="Koirien kanssa järvellä."> 
         </p>
         <div class="right">
            <h2>Tietoja minusta</h2>
            <p>
               Olen lähtöisin Seinäjoelta ja asunut Jyväskylässä vuodesta 2013 lähtien. Perheeseeni kuuluu kihlattuni lisäksi kaksi koiraa.
            </p>
            <p>Työnteon ja yliopisto opiskelun ohella pyrin käyttämään osan vapaa-ajastani tehokkaasti opetellessa uusia mielenkiintoisia ohjelmointikieliä.
               Tietokoneella nöräämisen lisäksi harrastuksiini kuuluu ultimate, frisbeegolf ja kehonpainoharjoittelu.
            </p>
         </div>
         <div class="center">
           <h2>Kiinnostuitko?</h2>
           <p>Ota yhteyttä <a href="mailto:riku.j.kukkaniemi@student.jyu.fi">riku.j.kukkaniemi@student.jyu.fi</a>.</p>
         </div>
      </div>
   </div>
</template>

<style scoped>
.intro {
  height: 100px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 5%;
  left: 25%;
  width: 50%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.content {
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 30px;
}

@media (min-width: 768px) {
  .content {
    width: 800px;
    margin: auto;
  }
}

img {
  max-width: 100%;
  height: auto;
}

@media screen and (max-width: 600px) {
  img {
    display: none;
  }
}

#potrait {
  float: right;
  max-width: 200px;
  margin-left: 15px;
  margin-bottom: 20px;
  border-radius: 50%;
}

#dogs {
  float: left;
  margin-right: 30px;
  margin-top: 15px;
  border-radius: 5px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.right {
  text-align: right;
}

.center {
  padding-top: 50px;
  text-align: center;
}

a {
  color: red;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  color: salmon;
}

a:active {
  text-decoration: underline;
}
</style>
