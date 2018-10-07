<template>
    <div>
        <h1>Tämän sivun ainoa tarkoitus on pitää heroku palvelin hereillä...</h1>
    </div>
</template>
<script>
import { setInterval } from "timers";

export default {
  mounted: function() {
    setTimeout(() => {
      location.reload();
    }, 300000);
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
