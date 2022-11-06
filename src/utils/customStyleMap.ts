import theme from '../theme'

export const customStyle = [
    {
      // O MAPA EM SI
      elementType: 'geometry',
      stylers: [
        {
          color: theme.COLORS.PRIMARY,
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#fff',
        },
      ],
    },
    {
      // O BACKGROUND EM VOLTA DOS NOMES NO MAPA
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: theme.COLORS.TEXT,
        },
      ],
    },
    {
      // O NOME DA CIDADE
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: theme.COLORS.YELLOW,
        },
      ],
    },
    {
      // A COR DOS NOMES DOS LUGARES NO MAPA  
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: theme.COLORS.WHITE_600,
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#3f2626',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6b9a76',
        },
      ],
    },
    {
      // COR DAS LINHAS NO MAPA
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
            color: theme.COLORS.TEXT_OPACITY,
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
            color: theme.COLORS.TEXT_OPACITY,
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
            color: theme.COLORS.TEXT_OPACITY,
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
            color: theme.COLORS.TEXT_OPACITY,
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
];

