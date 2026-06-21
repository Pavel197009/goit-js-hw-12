import{a as h,S as p,i as c}from"./assets/vendor-CIF6YjI2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();class b{constructor(){this.currentPage=0,this.totalPhotos=0,this.per_page=15,this.maxPages=0,this.loadedPhotos=0}async getImagesByQuery(o,r){const n={q:o,image_type:"photo",orientation:"horizontal",safeSearch:!0,per_page:15,page:r};h.defaults.baseURL="https://pixabay.com/api/";const a=await h.get("?key=28194821-49041d995ecd04735d9e20d11",{params:n});return this.currentPage||(this.maxPages=Math.ceil(a.data.total/this.per_page),this.totalPhotos=a.data.total),this.currentPage+=1,this.loadedPhotos+=a.data.hits.length,a.data}resetValues(){this.currentPage=0,this.totalPhotos=0,this.maxPages=0,this.loadedPhotos=0}}const e={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more"),progresslabel:document.querySelector(".progress-label"),progressBar:document.querySelector("#loading"),btnUp:document.querySelector(".btn-up"),btnDown:document.querySelector(".btn-down")};let g=null;function y(l){const o=l.map(r=>`<li class="gallery-item">
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
`);e.gallery.insertAdjacentHTML("beforeend",o.join(" ")),g.refresh()}function f(){e.gallery.innerHTML=""}function v(){e.loader.style.visibility="visible"}function m(){e.loader.style.visibility="hidden"}function P(){e.progresslabel.style.visibility="hidden",e.progressBar.style.visibility="hidden",e.btnUp.style.visibility="hidden",e.btnDown.style.visibility="hidden"}function w(){e.progresslabel.style.visibility="visible",e.progressBar.style.visibility="visible",e.btnUp.style.visibility="visible",e.btnDown.style.visibility="visible"}function S(){g=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}e.form.addEventListener("submit",L);e.loadMore.addEventListener("click",x);e.btnUp.addEventListener("click",B);e.btnDown.addEventListener("click",q);const t=new b;let d={top:0,bottom:0,left:0,right:0,width:0,height:0},u="";S();async function L(l){if(l.preventDefault(),l.currentTarget.elements.search_text.value.trim().length===0){c.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}u=l.currentTarget.elements.search_text.value.trim().split(" ").join("+"),f(),t.resetValues(),P(),v();let o=await t.getImagesByQuery(u,t.currentPage+1);if(o.total)y(o.hits),e.progresslabel.textContent=`Downloaded ${t.loadedPhotos} from ${t.totalPhotos}`,e.progressBar.value=t.loadedPhotos/t.totalPhotos*100,w();else{c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m();return}t.currentPage<t.maxPages?e.loadMore.style.visibility="visible":c.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),m()}async function x(){e.loadMore.style.visibility="hidden";let l=await t.getImagesByQuery(u,t.currentPage+1);y(l.hits),e.progresslabel.textContent=`Downloaded ${t.loadedPhotos} from ${t.totalPhotos}`,e.progressBar.value=t.loadedPhotos/t.totalPhotos*100,t.currentPage<t.maxPages?e.loadMore.style.visibility="visible":c.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function B(){d=e.gallery.firstElementChild.getBoundingClientRect(),window.scrollBy({top:-d.height*2,behavior:"smooth"})}function q(){d=e.gallery.firstElementChild.getBoundingClientRect(),window.scrollBy({top:d.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
