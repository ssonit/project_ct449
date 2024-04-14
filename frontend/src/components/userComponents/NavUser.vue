<template>
  <div class="nav">
    <div id="logo">Book Store</div>

    <div class="btn_nav">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/book">Book</router-link>
      </div>
      <div>
        <button>Logout</button>
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
      email: localStorage.getItem("email"),
    };
  },
};
</script>
