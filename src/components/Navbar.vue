<template>
  <div>
    <div class="navbar-top"></div>
    <nav class="nav">
      <router-link to="/favourites" class="nav__item">
        <img :src="Like" alt="img" />
        <span>Избранное</span>
      </router-link>
      <router-link to="/" class="nav__item">
        <img :src="Stock" alt="img" />
        <span>Склад</span>
      </router-link>
      <router-link to="/deals" class="nav__item">
        <img :src="Deals" alt="img" />
        <span>Сделки</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import Like from "../assets/like.svg";
import Stock from "../assets/stock.svg";
import Deals from "../assets/deals.svg";
</script>

<style scoped lang="scss">
.navbar-top {
  background: #e0e3ee;
  border-radius: 0px 0px 10px;
  width: 100%;
  height: 40px;
  border-radius: 0px 0px 10px 10px;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 86px;
    border-radius: 10px;
    transition: all 0.3s;
    padding: 7px;
    cursor: pointer;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #2d3b87;
    &:hover {
      background: #f4f5f9;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
}
.router-link-active {
  background: #f4f5f9;
}

@media (max-width: 350px) {
  .nav {
    justify-content: center;
  }
}
</style>