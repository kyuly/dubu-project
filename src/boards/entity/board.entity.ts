import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  no: number;

  @Column()
  title: string;

  @Column()
  weight: number;

  @Column()
  isEyeSymptom: boolean;

  @Column()
  isNeuroticSymptom: boolean;

  @Column()
  kologramPerDose: number;

  @Column()
  useMedBrand: string;

  @Column()
  useMedDose: number;

  @Column()
  realInjectDose: number;

  @Column()
  injectionLocation: string;

  @Column()
  description: string;
}
