const brands = [
  'BMW','Mercedes','Audi','Toyota','Honda','Ford','Volkswagen','Renault',
  'Peugeot','Nissan','Kia','Hyundai','Chevrolet','Citroen','Fiat','Mazda','Subaru','Jeep','Dacia','Mazerrati'
];

const brandsContainer = document.getElementById('brands');
const modal = document.getElementById('modalBackdrop');
const modalBrand = document.getElementById('modalBrand');
const partsGrid = document.getElementById('partsGrid');

brands.forEach(b=>{
  const card=document.createElement('div');
  card.className='card';
  card.innerHTML=`
    <div class="logo"><img src="https://via.placeholder.com/100x100?text=${b}" alt="${b}" style="width:100%;height:100%;object-fit:cover"></div>
    <div class="brand-name">${b}</div>
    <button class="btn btn-primary">Voir pièces</button>
  `;
  card.querySelector('button').addEventListener('click',()=>openModal(b));
  brandsContainer.appendChild(card);
});

function openModal(brand){
  modalBrand.textContent='Pièces — '+brand;
  partsGrid.innerHTML='';
  for(let i=1;i<=6;i++){
    const part=document.createElement('div');
    part.className='part';
    part.innerHTML=`
      <img src="https://via.placeholder.com/200x150?text=${brand}+Part${i}" alt="${brand} pièce ${i}">
      <div><strong>Pièce ${i}</strong><br><small>${brand}</small></div>
    `;
    partsGrid.appendChild(part);
  }
  modal.style.display='flex';
}
document.getElementById('closeModal').addEventListener('click',()=>modal.style.display='none');
modal.addEventListener('click',e=>{if(e.target===modal)modal.style.display='none';});