<template>
    <div class="nav">
        <a href="home">Home</a>
        <a href="add_rest">Add Restaurant</a>
        <a href="update_rest">Update Restaurant</a>
        <a href="search_rest">Search</a>
        <a @click="logout" href="Logout">Logout</a>
    </div>
</template>
<script>
export default {
    name: "HeaderComponent",
    data() {
        return {};
    },
    methods: {
        logout() {
            localStorage.removeItem('user-info');
            this.$router.push('/login');
        }
    }
}
</script>
<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2;
    padding: auto;
    padding: 10px, 14px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
}

.nav a:hover {
    background-color: #ddd;
    color: #222;
}
</style>