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
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
    </div>
  )
};

export default PatientInfoPage;