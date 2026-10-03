const copy = {
  ar: {
    previewLabel: "قائمة تجريبية",
    tableLabel: "الطاولة 08",
    share: "مشاركة",
    brandNote: "أطيب لحظات المائدة",
    order: "طلبك",
    openNow: "مفتوح الآن",
    restaurantDescription: "نكهات من البيت، تُحضّر على مهل وتُقدّم بكل حب.",
    ratingLabel: "من 280 تقييم",
    deliveryTime: "20–30 دقيقة",
    location: "يافا، فلسطين",
    menuKicker: "من مطبخنا إلى مائدتك",
    menuTitle: "قائمة اليوم",
    menuDescription: "أطباق طازجة، مكوّنات موسمية، ونكهات تُشبه البيت.",
    searchLabel: "ابحث في القائمة",
    searchPlaceholder: "ابحث عن طبق تحبه",
    categoryLabel: "أقسام القائمة",
    popularRibbon: "اختيارات أحبّها ضيوفنا",
    footerBrand: "قائمة دار يارا عبر رستيفو",
    prototypeNote: "معاينة تفاعلية — لا يتم إرسال الطلبات.",
    viewOrder: "عرض الطلب",
    all: "كل الأطباق",
    mezze: "مقبلات",
    mains: "أطباق رئيسية",
    sweets: "حلويات",
    drinks: "مشروبات",
    bestSeller: "الأكثر طلبًا",
    vegetarian: "نباتي",
    noResultsTitle: "لم نجد هذا الطبق",
    noResultsText: "جرّب كلمة أخرى أو اختر قسمًا مختلفًا.",
    yourOrder: "طلبك",
    pickup: "استلام",
    delivery: "توصيل",
    emptyTitle: "طلبك يبدأ من هنا",
    emptyText: "اختر طبقًا من القائمة وسنضيفه إلى طلبك.",
    subtotal: "المجموع",
    deliveryFee: "رسوم التوصيل",
    free: "مجانًا",
    total: "الإجمالي",
    continueCheckout: "متابعة الطلب",
    checkoutDemo: "هذه معاينة فقط. لم يتم إرسال أي طلب.",
    close: "إغلاق",
    options: "اختر الإضافات",
    required: "مطلوب",
    optional: "اختياري",
    chooseOption: "اختر خيارًا للمتابعة",
    addToOrder: "أضف إلى الطلب",
    increase: "زيادة الكمية",
    decrease: "تقليل الكمية",
    remove: "إزالة",
    cartAdded: "أُضيف الطبق إلى طلبك",
    cartUpdated: "تم تحديث طلبك",
    linkCopied: "تم نسخ رابط القائمة",
    shareReady: "قائمة دار يارا جاهزة للمشاركة",
    shareError: "تعذّرت مشاركة الرابط من هذا المتصفح",
    closeOrder: "إغلاق الطلب",
    tableService: "للطاولة 08",
    noOrders: "هذه معاينة تفاعلية ولا ترسل طلبات حقيقية.",
    currencyLocale: "ar-IL",
    titleSuffix: "قائمة رستيفو",
  },
  en: {
    previewLabel: "Menu preview",
    tableLabel: "Table 08",
    share: "Share",
    brandNote: "Made for good table moments",
    order: "Your order",
    openNow: "Open now",
    restaurantDescription: "Comforting family recipes, made slowly and served with care.",
    ratingLabel: "from 280 reviews",
    deliveryTime: "20–30 min",
    location: "Jaffa, Palestine",
    menuKicker: "From our kitchen to your table",
    menuTitle: "Today’s menu",
    menuDescription: "Fresh plates, seasonal produce, and flavors that feel like home.",
    searchLabel: "Search the menu",
    searchPlaceholder: "Find something you love",
    categoryLabel: "Menu categories",
    popularRibbon: "Guest favorites",
    footerBrand: "Dar Yara menu by Restivo",
    prototypeNote: "Interactive preview — no orders are sent.",
    viewOrder: "View order",
    all: "Everything",
    mezze: "Mezze",
    mains: "Mains",
    sweets: "Sweets",
    drinks: "Drinks",
    bestSeller: "Guest favorite",
    vegetarian: "Vegetarian",
    noResultsTitle: "No dishes found",
    noResultsText: "Try a different search or browse another category.",
    yourOrder: "Your order",
    pickup: "Pickup",
    delivery: "Delivery",
    emptyTitle: "Your order starts here",
    emptyText: "Choose a dish from the menu and it will appear here.",
    subtotal: "Subtotal",
    deliveryFee: "Delivery",
    free: "Free",
    total: "Total",
    continueCheckout: "Continue to checkout",
    checkoutDemo: "This is only a preview. No order was sent.",
    close: "Close",
    options: "Make it yours",
    required: "Required",
    optional: "Optional",
    chooseOption: "Choose an option to continue",
    addToOrder: "Add to order",
    increase: "Increase quantity",
    decrease: "Decrease quantity",
    remove: "Remove",
    cartAdded: "Added to your order",
    cartUpdated: "Your order was updated",
    linkCopied: "Menu link copied",
    shareReady: "Dar Yara’s menu is ready to share",
    shareError: "This browser could not share the menu link",
    closeOrder: "Close order",
    tableService: "For table 08",
    noOrders: "This is an interactive preview; it does not send real orders.",
    currencyLocale: "en-IL",
    titleSuffix: "Restivo Menu",
  },
};

