// AUTO-GENERATED content model — bilingual copy + assets.
import type { Localized } from '../i18n'

import brand_danone from '../assets/brands/danone.png'
import brand_henkel from '../assets/brands/henkel.png'
import brand_samsung from '../assets/brands/samsung.png'
import brand_knauf from '../assets/brands/knauf.png'
import brand_bauer from '../assets/brands/bauer.png'
import brand_red_bull from '../assets/brands/red-bull.png'
import brand_gorilla_energy from '../assets/brands/gorilla-energy.png'
import brand_garnier from '../assets/brands/garnier.png'
import brand_milka from '../assets/brands/milka.png'
import brand_ferrero from '../assets/brands/ferrero.png'
import brand_ulker from '../assets/brands/ulker.png'
import brand_efes from '../assets/brands/efes.png'
import brand_pladis from '../assets/brands/pladis.png'
import brand_midea from '../assets/brands/midea.png'
import brand_sl_electronics from '../assets/brands/sl-electronics.png'
import brand_apple from '../assets/brands/apple.png'
import brand_heineken from '../assets/brands/heineken.png'
import brand_johnsons_baby from '../assets/brands/johnsons-baby.png'
import brand_lotte from '../assets/brands/lotte.png'
import brand_rehau from '../assets/brands/rehau.png'

import work_work1_1 from '../assets/works/work1-1.jpg'
import work_work2_1 from '../assets/works/work2-1.jpg'
import work_work2_2 from '../assets/works/work2-2.jpg'
import work_work2_3 from '../assets/works/work2-3.jpg'
import work_work2_4 from '../assets/works/work2-4.jpg'
import work_work3_1 from '../assets/works/work3-1.jpg'
import work_work3_2 from '../assets/works/work3-2.jpg'
import work_work3_3 from '../assets/works/work3-3.jpg'
import work_work3_4 from '../assets/works/work3-4.jpg'
import work_work3_5 from '../assets/works/work3-5.jpg'
import work_work4_1 from '../assets/works/work4-1.jpg'
import work_work5_1 from '../assets/works/work5-1.jpg'
import work_work5_2 from '../assets/works/work5-2.jpg'
import work_work5_3 from '../assets/works/work5-3.jpg'
import work_work6_1 from '../assets/works/work6-1.jpg'
import work_work6_2 from '../assets/works/work6-2.jpg'
import work_work6_3 from '../assets/works/work6-3.jpg'
import work_work6_4 from '../assets/works/work6-4.jpg'
import work_work6_5 from '../assets/works/work6-5.jpg'
import work_work6_6 from '../assets/works/work6-6.jpg'
import work_work7_1 from '../assets/works/work7-1.jpg'
import work_work7_2 from '../assets/works/work7-2.jpg'
import work_work7_3 from '../assets/works/work7-3.jpg'
import work_work8_1 from '../assets/works/work8-1.jpg'
import work_work8_2 from '../assets/works/work8-2.jpg'
import work_work8_3 from '../assets/works/work8-3.jpg'
import portrait from '../assets/portrait.jpg'

export interface BrandLogo { src: string; cls: string; alt: string }
export interface WorkImage { src: string; cls: string; alt: string }
export interface Work { speed: number; rot: number; title: Localized; h3Long: boolean; desc: Localized; steps: Localized[]; imgs: WorkImage[] }
export interface TimelineItem { years: Localized; title: Localized; place: Localized }
export interface Skillset { type: 'plain' | 'lang'; title: Localized; items: Localized[] }
export { portrait }

