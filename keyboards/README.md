---
title: "All Supported Keyboards"
sidebarDepth: 0
---

## All Supported Keyboards

This page is automatically generated from keyboards currently in QMK. Default .hex files are up-to-date with the latest version of QMK, and get pushed every build via Travis.

Want a qmk.fm page? [Create a `<keyboard>.md` file for it here](https://github.com/qmk/qmk.fm/tree/gh-pages/_pages/keyboards)! (use others as examples/templates)

Currently only .hex files are provided - some listed here may not be what's needed to flash the keyboard. If this is the case, [please open an issue](https://github.com/qmk/qmk.fm/issues)!

<script>
import SearchBox from '@SearchBox'
import { KEYBOARDS } from '@dynamic/constants'

export default {
  data() {
    return {
      keyboards: KEYBOARDS
    }
  },
  components: { SearchBox }
}
</script>

<template>
<div>
<SearchBox/>

<table>
  <thead>
    <tr><th>qmk.fm page</th> <th>QMK Folder</th> <th>Default Firmware</th></tr>
  </thead>
  <tbody>
    <tr v-for="keyboard in keyboards"">
      <td><router-link :to="'/keyboards/' + keyboard + '.html'">{{ keyboard }}</router-link></td>
      <td><a :href="'https://github.com/qmk/qmk_firmware/tree/master/keyboards/' + keyboard">→</a></td>
      <td><router-link :to="'/compiled/' + keyboard + '_default.hex'">↓</router-link></td>
    </tr>
  </tbody>
</table>

</div>
</template>