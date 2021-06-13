console.log('form.js')

import addMessage, { resetError as resetMessage, renderDiff } from './common.js';
import { diffDates } from './calc';

const form = document.getElementById('dateForm');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  resetMessage();
  
  const formdata = new FormData(evt.target);
  let date1 = formdata.get('date1');
  let date2 = formdata.get('date2');
  
  if (!date1 || !date2) {
   addMessage('Ошибка');
  } else {
    if (date1 > date2) {
      [date2, date1] = [date1, date2];
    }
    const result = diffDates(date1, date2);
    renderDiff(result);
  }
  
})