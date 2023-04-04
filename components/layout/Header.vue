<template>
  <header class="header">
    <span class="brand"> NuxtJS </span>
    <nav class="nav">
      <ul>
        <nuxt-link to="/">
          <li>Home</li>
        </nuxt-link>
        <nuxt-link to="/about">
          <li>About</li>
        </nuxt-link>
        <nuxt-link to="/product">
          <li>Product</li>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  height: 80px;
  background: rgb(192, 35, 171);
  padding: 0px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    font-size: 28px;
    font-weight: 600;
    color: #fff;
  }

  .nav {
    ul {
      display: flex;
      gap: 16px;
      a {
        text-decoration: none;
      }
      li {
        cursor: pointer;
        display: inline;
        color: #fff;
        font-size: 18px;

        &:hover {
          color: #533;
        }
      }
    }
  }
}
</style>
