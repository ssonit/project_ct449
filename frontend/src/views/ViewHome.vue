<script>
import Home from "../components/userComponents/Home.vue";
import Nav from "../components/userComponents/NavUser.vue";
import Footer from "../components/userComponents/Footer.vue";
import bookService from "../services/book.service";
export default {
  components: {
    Home,
    Nav,
    Footer,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async showAllHome() {
      try {
        this.books = await bookService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    navigateToBook(id) {
      this.$router.push("/" + id);
    },
  },
  mounted() {
    this.showAllHome();
  },
};
</script>

<template>
  <Nav></Nav>
  <!-- <Home></Home> -->
  <div id="product_h">
    <div class="book-list">
      <div class="book-item" v-for="item in books" :key="item._id">
        <div>
          <div class="book-item__img">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="book" />
          </div>
          <div class="book-item__info">
            <h4 class="book-item__title">{{ item.name }}</h4>
            <p class="book-item__author">
              {{ item.author }}
            </p>
            <p class="book-item__price">{{ item.price }}</p>
          </div>
          <button class="btn btn-primary" @click="navigateToBook(item._id)">
            Mượn
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- <Footer></Footer> -->
</template>
<style>
#product_h {
  margin: 30px 20px;
}
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.book-item {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 14px;
}

.book-item__img > img {
  border-radius: 6px;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.book-item__info {
  display: flex;
  flex-direction: column;
}

.book-item__title {
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
}
</style>
