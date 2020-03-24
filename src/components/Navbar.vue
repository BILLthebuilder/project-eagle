<template>
    <header>
        <div class="logo-search">
            <div class="logo">
                <a href="#">BrightEvents</a>
            </div>
            <div class="search">
                <input type="search" name="search events" placeholder="Search events" />
            </div>
        </div>
        <nav class="top-links">
            <div>
                <p>Organize</p>
                <a>
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </a>
            </div>
            <div>
                <p>Create Event</p>
                <a>
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </a>
            </div>
            <div>
                <p>Sign In</p>
                <a>
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
};
</script>

<style lang="scss" scoped>
@import '../scss/navbar.scss';
</style>
