import{a as p,S as w,i as l}from"./assets/vendor-CIF6YjI2.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();p.defaults.baseURL="https://pixabay.com/api/";const L="28194821-49041d995ecd04735d9e20d11",S=`?key=${L}`;class x{constructor(){this.currentPage=0,this.totalPhotos=0,this.per_page=15,this.maxPages=0,this.loadedPhotos=0}async getImagesByQuery(i,r){const c={q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:r},t=await p.get(S,{params:c});return this.currentPage||(this.maxPages=Math.ceil(t.data.total/this.per_page),this.totalPhotos=t.data.total),this.currentPage+=1,this.loadedPhotos+=t.data.hits.length,t.data}resetValues(){this.currentPage=0,this.totalPhotos=0,this.maxPages=0,this.loadedPhotos=0}}const e={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more"),progresslabel:document.querySelector(".progress-label"),progressBar:document.querySelector("#loading"),btnUp:document.querySelector(".btn-up"),btnDown:document.querySelector(".btn-down")};let b=null;$();function f(a){const i=a.map(r=>`<li class="gallery-item">
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
`);e.gallery.insertAdjacentHTML("beforeend",i.join(" ")),b.refresh()}function h(){e.gallery.innerHTML=""}function B(){e.loader.style.visibility="visible"}function y(){e.loader.style.visibility="hidden"}function g(){e.progresslabel.style.visibility="hidden",e.progressBar.style.visibility="hidden",e.btnUp.style.visibility="hidden",e.btnDown.style.visibility="hidden"}function q(){e.progresslabel.style.visibility="visible",e.progressBar.style.visibility="visible",e.btnUp.style.visibility="visible",e.btnDown.style.visibility="visible"}function v(){e.loadMore.style.visibility="visible"}function n(){e.loadMore.style.visibility="hidden"}function $(){b=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}e.form.addEventListener("submit",D);e.loadMore.addEventListener("click",M);e.btnUp.addEventListener("click",R);e.btnDown.addEventListener("click",E);const s=new x;let d={top:0,bottom:0,left:0,right:0,width:0,height:0},m="";async function D(a){if(a.preventDefault(),a.currentTarget.elements.search_text.value.trim().length===0){l.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}m=a.currentTarget.elements.search_text.value.trim().split(" ").join("+"),h(),s.resetValues(),g(),n(),B();try{let i=await s.getImagesByQuery(m,s.currentPage+1);if(i.total)f(i.hits),e.progresslabel.textContent=`Downloaded ${s.loadedPhotos} from ${s.totalPhotos}`,e.progressBar.value=s.loadedPhotos/s.totalPhotos*100,q();else{l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),y();return}s.currentPage<s.maxPages?v():l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),y(),P()}catch{l.error({position:"topRight",message:"Something went wrong!"}),h(),s.resetValues(),g(),n()}}async function M(){n();try{let a=await s.getImagesByQuery(m,s.currentPage+1);f(a.hits),e.progresslabel.textContent=`Downloaded ${s.loadedPhotos} from ${s.totalPhotos}`,e.progressBar.value=s.loadedPhotos/s.totalPhotos*100,s.currentPage<s.maxPages?v():(n(),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),P()}catch{l.error({position:"topRight",message:"Something went wrong!"}),h(),s.resetValues(),g(),n()}}function R(){d=e.gallery.firstElementChild.getBoundingClientRect(),window.scrollBy({top:-d.height*2,behavior:"smooth"})}function E(){d=e.gallery.firstElementChild.getBoundingClientRect(),window.scrollBy({top:d.height*2,behavior:"smooth"})}function P(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
