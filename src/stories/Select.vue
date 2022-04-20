<template>
    <div :class="classes" :style="style">
        <label for="">{{ label }}</label> <br>
        <select name="" id="" :disabled="disabled">
            <option value="">Choisissez une option</option>
        </select>
    </div>
</template>

<script>
import './select.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-select',

  props: {
    label: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
    },
    disabled: {
        type: Boolean,
        required: true
    }
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-select': true,
        'storybook-select--disabled': props.disabled
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    }
  },
};
</script>
