<template>
  <div class="cart-overlay" v-if="isVisible" @click="closeCart">
    <div class="cart-sidebar" @click.stop>
      <!-- Cart Header -->
      <div class="cart-header">
        <h2 class="cart-title">
          <span class="cart-icon">🛒</span>
          Giỏ Hàng
        </h2>
        <button class="close-btn" @click="closeCart">
          <span>×</span>
        </button>
      </div>

      <!-- Cart Items -->
      <div class="cart-content">
        <div class="cart-items">
          <!-- Cart Item 1 -->
          <div class="cart-item">
            <div class="item-image">
              <img src="@/assets/images/logo.png" alt="JavaScript Complete Course" />
            </div>
            <div class="item-details">
              <h4 class="item-title">JavaScript Complete Course</h4>
              <p class="item-instructor">Nguyễn Văn A</p>
              <div class="item-price-section">
                <span class="item-price">₫599,000</span>
                <span class="item-original-price">₫899,000</span>
              </div>
            </div>
            <button class="remove-btn" @click="removeItem(1)">
              ×
            </button>
          </div>

          <!-- Cart Item 2 -->
          <div class="cart-item">
            <div class="item-image">
              <img src="@/assets/images/course1.png" alt="React.js Mastery" />
            </div>
            <div class="item-details">
              <h4 class="item-title">React.js Mastery</h4>
              <p class="item-instructor">Trần Thị B</p>
              <div class="item-price-section">
                <span class="item-price">₫799,000</span>
                <span class="item-original-price">₫1,199,000</span>
              </div>
            </div>
            <button class="remove-btn" @click="removeItem(2)">
              ×
            </button>
          </div>

          <!-- Cart Item 3 -->
          <div class="cart-item">
            <div class="item-image">
              <img src="@/assets/images/course2.png" alt="Python Backend Development" />
            </div>
            <div class="item-details">
              <h4 class="item-title">Python Backend Development</h4>
              <p class="item-instructor">Lê Minh C</p>
              <div class="item-price-section">
                <span class="item-price">₫699,000</span>
                <span class="item-original-price">₫999,000</span>
              </div>
            </div>
            <button class="remove-btn" @click="removeItem(3)">
              ×
            </button>
          </div>
        </div>

        <!-- Empty Cart State -->
        <div class="empty-cart" v-if="cartItems.length === 0">
          <div class="empty-icon">🛒</div>
          <h3>Giỏ hàng trống</h3>
          <p>Hãy thêm một số khóa học vào giỏ hàng của bạn!</p>
          <button class="browse-courses-btn" @click="browseCourses">
            Khám phá khóa học
          </button>
        </div>
      </div>

      <!-- Cart Footer -->
      <div class="cart-footer">
        <div class="total-section">
          <div class="subtotal">
            <span>Tạm tính:</span>
            <span class="subtotal-price">₫2,097,000</span>
          </div>
          <div class="discount">
            <span>Giảm giá:</span>
            <span class="discount-price">-₫500,000</span>
          </div>
          <div class="total">
            <span>Tổng cộng:</span>
            <span class="total-price">₫1,597,000</span>
          </div>
        </div>

        <div class="cart-actions">
          <button class="continue-shopping-btn" @click="continueShopping">
            Tiếp tục mua sắm
          </button>
          <button class="checkout-btn" @click="checkout">
            Thanh toán
            <span class="checkout-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCart",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cartItems: [
        {
          id: 1,
          title: "JavaScript Complete Course",
          instructor: "Nguyễn Văn A",
          price: 599000,
          originalPrice: 899000,
          image: "@/assets/images/logo.png"
        },
        {
          id: 2,
          title: "React.js Mastery",
          instructor: "Trần Thị B", 
          price: 799000,
          originalPrice: 1199000,
          image: "@/assets/images/course1.png"
        },
        {
          id: 3,
          title: "Python Backend Development",
          instructor: "Lê Minh C",
          price: 699000,
          originalPrice: 999000,
          image: "@/assets/images/course2.png"
        }
      ]
    }
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((sum, item) => sum + item.originalPrice, 0);
    },
    discount() {
      return this.subtotal - this.total;
    },
    total() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    }
  },
  methods: {
    closeCart() {
      this.$emit('close');
    },
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    },
    continueShopping() {
      this.closeCart();
    },
    browseCourses() {
      this.closeCart();
      this.$router.push('/courses');
    },
    checkout() {
      // Logic checkout sẽ implement sau
      console.log('Proceeding to checkout...');
      this.closeCart();
    }
  }
}
</script>

