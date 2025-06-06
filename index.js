import{i,a as p,S as f}from"./assets/vendor-DFCQGEf1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();i.settings({position:"topRight"});const u="44296746-7471de79088029a055864728c",g="https://pixabay.com/api/",h=async o=>{const r=`${g}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=false&per_page=200`;try{return(await p.get(r)).data}catch(s){console.error("Error fetching images:",s),i.error({title:"Error",message:"Failed to fetch images"})}},d=document.querySelector(".gallery");let c;const y=({webformatURL:o,largeImageURL:r,tags:s,likes:n,views:e,comments:t,downloads:a})=>`
  <li class="photo-card">
    <a href="${r}" data-lightbox="gallery">
      <img src="${o}" alt="${s}" loading="lazy" />
    </a>
    <div class="info">
      <div class="info-item-wrapper"><p class="info-item"><b>Likes</b></p><p class="info-item">${n}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Views</b></p><p class="info-item">${e}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Comments</b></p><p class="info-item">${t}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Downloads</b></p><p class="info-item">${a}</p></div>
    </div>
  </li>
`,b=o=>{const r=o.map(y).join("");d.insertAdjacentHTML("beforeend",r),c?c.refresh():c=new f(".gallery a",{captionsData:"alt",captionDelay:250})},v=()=>{d.innerHTML=""},w=document.getElementById("search-form"),m=document.getElementById("loader"),L=()=>m.classList.remove("hidden"),l=()=>m.classList.add("hidden");w.addEventListener("submit",async o=>{o.preventDefault();const r=o.currentTarget.elements.searchQuery.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query."});return}v(),L();try{const s=await h(r);if(l(),!s||s.hits.length===0){i.warning({title:"No results",message:"Sorry, no images found."});return}i.success({title:"Hooray!",message:`We found ${s.totalHits} images.`}),b(s.hits)}catch{l(),i.error({title:"Error",message:"Something went wrong. Please try again."})}});
//# sourceMappingURL=index.js.map