const categories = [
  { id: "all", copyKey: "all" },
  { id: "mezze", copyKey: "mezze" },
  { id: "mains", copyKey: "mains" },
  { id: "sweets", copyKey: "sweets" },
  { id: "drinks", copyKey: "drinks" },
];

const dishes = [
  {
    id: "hummus",
    category: "mezze",
    name: { ar: "حمّص بيروتي", en: "Beiruti hummus" },
    description: {
      ar: "حمّص كريمي، زيت زيتون بلدي، سماق وحبّات حمص دافئة.",
      en: "Silky chickpeas, local olive oil, sumac, and warm whole chickpeas.",
    },
    price: 28,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=82",
    tag: "vegetarian",
    popular: true,
    options: [
      {
        id: "bread",
        required: true,
        label: { ar: "اختر الخبز", en: "Choose your bread" },
        choices: [
          { id: "pita", label: { ar: "خبز عربي طازج", en: "Fresh pita" }, extra: 0 },
          { id: "gluten-free", label: { ar: "خبز خالٍ من الغلوتين", en: "Gluten-free bread" }, extra: 6 },
        ],
      },
      {
        id: "extras",
        required: false,
        label: { ar: "إضافات جانبية", en: "Add a little extra" },
        choices: [
          { id: "falafel", label: { ar: "ثلاث حبّات فلافل", en: "Three falafel" }, extra: 12 },
          { id: "pickles", label: { ar: "مخلّل بيتنا", en: "House pickles" }, extra: 5 },
        ],
      },
    ],
  },
  {
    id: "shish-taouk",
    category: "mains",
    name: { ar: "شيش طاووق على الفحم", en: "Charcoal shish taouk" },
    description: {
      ar: "دجاج متبّل باللبن والثوم، يُشوى على الفحم ويُقدّم مع الأرز.",
      en: "Yogurt-marinated chicken grilled over coals, served with herbed rice.",
    },
    price: 54,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=82",
    tag: "bestSeller",
    popular: true,
    options: [
      {
        id: "side",
        required: true,
        label: { ar: "اختر طبقك الجانبي", en: "Choose a side" },
        choices: [
          { id: "rice", label: { ar: "أرز بالأعشاب", en: "Herbed rice" }, extra: 0 },
          { id: "salad", label: { ar: "فتوش صغير", en: "Small fattoush" }, extra: 4 },
        ],
      },
      {
        id: "heat",
        required: false,
        label: { ar: "درجة الحرارة", en: "A little heat?" },
        choices: [
          { id: "chili", label: { ar: "دبس فليفلة حار", en: "House chili sauce" }, extra: 3 },
        ],
      },
    ],
  },
  {
    id: "fattoush",
    category: "mezze",
    name: { ar: "فتّوش الدار", en: "Dar Yara fattoush" },
    description: {
      ar: "خضار مقطّعة طازجة، خبز مقرمش، ودبس رمّان من مطبخنا.",
      en: "Crisp greens, warm toasted pita, and our own pomegranate dressing.",
    },
    price: 32,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
    tag: "vegetarian",
    popular: true,
    options: [],
  },
  {
    id: "kofta",
    category: "mains",
    name: { ar: "كفتة مع طحينة", en: "Kofta with tahini" },
    description: {
      ar: "كفتة لحم مشوية، طحينة ليمون، وبندورة محمّرة.",
      en: "Grilled kofta, lemon tahini, and slow-roasted tomatoes.",
    },
    price: 58,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=82",
    tag: "bestSeller",
    popular: false,
    options: [
      {
        id: "cooking",
        required: true,
        label: { ar: "طريقة التقديم", en: "Choose your serving" },
        choices: [
          { id: "plate", label: { ar: "طبق مع أرز", en: "Plate with rice" }, extra: 0 },
          { id: "wrap", label: { ar: "لفّة خبز طازج", en: "Fresh bread wrap" }, extra: 0 },
        ],
      },
    ],
  },
  {
    id: "lemonade",
    category: "drinks",
    name: { ar: "ليمون ونعنع", en: "Lemon & mint" },
    description: {
      ar: "ليمون طازج، نعنع أخضر، ولمسة خفيفة من ماء الورد.",
      en: "Fresh lemon, green mint, and a hint of rose water.",
    },
    price: 18,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=82",
    tag: "vegetarian",
    popular: false,
    options: [
      {
        id: "size",
        required: true,
        label: { ar: "اختر الحجم", en: "Choose a size" },
        choices: [
          { id: "regular", label: { ar: "عادي", en: "Regular" }, extra: 0 },
          { id: "large", label: { ar: "كبير", en: "Large" }, extra: 7 },
        ],
      },
    ],
  },
  {
    id: "kunafa",
    category: "sweets",
    name: { ar: "كنافة ساخنة", en: "Warm kunafa" },
    description: {
      ar: "قشطة طازجة، عجينة ذهبية، وقطر زهر الليمون.",
      en: "Fresh cream, golden pastry, and orange-blossom syrup.",
    },
    price: 29,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=82",
    tag: "bestSeller",
    popular: true,
    options: [
      {
        id: "portion",
        required: true,
        label: { ar: "الحجم", en: "Portion" },
        choices: [
          { id: "individual", label: { ar: "قطعة فردية", en: "Individual" }, extra: 0 },
          { id: "sharing", label: { ar: "حجم للمشاركة", en: "For sharing" }, extra: 18 },
        ],
      },
    ],
  },
];

