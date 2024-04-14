<template>
  <div>
    <Nav></Nav>
    <h3 style="padding: 20px 0 0 20px">Sách đã mượn</h3>
    <div id="product_h">
      <div class="book-list">
        <div class="book-item" v-for="item in borrowBook" :key="item._id">
          <div>
            <div class="book-item__img">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="book" />
            </div>
            <div class="book-item__info">
              <h4 class="book-item__title">{{ item.book.name }}</h4>
              <p class="book-item__author">
                {{ item.book.author }}
              </p>
              <p class="book-item__price">{{ item.book.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/userComponents/NavUser.vue";
import borrowBookService from "../services/borrowBook.service";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      borrowBook: [],
    };
  },
  methods: {
    async getAll() {
      try {
        const user_id = JSON.parse(localStorage.getItem("user"))._id;
        const query = { user_id };
        const params = new URLSearchParams(query);
        const queryString = params.toString();
        this.borrowBook = await borrowBookService.getAll(queryString);
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
