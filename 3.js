// script.js
document.addEventListener("DOMContentLoaded", function () {
  const recipeCards = document.querySelectorAll(".recipe-card");

  const observerOptions = {
    root: null, // ใช้ viewport เป็น root
    rootMargin: "0px",
    threshold: 0.1, // เมื่อ 10% ของ element ปรากฏใน viewport
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // หยุด observe เมื่อปรากฏแล้ว
      }
    });
  }, observerOptions);

  recipeCards.forEach((card) => {
    card.classList.add("fade-in-card"); // เพิ่ม class สำหรับ initial state (ซ่อน)
    observer.observe(card);
  });
});
