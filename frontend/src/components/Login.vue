<template>
  <div id="login" class="w-50">
    <h2 class="tieude text-primary mt-5">Login</h2>
    <Form @submit="submitLogin" :validation-schema="loginFormSchema">
      <div class="form-group">
        <label for="email">E-mail</label>
        <Field
          name="email"
          type="email"
          class="form-control"
          v-model="loginLocal.email"
        />
        <ErrorMessage name="email" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu</label>
        <Field
          name="password"
          type="password"
          class="form-control"
          v-model="loginLocal.password"
        />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="form-group form-check">
        <input name="favorite" type="checkbox" class="form-check-input" />
        <label for="favorite" class="form-check-label">
          <strong>Lưu mật khẩu</strong>
        </label>
      </div>
      <div class="form-group mt-4" id="btn_login">
        <button class="btn btn-primary" type="submit">Đăng nhập</button>
        <button class="btn btn-outline-primary" @click="gotoRegister()">
          Đăng ký
        </button>
      </div>
    </Form>
  </div>
</template>
<style>
#login {
  margin: auto;
}

#btn_login {
  text-align: center;
  margin: 5px;
}
#btn_login button {
  margin: 0 5px 0 5px;
}
.error-feedback {
  color: red;
}
</style>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:login"],
  data() {
    const loginFormSchema = yup.object().shape({
      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      password: yup.string().min(6, "Mật khẩu phải từ 6 kí tự"),
    });
    return {
      loginLocal: {},
      loginFormSchema,
    };
  },
  methods: {
    submitLogin() {
      console.log("submitLogin", this.loginLocal);
      this.$emit("submit:login", this.loginLocal);
    },
    gotoRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
