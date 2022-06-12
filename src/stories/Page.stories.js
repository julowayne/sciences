import MyPage from './Page.vue';
// import * as HeaderStories from './Header.stories';

export default {
  title: 'Page',
  component: MyPage,
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyPage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return {  };
  },
  // Then, those values can be accessed directly in the template
  template: '<my-page />',
});

export const Landing = Template.bind({});
/* Landing.args = {
  // More on composing args: https://storybook.js.org/docs/vue/writing-stories/args#args-composition
  ...HeaderStories.Landing.args,
}; */