export const brands: BrandLogo[] = [
  { src: brand_danone, cls: "", alt: "Danone" },
  { src: brand_henkel, cls: "lg", alt: "Henkel" },
  { src: brand_samsung, cls: "sm", alt: "Samsung" },
  { src: brand_knauf, cls: "", alt: "Knauf" },
  { src: brand_bauer, cls: "", alt: "Bauer" },
  { src: brand_red_bull, cls: "lg", alt: "Red Bull" },
  { src: brand_gorilla_energy, cls: "lg144", alt: "Gorilla Energy" },
  { src: brand_garnier, cls: "sm", alt: "Garnier" },
  { src: brand_milka, cls: "lg", alt: "Milka" },
  { src: brand_ferrero, cls: "sm133", alt: "Ferrero" },
  { src: brand_ulker, cls: "", alt: "Ülker" },
  { src: brand_efes, cls: "", alt: "Efes" },
  { src: brand_pladis, cls: "", alt: "pladis" },
  { src: brand_midea, cls: "lg", alt: "Midea" },
  { src: brand_sl_electronics, cls: "lg13", alt: "SL Electronics" },
  { src: brand_apple, cls: "lg", alt: "Apple" },
  { src: brand_heineken, cls: "lg", alt: "Heineken" },
  { src: brand_johnsons_baby, cls: "xl12", alt: "Johnson's baby" },
  { src: brand_lotte, cls: "lg", alt: "Lotte" },
  { src: brand_rehau, cls: "", alt: "Rehau" },
]

