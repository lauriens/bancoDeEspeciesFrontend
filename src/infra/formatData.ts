import dayjs, { Dayjs } from "dayjs"
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export const formatDate = (date: string) => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    return dayjs.tz(date, 'America/Sao_Paulo').format('DD/MM/YYYY')
}

export const formatTime = (time: string) => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    return dayjs.tz(time, 'America/Sao_Paulo').format('HH:mm')
}

export const formatForSavingDate = (date: Dayjs) => {
    if (!!date) {
        dayjs.extend(utc)
        return date.utc(true).format('YYYY-MM-DD')
    }
    else return null
}

export const formatForSavingTime = (time: Dayjs) => {
    if (!!time) {
        dayjs.extend(utc)
        return time.utc(true).format('YYYY-MM-DDTHH:mm')
    }
    else return null
}