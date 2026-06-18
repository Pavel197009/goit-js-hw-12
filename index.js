import{a as o,S as m,i as n}from"./assets/vendor-BezXTN6Z.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function u(s){const i={q:s,image_type:"photo",orientation:"horizontal",safeSearch:!0};return o.defaults.baseURL="https://pixabay.com/api/",o.get("?key=28194821-49041d995ecd04735d9e20d11",{params:i})}const a={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader")};let d=null;function f(s){const i=s.map(t=>`<li class="gallery-item">
<a class="gallery-link" href="${t.largeImageURL}" >
    <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /> 
</a>
<div class="gallery-item-describe">
  <ul class="describe-items">
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Likes</p>
        <p class="describe-item-value">${t.likes}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Views</p>
        <p class="describe-item-value">${t.views}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Comments</p>
        <p class="describe-item-value">${t.comments}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Downloads</p>
        <p class="describe-item-value">${t.downloads}</p>
      </div>
    </li>
  </ul>
</div>
</li>
`);a.gallery.innerHTML=i.join(" "),d.refresh()}function p(){a.gallery.innerHTML=""}function y(){a.loader.style.visibility="visible"}function g(){a.loader.style.visibility="hidden"}function h(){d=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}a.form.addEventListener("submit",b);h();function b(s){if(s.preventDefault(),s.currentTarget.elements.search_text.value.trim().length===0){n.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}let i=s.currentTarget.elements.search_text.value.trim().split(" ").join("+");p(),y(),u(i).then(t=>{t.data.total?f(t.data.hits):n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g()})}
//# sourceMappingURL=index.js.map
