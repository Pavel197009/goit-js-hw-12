import{a as b,S as L,i as l}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();b.defaults.baseURL="https://pixabay.com/api";const S="28194821-49041d995ecd04735d9e20d11",x=`?key=${S}`;class B{constructor(){this.currentPage=0,this.totalPhotos=0,this.per_page=15,this.maxPages=0,this.loadedPhotos=0}async getImagesByQuery(r,i){const d={q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:i},t=await b.get(x,{params:d});return i||(this.maxPages=Math.ceil(t.data.total/this.per_page),this.totalPhotos=t.data.total),this.currentPage+=1,this.loadedPhotos+=t.data.hits.length,t.data}resetValues(){this.currentPage=0,this.totalPhotos=0,this.maxPages=0,this.loadedPhotos=0}}const e={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more"),progresslabel:document.querySelector(".progress-label"),progressBar:document.querySelector("#loading"),btnUp:document.querySelector(".btn-up"),btnDown:document.querySelector(".btn-down")};let f=null;$();function v(a){const r=a.map(i=>`<li class="gallery-item">
<a class="gallery-link" href="${i.largeImageURL}" >
    <img class="gallery-img" src="${i.webformatURL}" alt="${i.tags}" /> 
</a>
<div class="gallery-item-describe">
  <ul class="describe-items">
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Likes</p>
        <p class="describe-item-value">${i.likes}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Views</p>
        <p class="describe-item-value">${i.views}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Comments</p>
        <p class="describe-item-value">${i.comments}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Downloads</p>
        <p class="describe-item-value">${i.downloads}</p>
      </div>
    </li>
  </ul>
</div>
</li>
`);e.gallery.insertAdjacentHTML("beforeend",r.join(" ")),f.refresh()}function m(){e.gallery.innerHTML=""}function P(){e.loader.style.visibility="visible"}function n(){e.loader.style.visibility="hidden"}function g(){e.progresslabel.style.visibility="hidden",e.progressBar.style.visibility="hidden",e.btnUp.style.visibility="hidden",e.btnDown.style.visibility="hidden"}function q(){e.progresslabel.style.visibility="visible",e.progressBar.style.visibility="visible",e.btnUp.style.visibility="visible",e.btnDown.style.visibility="visible"}function w(){e.loadMore.style.visibility="visible"}function c(){e.loadMore.style.visibility="hidden"}function $(){f=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}e.form.addEventListener("submit",D);e.loadMore.addEventListener("click",M);e.btnUp.addEventListener("click",R);e.btnDown.addEventListener("click",p);const s=new B;let u={top:0,bottom:0,left:0,right:0,width:0,height:0},y="";async function D(a){if(a.preventDefault(),a.currentTarget.elements.search_text.value.trim().length===0){l.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}y=a.currentTarget.elements.search_text.value.trim().split(" ").join("+"),m(),s.resetValues(),g(),c(),P();try{let r=await s.getImagesByQuery(y,s.currentPage+1);if(r.total)v(r.hits),e.progresslabel.textContent=`Downloaded ${s.loadedPhotos} from ${s.totalPhotos}`,e.progressBar.value=s.loadedPhotos/s.totalPhotos*100,q();else{l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n();return}s.currentPage<s.maxPages?w():l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n(),p()}catch{l.error({position:"topRight",message:"Something went wrong!"}),m(),s.resetValues(),g(),c(),n()}}async function M(){c(),P();try{let a=await s.getImagesByQuery(y,s.currentPage+1);v(a.hits),n(),e.progresslabel.textContent=`Downloaded ${s.loadedPhotos} from ${s.totalPhotos}`,e.progressBar.value=s.loadedPhotos/s.totalPhotos*100,s.currentPage<s.maxPages?w():(c(),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),p()}catch{l.error({position:"topRight",message:"Something went wrong!"}),m(),s.resetValues(),g(),c(),n()}}function R(){u=e.gallery.firstElementChild.getBoundingClientRect(),window.scrollBy({top:-u.height*2,behavior:"smooth"})}function p(){u=e.gallery.firstElementChild.getBoundingClientRect(),window.scrollBy({top:u.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
