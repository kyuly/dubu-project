import { IsNotEmpty } from 'class-validator';

export class UpdateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  injectTime: Date;
  weight: number;
  isEyeSymptom: boolean;
  isNeuroticSymptom: boolean;
  @IsNotEmpty()
  medType: string;
  kilogramPerDose: number;
  useMedBrand: string;
  useMedDose: number;
  @IsNotEmpty()
  realInjectDose: number;
  injectionLocation: string;
  description: string;
}
