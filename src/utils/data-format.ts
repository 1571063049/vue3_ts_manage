import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const DATA_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUTCString(
  utcString: string,
  format: string = DATA_TIME_FORMAT
) {
  return dayjs(utcString).format(format)
}

export function formatTimestampString(
  time: number,
  format: string = DATA_TIME_FORMAT
) {
  return dayjs(time).utcOffset(8).format(format)
}
