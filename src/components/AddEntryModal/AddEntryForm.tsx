import { useState, SyntheticEvent } from "react";
import { EntryWithoutId } from '../../types';
import {  TextField, InputLabel, MenuItem, Select, Grid, Button, SelectChangeEvent } from '@mui/material';

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryWithoutId) => void;
}

const AddEntryForm = () => {
  return (
    <div>

    </div>
  )
}

export default AddEntryForm;