export const works: Work[] = [
  {
    speed: -90.0, rot: -2.5, h3Long: false,
    title: { ru: "Ferrero: день открытых дверей", en: "Ferrero: open day" },
    desc: { ru: "Разработка дизайна стенда и мерча, согласно обновлённому брендбуку, для дня открытых дверей в университете.", en: "Stand and merchandise design following the updated brandbook, created for the company's open day at the university." },
    steps: [
      { ru: "Изучение обновлённого брендбука и подбор носителей под формат мероприятия.", en: "Studying the updated brandbook and choosing carriers suited to the event format." },
      { ru: "Композиция из брендов группы: арка, стойки и раскладка на мерче.", en: "A composition of the group's brands: arch, stands and merch layouts." },
      { ru: "Подготовка макетов к производству: печать на текстиле, бутылках и полиграфии.", en: "Print-ready artwork for textiles, bottles and printed materials." },
    ],
    imgs: [
      { src: work_work1_1, cls: "v v-wide", alt: "Ferrero: день открытых дверей" },
    ],
  },
  {
    speed: 120.0, rot: 3.0, h3Long: false,
    title: { ru: "Gorilla: торговые дисплеи", en: "Gorilla: retail displays" },
    desc: { ru: "Разработка дизайна и конструкции: Бренд зоны, дисплеи, торговые паллеты, холдеры и т.д.", en: "Design and construction development: brand zones, displays, retail pallets, holders and more." },
    steps: [
      { ru: "Проработка конструктива под требования площадки и логистику.", en: "Engineering the structures around venue requirements and logistics." },
      { ru: "3D-визуализации для согласования с заказчиком.", en: "3D visualisations for client sign-off." },
      { ru: "Подготовка развёрток и макетов к производству.", en: "Preparing die-lines and print-ready artwork for production." },
    ],
    imgs: [
      { src: work_work2_1, cls: "v", alt: "Gorilla — торцевая торговая зона" },
      { src: work_work2_2, cls: "v", alt: "Gorilla — гексагональный дисплей" },
      { src: work_work2_3, cls: "v", alt: "Gorilla — паллетная конструкция" },
      { src: work_work2_4, cls: "v", alt: "Gorilla — холдер на полку" },
    ],
  },
  {
    speed: -60.0, rot: 2.0, h3Long: false,
    title: { ru: "Swaggy P: Автограф-сессия", en: "Swaggy P: signing session" },
    desc: { ru: "Разработка конструкции зоны для автограф-сессии инфлюенсера, доработка дизайна и подготовка раздаточных материалов: стикера-паков, автограф-карточек, билетов, мерча.", en: "Structural design of a signing-session zone for an influencer, design refinement and preparation of giveaways: sticker packs, autograph cards, tickets and merch." },
    steps: [
      { ru: "Проработка зоны под площадку: фотозона, стол, роллапы.", en: "Planning the zone for the venue: backdrop, table and roll-ups." },
      { ru: "Доработка дизайна под стиль инфлюенсера и требования бренда.", en: "Refining the design to match the influencer's style and brand requirements." },
      { ru: "Подготовка раздатки к печати: стикеры, карточки, билеты, мерч.", en: "Print-ready giveaways: stickers, cards, tickets and merch." },
    ],
    imgs: [
      { src: work_work3_1, cls: "v v-square", alt: "Swaggy P — зона автограф-сессии" },
      { src: work_work3_2, cls: "v v-square", alt: "Swaggy P — стол автограф-сессии" },
      { src: work_work3_3, cls: "v v-square", alt: "Swaggy P — стикер-пак" },
      { src: work_work3_4, cls: "v v-square", alt: "Swaggy P — автограф-карточка" },
      { src: work_work3_5, cls: "v v-square", alt: "Swaggy P — билеты и golden ticket" },
    ],
  },
  {
    speed: 80.0, rot: -3.0, h3Long: true,
    title: { ru: "Lab Technology: Карточки товара и<br>листовки на новую продукцию Yuwell", en: "Lab Technology: product cards and<br>leaflets for the new Yuwell range" },
    desc: { ru: "Разработка визуального контента для новой линейки продукции. Дизайн товарных карточек для маркетплейсов, верстка и предпечатная подготовка рекламных листовок.", en: "Visual content for a new product range: marketplace product cards, layout and pre-press of promotional leaflets." },
    steps: [
      { ru: "Сбор техданных по каждой позиции и единая структура листовки.", en: "Collecting specs for each item and building one consistent leaflet structure." },
      { ru: "Шаблон-сетка: иконки свойств, таблицы параметров, блок контактов.", en: "A grid template: feature icons, spec tables and a contact block." },
      { ru: "Адаптация под маркетплейсы и предпечатная подготовка тиража.", en: "Adapting for marketplaces and pre-press preparation for the print run." },
    ],
    imgs: [
      { src: work_work4_1, cls: "v v-wide", alt: "Lab Technology — листовки на продукцию Yuwell" },
    ],
  },
  {
    speed: -110.0, rot: 1.5, h3Long: false,
    title: { ru: "Coca-Cola: промо-стенды под напитки", en: "Coca-Cola: beverage promo stands" },
    desc: { ru: "Разработка конструкций по концептам клиента.", en: "Structural design based on the client's concepts." },
    steps: [
      { ru: "Разбор концептов клиента и уточнение технических требований.", en: "Reviewing the client's concepts and clarifying technical requirements." },
      { ru: "Проработка конструктива под каждый бренд линейки.", en: "Engineering the structure for each brand in the range." },
      { ru: "Развёртки и макеты для производства, контроль на выпуске.", en: "Die-lines and production artwork, with checks during manufacturing." },
    ],
    imgs: [
      { src: work_work5_1, cls: "v", alt: "Coca-Cola — промо-стенд с ростовой фигурой" },
      { src: work_work5_2, cls: "v", alt: "Fanta Лимонад — промо-стенд" },
      { src: work_work5_3, cls: "v", alt: "Fuse Tea — полочный дисплей" },
    ],
  },
  {
    speed: 95.0, rot: -2.0, h3Long: false,
    title: { ru: "TYTAN: конференция дистрибьюторов 2025", en: "TYTAN: distributor conference 2025" },
    desc: { ru: "Разработка дизайна полиграфических материалов: Листовки, лифлеты, открытки, металлические пины, плакетки и статуэтки", en: "Design of print materials: leaflets, folders, cards, metal pins, plaques and awards." },
    steps: [
      { ru: "Единый визуальный язык конференции по брендбуку TYTAN.", en: "A unified visual language for the conference, based on the TYTAN brandbook." },
      { ru: "Комплект носителей: от печатной полиграфии до сувенирки и наград.", en: "A full set of carriers: from print to merch and awards." },
      { ru: "Предпечатная подготовка и контроль производства.", en: "Pre-press preparation and production supervision." },
    ],
    imgs: [
      { src: work_work6_1, cls: "v v-54", alt: "TYTAN — листовки конференции" },
      { src: work_work6_2, cls: "v v-54", alt: "TYTAN — лифлет «Есть только один оригинал»" },
      { src: work_work6_3, cls: "v v-54", alt: "TYTAN — приветственная открытка" },
      { src: work_work6_4, cls: "v v-54", alt: "TYTAN и Selena — металлические пины" },
      { src: work_work6_5, cls: "v v-54", alt: "TYTAN — плакетки дистрибьюторам" },
      { src: work_work6_6, cls: "v v-54", alt: "TYTAN Awards — стеклянная статуэтка" },
    ],
  },
  {
    speed: -75.0, rot: 2.8, h3Long: false,
    title: { ru: "POSM для всей линейки Borjomi", en: "POSM for the entire Borjomi range" },
    desc: { ru: "Разработка линейки торговых дисплеев для продукции Borjomi, с сохранением фирменного стиля бренда и адаптация конструкции и графики под различные категории товаров.", en: "A line of retail displays for Borjomi products, preserving the brand's identity and adapting the construction and graphics to different product categories." },
    steps: [
      { ru: "Изучение брендбука Borjomi и требований к торговым носителям.", en: "Studying the Borjomi brandbook and retail-carrier requirements." },
      { ru: "Единая система дисплеев под разные категории продукции.", en: "A unified display system across different product categories." },
      { ru: "Адаптация конструкции и графики, подготовка к производству.", en: "Adapting construction and graphics, preparing for production." },
    ],
    imgs: [
      { src: work_work7_1, cls: "v v-apple", alt: "Borjomi Limonati — напольный дисплей" },
      { src: work_work7_2, cls: "v v-apple", alt: "Borjomi Energia — настольный дисплей" },
      { src: work_work7_3, cls: "v v-apple", alt: "Borjomi — прикассовый дисплей минеральной воды" },
    ],
  },
  {
    speed: 130.0, rot: -1.5, h3Long: false,
    title: { ru: "Демонстрационные стенды Apple", en: "Apple demonstration stands" },
    desc: { ru: "Проектирование конструкции стенда и техническая адаптация предоставленных заказчиком графических материалов под формат лайтбокс и полный цикл создания информационных материалов.", en: "Stand construction design and technical adaptation of the client's supplied artwork for the lightbox format, plus the full cycle of producing informational materials." },
    steps: [
      { ru: "Проектирование конструкции стенда и стола под площадку.", en: "Designing the stand and table construction for the venue." },
      { ru: "Адаптация графики заказчика под формат лайтбокса.", en: "Adapting the client's artwork to the lightbox format." },
      { ru: "Создание и предпечатная подготовка информационных листовок.", en: "Creating and pre-pressing the informational leaflets." },
    ],
    imgs: [
      { src: work_work8_1, cls: "v v-apple", alt: "Apple AirPods Pro 3 — демостенд с лайтбоксом" },
      { src: work_work8_2, cls: "v v-apple", alt: "Apple — демонстрационный стол" },
      { src: work_work8_3, cls: "v v-apple", alt: "Apple — информационные листовки iPhone и iPad" },
    ],
  },
]

