import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  injectTime: Date;
  @IsNotEmpty()
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
