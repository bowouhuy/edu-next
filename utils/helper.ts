//helper function can use globally


export default function formatPrice(price: number) {
    return "Rp. "+price.toLocaleString('id-ID');
}

export function formatDate(date: string) {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(date).toLocaleDateString('id-ID', options).split('/').join('-');
}

export const getMonthName = (month: number): string => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month - 1] || '';
};