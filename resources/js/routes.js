import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "./components/TaskList.vue";
import TaskShowComponent from "./components/TaskShow.vue";

const routes = [

  {
    path: "/tasks",
    name: "task.list",
    component: TaskListComponent,
  },

  {
    path: "/tasks/:taskId",
    name: "task.show",
    component: TaskShowComponent,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
