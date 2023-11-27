export const getTimeLeft = (date: string | Date) => {
    const convertedDate = new Date(date);
    const dateNow = new Date();

    const diff =  convertedDate.getTime() - dateNow.getTime()
    console.log(diff)

    const remainingSecs = Math.floor(diff / 1000);
    const remainingMins = Math.floor(remainingSecs / 60);
    const remainingHours = Math.floor(remainingMins / 60);

    const hours = remainingHours % 24 + "h : ";
    const mins = remainingMins % 60 + "m : ";
    const secs = remainingSecs % 60 + "s";

    return  hours + mins  +  secs
}