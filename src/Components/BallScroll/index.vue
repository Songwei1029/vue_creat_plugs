<template>
  <section class="vue_plug_main">
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </section>
</template>

<script>
export default {
  name: 'BallScroll'
}
</script>


<style>
.vue_plug_main {
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  position: relative;
  animation: proRotate 5s ease-in-out 500ms infinite alternate;
}
.vue_plug_main > section {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
}
.vue_plug_main > section:nth-of-type(1) {
  transform: translateX(-150px) rotateY(-90deg);
  background: plum;
}
.vue_plug_main > section:nth-of-type(2) {
  transform: translateX(150px) rotateY(90deg);
  background: red;
}
.vue_plug_main > section:nth-of-type(3) {
  transform: translateZ(150px) rotateY(0deg);
  background: purple;
}
.vue_plug_main > section:nth-of-type(4) {
  transform: translateZ(-150px) rotateX(0deg);
  background: salmon
}
.vue_plug_main > section:nth-of-type(5) {
  transform: translateY(-150px) rotateX(90deg);
  background: olivedrab
}
.vue_plug_main > section:nth-of-type(6) {
  transform: translateY(150px) rotateX(90deg);
  background: mediumseagreen
}
@keyframes proRotate {
  0%{transform: rotateX(0deg);}
  20%{transform: rotateX(90deg);}
  40%{transform: rotateX(180deg);}
  60%{transform: rotateX(270deg);}
  80%{transform: rotateY(180deg);}
  100%{transform: rotateY(0deg);}
}
</style>
