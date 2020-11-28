<template>
  <div>
    <h1>{{ keyboard }}</h1>


<img :src="$withBase('/keyboard.png')"/>

<p>
  <i>A short description of the keyboard/project</i>
</p>

<ul>
  <li>Keyboard Maintainer: [%YOUR_NAME%](https://github.com/yourusername)</li>
  <li>Hardware Supported: <i>The PCBs, controllers supported</i></li>
  <li>Hardware Availability: <i>Links to where you can find this hardware</i></li>
</ul>

    <h3>Make example for this keyboard (after setting up your build environment):</h3>

    <div class="language-bash">
      <pre class="language-bash">make {{ keyboard }}:default</pre>
    </div>

    <h3>Flashing example for this keyboard:</h3>

    <div class="language-bash">
      <pre class="language-bash">make {{ keyboard }}:default:flash</pre>
    </div>

<p>
See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).
</p>

<p style="text-align: right;">
      <a :href="'https://github.com/qmk/qmk_firmware/tree/master/keyboards/' + keyboard">QMK Folder →</a>
      <router-link :to="'/compiled/' + keyboard + '_default.hex'">Default Firmware ↓</router-link>
</p>
     <span class="prev">←<a @click="$router.go(-1)">back</a></span>

  </div>
</template>

<script>
export default {
  props: ['keyboard'],
};
</script>