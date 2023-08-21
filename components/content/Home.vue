<template>
  <header>
    <section>
      <slot name="header" />
    </section>

    <ContentSlot :use="$slots['profile-pic']" unwrap="p" />
  </header>
  <main>
    <slot name="content" />
    <nav>
      <slot name="nav" />
    </nav>
  </main>
</template>
