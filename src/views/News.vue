<template>
  <div class="news">
    <div class="banner">
    </div>
    <Row>
      <Col :span="8" :offset="4" class="bg-gray"><news-list></news-list></Col>
      <Col :span="8" class="bg-gray"><news-list></news-list></Col>
    </Row>
    <Row>
      <Col :span="8" :offset="4" class="bg-gray"><news-list></news-list></Col>
      <Col :span="8" class="bg-gray"><news-list></news-list></Col>
    </Row>
    <Row>
      <Col :span="8" :offset="4" class="bg-gray"><news-list></news-list></Col>
      <Col :span="8" class="bg-gray"><news-list></news-list></Col>
    </Row>
  </div>
</template>

<script>
import newsList from '@/components/newsList'
export default {
  name: 'News',
  components: {
    newsList
  }
}
</script>

<style scoped lang="less">
.banner {

}
</style>
