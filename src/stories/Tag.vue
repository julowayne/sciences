<template>
    <span :class="classes" :style="style">
        {{ label }}
    </span>
</template>

<script>
import './tag.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-tag',

  props: {
    label: {
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
        'storybook-tag': true      
        })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    }
  },
};
</script>