const state = {
  language: "ar",
  category: "all",
  query: "",
  fulfillment: "pickup",
  cart: [],
  modalDishId: null,
  modalSelections: {},
  modalQuantity: 1,
  cartOpen: false,
  previousFocus: null,
  toastTimer: null,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const getCopy = (key) => copy[state.language][key] || copy.en[key] || key;
const localize = (value) => (typeof value === "string" ? value : value[state.language] || value.en);
const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
const formatMoney = (amount) =>
  new Intl.NumberFormat(getCopy("currencyLocale"), {
    style: "currency",
    currency: "ILS",
    maximumFractionDigits: 0,
  }).format(amount);

function updateStaticCopy() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  document.title = `${localize({ ar: "دار يارا", en: "Dar Yara" })} — ${getCopy("titleSuffix")}`;
  $("#restaurantName").textContent = localize({ ar: "دار يارا", en: "Dar Yara" });

  $$("[data-copy]").forEach((element) => {
    const key = element.dataset.copy;
    element.textContent = getCopy(key);
  });

  const languageButton = $("#languageButton");
  languageButton.textContent = state.language === "ar" ? "EN" : "عربي";
  languageButton.setAttribute(
    "aria-label",
    state.language === "ar" ? "Switch to English" : "التبديل إلى العربية",
  );
  $("#shareButton").setAttribute("aria-label", getCopy("share"));
  $("#openCartButton").setAttribute("aria-label", getCopy("order"));
  $("#desktopCart").setAttribute("aria-label", getCopy("yourOrder"));

  const search = $("#menuSearch");
  search.placeholder = getCopy("searchPlaceholder");
  search.setAttribute("aria-label", getCopy("searchLabel"));
  search.value = state.query;
}

