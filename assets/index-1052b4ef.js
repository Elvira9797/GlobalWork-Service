(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();(()=>{const e=document.querySelectorAll("[data-modal-open]"),t=document.querySelectorAll("[data-modal-close]"),n=document.querySelector("[data-modal]");e.forEach(o=>{o.addEventListener("click",()=>{i()})}),t.forEach(o=>{o.addEventListener("click",()=>{i()})}),n.addEventListener("click",o=>{o.target===n&&i()});function i(){document.body.classList.toggle("modal-open"),n.classList.toggle("is-hidden")}})();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menu.addEventListener("click",n);function t(){document.body.classList.toggle("menu-open"),e.menu.classList.toggle("is-open")}function n(i){i.target===e.menu&&t()}})();function l(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}const d=document.querySelectorAll(".mob-menu-item");d.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),{menu:document.querySelector("[data-menu]")}.menu.classList.remove("is-open"),document.body.classList.remove("menu-open");const i=e.getAttribute("data-section");l(i)})});function u(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}const p=document.querySelectorAll(".header-item");p.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("data-section");u(n)})});const m=[{id:"001",job_title:"Household chemicals production",city:"Zwierzyniec-Pierwszy",position:"packer and sorter",salary:"20 PLN / hour net.",image:"https://jobganic.com/wp-content/uploads/2017/12/young-female-organic-farmer.jpg"},{id:"002",job_title:"Furniture assembly workers (chairs)",city:"Turek",position:"assembler",salary:"23 PLN / hour net.",image:"https://www.icims.com/wp-content/uploads/2020/12/manufacturing-industry-blog-header-1.png"},{id:"003",job_title:"Cocoa, coffee, jelly production",city:"Zabierzów",position:"packer and sorter",salary:"19 PLN / hour net.",image:"https://www.acceptrec.co.uk/images/factory_job_leicester.png"},{id:"004",job_title:"Insulation products manufacturing",city:"Uniejów",position:"packer",salary:"18 PLN / hour net.",image:"https://www.apptree.com/wp-content/uploads/2022/05/top-10-highest-paying-manufacturing-jobs-in-the-us-united-states-2022-banner-apptree-1024x576.jpg"},{id:"005",job_title:"Forklift Operator with UDT",city:"Rakszawa, Jędrzejów",position:"forklift operator",salary:"25 PLN / hour net.",image:"https://www.oeffa.org/graphics/farmjobs.jpg"},{id:"006",job_title:"Energy drinks and juices production",city:"Niepołomice",position:"packer and sorter",salary:"19 PLN / hour net.",image:"https://tbcdn.talentbrew.com/company/1187/v4_0_gst/img/who-are-the-ups-warehouse-workers-m.jpg"},{id:"007",job_title:"Beer production",city:"Rakszawa, Jędrzejów",position:"beer bottler on the line",salary:"19.5 PLN/hour net.",image:"https://www.currentschoolnews.com/wp-content/uploads/2022/05/assembly.jpg"},{id:"009",job_title:"Ice cream production",city:"Kalisz",position:"packer and labeler",salary:"19 PLN / hour net.",image:"https://www.oeffa.org/graphics/farmjobs.jpg"},{id:"010",job_title:"Laying pavement tiles",city:"Łódź",position:"pavement tile installer",salary:"25-30 PLN / hour net.",image:"https://www.oeffa.org/graphics/farmjobs.jpg"}],g={job_listing:m},f="/GlobalWork-Service/assets/chemical-dfbd4826.jpg",b="/GlobalWork-Service/assets/chairs-e81f6600.jpg",y="/GlobalWork-Service/assets/jelly-08a2ab41.jpg",h="/GlobalWork-Service/assets/insulation-6eb65f38.jpg",w="/GlobalWork-Service/assets/forklift-82dd3b5f.jpg",v="/GlobalWork-Service/assets/energy-drinks-e6c91cfe.jpg",j="/GlobalWork-Service/assets/beer-673610c9.jpg",k="/GlobalWork-Service/assets/ice-cream-bc61a7c4.jpg",L="/GlobalWork-Service/assets/pavement-29ae5aae.jpg",c="/GlobalWork-Service/assets/icons-3fe3d0ea.svg",S=[f,b,y,h,w,v,j,k,L];let E=new Swiper(".mySwiper",{slidesPerView:1,centeredSlides:!1,spaceBetween:30,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3}}});g.job_listing.forEach((e,t)=>{const n=document.createElement("div");n.classList.add("swiper-slide"),n.innerHTML=`
            <div class="vacancy-card">
            <div class="vacancy-img-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 15%, rgba(252, 176, 69, 0) 50%), url('${S[t]}');"> <h4 class="vacancy-title">${e.job_title}</h4> </div>
              <div class="vacancy-data-wrap">
                <p class="vacancy-data-item"><svg class="vacancy-icon" width="25" height="25">
              <use href="${c}#icon-location"></use>
            </svg><b>City: </b>${e.city}</p>
                <p class="vacancy-data-item"><svg class="vacancy-icon" width="25" height="25">
              <use href="${c}#icon-user"></use>
            </svg><b>Position: </b>${e.position}</p>
                <p class="vacancy-data-item"><svg class="vacancy-icon" width="25" height="25">
              <use href="${c}#icon-credit-card"></use>
            </svg><b>Salary: </b>${e.salary}</p>
              </div>
              <button type="button" class="vacancies-btn btn">More info</button>
            </div>
          `,E.appendSlide(n)});const _=document.querySelectorAll(".about-card");function P(){_.forEach((e,t)=>{setTimeout(()=>{e.classList.remove("hidden"),e.classList.add("fadeIn")},300*t)})}const I=document.getElementById("about");function r(){const e=window.scrollY,t=I.offsetTop,n=100;e+window.innerHeight>t+n&&(P(),window.removeEventListener("scroll",r))}window.addEventListener("scroll",r);