// // AddModal.tsx
// import React, { useState } from 'react';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// import { Records } from '../../interfaces/Records';

// interface AddModalProps {
//   onClose: () => void;
//   onSubmit: (newRecord: Records) => void;
// }

// const AddModal: React.FC<AddModalProps> = ({ onClose, onSubmit }) => {
//   const [newRecord, setNewRecord] = useState<Records>({
//     id: '',
//     description: '',
//     date: '',
//     time: '',
//     location: '',
//     type: '',   

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewRecord({ ...newRecord, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = () => {
//     onSubmit(newRecord);
//     onClose();
//   };

//   return (: any
//     <Dialog: any open: any onClose={onClose}>
//       <DialogTitle>Add New Record</DialogTitle>
//       <DialogContent>
//         {/* Add input fields for all required fields */}
//         <TextField
//           label="Name"
//           name="name"
//           value={newRecord.name}
//           onChange={handleChange}
//           fullWidth
//         />
//         {/* ... other fields */}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={handleSubmit} variant="contained" color="primary">
//           Add
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddModal;