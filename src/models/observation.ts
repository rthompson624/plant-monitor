export interface PlantObservation {
  id: string;
  type: PlantType;
  date: string;
  budQuality: QualityRating;
  stemQuality: QualityRating;
  leafQuality: QualityRating;
  overallQuality: QualityRating;
  photoData: string;
}

export type PlantType = 'arugula' | 'kale' | 'basil';

export type QualityRating = 'poor' | 'average' | 'excellent';
