<template>
  <div :class="classes" :style="style">
    <div class="storybook-card-header">
        <my-tag class="storybook-card-img-tag" :label="tag" backgroundColor="#2474D3"></my-tag>
        <div class="storybook-card-img"></div>
    </div>
    <div class="storybook-card-body">
      <div class="storybook-card-body-content">
        <h1>{{label}}</h1>
        <h1>{{price}}€</h1>
        <p>Pass valable {{validity}}</p>
        <p>Âge: {{age}}</p>
        <ul>
          <li v-for="li in list" :key="li">{{li}}</li>
        </ul>
      </div>
      <my-button label="S'abonner" backgroundColor="black"></my-button>
    </div>
  </div>
</template>

<script>
import './cardsubscribe.css';
import { reactive, computed } from 'vue';
import MyTag from './Tag.vue'
import MyButton from './Button.vue'

export default {
  name: 'my-card-subscribe',
  components: {
    MyTag,
    MyButton
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required:true,
    },
    price: {
      type: String,
      required: true,
    },
    validity: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
    },
    // primary: {
    //   type: Boolean,
    //   default: false,
    // },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-card': true,
        // 'storybook-button--primary': props.primary,
        // 'storybook-button--secondary': !props.primary,
        // [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
