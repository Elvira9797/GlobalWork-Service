(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();(()=>{const t=document.querySelectorAll("[data-modal-open]"),e=document.querySelectorAll("[data-modal-close]"),i=document.querySelector("[data-modal]");t.forEach(o=>{o.addEventListener("click",()=>{s()})}),e.forEach(o=>{o.addEventListener("click",()=>{s()})}),i.addEventListener("click",o=>{o.target===i&&s()});function s(){document.body.classList.toggle("modal-open"),i.classList.toggle("is-hidden")}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e),t.menu.addEventListener("click",i);function e(){document.body.classList.toggle("menu-open"),t.menu.classList.toggle("is-open")}function i(s){s.target===t.menu&&e()}})();function a(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})}const c=document.querySelectorAll(".mob-menu-item");c.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),{menu:document.querySelector("[data-menu]")}.menu.classList.remove("is-open"),document.body.classList.remove("menu-open");const s=t.getAttribute("data-section");a(s)})});function l(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})}const d=document.querySelectorAll(".header-item");d.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const i=t.getAttribute("data-section");l(i)})});const u=[{id:"001",job_title:"Household chemicals production",city:"Zwierzyniec-Pierwszy",position:"packer and sorter",salary:"20 PLN / hour net.",image:"https://jobganic.com/wp-content/uploads/2017/12/young-female-organic-farmer.jpg"},{id:"002",job_title:"Furniture assembly workers (chairs)",city:"Turek",position:"assembler",salary:"23 PLN / hour net.",image:"https://www.icims.com/wp-content/uploads/2020/12/manufacturing-industry-blog-header-1.png"},{id:"003",job_title:"Cocoa, coffee, jelly production",city:"Zabierzów",position:"packer and sorter",salary:"19 PLN / hour net.",image:"https://www.acceptrec.co.uk/images/factory_job_leicester.png"},{id:"004",job_title:"Insulation products manufacturing",city:"Uniejów",position:"packer",salary:"18 PLN / hour net.",image:"https://www.apptree.com/wp-content/uploads/2022/05/top-10-highest-paying-manufacturing-jobs-in-the-us-united-states-2022-banner-apptree-1024x576.jpg"},{id:"005",job_title:"Forklift Operator with UDT",city:"Rakszawa, Jędrzejów",position:"forklift operator",salary:"25 PLN / hour net.",image:"https://www.oeffa.org/graphics/farmjobs.jpg"},{id:"006",job_title:"Energy drinks and juices production",city:"Niepołomice",position:"packer and sorter",salary:"19 PLN / hour net.",image:"https://tbcdn.talentbrew.com/company/1187/v4_0_gst/img/who-are-the-ups-warehouse-workers-m.jpg"},{id:"007",job_title:"Beer production",city:"Rakszawa, Jędrzejów",position:"beer bottler on the line",salary:"19.5 PLN/hour net.",image:"https://www.currentschoolnews.com/wp-content/uploads/2022/05/assembly.jpg"},{id:"008",job_title:"Beer production",city:"Rakszawa, Jędrzejów",position:"laboratory assistants",salary:"25 PLN/hour net.",image:"https://www.currentschoolnews.com/wp-content/uploads/2022/05/assembly.jpg"},{id:"009",job_title:"Ice cream production",city:"Kalisz",position:"packer and labeler",salary:"19 PLN / hour net.",image:"https://www.oeffa.org/graphics/farmjobs.jpg"},{id:"010",job_title:"Laying pavement tiles",city:"Łódź",position:"pavement tile installer",salary:"25-30 PLN / hour net.",image:"https://www.oeffa.org/graphics/farmjobs.jpg"}],p={job_listing:u};let m=new Swiper(".mySwiper",{slidesPerView:1,centeredSlides:!1,spaceBetween:30,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3}}});p.job_listing.forEach(t=>{const e=document.createElement("div");e.classList.add("swiper-slide"),e.innerHTML=`
            <div class="vacancy-card">
              <img class="vacancy-img" src="./images/chairs.jpg" alt="chairs" />
              <div class="vacancy-data-wrap">
                <p><b>City: </b>${t.city}</p>
                <p><b>Position: </b>${t.position}</p>
                <p><b>Salary: </b>${t.salary}</p>
              </div>
              <button type="button" class="vacancies-btn btn">More info</button>
            </div>
          `,m.appendSlide(e)});
