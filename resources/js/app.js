/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { createApp } from "vue";
import router from "./routes";
import HeaderComponent from "./components/Header"
import TaskListComponent from "./components/TaskList";
import TaskShowComponent from "./components/TaskShow";
import TaskCreateComponent from "./components/TaskCreate";
import TaskEditComponent from "./components/TaskEdit";

createApp({
    components: {
        HeaderComponent,
        TaskListComponent,
        TaskShowComponent,
        TaskCreateComponent,
        TaskEditComponent
    },

}).use(router).mount("#app");