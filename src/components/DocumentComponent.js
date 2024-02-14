import React from 'react'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import docimg from '../images/pan_card.webp'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const DocumentComponent = () => {
    const rootRef = React.useRef(null);
    const [value, setValue] = React.useState("");
    const characterLimit = 10;
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Box
                sx={{
                    height: 600,
                    flexGrow: 1,
                    minWidth: 300,
                    transform: 'translateZ(0)',
                    // The position fixed scoping doesn't work in IE11.
                    // Disable this demo to preserve the others.
                    '@media all and (-ms-high-contrast: none)': {
                        display: 'none',
                    },
                }}
                ref={rootRef}
            >
                <Modal
                    disablePortal
                    disableEnforceFocus
                    disableAutoFocus
                    open
                    aria-labelledby="server-modal-title"
                    aria-describedby="server-modal-description"
                    sx={{
                        display: 'flex',
                        p: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}
                    container={() => rootRef.current}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: 550,
                            bgcolor: 'background.paper',
                            boxShadow: (theme) => theme.shadows[5],
                            p: 2,
                            borderRadius:'10px'
                        }}
                    >
                        <div>
                            <div style={{ position: 'absolute', top: '0px', right: '0px', zIndex: 1 }}>
                                <IconButton aria-label="delete" >
                                    <CloseIcon />
                                </IconButton>
                            </div>

                            <div>
                                <div>
                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        <ListItem alignItems="flex-start" sx={{ padding: '0px' }}>
                                            <ListItemAvatar>
                                                <IconButton aria-label="delete" color='primary'>
                                                <AdminPanelSettingsIcon style={{fontSize:'40px'}} />
                                                </IconButton>
                                            </ListItemAvatar>
                                            <ListItemText
                                                style={{paddingTop:'8px'}}
                                                primary="PAN Verification"
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline', color: 'grey' }}
                                                            component="span"
                                                            variant="body2"

                                                        >
                                                            As per regulations, it is manditory to verify your PAN details
                                                        </Typography>

                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>

                                    </List>
                                </div>
                            </div>
                        </div>
                        <Box className='mainContainer'>
                        <Grid container rowSpacing={1} >
                            <Grid item xs={12} sm={6} sx={{width:'100%'}} className='docContainer'>
                               <img src={docimg}  alt=''  className='panImg' />
                            </Grid>
                            <Grid item xs={12} sm={5}  className='inputContainer'>
                                <TextField id="outlined-basic" label="Enter 10-dight PAN" variant="outlined" size='small' inputProps={{ maxLength: 10 }} className='customInput'
                                 helperText={`${value.length}/${characterLimit}`}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiFormHelperText-root': {
                                      position: 'absolute',
                                      top: '20px', // Adjust as needed
                                      right: '0px', // Adjust as needed
                                      transform: 'translateY(100%)', // Adjust as needed
                                    },
                                  }}
                                />
                                <Button variant="contained"  style={{width:'100%',marginTop:'96px',color:'white',backgroundColor:value.length===10 ? '#9ab352' : '#cccccc'}} disabled={value.length===10 ? false : true}>
                               Verify
                                </Button>
                            </Grid>   
                        </Grid>
                        </Box>
                    </Box>
                </Modal>
            </Box>
        </div>
    )
}

export default DocumentComponent