function categoryMarkup() {
  return categories.map((category) => {
    const active = state.category === category.id;
    const count = category.id === "all"
      ? dishes.length
      : dishes.filter((dish) => dish.category === category.id).length;
    return `
      <button class="category-pill${active ? " active" : ""}" type="button"
        data-category="${category.id}" aria-pressed="${active}">
        <span>${escapeHTML(getCopy(category.copyKey))}</span>
        <span class="category-count">${count}</span>
      </button>`;
  }).join("");
}

function dishMarkup(dish) {
  const name = localize(dish.name);
  const hasOptions = dish.options.length > 0;
  const quickLabel = hasOptions ? getCopy("options") : getCopy("addToOrder");
  const tag = dish.tag ? `<span class="dish-tag">${escapeHTML(getCopy(dish.tag))}</span>` : "";
  const quickIcon = `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 4v12M4 10h12" />
    </svg>`;

  return `
    <article class="dish-card">
      <button class="dish-photo" type="button" data-open-dish="${dish.id}" aria-label="${escapeHTML(name)}">
        <img src="${escapeHTML(dish.image)}" alt="${escapeHTML(name)}" loading="lazy" />
        ${tag}
      </button>
      <button class="add-quick" type="button" data-quick-add="${dish.id}" aria-label="${escapeHTML(quickLabel)}">
        ${quickIcon}
      </button>
      <button class="dish-content" type="button" data-open-dish="${dish.id}">
        <span class="dish-title-row">
          <span class="dish-name">${escapeHTML(name)}</span>
          <span class="dish-price">${formatMoney(dish.price)}</span>
        </span>
        <span class="dish-description">${escapeHTML(localize(dish.description))}</span>
        <span class="dish-foot">
          <span class="food-markers"><span class="food-dot" aria-hidden="true"></span>${escapeHTML(getCopy("tableService"))}</span>
          <span>${hasOptions ? escapeHTML(getCopy("options")) : escapeHTML(getCopy("addToOrder"))}</span>
        </span>
      </button>
    </article>`;
}

function normalizeSearch(value) {
  return value
    .trim()
    .toLocaleLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, "");
}

function renderMenu() {
  $("#categoryStrip").innerHTML = categoryMarkup();
  const query = normalizeSearch(state.query);
  const visibleDishes = dishes.filter((dish) => {
    const categoryMatches = state.category === "all" || dish.category === state.category;
    const searchable = normalizeSearch([
      dish.name.ar,
      dish.name.en,
      dish.description.ar,
      dish.description.en,
    ].join(" "));
    return categoryMatches && (!query || searchable.includes(query));
  });

  const grid = $("#dishGrid");
  grid.setAttribute("aria-busy", "false");
  if (!visibleDishes.length) {
    grid.innerHTML = `
      <div class="no-results">
        <span class="no-results-mark" aria-hidden="true"></span>
        <h3>${escapeHTML(getCopy("noResultsTitle"))}</h3>
        <p>${escapeHTML(getCopy("noResultsText"))}</p>
      </div>`;
    return;
  }
  grid.innerHTML = visibleDishes.map(dishMarkup).join("");
}

function getDish(dishId) {
  return dishes.find((dish) => dish.id === dishId);
}

function getSelectedChoices(dish, selections = {}) {
  return dish.options.flatMap((group) =>
    (selections[group.id] || []).map((choiceId) => {
      const choice = group.choices.find((item) => item.id === choiceId);
      return choice ? { group, choice } : null;
    }).filter(Boolean),
  );
}

function selectedTotal(dish, selections = {}) {
  return dish.price + getSelectedChoices(dish, selections)
    .reduce((sum, entry) => sum + entry.choice.extra, 0);
}

function getModalValidity(dish) {
  return dish.options.every((group) =>
    !group.required || (state.modalSelections[group.id] || []).length > 0,
  );
}

