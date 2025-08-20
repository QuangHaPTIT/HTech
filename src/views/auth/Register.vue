<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-header">
        <div class="logo">
          <i class="user-plus-icon">👤➕</i>
        </div>
        <h1>Đăng ký</h1>
      </div>

      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">Họ</label>
            <div class="input-wrapper">
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                class="form-input"
                :class="{ error: errors.firstName }"
                placeholder="Nhập họ của bạn"
                @blur="validateFirstName"
                @input="clearError('firstName')"
              />
              <i class="input-icon">👤</i>
            </div>
            <div v-if="errors.firstName" class="error-message show">
              {{ errors.firstName }}
            </div>
          </div>

          <div class="form-group">
            <label for="lastName">Tên</label>
            <div class="input-wrapper">
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                class="form-input"
                :class="{ error: errors.lastName }"
                placeholder="Nhập tên của bạn"
                @blur="validateLastName"
                @input="clearError('lastName')"
              />
              <i class="input-icon">👤</i>
            </div>
            <div v-if="errors.lastName" class="error-message show">
              {{ errors.lastName }}
            </div>
          </div>
        </div>

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
          <label for="phone">Số điện thoại</label>
          <div class="input-wrapper">
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              class="form-input"
              :class="{ error: errors.phone }"
              placeholder="Nhập số điện thoại"
              @blur="validatePhone"
              @input="clearError('phone')"
            />
            <i class="input-icon">📱</i>
          </div>
          <div v-if="errors.phone" class="error-message show">
            {{ errors.phone }}
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
          <div class="password-strength">
            <div class="strength-bar" :class="passwordStrength.class">
              <div
                class="strength-fill"
                :style="{ width: passwordStrength.width }"
              ></div>
            </div>
            <span class="strength-text">{{ passwordStrength.text }}</span>
          </div>
        </div>

        <div class="form-group">
          <label for="confirmPassword">Xác nhận mật khẩu</label>
          <div class="input-wrapper">
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="form-input"
              :class="{ error: errors.confirmPassword }"
              placeholder="Nhập lại mật khẩu"
              @blur="validateConfirmPassword"
              @input="clearError('confirmPassword')"
            />
            <i class="input-icon">🔐</i>
            <button
              type="button"
              class="password-toggle"
              @click="toggleConfirmPassword"
            >
              {{ showConfirmPassword ? "👁️" : "👁️‍🗨️" }}
            </button>
          </div>
          <div v-if="errors.confirmPassword" class="error-message show">
            {{ errors.confirmPassword }}
          </div>
        </div>

        <div class="form-group">
          <label for="birthDate">Ngày sinh</label>
          <div class="input-wrapper">
            <input
              id="birthDate"
              v-model="form.birthDate"
              type="date"
              class="form-input"
              :class="{ error: errors.birthDate }"
              @blur="validateBirthDate"
              @input="clearError('birthDate')"
            />
            <i class="input-icon">🎂</i>
          </div>
          <div v-if="errors.birthDate" class="error-message show">
            {{ errors.birthDate }}
          </div>
        </div>

        <div class="form-group">
          <label for="gender">Giới tính</label>
          <div class="radio-group">
            <label class="radio-container">
              <input type="radio" v-model="form.gender" value="male" />
              <span class="radio-mark"></span>
              Nam
            </label>
            <label class="radio-container">
              <input type="radio" v-model="form.gender" value="female" />
              <span class="radio-mark"></span>
              Nữ
            </label>
            <label class="radio-container">
              <input type="radio" v-model="form.gender" value="other" />
              <span class="radio-mark"></span>
              Khác
            </label>
          </div>
        </div>

        <div class="form-options">
          <label class="checkbox-container">
            <input type="checkbox" v-model="form.agreeTerms" />
            <span class="checkmark"></span>
            Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật
          </label>
        </div>

        <div class="form-options">
          <label class="checkbox-container">
            <input type="checkbox" v-model="form.subscribe" />
            <span class="checkmark"></span>
            Nhận thông báo và khuyến mãi qua email
          </label>
        </div>

        <button
          type="submit"
          class="register-btn"
          :disabled="isLoading || !form.agreeTerms"
          :class="{ loading: isLoading, disabled: !form.agreeTerms }"
        >
          <span v-if="!isLoading">Đăng ký</span>
          <div v-else class="loading-spinner">
            <div class="spinner"></div>
            <span>Đang xử lý...</span>
          </div>
        </button>

        <button
          type="button"
          class="register-btn btn-google"
          :disabled="isLoading"
          :class="{ loading: isLoading }"
          
        >
          <i class="fab fa-google"></i>
          <span>Đăng ký với Google</span>
        </button>

        <div v-if="registerError" class="register-error">
          <i>⚠️</i>
          {{ registerError }}
        </div>
      </form>

      <div class="register-footer">
        <p>
          Đã có tài khoản?
          <router-link to="/login" class="login-link"
            >Đăng nhập ngay</router-link
          >
        </p>
        <p>© 2025 Rikkei.</p>
      </div>
    </div>

    <!-- Loading Overlay -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-content">
        <div class="big-spinner"></div>
        <p>Đang tạo tài khoản...</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
        gender: "",
        agreeTerms: false,
        subscribe: false,
      },
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
      },
      showPassword: false,
      showConfirmPassword: false,
      isLoading: false,
      registerError: "",
    };
  },
  computed: {
    passwordStrength() {
      const password = this.form.password;
      if (!password) {
        return { class: '', width: '0%', text: '' };
      }
      
      let score = 0;
      if (password.length >= 8) score++;
      if (/[a-z]/.test(password)) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/\d/.test(password)) score++;
      if (/[^a-zA-Z\d]/.test(password)) score++;
      
      if (score < 3) {
        return { class: 'weak', width: '33%', text: 'Yếu' };
      } else if (score < 5) {
        return { class: 'medium', width: '66%', text: 'Trung bình' };
      } else {
        return { class: 'strong', width: '100%', text: 'Mạnh' };
      }
    }
  },
  methods: {
    validateFirstName() {
        if (!this.form.firstName.trim()) {
            this.errors.firstName = "Vui lòng nhập họ";
            return false;
        }

        if (this.form.firstName.trim().length < 2) {
            this.errors.lastName = "Họ phải có ít nhất 2 kí tự";
            return false;
        }
        this.errors.firstName = "";
        return true;
    },
    validateLastName() {
        if (!this.form.lastName.trim()) {
            this.errors.lastName = "Vui lòng nhập tên";
            return false;
        }

        if (this.form.lastName.trim().length < 2) {
            this.errors.lastName = "Tên phải có ít nhất 2 kí tự";
            return false;

        }

        this.lastName = this.errors.lastName = "";
        return true;
    },
    validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.form.email.trim()) {
            this.errors.email = "";
            return false;
        }

        if (!emailRegex.test(this.form.email.trim())) {
            this.errors.email = "Email không hợp lệ";
            return false;
        }

        this.errors.email = '';
        return true;
    },
    validatePhone() {
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!this.form.phone.trim()) {
            this.errors.phone = "Vui lòng nhập số điện thoại";
            return false;
        }

        if (!phoneRegex.test(this.form.phone.trim())) {
            this.errors.phone = "Số điện thoại không hợp lệ";
            return false;
        }

        this.errors.phone = '';
        return true;
    },
    validatePassword() {
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
        if (!this.form.password) {
            this.errors.password = "Vui lòng nhập mật khẩu";
            return false;
        }

        if (this.form.password.length < 6) {
            this.errors.password = "Mật khẩu phải có ít nhất 6 kí tự";
            return false;
        }
        
        if (!passwordRegex.test(this.form.password)) {
            this.errors.password = "Mật khẩu phải có chữ hoa, chữ thường và số";
            return false;
        }

        this.errors.password = "";
        return true;
    },
    validateConfirmPassword() {
        if (!this.form.confirmPassword) {
            this.errors.confirmPassword = "Vui lòng xác nhận mật khẩu";
            return false;
        }

        if (this.form.confirmPassword !== this.form.password) {
            this.errors.confirmPassword = "Mật khẩu xác nhận không khớp";
            return false;
        }

        this.errors.confirmPassword = '';
        return true;
    },
    validateBirthDate() {
        if (!this.form.birthDate) {
            this.errors.birthDate = "Vui lòng nhập ngày sinh";
            return false;
        }

        const birthDate = new Date(this.form.birthDate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        if (age < 13) {
            this.errors.birthDate = "Bạn phải từ 13 tuổi trở lên";
            return false;
        }

        this.errors.birthDate = '';
        return true;
    },
    clearError(field) {
        this.errors[field] = '';
    },
    togglePassword() {
        this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
        this.showConfirmPassword = !this.showConfirmPassword;
    },
    validateForm() {
        const isFirstNameValid = this.validateFirstName();
        const isLastNameValid = this.validateLastName();
        const isEmailValid = this.validateEmail();
        const isPhoneValid = this.validatePhone();
        const isPasswordValid = this.validatePassword();
        const isConfirmPasswordValid = this.validateConfirmPassword();
        const isBirthDateValid = this.validateBirthDate();

        return isFirstNameValid && isLastNameValid && isEmailValid && 
         isPhoneValid && isPasswordValid && isConfirmPasswordValid && 
         isBirthDateValid && this.form.agreeTerms;
    },
    async handleRegister() {
        this.registerError = '';
        if (!this.validateForm()) {
            this.registerError = "Vui lòng kiểm tra các trường thông tin";
            return;
        }

        try {
            this.isLoading = true; // Hiện loading khi đang xử lí;

            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert("Đăng ký thành công!");
            this.$router.push("/login");
        } catch (error) {
            this.registerError = "Đăng ký không thành công. Vui lòng thử lại sau.";
        } finally {
            this.isLoading = false; // Tắt loading dù thành công hay thất bại
        }
    }
  },
};
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.register-container {
  background: rgba(255, 255, 255, 0.99);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 520px;
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.register-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.25);
}

