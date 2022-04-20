<template>
    <button :class="classes" :style="style">
        <!-- <object class="icon" :data="icon" type="image/svg+xml" id="icon" width="100%" height="100%"></object> -->
        <img :src="icon" alt="icon">
        <!-- <p>{{icon}}</p> -->
    </button>
</template>

<script>
import './iconbutton.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-icon-button',

  props: {
    icon: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
    }
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-icon-button': true      
        })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    }
  },
};
</script>
