import Link from "next/link";
import {
    getTodayObject,
    getDateObjectFromYYYYMMDD,
    formatDateLongText,
    formatDateToYYYYMMDD,
} from "../utils/date";
import {
    API_URL,
    getData,
} from "../utils/connection";

const NextLongWeekends = async () => {
    const data = await getData(`${API_URL}/api/next-long-weekends?from=${formatDateToYYYYMMDD(getTodayObject())}`);

    return (
        <main>
            <header>
                <h1>Próximos findes largos</h1>
                <Link href="/">Volver</Link>
            </header>
            <ul>
                {
                    data?.longWeekends?.map((weekend, indexWeekend) => {
                        return (
                            <li key={indexWeekend}>
                                <ul>
                                    <p>{`En ${weekend.daysUntil} días`}</p>
                                    {
                                        weekend.holidays.map((day, indexHoliday) => {
                                            return (
                                                <div key={indexHoliday}>
                                                    <p>{formatDateLongText(getDateObjectFromYYYYMMDD(day.date))}</p>
                                                    <p>{day.description}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    <br />
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default NextLongWeekends;