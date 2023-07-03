import { Patient } from '../../types';

interface Prop {
  patient: Patient | null | undefined
}

const PatientInfoPage = ({patient}: Prop) => {
  if (!patient || patient === undefined) {
    return <div>Patient not found</div>
  }
  return(
    <div>
      <h3>{patient.name}</h3>
    </div>
  )
};

export default PatientInfoPage;