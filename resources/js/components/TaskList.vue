<template>
    <div class="container">
        <table class="table table-hover">
            <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Person In Charge</th>
                <th scope="col">Show</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <th scope="row">{{item}}</th>
                <td>Title{{item}}</td>
                <td>Content{{item}}</td>
                <td>Ichiro</td>
                <td>
                    <router-link :to="{name: 'task.show', params: {taskId: item}}">
                        <button class="btn btn-primary">Show</button>
                    </router-link>
                </td>
                <td>
                    <router-link :to="{name: 'task.edit', params: {taskId: item}}">
                        <button class="btn btn-success">Edit</button>
                    </router-link>
                </td>
                <td>
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        setup() {

            const items = [1, 2, 3];

            return {
                items
            }
        }
    }
</script>