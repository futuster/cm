<template>
  <header>
    <div class="px-3 py-2 bg-dark text-white mb-4">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            logo goes here
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <router-link to="/" class="nav-link">
                Главная
              </router-link>
            </li>
            <li>
              <router-link to="/chapters/" class="nav-link">
                Верстка
              </router-link>
            </li>
            <li>
              <router-link to="/type/" class="nav-link">
                Типы контента
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </header>
  <router-view/>

</template>

<style lang="scss">
 .nav-link,  .nav-link:active, .nav-link:visited {
  color: #AAA;
}
header .nav-link:hover {
  color: #FFF;
}

a.nav-link.router-link-active, a.nav-link.router-link-active:active {
  color: #FFF;
}


</style>
