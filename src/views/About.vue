<template>
  <div class="about">
    <h1>Feel free to play (freeStyle)</h1>
    <div class="home">
      <p>{{ count }}</p>
      <el-button type="default" @click="INCREMENT(2)">INCREMENT</el-button>
      <el-button type="primary" @click="DECREMENT(2)">DECREMENT</el-button>
      <el-input v-model="city" placeholder="请输入城市" />
      <!-- <el-button type="danger" @click="getCityWeather(city)">获取天气</el-button> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'

@Component
export default class Home extends Vue {
  city: string = '上海'
  count: number = 0
  INCREMENT: Function = function () {}
  DECREMENT: Function = function () {}
  // @Getter('count') 
  // @Mutation('INCREMENT') 
  // @Mutation('DECREMENT') 
  // @Action('getTodayWeather') 

  // getCityWeather (city: string) {
    //   this.getTodayWeather({ city: city }).then((res: Ajax.AjaxResponse) => {
    //     const { low, high, type } = res.data.forecast[0]
    //     this.$message.success(`${city}今日：${type} ${low} - ${high}`)
    // })
  // }
}
</script>