<style scoped>
/* Cart Overlay */
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;
  height: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(127, 0, 255, 0.1);
  animation: slideInRight 0.3s ease;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
}

/* Cart Header */
.cart-header {
  padding: 25px 30px;
  border-bottom: 2px solid rgba(127, 0, 255, 0.1);
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.03) 0%, rgba(225, 0, 255, 0.03) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-icon {
  font-size: 1.3rem;
}

.close-btn {
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid rgba(255, 0, 0, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 24px;
  color: rgba(255, 0, 0, 0.7);
}

.close-btn:hover {
  background: rgba(255, 0, 0, 0.2);
  transform: scale(1.1);
  color: rgba(255, 0, 0, 1);
}

/* Cart Content */
.cart-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px 30px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(127, 0, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.cart-item:hover {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.item-image {
  width: 80px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(225, 0, 255, 0.1) 100%);
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-title {
  margin: 0 0 5px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  line-height: 1.3;
}

.item-instructor {
  margin: 0 0 10px 0;
  font-size: 0.85rem;
  color: #666;
}

.item-price-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-price {
  font-size: 1rem;
  font-weight: 700;
  color: rgba(127, 0, 255, 1);
}

.item-original-price {
  font-size: 0.85rem;
  color: #999;
  text-decoration: line-through;
}

.remove-btn {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  top: -8px;
  right: -8px;
  opacity: 0;
  transform: scale(0.8);
  font-size: 14px;
  color: rgba(255, 0, 0, 0.8);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.cart-item:hover .remove-btn {
  opacity: 1;
  transform: scale(1);
}

.remove-btn:hover {
  background: rgba(255, 0, 0, 0.1);
  color: rgba(255, 0, 0, 1);
  transform: scale(1.1);
  box-shadow: 0 3px 12px rgba(255, 0, 0, 0.3);
}

/* Empty Cart */
.empty-cart {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-cart h3 {
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  color: #333;
}

.empty-cart p {
  margin: 0 0 25px 0;
  font-size: 1rem;
}

.browse-courses-btn {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
}

.browse-courses-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(127, 0, 255, 0.4);
}

/* Cart Footer */
.cart-footer {
  padding: 25px 30px;
  border-top: 2px solid rgba(127, 0, 255, 0.1);
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.03) 0%, rgba(225, 0, 255, 0.03) 100%);
}

.total-section {
  margin-bottom: 20px;
}

.subtotal, .discount, .total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1rem;
}

.total {
  border-top: 2px solid rgba(127, 0, 255, 0.1);
  padding-top: 10px;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 1.1rem;
  color: #333;
}

.subtotal-price, .discount-price, .total-price {
  font-weight: 600;
}

.discount-price {
  color: rgba(0, 150, 0, 1);
}

.total-price {
  color: rgba(127, 0, 255, 1);
  font-size: 1.2rem;
}

.cart-actions {
  display: flex;
  gap: 15px;
}

.continue-shopping-btn {
  flex: 1;
  background: rgba(127, 0, 255, 0.1);
  color: rgba(127, 0, 255, 1);
  border: 2px solid rgba(127, 0, 255, 0.3);
  border-radius: 12px;
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
}

.continue-shopping-btn:hover {
  background: rgba(127, 0, 255, 0.2);
  transform: translateY(-2px);
}

.checkout-btn {
  flex: 2;
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(127, 0, 255, 0.4);
}

.checkout-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.checkout-btn:hover .checkout-icon {
  transform: translateX(5px);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .cart-sidebar {
    width: 100%;
  }
  
  .cart-header {
    padding: 20px;
  }
  
  .cart-content {
    padding: 15px 20px;
  }
  
  .cart-footer {
    padding: 20px;
  }
  
  .cart-actions {
    flex-direction: column;
  }
}
</style>
