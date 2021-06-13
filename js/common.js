const message = document.querySelector('.message');

export default function renderError(text) {
  message.textContent = text;
}

export function resetError() {
  message.textContent = '';
}

export function renderDiff() {
  message.textContent = `<span>
    Года: ${diff.years}
    Месяца: ${diff.months}
    Дни: ${diff.days}
</span>`
}
