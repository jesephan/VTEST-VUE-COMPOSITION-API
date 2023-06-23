<template>
  <div
    class="absolute h-full right-0 max-h-screen p-4 max-w-64 flex flex-col gap-4 overflow-y-auto overflow-x-hidden"
  >
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="{
        'bg-green-100 border-green-500': toast.type === 'success',
        'bg-red-100 border-red-500': toast.type === 'error',
        'list-move list-leave-to': toast.active === false,
      }"
      class="p-3 rounded-lg border border-solid border-indigo-500 bg-indigo-100 w-full list-enter"
    >
      {{ toast.message }}
    </div>
  </div>
  <slot />
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, provide } from 'vue';
import Toast from '../Interfaces/Toast';
import { toastInjectionKey } from '../constants/injectionKeys';

const toasts: Ref<Toast[]> = ref([]);

function createToast(
  type: string,
  message: string,
  durationInMilliseconds?: number
): Toast {
  const newToastId = Date.now();

  toasts.value.push({
    id: newToastId,
    active: true,
    type: type,
    message: message,
    durationInMilliseconds: durationInMilliseconds || 3000,
  });

  const createdToast: Toast = toasts.value.find(
    (toast: Toast) => toast.id === newToastId
  ) as Toast;

  fadeOutAndRemove(createdToast);

  return createdToast;
}

function fadeOutAndRemove(createdToast: Toast) {
  setTimeout(() => {
    if (createdToast) {
      createdToast.active = false;
    }

    setTimeout(() => {
      toasts.value = toasts.value.filter(
        (toast: Toast) => toast.id !== createdToast?.id
      );
    }, 500);
  }, createdToast?.durationInMilliseconds);
}

function deleteAllToasts() {
  toasts.value = [];
}

provide(toastInjectionKey, {
  create: createToast,
  deleteAll: deleteAllToasts,
});
</script>

<style>
.list-enter {
  opacity: 1;
  transition: all 0.5s ease;
}

.list-leave-to {
  opacity: 0;
  transform: translate(30px);
}
</style>
