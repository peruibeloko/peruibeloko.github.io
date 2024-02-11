<template>
  <span @click="openFootnote" v-if="isFootnote">
    <dialog @click="closeFootnote" ref="footnote">
      {{ getContent() }}
    </dialog>
    <slot />
  </span>
  <NuxtLink :href="href" :target="target" v-else>
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { inject } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: ""
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
});

const fnRef = props.href.match(/user-content-fn-\w+/);
const isFootnote = ref(fnRef !== null);

const openFootnote = () => {
  const footnote = ref<HTMLDialogElement>();
  if (footnote === undefined) return;

  footnote.value?.show();
};

const closeFootnote = () => {
  const footnote = ref<HTMLDialogElement>();
  if (footnote === undefined) return;

  footnote.value?.close();
};

const getContent = () => {
  if (fnRef === null) return;

  const [footnotes, _] = inject("footnotes") as [
    Record<string, Record<string, string>>,
    (key: string, val: string) => void
  ];

  const fnId = fnRef[0].split("-").at(-1) ?? "";
  return footnotes.value[fnId];
};
</script>
