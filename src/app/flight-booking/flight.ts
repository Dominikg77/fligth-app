export interface Flight{
    id: number;
    from: string;
    to: string;
    date: string; // ISO Datum
    delayed?: boolean;

    distance?: number;
    calcPrice?(): number

}
