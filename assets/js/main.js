function showModalContent(betta, description) {
  const experienced = ` <div class="modal-content">
                          <div class="modal-row-1">
                          <img src="assets/image/${betta}.png" alt="${betta}">
                          </div>
                          <div class="modal-row-2">
                              <div class="modal-row-paragraf">
                                  <h3>${betta}</h3>
                                  <p>${description}</p>
                              </div>
                          </div>
                          <div class="modal-row-3">
                              <button class="btn-close">Close</button>
                      </div>`;
  
  modalContainer.style.display = 'flex';
  modalContainer.innerHTML = experienced;
  return;
}

const description = {
  Netkrom_Solusindo: 'PT.Netkrom Solusindo is information technology company that focuses on computer networks and software engineering. Founded in 2011, PT. Netkrom Solusindo Netkrom Solusindo began developing various goods and services to support the implementation of information technology in various sectors, especially health (hospitals), government and private (enterprise).',
  NTT_Group: 'The NTT Group is a world leader in providing technology and business solutions to people, clients and communities. With $108B in revenue and more than 330,000 employees in over 80 countries and regions, providing services in over 190 of them, we are committed to being a long-term trusted partner and always contributing to society through our business operations.',
  ZTE_Indonesia: 'ZTE is a global leader in telecommunications and information technology. Founded in 1985 and listed on both the Hong Kong and Shenzhen Stock Exchanges, the company has been committed to providing innovative technologies and integrated solutions for global operators, government and enterprise, and consumers from over 160 countries across the globe. Serving over 1/4 of the global population, the company is dedicated to enabling connectivity and trust everywhere for a better future.',
  Swadharma_Duta_Data: 'PT. Swadharma Duta Data (PT. SDD), established on September 1, 1988. Owned by BNI Pension Funds and PT. Tri Handayani Utama. PT. SDD is supported by experts who are professionals in their fields and have certification of expertise from well-known brands. In supporting the quality standards of goods or services produced, PT. SDD has an ISO 9001: 2015 certificate.' 
}

const modalContainer = document.querySelector('.modal-container');
const buttons = document.querySelectorAll('button');

// Menampilkan modal saat tomblo show diklik
for (let button of buttons) {
  button.addEventListener('click', function(e) {
      const target = e.target;
      if (target.classList.contains('netkrom-btn')) showModalContent('netkrom', description.Netkrom_Solusindo);
      if (target.classList.contains('ntt-btn')) showModalContent('NTT Group', description.NTT_Group);
      if (target.classList.contains('zte-btn')) showModalContent('ZTE_logo_new', description.ZTE_Indonesia);
      if (target.classList.contains('sdd-btn')) showModalContent('sddlogo', description.Swadharma_Duta_Data);
  });
}

// Menyembunyikan modal saat tombol close di klik
document.body.addEventListener('click', function(e) {
  const target = e.target;

  if (target.classList.contains('btn-close')) {
      modalContainer.style.display = 'none';
  }
});