import { Box, Modal } from '@mui/material';

interface PageContentBaseProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalBase = ({ children, open, onClose }: PageContentBaseProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box display='flex' alignItems='center' flexDirection='column' sx={style}>
        {children}
      </Box>
    </Modal>
  );
};