/* COULEUR DEFINIES POUR LE JAVASCRIPT */
window.HOP_COLORS = {
  couleur_AF: '#051039',
  couleur_HOP: '#f00500',
  blanc: '#ffffff',
  gris-clair : '#f4f4f4',

  couleur_HOP_CP1: '#FFB500',
  couleur_HOP_CP1_CA1: '#FFCE00',
  couleur_HOP_CP1_CA2: '#FFE805',
  couleur_HOP_CP1_CA3: '#FF8811',

  couleur_HOP_CP2: '#7AB800',
  couleur_HOP_CP2_CA1: '#B9D300',
  couleur_HOP_CP2_CA2: '#E1E400',
  couleur_HOP_CP2_CA3: '#55BE47',

  couleur_HOP_CP3: '#00B09D',
  couleur_HOP_CP3_CA1: '#00BAB9',
  couleur_HOP_CP3_CA2: '#3FB6D2',
  couleur_HOP_CP3_CA3: '#00AE68',

  couleur_HOP_CP4: '#0061CE',
  couleur_HOP_CP4_CA1: '#2986E8',
  couleur_HOP_CP4_CA2: '#00A7E3',
  couleur_HOP_CP4_CA3: '#4242D0',

  couleur_HOP_CP5: '#793AAD',
  couleur_HOP_CP5_CA1: '#962399',
  couleur_HOP_CP5_CA2: '#BB23A0',
  couleur_HOP_CP5_CA3: '#6023C2'
};

/* COULEUR REDEFINIES POUR LE CSS */
Object.entries(window.HOP_COLORS).forEach(([key, value]) => {
  document.documentElement.style.setProperty(`--${key}`, value);
});