export const education: TimelineItem[] = [
  { years: { ru: "Март 2024 — Авг 2024", en: "Mar 2024 — Aug 2024" }, title: { ru: "Курсы UI/UX-дизайна", en: "UI/UX design courses" }, place: { ru: "Онлайн-курсы TOP-Academy", en: "TOP-Academy online courses" } },
  { years: { ru: "Март 2022 — Июл 2022", en: "Mar 2022 — Jul 2022" }, title: { ru: "Курсы front-end", en: "Front-End courses" }, place: { ru: "Платформа Slack Education", en: "Slack Education platform" } },
  { years: { ru: "Сен 2020 — Сейчас", en: "Sep 2020 — Present" }, title: { ru: "Бакалавриат по дизайну и программированию", en: "Bachelor's Degree in Design and Programming" }, place: { ru: "Санкт-Петербургский государственный университет промышленных технологий и дизайна", en: "St. Petersburg State University of Industrial Technologies and Design" } },
  { years: { ru: "Сен 2018 — Май 2019", en: "Sep 2018 — May 2019" }, title: { ru: "Курсы «C++» в ИТМО", en: "ITMO «C++» courses" }, place: { ru: "Университет ИТМО, Санкт-Петербург", en: "St. Petersburg ITMO University" } },
]

export const academic: TimelineItem[] = [
  { years: { ru: "Авг 2024", en: "Aug 2024" }, title: { ru: "UI/UX мобильного приложения", en: "Mobile App UI/UX Development" }, place: { ru: "Разработал UI/UX для платформы онлайн-шопинга (учебный проект) в Figma.", en: "Designed UI/UX for an online shopping platform (non-professional project) using Figma." } },
  { years: { ru: "Авг 2024", en: "Aug 2024" }, title: { ru: "UI/UX лендинга", en: "Landing Page UI/UX Development" }, place: { ru: "Спроектировал и собрал лендинг для поиска работы (учебный проект) в Figma.", en: "Designed and developed a job search landing page for a non-professional project using Figma." } },
  { years: { ru: "Фев 2022 — Май 2022", en: "Feb 2022 — May 2022" }, title: { ru: "Разработка игры на SFML", en: "Game Development using SFML" }, place: { ru: "Разработал геймплей, реализовал игровые механики, нарисовал спрайты и фоны.", en: "Developed gameplay, implemented game mechanics, and designed sprites and backgrounds." } },
  { years: { ru: "Сен 2021 — Дек 2021", en: "Sep 2021 — Dec 2021" }, title: { ru: "Университетский дизайн-проект", en: "University Design Project" }, place: { ru: "Создал праздничный постер в Adobe Photoshop и Adobe Illustrator.", en: "Created a holiday poster using Adobe Photoshop and Adobe Illustrator." } },
  { years: { ru: "Март 2021 — Май 2021", en: "Mar 2021 — May 2021" }, title: { ru: "Разработка GUI мобильного приложения", en: "GUI Development for a Mobile App" }, place: { ru: "Спроектировал GUI для учебного проекта в Figma.", en: "Designed the GUI for a non-professional project using Figma." } },
]

