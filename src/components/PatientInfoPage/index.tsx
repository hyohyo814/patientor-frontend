import { Patient, Diagnose, HealthCheckRating, Entry } from '../../types';
import { Male, Female, Transgender } from '@mui/icons-material';
import { List, ListItemText, ListItem, Box, Typography } from '@mui/material';

interface Prop {
  patient: Patient | null | undefined;
  diagnoses: Diagnose[] | null;
}

const PatientInfoPage = ({ patient, diagnoses }: Prop) => {
  if (!patient || patient === undefined) {
    return <div>Patient not found</div>;
  }

  const genderIcon = () => {
    switch (patient.gender) {
      case 'female':
        return <Female />;
      case 'male':
        return <Male />;
      case 'other':
        return <Transgender />;
      default:
        return null;
    }
  };

  const matchDiagnosis = (code: string) => {
    if (!diagnoses || diagnoses === undefined) {
      console.log('loading diagnoses...');
      return null;
    }
    if (
      diagnoses !== undefined &&
      diagnoses.map((c) => c.code).includes(code)
    ) {
      return diagnoses.map((v) =>
        v.code === code ? <Typography key={v.code}>{v.name}</Typography> : null
      );
    }
    return null;
  };

  const entriesInfo = () => {
    return patient.entries.map((v) => (
      <Box
        key={v.id}
        sx={{
          border: 1,
          borderRadius: 2,
          mt: 2,
        }}>
        <List>
          <ListItem>
            <ListItemText sx={{ mb: -2}}>{v.date}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{v.description}</ListItemText>
          </ListItem>
          {v.diagnosisCodes?.map((c, k) => (
            <ListItem key={k}>
              <ListItemText sx={{
                mb: 0,
                mt: -1,
                ml: 2,
                fontStyle: 'italic',
                fontWeight: 800
              }}>{matchDiagnosis(c)}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    ));
  };

  return (
    <div>
      <Box
        sx={{
          mt: 2,
        }}>
        <Typography
          variant="h4"
          mb="12px"
          fontWeight='400'>
          {patient.name} {genderIcon()}
        </Typography>
        <Typography variant="body1">ssn: {patient.ssn}</Typography>
        <Typography variant="body1">
          occupation: {patient.occupation}
        </Typography>
        <Typography
          variant="h6"
          mt="16px"
          fontWeight='350'>
          entries
        </Typography>
      </Box>
      {entriesInfo()}
    </div>
  );
};

export default PatientInfoPage;
