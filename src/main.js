import { createApp } from 'vue';
import store from './store'

import App from './App.vue';
import BaseContainer from './components/UI/BaseContainer.vue';

const components = [
  BaseContainer,
]

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app
  .use(store)
  .mount('#app');
