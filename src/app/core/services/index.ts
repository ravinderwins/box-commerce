import { CurrencyConverterService } from './currency-converter.service';
import { UnitsConverterService } from './units-converter.service';

export const services = [
    CurrencyConverterService,
    UnitsConverterService
];

export * from './currency-converter.service';
export * from './units-converter.service';