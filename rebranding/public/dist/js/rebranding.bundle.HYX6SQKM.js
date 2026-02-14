(() => {
  // ../rebranding/rebranding/public/js/rebranding.bundle.js
  frappe.ready(() => {
    const setFavicon = () => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = "/assets/rebranding/images/favicon.ico";
    };
    setFavicon();
    const removeHelpMenu = () => {
      const helpMenu = document.querySelector(".dropdown-help");
      if (helpMenu)
        helpMenu.remove();
    };
    removeHelpMenu();
    const replaceLogos = () => {
      document.querySelectorAll(".navbar-brand img, .app-logo img, .sidebar-brand img").forEach((img) => {
        img.src = "/assets/rebranding/images/applogo.svg";
      });
    };
    replaceLogos();
    const loadMarquee = () => {
      const logos = [
        "/assets/rebranding/images/marquee-logos/marquee-logo-1.png",
        "/assets/rebranding/images/marquee-logos/marquee-logo-2.svg",
        "/assets/rebranding/images/marquee-logos/marquee-logo-3.png",
        "/assets/rebranding/images/marquee-logos/marquee-logo-4.svg",
        "/assets/rebranding/images/marquee-logos/marquee-logo-5.png",
        "/assets/rebranding/images/marquee-logos/marquee-logo-6.svg",
        "/assets/rebranding/images/marquee-logos/marquee-logo-7.svg",
        "/assets/rebranding/images/marquee-logos/marquee-logo-8.svg"
      ];
      const marqueeContent = document.querySelector(".marquee-content");
      if (marqueeContent) {
        marqueeContent.innerHTML = "";
        logos.forEach((logo) => {
          const img = document.createElement("img");
          img.src = logo;
          img.alt = "Customer";
          img.title = "Customer";
          marqueeContent.appendChild(img);
        });
        logos.forEach((logo) => {
          const img = document.createElement("img");
          img.src = logo;
          img.alt = "Customer";
          img.title = "Customer";
          marqueeContent.appendChild(img);
        });
      }
    };
    const renderLoginPage = () => {
      var _a, _b;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const body = document.body;
      if (isMobile) {
        body.classList.add("mobile-login");
        body.innerHTML = `
                <div class="login-container">
                    <div class="login-right">
                        <div class="mobile-header">
                            <img src="/assets/rebranding/images/applogo.svg" class="mobile-logo">
                            <h2>Welcome Back</h2>
                            <p>Please sign in to continue</p>
                        </div>
                        <div class="page-card">
                            ${((_a = document.querySelector(".login-content")) == null ? void 0 : _a.innerHTML) || ""}
                        </div>
                    </div>
                    <div class="mobile-footer">
                        \xA9 ${new Date().getFullYear()} Tele Cloud ERP. All Rights Reserved.
                    </div>
                </div>
            `;
      } else {
        body.classList.remove("mobile-login");
        body.innerHTML = `
                <div class="login-container">
                    <div class="login-left">
                        <img src="/assets/rebranding/images/applogo.svg" class="company-logo">
                        <div class="marquee-container">
                            <div class="marquee-content"></div>
                        </div>
                        <div class="copyright">
                            \xA9 ${new Date().getFullYear()} Tele Cloud ERP. All Rights Reserved.
                        </div>
                    </div>
                    <div class="login-right">
                        <div class="page-card">
                            ${((_b = document.querySelector(".login-content")) == null ? void 0 : _b.innerHTML) || ""}
                        </div>
                    </div>
                </div>
            `;
        loadMarquee();
      }
    };
    renderLoginPage();
    window.addEventListener("resize", renderLoginPage);
  });
})();
//# sourceMappingURL=rebranding.bundle.HYX6SQKM.js.map