function openDish(dishId, trigger = document.activeElement) {
  const dish = getDish(dishId);
  if (!dish) return;
  state.previousFocus = trigger;
  state.modalDishId = dishId;
  state.modalSelections = {};
  state.modalQuantity = 1;
  state.cartOpen = false;
  renderCartDrawer();
  renderModal();
  document.body.classList.add("overlay-open");
  requestAnimationFrame(() => $(".dish-modal-close")?.focus());
}

function closeDish() {
  if (!state.modalDishId) return;
  state.modalDishId = null;
  $("#modalRoot").innerHTML = "";
  document.body.classList.remove("overlay-open");
  state.previousFocus?.focus?.();
}

function modalMarkup(dish) {
  const selected = state.modalSelections;
  const optionsMarkup = dish.options.map((group) => {
    const isRadio = group.required;
    const selectedIds = selected[group.id] || [];
    const choices = group.choices.map((choice) => {
      const inputType = isRadio ? "radio" : "checkbox";
      const checked = selectedIds.includes(choice.id);
      const amount = choice.extra ? `+ ${formatMoney(choice.extra)}` : "";
      return `
        <label class="option-choice">
          <span>
            <input type="${inputType}" name="option-${group.id}" value="${choice.id}"
              data-option-choice data-group="${group.id}" data-choice="${choice.id}"
              ${checked ? "checked" : ""} />
            <span>${escapeHTML(localize(choice.label))}</span>
          </span>
          ${amount ? `<span class="choice-price">${escapeHTML(amount)}</span>` : ""}
        </label>`;
    }).join("");
    return `
      <fieldset class="option-section">
        <legend class="option-heading">
          <strong>${escapeHTML(localize(group.label))}</strong>
          <span class="${group.required ? "required-pill" : "optional-pill"}">
            ${escapeHTML(getCopy(group.required ? "required" : "optional"))}
          </span>
        </legend>
        ${choices}
      </fieldset>`;
  }).join("");
  const selectedPrice = selectedTotal(dish, selected) * state.modalQuantity;
  const valid = getModalValidity(dish);
  const title = localize(dish.name);

  return `
    <div class="modal-backdrop" data-close-modal>
      <section class="dish-modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" tabindex="-1">
        <div class="modal-image">
          <img src="${escapeHTML(dish.image)}" alt="${escapeHTML(title)}" />
          ${dish.tag ? `<span class="dish-tag">${escapeHTML(getCopy(dish.tag))}</span>` : ""}
        </div>
        <div class="modal-body">
          <button class="close-modal dish-modal-close" type="button" data-close-modal aria-label="${escapeHTML(getCopy("close"))}">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" /></svg>
          </button>
          <p class="section-kicker">${escapeHTML(getCopy("options"))}</p>
          <h2 id="modalTitle">${escapeHTML(title)}</h2>
          <p class="modal-description">${escapeHTML(localize(dish.description))}</p>
          <div class="modal-base-price">${escapeHTML(formatMoney(dish.price))}</div>
          ${optionsMarkup ? `<div class="modal-options">${optionsMarkup}</div>` : ""}
          <div class="modal-actions">
            <div class="modal-quantity" aria-label="${escapeHTML(title)}">
              <button type="button" data-modal-quantity="-1" aria-label="${escapeHTML(getCopy("decrease"))}">−</button>
              <span id="modalQuantity">${state.modalQuantity}</span>
              <button type="button" data-modal-quantity="1" aria-label="${escapeHTML(getCopy("increase"))}">+</button>
            </div>
            <button class="add-to-cart" type="button" data-add-modal ${valid ? "" : "disabled"}>
              <span>${escapeHTML(valid ? getCopy("addToOrder") : getCopy("chooseOption"))}</span>
              <strong id="modalTotal">${escapeHTML(formatMoney(selectedPrice))}</strong>
            </button>
          </div>
        </div>
      </section>
    </div>`;
}

function renderModal() {
  const dish = getDish(state.modalDishId);
  if (!dish) {
    $("#modalRoot").innerHTML = "";
    return;
  }
  $("#modalRoot").innerHTML = modalMarkup(dish);
}

