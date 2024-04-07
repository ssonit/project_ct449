<template>
  <div id="register" class="w-50 mt-30">
    <h2 class="tieude text-primary mt-5">Đăng ký</h2>
    <Form @submit="submitRegister" :validation-schema="registerFormSchema">
      <div class="form-group">
        <label for="username">Tên tài khoản</label>
        <Field
          name="username"
          type="text"
          class="form-control"
          v-model="registerLocal.username"
        />
        <ErrorMessage name="username" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <Field
          name="email"
          type="email"
          class="form-control"
          v-model="registerLocal.email"
        />
        <ErrorMessage name="email" class="error-feedback" />
      </div>

      <div class="form-group">
        <label for="password">Mật khẩu</label>
        <Field
          name="password"
          type="password"
          class="form-control"
          v-model="registerLocal.password"
        />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="confirm_password">Xác nhận mật khẩu</label>
        <Field
          name="confirm_password"
          type="password"
          class="form-control"
          v-model="registerLocal.confirm_password"
        />
        <ErrorMessage name="confirm_password" class="error-feedback" />
      </div>

      <div class="form-group mt-4" id="btn_login">
        <button class="btn btn-primary" type="submit">Đăng ký</button>
        <button class="btn btn-outline-primary" @click="backLogin">
          Đăng nhập
        </button>
      </div>
    </Form>
  </div>
</template>
<style>
#register {
  margin: auto;
}

#btn_login {
  text-align: center;
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
  emits: ["submit:register"],
  data() {
    const registerFormSchema = yup.object().shape({
      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      password: yup.string().min(6, "Mật khẩu phải từ 6 kí tự"),
    });
    return {
      registerLocal: {},
      registerFormSchema,
    };
  },
  methods: {
    submitRegister() {
      console.log(this.registerLocal);
      this.$emit("submit:register", this.registerLocal);
    },
    backLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
