(()=>{frappe.ready(()=>{(()=>{let e=document.querySelector("link[rel~='icon']");e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.href="/assets/rebranding/images/favicon.ico"})(),(()=>{let e=document.querySelector(".dropdown-help");e&&e.remove()})(),(()=>{document.querySelectorAll(".navbar-brand img, .app-logo img, .sidebar-brand img").forEach(e=>{e.src="/assets/rebranding/images/applogo.svg"})})();let i=()=>{let e=["/assets/rebranding/images/marquee-logos/marquee-logo-1.png","/assets/rebranding/images/marquee-logos/marquee-logo-2.svg","/assets/rebranding/images/marquee-logos/marquee-logo-3.png","/assets/rebranding/images/marquee-logos/marquee-logo-4.svg","/assets/rebranding/images/marquee-logos/marquee-logo-5.png","/assets/rebranding/images/marquee-logos/marquee-logo-6.svg","/assets/rebranding/images/marquee-logos/marquee-logo-7.svg","/assets/rebranding/images/marquee-logos/marquee-logo-8.svg"],s=document.querySelector(".marquee-content");s&&(s.innerHTML="",e.forEach(a=>{let o=document.createElement("img");o.src=a,o.alt="Customer",o.title="Customer",s.appendChild(o)}),e.forEach(a=>{let o=document.createElement("img");o.src=a,o.alt="Customer",o.title="Customer",s.appendChild(o)}))},n=()=>{var a,o;let e=window.matchMedia("(max-width: 768px)").matches,s=document.body;e?(s.classList.add("mobile-login"),s.innerHTML=`
                <div class="login-container">
                    <div class="login-right">
                        <div class="mobile-header">
                            <img src="/assets/rebranding/images/applogo.svg" class="mobile-logo">
                            <h2>Welcome Back</h2>
                            <p>Please sign in to continue</p>
                        </div>
                        <div class="page-card">
                            ${((a=document.querySelector(".login-content"))==null?void 0:a.innerHTML)||""}
                        </div>
                    </div>
                    <div class="mobile-footer">
                        \xA9 ${new Date().getFullYear()} Tele Cloud ERP. All Rights Reserved.
                    </div>
                </div>
            `):(s.classList.remove("mobile-login"),s.innerHTML=`
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
                            ${((o=document.querySelector(".login-content"))==null?void 0:o.innerHTML)||""}
                        </div>
                    </div>
                </div>
            `,i())};n(),window.addEventListener("resize",n)});})();
//# sourceMappingURL=rebranding.bundle.JMCJCEHK.js.map
