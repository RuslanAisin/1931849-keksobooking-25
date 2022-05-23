import { offers } from './data.js';
import { renderCard } from './offer-card.js';
import { setActiveState, setInactiveState } from './form.js';
import {} from './map.js';

const map = document.querySelector('.map__canvas');
map.appendChild(renderCard(offers[1]));

setInactiveState();
setActiveState();
