<template>
  <el-amap vid="amap" :center="center" :zoom="zoom" :plugin="plugin">
    <el-amap-marker :events="handlerEvent"></el-amap-marker>
    <el-amap-info-window v-if="window" :content="content" :position="position"></el-amap-info-window>
  </el-amap>
</template>

<script>

export default {
  name: 'Map',
  data () {
    return {
      zoom: 16,
      center: [108.977263, 34.156699],
      position: [108.977563, 34.1569699],
      content: '陕西力源仪器设备检测有限公司',
      window: true,
      handlerEvent: {
        click () {
          this.window = !window
        }
      },
      plugin: [
        {
          pName: 'Scale',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        },
        {
          pName: 'OverView',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