function updateModalSummary() {
  const dish = getDish(state.modalDishId);
  if (!dish) return;
  const valid = getModalValidity(dish);
  const addButton = $("[data-add-modal]");
  addButton.disabled = !valid;
  addButton.querySelector("span").textContent = valid ? getCopy("addToOrder") : getCopy("chooseOption");
  $("#modalTotal").textContent = formatMoney(selectedTotal(dish, state.modalSelections) * state.modalQuantity);
}

function addDishToCart(dishId, selections = {}, quantity = 1) {
  const dish = getDish(dishId);
  if (!dish) return;
  const orderedIds = getSelectedChoices(dish, selections).map(({ choice }) => choice.id);
  const key = `${dish.id}|${orderedIds.join(",")}`;
  const existing = state.cart.find((line) => line.key === key);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      key,
      dishId,
      selections: Object.fromEntries(
        Object.entries(selections).map(([groupId, choiceIds]) => [groupId, [...choiceIds]]),
      ),
      quantity,
    });
  }
  renderCart();
  toast(getCopy("cartAdded"));
}

function cartCount() {
  return state.cart.reduce((sum, line) => sum + line.quantity, 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, line) => {
    const dish = getDish(line.dishId);
    return dish ? sum + selectedTotal(dish, line.selections) * line.quantity : sum;
  }, 0);
}

function lineOptionText(dish, selections) {
  return getSelectedChoices(dish, selections)
    .map(({ choice }) => localize(choice.label))
    .join(" · ");
}

function cartLinesMarkup() {
  return state.cart.map((line) => {
    const dish = getDish(line.dishId);
    if (!dish) return "";
    const name = localize(dish.name);
    const options = lineOptionText(dish, line.selections);
    const unitPrice = selectedTotal(dish, line.selections);
    return `
      <div class="cart-line">
        <div class="cart-line-main">
          <div class="cart-line-heading">
            <p class="cart-line-name">${escapeHTML(name)}</p>
            <strong class="line-price">${escapeHTML(formatMoney(unitPrice * line.quantity))}</strong>
          </div>
          ${options ? `<p class="cart-line-options">${escapeHTML(options)}</p>` : ""}
          <div class="quantity-control">
            <button type="button" data-cart-delta="-1" data-line="${escapeHTML(line.key)}" aria-label="${escapeHTML(getCopy("decrease"))}">−</button>
            <span aria-live="polite">${line.quantity}</span>
            <button type="button" data-cart-delta="1" data-line="${escapeHTML(line.key)}" aria-label="${escapeHTML(getCopy("increase"))}">+</button>
            <button class="remove-line" type="button" data-remove-line="${escapeHTML(line.key)}">${escapeHTML(getCopy("remove"))}</button>
          </div>
        </div>
      </div>`;
  }).join("");
}