export const experience: TimelineItem[] = [
  { years: { ru: "Май 2025 — Сен 2026", en: "May 2025 — Sep 2026" }, title: { ru: "Графический дизайнер · «Bocharoff»", en: "Graphic Designer · «Bocharoff»" }, place: { ru: "Алматы, Казахстан. Разрабатывал визуальные концепции рекламных конструкций, POS-материалов, выставочных стендов и промо-мерча. Создавал концепт-арт и визуализации мобильных промо-зон и ритейл-уголков для уличных фестивалей и выездных мероприятий. Адаптировал дизайн под технические ограничения — оптимизировал конструкции по компактности, лёгкости и эстетике без потери функциональности. Разрабатывал фирменный стиль и адаптировал брендбуки клиентов под нестандартные рекламные носители. Вёл комплексную допечатную подготовку макетов для широкоформатной, интерьерной, УФ- и шелкотрафаретной печати, адаптируя макеты под особенности каждого материала. Проверял цветопробы и тесно работал с производственным отделом и печатниками.", en: "Almaty, Kazakhstan. Developing visual concepts for advertising structures, POS materials, exhibition stands and promotional merchandise. Creating concept art and visualizations for mobile promo zones and retail corners at outdoor festivals and off-site events. Adapting designs to technical constraints — optimizing structures for compactness, lightness and aesthetics without compromising functionality. Developing corporate identity and adapting clients' brandbooks for non-standard advertising media. Comprehensive pre-press for large-format, interior, UV and silkscreen printing, adapting layouts to the specifics of each material. Reviewing colour proofs and working closely with the production department and print technicians." } },
  { years: { ru: "Сен 2023 — Янв 2025", en: "Sep 2023 — Jan 2025" }, title: { ru: "Фриланс · UpWork, Freelancer", en: "Freelance · UpWork, Freelancer" }, place: { ru: "Выполнял широкий спектр заказов, которые находил на UpWork, Freelancer и в Telegram. В основном — дизайн логотипов, ретушь фото, а также правки и обновления дизайна.", en: "Handled a wide range of orders sourced through UpWork, Freelancer and Telegram. Mainly logo design, photo retouching, and design fixes and updates." } },
  { years: { ru: "Март 2023 — Янв 2024", en: "Mar 2023 — Jan 2024" }, title: { ru: "Графический дизайнер · «OL Print»", en: "Graphic Designer · «OL Print»" }, place: { ru: "Батуми, Грузия. Ежедневно общался с клиентами, чтобы максимально точно закрыть их задачи. Разрабатывал разнообразную печатную продукцию — визитки, баннеры, флаеры, рекламу в транспорте и др., — готовил её к производству и/или участвовал в нём, а также готовил финальные макеты к печати.", en: "Batumi, Georgia. Worked with clients daily to meet their needs at the highest level. Designed a range of print products — business cards, banners, flyers, transit ads and more — prepared them for and/or oversaw production, and prepared final artwork for manufacture." } },
  { years: { ru: "Май 2021 — Янв 2022", en: "May 2021 — Jan 2022" }, title: { ru: "Стажёр front-end разработчик · ООО «M52»", en: "Front-End Developer Intern · LLC «M52»" }, place: { ru: "Санкт-Петербург, Россия. Участвовал в разработке сайта российской интернет-компании, а также в проработке дизайна.", en: "St. Petersburg, Russia. Helped develop the website of a Russian internet company, and took part in the design work." } },
]

