<script setup lang="ts">
interface Props {
  currentPage: number;
  pageSize: number;
  postCount: number;
}

interface Emits {
  (e: "next"): void;
  (e: "prev"): void;
  (e: "navigate", page: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { currentPage, pageSize, postCount } = toRefs(props);

const pageCount = Math.ceil(postCount.value / pageSize.value);
const currentLessOne = computed(() => (currentPage.value - 1 >= 2 ? currentPage.value - 1 : null));
const currentPlusOne = computed(() =>
  currentPage.value + 1 <= pageCount - 1 ? currentPage.value + 1 : null
);

const handleNext = () => emit("next");
const handlePrev = () => emit("prev");
const handleNavigate = (page: number) => emit("navigate", page);
</script>

<template>
  <nav>
    <button class="nav-button back" type="button" @click="handlePrev" v-if="currentPage !== 1">
      &lt;
    </button>
    <button
      class="nav-button first"
      type="button"
      @click="handleNavigate(1)"
      v-if="currentPage > 1"
    >
      1
    </button>
    <span class="nav-button ellipsis-left" v-if="currentLessOne && currentLessOne > 2">...</span>
    <button
      class="nav-button currLessOne"
      type="button"
      @click="handleNavigate(currentLessOne)"
      v-if="currentLessOne"
    >
      {{ currentPage - 1 }}
    </button>
    <span class="nav-button curr">{{ currentPage }}</span>
    <button
      class="nav-button currPlusOne"
      type="button"
      @click="handleNavigate(currentPlusOne)"
      v-if="currentPlusOne"
    >
      {{ currentPage + 1 }}
    </button>
    <span class="nav-button ellipsis-right" v-if="currentPlusOne && currentPlusOne < pageCount - 1"
      >...</span
    >
    <button
      class="nav-button last"
      type="button"
      @click="handleNavigate(pageCount)"
      v-if="currentPage < pageCount"
    >
      {{ pageCount }}
    </button>
    <button
      class="nav-button next"
      type="button"
      @click="handleNext"
      v-if="currentPage !== pageCount"
    >
      &gt;
    </button>
  </nav>
</template>

<style scoped lang="scss">
.back {
  grid-area: back;
}
.first {
  grid-area: first;
}
.ellipsis-left {
  grid-area: ellipsis-left;
}
.currLessOne {
  grid-area: currLessOne;
}
.curr {
  grid-area: curr;
  color: var(--main);
}
.currPlusOne {
  grid-area: currPlusOne;
}
.ellipsis-right {
  grid-area: ellipsis-right;
}
.last {
  grid-area: last;
}
.next {
  grid-area: next;
}

nav {
  display: grid;
  grid-template-areas: "back first ellipsis-left currLessOne curr currPlusOne ellipsis-right last next";
  grid-template-columns: repeat(9, 2.5rem);
  gap: 1rem;
  margin-top: 3rem;
}

.nav-button {
  cursor: pointer;
  text-align: center;
  width: 2.5rem;
  border: none;
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 0.5rem;
  border: 1px solid var(--light-gray);
  border-radius: 0.25rem;
}

.curr {
  border-color: var(--main);
}

.ellipsis-left,
.ellipsis-right {
  border: none;
  cursor: default;
}
</style>
