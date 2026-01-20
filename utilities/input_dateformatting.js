function dateformatting(input_startdate, input_enddate){
  const startdateISO = INPUTS[input_startdate];
  const enddateISO = INPUTS[input_enddate];  
  
  const startdate = new Date(startdateISO);
  const enddate = new Date(enddateISO);
  
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const startdateFr = new Intl.DateTimeFormat('fr-FR', options).format(startdate);
  const enddateFr = new Intl.DateTimeFormat('fr-FR', options).format(enddate);

  return [startdateFr, enddateFr];
}
