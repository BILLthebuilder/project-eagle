<template>
    <div>
        <Navbar />
        <Welcome />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import Welcome from '@/components/Welcome';

export default {
    name: 'Home',
    components: {
        Navbar,
        Welcome
    }
};
</script>
