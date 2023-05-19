import { NextResponse } from 'next/server';
import { getHolidaysInWorkDays } from '../getter';
import {
    getDateObjectFromYYYYMMDD,
    getDaysBetweenDates,
    formatDateToYYYYMMDD,
} from '@/app/utils/date';

export async function GET() {
    const nextHoliday = getHolidaysInWorkDays()
        .find(item => {
            const dateToCompare = getDateObjectFromYYYYMMDD(item.date).setHours(0, 0, 0, 0);
            const today = (new Date()).setHours(0, 0, 0, 0);

            return dateToCompare >= today;
        });

    if (!nextHoliday) {
        return new Response(
            'Next holiday not found',
            {
                status: 404,
            });
    }

    const daysUntilHoliday = getDaysBetweenDates(new Date(), getDateObjectFromYYYYMMDD(nextHoliday?.date));

    return NextResponse.json({
        daysUntilHoliday,
        date: formatDateToYYYYMMDD(nextHoliday.date),
        description: nextHoliday.description,
    });
}