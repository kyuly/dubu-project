export interface UpdateBoard {
  idx: number;
  title: string;
  injectTime: Date;
  weight: number;
  isEyeSymptom: boolean;
  isNeuroticSymptom: boolean;
  medType: string;
  kilogramPerDose: number;
  useMedBrand: string;
  useMedDose: number;
  realInjectDose: number;
  injectionLocation: string;
  description: string;
}
