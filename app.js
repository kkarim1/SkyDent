const gallery = [
  { src: "assets/gallery-root.jpg", title: "حشو وحشو عصب" },
  { src: "assets/gallery-ortho.jpg", title: "تقويم الأسنان" },
  { src: "assets/gallery-pain.jpg", title: "العصب وجع أعصابك" },
  { src: "assets/gallery-implant.jpg", title: "اللي راح يجي مكانه" },
  { src: "assets/gallery-offer.jpg", title: "الكشف والأشعة مجانا" }
];

const branches = [
  {
    name: "محرم بك",
    address: "40 شارع قناة السويس - برج القصر.",
    phones: ["(03) 3951511", "(03) 3951512", "01221107333"],
    mobile: "01221107333"
  },
  {
    name: "العجمي",
    address: "طريق إسكندرية مطروح - أمام مسجد الدرايسة.",
    phones: ["(03) 4380037", "(03) 4380047", "01221106333"],
    mobile: "01221106333"
  },
  {
    name: "العجمي - أبو يوسف",
    address: "أمام مسجد الصابرين - بجوار فتح الله - أعلى سنتر مظلوم.",
    phones: ["(03) 4329110", "(03) 4356172", "01118348884"],
    mobile: "01118348884"
  },
  {
    name: "سيدي بشر",
    address: "55 تقاطع شارع البكباشي العيسوي مع شارع مسجد سيدي بشر - أمام شركة الكهرباء.",
    phones: ["(03) 5539714", "(03) 5539715", "(03) 5539717", "01279792976"],
    mobile: "01279792976"
  },
  {
    name: "سموحة",
    address: "5 شارع محمود شاكر - أعلى كلاسيك.",
    phones: ["(03) 4200576", "(03) 4200575", "01103492212"],
    mobile: "01103492212"
  },
  {
    name: "محطة الرمل",
    address: "7 ميدان سعد زغلول.",
    phones: ["(03) 4866623", "(03) 4833319", "01103830113"],
    mobile: "01103830113"
  },
  {
    name: "الإبراهيمية",
    address: "51 طريق الجيش - على البحر مباشرة - أمام إشارة الإبراهيمية.",
    phones: ["(03) 5938892", "(03) 5938894", "01095956190"],
    mobile: "01095956190"
  }
];

const $ = (selector) => document.querySelector(selector);

function toWhatsapp(number) {
  const digits = number.replace(/\D/g, "");
  const normalized = digits.startsWith("0") ? `20${digits.slice(1)}` : digits;
  return `https://wa.me/${normalized}?text=${encodeURIComponent("أهلا SkyDent، أرغب في حجز موعد.")}`;
}

function renderGallery() {
  $("#galleryGrid").innerHTML = gallery
    .map(
      (item) => `
        <figure class="gallery-item">
          <img src="${item.src}" alt="${item.title}" loading="lazy">
          <span>${item.title}</span>
        </figure>
      `
    )
    .join("");
}

function renderBranches() {
  $("#branchesGrid").innerHTML = branches
    .map(
      (branch) => `
        <article class="branch-card">
          <h3>${branch.name}</h3>
          <p>${branch.address}</p>
          <div class="phones">
            ${branch.phones.map((phone) => `<span class="phone-chip">${phone}</span>`).join("")}
          </div>
          <a class="btn whatsapp-link" href="${toWhatsapp(branch.mobile)}" target="_blank" rel="noopener">
            تواصل واتساب مع فرع ${branch.name}
          </a>
        </article>
      `
    )
    .join("");

  $("#mainWhatsapp").href = toWhatsapp(branches[0].mobile);
}

$(".menu-toggle").addEventListener("click", (event) => {
  const nav = $("#siteNav");
  const isOpen = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});

$("#siteNav").addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    $("#siteNav").classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
  }
});

renderGallery();
renderBranches();
