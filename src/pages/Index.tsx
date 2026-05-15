export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-sm font-bold tracking-tighter uppercase leading-tight">
            ЭМКС<br />
            <span className="font-normal text-xs">Войно-Ясенецкого</span>
          </a>
          <div className="flex space-x-8">
            <a href="#contest" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Конкурс
            </a>
            <a href="#nominations" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Номинации
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О конкурсе
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Участие
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Заочный творческий конкурс-выставка 2025</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              ЭСТЕТИКА
              <br />
              ТКАНИ
              <br />
              <span className="text-red-600">&amp; КРАСОТА</span>
              <br />
              ОРГАНОВ
            </h1>
            <p className="text-xl max-w-xl mb-8">
              Изобразительная школа Леонардо да Винчи. Конкурс рисунков и плакатов для студентов 1–2 курсов медицинских специальностей.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Подать заявку
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/3770d30d-8d4f-4055-aeb8-9d516300d644/files/8abd522d-fab1-476e-b424-2ed76002cbae.jpg"
                alt="Анатомическая иллюстрация в стиле Леонардо да Винчи"
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contest Section */}
      <section id="contest" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">РАБОТЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold mb-4">01</span>
                  <span className="text-black text-center text-sm uppercase tracking-wider">Рисунок</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Иллюстрация органа</h3>
              <p className="text-neutral-400">Детальное изображение органа или системы организма с анатомическими пояснениями</p>
            </div>

            {/* Category 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold mb-4">02</span>
                  <span className="text-black text-center text-sm uppercase tracking-wider">Плакат</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Научный плакат</h3>
              <p className="text-neutral-400">Учебный плакат с визуализацией анатомической структуры и методическими комментариями</p>
            </div>

            {/* Category 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold mb-4">03</span>
                  <span className="text-black text-center text-sm uppercase tracking-wider">Цифровая работа</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Цифровая иллюстрация</h3>
              <p className="text-neutral-400">Компьютерная или смешанная техника: 3D-модель, цифровой рисунок, инфографика органа</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О КОН<br />КУРСЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-7xl font-bold text-red-600 mb-2">ЛДВ</p>
                  <p className="text-sm uppercase tracking-widest">Леонардо да Винчи</p>
                  <p className="text-xs text-neutral-500 mt-4">Анатомические рисунки 1489–1510</p>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Конкурс «Эстетика ткани и красота органов» проводится Энгельсским медицинским колледжем Святого Луки Войно-Ясенецкого для студентов 1–2 курсов.
              </p>
              <p className="mb-6">
                Конкурс вдохновлён анатомическими трудами Леонардо да Винчи — первого художника, совместившего медицинскую точность и художественную красоту. Участники создают иллюстрации органов и систем организма, раскрывая эстетику живой природы через изобразительное искусство.
              </p>
              <p className="mb-6">
                Работы оцениваются по художественной выразительности, научной точности и оригинальности подачи материала. Лучшие работы войдут в выставку колледжа.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Специальности</h3>
                  <ul className="space-y-2 text-sm">
                    <li>31.02.01 Лечебное дело</li>
                    <li>34.02.01 Сестринское дело</li>
                    <li>31.02.03 Лаб. диагностика</li>
                    <li>33.02.01 Фармация</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Критерии</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Художественность</li>
                    <li>Научная точность</li>
                    <li>Оригинальность</li>
                    <li>Качество пояснений</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nominations Section */}
      <section id="nominations" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">УСЛОВИЯ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-neutral-700 p-8">
              <p className="text-red-600 text-sm uppercase tracking-widest mb-4">Кто участвует</p>
              <h3 className="text-2xl font-bold mb-4">Студенты 1–2 курсов</h3>
              <p className="text-neutral-400">Все специальности: Лечебное дело, Сестринское дело, Лабораторная диагностика, Фармация</p>
            </div>
            <div className="border border-neutral-700 p-8">
              <p className="text-red-600 text-sm uppercase tracking-widest mb-4">Формат работы</p>
              <h3 className="text-2xl font-bold mb-4">Рисунок или плакат</h3>
              <p className="text-neutral-400">Тема: иллюстрация органа или системы организма с авторскими пояснениями</p>
            </div>
            <div className="border border-neutral-700 p-8">
              <p className="text-red-600 text-sm uppercase tracking-widest mb-4">Формат участия</p>
              <h3 className="text-2xl font-bold mb-4">Заочный</h3>
              <p className="text-neutral-400">Работы принимаются дистанционно — фото или скан в высоком разрешении</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">УЧАСТИЕ</h2>
              <p className="text-xl mb-8">Хотите подать работу на конкурс? Заполните форму — организаторы свяжутся с вами.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Колледж</span>
                  <span>ЭМКС Войно-Ясенецкого</span>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Город</span>
                  <span>Энгельс, Саратовская обл.</span>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Курсы</span>
                  <span>1–2 курс</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    ФИО студента
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Иванова Мария Петровна"
                  />
                </div>
                <div>
                  <label htmlFor="specialty" className="block text-sm uppercase tracking-widest mb-2">
                    Специальность и курс
                  </label>
                  <input
                    type="text"
                    id="specialty"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Лечебное дело, 1 курс"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Email для связи
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="student@example.ru"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Описание работы
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Орган / система, техника исполнения"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Подать заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2025 ЭМКС Войно-Ясенецкого. Энгельс, Саратовская область.</p>
          <div className="flex space-x-8">
            <a href="#contest" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Конкурс
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Участие
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
