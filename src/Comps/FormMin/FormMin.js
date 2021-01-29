import React, { useContext } from 'react';
import FirstStep from '../FirstStep/FirstStep';
import {StepLabel,  Stepper, Step} from '@material-ui/core'
import {multiStepContext} from '../StepContext/StepContext'
import Header from '../Header/Header';
import VehicleDescrition from '../VehicleDescrition/VehicleDescrition';


const FormMin = () => {
    const {currentStep,setStep, finalData, setUserData, userData} = useContext(multiStepContext);
    const handleBlur = e =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e =>{

        console.log(userData);
        setUserData('')
        setStep(1)
    }

    function showStep(step){
        switch(step){
            case 1:
                return <FirstStep handleBlur={handleBlur}/>
            case 2:
                return <VehicleDescrition handleBlur={handleBlur} handleSubmit={handleSubmit}/>
            
        }
    }

    return (
        <>
            <Header/>
            <Stepper style={{width: '40%', margin: "0 auto"}} activeStep={currentStep - 1} orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            {showStep(currentStep)}
        </>
    );
};

export default FormMin;