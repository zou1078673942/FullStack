<template>
    <button
        @click="handleClick"
        class="el-button"
        :disabled="loading"
        :type="nativeType"
        :autofocus="autofocus"
        :class="[
            type?'el-button--'+type:'',
            buttonSize?'el-button--'+buttonSize:'',
            {
                'is-loading':loading,
                'is-round':round,
                'is-circle':circle,
                'is-disabled':buttonDisabled,
                'is-plain':plain
            }
        ]"
        >
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon"></i>
        <!-- {{type}} - {{tit}} -->
        <!-- <span v-if="$slots.default"> -->
            <slot></slot>
        <!-- </span> -->
    </button>
</template>
<script>
    export default {
        name:'ElButton',
        data(){
            return {
                tit:'hello',
            }
        },
        props:{
            nativeType:{
                type:String,
                default:'button'
            },
            type:{
                type:String,
                default:'default'
            },
            round: Boolean,
            circle: Boolean,
            icon: {
                icon: String,
                default:''
            },
            loading: Boolean,
            autofocus: Boolean,
            plain: Boolean,
            size:{
                type:String,
                default:''
            }
        },
        computed:{
            buttonDisabled() {
                return this.disabled
            },
            buttonSize() {
                return this.size
            }
        },
        created() {
            console.log(this.type,this.data)
        },
        methods:{
            handleClick(evt){
                console.log(evt)
            }
        }
    }
</script>
<style>
</style>
