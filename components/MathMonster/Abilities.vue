<!-- Component for Math Monster game. Contains the abilities user can use. -->
<template>
    <div class="controls text-center" :class="color">
        <h1 v-if="questionFeedback">{{ this.questionFeedback }}</h1>
        <section class="row">
                <button id="attack" @click="abilityConfirm('attack')">ATTACK</button>
                <button id="special-attack" @click="abilityConfirm('special-attack')">SPECIAL ATTACK</button>
                <button id="heal" @click="abilityConfirm('heal')">HEAL</button>
                <button id="give-up" @click="abilityConfirm('give-up')">GIVE UP</button>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      color: "white",
      questionStatus: true
    };
  },
  methods: {
    // Forwards the chosen ability
    abilityConfirm(action) {
      this.$emit("confirmed", action);
    },
    // Changes background whether answer was false/correct.
    backgroundColorChanger() {
      if (this.questionFeedback == "False!") {
        this.color = "red";
      } else {
        this.color = "green";
      }
    }
  },
  created() {
    this.backgroundColorChanger();
  },
  props: ["questionFeedback"]
};
</script>
<style scoped>
.green {
  background-color: rgb(127, 241, 127);
}

.red {
  background-color: rgb(233, 86, 86);
}
.white {
  background-color: rgb(255, 255, 255);
}

#attack {
    background-color: #88e0f7;
}

#attack:hover {
    background-color: #88e1f7c7;
}

#special-attack {
    background-color: #ffaf4f;
}

#special-attack:hover {
    background-color: #ff9a2b;
}

#heal {
    background-color: #aaffb0;
}

#heal:hover {
    background-color: #76ff7e;
}

#give-up {
    background-color: #ffffff;
}

#give-up:hover {
    background-color: #c7c7c7;
}

</style>

