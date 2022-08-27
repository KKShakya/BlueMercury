function navbar(){
  return ` <div id="nav_link">
  <!-- locator -->
  <div id="locator">
    <span class="material-symbols-outlined"> location_on </span>store &
    spa locator
  </div>

  <!-- logo of bluemercury -->
  <div class="logo home-link">
    <img
      src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182"
      alt="logo"
    />
  </div>

  <!-- this div contains upper rigth menus-->
  <div class="shop_links wishlist cart">
    <ul style="list-style-type: none">
      <li>
        <span class="material-symbols-outlined"> favorite </span>Wishlist
      </li>
      <li>
        <span class="material-symbols-outlined"> search </span>Search
      </li>
      <li>
        <span class="material-symbols-outlined"> account_circle </span
        >Sign in/up
      </li>
      <li>
      <a href="./Cart.html">
        <span class="material-symbols-outlined"> shopping_bag </span>bag
        </a>
      </li>
    </ul>
  </div>
</div>

<!-- bottom menu cards -->
<div id="menu">
  <ul style="list-style-type: none">
    <li>
      <a href="#">Shop</a>
    </li>
    <li><a href="./New_arrivel.html">New!</a></li>
    <li><a href="#">brands</a></li>
    <li><a href="#">explore</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">blue rewards</a></li>
    <li><a href="#">routine reboot</a></li>
  </ul>
</div>`
}

export {navbar};