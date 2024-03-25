export function formattedDateNow(date?: Date) {
    const currentDate = !date ? new Date : new Date(date)
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const day = currentDate.getDate()

    return `${year}-${month}-${day}`

}