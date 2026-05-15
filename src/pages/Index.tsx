const WORKS = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: `Работа участника №${i + 1}`,
  description: "Описание работы будет добавлено после получения работы от участника.",
}));

export default function Index() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-sm font-bold tracking-tighter uppercase leading-tight">
            ЭМКС<br />
            <span className="font-normal text-xs">Войно-Ясенецкого</span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">О конкурсе</a>
            <a href="#goals" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Цели и задачи</a>
            <a href="#works" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Работы</a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero — Название конкурса */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">
              Заочный творческий конкурс-выставка
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
              ЭСТЕТИКА ТКАНИ
              <br />
              <span className="text-red-600">&amp; КРАСОТА</span>
              <br />
              ОРГАНОВ
            </h1>
            <p className="text-lg text-neutral-500 mb-2 italic">
              Изобразительная школа Леонардо да Винчи
            </p>
            <p className="text-base max-w-xl mt-4">
              Конкурс рисунков и плакатов на лучшую иллюстрацию органа или системы организма с пояснениями
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-neutral-100 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/3770d30d-8d4f-4055-aeb8-9d516300d644/files/44291646-a28a-4196-8f2c-1f72a28750b1.jpg"
                alt="Анатомическая иллюстрация в стиле Леонардо да Винчи"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* О конкурсе */}
      <section id="about" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-5xl font-bold tracking-tighter">О КОН<br />КУРСЕ</h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="text-xl leading-relaxed mb-6">
                Конкурс рисунков <span className="text-red-500">«Эстетика ткани и красота органов: изобразительная школа Леонардо да Винчи»</span> направлен на выявление талантливых художников, способных точно и выразительно изобразить анатомические и физиологические процессы.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Цели конкурса — развитие художественных навыков в области медицины, популяризация знаний по анатомии и физиологии, а также поддержка молодых талантов.
              </p>
              <div className="mt-10 pt-10 border-t border-neutral-700 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Участники</p>
                  <p className="text-white">Студенты 1–2 курсов</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Формат</p>
                  <p className="text-white">Заочный, дистанционный</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Специальности</p>
                  <p className="text-white">Лечебное дело, Сестринское дело, Лаб. диагностика, Фармация</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Организатор</p>
                  <p className="text-white">ГАПОУ СО «ЭМКС Войно-Ясенецкого»</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Тема, цели и задачи */}
      <section id="goals" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-100 relative">
                <img
                  src="https://cdn.poehali.dev/projects/3770d30d-8d4f-4055-aeb8-9d516300d644/files/523ab5c8-5bc3-4a3b-a0b8-e0345a05087c.jpg"
                  alt="Анатомия нервной системы в стиле да Винчи"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs uppercase tracking-widest px-3 py-1">
                  Леонардо да Винчи
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2">
              <h2 className="text-5xl font-bold tracking-tighter mb-4">ТЕМА,<br />ЦЕЛИ<br />&amp; ЗАДАЧИ</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>

              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Тема конкурса</h3>
                <p className="text-lg font-medium leading-relaxed">
                  Иллюстрация органа или системы организма с авторскими пояснениями — в традиции анатомических атласов Леонардо да Винчи.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Цели</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold mt-0.5">—</span>
                    <span>Развитие художественных навыков студентов в области медицины</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold mt-0.5">—</span>
                    <span>Популяризация знаний по анатомии и физиологии</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold mt-0.5">—</span>
                    <span>Поддержка молодых талантов медицинских специальностей</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold mt-0.5">—</span>
                    <span>Выявление студентов, способных выразительно передавать анатомические процессы</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Задачи</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold mt-0.5">—</span>
                    <span>Создать рисунок или плакат с изображением органа / системы организма</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold mt-0.5">—</span>
                    <span>Сопроводить работу анатомическими пояснениями</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold mt-0.5">—</span>
                    <span>Передать эстетику живой ткани средствами изобразительного искусства</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Работы участников */}
      <section id="works" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-5xl font-bold tracking-tighter">РАБОТЫ<br />УЧАСТНИКОВ</h2>
            <span className="text-neutral-500 text-sm uppercase tracking-widest">{WORKS.length} работ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {WORKS.map((work) => (
              <div key={work.id} className="group">
                <div className="aspect-square bg-neutral-900 mb-3 overflow-hidden border border-neutral-800 group-hover:border-red-600 transition-colors duration-300">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <span className="text-neutral-700 text-4xl font-bold group-hover:text-red-600 transition-colors duration-300">
                      {String(work.id).padStart(2, "0")}
                    </span>
                    <span className="text-neutral-700 text-xs uppercase tracking-widest mt-2">Участник</span>
                  </div>
                </div>
                <h3 className="text-sm font-bold mb-1">{work.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Обо мне / Контакты */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-5xl font-bold tracking-tighter mb-8">ОБО МНЕ</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-red-200 mb-1">ФИО</p>
                  <p className="text-xl font-bold">Вахрушева Ирина Евгеньевна</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-red-200 mb-1">Должность</p>
                  <p>Преподаватель</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-red-200 mb-1">Организация</p>
                  <p className="leading-relaxed">
                    ГАПОУ Саратовской области<br />
                    «Энгельсский медицинский колледж<br />
                    Святого Луки (Войно-Ясенецкого)»
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-16">
              <div className="space-y-6">
                <div className="border-b border-red-400 pb-6">
                  <p className="text-xs uppercase tracking-widest text-red-200 mb-2">Email</p>
                  <a href="mailto:vakhrusheva2003@list.ru" className="text-xl font-bold hover:underline">
                    vakhrusheva2003@list.ru
                  </a>
                </div>
                <div className="border-b border-red-400 pb-6">
                  <p className="text-xs uppercase tracking-widest text-red-200 mb-2">Телефон</p>
                  <a href="tel:+79198275219" className="text-xl font-bold hover:underline">
                    +7 (919) 827-52-19
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-red-200 mb-2">Город</p>
                  <p className="text-xl font-bold">Энгельс, Саратовская область</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © 2025 ГАПОУ СО «ЭМКС Войно-Ясенецкого». Энгельс, Саратовская область.
          </p>
          <div className="flex space-x-8">
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">О конкурсе</a>
            <a href="#works" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Работы</a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
