import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Box from "@material-ui/core/Box";


function App() {
    const [fromPrevious, setFromPrevious] = useState(false);
    const [emergency, setEmergency] = useState("29");
    const [age, setAge] = useState("10");
    const[change, handleChange] = useState(0)
    const[change1, handleChange1] = useState(0)
    const [submit, setSubmit] = useState(false);
    const [submit1, setSubmit1] = useState(false);
    const [submit2, setSubmit2] = useState(false);
    const [travel, setTravel] = useState(false);
    const [exposure, setExposure] = useState(false);


    const nextStep = () => {
        if (fromPrevious === true) {
            return (
                <form>
                    <h1>Is this an emergency?</h1>
                    <p>Stop and call 911 if you are experiencing:</p>
                    <ul>
                        <li>
                            Severe, constant chest pain or pressure
                        </li>
                        <li>
                            Extreme difficulty breathing
                        </li>
                        <li>
                            Severe, constant light-headedness
                        </li>
                        <li>
                            Serious disorientation or unresponsiveness
                        </li>
                    </ul>
                    <RadioGroup style={{ display: 'flex' }}>
                        <FormControlLabel value="true" control={<Radio />} label="Yes" onClick = {() => setEmergency(true)}/>
                        <FormControlLabel value="false" control={<Radio />} label="No" onClick = {() => setEmergency(false)}/>
                    </RadioGroup>
                    {nextStep1()}
                </form>
        );
        }
    };

    const nextStep1 = () => {
        if (emergency === true) {
            return (
                <div>
                    <h1>You should call 911 as soon as possible.</h1>
                    <p>Based on your current symptoms, seek immediate care at your nearest hospital.</p>
                    {nextStep2()}
                </div>
        );
        }
        else if (emergency === false) {
            return (
                <div>
                    <form>
                    <h1>How old are you?</h1>
                        <RadioGroup style={{ display: 'flex' }}>
                            <FormControlLabel value="18" control={<Radio />} label="Under 18" onClick = {() => setAge("18")}/>
                            <FormControlLabel value="64" control={<Radio />} label="Between 18 and 64" onClick = {() => setAge("64")}/>
                            <FormControlLabel value="65" control={<Radio />} label="65 or older" onClick = {() => setAge("65")}/>
                        </RadioGroup>
                    </form>
                    {nextStep2()}
                </div>
            );
        }
    };

    const nextStep2 = () => {
        if (age === "18") {
            return (
                <div>
                    <h3>This tool is intended only for people ages 18 and older.</h3>
                    <p>Visit the CDC site to get information about COVID‑19 and younger people.</p>
                    <a href = "https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fprepare%2Fchildren.html" target="_blank">Learn more at cdc.gov</a>
                </div>
            );
        }
        else if (age === "64") {
            return (
                <div>
                    <FormGroup>
                        <h1>Have you recently started experiencing any of these symptoms?</h1>
                        <FormControlLabel
                            control={<Checkbox  onChange= {() => handleChange( change+1)} name="fever" />}
                            label="Fever or chills"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="breathing" />}
                            label="Mild or moderate difficulty breathing"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="cough" />}
                            label="New or worsening cough"
                        />
                        <FormControlLabel
                            control={<Checkbox  onChange= {() => handleChange(change+1)} name="loss" />}
                            label="Sustained loss of smell, taste, or appetite"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="throat" />}
                            label="Sore throat"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="vomit" />}
                            label="Vomiting or diarrhea"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="ache" />}
                            label="Aching throughout the body"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(0)} name="none" />}
                            label="None of the above"
                        />
                        <Button variant="contained" color="primary" onClick = {() => setSubmit(true)}>Submit</Button>
                        {nextStep3()}
                    </FormGroup>
                </div>
            );
        }
        else if (age === "65") {
            return (
                <div>
                    <FormGroup>
                        <h1>Have you recently started experiencing any of these symptoms?</h1>
                        <FormControlLabel
                            control={<Checkbox  onChange= {() => handleChange(change+1)} name="fever" />}
                            label="Fever or chills"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="breathing" />}
                            label="Mild or moderate difficulty breathing"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="cough" />}
                            label="New or worsening cough"
                        />
                        <FormControlLabel
                            control={<Checkbox  onChange= {() => handleChange(change+1)} name="loss" />}
                            label="Sustained loss of smell, taste, or appetite"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="throat" />}
                            label="Sore throat"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="vomit" />}
                            label="Vomiting or diarrhea"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(change+1)} name="ache" />}
                            label="Aching throughout the body"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange(0)} name="none" />}
                            label="None of the above"
                        />
                        <Button variant="contained" color="primary" onClick = {() => setSubmit(true)}>Submit</Button>
                        {nextStep3()}
                    </FormGroup>
                </div>
            );
        }
    }

    const nextStep3 = () => {
        if(submit === true)
        {
            return(
                <div>
                    <FormGroup>
                        <h1>Do any of these apply to you?</h1>
                        <FormControlLabel
                            control={<Checkbox  onChange= {() => handleChange1(change1+1)} name="fever" />}
                            label="Moderate to severe asthma or chronic lung disease"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange1(change1+1)} name="breathing" />}
                            label="Cancer treatment or medicines causing immune suppression"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange1(change1+1)} name="cough" />}
                            label="Inherited immune system deficiencies or HIV"
                        />
                        <FormControlLabel
                            control={<Checkbox  onChange= {() => handleChange1(change1+1)} name="loss" />}
                            label="Serious heart conditions, such as heart failure or prior heart attack"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange1(change1+1)} name="throat" />}
                            label="Diabetes with complications"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange1(change1+1)} name="vomit" />}
                            label="Kidney failure that needs dialysis"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange1(change1+1)} name="ache" />}
                            label="Cirrhosis of the liver"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange1(change1+1)} name="ache" />}
                            label="Extreme Obesity"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange1(change1+1)} name="ache" />}
                            label="Pregnancy"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange= {() => handleChange1(0)} name="none" />}
                            label="None of the above"
                        />
                        <Button variant="contained" color="primary" onClick = {() => setSubmit1(true)}>Submit</Button>
                        {nextStep4()}
                    </FormGroup>
                </div>
            );
        }
    }

    const nextStep4 = () => {
        if (submit1 === true){
            return(
                <div>
                    <form>
                        <h1>In the last 14 days, have you traveled internationally?</h1>
                        <RadioGroup style={{ display: 'flex' }}>
                            <FormControlLabel value="true" control={<Radio />} label="I have traveled internationally" onClick = {() => setTravel(true)}/>
                            <FormControlLabel value="false" control={<Radio />} label="I have not traveled internationally" onClick = {() => setTravel(false)}/>
                        </RadioGroup>
                    </form>
                    {nextStep5()}
                </div>
            );
        }
    }

    const nextStep5 = () => {
        return(
            <div>
                <FormGroup>
                    <h1>In the last 14 days, what is your exposure to others who are known to have COVID‑19?</h1>
                    <FormControlLabel
                        control={<Checkbox  onChange= {() => setExposure(true)} name="live" />}
                        label="I live with someone who has COVID-19"
                    />
                    <FormControlLabel
                        control={<Checkbox onChange= {() => setExposure(true)} name="close" />}
                        label="I've had close contact with someone who has COVID-19"
                    />
                    <FormControlLabel
                        control={<Checkbox onChange= {() => setExposure(true)} name="near" />}
                        label="I've been near someone who has COVID-19"
                    />
                    <FormControlLabel
                        control={<Checkbox  onChange= {() => setExposure(false)} name="none" />}
                        label="I've had no exposure"
                    />
                    <FormControlLabel
                        control={<Checkbox onChange= {() => setExposure(false)} name="idk" />}
                        label="I don't know"
                    />
                    <Button variant="contained" color="primary" onClick = {() => setSubmit2(true)}>See Results</Button>
                    {results()}
                </FormGroup>
            </div>
        );
    }

    const results = () => {
        if(submit2 === true & (change+change1) > 10) {
            return (
                <Box border={5}>
                <div>
                <div style = {{fontWeight: 'bold'}}>
                    <h1>Contact Your Facility’s Care Team.</h1>
                </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px', backgroundColor: 'white'}}>
                        <p>Based on your answers, you should discuss your symptoms with the doctor or care team in charge at your facility.</p>
                    </div>
                </div>
                </Box>
            );
        }
        if(submit2 === true & (change+change1) > 8) {
            return (
                <Box border={5}>
                <div>
                <div style = {{fontWeight: 'bold'}}>
                    <h1>Isolate from others.</h1>
                </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px', backgroundColor: 'white'}}>
                        <p>You should limit your contact with others including those in your home. If you can, have a room and bathroom that’s just for you.</p>
                    </div>
                </div>
                </Box>
            );
        }
        if(submit2 === true & (change+change1) < 8 & (exposure === true | travel === true)) {
            return(
                <Box border={5}>
                    <div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px', backgroundColor: 'white', borderColor: 'black'}}>
                    <h1>You Should Self-Quarantine.</h1>
                </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px', backgroundColor: 'white'}}>
                        <p>You should stay at your facility for 14 days from the last exposure date, and see if any symptoms appear.</p>
                    </div>
                </div>
                </Box>
            );
        }
        if(submit2 === true & (change+change1)<8 & (exposure === false & travel === false))
        {
            return(
                <Box border={5}>
                <div>
                <div style = {{fontWeight: 'bold', backgroundColor: 'blue'}}>
                    <h1>You Should Practice Physical Distancing.</h1>
                </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px', backgroundColor: 'white'}}>
                        <p>You should avoid groups of people and stay six feet apart from anyone who’s not part of the household. Especially avoid those showing symptoms.</p>
                    </div>
                </div>
                </Box>
            );
        }
    }

        return (
        <div>
            <style>{'body { background-color: lightsteelblue; }'}</style>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px', backgroundColor: 'white'}}>
                <h1>Virtual COVID-19 Screening</h1>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100px'}}>
                <Button variant="contained" color="primary" onClick = {() => setFromPrevious(true)}>Start Screening</Button>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {nextStep()}
        </div>
        </div>
    );
}

export default App;