function cartMarkup() {
  const count = cartCount();
  const subtotal = cartSubtotal();
  const deliveryFee = state.fulfillment === "delivery" && subtotal > 0 ? 12 : 0;
  const isEmpty = count === 0;
  return `
    <div class="cart-head">
      <div><p class="section-kicker">${escapeHTML(getCopy("order"))}</p><h2 class="cart-title">${escapeHTML(getCopy("yourOrder"))}</h2></div>
      <span class="cart-count">${count}</span>
    </div>
    <div class="fulfillment" role="group" aria-label="${escapeHTML(getCopy("yourOrder"))}">
      <button type="button" data-fulfillment="pickup" class="${state.fulfillment === "pickup" ? "selected" : ""}" aria-pressed="${state.fulfillment === "pickup"}">${escapeHTML(getCopy("pickup"))}</button>
      <button type="button" data-fulfillment="delivery" class="${state.fulfillment === "delivery" ? "selected" : ""}" aria-pressed="${state.fulfillment === "delivery"}">${escapeHTML(getCopy("delivery"))}</button>
    </div>
    ${isEmpty
      ? `<div class="cart-empty">
          <span class="empty-illustration" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1.2 12H6.2L5 8Zm4 0V6a3 3 0 0 1 6 0v2" /></svg></span>
          <strong>${escapeHTML(getCopy("emptyTitle"))}</strong><p>${escapeHTML(getCopy("emptyText"))}</p>
        </div>`
      : `<div class="cart-lines">${cartLinesMarkup()}</div>
        <div class="totals">
          <div class="total-row"><span>${escapeHTML(getCopy("subtotal"))}</span><strong>${escapeHTML(formatMoney(subtotal))}</strong></div>
          ${state.fulfillment === "delivery" ? `<div class="total-row"><span>${escapeHTML(getCopy("deliveryFee"))}</span><strong>${deliveryFee ? escapeHTML(formatMoney(deliveryFee)) : escapeHTML(getCopy("free"))}</strong></div>` : ""}
          <div class="total-row grand"><span>${escapeHTML(getCopy("total"))}</span><strong>${escapeHTML(formatMoney(subtotal + deliveryFee))}</strong></div>
          <button class="checkout-demo" type="button" data-demo-checkout>
            <span>${escapeHTML(getCopy("continueCheckout"))}</span>
            <span>${escapeHTML(formatMoney(subtotal + deliveryFee))}</span>
          </button>
        </div>`}
    <p class="prototype-footnote">${escapeHTML(getCopy("noOrders"))}</p>`;
}

function renderCart() {
  $("#desktopCart").innerHTML = cartMarkup();
  $("#headerCartCount").textContent = String(cartCount());
  const mobileBar = $("#mobileCartBar");
  mobileBar.hidden = cartCount() === 0;
  mobileBar.setAttribute("aria-expanded", String(state.cartOpen));
  $(".mobile-cart-count").textContent = String(cartCount());
  $(".mobile-cart-total").textContent = formatMoney(
    cartSubtotal() + (state.fulfillment === "delivery" && cartCount() > 0 ? 12 : 0),
  );
  renderCartDrawer();
}

function renderCartDrawer() {
  const root = $("#cartDrawerRoot");
  if (!state.cartOpen) {
    root.innerHTML = "";
    return;
  }
  root.innerHTML = `
    <div class="cart-drawer" data-close-cart>
      <aside class="cart-drawer-inner" role="dialog" aria-modal="true" aria-labelledby="drawerTitle" tabindex="-1">
        <div class="drawer-heading">
          <h2 id="drawerTitle">${escapeHTML(getCopy("yourOrder"))}</h2>
          <button type="button" data-close-cart aria-label="${escapeHTML(getCopy("closeOrder"))}">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" /></svg>
          </button>
        </div>
        <div class="drawer-content">${cartMarkup()}</div>
      </aside>
    </div>`;
  document.body.classList.add("overlay-open");
}

function openCart() {
  closeDish();
  state.previousFocus = document.activeElement;
  state.cartOpen = true;
  renderCartDrawer();
  requestAnimationFrame(() => $("[role='dialog'] .drawer-heading button", $("#cartDrawerRoot"))?.focus());
}

function closeCart() {
  if (!state.cartOpen) return;
  state.cartOpen = false;
  $("#cartDrawerRoot").innerHTML = "";
  document.body.classList.remove("overlay-open");
  state.previousFocus?.focus?.();
}

function changeCartLine(key, delta) {
  const line = state.cart.find((item) => item.key === key);
  if (!line) return;
  line.quantity += delta;
  if (line.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.key !== key);
  }
  renderCart();
}

function toast(message, className = "") {
  const zone = $("#toastZone");
  zone.innerHTML = "";
  const element = document.createElement("div");
  element.className = `demo-toast${className ? ` ${className}` : ""}`;
  element.textContent = message;
  zone.append(element);
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => element.remove(), 2600);
}

async function shareMenu() {
  const shareData = {
    title: localize({ ar: "قائمة دار يارا", en: "Dar Yara menu" }),
    text: localize({
      ar: "تصفّح قائمة دار يارا — أطباق من البيت عبر رستيفو.",
      en: "Browse Dar Yara’s menu, made for good table moments.",
    }),
    url: window.location.href,
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(shareData.url);
    toast(getCopy("linkCopied"), "share-toast");
  } catch (error) {
    if (error?.name !== "AbortError") toast(getCopy("shareError"));
  }
}

