import { offers } from './data.js';
import { renderCard } from './offer-card.js';

const map = document.querySelector('.map');
map.appendChild(renderCard(offers[1]));