export const about = {
  eyebrow: { ru: "Обо мне", en: "About" },
  h2: { ru: "Тут немножко про меня :)", en: "A little bit about me :)" },
  intro: { ru: "Привет! Я Андрей. Ищу позицию в компании, где смогу применить свои дизайнерские навыки, участвовать в решении сложных задач, создавать уникальные визуальные решения и помогать вовремя доводить проекты до конца.", en: "Hi! I am Andrey. Seeking a position in a company where I can apply my design skills, contribute to solving complex problems, develop unique visual solutions, and support the timely completion of projects." },
  facts: [
    { value: "5", label: { ru: "лет в дизайне", en: "years in design" } },
    { value: "400+", label: { ru: "проектов", en: "projects" } },
  ],
  notes: [
    { ru: "Открыт к предложениям", en: "Open to offers" },
    { ru: "Работаю удалённо", en: "Working remotely" },
    { ru: "Отвечаю оперативно", en: "Replies promptly" },
  ],
  skillsets: [
    {
      type: "plain" as const,
      title: { ru: "Хард-скиллы", en: "Hard skills" },
      items: [
        { ru: "Figma", en: "Figma" },
        { ru: "Adobe Photoshop", en: "Adobe Photoshop" },
        { ru: "Adobe Illustrator", en: "Adobe Illustrator" },
        { ru: "Adobe InDesign", en: "Adobe InDesign" },
        { ru: "UI/UX-дизайн", en: "UI/UX Design" },
        { ru: "Промпт-инжиниринг", en: "Prompt Engineering" },
        { ru: "Вайб-кодинг", en: "Vibe Coding" },
        { ru: "Типографика", en: "Typography" },
        { ru: "Айдентика", en: "Identity" },
        { ru: "Вёрстка", en: "Layout" },
      ],
    },
    {
      type: "plain" as const,
      title: { ru: "Софт-скиллы", en: "Soft skills" },
      items: [
        { ru: "Работа без плотного контроля", en: "Works on own initiative" },
        { ru: "Многозадачность", en: "Multitasking" },
        { ru: "Командная работа", en: "Team work" },
        { ru: "Креативное мышление", en: "Creative thinking" },
        { ru: "Находчивость", en: "Resourcefulness" },
        { ru: "Надёжность и адаптивность", en: "Reliable & adaptable" },
        { ru: "Коммуникабельность", en: "Communicative" },
        { ru: "Гибкость", en: "Flexible" },
        { ru: "Быстрая обучаемость", en: "Quick learning" },
        { ru: "Технологичность", en: "Tech-savvy" },
        { ru: "В тренде", en: "Trend-aligned" },
      ],
    },
    {
      type: "lang" as const,
      title: { ru: "Языки", en: "Languages" },
      items: [
        { ru: "Русский — <span class='lvl'>C2</span> <span class='note'>(Proficiency)</span>", en: "Russian — <span class='lvl'>C2</span> <span class='note'>(Proficiency)</span>" },
        { ru: "Английский — <span class='lvl'>B2</span> <span class='note'>(Upper-Intermediate)</span>", en: "English — <span class='lvl'>B2</span> <span class='note'>(Upper-Intermediate)</span>" },
        { ru: "Немецкий — <span class='lvl'>A1</span> <span class='note'>(Elementary)</span>", en: "German — <span class='lvl'>A1</span> <span class='note'>(Elementary)</span>" },
        { ru: "Грузинский — <span class='lvl'>A1</span> <span class='note'>(Elementary)</span>", en: "Georgian — <span class='lvl'>A1</span> <span class='note'>(Elementary)</span>" },
      ],
    },
  ],
}

