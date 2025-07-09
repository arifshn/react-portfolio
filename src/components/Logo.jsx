import React from "react";
// NavLink artık bu bileşende kullanılmayacak, bu yüzden import'u kaldırıldı.
// "animate.css" import'u da bu bileşenin doğrudan sorumluluğunda olmadığı için kaldırıldı.

/**
 * Logo bileşeni, sitenin logosunu (bir Font Awesome ikonu) render eder.
 * Bu bileşen, kendi içinde bir link (<a> etiketi) içermez.
 * Link işlevselliği, bu Logo bileşenini kullanan üst bileşen tarafından sağlanmalıdır.
 */
export default function Logo() {
  return (
    // Doğrudan bir <a> etiketi yerine, sadece ikonu içeren bir span veya div döndürüyoruz.
    // Navbar'daki NavLink bu ikonu sarmalayacak.
    <span className="logo-text animate__animated animate__fadeInLeft">
      <i className="fa-solid fa-code me-2"></i>{" "}
      {/* me-2 Bootstrap sınıfı, ikonun sağında boşluk bırakır */}
    </span>
  );
}
