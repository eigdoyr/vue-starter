<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <RouterLink to="/" class="navbar-logo">Brand</RouterLink>

    <ul class="navbar-links">
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
      <li><a href="#">Link 4</a></li>
    </ul>

    <button
      class="navbar-hamburger"
      :class="{ 'navbar-hamburger--open': isOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <span />
      <span />
    </button>
  </nav>

  <Teleport to="body">
    <div class="navbar-menu" :class="{ 'navbar-menu--open': isOpen }">
      <ul class="navbar-menu-links">
        <li><a href="#" @click="closeMenu">Link 1</a></li>
        <li><a href="#" @click="closeMenu">Link 2</a></li>
        <li><a href="#" @click="closeMenu">Link 3</a></li>
        <li><a href="#" @click="closeMenu">Link 4</a></li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 102;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  color: $color-text;
  transition: background-color 0.3s ease;

  &--scrolled {
    background-color: rgba(250, 250, 248, 0.85);
    backdrop-filter: blur(8px);
  }
}

.navbar-logo {
  font-family: $font-sans;
  font-weight: 500;
  font-size: 0.875rem;
  color: inherit;
  letter-spacing: 0.02em;
}

.navbar-links {
  display: contents;

  li {
    display: flex;
    justify-content: center;
  }

  a {
    font-family: $font-sans;
    font-weight: 400;
    font-size: 0.875rem;
    color: inherit;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.5;
    }
  }
}

.navbar-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  z-index: 102;

  span {
    display: block;
    width: 24px;
    height: 1px;
    background-color: $color-text;
    transition: all 0.3s ease;
  }

  &--open {
    span:nth-child(1) {
      transform: translateY(3px) rotate(45deg);
    }
    span:nth-child(2) {
      transform: translateY(-3px) rotate(-45deg);
    }
  }
}

@media (max-width: $breakpoint-md) {
  .navbar-links {
    display: none;
  }

  .navbar-hamburger {
    display: flex;
  }
}
</style>

<style lang="scss">
@use '@styles/variables' as *;

.navbar-menu {
  display: none;
  position: fixed;
  inset: 0;
  background-color: $color-background;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 101;

  &--open {
    display: flex;
  }
}

.navbar-menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    font-family: $font-sans;
    font-weight: 500;
    font-size: 2rem;
    color: $color-text;
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
