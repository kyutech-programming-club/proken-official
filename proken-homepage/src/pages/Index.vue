<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="300" />

    <h1>九工大プロ研へようこそ！</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
  </p>

  <div>
  <h2>Blog Posts</h2>
  <div v-for="item in $page.allPost.edges">
    <g-link :to="item.node.path">{{ item.node.title }}</g-link>
  </div>
</div>

  </Layout>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query posts {
  allPost{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>
