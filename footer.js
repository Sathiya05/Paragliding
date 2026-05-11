// AeroGlide Paragliding & Hang Gliding - Fully Responsive Footer
// Theme: Primary: #3A86FF (Electric Blue) | Backgrounds: White & Black

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="relative w-full overflow-hidden transition-colors duration-300 bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-gray-900 font-sans">
  
  <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#3A86FF] to-transparent opacity-80"></div>

  <div class="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 grid-cols-1 lg:grid-cols-12 justify-items-start relative z-10">

    <div class="lg:col-span-4 pr-0 lg:pr-8 flex flex-col items-start text-left w-full">
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
        <br>
      <p class="text-[14px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
        Experience the ultimate thrill of free flight. Safe, professional tandem paragliding and hang gliding adventures for all skill levels. The sky is no longer the limit.
      </p>
      
      <div class="flex gap-4 justify-start">
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-xl bg-transparent border-2 border-gray-200 dark:border-gray-800 text-black dark:text-white transition-all duration-300 hover:bg-[#3A86FF] dark:hover:bg-[#3A86FF] hover:border-[#3A86FF] hover:text-white hover:shadow-[0_0_15px_rgba(58,134,255,0.4)] hover:-translate-y-1">
          <i class="fab fa-instagram text-lg"></i>
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-xl bg-transparent border-2 border-gray-200 dark:border-gray-800 text-black dark:text-white transition-all duration-300 hover:bg-[#3A86FF] dark:hover:bg-[#3A86FF] hover:border-[#3A86FF] hover:text-white hover:shadow-[0_0_15px_rgba(58,134,255,0.4)] hover:-translate-y-1">
          <i class="fab fa-facebook-f text-lg"></i>
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-xl bg-transparent border-2 border-gray-200 dark:border-gray-800 text-black dark:text-white transition-all duration-300 hover:bg-[#3A86FF] dark:hover:bg-[#3A86FF] hover:border-[#3A86FF] hover:text-white hover:shadow-[0_0_15px_rgba(58,134,255,0.4)] hover:-translate-y-1">
          <i class="fab fa-youtube text-lg"></i>
        </a>
      </div>
    </div>

    <div class="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full">
      
      <div class="flex flex-col items-start w-full text-left">
        <h3 class="text-[13px] font-black mb-6 uppercase tracking-[0.15em] text-black dark:text-white flex items-center justify-start gap-2 w-full">
          <i class="fas fa-parachute-box text-[#3A86FF]"></i> Adventures
        </h3>
        <ul class="space-y-4 text-[14px] font-semibold w-full">
          <li><a href="packages.html#missions" class="footer-link text-gray-500 dark:text-gray-400">Tandem Gliding</a></li>
          <li><a href="packages.html#missions" class="footer-link text-gray-500 dark:text-gray-400">Hang Gliding</a></li>
          <li><a href="packages.html#missions" class="footer-link text-gray-500 dark:text-gray-400">Flights</a></li>
          <li><a href="packages.html" class="footer-link text-gray-500 dark:text-gray-400">Gift Vouchers</a></li>
        </ul>
      </div>

      <div class="flex flex-col items-start w-full text-left">
        <h3 class="text-[13px] font-black mb-6 uppercase tracking-[0.15em] text-black dark:text-white flex items-center justify-start gap-2 w-full">
          <i class="fas fa-info-circle text-[#3A86FF]"></i> Information
        </h3>
        <ul class="space-y-4 text-[14px] font-semibold w-full">
          <li><a href="about.html" class="footer-link text-gray-500 dark:text-gray-400"> Our Pilots</a></li>
          <li><a href="packages.html" class="footer-link text-gray-500 dark:text-gray-400">Packages</a></li>
          <li><a href="flights.html" class="footer-link text-gray-500 dark:text-gray-400">Blog</a></li>
          <li><a href="contact.html" class="footer-link text-gray-500 dark:text-gray-400">Contact </a></li>
        </ul>
      </div>
      
    </div>

    <div class="lg:col-span-4 flex flex-col items-start text-left w-full">
      <h3 class="text-[13px] font-black mb-6 uppercase tracking-[0.15em] text-black dark:text-white flex items-center justify-start gap-2 w-full">
        <i class="fas fa-paper-plane text-[#3A86FF]"></i> The Flight Deck
      </h3>
      <p class="text-[13px] font-medium text-gray-500 dark:text-gray-400 mb-5 leading-relaxed max-w-md">
        Subscribe for weather alerts, early-bird booking discounts, and breathtaking aerial photography directly to your inbox.
      </p>

      <form class="flex flex-col gap-3 w-full max-w-md lg:max-w-full" id="footerNewsletterForm">
        <div class="relative">
          <input type="email" placeholder="Enter your email address..." required class="w-full px-5 py-4 bg-transparent text-black dark:text-white border-2 border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:border-[#3A86FF] transition-all text-sm font-semibold">
        </div>
        
        <button type="submit" class="relative overflow-hidden group w-full py-4 text-center bg-[#3A86FF] text-white rounded-xl font-bold uppercase text-[12px] tracking-widest shadow-[0_4px_14px_0_rgba(58,134,255,0.39)] transition-all duration-300">
          <div class="absolute inset-0 bg-black dark:bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          <span class="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors flex items-center justify-center gap-2">
            Subscribe <i class="fas fa-arrow-right text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
          </span>
        </button>
      </form>
    </div>
  </div>

  <div class="border-t border-gray-100 dark:border-gray-900 bg-transparent transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center text-[11px] font-bold tracking-[0.1em] text-gray-400 dark:text-gray-500 text-left">
      
      <p>© <span id="currentYear"></span> AeroGlide Tandem Flights. All Rights Reserved.</p>

      <div class="flex flex-wrap justify-start gap-6">
        <a href="index.html" class="hover:text-[#3A86FF] transition-colors duration-300">Privacy Policy</a>
        <a href="index.html" class="hover:text-[#3A86FF] transition-colors duration-300">Terms of Service</a>
        <a href="index.html" class="hover:text-[#3A86FF] transition-colors duration-300">Flight Waiver</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT AEROGLIDE STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    /* Smooth hover slide effect with Electric Blue color change */
    .footer-link {
      display: inline-flex;
      align-items: center;
      transform: translateX(0);
      transition: all 0.3s ease;
    }
    
    .footer-link::before {
      content: '\\f105'; /* FontAwesome chevron-right */
      font-family: 'Font Awesome 6 Free';
      font-weight: 900;
      font-size: 10px;
      margin-right: 8px;
      opacity: 0;
      color: #3A86FF;
      transform: translateX(-10px);
      transition: all 0.3s ease;
    }

    .footer-link:hover {
      color: #3A86FF !important;
      transform: translateX(4px);
    }
    
    .footer-link:hover::before {
      opacity: 1;
      transform: translateX(0);
    }

    /* RTL Support for slide effect */
    [dir="rtl"] .footer-link::before {
      content: '\\f104'; /* FontAwesome chevron-left */
      margin-right: 0;
      margin-left: 8px;
      transform: translateX(10px);
    }
    
    [dir="rtl"] .footer-link:hover {
      transform: translateX(-4px);
    }
    
    [dir="rtl"] .footer-link:hover::before {
      transform: translateX(0);
    }
  `;
  document.head.appendChild(footerStyles);

  /* ===============================
     DYNAMIC LOGIC
  =============================== */
  // Auto-update copyright year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Newsletter Form Logic
  const form = document.getElementById('footerNewsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Welcome to the Flight Deck! You will receive our next update soon.');
      form.reset();
    });
  }
});