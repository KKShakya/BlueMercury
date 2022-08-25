function navbar(){
  return `<div id="nav_link">
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
        <span class="material-symbols-outlined"> shopping_bag </span>bag
      </li>
    </ul>
  </div>
</div>

<!-- bottom menu cards -->
<div id="menu">
  <ul style="list-style-type: none">
    <li>
      <a href="#">Shop</a>

      <div class="shop-container hover-effect vis-hid">
        <div class="shop-item wd-50 mg-auto">
          <div class="left-part">
            <ul class="ul-styling" style="list-style-type: none">
              <li>
                <a href="#">Skin care</a> <i class="right-arrow">></i>
              </li>
              <li><a href="#">Makeup</a> <i class="right-arrow">></i></li>
              <li><a href="#">hair</a> <i class="right-arrow">></i></li>
              <li>
                <a href="#">bath & body</a> <i class="right-arrow">></i>
              </li>
              <li>
                <a href="#">fragrance</a> <i class="right-arrow">></i>
              </li>
              <li>
                <a href="#">tools & accessories</a>
                <i class="right-arrow">></i>
              </li>
              <li>
                <a href="#">Home & lifestyle</a>
                <i class="right-arrow">></i>
              </li>
              <li>
                <a href="#">Sun care</a> <i class="right-arrow">></i>
              </li>
              <li><a href="#">Men</a> <i class="right-arrow">></i></li>
              <li><a href="#">Gifts</a> <i class="right-arrow">></i></li>
              <li>
                <a href="#">best Sellers</a> <i class="right-arrow">></i>
              </li>
              <li>
                <a href="#">wellness</a> <i class="right-arrow">></i>
              </li>
              <li>
                <a href="#">Free gifts!</a> <i class="right-arrow">></i>
              </li>
            </ul>
          </div>

          <!-- right part of the border -->
          <div class="right-part">
            <!-- first  list -->
            <ul
              class="first-list ul-styling"
              style="list-style-type: none"
            >
              <li><a href="#" style="color: #12284c">BY CATEGORY</a></li>
              <li><a href="#">Shop All</a></li>
              <li><a href="#">Cleansers</a></li>
              <li><a href="#">Exfoliators & Peels</a></li>
              <li><a href="#">Eye Care</a></li>
              <li><a href="#">Lip Care</a></li>
              <li><a href="#">Masks</a></li>
              <li><a href="#">Moisturizers</a></li>
              <li><a href="#">Sun Care</a></li>
              <li><a href="#">Tools & Devices</a></li>
              <li><a href="#">Treatments & Serums</a></li>
              <li><a href="#">Vitamins & Supplements</a></li>
              <li><a href="#">Value & Gift Sets</a></li>
            </ul>

            <!-- second list -->
            <ul
              class="second-list ul-styling"
              style="list-style-type: none"
            >
              <li><a href="#" style="color: #12284c">BY BRAND</a></li>
              <li><a href="#">111Skin</a></li>
              <li><a href="#">Augutinus Bader</a></li>
              <li><a href="#">BalmLabs</a></li>
              <li><a href="#">Dr.Barbara Sturm</a></li>
              <li><a href="#">Elta MD</a></li>
              <li><a href="#">IS Clinical</a></li>
              <li><a href="#">Kiehl's</a></li>
              <li><a href="#">La Mer</a></li>
              <li><a href="#">M-61</a></li>
              <li><a href="#">OSEA</a></li>
              <li><a href="#">Revive</a></li>
              <li><a href="#">Skin Ceuticals</a></li>
            </ul>
            <!-- image -->
            <div id="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/powerglow_peel_trial_1_303x303.jpg?v=1659552611"
                alt="top rated product"
              />
              <h4>M-61 PowerGlow® Peel</h4>
              <p>Try 1-minute, 1-step exfoliating glow peel</p>
            </div>
          </div>
        </div>
      </div>
    </li>

    <!-- Tabs under New!  -->
    <li>
      <a href="./New_arrivel.html">New!</a>
      <div class="new-container shop-container">
        <div class="shop-item wd-50 mg-auto">
          <ul class="new-list ul-styling" style="list-style-type: none">
            <li><a href="#" style="color: #12284c">BY CATEGORY</a></li>
            <li><a href="#">Shop All</a></li>
            <li><a href="#">Make up</a></li>
            <li><a href="#">Hair</a></li>
            <li><a href="#">Bath & Body</a></li>
            <li><a href="#">Fragrance</a></li>
            <li><a href="#">Tools & Accessories</a></li>
            <li><a href="#">Wellness</a></li>
            <li><a href="#">Gifts</a></li>
            <li><a href="#">Wedding Essentials</a></li>
          </ul>
          <!-- image -->
          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_navigation_303x303.jpg?v=1659549528"
              alt="top rated product"
            />
            <h4>New Brand Alert:ZitSticka</h4>
            <p>Treat and prevent all types of breakouts</p>
          </div>

          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/summer_spectacular_navigation_303x303.jpg?v=1658775534"
              alt="top rated product"
            />
            <h4>The Summer Beauty Spectacular</h4>
            <p>$780+ worth of must have less than $400!</p>
          </div>
        </div>
      </div>
    </li>

    <!-- Tabs under Brand -->
    <li>
      <a href="#">brands</a>
      <div class="new-container shop-container">
        <div class="shop-item wd-50 mg-auto">
            
          <ul
              class="new-list ul-styling"
              style="list-style-type: none"
            >
              <li><a href="#" style="color: #12284c">BEST SELLERS</a></li>
              <li><a href="#">Augutinus Bader</a></li>
              <li><a href="#">Chantecaille</a></li>
              <li><a href="#">diptyque</a></li>
              <li><a href="#">Dr.Barbara Sturm</a></li>
              <li><a href="#">Dyson</a></li>
              <li><a href="#">La Mer</a></li>
              <li><a href="#">Lune + Aster</a></li>
              <li><a href="#">M-61</a></li>
              <li><a href="#">NARS</a></li>
              <li><a href="#">Olaplex</a></li>
              <li><a href="#">Oribe</a></li>
              <li><a href="#">SkinCeuticals</a></li>
              <li><a href="#">Tom Ford</a></li>
              <li><a href="#">Trish McEvoy</a></li>
              <li><a href="#">VIRTUE</a></li>
            </ul>

            <ul
            class="new-list ul-styling"
            style="list-style-type: none"
          >
            <li><a href="#" style="color: #12284c">#NEWATBLUE</a></li>
            <li><a href="#">BalmLabs</a></li>
            <li><a href="#">Boculeme</a></li>
            <li><a href="#">Elta MD</a></li>
            <li><a href="#">Holy Curls</a></li>
            <li><a href="#">L'AVANT</a></li>
            <li><a href="#">Lake & Skye</a></li>
            <li><a href="#">PCA Skin</a></li>
            <li><a href="#">Sana Jardin</a></li>
            <li><a href="#">Sisley-Paris</a></li>
            <li><a href="#">Solawave</a></li>
            <li><a href="#">Sunday || Sunday</a></li>
            <li><a href="#">The Maker</a></li>
            <li><a href="#">Wardis</a></li>
            <li><a href="#">ZitSticka</a></li>
            <li><a href="#"></a></li>
          </ul>

          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_md_nav_303x303.jpg?v=1656446190"
              alt="top rated product"
            />
            <h4>New to Bluemercury: EltaMD</h4>
            <p>Shop the cult-favourite sunscreen brand</p>
          </div>


        </div>
      </div>
    </li>

    <!-- Tabs under Explore b -->
    <li><a href="#">explore</a>
      <div class="new-container shop-container">
        <div class="shop-item wd-50 mg-auto">
          <ul class="new-list ul-styling" style="list-style-type: none">
            <li><a href="#" style="color: #12284c">FEATURED</a></li>
            <li><a href="#">Beauty Alfresco</a></li>
            <li><a href="#">Wedding Essentials</a></li>
            <li><a href="#">#ShowUsYourBag</a></li>
            <li><a href="#">The Founders Series</a></li>
            <li><a href="#">Blue Notes</a></li>
            <li><a href="#">Buying Guides</a></li>
            <li><a href="#">Conscious Beauty</a></li>
            <li><a href="#">MORE</a></li>

          </ul>
          <!-- image -->
          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Wedding_Season_1x1_Blue_Mercury_2208_Alford_7031_303x303.jpg?v=1660140149"
              alt="top rated product"
            />
            <h4>Wedding Season Essentials</h4>
            <p>Must-have products for the bridal party and guests!</p>
          </div>

          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615"
              alt="top rated product" onclick="routine_Reboot_page()"
            />
            <h4>Routine Reboot</h4>
            <p>Explore all beauty routines</p>
          </div>
        </div>
        </div>
    </li>

    <!-- tabs under Events -->
    <li><a href="#">Events</a>
      <div class="new-container shop-container">
        <div class="shop-item wd-50 mg-auto">

          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury_303x303_8b06250d-4cc8-431d-8217-688769352c79_303x303.webp?v=1659551087"
              alt="top rated product"
            />
            <h4>Bluemercury Presents: #MasterclassBluemercury Presents: #Masterclass</h4>
            <p>Join us for live virtual shopping events!</p>
          </div>


          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_303x303.jpg?v=1657733426"
              alt="top rated product"
            />
            <h4>Complimentary Consultations!</h4>
            <p>Book your one-on-one appointment at your local store</p>
          </div>
          </div>
          </div>
    </li>

    <!-- tabs under blue Rewards -->
    <li><a href="#">blue rewards</a>
      <div class="new-container shop-container">
        <div class="shop-item wd-50 mg-auto">
          <ul
            class="new-list ul-styling"
            style="list-style-type: none"
          >
            <li><a href="#" style="color: #12284c">MY ACCOUNT</a></li>
            <li><a href="#">Account Overview</a></li>
            <li><a href="#">My Purchases</a></li>
            <li><a href="#">My BlueRewards</a></li>
            <li><a href="#">My Wishlist</a></li>
            <li><a href="#">Details + Preferences</a></li>
           
          </ul>

          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluerewards_2_303x303.jpg?v=1635345372"
              alt="top rated product"
            />
            <h4>Earn $10 for every $250 </h4>
            <p>Free to Join! Learn More ></p>
          </div>
         
        </div>
          </div>
    </li>


    <!-- Tabs under routine reboot -->
    <li><a href="#">routine reboot</a>
      <div class="new-container shop-container">
        <div class="shop-item wd-50 mg-auto">
          
          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615"
              alt="top rated product" onclick="routine_Reboot_page()"
            />
            <h4>Shop All Routines </h4>
            
          </div>
         
         
          <div id="image-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/extend_your_summer_glow_2_303x303.jpg?v=1659102162"
              alt="top rated product"
            />
            <h4>The "Extend Your Summer Glow" Routine </h4>
            <p>Ward off dullness and boost your glow from head to toe</p>
          </div>
         

          
          <ul
            class="new-list ul-styling"
            style="list-style-type: none"
          >
            <li><a href="#" style="color: #12284c">BY ROUTINE</a></li>
            <li><a href="#">Shop All</a></li>
            <li><a href="#">Back to School</a></li>
            <li><a href="#">Extend Your Summer Glow</a></li>
            <li><a href="#">Get Rid of Summer Sun Damage</a></li>
            <li><a href="#">Hydration Head-to-Toe</a></li>
            <li><a href="#">#IWokeUpLikeThis</a></li>
            <li><a href="#">Out the Door in Five</a></li>
           
          </ul>

         
        </div>
          </div>
    </li>

    
  </ul>
</div>`
}

export {navbar};