<template>
  <div>
    <Nav></Nav>
    <div id="book-detail">
      <div class="book-detail__img">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="book" />
      </div>
      <div>
        <div class="book-detail__info">
          <h4 class="book-detail__title">{{ book.name }}</h4>
          <p class="book-detail__author">Tác giả: {{ book.author }}</p>
          <p class="book-detail__price">Giá: {{ book.price }}</p>
          <p class="book-detail__quantity">Số lượng: {{ book.quantity }}</p>
        </div>
        <form @submit.prevent="borrowBook">
          <div class="form-date">
            <div class="date-picker">
              <label for="start-date">Ngày mượn</label>
              <div class="input-group">
                <input
                  type="date"
                  class="form-control"
                  v-model="dataOfBorrow.dateOfBorrow"
                />
                <div class="input-group-append">
                  <div class="input-group-text bg-white h-100">
                    <i class="fa fa-calendar"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="date-picker">
              <label for="start-date">Ngày trả</label>
              <div class="input-group">
                <input
                  type="date"
                  class="form-control"
                  v-model="dataOfBorrow.dateOfReturn"
                />
                <div class="input-group-append">
                  <div class="input-group-text bg-white h-100">
                    <i class="fa fa-calendar"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Mượn</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.form-date {
  display: flex;
  gap: 10px;
  align-items: center;
}
.date-picker {
  display: flex;
  align-items: stretch;
  gap: 10px;
  flex-direction: column;
}

#book-detail {
  display: flex;
  gap: 10px;
  margin: 30px 200px;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 16px;
}

.book-detail__img > img {
  border-radius: 4px;
  width: 360px;
}

.book-detail__title {
  font-size: 40px;
  font-weight: 600;
}
.book-detail__author {
  font-size: 20px;
  font-weight: 500;
}
</style>

<script>
import Nav from "../components/userComponents/NavUser.vue";
import borrowBookService from "../services/borrowBook.service";
import bookService from "../services/book.service";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      book: {},
      dataOfBorrow: {
        dateOfBorrow: new Date().toISOString().slice(0, 10),
        dateOfReturn: new Date().toISOString().slice(0, 10),
      },
    };
  },
  methods: {
    async showBookDetail() {
      try {
        const id = this.$route.params.id;
        this.book = await bookService.getById(id);
      } catch (error) {
        console.log(error);
      }
    },

    async borrowBook() {
      try {
        const id = this.$route.params.id;
        const user_id = JSON.parse(localStorage.getItem("user"))._id;

        const startDate = new Date(this.dataOfBorrow.dateOfBorrow).getTime();
        const endDate = new Date(this.dataOfBorrow.dateOfReturn).getTime();

        if (startDate > endDate) {
          alert("Ngày trả phải sau ngày mượn");
          return;
        }

        await borrowBookService.create({
          reader_id: user_id,
          book_id: id,
          dateOfBorrow: new Date(this.dataOfBorrow.dateOfBorrow).toISOString(),
          dateOfReturn: new Date(this.dataOfBorrow.dateOfReturn).toISOString(),
        });
        this.$router.push("/borrow-book");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.showBookDetail();
  },
};
</script>
