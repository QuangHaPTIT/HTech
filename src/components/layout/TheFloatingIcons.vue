<template>
  <div class="floating-icons">
    <a href="#" class="floating-icon zalo-icon" title="Telegram" @click.prevent>
      <div style="text-align: center; font-size: 1.5rem; line-height: 1.1">
        <i class="fa-brands fa-instagram"></i>
      </div>
    </a>
    <a
      href="#"
      class="floating-icon support-icon"
      title="Hỗ trợ"
      @click.prevent
    >
      <div style="text-align: center; font-size: 1.5rem; line-height: 1.1">
        <i class="fa-brands fa-facebook-messenger"></i>
      </div>
    </a>
    <a
      href="#"
      class="floating-icon chat-icon"
      title="Chat hỗ trợ"
      @click.prevent
    >
      <div style="text-align: center; font-size: 1.5rem; line-height: 1.1">
        <i class="fa-brands fa-telegram"></i>
      </div>
    </a>
  </div>
</template>

<script>
export default { name: "TheFloatingIcons" };
</script>

<style scoped>
.floating-icons {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.floating-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  animation: float 3s ease-in-out infinite;
}
.floating-icon:hover {
  transform: scale(1.1);
}
.zalo-icon {
  background: linear-gradient(
    90deg,
    rgba(127, 0, 255, 1) 0%,
    rgba(225, 0, 255, 1) 100%
  );
}
.chat-icon {
  background: linear-gradient(
    90deg,
    rgba(127, 0, 255, 0.8) 0%,
    rgba(225, 0, 255, 0.8) 100%
  );
}
.support-icon {
  background: linear-gradient(
    90deg,
    rgba(127, 0, 255, 0.9) 0%,
    rgba(225, 0, 255, 0.9) 100%
  );
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@media (max-width: 768px) {
  .floating-icons {
    right: 15px;
  }
}
</style>
