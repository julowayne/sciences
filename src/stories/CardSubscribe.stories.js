import MyCardSubscribe from './CardSubscribe.vue';

export default {
  title: 'CardSubscribe',
  component: MyCardSubscribe,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyCardSubscribe },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-card-subscribe />',
});

export const Rectangle = Template.bind({});
Rectangle.args = {
};

