import{i,a as f,S as u}from"./assets/vendor-BMHzDZyJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();i.settings({position:"topRight"});const g="44296746-7471de79088029a055864728c",h="https://pixabay.com/api/",y=async s=>{const t=`${h}?key=${g}&q=${s}&image_type=photo&orientation=horizontal&safesearch=false&per_page=200`;try{return(await f.get(t)).data}catch(o){console.error("Error fetching images:",o),i.error({title:"Error",message:"Failed to fetch images"})}},v=document.getElementById("search-form"),m=document.querySelector(".gallery"),p=document.getElementById("loader");let c="",l;const b=()=>p.classList.remove("hidden"),d=()=>p.classList.add("hidden"),w=({webformatURL:s,largeImageURL:t,tags:o,likes:n,views:e,comments:r,downloads:a})=>`
  <div class="photo-card">
    <a href="${t}" data-lightbox="gallery">
      <img src="${s}" alt="${o}" loading="lazy" />
    </a>
    <div class="info">
      <div class="info-item-wrapper"><p class="info-item"><b>Likes</b></p><p class="info-item">${n}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Views</b></p><p class="info-item">${e}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Comments</b></p><p class="info-item">${r}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Downloads</b></p><p class="info-item">${a}</p></div>
    </div>
  </div>
`,L=s=>{const t=s.map(w).join("");m.insertAdjacentHTML("beforeend",t),l?l.refresh():l=new u(".gallery a",{captionsData:"alt",captionDelay:250})},$=async s=>{if(s.preventDefault(),c=s.currentTarget.elements.searchQuery.value.trim(),!c){i.warning({title:"Warning",message:"Please enter a valid search query."});return}m.innerHTML="",b();try{const t=await y(c);if(d(),!t||t.hits.length===0){i.warning({title:"No results",message:"Sorry, no images found."});return}i.success({title:"Hooray!",message:`We found ${t.totalHits} images.`}),L(t.hits)}catch{d(),i.error({title:"Error",message:"Something went wrong."})}};v.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
