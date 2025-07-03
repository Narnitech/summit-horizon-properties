// Summit Horizon Properties - Main JavaScript
class SummitHorizonApp {
  constructor() {
    this.properties = propertiesData;
    this.filteredProperties = [...this.properties];
    this.currentFilters = {
      location: '',
      propertyType: '',
      priceRange: ''
    };
    
    this.init();
  }

  init() {
    this.renderFeaturedProperties();
    this.setupEventListeners();
    this.setupSmoothScrolling();
    this.setupFormHandling();
  }

  setupEventListeners() {
    // Search form handling
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSearch();
      });
    }

    // Filter inputs
    const locationInput = document.getElementById('location-input');
    const typeSelect = document.getElementById('type-select');
    const priceSelect = document.getElementById('price-select');

    if (locationInput) {
      locationInput.addEventListener('input', () => {
        this.currentFilters.location = locationInput.value;
        this.applyFilters();
      });
    }

    if (typeSelect) {
      typeSelect.addEventListener('change', () => {
        this.currentFilters.propertyType = typeSelect.value;
        this.applyFilters();
      });
    }

    if (priceSelect) {
      priceSelect.addEventListener('change', () => {
        this.currentFilters.priceRange = priceSelect.value;
        this.applyFilters();
      });
    }
  }

  handleSearch() {
    const locationInput = document.getElementById('location-input');
    const typeSelect = document.getElementById('type-select');
    const priceSelect = document.getElementById('price-select');

    if (locationInput) this.currentFilters.location = locationInput.value;
    if (typeSelect) this.currentFilters.propertyType = typeSelect.value;
    if (priceSelect) this.currentFilters.priceRange = priceSelect.value;

    this.applyFilters();
    
    // Scroll to properties section
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  applyFilters() {
    let filtered = [...this.properties];

    // Location filter
    if (this.currentFilters.location) {
      const searchLocation = this.currentFilters.location.toLowerCase();
      filtered = filtered.filter(property => {
        const location = property.location.toLowerCase();
        
        // Support multiple search terms for New York
        if (searchLocation.includes('ny') || searchLocation.includes('new york') || searchLocation.includes('nova york')) {
          return location.includes('new york') || location.includes('manhattan') || location.includes('brooklyn');
        }
        
        // Support Brazilian locations
        if (searchLocation.includes('sp') || searchLocation.includes('são paulo') || searchLocation.includes('sao paulo')) {
          return location.includes('são paulo');
        }
        
        if (searchLocation.includes('rio') || searchLocation.includes('rj')) {
          return location.includes('rio de janeiro');
        }
        
        return location.includes(searchLocation);
      });
    }

    // Property type filter
    if (this.currentFilters.propertyType) {
      const searchType = this.currentFilters.propertyType.toLowerCase();
      filtered = filtered.filter(property => {
        // Smart matching for Portuguese terms
        if (searchType === 'apartamento') {
          return property.propertyType === 'apartment' || property.propertyType === 'penthouse';
        }
        
        if (searchType === 'casa') {
          return property.propertyType === 'house';
        }
        
        if (searchType === 'mansao' || searchType === 'mansão') {
          return property.propertyType === 'mansion';
        }
        
        return property.propertyType === searchType;
      });
    }

    // Price range filter
    if (this.currentFilters.priceRange) {
      filtered = filtered.filter(property => {
        const price = parseInt(property.price);
        const currency = property.currency;
        
        switch (this.currentFilters.priceRange) {
          case 'ate-1-milhao':
            return (currency === 'BRL' && price <= 1000000) || (currency === 'USD' && price <= 500000);
          case '1-3-milhoes':
            return (currency === 'BRL' && price > 1000000 && price <= 3000000) || 
                   (currency === 'USD' && price > 500000 && price <= 1500000);
          case '3-10-milhoes':
            return (currency === 'BRL' && price > 3000000 && price <= 10000000) || 
                   (currency === 'USD' && price > 1500000 && price <= 5000000);
          case '10-plus-milhoes':
            return (currency === 'BRL' && price > 10000000) || (currency === 'USD' && price > 5000000);
          default:
            return true;
        }
      });
    }

    this.filteredProperties = filtered;
    this.renderProperties();
  }

  renderFeaturedProperties() {
    const container = document.getElementById('featured-properties');
    if (!container) return;

    // Show only first 6 featured properties
    const featuredProperties = this.properties.filter(p => p.isFeatured).slice(0, 6);
    
    container.innerHTML = featuredProperties.map(property => this.createPropertyCard(property)).join('');
  }

  renderProperties() {
    const container = document.getElementById('all-properties');
    if (!container) return;

    if (this.filteredProperties.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12">
          <h3 class="text-2xl font-playfair text-earthy-brown mb-4">Nenhuma propriedade encontrada</h3>
          <p class="text-dark-gray">Tente ajustar os filtros de busca ou explore todas as nossas propriedades.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.filteredProperties.map(property => this.createPropertyCard(property)).join('');
  }

  createPropertyCard(property) {
    const formattedPrice = formatPrice(property.price, property.currency);
    const formattedArea = formatArea(property.area);
    
    return `
      <div class="property-card animate-fade-in-up" data-property-id="${property.id}">
        <img src="${property.images[0]}" 
             alt="${property.title}" 
             class="w-full h-64 object-cover">
        <div class="p-6">
          <h3 class="font-playfair text-xl font-semibold text-earthy-brown mb-2">${property.title}</h3>
          <p class="text-dark-gray mb-3 text-sm">${property.location}</p>
          <p class="text-2xl font-bold text-earthy-brown mb-4">${formattedPrice}</p>
          <div class="flex justify-between text-sm text-dark-gray mb-4">
            <span>${property.bedrooms} quartos</span>
            <span>${property.bathrooms} banheiros</span>
            <span>${formattedArea}</span>
          </div>
          <p class="text-sm text-dark-gray mb-4 leading-relaxed">${property.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${property.features.slice(0, 3).map(feature => 
              `<span class="px-2 py-1 bg-warm-beige text-earthy-brown text-xs rounded-full">${feature}</span>`
            ).join('')}
          </div>
          <button onclick="app.showPropertyDetails(${property.id})" 
                  class="w-full bg-earthy-brown text-off-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Ver Detalhes
          </button>
        </div>
      </div>
    `;
  }

  showPropertyDetails(propertyId) {
    const property = this.properties.find(p => p.id === propertyId);
    if (!property) return;

    const modal = this.createPropertyModal(property);
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
      modal.classList.add('opacity-100');
      modal.querySelector('.modal-content').classList.add('scale-100');
    }, 10);
  }

  createPropertyModal(property) {
    const formattedPrice = formatPrice(property.price, property.currency);
    const formattedArea = formatArea(property.area);
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 opacity-0 transition-opacity duration-300';
    modal.onclick = (e) => {
      if (e.target === modal) this.closeModal(modal);
    };

    modal.innerHTML = `
      <div class="modal-content bg-white rounded-2xl max-w-4xl max-h-90vh overflow-y-auto transform scale-95 transition-transform duration-300">
        <div class="relative">
          <button onclick="app.closeModal(this.closest('.fixed'))" 
                  class="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            ${property.images.map(img => 
              `<img src="${img}" alt="${property.title}" class="w-full h-64 object-cover rounded-lg">`
            ).join('')}
          </div>
          
          <div class="p-8">
            <h2 class="font-playfair text-3xl font-bold text-earthy-brown mb-4">${property.title}</h2>
            <p class="text-dark-gray mb-4">${property.location}</p>
            <p class="text-3xl font-bold text-earthy-brown mb-6">${formattedPrice}</p>
            
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="text-center p-4 bg-warm-beige rounded-lg">
                <div class="text-2xl font-bold text-earthy-brown">${property.bedrooms}</div>
                <div class="text-sm text-dark-gray">Quartos</div>
              </div>
              <div class="text-center p-4 bg-warm-beige rounded-lg">
                <div class="text-2xl font-bold text-earthy-brown">${property.bathrooms}</div>
                <div class="text-sm text-dark-gray">Banheiros</div>
              </div>
              <div class="text-center p-4 bg-warm-beige rounded-lg">
                <div class="text-2xl font-bold text-earthy-brown">${formattedArea}</div>
                <div class="text-sm text-dark-gray">Área</div>
              </div>
            </div>
            
            <div class="mb-6">
              <h3 class="font-playfair text-xl font-semibold text-earthy-brown mb-3">Descrição</h3>
              <p class="text-dark-gray leading-relaxed">${property.description}</p>
            </div>
            
            <div class="mb-6">
              <h3 class="font-playfair text-xl font-semibold text-earthy-brown mb-3">Características</h3>
              <div class="grid grid-cols-2 gap-2">
                ${property.features.map(feature => 
                  `<div class="flex items-center">
                    <svg class="w-5 h-5 text-earthy-brown mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-dark-gray">${feature}</span>
                  </div>`
                ).join('')}
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onclick="app.requestInfo(${property.id})" 
                      class="bg-earthy-brown text-off-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Solicitar Informações
              </button>
              <button onclick="app.scheduleVisit(${property.id})" 
                      class="border border-earthy-brown text-earthy-brown py-3 px-6 rounded-lg font-semibold hover:bg-earthy-brown hover:text-off-white transition-colors">
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    return modal;
  }

  closeModal(modal) {
    modal.classList.remove('opacity-100');
    modal.querySelector('.modal-content').classList.remove('scale-100');
    setTimeout(() => {
      modal.remove();
    }, 300);
  }

  requestInfo(propertyId) {
    const property = this.properties.find(p => p.id === propertyId);
    alert(`Obrigado pelo interesse em "${property.title}"! Nossa equipe entrará em contato em breve com mais informações.`);
  }

  scheduleVisit(propertyId) {
    const property = this.properties.find(p => p.id === propertyId);
    alert(`Agendamento de visita para "${property.title}" solicitado! Nossa equipe entrará em contato para confirmar data e horário.`);
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
        contactForm.reset();
      });
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new SummitHorizonApp();
});

// Additional utility functions
function showAllProperties() {
  const propertiesSection = document.getElementById('properties');
  if (propertiesSection) {
    // Create properties grid if it doesn't exist
    let allPropertiesContainer = document.getElementById('all-properties');
    if (!allPropertiesContainer) {
      allPropertiesContainer = document.createElement('div');
      allPropertiesContainer.id = 'all-properties';
      allPropertiesContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12';
      propertiesSection.appendChild(allPropertiesContainer);
    }
    
    app.renderProperties();
    propertiesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Search functionality for header search
function performSearch() {
  if (window.app) {
    window.app.handleSearch();
  }
}