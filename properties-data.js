// Summit Horizon Properties - Data
const propertiesData = [
  // Brazilian Properties
  {
    id: 1,
    title: "Penthouse Luxury Vista",
    description: "Penthouse espetacular com vista panorâmica da Barra da Tijuca e oceano. Acabamentos premium e localização privilegiada.",
    location: "Barra da Tijuca, Rio de Janeiro, Brazil",
    price: "2850000",
    currency: "BRL",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    propertyType: "penthouse",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Vista panorâmica", "Automação residencial", "Área gourmet", "Piscina privativa", "Garagem para 3 carros"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Casa Moderna Alphaville",
    description: "Casa contemporânea em condomínio fechado com piscina, jardim paisagístico e área de lazer completa.",
    location: "Alphaville, São Paulo, Brazil",
    price: "3200000",
    currency: "BRL",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    propertyType: "house",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Piscina", "Jardim paisagístico", "Área gourmet", "Segurança 24h", "Quadra de tênis"],
    isFeatured: true,
  },
  {
    id: 3,
    title: "Apartamento Vila Olímpia",
    description: "Apartamento moderno com design arrojado e localização privilegiada no coração da Vila Olímpia.",
    location: "Vila Olímpia, São Paulo, Brazil",
    price: "1450000",
    currency: "BRL",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    propertyType: "apartment",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Design moderno", "Localização privilegiada", "Academia", "Piscina", "Espaço gourmet"],
    isFeatured: true,
  },
  {
    id: 4,
    title: "Mansão Jardim Europa",
    description: "Imponente mansão em terreno de 1.200m² com arquitetura clássica e jardins exuberantes.",
    location: "Jardim Europa, São Paulo, Brazil",
    price: "8500000",
    currency: "BRL",
    bedrooms: 6,
    bathrooms: 5,
    area: 800,
    propertyType: "mansion",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Arquitetura clássica", "Jardins exuberantes", "Adega", "Cinema", "Spa", "Garagem para 6 carros"],
    isFeatured: true,
  },
  {
    id: 5,
    title: "Loft Vila Madalena",
    description: "Loft industrial moderno no coração da Vila Madalena, perfeito para quem busca estilo e praticidade.",
    location: "Vila Madalena, São Paulo, Brazil",
    price: "890000",
    currency: "BRL",
    bedrooms: 2,
    bathrooms: 1,
    area: 120,
    propertyType: "loft",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Design industrial", "Localização central", "Tetos altos", "Exposições próximas", "Vida noturna"],
    isFeatured: true,
  },
  {
    id: 6,
    title: "Villa Praia de Ipanema",
    description: "Villa exclusiva com acesso direto à praia de Ipanema. Design contemporâneo e vista deslumbrante do mar.",
    location: "Ipanema, Rio de Janeiro, Brazil",
    price: "12000000",
    currency: "BRL",
    bedrooms: 4,
    bathrooms: 4,
    area: 350,
    propertyType: "villa",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Vista para o mar", "Acesso direto à praia", "Terraço", "Piscina infinity", "Design exclusivo"],
    isFeatured: true,
  },

  // New York Luxury Properties
  {
    id: 7,
    title: "Manhattan Penthouse Duplex",
    description: "Magnífico penthouse duplex no coração de Manhattan com vistas deslumbrantes do Central Park e skyline. Acabamentos italianos importados e terraço privativo.",
    location: "Upper East Side, Manhattan, New York, EUA",
    price: "25000000",
    currency: "USD",
    bedrooms: 5,
    bathrooms: 6,
    area: 465,
    propertyType: "penthouse",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1581359961507-38a50c99e498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Vista Central Park", "Terraço privativo", "Elevador privado", "Lareira", "Adega climatizada", "Concierge 24h"],
    isFeatured: true,
  },
  {
    id: 8,
    title: "Tribeca Modern Loft",
    description: "Loft industrial convertido com design contemporâneo em edifício histórico. Tetos altos, janelas enormes e acabamentos de luxo.",
    location: "Tribeca, Manhattan, New York, EUA",
    price: "8500000",
    currency: "USD",
    bedrooms: 3,
    bathrooms: 3,
    area: 325,
    propertyType: "loft",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Tetos de 4 metros", "Janelas enormes", "Cozinha gourmet", "Spa privativo", "Estúdio de arte", "Portaria 24h"],
    isFeatured: true,
  },
  {
    id: 9,
    title: "Brooklyn Heights Townhouse",
    description: "Townhouse histórica de 4 andares com jardim privativo e vista para a Manhattan. Completamente renovada mantendo charme original.",
    location: "Brooklyn Heights, Brooklyn, New York, EUA",
    price: "15000000",
    currency: "USD",
    bedrooms: 6,
    bathrooms: 5,
    area: 520,
    propertyType: "house",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Jardim privativo", "Vista Manhattan", "Arquitetura histórica", "Biblioteca", "Wine cellar", "Roof deck"],
    isFeatured: true,
  },
  {
    id: 10,
    title: "SoHo Artist Apartment",
    description: "Apartamento de artista em edifício cast-iron icônico do SoHo. Espaços amplos, luz natural abundante e localização incomparável.",
    location: "SoHo, Manhattan, New York, EUA",
    price: "6800000",
    currency: "USD",
    bedrooms: 2,
    bathrooms: 2,
    area: 185,
    propertyType: "apartment",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Arquitetura cast-iron", "Luz natural abundante", "Galerias próximas", "Tetos altos", "Pisos originais", "Vista rua"],
    isFeatured: true,
  },
  {
    id: 11,
    title: "Central Park West Mansion",
    description: "Mansão imponente frente ao Central Park com 6 andares. Arquitetura clássica americana com todas as comodidades modernas.",
    location: "Central Park West, Manhattan, New York, EUA",
    price: "45000000",
    currency: "USD",
    bedrooms: 8,
    bathrooms: 10,
    area: 850,
    propertyType: "mansion",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Vista Central Park", "6 andares", "Elevador privado", "Sala de cinema", "Ginásio privado", "Staff quarters"],
    isFeatured: true,
  },
  {
    id: 12,
    title: "One57 Sky Villa",
    description: "Villa no céu no icônico One57, o arranha-céu residencial mais exclusivo de Nova York. Vista 360° da cidade.",
    location: "Midtown, Manhattan, New York, EUA",
    price: "95000000",
    currency: "USD",
    bedrooms: 4,
    bathrooms: 5,
    area: 600,
    propertyType: "villa",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Vista 360°", "Andar inteiro", "Serviços do Park Hyatt", "Terraço privativo", "Automação total", "Concierge de luxo"],
    isFeatured: true,
  }
];

// Utility functions
function formatPrice(price, currency) {
  const numPrice = parseInt(price);
  if (currency === 'USD') {
    return '$' + numPrice.toLocaleString('en-US');
  } else {
    return 'R$ ' + numPrice.toLocaleString('pt-BR');
  }
}

function formatArea(area) {
  return area + 'm²';
}

function getPropertyTypeLabel(type) {
  const labels = {
    apartment: 'Apartamento',
    house: 'Casa',
    penthouse: 'Cobertura',
    mansion: 'Mansão',
    loft: 'Loft',
    villa: 'Villa'
  };
  return labels[type] || type;
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { propertiesData, formatPrice, formatArea, getPropertyTypeLabel };
}