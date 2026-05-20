// AeroGlide Paragliding & Hang Gliding - Fully Responsive Navbar
(function () {
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    navbar.innerHTML = `
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 md:h-24">

        <a href="index.html" class="flex items-center gap-3 group shrink-0 relative z-[100]">
          <div class="relative flex items-center justify-center w-10 h-10 bg-[#3A86FF] rounded-xl transform transition-transform duration-300 shadow-[0_0_15px_rgba(58,134,255,0.4)]">
            <i class="fas fa-wind text-white text-xl transition-transform duration-300"></i>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold tracking-tighter uppercase text-black dark:text-white">
              AERO<span class="text-[#3A86FF]">GLIDE</span>
            </span>
            <span class="text-[9px] tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 font-bold leading-none mt-1">Tandem Flights</span>
          </div>
        </a>

        <div id="desktopNav" class="nav hidden xl:flex flex-1 justify-center items-center space-x-1 font-semibold text-[14px]">
          
          <div class="relative group/home">
            <button id="homeBtn" class="nav-link flex items-center space-x-1 px-4 py-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
              <span>Home</span>
              <i class="fas fa-chevron-down text-[10px] transition-transform duration-300 group-hover/home:rotate-180 text-[#3A86FF]"></i>
            </button>
            <div id="homeMenu" class="hidden absolute left-0 mt-3 w-48 bg-white dark:bg-[#0a0a0a] rounded-xl shadow-2xl py-3 z-50 border border-gray-100 dark:border-gray-800 transform origin-top-left transition-all">
              <a href="index.html" class="dropdown-link flex items-center gap-3 px-5 py-2.5 text-sm text-black dark:text-gray-200 hover:bg-[#3A86FF]/10 hover:text-[#3A86FF] transition-colors">Home 1</a>
              <a href="home2.html" class="dropdown-link flex items-center gap-3 px-5 py-2.5 text-sm text-black dark:text-gray-200 hover:bg-[#3A86FF]/10 hover:text-[#3A86FF] transition-colors">Home 2</a>
            </div>
          </div>

          <a href="about.html" class="nav-link px-4 py-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">About</a>
          <a href="blog.html" class="nav-link px-4 py-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">Blog</a>
          <a href="flights.html" class="nav-link px-4 py-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">Flights</a>
          <a href="packages.html" class="nav-link px-4 py-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">Packages</a>
          <a href="gallery.html" class="nav-link px-4 py-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">Gallery</a>
          <a href="contact.html" class="nav-link px-4 py-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">Contact</a>
          
          <div class="relative group/dash">
            <button id="dashboardBtn" class="nav-link flex items-center space-x-1 px-4 py-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
              <span>Dashboard</span>
              <i class="fas fa-chevron-down text-[10px] transition-transform duration-300 group-hover/dash:rotate-180 text-[#3A86FF]"></i>
            </button>
            <div id="dashboardMenu" class="hidden absolute left-0 mt-3 w-56 bg-white dark:bg-[#0a0a0a] rounded-xl shadow-2xl py-3 z-50 border border-gray-100 dark:border-gray-800 transform origin-top-left transition-all">
              <a href="user.html" class="dropdown-link flex items-center gap-3 px-5 py-2.5 text-sm text-black dark:text-gray-200 hover:bg-[#3A86FF]/10 hover:text-[#3A86FF] transition-colors">User</a>
              <a href="admin.html" class="dropdown-link flex items-center gap-3 px-5 py-2.5 text-sm text-black dark:text-gray-200 hover:bg-[#3A86FF]/10 hover:text-[#3A86FF] transition-colors">Admin</a>
            </div>
          </div>
        </div>

        <div class="hidden xl:flex items-center gap-5 shrink-0">
          <div class="flex items-center gap-3">
            <button id="rtlToggle" class="w-9 h-9 flex items-center justify-center rounded-[10px] bg-[#3A86FF] text-[10px] font-black text-white hover:bg-[#2a6fd9] transition-all duration-300 shadow-[0_4px_12px_rgba(58,134,255,0.3)] hover:shadow-[0_4px_16px_rgba(58,134,255,0.5)]">RTL</button>
            <button id="darkToggle" class="w-9 h-9 flex items-center justify-center rounded-[10px] bg-[#3A86FF] text-white hover:bg-[#2a6fd9] transition-all duration-300 shadow-[0_4px_12px_rgba(58,134,255,0.3)] hover:shadow-[0_4px_16px_rgba(58,134,255,0.5)]">
              <i id="darkIcon" class="fas fa-moon pointer-events-none"></i>
            </button>
          </div>

          <div class="flex items-center gap-4 border-l border-gray-200 dark:border-gray-800 pl-5">
             
              <a href="login.html" class="relative px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold text-[13px] uppercase tracking-wider overflow-hidden group shadow-md hover:shadow-[0_0_20px_rgba(58,134,255,0.4)] transition-all duration-300 hover:-translate-y-0.5">
                  <span class="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">Log In</span>
                  <div class="absolute inset-0 bg-[#3A86FF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              </a>
                <a href="signup.html" class="relative px-6 py-2.5 bg-[#3A86FF] text-white rounded-lg font-bold text-[13px] uppercase tracking-wider overflow-hidden group shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-0.5">
                  <span class="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">Sign Up</span>
                  <div class="absolute inset-0 bg-black dark:bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              </a>
          </div>
        </div>

        <div class="xl:hidden flex items-center h-full relative z-[100]">
          <button id="mobileBtn" class="w-12 h-12 flex items-center justify-center text-[#3A86FF] focus:outline-none rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
            <i id="mobileIcon" class="fas fa-bars text-2xl pointer-events-none"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <div id="mobileMenu" class="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black z-40 hidden flex-col pt-24 pb-10 overflow-y-auto">
    <div class="flex flex-col px-6 w-full gap-2">
      
      <div class="w-full border-b border-gray-200 dark:border-gray-800">
        <button id="mobileHomeBtn" class="flex items-center justify-between w-full py-4 text-left">
          <span class="text-[15px] font-bold tracking-tight uppercase text-[#000000] dark:text-[#FFFFFF] mobile-text pointer-events-none transition-colors">Home</span>
          <i id="mobileHomeIcon" class="fas fa-chevron-down text-lg transition-transform duration-300 text-[#3A86FF] pointer-events-none"></i>
        </button>
        <div id="mobileHomeMenu" class="hidden flex-col gap-2 pl-4 pb-4 border-l-2 border-[#3A86FF] ml-2">
          <a href="index.html" class="mobile-sublink block w-full text-sm font-bold py-2 text-gray-600 dark:text-gray-400 hover:text-[#3A86FF]">Home 1</a>
          <a href="home2.html" class="mobile-sublink block w-full text-sm font-bold py-2 text-gray-600 dark:text-gray-400 hover:text-[#3A86FF]">Home 2</a>
        </div>
      </div>

      <a href="about.html" class="mobile-link block w-full py-4 border-b border-gray-200 dark:border-gray-800 text-[15px] font-bold tracking-tight uppercase text-[#000000] dark:text-[#FFFFFF] hover:text-[#3A86FF] transition-colors">About</a>
      <a href="blog.html" class="mobile-link block w-full py-4 border-b border-gray-200 dark:border-gray-800 text-[15px] font-bold tracking-tight uppercase text-[#000000] dark:text-[#FFFFFF] hover:text-[#3A86FF] transition-colors">Blog</a>
      <a href="flights.html" class="mobile-link block w-full py-4 border-b border-gray-200 dark:border-gray-800 text-[15px] font-bold tracking-tight uppercase text-[#000000] dark:text-[#FFFFFF] hover:text-[#3A86FF] transition-colors">Flights</a>
      <a href="packages.html" class="mobile-link block w-full py-4 border-b border-gray-200 dark:border-gray-800 text-[15px] font-bold tracking-tight uppercase text-[#000000] dark:text-[#FFFFFF] hover:text-[#3A86FF] transition-colors">Packages</a>
      <a href="gallery.html" class="mobile-link block w-full py-4 border-b border-gray-200 dark:border-gray-800 text-[15px] font-bold tracking-tight uppercase text-[#000000] dark:text-[#FFFFFF] hover:text-[#3A86FF] transition-colors">Gallery</a>
      <a href="contact.html" class="mobile-link block w-full py-4 border-b border-gray-200 dark:border-gray-800 text-[15px] font-bold tracking-tight uppercase text-[#000000] dark:text-[#FFFFFF] hover:text-[#3A86FF] transition-colors">Contact</a>
      
      <div class="w-full border-b border-gray-200 dark:border-gray-800">
        <button id="mobileDashboardBtn" class="flex items-center justify-between w-full py-4 text-left">
          <span class="text-[15px] font-bold tracking-tight uppercase text-[#000000] dark:text-[#FFFFFF] mobile-text pointer-events-none transition-colors">Dashboard</span>
          <i id="mobileDashboardIcon" class="fas fa-chevron-down text-lg transition-transform duration-300 text-[#3A86FF] pointer-events-none"></i>
        </button>
        <div id="mobileDashboardMenu" class="hidden flex-col gap-2 pl-4 pb-4 border-l-2 border-[#3A86FF] ml-2">
          <a href="user.html" class="mobile-sublink block w-full text-sm font-bold py-2 text-gray-600 dark:text-gray-400 hover:text-[#3A86FF]">User</a>
          <a href="admin.html" class="mobile-sublink block w-full text-sm font-bold py-2 text-gray-600 dark:text-gray-400 hover:text-[#3A86FF]">Admin</a>
        </div>
      </div>

    </div>

    <div class="flex flex-col px-6 mt-8 gap-4 mb-10">
      <div class="flex items-center gap-3">
        <button id="mobileRtlToggle" class="flex-1 flex items-center justify-center gap-2 bg-[#3A86FF] p-4 rounded-xl font-bold text-white hover:bg-[#2a6fd9] transition-all shadow-[0_4px_12px_rgba(58,134,255,0.3)]">
          <i class="fas fa-language text-xl pointer-events-none"></i> RTL
        </button>
        <button id="mobileDarkToggle" class="flex-1 flex items-center justify-center gap-2 bg-[#3A86FF] p-4 rounded-xl font-bold text-white hover:bg-[#2a6fd9] transition-all shadow-[0_4px_12px_rgba(58,134,255,0.3)]">
          <i id="mobileDarkIcon" class="fas fa-moon text-xl pointer-events-none"></i> Theme
        </button>
      </div>

      <div class="flex flex-col gap-3 mt-2">
         <a href="login.html" class="relative overflow-hidden group w-full py-4 text-center bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold uppercase text-sm tracking-widest shadow-md hover:shadow-[0_0_20px_rgba(58,134,255,0.4)] transition-all">
          <div class="absolute inset-0 bg-[#3A86FF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          <span class="relative z-10 group-hover:text-white transition-colors">Log In</span>
        </a>
        <a href="signup.html" class="relative overflow-hidden group w-full py-4 text-center bg-[#3A86FF] text-white rounded-lg font-bold uppercase text-sm tracking-widest shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
          <div class="absolute inset-0 bg-black dark:bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          <span class="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors">Sign Up</span>
        </a>
      </div>
    </div>
  </div>
  `;

    /* --- CSS STYLES --- */
    const style = document.createElement('style');
    style.textContent = `
      .nav-link { position: relative; }
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: #3A86FF;
        transition: all 0.3s ease;
        transform: translateX(-50%);
        border-radius: 2px;
      }
      .nav-link:hover::after, .nav-link.active::after { width: 40%; }
      
      .nav-link.active { color: #3A86FF !important; }
      .dropdown-link.active { color: #3A86FF !important; background: rgba(58,134,255,0.1); }
      
      /* Explicitly targeting the new mobile layout structure */
      .mobile-link.active, .mobile-sublink.active, .mobile-text.active { 
        color: #3A86FF !important; 
      }
      
      /* Ensures mobile menu renders cleanly when toggled via JS */
      @media (max-width: 1279px) {
        #mobileMenu:not(.hidden) { display: flex; animation: fadeIn 0.3s ease-out forwards; }
      }
        @media (max-width:1280px){
        #desktopNav{
            font-size: 13px;
}}
        }
      
      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
      }
      body.menu-open { overflow: hidden; }

      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #FFFFFF; }
      .dark ::-webkit-scrollbar-track { background: #000000; }
      ::-webkit-scrollbar-thumb { background: #3A86FF; border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover { background: #2a6fd9; }
    `;
    document.head.appendChild(style);

    /* --- INTERACTION & HIGHLIGHT LOGIC --- */
    const homeBtn = document.getElementById("homeBtn");
    const homeMenu = document.getElementById("homeMenu");
    const dashboardBtn = document.getElementById("dashboardBtn");
    const dashboardMenu = document.getElementById("dashboardMenu");

    const mobileBtn = document.getElementById("mobileBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileIcon = document.getElementById("mobileIcon");

    const mobileHomeBtn = document.getElementById("mobileHomeBtn");
    const mobileHomeMenu = document.getElementById("mobileHomeMenu");
    const mobileHomeIcon = document.getElementById("mobileHomeIcon");

    const mobileDashboardBtn = document.getElementById("mobileDashboardBtn");
    const mobileDashboardMenu = document.getElementById("mobileDashboardMenu");
    const mobileDashboardIcon = document.getElementById("mobileDashboardIcon");

    // Highlight Active Path logic
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');

    allNavLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');

        // Auto-open Desktop menus if active
        if (link.closest('#homeMenu')) homeBtn?.classList.add('active');
        if (link.closest('#dashboardMenu')) dashboardBtn?.classList.add('active');

        // Auto-open Mobile menus if active
        if (link.closest('#mobileHomeMenu')) {
          const textSpan = mobileHomeBtn?.querySelector('span');
          if (textSpan) textSpan.classList.add('active');
          mobileHomeMenu?.classList.remove('hidden');
          mobileHomeMenu?.classList.add('flex'); // Explicitly forces flex layout
          if (mobileHomeIcon) mobileHomeIcon.style.transform = "rotate(180deg)";
        }

        if (link.closest('#mobileDashboardMenu')) {
          const textSpan = mobileDashboardBtn?.querySelector('span');
          if (textSpan) textSpan.classList.add('active');
          mobileDashboardMenu?.classList.remove('hidden');
          mobileDashboardMenu?.classList.add('flex'); // Explicitly forces flex layout
          if (mobileDashboardIcon) mobileDashboardIcon.style.transform = "rotate(180deg)";
        }
      }
    });

    // Desktop Dropdown Close Logic
    const closeAllDesktopMenus = () => {
      homeMenu?.classList.add("hidden");
      dashboardMenu?.classList.add("hidden");
    };

    homeBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = homeMenu.classList.contains("hidden");
      closeAllDesktopMenus();
      if (isHidden) homeMenu.classList.remove("hidden");
    });

    dashboardBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = dashboardMenu.classList.contains("hidden");
      closeAllDesktopMenus();
      if (isHidden) dashboardMenu.classList.remove("hidden");
    });

    document.addEventListener("click", closeAllDesktopMenus);

    // Mobile Submenu Logic (Robust layout toggling)
    mobileHomeBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      const isHidden = mobileHomeMenu.classList.contains("hidden");
      if (isHidden) {
        mobileHomeMenu.classList.remove("hidden");
        mobileHomeMenu.classList.add("flex");
        if (mobileHomeIcon) mobileHomeIcon.style.transform = "rotate(180deg)";
      } else {
        mobileHomeMenu.classList.add("hidden");
        mobileHomeMenu.classList.remove("flex");
        if (mobileHomeIcon) mobileHomeIcon.style.transform = "rotate(0deg)";
      }
    });

    mobileDashboardBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      const isHidden = mobileDashboardMenu.classList.contains("hidden");
      if (isHidden) {
        mobileDashboardMenu.classList.remove("hidden");
        mobileDashboardMenu.classList.add("flex");
        if (mobileDashboardIcon) mobileDashboardIcon.style.transform = "rotate(180deg)";
      } else {
        mobileDashboardMenu.classList.add("hidden");
        mobileDashboardMenu.classList.remove("flex");
        if (mobileDashboardIcon) mobileDashboardIcon.style.transform = "rotate(0deg)";
      }
    });

    // Main Mobile Menu Overlay Toggle
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const isHidden = mobileMenu.classList.toggle("hidden");
        document.body.classList.toggle("menu-open");
        if (mobileIcon) {
          mobileIcon.className = isHidden ? "fas fa-bars text-2xl pointer-events-none" : "fas fa-times text-2xl rotate-90 transition-transform pointer-events-none";
        }
      });
    }

    // Theme Logic
    const themeToggles = [document.getElementById("darkToggle"), document.getElementById("mobileDarkToggle")];
    const updateIcons = (isDark) => {
      const iconClass = isDark ? "fas fa-sun" : "fas fa-moon";
      const darkIcon = document.getElementById("darkIcon");
      const mobileDarkIcon = document.getElementById("mobileDarkIcon");
      if (darkIcon) darkIcon.className = iconClass + " pointer-events-none";
      if (mobileDarkIcon) mobileDarkIcon.className = iconClass + " text-xl pointer-events-none";
    };

    themeToggles.forEach(btn => btn?.addEventListener("click", (e) => {
      e.preventDefault();
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("aeroglide-dark", isDark);
      updateIcons(isDark);
    }));

    if (localStorage.getItem("aeroglide-dark") === "true") {
      document.documentElement.classList.add("dark");
      updateIcons(true);
    }

    // RTL Logic
    const rtlToggles = [document.getElementById("rtlToggle"), document.getElementById("mobileRtlToggle")];
    rtlToggles.forEach(btn => btn?.addEventListener("click", (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.dir;
      const isRtl = currentDir === "rtl";
      document.documentElement.dir = isRtl ? "ltr" : "rtl";
      localStorage.setItem("aeroglide-rtl", !isRtl);
    }));

    if (localStorage.getItem("aeroglide-rtl") === "true") {
      document.documentElement.dir = "rtl";
    }
  }

  // Ensures code executes perfectly regardless of how the script is loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})();