import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const VehicleDescrition = ({handleBlur,handleSubmit}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>VEHICLE DESCRIPTION</h5>
                    </div>
                </div>
                <div className="row border">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>VEH #</label>
                                <input type="text" className="form-control" name="VEh" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>YEAR</label>
                                <input type="text" className="form-control" name="YEAR" onChange={handleBlur}/>
                            </div>
                            <div className="col-8">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MAKE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MODEL" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor=""  style={{fontSize: "10px"}} >BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="BODY TYPE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="V.I.N" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row text-center">
                                    <div className="col">
                                        <h6>VEHICLE TYPE</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="PP"
                                        class="custom-control-input"
                                        id="PP"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="SPEC"
                                        class="custom-control-input"
                                        id="SPEC"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="COML"
                                        class="custom-control-input"
                                        id="COML"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="COML">COML</label>
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="">SYM / AGE</label>
                                        <input type="text" className="form-control" name="SYM / AGE" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label style={{fontSize: "10px"}} htmlFor="">COMP / OTC SYM</label>
                                        <input type="text" className="form-control" name="COMP / OTC SYM" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="">COLL SYM</label>
                                        <input type="text" className="form-control" name="COLL SYM" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <label className="my-3" htmlFor="">GARAGING ADDRESS</label>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">STREET (Required in KY)</label>
                                <input type="text" className="form-control" name="STREET" onChange={handleBlur}/>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">CITY</label>
                                <input type="text" className="form-control" name="CITY" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="">COUNTY</label>
                                <input type="text" className="form-control" name="COUNTY" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">STATE</label>
                                <input type="text" className="form-control" name="STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">ZIP</label>
                                <input type="text" className="form-control" name="ZIP" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">LIC STATE</label>
                                <input type="text" className="form-control" name="LIC STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">TERR</label>
                                <input type="text" className="form-control" name="TERR" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">GVW / GCW</label>
                                <input type="text" className="form-control" name="GVW / GCW" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">CLASS</label>
                                <input type="text" className="form-control" name="CLASS" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SIC</label>
                                <input type="text" className="form-control" name="SIC" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">FACTOR</label>
                                <input type="text" className="form-control" name="FACTOR" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SEAT CP</label>
                                <input type="text" className="form-control" name="SEAT CP" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">RADIUS</label>
                                <input type="text" className="form-control" name="RADIUS" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="" style={{fontSize: "14px"}}>FARTHEST TERMINAL</label>
                                <input type="text" className="form-control" name="FARTHEST TERMINAL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">COST NEW</label>
                               
                                <label class="sr-only" for="COST NEW">COST NEW</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" class="form-control" id="COST NEW" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>

                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                            </div>
                                            <input type="text" class="form-control" id="COST NEW" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row border">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>VEH #</label>
                                <input type="text" className="form-control" name="VEh" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>YEAR</label>
                                <input type="text" className="form-control" name="YEAR" onChange={handleBlur}/>
                            </div>
                            <div className="col-8">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MAKE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MODEL" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor=""  style={{fontSize: "10px"}} >BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="BODY TYPE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="V.I.N" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row text-center">
                                    <div className="col">
                                        <h6>VEHICLE TYPE</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="PP"
                                        class="custom-control-input"
                                        id="PP"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="SPEC"
                                        class="custom-control-input"
                                        id="SPEC"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="COML"
                                        class="custom-control-input"
                                        id="COML"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="COML">COML</label>
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="">SYM / AGE</label>
                                        <input type="text" className="form-control" name="SYM / AGE" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label style={{fontSize: "10px"}} htmlFor="">COMP / OTC SYM</label>
                                        <input type="text" className="form-control" name="COMP / OTC SYM" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="">COLL SYM</label>
                                        <input type="text" className="form-control" name="COLL SYM" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <label className="my-3" htmlFor="">GARAGING ADDRESS</label>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">STREET (Required in KY)</label>
                                <input type="text" className="form-control" name="STREET" onChange={handleBlur}/>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">CITY</label>
                                <input type="text" className="form-control" name="CITY" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="">COUNTY</label>
                                <input type="text" className="form-control" name="COUNTY" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">STATE</label>
                                <input type="text" className="form-control" name="STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">ZIP</label>
                                <input type="text" className="form-control" name="ZIP" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">LIC STATE</label>
                                <input type="text" className="form-control" name="LIC STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">TERR</label>
                                <input type="text" className="form-control" name="TERR" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">GVW / GCW</label>
                                <input type="text" className="form-control" name="GVW / GCW" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">CLASS</label>
                                <input type="text" className="form-control" name="CLASS" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SIC</label>
                                <input type="text" className="form-control" name="SIC" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">FACTOR</label>
                                <input type="text" className="form-control" name="FACTOR" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SEAT CP</label>
                                <input type="text" className="form-control" name="SEAT CP" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">RADIUS</label>
                                <input type="text" className="form-control" name="RADIUS" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="" style={{fontSize: "14px"}}>FARTHEST TERMINAL</label>
                                <input type="text" className="form-control" name="FARTHEST TERMINAL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">COST NEW</label>
                               
                                <label class="sr-only" for="COST NEW">COST NEW</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" class="form-control" id="COST NEW" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>

                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                            </div>
                                            <input type="text" class="form-control" id="COST NEW" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row border">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>VEH #</label>
                                <input type="text" className="form-control" name="VEh" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>YEAR</label>
                                <input type="text" className="form-control" name="YEAR" onChange={handleBlur}/>
                            </div>
                            <div className="col-8">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MAKE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MODEL" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor=""  style={{fontSize: "10px"}} >BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="BODY TYPE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="V.I.N" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row text-center">
                                    <div className="col">
                                        <h6>VEHICLE TYPE</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="PP"
                                        class="custom-control-input"
                                        id="PP"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="SPEC"
                                        class="custom-control-input"
                                        id="SPEC"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="COML"
                                        class="custom-control-input"
                                        id="COML"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="COML">COML</label>
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="">SYM / AGE</label>
                                        <input type="text" className="form-control" name="SYM / AGE" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label style={{fontSize: "10px"}} htmlFor="">COMP / OTC SYM</label>
                                        <input type="text" className="form-control" name="COMP / OTC SYM" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="">COLL SYM</label>
                                        <input type="text" className="form-control" name="COLL SYM" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <label className="my-3" htmlFor="">GARAGING ADDRESS</label>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">STREET (Required in KY)</label>
                                <input type="text" className="form-control" name="STREET" onChange={handleBlur}/>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">CITY</label>
                                <input type="text" className="form-control" name="CITY" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="">COUNTY</label>
                                <input type="text" className="form-control" name="COUNTY" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">STATE</label>
                                <input type="text" className="form-control" name="STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">ZIP</label>
                                <input type="text" className="form-control" name="ZIP" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">LIC STATE</label>
                                <input type="text" className="form-control" name="LIC STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">TERR</label>
                                <input type="text" className="form-control" name="TERR" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">GVW / GCW</label>
                                <input type="text" className="form-control" name="GVW / GCW" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">CLASS</label>
                                <input type="text" className="form-control" name="CLASS" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SIC</label>
                                <input type="text" className="form-control" name="SIC" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">FACTOR</label>
                                <input type="text" className="form-control" name="FACTOR" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SEAT CP</label>
                                <input type="text" className="form-control" name="SEAT CP" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">RADIUS</label>
                                <input type="text" className="form-control" name="RADIUS" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="" style={{fontSize: "14px"}}>FARTHEST TERMINAL</label>
                                <input type="text" className="form-control" name="FARTHEST TERMINAL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">COST NEW</label>
                               
                                <label class="sr-only" for="COST NEW">COST NEW</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" class="form-control" id="COST NEW" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>

                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                            </div>
                                            <input type="text" class="form-control" id="COST NEW" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row border">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>VEH #</label>
                                <input type="text" className="form-control" name="VEh" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>YEAR</label>
                                <input type="text" className="form-control" name="YEAR" onChange={handleBlur}/>
                            </div>
                            <div className="col-8">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MAKE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MODEL" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor=""  style={{fontSize: "10px"}} >BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="BODY TYPE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="V.I.N" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row text-center">
                                    <div className="col">
                                        <h6>VEHICLE TYPE</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="PP"
                                        class="custom-control-input"
                                        id="PP"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="SPEC"
                                        class="custom-control-input"
                                        id="SPEC"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="COML"
                                        class="custom-control-input"
                                        id="COML"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="COML">COML</label>
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="">SYM / AGE</label>
                                        <input type="text" className="form-control" name="SYM / AGE" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label style={{fontSize: "10px"}} htmlFor="">COMP / OTC SYM</label>
                                        <input type="text" className="form-control" name="COMP / OTC SYM" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="">COLL SYM</label>
                                        <input type="text" className="form-control" name="COLL SYM" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <label className="my-3" htmlFor="">GARAGING ADDRESS</label>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">STREET (Required in KY)</label>
                                <input type="text" className="form-control" name="STREET" onChange={handleBlur}/>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">CITY</label>
                                <input type="text" className="form-control" name="CITY" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="">COUNTY</label>
                                <input type="text" className="form-control" name="COUNTY" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">STATE</label>
                                <input type="text" className="form-control" name="STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">ZIP</label>
                                <input type="text" className="form-control" name="ZIP" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">LIC STATE</label>
                                <input type="text" className="form-control" name="LIC STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">TERR</label>
                                <input type="text" className="form-control" name="TERR" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">GVW / GCW</label>
                                <input type="text" className="form-control" name="GVW / GCW" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">CLASS</label>
                                <input type="text" className="form-control" name="CLASS" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SIC</label>
                                <input type="text" className="form-control" name="SIC" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">FACTOR</label>
                                <input type="text" className="form-control" name="FACTOR" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SEAT CP</label>
                                <input type="text" className="form-control" name="SEAT CP" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">RADIUS</label>
                                <input type="text" className="form-control" name="RADIUS" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="" style={{fontSize: "14px"}}>FARTHEST TERMINAL</label>
                                <input type="text" className="form-control" name="FARTHEST TERMINAL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">COST NEW</label>
                               
                                <label class="sr-only" for="COST NEW">COST NEW</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" class="form-control" id="COST NEW" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>

                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                            </div>
                                            <input type="text" class="form-control" id="COST NEW" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row border">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>VEH #</label>
                                <input type="text" className="form-control" name="VEh" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center ">
                                <label htmlFor="" style={{fontSize: "13px"}}>YEAR</label>
                                <input type="text" className="form-control" name="YEAR" onChange={handleBlur}/>
                            </div>
                            <div className="col-8">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MAKE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MAKE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor="">MODEL:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="MODEL" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="row my-1">
                                    <div className="col-3">
                                        <label htmlFor=""  style={{fontSize: "10px"}} >BODY TYPE:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="BODY TYPE" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="">V.I.N.:</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" className="form-control" name="V.I.N" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row text-center">
                                    <div className="col">
                                        <h6>VEHICLE TYPE</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="PP"
                                        class="custom-control-input"
                                        id="PP"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="PP">PP</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="SPEC"
                                        class="custom-control-input"
                                        id="SPEC"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="SPEC">SPEC</label>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox">
                                        <input
                                        type="checkbox"
                                        name="COML"
                                        class="custom-control-input"
                                        id="COML"
                                        onChange={handleBlur}
                                        />
                                        <label class="custom-control-label" style={{fontSize: "13px"}} for="COML">COML</label>
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="">SYM / AGE</label>
                                        <input type="text" className="form-control" name="SYM / AGE" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label style={{fontSize: "10px"}} htmlFor="">COMP / OTC SYM</label>
                                        <input type="text" className="form-control" name="COMP / OTC SYM" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="">COLL SYM</label>
                                        <input type="text" className="form-control" name="COLL SYM" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <label className="my-3" htmlFor="">GARAGING ADDRESS</label>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">STREET (Required in KY)</label>
                                <input type="text" className="form-control" name="STREET" onChange={handleBlur}/>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">CITY</label>
                                <input type="text" className="form-control" name="CITY" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="">COUNTY</label>
                                <input type="text" className="form-control" name="COUNTY" onChange={handleBlur}/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">STATE</label>
                                <input type="text" className="form-control" name="STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">ZIP</label>
                                <input type="text" className="form-control" name="ZIP" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">LIC STATE</label>
                                <input type="text" className="form-control" name="LIC STATE" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">TERR</label>
                                <input type="text" className="form-control" name="TERR" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">GVW / GCW</label>
                                <input type="text" className="form-control" name="GVW / GCW" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">CLASS</label>
                                <input type="text" className="form-control" name="CLASS" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SIC</label>
                                <input type="text" className="form-control" name="SIC" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor="">FACTOR</label>
                                <input type="text" className="form-control" name="FACTOR" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SEAT CP</label>
                                <input type="text" className="form-control" name="SEAT CP" onChange={handleBlur}/>
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">RADIUS</label>
                                <input type="text" className="form-control" name="RADIUS" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="" style={{fontSize: "14px"}}>FARTHEST TERMINAL</label>
                                <input type="text" className="form-control" name="FARTHEST TERMINAL" onChange={handleBlur}/>
                            </div>
                            <div className="col-3 text-center">
                                <label htmlFor="">COST NEW</label>
                               
                                <label class="sr-only" for="COST NEW">COST NEW</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                    </div>
                                    <input type="text" class="form-control" id="COST NEW" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-4">
                                <h6>USE</h6>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="PLEASURE"
                            class="custom-control-input" 
                            id="PLEASURE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="PLEASURE">PLEASURE</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FARM"
                            class="custom-control-input" 
                            id="FARM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FARM">FARM</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="COMM"
                            class="custom-control-input" 
                            id="COMM"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="COMM">COMM</label>
                            </div>
                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="RETAIL"
                            class="custom-control-input" 
                            id="RETAIL"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                            </div>

                            <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="SERVICE"
                            class="custom-control-input" 
                            id="SERVICE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                            </div>
                                </div>
                                <div className="col-4">
                                <div class="custom-control custom-checkbox mt-2">
                            <input
                            type="checkbox"
                            name="FOR HIRE"
                            class="custom-control-input" 
                            id="FOR HIRE"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="FOR HIRE">FOR HIRE</label>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-2">
                                    <h6>CHECK COVERAGES</h6>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LIAB"
                                    class="custom-control-input" 
                                    id="LIAB"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="LIAB">LIAB</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-2">
                                    <input
                                    type="checkbox"
                                    name="NO-FAULT"
                                    class="custom-control-input" 
                                    id="NO-FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="NO-FAULT">NO-FAULT</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADD'L NO FAULT"
                                    class="custom-control-input" 
                                    id="ADD'L NO FAULT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="ADD'L NO FAULT">ADD'L NO FAULT</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MED PAY"
                                    class="custom-control-input" 
                                    id="MED PAY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MED PAY">MED PAY</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="UNINS"
                                    class="custom-control-input" 
                                    id="UNINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="UNINS">UNINS MOTOR</label>

                                    </div>
                                </div>

                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="MOTOR UNDRINS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="MOTOR UNDRINS">MOTOR UNDRINS</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TOWING & LABOR"
                                    class="custom-control-input" 
                                    id="TOWING & LABOR"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="TOWING & LABOR">TOWING & LABOR</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="F"
                                    name="MOTOR UNDRINS"
                                    class="custom-control-input" 
                                    id="F"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "12px"}} for="F">F</label>

                                    </div>

                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FT"
                                    class="custom-control-input" 
                                    id="FT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FT">FT</label>

                                    </div>
                                    <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FTW"
                                    class="custom-control-input" 
                                    id="FTW"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="F">FTW</label>

                                    </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="LSP"
                                    class="custom-control-input" 
                                    id="LSP"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="LSP">LSP</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COMPOTC"
                                    class="custom-control-input" 
                                    id="COMPOTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COMPOTC">COMPOTC</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="COLL"
                                    class="custom-control-input" 
                                    id="COLL"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="COLL">COLL</label>
                                </div>
                                </div>
                                <div className="col-2">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="REIMB"
                                    class="custom-control-input" 
                                    id="REIMB"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="REIMB">REIMB</label>
                                </div>

                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="FG"
                                    class="custom-control-input" 
                                    id="FG"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "12px"}} class="custom-control-label" for="FG">FG</label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <h6>DEDUCTIBLES</h6>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ACV"
                                    class="custom-control-input" 
                                    id="ACV"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ACV">ACV</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="AA"
                                    class="custom-control-input" 
                                    id="AA"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="AA">AA</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="ST AMT"
                                    class="custom-control-input" 
                                    id="ST AMT"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="ST AMT">ST AMT</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>
                                </div>
                                <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="COMP/OTC"
                                    class="custom-control-input" 
                                    id="COMP/OTC"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="COMP/OTC">COMP/OTC</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                    type="checkbox"
                                    name="SPEC C OF L"
                                    class="custom-control-input" 
                                    id="SPEC C OF L"
                                    onChange={handleBlur}
                                    />
                                    <label style={{fontSize: "14px"}} class="custom-control-label" for="SPEC C OF L">SPEC C OF L</label>
                                    </div>
                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                        </div>
                                        <input type="text" class="form-control" id="COST NEW" />
                                    </div>

                                    <label class="sr-only" for="COST NEW">COST NEW</label>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                            <div class="input-group-text">$</div>
                                            </div>
                                            <input type="text" class="form-control" id="COST NEW" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(1) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Submit" onClick={handleSubmit} className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default VehicleDescrition;