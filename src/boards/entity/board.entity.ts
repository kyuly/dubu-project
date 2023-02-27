import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  title: string;

  @Column()
  injectTime: Date;

  @Column()
  weight: number;

  @Column()
  isEyeSymptom: boolean;

  @Column()
  isNeuroticSymptom: boolean;

  @Column()
  medType: string;

  @Column()
  kilogramPerDose: number;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
