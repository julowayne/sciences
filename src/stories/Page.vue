<template>
  <div style="width:100%;">
    <div class="storybook-page-section">
      <h1>Nos différents parcours</h1>
      <p class="description">Pas le temps de vous organiser? Aucun soucis, dans cette section vous pourrez retrouver des exemples de visites afin de facilier votre visite au musée.</p>
      <div class="storybook-page-cards">
        <my-card-parcours 
          backgroundColor="#063B7A"
          label="À la découverte des étoiles" 
          time="1 à 2h"
          tag="Espace"
          age="10"
          description="Conçu avec l'aide de Thomas Pesquet, montez à bord de la fusée Falcon 9 et partez à la découverte de l'origine des étoiles." 
        />
        <my-card-parcours
          backgroundColor="#FF2E4D"
          label="Le jean sous toutes ses coutures" 
          time="30min à 1h"
          tag="Technologies"
          age="5"
          description="Vos enfants découvrirons à travers 6 décors s'inspirant du monde industriel l'histoire de la pièce mythique de notre dressing et les étapes de sa fabrication." 

        />
        <my-card-parcours
          backgroundColor="#FFD947"
          label="Le fonctionnement du cerveau" 
          time="45min à 1h"
          tag="Technologies"
          age="8"
          description="A travers différents jeux et expériences vos enfants apprendront le fonctionnement du cerveau et tesreront leurs capacités." 

        />
      </div>
    </div>
    <div class="storybook-page-alert">
      <div>
        <img src="./assets/report.png" alt="report">
      </div>
      <div>
        <h1>Information pass vaccinal</h1>
        <p>Conformément aux consignes gouvernementales, l'accès à notre musée nécessite la présentation d'un pass vaccinal valide pour toutes les personnes de plus de 16 ans.</p>
      </div>
    </div>
    <div class="storybook-page-section">
      <h1>Nos différents abonnements</h1>
      <p class="description">Vous ne savez pas quoi faire les mercredis après-midi? Emmenez vos enfants au musée! <br> Notre fonction de recherche vous aidera à trouver l'abonnement idéal.</p>
      <p class="small-text">Vous ne trouvez pas l'abonnement idéal? Notre donction de recherche est là pour vous aider:</p>
      <div class="select-list">
        <my-select label="Âge" />
        <my-select label="Envie de visiter" />
        <my-select label="Nombre de visiteurs concernés" />
        <my-button label="Rechercher mon abonnement" size="large" backgroundColor="#063B7A" class="search-button"/>
      </div>
      <div class="storybook-page-cards">
        <my-card-subscribe
          label="Les petits curieux"
          tag="1 personne"
          price="30"
          validity="1 an"
          age="de 4 à 18 ans"
          :list="list[0]"
        />
        <my-card-subscribe 
          label="Les petits scientifiques"
          tag="1 enfant + 1 adulte"
          price="50"
          validity="1 enfant et 1 adulte"
          age="de 4 à 18 ans"
          :list="list[1]"
        />
        <my-card-subscribe 
          label="Les petits chercheurs"
          tag="2 enfants + 1 adulte"
          price="70"
          validity="pour 2 enfants et 1 adulte"
          age="de 4 à 18 ans"
          :list="list[2]"
        />
        <my-card-subscribe 
          label="Les petits savants"
          tag="2 enfants + 1 adulte"
          price="90"
          validity="pour 2 enfants et 1 adulte"
          age="de 4 à 18 ans"
          :list="list[2]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import './page.css';
import MyCardParcours from './CardParcours'
import MySelect from './Select.vue'
import MyButton from './Button.vue'
import MyCardSubscribe from './CardSubscribe.vue'

export default {
  name: 'my-page',

  components: { 
    MyCardParcours,
    MySelect,
    MyButton,
    MyCardSubscribe
   },

  props: {
  },
  data() {
    return {
      list: [
        [
          'Accès aux différentes expositions en illimité.',
          'Un accès à la cité des enfants ou à la géole par mois.'
        ],
        [
          'Accès aux différentes expositions en illimité',
          'Un accès à la cité des enfants ou à la géole par mois.'
        ],
        [
          'Accès aux différentes expositions en illimité',
          'Accès illimité aux ateliers ou aux conférences'
        ]
      ]
    }
  },
};
</script>
