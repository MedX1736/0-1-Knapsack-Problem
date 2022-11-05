import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import BackpackIcon from '@mui/icons-material/Backpack';
import { useDispatch } from 'react-redux';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider(props) {
    const [value, setValue] = React.useState (
        30,     
  );

  const dispatch = useDispatch();
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        dispatch({type:'UPDATE',weight :newValue})
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        dispatch({type:'UPDATE',weight : Number(event.target.value)})
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };


    return (
        <Box sx={{ width: 450 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                <h3>Capacité Max</h3>
                </Grid>
                <Grid item>
                    <BackpackIcon style={{color : 'white'}} />
                </Grid>
                <Grid item xs>
                    <Slider
                        style = {{color : 'white'}}
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                     style = {{color : 'white'}}
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,   
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