export const ui = {
  brandsTitle: { ru: "Бренды, с которыми я работал", en: "Brands I've worked with" },
  nav: [
    { href: "#about", label: { ru: "Обо мне", en: "About" } },
    { href: "#education", label: { ru: "Образование", en: "Education" } },
    { href: "#experience", label: { ru: "Опыт", en: "Experience" } },
    { href: "#works", label: { ru: "Работы", en: "Works" } },
    { href: "#contact", label: { ru: "Контакты", en: "Contact" } },
  ],
  eduTitles: [{ ru: "Образование", en: "Education" }, { ru: "Учебные проекты", en: "Academic projects" }] as const,
  education: { eyebrow: { ru: "Бэкграунд", en: "Background" }, h2: { ru: "Образование и<br>учебные проекты", en: "Education &amp;<br>academic projects" } },
  experience: { eyebrow: { ru: "Карьера", en: "Career" }, h2: { ru: "Опыт работы", en: "Experience" } },
  works: { eyebrow: { ru: "Портфолио", en: "Portfolio" }, h2: { ru: "Работы", en: "Works" } },
  contact: { eyebrow: { ru: "Контакты", en: "Contacts" }, h2: { ru: "Открыт для новых задач<br>и рабочих предложений.", en: "Open to new challenges<br>and work opportunities." }, sub: { ru: "Выберите удобный способ связи, отвечаю везде :)", en: "Pick whatever channel suits you — I answer everywhere :)" } },
  email: "resh.and.ray@gmail.com",
  socials: [
    { href: "https://t.me/Ywj637sN20", label: "Telegram" },
    { href: "https://www.linkedin.com/in/andrey-reshetnikov-46228a251/", label: "LinkedIn" },
  ],
  process: { ru: "Процесс", en: "Process" },
  footer: { ru: "© 2026 Andrey Reshetnikov — мультидисциплинарный дизайнер", en: "© 2026 Andrey Reshetnikov — multidisciplinary designer" },
  sideLabels: [{ ru: "Мультидисциплинарный дизайнер", en: "Multidisciplinary designer" }, { ru: "Портфолио · 2026", en: "Portfolio · 2026" }] as const,
}

