/* main.js - shared rendering & utilities used by pages */
function stars(n){
  return '★'.repeat(n) + '☆'.repeat(Math.max(0,5-n));
}

/* render a set of product cards into a container element */
function renderProductCards(containerEl, list){
  containerEl.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="card-body card-content">
        <div class="title">${p.name}</div>
        <div style="margin-top:8px">
          <span class="price">₹${p.price}</span>
          <span class="mrp">₹${p.mrp}</span>
          <span class="discount">${p.discount}</span>
        </div>
        <div class="rating">${stars(p.rating)}</div>
        <div style="margin-top:10px">
          <a class="btn btn-primary buy-link" href="${affiliateLink(p.link)}" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>
      </div>
    `;
    containerEl.appendChild(card);
  });
}

/* helper to read query param */
function getQueryParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}
