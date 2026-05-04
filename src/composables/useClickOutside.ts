// composables/useClickOutside.ts
import { onMounted, onUnmounted, type Ref } from 'vue'

export function useClickOutside(
  target: Ref<HTMLElement | null>,
  handler: () => void
) {
  const onClick = (e: MouseEvent) => {
    if (target.value && !target.value.contains(e.target as Node)) {
      handler()
    }
  }

  onMounted(() => document.addEventListener('mousedown', onClick))
  onUnmounted(() => document.removeEventListener('mousedown', onClick))
}
