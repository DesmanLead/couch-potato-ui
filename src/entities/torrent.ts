
export default interface ITorrent {
    id: string;
    status: string;
    link: string;
    name: string;
    updateDate: string;
    errorText?: string;
}