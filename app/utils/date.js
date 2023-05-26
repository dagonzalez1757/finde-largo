import dayjs from 'dayjs';

export const getTodayObject = () => new Date(new Date().toLocaleString("en-US", { timeZone: 'America/Argentina/Buenos_Aires' }));
export const getDateObjectFromYYYYMMDD = (dateString) => dayjs(dateString).toDate();
export const getDaysBetweenDates = (date1, date2) => Math.round(Math.abs(dayjs(date1.setHours(0,0,0,0)).diff(dayjs(date2.setHours(0,0,0,0)), 'day')));

export const formatDateToYYYYMMDD = (date) => dayjs(date).format('YYYY/MM/DD');
export const formatDateLongText = (date) => {
    const formattedDate = dayjs(date).format('dddd, LL');
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export const isDateOnWeekend = (date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 6 || dayOfWeek === 0;
}
