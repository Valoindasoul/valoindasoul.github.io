const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("light-img");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".item img");

/* 大图预览 */
images.forEach(img => {
  img.onclick = () => {
    lightImg.src = img.src;
    lightbox.style.display = "flex";
  };
});
closeBtn.onclick = () => lightbox.style.display = "none";
lightbox.onclick = (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
};

/* 分类筛选 */
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

filterBtns.forEach(btn => {
  btn.onclick = () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    items.forEach(item => {
      const match = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hide", !match);
    });
  };
});
