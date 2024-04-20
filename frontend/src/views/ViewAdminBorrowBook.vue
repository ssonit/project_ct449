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
          <h3>Thông tin mượn sách</h3>
          <button class="btn btn-primary">Thêm mới</button>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên sách</th>
              <th scope="col">Người mượn</th>
              <th scope="col">Ngày mượn</th>
              <th scope="col">Ngày trả</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in borrowBooks" :key="item._id">
              <th scope="row">{{ item._id }}</th>
              <td>{{ item.book.name }}</td>
              <td>{{ item.reader.username }}</td>
              <td>
                {{ new Date(item.dateOfBorrow).toISOString().slice(0, 10) }}
              </td>
              <td>
                {{ new Date(item.dateOfReturn).toISOString().slice(0, 10) }}
              </td>
              <td>
                <div style="display: flex; gap: 10px">
                  <button class="btn btn-primary">Sửa</button>
                  <button class="btn btn-danger">Xóa</button>
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
import borrowBookService from "../services/borrowBook.service";
export default {
  components: {
    SidebarNav,
    InfoUserAdmin,
  },
  data() {
    return {
      borrowBooks: [],
    };
  },
  methods: {
    async getAll() {
      try {
        this.borrowBooks = await borrowBookService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>
