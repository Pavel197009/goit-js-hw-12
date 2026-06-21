import{a as g,S as f,i as n}from"./assets/vendor-CIF6YjI2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();g.defaults.baseURL="https://pixabay.com/api/";const v="28194821-49041d995ecd04735d9e20d11",P=`?key=${v}`;class w{constructor(){this.currentPage=0,this.totalPhotos=0,this.per_page=15,this.maxPages=0,this.loadedPhotos=0}async getImagesByQuery(o,i){const l={q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:i},t=await g.get(P,{params:l});return this.currentPage||(this.maxPages=Math.ceil(t.data.total/this.per_page),this.totalPhotos=t.data.total),this.currentPage+=1,this.loadedPhotos+=t.data.hits.length,t.data}resetValues(){this.currentPage=0,this.totalPhotos=0,this.maxPages=0,this.loadedPhotos=0}}const e={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more"),progresslabel:document.querySelector(".progress-label"),progressBar:document.querySelector("#loading"),btnUp:document.querySelector(".btn-up"),btnDown:document.querySelector(".btn-down")};let y=null;function p(a){const o=a.map(i=>`<li class="gallery-item">
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
`);e.gallery.insertAdjacentHTML("beforeend",o.join(" ")),y.refresh()}function L(){e.gallery.innerHTML=""}function S(){e.loader.style.visibility="visible"}function h(){e.loader.style.visibility="hidden"}function x(){e.progresslabel.style.visibility="hidden",e.progressBar.style.visibility="hidden",e.btnUp.style.visibility="hidden",e.btnDown.style.visibility="hidden"}function B(){e.progresslabel.style.visibility="visible",e.progressBar.style.visibility="visible",e.btnUp.style.visibility="visible",e.btnDown.style.visibility="visible"}function b(){e.loadMore.style.visibility="visible"}function m(){e.loadMore.style.visibility="hidden"}function q(){y=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}e.form.addEventListener("submit",$);e.loadMore.addEventListener("click",D);e.btnUp.addEventListener("click",M);e.btnDown.addEventListener("click",E);const s=new w;let c={top:0,bottom:0,left:0,right:0,width:0,height:0},u="";q();async function $(a){if(a.preventDefault(),a.currentTarget.elements.search_text.value.trim().length===0){n.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}u=a.currentTarget.elements.search_text.value.trim().split(" ").join("+"),L(),s.resetValues(),x(),S();let o=await s.getImagesByQuery(u,s.currentPage+1);if(o.total)p(o.hits),e.progresslabel.textContent=`Downloaded ${s.loadedPhotos} from ${s.totalPhotos}`,e.progressBar.value=s.loadedPhotos/s.totalPhotos*100,B();else{n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),h();return}s.currentPage<s.maxPages?b():n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),h()}async function D(){m();let a=await s.getImagesByQuery(u,s.currentPage+1);p(a.hits),e.progresslabel.textContent=`Downloaded ${s.loadedPhotos} from ${s.totalPhotos}`,e.progressBar.value=s.loadedPhotos/s.totalPhotos*100,s.currentPage<s.maxPages?b():(m(),n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}function M(){c=e.gallery.firstElementChild.getBoundingClientRect(),window.scrollBy({top:-c.height*2,behavior:"smooth"})}function E(){c=e.gallery.firstElementChild.getBoundingClientRect(),window.scrollBy({top:c.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
