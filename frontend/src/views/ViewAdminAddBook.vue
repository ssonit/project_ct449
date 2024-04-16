<template>
  <div class="dashboard">
    <SidebarNav></SidebarNav>
    <div class="main">
      <h3>Thêm mới</h3>
      <BookForm></BookForm>
    </div>
  </div>
</template>

<script>
import SidebarNav from "../components/adminComponents/SidebarNav.vue";
import BookForm from "../components/adminComponents/BookForm.vue";
export default {
  components: {
    SidebarNav,
    BookForm,
  },
};
</script>
