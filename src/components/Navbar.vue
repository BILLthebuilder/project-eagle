<template>
    <header>
        <div class="logo-search">
            <div class="logo">
                <a href="#">BrightEvents</a>
            </div>
            <div class="search">
                <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
                <input
                    type="search"
                    name="search events"
                    placeholder="Search events"
                    class="search-bar"
                />
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
            <div class="mobile-menu"></div>
            <div class="sign-in">
                <p>Sign <span>In</span></p>
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
