export interface IsdaRateData {
  currency?: string;
  effectiveAsOf?: string;
  calendar?: string;
  snapTime?: Date;
  spotDate?: string;
  maturity?: string;
  dayCountConvention?: string;
  fixedDayCountConvention?: string;
  floatingPaymentFrequency?: string;
  fixedPaymentFrequency?: string;
  tenor?: string;
  rate?: string;
}