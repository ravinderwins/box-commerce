export interface CurrencyConversionForm {
    fromCurrency: string;
    fromAmount: number;
    toCurrency: string;
    toAmount: number;
    dateTime?: Date;
}