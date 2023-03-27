import { onUpdated, Ref, ref } from 'vue';


export function useDebounce(value:Ref) {
  const debounce = ref('')
  const timeout = ref()

  onUpdated(() => {
    clearTimeout(timeout.value)
    setTimeout(() => {
      debounce.value = value.value
      clearTimeout(timeout.value)
    }, 300)
  })

  return debounce
}