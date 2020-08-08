export interface Weather{
    name ?: string;
    cod ?: number;
    icon ?: string;
    description ?: string;
    temp ?: number;
    main ?: string;
    minMaxTemp ?: MinMaxInterface;
    moreData ?: MoreData;
}

interface MinMaxInterface{
    date ?: number;
    day ?: number;
    month ?: number;
    year ?: number;
    min ?: number;
    max ?: number;
}

interface MoreData{
    wind ?: number;
}