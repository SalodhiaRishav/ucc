<template>
    <div id="app">
        <navbar></navbar>
        <router-view/>
    </div>
</template>

<script>
import Navbar from './components/Common/Navbar';

export default {
    name: 'App',
    components: {
        Navbar
    }
};
</script>
