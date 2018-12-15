<template>
  <div id="app">
    <Layout>
      <Header>
        <navbar></navbar>
      </Header>
      <Content>
        <router-view/>
      </Content>
      <Footer>
        <i-footer></i-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import iFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    navbar,
    iFooter
  }
}
</script>

<style lang="less" scoped>

</style>
