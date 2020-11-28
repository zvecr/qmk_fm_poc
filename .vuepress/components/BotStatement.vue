<template>
    <div style="display:flex;" :style="{ 'justify-content': align === 'right' ? 'flex-end' : 'flex-start'}">
        <img v-if="align === 'left'" :src="$withBase('/bot.png')" width="100" height="100"/>
        <div class="box" :class="{ sb6: align === 'left', sb5: align === 'right' }">
            <slot></slot>
        </div>
        <img v-if="align === 'right'" :src="$withBase('/bot.png')" width="100" height="100"/>
    </div>
</template>

<script>
export default {
  props: {
      align: {
        validator(value) {
            return ['left', 'right'].indexOf(value) !== -1
        },
        default: 'left',
      }
  }
};
</script>


<style scoped>
img {
    align-self: flex-end;
}
.box {
  width: 300px;
  margin: 10px;
  margin-left: 50px;
  margin-right: 50px;
  border: 4px solid #00bfb6;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  position: relative;
  display: inline-block;
}


/* speech bubble 5 */

.sb5:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #00bfb6;
  border-right: 10px solid transparent;
  border-top: 10px solid #00bfb6;
  border-bottom: 10px solid transparent;
  right: -21px;
  top: 6px;
}

.sb5:after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 7px solid #fff;
  border-right: 7px solid transparent;
  border-top: 7px solid #fff;
  border-bottom: 7px solid transparent;
  right: -11px;
  top: 10px;
}


/* speech bubble 6 */

.sb6:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #00bfb6;
  border-top: 10px solid #00bfb6;
  border-bottom: 10px solid transparent;
  left: -21px;
  top: 6px;
}

.sb6:after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 7px solid transparent;
  border-right: 7px solid #fff;
  border-top: 7px solid #fff;
  border-bottom: 7px solid transparent;
  left: -11px;
  top: 10px;
}

</style>
