import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "./components/TaskList";
import TaskShowComponent from "./components/TaskShow";
import TaskCreateComponent from "./components/TaskCreate";

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

  {
    path: "/tasks/create",
    name: "task.create",
    component: TaskCreateComponent,
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
