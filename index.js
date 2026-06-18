import{a as d,S as y,i as u}from"./assets/vendor-CIF6YjI2.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();class p{constructor(){this.currentPage=0,this.totalPhotos=0,this.per_page=15,this.maxPages=0,this.loadedPhotos=0}async getImagesByQuery(i,r){const c={q:i,image_type:"photo",orientation:"horizontal",safeSearch:!0,per_page:15,page:r};d.defaults.baseURL="https://pixabay.com/api/";const o=await d.get("?key=28194821-49041d995ecd04735d9e20d11",{params:c});return this.currentPage||(this.maxPages=Math.ceil(o.data.total/this.per_page)),this.currentPage+=1,this.loadedPhotos+=o.data.hits.len,o.data}}const l={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more")};let m=null;function g(s){const i=s.map(r=>`<li class="gallery-item">
<a class="gallery-link" href="${r.largeImageURL}" >
    <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" /> 
</a>
<div class="gallery-item-describe">
  <ul class="describe-items">
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Likes</p>
        <p class="describe-item-value">${r.likes}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Views</p>
        <p class="describe-item-value">${r.views}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Comments</p>
        <p class="describe-item-value">${r.comments}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Downloads</p>
        <p class="describe-item-value">${r.downloads}</p>
      </div>
    </li>
  </ul>
</div>
</li>
`);l.gallery.insertAdjacentHTML("beforeend",i.join(" ")),m.refresh()}function f(){l.gallery.innerHTML=""}function h(){l.loader.style.visibility="visible"}function b(){l.loader.style.visibility="hidden"}function v(){m=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}l.form.addEventListener("submit",P);l.loadMore.addEventListener("click",L);const a=new p;let n="";v();async function P(s){if(s.preventDefault(),s.currentTarget.elements.search_text.value.trim().length===0){u.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}n=s.currentTarget.elements.search_text.value.trim().split(" ").join("+"),f(),a.currentPage=0,h();let i=await a.getImagesByQuery(n,a.currentPage+1);i.total?(console.log(i.total),g(i.hits)):u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.currentPage<a.maxPages&&(l.loadMore.style.visibility="visible"),b()}async function L(){l.loadMore.style.visibility="hidden";let s=await a.getImagesByQuery(n,a.currentPage+1);g(s.hits),a.currentPage<a.maxPages&&(l.loadMore.style.visibility="visible")}
//# sourceMappingURL=index.js.map
