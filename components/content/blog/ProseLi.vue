<template>
  <li ref="liContent"><slot /></li>
</template>

<script setup lang="ts">
import { inject } from "vue";

const liContent = ref<HTMLLIElement>();

onMounted(() => {
  if (liContent.value === undefined) return;
  if (liContent.value.id.match(/user-content-fn-\w+/) === null) return;
  
  const [_, update] = inject("footnotes") as [
    Record<string, string>,
    (key: string, val: string) => void
  ];

  const { innerText, id } = liContent.value;
  const fnId = id.split("-").at(-1) as string;
  const content = innerText.slice(0, -2);

  update(fnId, content);
});
</script>
