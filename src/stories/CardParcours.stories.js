import MyCardParcours from './CardParcours.vue';

export default {
  title: 'CardParcours',
  component: MyCardParcours,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyCardParcours },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-card-parcours />',
});

export const Square = Template.bind({});
Square.args = {
};

