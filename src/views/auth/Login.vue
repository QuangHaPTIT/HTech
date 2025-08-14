<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <div class="logo">
          <i class="admin-icon">👤</i>
        </div>
        <h1>Đăng nhập</h1>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              :class="{ error: errors.email }"
              placeholder="Nhập email của bạn"
              @blur="validateEmail"
              @input="clearError('email')"
            />
            <i class="input-icon">📧</i>
          </div>
          <div v-if="errors.email" class="error-message show">
            {{ errors.email }}
          </div>
        </div>

        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <div class="input-wrapper">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              :class="{ error: errors.password }"
              placeholder="Nhập mật khẩu"
              @blur="validatePassword"
              @input="clearError('password')"
            />
            <i class="input-icon">🔐</i>
            <button
              type="button"
              class="password-toggle"
              @click="togglePassword"
            >
              {{ showPassword ? "👁️" : "👁️‍🗨️" }}
            </button>
          </div>
          <div v-if="errors.password" class="error-message show">
            {{ errors.password }}
          </div>
        </div>

        <div class="form-options">
          <label class="checkbox-container">
            <input type="checkbox" v-model="form.remember" />
            <span class="checkmark"></span>
            Ghi nhớ đăng nhập
          </label>
          <a href="#" class="forgot-link" @click.prevent="handleForgotPassword">
            Quên mật khẩu?
          </a>
        </div>

        <button
          type="submit"
          class="login-btn"
          :disabled="isLoading"
          :class="{ loading: isLoading }"
        >
          <span v-if="!isLoading">Đăng nhập</span>
          <div v-else class="loading-spinner">
            <div class="spinner"></div>
            <span>Đang xử lý...</span>
          </div>
        </button>

        <button
          type="button"
          class="login-btn btn-google"
          :disabled="isLoading"
          :class="{ loading: isLoading }"
          @click="handleGoogleLogin"
        >
          <i class="fab fa-google"></i>
          <span>Đăng nhập với Google</span>
        </button>

        <div v-if="loginError" class="login-error">
          <i>⚠️</i>
          {{ loginError }}
        </div>
      </form>

      <div class="login-footer">
        <p>© 2025 Rikkei.</p>
      </div>
    </div>

    <!-- Loading Overlay -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-content">
        <div class="big-spinner"></div>
        <p>Đang đăng nhập...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false,
      },
      errors: {
        email: "",
        password: "",
      },
      showPassword: false,
      isLoading: false,
      loginError: "",
    };
  },
  props: {},
  methods: {
    handleLogin() {
      if (!this.validateForm()) {
        return;
      }

      this.isLoading = true;
      this.loginError = "";

      setTimeout(() => {
        if (
          this.form.email === "quangha123@gmail.com" &&
          this.form.password == "123456"
        ) {
          this.$router.push("/home");
        } else {
          this.loginError = "Email hoặc mật khẩu không đúng";
        }

        this.isLoading = false;
        return;
      }, 1500);
    },
    clearError(error) {
      this.errors[error] = "";
      this.loginError = "";
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim()) {
        this.errors.email = "Email không được để trống";
        return false;
      }

      if (!emailRegex.test(this.form.email)) {
        this.errors.email = "Email không đúng định dạng";
        return false;
      }

      this.errors.email = "";
      return true;
    },
    validatePassword() {
      if (!this.form.password.trim()) {
        this.errors.password = "Mật khẩu không được để trống";
        return false;
      }

      if (this.form.password.length < 6) {
        this.errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
        return false;
      }

      this.errors.password = "";
      return true;
    },
    validateForm() {
      const emailValid = this.validateEmail();
      const passwordValid = this.validatePassword();
      return emailValid && passwordValid;
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    handleForgotPassword() {
      alert("Chức năng quên mật khẩu - chưa implement");
      // TODO: Redirect to forgot password page
      // this.$router.push('/forgot-password');
    },

    handleGoogleLogin() {
      alert("Chức năng đăng nhập Google - chưa implement");
      // TODO: Implement Google OAuth
    },
  },
  components: {},
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.login-container {
  background: rgba(255, 255, 255, 0.99);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 420px;
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.login-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.25);
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo {
  margin-bottom: 20px;
}

.admin-icon {
  font-size: 4rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-header h1 {
  color: #2d3748;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #2d3748, #4a5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-header p {
  color: #718096;
  font-size: 1rem;
  font-weight: 400;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #2d3748;
  font-weight: 600;
  font-size: 0.9rem;
}

.input-wrapper {
  position: relative;
}

.form-input {
  box-sizing: border-box;
  width: 100%;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
  color: #2d3748;
}

.form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.15);
  transform: scale(1.02);
  background: #ffffff;
}

.form-input.error {
  border-color: #e53e3e;
  animation: shake 0.4s ease-in-out;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #a0aec0;
  transition: color 0.3s ease;
}

.form-input:focus + .input-icon {
  color: #667eea;
}

.password-toggle {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.password-toggle:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.error-message {
  color: #e53e3e;
  font-size: 0.85rem;
  margin-top: 8px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.error-message.show {
  opacity: 1;
  transform: translateY(0);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  font-size: 0.9rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 28px;
  color: #4a5568;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.checkbox-container:hover input ~ .checkmark {
  border-color: #667eea;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #667eea;
  border-color: #667eea;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.forgot-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.forgot-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-google {
  margin-top: 16px;
  background: #ffffff;
  color: #3c4043;
  border: 1px solid #dadce0;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.30), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: 0.25px;
}

.btn-google:hover {
  background: #f8f9fa;
  border-color: #c6c9cc;
  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.30), 0 4px 8px 3px rgba(60, 64, 67, 0.15);
  transform: translateY(-1px);
}

.btn-google:active {
  background: #f1f3f4;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.30), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  transform: translateY(0);
}

.btn-google i {
  font-size: 18px;
  color: #4285f4;
  transition: transform 0.2s ease;
}

.btn-google:hover i {
  transform: scale(1.1);
}

.btn-google span {
  font-size: 14px;
  line-height: 20px;
}

.btn-google:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.btn-google:disabled:hover {
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.30), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.login-btn.loading {
  background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.login-error {
  background: rgba(229, 62, 62, 0.1);
  border: 1px solid rgba(229, 62, 62, 0.2);
  color: #e53e3e;
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 16px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.login-footer {
  text-align: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(226, 232, 240, 0.6);
}

.login-footer p {
  color: #a0aec0;
  font-size: 0.85rem;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(45, 55, 72, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.loading-content {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.big-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(102, 126, 234, 0.3);
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

.loading-content p {
  color: #4a5568;
  font-size: 1rem;
  font-weight: 500;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-4px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(4px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 480px) {
  .login-container {
    padding: 24px;
    margin: 10px;
  }

  .login-header h1 {
    font-size: 2rem;
  }

  .form-input {
    padding: 14px 45px 14px 45px;
  }

  .form-options {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
}
</style>
