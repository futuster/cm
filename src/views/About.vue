<template>
  <div>

    <meta name="author" content="Кружок умелые ручки">


    <div id="wrapper">
      <div id="header" class="big-titled">
        <a href="/" id="logo"><img alt="" title="Перейти на заглавную страницу" src="~@/assets/logo.png" width="212" height="47"></a>
        <ul id="menu-chapters" class="menu">
          <li class="active">
            <span>Вся энергетика</span>
          </li>
          <li>
            <a href="#">Энергобаза</a>
          </li>
        </ul>
        <ul id="menu-langs" class="menu">
          <li class="active">
            <span>RU</span>
          </li>
          <li>
            <a href="?en">EN</a>
          </li>
        </ul>
        <ul id="menu-main" class="menu">
          <li>
            <a href="?blog" class="menu-blog-link">Блог</a>
          </li>
          <li>
            <a href="?about">О проекте</a>
          </li>
        </ul>

        <div id="top-bar">
          <div id="quick-search">
            <div>
              <form action="." method="post">
                <input class="quick-search-input" type="text" placeholder="Поиск по сайту"> <input class="quick-search-submit" type="submit"
                                                                                                   value="&crarr;">
              </form>
            </div>
            <div class="quick-bookmarks">
              <ul>
                <li>
                  <a href="#">Энергоносители, топливо и его разновидности</a>
                  <ul>
                    <li>
                      <a href="#"><b>4</b> Стандарт ISO 13600 (Technical energy systems) определяет энергоносителям теплотворная отнесенная</a>
                    </li>
                    <li>
                      <a href="#"><b>7</b>Таким образом, к энергоносителям, помимо топлива (носителя к энергоносителям к единице массы или
                        объема топлива</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <h5>Последние закладки из других статей</h5>
              <ul>
                <li><a href="#">Сравнение видов топлива и теплотворная способность</a>
                  <ul>
                    <li>
                      <a href="#"><b>2</b> Теплота сгорания, отнесенная к единице массы или объема топлива отнесенная к единице массы или
                        объема топлива</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Как выражается значение величины в системе СИ</a></li>
                <li><a href="#">Какое значение теплотворной способности использовать</a>
                  <ul>
                    <li>
                      <a href="#"><b>7</b> Необходимо учитывать, что в России и в других странах СНГ для расчетов учитывать, что в России и
                        в других странах СНГ для расчетов</a>
                    </li>
                    <li>
                      <a href="#"><b>12</b> В нижеследующей таблице приводятся значения NCV для различных нижеследующей таблице приводятся
                        значения NCV для различных</a>
                    </li>
                    <li>
                      <a href="#"><b>78</b> Евростат и Международное энергетическое агентство для преобразования агентство для
                        преобразования</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <a class="minitext" href="#">Остальниые закладки</a>
              <div class="bm-shade"></div>
            </div>
          </div>
          <!-- eof qs -->

          <div class="search-link">
            <a href="?search">Поиск и закладки</a>
          </div>
        </div>
        <!-- eof top bar -->

      </div>
      <div id="content">

        <div class="content-title">
          <div class="content-title-wrapper"></div>
          <h1>Вся энергетика</h1>
        </div>
        <div class="main content-subtitle">
          <p>
            Таким образом, к энергоносителям, помимо топлива (носителя потенциальной энергии), можно отнести электрический ток (проводник
            энергии изменяющегося электромагнитного поля), находящийся под давлением перегретый пар (носитель тепловой энергии), падающую с
            плотины воду.
          </p>
        </div>

        <div class="tabs">
          <div class="main content-selector">
            <p class="minitext">
              <span class=" selector" :class=" isActive('images') ? 'js-menu-active': 'js-menu' " @click.prevent="setActive('images')">картинками</span>
              <span class="selector" :class=" isActive('list') ? 'js-menu-active': 'js-menu' "
                    @click.prevent="setActive('list')">списком</span>
            </p>
          </div>

          <div class="tab-block tab-1 " :class="{ 'active-tab': isActive('images') }">

            <div class="ch-intro">
              <div class="ch-intro-wrapper">
                <div class="ch-i-ill">
                  <img src="images/ch-ill.png" width="100" height="100" alt="">
                </div>
                <div class="ch-i-text">
                  <p><span class="new-item">Свежак</span></p>
                  <h3><a href="#">Топливные элементы</a></h3>
                  <p class="minitext">Он был введён на Втором международном конгрессе электриков, проходившем в год смерти Джеймса Джоуля
                    (1889), в качестве единицы работы и энергии электрического тока и определен как работа, совершаемая при мощности в 1 вт
                    в течение 1 сек.</p>
                  <div>
                    <div class="ch-i-alist">
                      <h5><a href="#">Газ плотных песчаников</a></h5>
                      <ul class="special-list minitext">
                        <li><a href="#">Природные газовые гидраты</a></li>
                        <li>Виды ископаемого органического топлива</li>
                        <li>Категории запасов полезных ископаемых</li>
                      </ul>
                    </div>
                    <div class="ch-i-alist">
                      <h5><a href="#">Энергоносители и топливо</a></h5>
                      <ul class="special-list minitext">
                        <li><a href="#">Экскурс в общую геологию</a></li>
                        <li>Классификация источников энергии</li>
                        <li>Виды ископаемого органического топлива</li>
                        <li>Категории запасов полезных ископаемых</li>
                      </ul>
                    </div>
                    <div class="ch-i-alist">
                      <h5>Газ угольных пластов</h5>
                      <ul class="special-list minitext">
                        <li>Газ плотных песчаников</li>
                        <li>Природные газовые гидраты</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>

            <div class="incut-filled">
              <div class="filled-content">

                <table class="filled-table">
                  <tr>
                    <td width="25%">

                      <a href="#"><img alt="" class="ch-ill" src="images/kol_small.png" width="75" height="75"></a>
                      <h3><a href="#">Основы энергетики</a></h3>
                      <p class="minitext">
                        Теплота сгорания, отнесенная к единице массы или объема топлива, называется удельной теплотворной способностью.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>

                      <span class="new-item minitext">Свежак</span>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>

                    </td>
                    <td>&nbsp;</td>
                    <td width="25%">
                      <a href="#"><img class="ch-ill" alt="" src="images/group-tectonics.png" width="75" height="75"></a>
                      <h3><a href="#">Природный газ</a></h3>
                      <p class="minitext">
                        Он был введён на Втором международном конгрессе электриков, проходившем в год смерти Джеймса Джоуля (1889), в
                        качестве единицы работы и энергии электрического тока и определен как работа, совершаемая при мощности в 1 вт в
                        течение 1 сек.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Обзорная справка</a>
                        </li>
                        <li>
                          <a href="#">Метан, его гомологи и&nbsp;примеси</a>
                        </li>
                        <li>
                          <a href="#">Единицы измерения природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">Теплотворная способность природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">СПГ&nbsp;— Сжиженный природный&nbsp;газ</a>
                        </li>
                        <li>
                          <a href="#">КПГ&nbsp;— Компримированный природный&nbsp;газ</a>
                        </li>
                        <li>
                          <a href="#">Технологии хранения природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">Технологии транспортировки природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">Традиционные источники природного&nbsp;газа</a>
                          <ul class="special-list">
                            <li>
                              <a href="#">Газовые месторождения </a>&nbsp;<sup class="new-item">Свежак</sup>
                            </li>
                            <li>
                              <a href="#">Газовый конденсат </a>&nbsp;<sup class="new-item">Свежак</sup>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Попутный газ</a>
                        </li>
                        <li>
                          <a href="#">Нетрадиционные источники природного&nbsp;газа (обзорная&nbsp;статья)</a>
                        </li>
                        <li>
                          <a href="#">Сланцевый газ</a>
                        </li>
                      </ul>

                      <span class="new-item minitext">Свежак</span>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Природные газовые гидраты</a>
                        </li>
                      </ul>
                    </td>
                    <td>&nbsp;</td>
                    <td width="25%">
                      <a href="#"><img class="ch-ill" alt="" src="images/group-morphology.png" width="75" height="75"></a>
                      <h3><a href="#">Нефть и нефтепродукты</a></h3>
                      <p class="minitext">
                        По этой причине использовать электроэнергию для отопления невыгодно: домашняя электроплитка или система
                        электроподогрева полов выделяют лишь 38% исходной энергии топлива, потраченной на производство электроэнергии.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                    </td>
                    <td width="15%">&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#"><img class="ch-ill" alt="" src="images/group-minerals.png" width="75" height="75"></a>
                      <h3><a href="#">Уголь</a></h3>
                      <p class="minitext">
                        Калория используется также как единица энергетической ценности продуктов питания. Чтобы определить полную
                        энергетическую ценность пищи, её сжигают в калориметре и измеряют выделяющееся тепло.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                    </td>
                    <td>&nbsp;</td>
                    <td>
                      <a href="#"><img class="ch-ill" alt="" src="images/ch-ill-w.jpg" width="75" height="75"></a>
                      <h3><a href="#">Синтетическое топливо</a></h3>
                      <p class="minitext">
                        Евростат и Международное энергетическое агентство для преобразования данных о физических потоках энергоресурсов в
                        единицы энергии при составлении энергетических балансов используют следующие значения теплотворной способности.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                      <span class="new-item minitext">Свежак</span>
                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Газ угольных пластов</a>
                        </li>
                      </ul>
                    </td>
                    <td>&nbsp;</td>
                    <td>
                      <a href="#"><img class="ch-ill" alt="" src="images/ch-ill-w.jpg" width="75" height="75"></a>
                      <h3><a href="#">Электроэнергетика</a></h3>
                      <p class="minitext">
                        Значения теплотворной способности указываются в коммерческих контрактах для пунктов импорта, экспорта или ввода в
                        национальную распределительную сеть.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#"><img class="ch-ill" alt="" src="images/ch-ill-w.jpg" width="75" height="75"></a>
                      <h3><a href="#">Ядерная энергетика</a></h3>
                      <p class="minitext">
                        Поскольку энергоносители, используемые в различных странах, поставляются из разных мест, содержание БТЕ в физической
                        единице топлива немного отличается от страны к стране.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                      <span class="new-item minitext">Свежак</span>
                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                      </ul>
                    </td>
                    <td>&nbsp;</td>
                    <td>
                      <a href="#"><img class="ch-ill" alt="" src="images/ch-ill-w.jpg" width="75" height="75"></a>
                      <h3><a href="#">Водород</a></h3>
                      <p class="minitext">
                        Большинство видов топлива является соединением углерода и водорода. Углерод и водород, соединяясь с кислородом в
                        процессе горения, дают тепло. Когда водород соединяется с кислородом, образуются молекулы воды.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                    </td>
                    <td>&nbsp;</td>
                    <td>
                      <a href="#"><img class="ch-ill" alt="" src="images/ch-ill-w.jpg" width="75" height="75"></a>
                      <h3><a href="#">Топливные элементы</a></h3>
                      <p class="minitext">
                        Единицы энергии, фактически применяемые для сопоставления или суммирования разнородных видов топлива, зависят от
                        страны и местных условий и отражают исторические особенности того или иного государства или региона, нередко
                        приспособленные к изменяющимся условиям поставок.
                      </p>
                      <p class="minitext">
                        <span class="js-link ch-toc">Содержание</span>
                      </p>
                      <ul class="special-list minitext ch-toc-block">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                      <span class="new-item minitext">Свежак</span>
                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Газ плотных песчаников</a>
                        </li>
                        <li>
                          <a href="#">Природные газовые гидраты</a>
                        </li>
                      </ul>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                </table>
              </div>
            </div>


            <div class="incut-filled not-resize">
              <div class="filled-content">
                <div class="incut-ac-wrapper">
                  <div class="incut-aligned-content">
                    <h3>Авторы</h3>

                    <div class="ch-author-block">
                      <a href="#"><img src="images/ava1.jpg" width="45" height="60" alt=""></a>
                      <div class="ch-author-desc">
                        <a href="#">Константин Константинович</a> Константинопольский
                      </div>
                    </div>

                    <div class="ch-author-block">
                      <a href="#"><img src="images/ava2.jpg" width="45" height="60" alt=""></a>
                      <div class="ch-author-desc">
                        <a href="#">Вадим Сергеевич</a> Павлов
                      </div>
                    </div>

                    <div class="ch-author-block">
                      <a href="#"><img src="images/ava3.jpg" width="45" height="60" alt=""></a>
                      <div class="ch-author-desc">
                        <a href="#">Нассим Николас</a> Талеб
                      </div>
                    </div>

                    <div class="ch-author-block">
                      <a href="#"><img src="images/ava1.jpg" width="45" height="60" alt=""></a>
                      <div class="ch-author-desc">
                        <a href="#">Константин Константинович</a> Константинопольский
                      </div>
                    </div>

                    <div class="ch-author-block">
                      <a href="#"><img src="images/ava4.jpg" width="45" height="60" alt=""></a>
                      <div class="ch-author-desc">
                        <a href="#">Вадим Сергеевич</a> Павлов
                      </div>
                    </div>

                    <div class="ch-author-block">
                      <a href="#"><img src="images/ava5.jpg" width="45" height="60" alt=""></a>
                      <div class="ch-author-desc">
                        <a href="#">Нассим Николас</a> Талеб
                      </div>
                    </div>

                    <div class="ch-author-block">
                      <a href="#"><img src="images/ava6.jpg" width="45" height="60" alt=""></a>
                      <div class="ch-author-desc">
                        <a href="#">Константин Константинович</a> Константинопольский
                      </div>
                    </div>

                    <div class="ch-author-block">
                      <a href="#"><img src="images/ava7.jpg" width="45" height="60" alt=""></a>
                      <div class="ch-author-desc">
                        <a href="#">Вадим Сергеевич</a> Павлов
                      </div>
                    </div>
                    <div class="clear"></div>
                    <p class="minitext"><a href="#">Остальные авторы</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="incut-filled not-resize">
              <div class="filled-content">
                <div class="incut-ac-wrapper">
                  <div class="incut-aligned-content">
                    <h3 class="stinky">Спонсоры раздела</h3>

                    <ul class="ch-sponsors">
                      <li>
                        <a href="#"><img src="images/l-gazprom.jpg" alt="" width="" height=""></a>
                      </li>
                      <li>
                        <a href="#"><img src="images/l-bp.jpg" alt="" width="" height=""></a>
                      </li>
                      <li>
                        <a href="#"><img src="images/l-luk.jpg" alt="" width="" height=""></a>
                      </li>
                      <li>
                        <a href="#"><img src="images/l-gazprom.jpg" alt="" width="" height=""></a>
                      </li>
                      <li>
                        <a href="#"><img src="images/l-bp.jpg" alt="" width="" height=""></a>
                      </li>
                      <li>
                        <a href="#"><img src="images/l-luk.jpg" alt="" width="" height=""></a>
                      </li>
                    </ul>
                    <ul class="ch-extra-br-nav">
                      <li><a href="#">Глоссарий</a></li>
                      <li><a href="#">Каталог ссылок</a></li>
                      <li><a href="#">Источники информации</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="tab-block tab-2" :class="{ 'active-tab': isActive('list') }">

            <div class="ch-intro" style="display: none">
              <div class="ch-intro-wrapper">
                <div class="ch-i-text-f">
                  <p><span class="new-item">Свежак</span></p>
                  <h3><a href="#">Топливные элементы</a></h3>
                  <p class="minitext">Он был введён на Втором международном конгрессе электриков, проходившем в год смерти Джеймса Джоуля
                    (1889), в качестве единицы работы и энергии электрического тока и определен как работа, совершаемая при мощности в 1 вт
                    в течение 1 сек.</p>
                  <div>
                    <div class="ch-i-alist">
                      <h5><a href="#">Газ плотных песчаников</a></h5>
                      <ul class="special-list minitext">
                        <li><a href="#">Природные газовые гидраты</a></li>
                        <li>Виды ископаемого органического топлива</li>
                        <li>Категории запасов полезных ископаемых</li>
                      </ul>
                    </div>
                    <div class="ch-i-alist">
                      <h5><a href="#">Энергоносители и топливо</a></h5>
                      <ul class="special-list minitext">
                        <li><a href="#">Экскурс в общую геологию</a></li>
                        <li>Классификация источников энергии</li>
                        <li>Виды ископаемого органического топлива</li>
                        <li>Категории запасов полезных ископаемых</li>
                      </ul>
                    </div>
                    <div class="ch-i-alist">
                      <h5>Газ угольных пластов</h5>
                      <ul class="special-list minitext">
                        <li>Газ плотных песчаников</li>
                        <li>Природные газовые гидраты</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>


            <div class="incut-filled not-resize">
              <div class="filled-content">
                <div class="incut-ac-wrapper">
                  <div class="incut-aligned-content">

                    <div class="content-col-left">
                      <h3>
                        <router-link :to="{ name: 'Chapter', params: { slug: 'pewpew' }}">Основы энергетики</router-link>
                      </h3>
                      <p class="minitext">
                        Теплота сгорания, отнесенная к единице массы или объема топлива, называется удельной теплотворной способностью.
                      </p>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>

                      <span class="new-item minitext">Свежак</span>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>

                      <h3><a href="#">Природный газ</a></h3>
                      <p class="minitext">
                        Он был введён на Втором международном конгрессе электриков, проходившем в год смерти Джеймса Джоуля (1889), в
                        качестве единицы работы и энергии электрического тока и определен как работа, совершаемая при мощности в 1 вт в
                        течение 1 сек.
                      </p>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Обзорная справка</a>
                        </li>
                        <li>
                          <a href="#">Метан, его гомологи и&nbsp;примеси</a>
                        </li>
                        <li>
                          <a href="#">Единицы измерения природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">Теплотворная способность природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">СПГ&nbsp;— Сжиженный природный&nbsp;газ</a>
                        </li>
                        <li>
                          <a href="#">КПГ&nbsp;— Компримированный природный&nbsp;газ</a>
                        </li>
                        <li>
                          <a href="#">Технологии хранения природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">Технологии транспортировки природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников природного&nbsp;газа</a>
                        </li>
                        <li>
                          <a href="#">Традиционные источники природного&nbsp;газа</a>
                          <ul class="special-list">
                            <li>
                              <a href="#">Газовые месторождения </a>&nbsp;<sup class="new-item">Свежак</sup>
                            </li>
                            <li>
                              <a href="#">Газовый конденсат </a>&nbsp;<sup class="new-item">Свежак</sup>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Попутный газ</a>
                        </li>
                        <li>
                          <a href="#">Нетрадиционные источники природного&nbsp;газа (обзорная&nbsp;статья)</a>
                        </li>
                        <li>
                          <a href="#">Сланцевый газ</a>
                        </li>
                      </ul>

                      <span class="new-item minitext">Свежак</span>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Природные газовые гидраты</a>
                        </li>
                      </ul>

                      <h3><a href="#">Нефть
                        и нефтепродукты</a></h3>
                      <p class="minitext">
                        По этой причине использовать электроэнергию для отопления невыгодно: домашняя электроплитка или система
                        электроподогрева полов выделяют лишь 38% исходной энергии топлива, потраченной на производство электроэнергии.
                      </p>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>

                      <h3><a href="#">Уголь</a></h3>
                      <p class="minitext">
                        Калория используется также как единица энергетической ценности продуктов питания. Чтобы определить полную
                        энергетическую ценность пищи, её сжигают в калориметре и измеряют выделяющееся тепло.
                      </p>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>

                      <h3><a href="#">Синтетическое топливо</a></h3>
                      <p class="minitext">
                        Евростат и Международное энергетическое агентство для преобразования данных о физических потоках энергоресурсов в
                        единицы энергии при составлении энергетических балансов используют следующие значения теплотворной способности.
                      </p>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                      <span class="new-item minitext">Свежак</span>
                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Газ угольных пластов</a>
                        </li>
                      </ul>

                      <h3><a href="#">Электроэнергетика</a></h3>
                      <p class="minitext">
                        Значения теплотворной способности указываются в коммерческих контрактах для пунктов импорта, экспорта или ввода в
                        национальную распределительную сеть.
                      </p>
                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>

                      <h3><a href="#">Ядерная энергетика</a></h3>
                      <p class="minitext">
                        Поскольку энергоносители, используемые в различных странах, поставляются из разных мест, содержание БТЕ в физической
                        единице топлива немного отличается от страны к стране.
                      </p>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                      <span class="new-item minitext">Свежак</span>
                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                      </ul>

                      <h3><a href="#">Водород</a></h3>
                      <p class="minitext">
                        Большинство видов топлива является соединением углерода и водорода. Углерод и водород, соединяясь с кислородом в
                        процессе горения, дают тепло. Когда водород соединяется с кислородом, образуются молекулы воды.
                      </p>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>

                      <h3><a href="#">Топливные элементы</a></h3>
                      <p class="minitext">
                        Единицы энергии, фактически применяемые для сопоставления или суммирования разнородных видов топлива, зависят от
                        страны и местных условий и отражают исторические особенности того или иного государства или региона, нередко
                        приспособленные к изменяющимся условиям поставок.
                      </p>

                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Экскурс в общую геологию</a>
                        </li>
                        <li>
                          <a href="#">Классификация источников энергии</a>
                        </li>
                        <li>
                          <a href="#">Виды ископаемого органического топлива</a>
                        </li>
                        <li>
                          <a href="#">Категории запасов полезных ископаемых</a>
                        </li>
                      </ul>
                      <span class="new-item minitext">Свежак</span>
                      <ul class="special-list minitext">
                        <li>
                          <a href="#">Газ плотных песчаников</a>
                        </li>
                        <li>
                          <a href="#">Природные газовые гидраты</a>
                        </li>
                      </ul>
                    </div>
                    <div class="content-col-right">
                      <ul class="special-list">
                        <li><a href="#">Глоссарий</a></li>
                        <li><a href="#">Источники информации</a></li>
                      </ul>
                      <div class="stinky"><br></div>

                      <h3>Авторы</h3>
                      <ul class="special-list minitext">
                        <li><a href="#">Константин Константинович</a> Константинопольский</li>
                        <li><a href="#">Вадим Сергеевич</a> Павлов</li>
                        <li><a href="#">Вениамин Ефимович</a> Захаров</li>
                        <li><a href="#">Евгений Федорович</a> Кондратьев</li>
                        <li><a href="#">Иван Васильевич</a> Таранов</li>
                        <li><a href="#">Нассим Николас</a> Талеб</li>
                        <li><a href="#">Евгений Федорович</a> Кондратьев</li>
                        <li><a href="#">Константин Константинович</a> Константинопольский</li>
                      </ul>

                      <h3 class="stinky">Спонсоры раздела</h3>

                      <ul class="ch-sponsors">
                        <li>
                          <a href="#"><img src="images/l-gazprom.jpg" alt="" width="" height=""></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/l-luk.jpg" alt="" width="" height=""></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/l-bp.jpg" alt="" width="" height=""></a>

                        </li>
                        <li>
                          <a href="#"><img src="images/l-luk.jpg" alt="" width="" height=""></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/l-bp.jpg" alt="" width="" height=""></a>

                        </li>
                        <li>
                          <a href="#"><img src="images/l-gazprom.jpg" alt="" width="" height=""></a>
                        </li>
                      </ul>

                    </div>
                    <div class="clear"></div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- EOF tabs -->

      </div>
    </div>
    <div id="footer">
      <div class="f-wrapper">
        <div class="notadog">
          &copy;&nbsp;2011, Часть <a href="#">проекта по изменению мира к лучшему</a><br>
          Олег Янке, Вадим Черкасов
        </div>
        <a href="http://grandrating.ru/" id="makemehappy">Сделано в студии <span>GrandRating</span></a>
      </div>
    </div>

  </div>


</template>
<script>
import {AttributeType, AttributeValue, Content, ContentType} from "@/model/content/contentType";
import imageSource from '@/assets/title-test.jpg';

export default {
  name: 'Energy',
  data() {
    return {
      activeItem: 'list',
    }
  },
  setup() {

    const chapterContentType2 = {
      title: 'Раздел',
      alias: 'chapter',
      attributes: [
        new AttributeType({
          title: 'Картинка для заголовка',
          alias: 'titleImage',
          type: 'image',
        }),
        new AttributeType({
          title: 'Иконка',
          alias: 'iconImage',
          type: 'image',
        }),
        new AttributeType({
          title: 'Краткое описание',
          help: 'Для списков',
          alias: 'shortDescription',
          type: 'text',
        }),
        new AttributeType({
          title: 'Описание',
          help: 'Для страницы',
          alias: 'description',
          type: 'text',
        }),
        new AttributeType({
          title: 'Группы статей',
          alias: 'articleGroupList',
          type: 'collection',
          reference: 'groupArticle'
        }),
        new AttributeType({
          title: 'Авторы',
          alias: 'authors',
          type: 'collection',
          reference: 'user'
        }),
        new AttributeType({
          title: 'Спонсоры раздела',
          alias: 'sponsors',
          type: 'collection',
          reference: 'company'
        }),
      ],
    }

    const chapterEnergetics = {
      title: 'Энергетика',
      alias: 'energetics',
      type: 'chapter',
      attributes: [
        {
          title: 'Картинка для заголовка',
          alias: 'titleImage',
          type: 'image',
          value: imageSource,
        },
        {
          title: 'Иконка',
          alias: 'iconImage',
          type: 'image',
          value: imageSource,
        },
        {
          title: 'Краткое описание',
          help: 'Для списков',
          alias: 'shortDescription',
          type: 'text',
          value: 'Теплота сгорания, отнесенная к единице массы или объема топлива, называется удельной теплотворной способностью.',
        },
        {
          title: 'Описание',
          help: 'Для страницы',
          alias: 'description',
          type: 'text',
          value: 'Таким образом, к энергоносителям, помимо топлива (носителя потенциальной энергии), можно отнести электрический ток (проводник энергии изменяющегося электромагнитного поля), находящийся под давлением перегретый пар (носитель тепловой энергии), падающую с плотины воду.',
        },
        {
          title: 'Группы статей',
          alias: 'articleGroupList',
          type: 'collection',
          reference: 'groupArticle',
          value: [
            {
              id: 1,
            },
            {
              id: 2,
            }
          ]
        }
      ],
    }


    console.log(chapterContentType2, chapterEnergetics)


    const chapterType = new ContentType();
    chapterType.alias = 'chapter';
    chapterType.title = 'Раздел';


    const articleGroupType = new ContentType();
    articleGroupType.alias = 'articleGroup';
    articleGroupType.title = 'Группа статей';

    const articleGroupFieldType = new AttributeType();
    articleGroupFieldType.title = 'Группы статей';
    articleGroupFieldType.alias = 'articles';
    articleGroupFieldType.type = 'Группы статей';

    const articleGroupsField = new AttributeValue();
    articleGroupsField.type = articleGroupFieldType;
    articleGroupsField.value = articleGroupType.alias;

    const chapterEnergy = new Content();
    chapterEnergy.title = 'Энергетика';
    chapterEnergy.alias = 'energetics';
    chapterEnergy.type = chapterType;
    chapterEnergy.attributes.push(articleGroupsField)

    console.log('срфзеукУтукпн', chapterEnergy)
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem
    },
    setActive(menuItem) {
      this.activeItem = menuItem
    }
  }
}
import '@/assets/layout.css';
</script>

<style>
.content-title-wrapper {
  background: url('~@/assets/title-test.jpg') no-repeat 50%
}
</style>
