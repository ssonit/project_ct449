<template>
  <h3>Admin dashboard</h3>
  <div class="dashboard-main__info">
    <h4>Thông tin</h4>
    <div>
      <p>ID: {{ user._id }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Tên người dùng: {{ user.username }}</p>
      <p>SĐT: {{ user.phone || "000" }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
};
</script>
