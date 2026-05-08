/**
 * layout.js — inyecta navbar, cart panel y footer en todas las páginas
 */

(function () {

  // ── NAVBAR ──
  const navHTML = `
    <nav class="navbar">
      <a href="index.html" class="nav-logo" style="display:flex;align-items:center;gap:8px;color:inherit">
        <img src="LogoNegro.PNG" alt="Comercial Ventura Reyes" class="logo-claro" style="height:42px;width:auto;object-fit:contain;">
        <img src="LogoBlancoo.PNG" alt="Comercial Ventura Reyes" class="logo-oscuro" style="height:42px;width:auto;object-fit:contain;">
        <span style="font-size:0.9rem;font-weight:800;line-height:1.1;color:var(--text)">COMERCIAL<br><span style="color:#F5820A">VENTURA REYES</span></span>
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html"      class="nav-link">Inicio</a></li>
        <li><a href="productos.html"  class="nav-link">Productos</a></li>
        <li><a href="categorias.html" class="nav-link">Categorías</a></li>
        <li><a href="checkout.html"   class="nav-link">Checkout</a></li>
        <li><a href="contacto.html"   class="nav-link">Contacto</a></li>
        <li><a href="ubicacion.html"  class="nav-link">Ubicación</a></li>
      </ul>
      <div class="nav-actions">
        <button class="dark-toggle" title="Modo oscuro">🌙</button>
        <button class="hamburger" id="hamburger" aria-label="Menú">☰</button>
        <button id="cart-fab-nav" class="cart-btn-nav" aria-label="Carrito">
          🛒 <span class="cart-badge" style="display:none">0</span>
        </button>
      </div>
    </nav>`;

  // ── CART PANEL ──
  const cartHTML = `
    <div id="cart-overlay"></div>
    <aside id="cart-panel" role="dialog" aria-label="Carrito de compras">
      <div class="cart-header">
        <h3>🛒 Mi Carrito</h3>
        <button id="cart-close" aria-label="Cerrar">✕</button>
      </div>
      <div class="cart-body"></div>
      <div class="cart-footer"></div>
    </aside>
    <button id="cart-fab" aria-label="Abrir carrito">
      🛒 <span class="cart-badge" style="display:none">0</span>
    </button>`;

  // ── FOOTER ──
  const footerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo" style="display:flex;align-items:center;gap:8px;color:inherit;margin-bottom:14px;">
            <img src="LogoNegro.PNG" alt="Comercial Ventura Reyes" class="logo-claro" style="height:42px;width:auto;object-fit:contain;">
            <img src="LogoBlancoo.PNG" alt="Comercial Ventura Reyes" class="logo-oscuro" style="height:42px;width:auto;object-fit:contain;">
            <span style="font-size:0.85rem;font-weight:800;line-height:1.1;color:var(--text)">COMERCIAL<br><span style="color:#F5820A">VENTURA REYES</span></span>
          </a>
          <p>Tu tienda de confianza. Los mejores productos al mejor precio.</p>
        </div>
        <div class="footer-col">
          <h4>Tienda</h4>
          <a href="productos.html">Todos los productos</a>
          <a href="categorias.html">Categorías</a>
          <a href="checkout.html">Mi carrito</a>
        </div>
        <div class="footer-col">
          <h4>Ayuda</h4>
          <a href="contacto.html">Contacto</a>
          <a href="ubicacion.html">Ubicación</a>
          <a href="https://wa.me/50375699371?text=Hola,%20quiero%20información%20sobre%20garantías" target="_blank">Garantía</a>
        </div>
        <div class="footer-col">
          <h4>Redes</h4>
          <a href="https://www.instagram.com/p/DVrAV7WDfPH/" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/ComercialVenturaReyes/" target="_blank">Facebook</a>
          <a href="https://wa.me/50375699371" target="_blank">WhatsApp</a>
          <a href="https://www.tiktok.com/@comercial.venturareyes?is_from_webapp=1&sender_device=pc" target="_blank">TikTok</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Comercial Ventura Reyes. Todos los derechos reservados.</span>
        <span>Hecho con ❤️ para vos</span>
      </div>
    </footer>`;

  // ── INJECT ──
  document.body.insertAdjacentHTML("afterbegin", navHTML + cartHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Hamburger toggle
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("mobile-open");
  });

  // Nav cart button opens panel
  document.getElementById("cart-fab-nav").addEventListener("click", toggleCartPanel);
})();
