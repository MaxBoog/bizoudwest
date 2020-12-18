export default function FormattedDate({ dateString }) {

    const newDate = new Date(dateString)

    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
}