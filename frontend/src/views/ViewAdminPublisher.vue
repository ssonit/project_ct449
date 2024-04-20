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
          <h3>Thông tin nhà xuất bản</h3>
          <button class="btn btn-primary" @click="navigateToCreatePublisher">
            Thêm mới
          </button>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nhà xuất bản</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in publishers" :key="item._id">
              <th scope="row">{{ item._id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.address }}</td>

              <td>
                <div style="display: flex; gap: 10px">
                  <button
                    class="btn btn-primary"
                    @click="navigateToUpdatePublisher(item._id)"
                  >
                    Sửa
                  </button>
                  <button
                    class="btn btn-danger"
                    @click="deletePublisher(item._id)"
                  >
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
import publisherService from "../services/publisher.service";
export default {
  components: {
    SidebarNav,
    InfoUserAdmin,
  },
  data() {
    return {
      publishers: [],
    };
  },
  methods: {
    async getAll() {
      try {
        this.publishers = await publisherService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async deletePublisher(id) {
      try {
        await publisherService.delete(id);
        this.publishers = this.publishers.filter((item) => item._id !== id);
      } catch (error) {
        console.log(error);
      }
    },
    navigateToCreatePublisher() {
      this.$router.push("/admin/publisher/create");
    },
    navigateToUpdatePublisher(id) {
      this.$router.push("/admin/publisher/" + id);
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>
