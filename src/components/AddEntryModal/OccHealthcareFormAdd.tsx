import {
  TextField,
  InputLabel,
} from '@mui/material';

interface Props {
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setEmployerName: React.Dispatch<React.SetStateAction<string>>;
}

const OccHealthcareFormAdd = ({
  setEmployerName,
  setStartDate,
  setEndDate,
}: Props) => {
  return (
    <div>
      <TextField
        sx={{
          mb: '14px',
        }}
        label="Employer name"
        fullWidth
        onChange={({ target }) => setEmployerName(target.value)}
      />
      <InputLabel>Sick Leave</InputLabel>
      <TextField
        sx={{
          mb: '14px',
        }}
        label="Start Date"
        placeholder="YYYY-MM-DD"
        fullWidth
        onChange={({ target }) => setStartDate(target.value)}
      />
      <TextField
        sx={{
          mb: '14px',
        }}
        label="End Date"
        placeholder="YYYY-MM-DD"
        fullWidth
        onChange={({ target }) => setEndDate(target.value)}
      />
    </div>
  );
};

export default OccHealthcareFormAdd;
