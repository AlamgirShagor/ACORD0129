import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const FirstStep = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
            <div className="row d-flex justify-content-end">
                    <div className="col-6">
                        <div className="row ">
                            <div className="col-4">
                                <label htmlFor="">AGENCY CUSTOMER ID:</label>
                            </div>
                            <div className="col-8">
                                <input
                                 type="text"
                                 placeholder="AGENCY"
                                 onChange={handleBlur}
                                 name="AGENCY"
                                 className="form-control"
                                 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-5">
                            <input
                                type="text"
                                placeholder="AGENCY"
                                onChange={handleBlur}
                                name="AGENCY"
                                className="form-control"
                            />
                    </div>
                    <div className="col-5">
                            <input
                                type="text"
                                placeholder="AGENCY"
                                onChange={handleBlur}
                                name="AGENCY"
                                className="form-control"
                            />
                    </div>
                    <div className="col-2">
                            <input
                                type="text"
                                placeholder="NAIC CODE"
                                onChange={handleBlur}
                                name="NAIC CODE"
                                className="form-control"
                            />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-5">
                            <input
                                type="text"
                                placeholder="POLICY NUMBER"
                                onChange={handleBlur}
                                name="POLICY NUMBER"
                                className="form-control"
                            />
                    </div>
                    <div className="col-2">
                            <input
                                type="date"
                                placeholder="EFFECTIVE DATE"
                                onChange={handleBlur}
                                name="EFFECTIVE DATE"
                                className="form-control"
                            />
                    </div>
                    <div className="col-5">
                            <input
                                type="text"
                                placeholder="NAMED INSURED / APPLICANT"
                                onChange={handleBlur}
                                name="NAMED INSURED / APPLICANT"
                                className="form-control"
                            />
                    </div>
                </div>
                
                <button onClick={()=>setStep(2) } className="btn btn-success ml-auto" style={{width: "100px"}} >Next</button>
            </form>
        </div>
    );
};

export default FirstStep;