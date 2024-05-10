<template >
    <div>
        <img class="logo" alt="Vue logo" src="../assets/logo.png">
        <h1>Sign Up</h1>
        <div class="register">
            <div>
                <input type="text" id="name" name="name" v-model="name" placeholder="Enter Name">
            </div>
            <div>
                <input type="email" id="email" name="email" v-model="email" placeholder="Enter Email">
            </div>
            <div>
                <input type="password" id="password" name="password" v-model="password" placeholder="Enter Password">
            </div>
            <button @click="signUp" class=" button">Sign Up</button>
        </div>
        <p>
            <router-link to="/login">Already have an account? Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            let result = axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn('Result:', result);
            if (result.status === 201) {
                this.$router.push('/login');
                // alert('User created successfully');
            }
            this.$router.push('/login');
            localStorage.setItem('user-info', JSON.stringify({ name: this.name, email: this.email, password: this.password }));
        }
    },
    mounted() {
        if (localStorage.getItem('user-info')) {
            this.$router.push('/login');
        }
        console.log('SignUp component mounted');
    }
}
</script>
<style></style>