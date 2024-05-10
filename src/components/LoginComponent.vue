<template>
    <div>
        <img class="logo" alt="Vue logo" src="../assets/logo.png">
        <h1>Sign In</h1>
        <div class="login">
            <div>
                <input type="email" id="email" name="email" v-model="email" placeholder="Enter Email">
            </div>
            <div>
                <input type="password" id="password" name="password" v-model="password" placeholder="Enter Password">
            </div>
            <button @click="signIn" class=" button">Sign In</button>
        </div>
        <p>
            <router-link to="/signup">Don't have an account? SignUp</router-link>
        </p>
    </div>
</template>
<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn() {
            console.log('Email:', this.email);
            this.$router.push('/home');
        },
    }
}
</script>
<style lang="">
    
</style>