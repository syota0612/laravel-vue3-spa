import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "./components/TaskList.vue";

const routes = [
  {
    path: "/tasks",
    name: "task.list",
    component: TaskListComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
