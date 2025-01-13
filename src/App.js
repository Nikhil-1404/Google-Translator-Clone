import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Google Translator 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit">Sign In</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
