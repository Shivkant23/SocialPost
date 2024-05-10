<template >
    <div>
        <HeaderComponent />
        <h1>Hello, welcome on Home screen</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody v-for="post in posts" :key="post.id" v-on:click="clickList(post)">
                <tr>
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';
export default {
    name: 'HomeComponent',
    components: {
        HeaderComponent
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        clickList(post) {
            let data = {
                id: 25,
                description: "pass data through params"
            };
            this.$router.push({
                name: "singlepost", //use name for router push
                params: { data: data }
            });
            console.warn('Post:', post);
            // this.$router.push({ name: 'singlepost', params: { data: "post" } });
            // this.$router.push('/singlepost');
        }
    },
    async mounted() {
        if (!localStorage.getItem('user-info')) {
            this.$router.push('/signup');
        }
        let result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.warn('Result:', result);
        if (result.status === 200) {
            // this.$router.push('/login');
            this.posts = result.data;
        }
        this.posts = result.data;
        console.warn(result);
    }
}
</script>
<style></style>