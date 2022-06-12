<template>
    <div :class="classes" :style="style">
        <!-- <img class="storybook-card-parcours-background" :src="'./assets/' + image" alt=""> -->
        <h1>{{ label }}</h1> <br>
        <my-tag :backgroundColor="backgroundColor" :label="tag" />
        <div class="infos">
            <img src="./assets/coolicon.png" alt="">
            <span>Durée: {{ time }}</span> <br>
            <img src="./assets/smile.png" alt="">
            <span>À partir de {{age}} ans</span>
        </div>
        <p>{{description}}</p>
        <my-button class="button" size="large" backgroundColor="#2474D3" label="Se renseigner" />
    </div>
</template>

<script>
import './cardparcours.css';
import { reactive, computed } from 'vue';
import MyTag from './Tag.vue'
import MyButton from './Button.vue'

export default {
  name: 'my-card-parcours',
  components: {
    MyTag,
    MyButton
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    time: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    /* image: {
        type: String,
        required: true
    }, */
    // primary: {
    //   type: Boolean,
    //   default: false,
    // },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-card-square': true,
        // 'storybook-button--primary': props.primary,
        // 'storybook-button--secondary': !props.primary,
        // [`storybook-button--${props.size || 'medium'}`]: true,
      })),
    //   style: computed(() => ({
    //     backgroundColor: props.backgroundColor,
    //   })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>