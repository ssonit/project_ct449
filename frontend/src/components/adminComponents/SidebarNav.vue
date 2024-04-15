<template>
  <aside class="sidebar">
    <div class="h-100">
      <div id="logo">Book Store</div>
      <ul class="sidebar-nav">
        <li class="sidebar-header">Admin</li>
        <li class="sidebar-item" @click="navigateToManageBook">Quản lý sách</li>
        <li class="sidebar-item" @click="navigateToManagePublisher">
          Nhà xuất bản
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {
  methods: {
    navigateToManageBook() {
      this.$router.push("/admin");
    },
    navigateToManagePublisher() {
      this.$router.push("/admin/publisher");
    },
  },
};
</script>
<style>
ul {
  padding: 0;
  margin: 0;
}
ul > li {
  list-style-type: none;
}
.sidebar {
  background-color: #f0f0f0;
  height: 100vh;
  width: 360px;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.sidebar-header {
  font-size: 20px;
  padding: 8px 30px;
  font-weight: bold;
}
.sidebar-item {
  padding: 16px 30px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.1s linear;
}
.sidebar-item:hover {
  background-color: blue;
  color: white;
}
</style>
