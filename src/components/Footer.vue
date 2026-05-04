<template>
  <footer class="footer">
    <p class="footer__copyright">© {{ year }} Brand.</p>
    <nav class="footer__links">
      <a href="#" target="_blank" rel="noopener">Link 1</a>
      <span aria-hidden="true">/</span>
      <a href="#" target="_blank" rel="noopener">Link 2</a>
      <span aria-hidden="true">/</span>
      <a href="mailto:hello@example.com">Email</a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.footer {
  background-color: $color-surface-dark;
  color: $color-text-inverse;
  padding: $space-md;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: $space-md;
    text-align: center;
  }
}

.footer__links {
  display: flex;
  gap: 0.5rem;

  a {
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
