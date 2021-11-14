/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { createApp } from "vue";
import router from "./routes";
import ExampleComponent from "./components/ExampleComponent.vue"
import HeaderComponent from "./components/Header.vue"
import TaskListComponent from "./components/TaskList.vue";
import TaskShowComponent from "./components/TaskShow.vue";

createApp({
    components: {
        ExampleComponent,
        HeaderComponent,
        TaskListComponent,
        TaskShowComponent
    },

}).use(router).mount("#app");