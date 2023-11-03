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
  (e: "size", size: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { currentPage, pageSize, postCount } = toRefs(props);

const pageCount = computed(() => Math.ceil(postCount.value / pageSize.value));
const currentLessOne = computed(() => (currentPage.value - 1 >= 2 ? currentPage.value - 1 : null));
const currentPlusOne = computed(() =>
  currentPage.value + 1 <= pageCount.value - 1 ? currentPage.value + 1 : null
);

const handleNext = () => emit("next");
const handlePrev = () => emit("prev");
const handleNavigate = (page: number) => emit("navigate", page);
const handleSize = (size: number) => emit("size", size);
</script>

<template>
  <aside>
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
      <span
        class="nav-button ellipsis-right"
        v-if="currentPlusOne && currentPlusOne < pageCount - 1"
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
    <select @change="e => handleSize(+(e.target as HTMLSelectElement).value)">
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="25">25</option>
      <option :value="50">50</option>
    </select>
  </aside>
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

aside {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
}

select {
  cursor: pointer;
  text-align: center;
  border: none;
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 0.25rem;
  border: 1px solid var(--bg3);
  color: var(--bg3);
  border-radius: 0.25rem;
  transition-duration: 200ms;
}

select:hover {
  border-color: var(--foreground);
  color: var(--foreground);
}

nav {
  display: grid;
  grid-template-areas: "back first ellipsis-left currLessOne curr currPlusOne ellipsis-right last next";
  grid-template-columns: repeat(2, 1rem) 1rem repeat(3, 1rem) 1rem repeat(2, 1rem);
  gap: 0.5rem;
  margin-top: 2rem;
}

.nav-button {
  cursor: pointer;
  text-align: center;
  border: none;
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 0.25rem;
  width: 100%;
  border: 1px solid var(--bg3);
  color: var(--bg3);
  border-radius: 0.25rem;
  transition-duration: 200ms;
}

.nav-button:not(.ellipsis-left, .ellipsis-right):hover {
  border-color: var(--foreground);
  color: var(--foreground);
}

.curr {
  border-color: var(--foreground);
  color: var(--foreground);
}

.ellipsis-left,
.ellipsis-right {
  border: none;
  cursor: default;
  font-size: 0.5rem;
}

@media (max-width: 768px) {
  nav {
    margin-top: 3rem;
    grid-template-columns: repeat(2, 2rem) 2.5rem repeat(3, 2rem) 2.5rem repeat(2, 2rem);
  }
  .nav-button, select {
    font-size: 1.25rem;
  }
}
</style>
