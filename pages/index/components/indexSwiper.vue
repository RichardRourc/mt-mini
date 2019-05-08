<template>
    <div>
        <swiper class="food-type" :indicator-dots="true" :interval="interval" :duration="1000">
            <swiper-item>
                <view class="food-type-list" :key="idx" v-for="(item, idx) in foodType">
                <view class="food-type-list-image"></view>
                <br>
                <text>{{ item.text }}</text>
                </view>
            </swiper-item>
            <swiper-item>
                <view class="food-type-list" :key="idx" v-for="(item, idx) in foodType">
                <view class="food-type-list-image"></view>
                <br>
                <text>{{ item.text }}</text>
                </view>
            </swiper-item>
            </swiper>
    </div>
</template>

<script>
    export default {
        props:['foodType'],
    }
</script>

<style>
    .food-type{
        position:relative;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        width:98%;
        height:300upx;
        padding:38upx 0upx;
        justify-content: center;
    }
    .food-type-list{
        display:inline-block;
        width:20%;
        height:120upx;
        text-align:center;
        position:relative;
        margin-bottom:16upx;
    }
    .food-type-list text{
        position:relative;
        /* left:-15upx; */
    }
    .food-type-list-image{
        display:inline-block;
        width:96upx;
        height:54upx;
        background-color: skyblue;
    }
</style>
