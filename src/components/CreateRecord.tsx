import React from 'react';
import { PlantObservation, PlantType, QualityRating } from '../models/observation';
import { HiCamera } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export interface ICreateRecordProps {
  setObservations: React.Dispatch<React.SetStateAction<PlantObservation[]>>
}

export function CreateRecord (props: ICreateRecordProps) {
  const [cameraFile, setCameraFile] = React.useState<File>();
  const [cameraFileBase64, setCameraFileBase64] = React.useState<string>('');
  const [plantType, setPlantType] = React.useState<PlantType>('arugula');
  const [budQuality, setBudQuality] = React.useState<QualityRating>('poor');
  const [stemQuality, setStemQuality] = React.useState<QualityRating>('poor');
  const [leafQuality, setLeafQuality] = React.useState<QualityRating>('poor');
  const [overallQuality, setOverallQuality] = React.useState<QualityRating>('poor');
  const navigate = useNavigate();

  function cameraFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const newCameraFile = event.target.files[0];
      setCameraFile(newCameraFile);
      if (newCameraFile) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          setCameraFileBase64(reader.result as string);
        });
        reader.readAsDataURL(newCameraFile);
      }
      }
  }

  function createObservation() {
    if (cameraFile) {
      const observation: PlantObservation = {
        id: uuid(),
        type: plantType,
        date: new Date().toISOString().slice(0, 19) + 'Z',
        budQuality,
        stemQuality,
        leafQuality,
        overallQuality,
        photoData: cameraFileBase64
      };
      props.setObservations(observations => {
        return [
          ...observations,
          observation
        ];
      });
      navigate("/", { replace: true });
    }

  }

  return (
    <div>
      <div className='p-2 mt-5 flex flex-col items-center'>
        { cameraFile
          ?
            <img className='w-64' src={ window.URL.createObjectURL(cameraFile) } />
          :
            <label htmlFor='cameraFileInput'>
              <div className='border-2 rounded-md w-64 h-80 flex flex-col items-center justify-center'>
                <HiCamera className='text-3xl cursor-pointer' />
              </div>
              <input
                onChange={ (event) => cameraFileInputChange(event) }
                id='cameraFileInput'
                type='file'
                accept='image/*'
                capture='environment'
                className='hidden'
              />
            </label>
        }
        <label className='mt-5 text-lg font-mono'>
          Plant:
          <select value={ plantType } onChange={ (event) => setPlantType(event.target.value as PlantType) } className='ml-2 border-2 rounded h-8 w-28'>
            <option value='arugula'>Arugula</option>
            <option value='kale'>Kale</option>
            <option value='basil'>Basil</option>
          </select>
        </label>
        <label className='mt-5 text-lg font-mono'>
          Bud Quality:
          <select value={ budQuality } onChange={ (event) => setBudQuality(event.target.value as QualityRating) } className='ml-2 border-2 rounded h-8 w-28'>
            <option value='poor'>Poor</option>
            <option value='average'>Average</option>
            <option value='excellent'>Excellent</option>
          </select>
        </label>
        <label className='mt-5 text-lg font-mono'>
          Stem Quality:
          <select value={ stemQuality } onChange={ (event) => setStemQuality(event.target.value as QualityRating) } className='ml-2 border-2 rounded h-8 w-28'>
            <option value='poor'>Poor</option>
            <option value='average'>Average</option>
            <option value='excellent'>Excellent</option>
          </select>
        </label>
        <label className='mt-5 text-lg font-mono'>
          Leaf Quality:
          <select value={ leafQuality } onChange={ (event) => setLeafQuality(event.target.value as QualityRating) } className='ml-2 border-2 rounded h-8 w-28'>
            <option value='poor'>Poor</option>
            <option value='average'>Average</option>
            <option value='excellent'>Excellent</option>
          </select>
        </label>
        <label className='mt-5 text-lg font-mono'>
          Overall Quality:
          <select value={ overallQuality } onChange={ (event) => setOverallQuality(event.target.value as QualityRating) } className='ml-2 border-2 rounded h-8 w-28'>
            <option value='poor'>Poor</option>
            <option value='average'>Average</option>
            <option value='excellent'>Excellent</option>
          </select>
        </label>
        <button onClick={ () => createObservation() } className='mt-5 px-4 py-1 text-sm text-white bg-purple-600 hover:bg-purple-800 border-transparent font-semibold rounded-full border border-purple-200  focus:outline-none'>Submit</button>
      </div>
    </div>
  );
}
