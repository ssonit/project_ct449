<template>
  <div class="dashboard">
    <SidebarNav></SidebarNav>
    <div class="main">
      <InfoUserAdmin></InfoUserAdmin>
      <div class="dashboard-main__table">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <h3>Thông tin sách</h3>
          <button class="btn btn-primary" @click="navigateToCreateBook">
            Thêm mới
          </button>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên sách</th>
              <th scope="col">Tác giả</th>
              <th scope="col">Nhà xuất bản</th>
              <th scope="col">Số lượng</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in books" :key="item._id">
              <th scope="row">{{ item._id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.publisher }}</td>
              <td>{{ item.quantity }}</td>
              <td>
                <div style="display: flex; gap: 10px">
                  <button
                    class="btn btn-primary"
                    @click="navigateToUpdateBook(item._id)"
                  >
                    Sửa
                  </button>
                  <button class="btn btn-danger" @click="deleteBook(item._id)">
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import InfoUserAdmin from "../components/adminComponents/InfoUserAdmin.vue";
import SidebarNav from "../components/adminComponents/SidebarNav.vue";
import bookService from "../services/book.service";
export default {
  components: {
    SidebarNav,
    InfoUserAdmin,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async getAll() {
      try {
        this.books = await bookService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteBook(id) {
      try {
        await bookService.delete(id);
        this.books = this.books.filter((item) => item._id !== id);
      } catch (error) {
        console.log(error);
      }
    },
    navigateToCreateBook() {
      this.$router.push("/admin/book/create");
    },
    navigateToUpdateBook(id) {
      this.$router.push("/admin/book/" + id);
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>
<style>
.dashboard-main__table {
  margin-top: 30px;
}
.dashboard-main__info {
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
}
.dashboard-main__info > div {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
ul {
  padding: 0;
  margin: 0;
}
ul > li {
  list-style-type: none;
}
.dashboard {
  display: flex;
  height: 100%;
}

.main {
  padding: 20px;
  width: 100%;
}
</style>
