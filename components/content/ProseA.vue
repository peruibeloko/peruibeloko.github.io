<template>
  <span @click="toggleFootnote" v-if="isFootnote" ref="anchor">
    <dialog :style="floatingStyles" ref="footnote">
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
import { useFloating, autoUpdate, autoPlacement } from "@floating-ui/vue";

const props = defineProps({
  href: {
    type: String,
    default: ""
  },
  target: {
    type: String,
    default: "_blank",
    required: false
  }
});

const anchor = ref<HTMLElement>();
const footnote = ref<HTMLElement>();
const { floatingStyles, update } = useFloating(anchor, footnote, {
  placement: 'top',
  strategy: "fixed",
  whileElementsMounted: autoUpdate
});

const fnRef = props.href.match(/user-content-fn-\w+/);
const isFootnote = ref(fnRef !== null);

const toggleFootnote = (e: Event) => {
  const span = e.target as HTMLElement;
  const dialog = span.children[0] as HTMLDialogElement;

  dialog.open ? dialog.close() : dialog.show();
  update();
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

<style scoped lang="scss">
dialog {
  background-color: var(--background);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  cursor: default;
}
</style>
