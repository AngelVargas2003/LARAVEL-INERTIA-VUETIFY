<template>
    <v-app class="vertical-nav-menu-container" @mouseenter="isMouseHovered = true" @mouseleave="isMouseHovered = false" >
        <slot name="v-nav-menu-header">
            <VerticalNavMenuHeader></VerticalNavMenuHeader>
        </slot>
        <div  class="shadow bottom" :class="{'d-block':shallShadowBottom}">
            <perfect-scrollbar
            class="ps-nav-menu-items"
            :options="perfectScrollbarOptions"
            @ps-scroll-y="
            evt=>{
                shallShadowBottom = evt.srcElement.scrollTop > 0
            }
            "
            >
                <v-list>
                    
                </v-list>
            </perfect-scrollbar>
        </div>
    </v-app>
</template>
<script>
import VerticalNavMenuHeader from "./VerticalNavMenuHeader.vue"
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import { ref, provide } from '@vue/composition-api'
import useVerticalNavMenu from './useVerticalNavMenu' 
export default{
    components: { VerticalNavMenuHeader,PerfectScrollbar },
    setup(){
      const { resolveNavItemComponent, isMouseHovered } = useVerticalNavMenu()
      provide('isMouseHovered', isMouseHovered)
      const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }
     const shallShadowBottom = ref(false)
     provide('openGroups', ref([]))
    return{
        perfectScrollbarOptions,
        shallShadowBottom,
        resolveNavItemComponent,
        isMouseHovered
    }
    }
}

</script>
<style lang="scss">
    @import '~vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
</style>
<style lang="scss">

.vertical-nav-menu-container {
  height: 100%;
  .ps-nav-menu-items {
    height: calc(100% - 57px) !important;
  }

  // menu scroll shadow
  .shadow-bottom {
    display: none;
    position: absolute;
    z-index: 2;
    height: 50px;
    width: 100%;
    left: -6px;
    pointer-events: none;
    margin-top: -0.7rem;
    filter: blur(5px);
  }
}
</style>