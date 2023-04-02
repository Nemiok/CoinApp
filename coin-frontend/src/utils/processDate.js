
const processDate = (date) => {
  const D = new Date(date)

  const DDay = D.getDate();
  const DMonth = D.getMonth() + 1;
  const DYear = D.getFullYear();

  const DMonthName = new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D).slice().at(-1) === 'т' ?
    (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D)) + 'а' :
    (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(D)).slice(0, -1) + 'я';

  return {
    DDay,
    DMonth,
    DYear,
    DMonthName,
  }
}

export default processDate