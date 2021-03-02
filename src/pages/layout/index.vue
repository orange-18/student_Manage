<template>
    <div>
        <sideBar class="sidebar-container"></sideBar>
    </div>
</template>
<script>
import sideBar from './components/sideBar'
export default {
    name: 'Layout',
    data(){
        return{

        }
    },
    components: {
        sideBar
    }
}
</script>