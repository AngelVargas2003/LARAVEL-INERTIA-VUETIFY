<template>
    <div>
        <v-navigation-drawer
        :right="$vuetify.rtl"
        app
        mini-variant-width="68"
        width="260"
        class="app-navigation-menu"
        >
            <vertical-nav-menu></vertical-nav-menu>
        </v-navigation-drawer>
        <refugios-vue></refugios-vue>
    </div>
</template>

<script>
import VerticalNavMenu from "./nav-items/VerticalNavMenu.vue"
import RefugiosVue from "./tables/datatable/Refugios.vue"
    export default {
        components:{
            RefugiosVue,
            VerticalNavMenu
        }
    }
</script>
