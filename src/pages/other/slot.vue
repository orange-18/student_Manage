<template>
    <div>
        <!-- 插槽 -->
        chacao
        <span class="fa fa-user"></span>
        <div>使用slot分发内容</div>

        <div style="margin-top:30px">
            <child>
                <div>西红柿炒番茄</div>
            </child>
        </div>

        <!-- 具名插槽 -->
        <div>
            <child></child>
        </div>
    </div>
</template>
<script>
import child from '../../components/child'
export default {
    components: {child}
}
</script>