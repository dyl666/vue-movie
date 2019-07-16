<template>
  <div class="loader"> </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped lang="less">
.loader {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}
.loader:before {
  animation: before 2s infinite;
}
.loader:after {
  animation: after 2s infinite;
}

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75),
      0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75),
      1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}
@keyframes after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75),
      -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75),
      -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}
/**
 * Attempt to center the whole thing!
 */
html,
body {
  height: 100%;
}

.loader {
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}

// .loader {
//   position: absolute;
//   top: 50%;
//   left: 40%;
//   margin-left: 10%;
//   transform: translate3d(-50%, -50%, 0);
// }
// .dot {
//   width: 15px;
//   height: 15px;
//   background: #3ac;
//   border-radius: 100%;
//   display: inline-block;
//   animation: slide 1s infinite;
// }
// .dot:nth-child(1) {
//   animation-delay: 0.1s;
//   background: #32aacc;
// }
// .dot:nth-child(2) {
//   animation-delay: 0.2s;
//   background: #64aacc;
// }
// .dot:nth-child(3) {
//   animation-delay: 0.3s;
//   background: #96aacc;
// }
// .dot:nth-child(4) {
//   animation-delay: 0.4s;
//   background: #c8aacc;
// }
// .dot:nth-child(5) {
//   animation-delay: 0.5s;
//   background: #faaacc;
// }
// @-moz-keyframes slide {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.3;
//     transform: scale(2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// @-webkit-keyframes slide {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.3;
//     transform: scale(2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// @-o-keyframes slide {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.3;
//     transform: scale(2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// @keyframes slide {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.3;
//     transform: scale(2);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
</style>
