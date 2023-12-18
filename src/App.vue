<template>
  <div class="container">
    <header class="container__header">
      <Header />
    </header>

    <section class="container__section">
      <aside class="section__aside">
        <Aside />
      </aside>

      <main class="section__main">
        <Main />
      </main>
    </section>

    <footer class="container__footer">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Header from "./layout/Header.vue";
import Aside from "./layout/Aside.vue";
import Main from "./layout/Main.vue";
import Footer from "./layout/Footer.vue";
</script>
