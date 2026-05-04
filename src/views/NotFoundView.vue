<template>
  <main class="not-found">
    <h1>404</h1>
    <p>The page you're looking for doesn't exist.</p>
    <RouterLink to="/" class="not-found__link">Back to home</RouterLink>
  </main>
</template>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.not-found {
  padding: $space-xl $space-md;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: $space-md;
}

.not-found__link {
  font-size: $text-sm;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
}
</style>
