import { atom } from 'recoil';

export const SimulationAmount = atom<number>({
  key: 'SimulationAmount',
  default: 100,
});