function setLanguage(language) {
  if (language === state.language) return;
  state.language = language;
  updateStaticCopy();
  renderMenu();
  renderCart();
  if (state.modalDishId) renderModal();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    if (event.target.matches("[data-close-modal]")) closeDish();
    if (event.target.matches("[data-close-cart]")) closeCart();
    return;
  }

  if (button.id === "languageButton") {
    setLanguage(state.language === "ar" ? "en" : "ar");
    return;
  }
  if (button.id === "shareButton") {
    shareMenu();
    return;
  }
  if (button.id === "openCartButton" || button.id === "mobileCartBar") {
    openCart();
    return;
  }
  if (button.dataset.category) {
    state.category = button.dataset.category;
    renderMenu();
    return;
  }
  if (button.dataset.openDish) {
    openDish(button.dataset.openDish, button);
    return;
  }
  if (button.dataset.quickAdd) {
    const dish = getDish(button.dataset.quickAdd);
    if (!dish) return;
    if (dish.options.length) {
      openDish(dish.id, button);
    } else {
      addDishToCart(dish.id);
    }
    return;
  }
  if (button.hasAttribute("data-close-modal")) {
    closeDish();
    return;
  }
  if (button.hasAttribute("data-close-cart")) {
    closeCart();
    return;
  }
  if (button.dataset.fulfillment) {
    state.fulfillment = button.dataset.fulfillment;
    renderCart();
    return;
  }
  if (button.dataset.cartDelta) {
    changeCartLine(button.dataset.line, Number(button.dataset.cartDelta));
    return;
  }
  if (button.dataset.removeLine) {
    state.cart = state.cart.filter((line) => line.key !== button.dataset.removeLine);
    renderCart();
    return;
  }
  if (button.dataset.modalQuantity) {
    state.modalQuantity = Math.max(1, state.modalQuantity + Number(button.dataset.modalQuantity));
    $("#modalQuantity").textContent = String(state.modalQuantity);
    updateModalSummary();
    return;
  }
  if (button.hasAttribute("data-add-modal")) {
    const dish = getDish(state.modalDishId);
    if (!dish || !getModalValidity(dish)) return;
    addDishToCart(dish.id, state.modalSelections, state.modalQuantity);
    closeDish();
    return;
  }
  if (button.hasAttribute("data-demo-checkout")) {
    toast(getCopy("checkoutDemo"));
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id !== "menuSearch") return;
  state.query = event.target.value;
  renderMenu();
});

document.addEventListener("change", (event) => {
  const input = event.target.closest("[data-option-choice]");
  if (!input || !state.modalDishId) return;
  const { group, choice } = input.dataset;
  const dish = getDish(state.modalDishId);
  const groupData = dish?.options.find((item) => item.id === group);
  if (!groupData) return;
  if (groupData.required) {
    state.modalSelections[group] = input.checked ? [choice] : [];
  } else {
    const current = state.modalSelections[group] || [];
    state.modalSelections[group] = input.checked
      ? [...current, choice]
      : current.filter((item) => item !== choice);
  }
  updateModalSummary();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDish();
    closeCart();
  }

  const dialog = $("#modalRoot [role='dialog'], #cartDrawerRoot [role='dialog']");
  if (event.key !== "Tab" || !dialog) return;
  const focusable = $$("button:not(:disabled), input:not(:disabled), [tabindex='0']", dialog)
    .filter((element) => element.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

document.addEventListener("error", (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset.fallback === "true") return;
  if (!image.matches(".dish-photo img, .modal-image img")) return;
  image.dataset.fallback = "true";
  image.src = "./images/restivo-food-table.jpg";
}, true);

const initialHeroImage = $(".hero-art img");
initialHeroImage.addEventListener("error", () => {
  initialHeroImage.src = "./images/restivo-food-table.jpg";
  initialHeroImage.dataset.fallback = "true";
}, { once: true });

updateStaticCopy();
renderMenu();
renderCart();