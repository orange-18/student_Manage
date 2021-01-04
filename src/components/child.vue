<template>
    <div>
        <div>今日食堂菜品</div>
        <slot></slot>

        <br>
        <br>

        <!-- 具名插槽 -->
        <div>
            <h1>我是页头标题</h1>
            <slot></slot>
        </div>

        <br>
        
        <div>
            <h1>我是页尾标题</h1>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import slot from '../pages/other/slot.vue'
export default {
  components: { slot },
    name: 'child'
}
</script>