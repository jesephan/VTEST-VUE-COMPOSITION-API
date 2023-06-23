<template>
  <div
    class="flex flex-col items-center justify-center gap-4 w-screen h-screen"
  >
    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click="showInfoToast"
    >
      SHOW INFO TOAST
    </button>
    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click="showSuccessToast"
    >
      SHOW SUCCESS TOAST
    </button>
    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click="showErrorToast"
    >
      SHOW ERROR TOAST
    </button>
    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click="toast.deleteAll()"
    >
      DELETE ALL TOASTS
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from './composables/useToast';

const toast = useToast();

function showInfoToast() {
  const myToast = toast.create('info', 'This is an info toast!!!');

  setTimeout(() => {
    myToast.message = 'Just kidding!';
  }, 500);
}

function showSuccessToast() {
  const myToast = toast.create('success', 'This is an info toast!!!', 4000);
}

function showErrorToast() {
  const myToast = toast.create('error', 'This is an error toast!!!', 5000);
}
</script>
undefined undefined
