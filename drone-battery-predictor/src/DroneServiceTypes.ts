/* DroneServiceTypes.ts */
export interface DroneService {
  id: number;
  name: string;
  description: string;
  image?: string;
  power_multiplier?: number;
}
