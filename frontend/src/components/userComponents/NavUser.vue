<template>
  <div class="nav">
    <div id="logo">
      <router-link style="text-decoration: none" to="/">Book Store</router-link>
    </div>

    <div class="btn_nav">
      <div>
        <router-link to="/">Trang chủ</router-link>
      </div>
      <div v-if="loggedIn">
        <router-link to="/borrow-book">Sách đã mượn</router-link>
      </div>
      <div v-if="loggedIn">
        <button @click="handleLogout">Đăng xuất</button>
      </div>
      <div v-if="!loggedIn">
        <button @click="navigateToLogin">Đăng nhập</button>
      </div>
    </div>
  </div>
</template>

<style>
.nav {
  background-color: rgb(255, 255, 255);
  height: 70px;
  display: flex;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px rgb(222, 222, 222);
}
.btn_nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
}

.btn_nav div > a {
  display: inline-block;
  text-decoration: none;
  margin: 0px 10px 0px 10px;
  padding: 10px 10px 10px 10px;
  font-size: 15pt;
  font-weight: 500;
  cursor: pointer;
}
.btn_nav button {
  padding: 10px;
  font-size: 15pt;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
.btn_nav div:hover {
  background-color: rgb(222, 222, 222);
  border-radius: 5px;
  color: blue;
}

#logo {
  margin-right: auto;
  margin-left: 30px;
  margin-top: 15px;
  font-weight: 500;
  font-size: 20pt;
  color: blue;
}
.tieude {
  text-align: center;
  font-size: 25pt;
  font-weight: 700;
  color: brown;
  margin: 5px 0px 5px 0;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<script>
export default {
  data() {
    return {
      loggedIn: JSON.parse(localStorage.getItem("user"))?._id ? true : false,
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push("/login");
    },
    handleLogout() {
      localStorage.removeItem("user");
      this.loggedIn = false;
      this.$router.push("/");
    },
  },
};
</script>