.register-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo {
  margin-bottom: 20px;
}

.user-plus-icon {
  font-size: 4rem;
  background: linear-gradient(135deg, #48bb78, #38a169);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.register-header h1 {
  color: #2d3748;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #2d3748, #4a5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.register-header p {
  color: #718096;
  font-size: 1rem;
  font-weight: 400;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 0;
}

.form-group {
  margin-bottom: 24px;
}

.form-row .form-group {
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
  border-color: #48bb78;
  box-shadow: 0 0 0 4px rgba(72, 187, 120, 0.15);
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
  color: #48bb78;
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
  background: rgba(72, 187, 120, 0.1);
  color: #48bb78;
}

.password-strength {
  margin-top: 8px;
}

.strength-bar {
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 4px;
}

.strength-fill {
  height: 100%;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.strength-bar.weak .strength-fill {
  background: #e53e3e;
}

.strength-bar.medium .strength-fill {
  background: #ed8936;
}

.strength-bar.strong .strength-fill {
  background: #48bb78;
}

.strength-text {
  font-size: 0.8rem;
  color: #718096;
}

.radio-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.radio-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 28px;
  color: #4a5568;
  font-size: 0.9rem;
}

.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-mark {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.radio-container:hover input ~ .radio-mark {
  border-color: #48bb78;
}

.radio-container input:checked ~ .radio-mark {
  background-color: #48bb78;
  border-color: #48bb78;
}

.radio-mark:after {
  content: "";
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  transform: translate(-50%, -50%);
}

.radio-container input:checked ~ .radio-mark:after {
  display: block;
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
  margin-bottom: 24px;
  font-size: 0.9rem;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  position: relative;
  padding-left: 28px;
  color: #4a5568;
  line-height: 1.5;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  left: 0;
  top: 2px;
  height: 18px;
  width: 18px;
  background-color: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.checkbox-container:hover input ~ .checkmark {
  border-color: #48bb78;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #48bb78;
  border-color: #48bb78;
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

.terms-link {
  color: #48bb78;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.terms-link:hover {
  color: #38a169;
  text-decoration: underline;
}

.register-btn {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
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

.register-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(72, 187, 120, 0.4);
}

.register-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.register-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
}

.register-btn.loading {
  background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
}

.btn-google {
  margin-top: 16px;
  background: #ffffff;
  color: #3c4043;
  border: 1px solid #dadce0;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  letter-spacing: 0.25px;
}

.btn-google:hover {
  background: #f8f9fa;
  border-color: #c6c9cc;
  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3),
    0 4px 8px 3px rgba(60, 64, 67, 0.15);
  transform: translateY(-1px);
}

.btn-google:active {
  background: #f1f3f4;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
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
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
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

.register-error {
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

.register-footer {
  text-align: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(226, 232, 240, 0.6);
}

.register-footer p {
  color: #a0aec0;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.login-link {
  color: #48bb78;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #38a169;
  text-decoration: underline;
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
  border: 4px solid rgba(72, 187, 120, 0.3);
  border-top: 4px solid #48bb78;
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
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 480px) {
  .register-container {
    padding: 24px;
    margin: 10px;
  }

  .register-header h1 {
    font-size: 2rem;
  }

  .form-input {
    padding: 14px 45px 14px 45px;
  }

  .radio-group {
    flex-direction: column;
    gap: 12px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
