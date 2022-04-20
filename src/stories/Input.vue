<template>
    <div :class="classes" :style="style">
        <label for="">{{ label }}</label> <br>
        <input type="text" name="text" id="" :placeholder="placeholder">
    </div>
</template>

<script>
import './input.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-input',

  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
        type: String,
        required: false
    },
    // primary: {
    //   type: Boolean,
    //   default: false,
    // },
    // size: {
    //   type: String,
    //   validator: function (value) {
    //     return ['small', 'medium', 'large'].indexOf(value) !== -1;
    //   },
    // },
    backgroundColor: {
      type: String,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-input': true,
        // 'storybook-button--primary': props.primary,
        // 'storybook-button--secondary': !props.primary,
        // [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    }
  },
};
</script>
