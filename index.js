import{a as d,S as g,i as u}from"./assets/vendor-CIF6YjI2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();class h{constructor(){this.currentPage=0,this.totalPhotos=0,this.per_page=15,this.maxPages=0,this.loadedPhotos=0}async getImagesByQuery(a,r){const n={q:a,image_type:"photo",orientation:"horizontal",safeSearch:!0,per_page:15,page:r};d.defaults.baseURL="https://pixabay.com/api/";const l=await d.get("?key=28194821-49041d995ecd04735d9e20d11",{params:n});return this.currentPage||(this.maxPages=Math.ceil(l.data.total/this.per_page),this.totalPhotos=l.data.total),this.currentPage+=1,this.loadedPhotos+=l.data.hits.length,l.data}resetValues(){this.currentPage=0,this.totalPhotos=0,this.maxPages=0,this.loadedPhotos=0}}const e={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more"),progresslabel:document.querySelector(".progress-label"),progressBar:document.querySelector("#loading"),btnUp:document.querySelector(".btn-up"),btnDown:document.querySelector(".btn-down")};let m=null;function y(o){const a=o.map(r=>`<li class="gallery-item">
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
`);e.gallery.insertAdjacentHTML("beforeend",a.join(" ")),m.refresh()}function p(){e.gallery.innerHTML=""}function b(){e.loader.style.visibility="visible"}function f(){e.loader.style.visibility="hidden"}function v(){e.progresslabel.style.visibility="hidden",e.progressBar.style.visibility="hidden",e.btnUp.style.visibility="hidden",e.btnDown.style.visibility="hidden"}function P(){e.progresslabel.style.visibility="visible",e.progressBar.style.visibility="visible",e.btnUp.style.visibility="visible",e.btnDown.style.visibility="visible"}function S(){m=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}e.form.addEventListener("submit",w);e.loadMore.addEventListener("click",L);e.btnUp.addEventListener("click",handleBtnUp);const t=new h;let c="";S();async function w(o){if(o.preventDefault(),o.currentTarget.elements.search_text.value.trim().length===0){u.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}c=o.currentTarget.elements.search_text.value.trim().split(" ").join("+"),p(),t.resetValues(),v(),b();let a=await t.getImagesByQuery(c,t.currentPage+1);a.total?(y(a.hits),e.progresslabel.textContent=`Downloaded ${t.loadedPhotos} from ${t.totalPhotos}`,e.progressBar.value=t.loadedPhotos/t.totalPhotos*100,P()):u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),t.currentPage<t.maxPages&&(e.loadMore.style.visibility="visible"),f()}async function L(){e.loadMore.style.visibility="hidden";let o=await t.getImagesByQuery(c,t.currentPage+1);y(o.hits),e.progresslabel.textContent=`Downloaded ${t.loadedPhotos} from ${t.totalPhotos}`,e.progressBar.value=t.loadedPhotos/t.totalPhotos*100,t.currentPage<t.maxPages&&(e.loadMore.style.visibility="visible")}
//# sourceMappingURL=index.js.map
