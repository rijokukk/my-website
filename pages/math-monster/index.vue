<!--  Math Monster game  -->
<template>
    <div class="container">
        <section class="row">
            <div class="small-6 columns">
                <h1 class="text-center">YOU</h1>
                <div class="healthbar">
                    <div 
                            class="healthbar text-center"
                            style="background-color: green; margin: 0; color: white;"
                            :style="{width: playerHealth + '%'}">
                        {{ playerHealth }}
                    </div>
                </div>
            </div>
            <div class="small-6 columns">
                <h1 class="text-center">MONSTER</h1>
                <div class="healthbar">
                    <div 
                            class="healthbar text-center"
                            style="background-color: green; margin: 0; color: white;"
                            :style="{width: monsterHealth + '%'}">
                        {{ monsterHealth }}
                    </div>
                </div>
            </div>
        </section>
        <section class="row controls" 
          v-if="!gameIsRunning">
              <div class="small-12 columns">
                  <h1 v-if="ending">{{ this.ending }}</h1>
                  <button id="start-game" @click="startGame">START NEW GAME</button>
              </div>
          </section>
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="flip" mode="out-in">
                    <component :is="mode" 
                      @answered="answered($event)" 
                      @confirmed="whichAbility($event)" 
                      :questionDifficulty="questionDifficulty" 
                      :questionFeedback="questionFeedback">
                    </component>
                </transition>
            </div>
        </div>
        <section class="row log" v-if="turns.length > 0">
        <div class="small-12 columns">
            <ul>
                <li 
                    v-for="turn in turns"
                    :key="turn.id"
                    :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}">
                    {{ turn.text }}
                </li>
            </ul>
        </div>
    </section>
    </div>
</template>

<script>
import Question from "@/components/MathMonster/Question.vue";
import Abilities from "@/components/MathMonster/Abilities.vue";

export default {
    layout: "game",
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      turns: [],
      mode: "app-abilities",
      questionDifficulty: 100,
      questionFeedback: "",
      currentAbility: "",
      ending: ""
    };
  },
  methods: {
    // Chooces correct ability if the answer for question was correct
    answered(isCorrect) {
      if (isCorrect) {
        this.questionFeedback = "Correct!";
        switch (this.currentAbility) {
          case "attack":
            this.attack();
            break;
          case "special-attack":
            this.specialAttack();
            break;
          case "heal":
            this.heal();
            break;
          default:
            break;
        }
        this.mode = "app-abilities";
      } else {
        this.mode = "app-abilities";
        this.questionFeedback = "False!";
        this.monsterAttacks();
      }
    },
    // Checks which ability the player chose
    whichAbility(abilityName) {
      this.currentAbility = abilityName;
      switch (abilityName) {
        case "attack":
          this.questionDifficulty = 20;
          this.mode = "app-question";
          break;
        case "special-attack":
          this.questionDifficulty = 70;
          this.mode = "app-question";
          break;
        case "heal":
          this.questionDifficulty = 40;
          this.mode = "app-question";
          break;
        case "give-up":
          this.giveUp();
          break;
        default:
          this.giveUp();
      }
    },
    // Resets the data when new game is launched
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
      this.questionFeedback = "",
      this.currentAbility = "",
      this.ending = ""
      this.mode = "app-abilities";
    },
    // Logic for player attack
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster for " + damage
      });
      if (this.checkWin()) {
        return;
      }
    },
    // Logic for player special attack
    specialAttack: function() {
      var damage = this.calculateDamage(10, 15);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster hard for " + damage
      });
      if (this.checkWin()) {
        return;
      }
    },
    // Logic for player heal
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: "Player heals for 10"
      });
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    // Logic for monster attack
    monsterAttacks: function() {
      var damage = this.calculateDamage(20, 30);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits Player for " + damage
      });
    },
    // Calculates random damage for attacks
    calculateDamage: function(min, max) {
      var damage = 0;
      return (damage = Math.max(Math.floor(Math.random() * max) + 1, min));
    },
    // Checks whether player won or lost
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        this.mode = "app-abilities";
        this.ending = 'You won!'
        this.gameIsRunning = false;
        return true;
      } else if (this.playerHealth <= 0) {
        this.ending = 'You lost!'
        this.mode = "app-abilities";
        this.gameIsRunning = false;
        return true;
      }
      return false;
    }
  },
  components: {
    appQuestion: Question,
    appAbilities: Abilities
  }
};
</script>

