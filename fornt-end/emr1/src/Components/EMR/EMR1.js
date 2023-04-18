import React,{useEffect,useState} from 'react';
import './EMR.css'
import axios from 'axios'
import { useParams,Link } from 'react-router-dom';
import data from '../../data';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import HorizontalBarChart from './progressbar';
import BarChart1 from './pendingbar';
import Head from './Head';
import ProgressChart from './lastgraph';


const EMR=({value})=>{

   
     

    

    const [emrDetails,setEMRDetails] = useState(data)
    console.log(emrDetails);
    const [drug,setDrug] = useState(value)

//   const {id} = useParams()

    // const getEMRData =async()=>{
    //     const {data} = await axios.get(`http://localhost:8000/emr/getEMRDetails/:id`)
    //     setEMRDetails(data?.emr[0])
    //     console.log(data)
    // }


    // const getDrugData = async()=>{

    // }

    // console.log(emrDetails)


    // useEffect(()=>{
    //     getEMRData()
    // },[])
    var main_val=2;
    console.log(emrDetails[main_val].fname);
    var value1=emrDetails[main_val].diabetesvalue;
    var value2=emrDetails[main_val].alue2;
    var value3=emrDetails[main_val].alue3;
    var value4=emrDetails[main_val].alue4;
    var value5=emrDetails[main_val].alue5;
    var value6=emrDetails[main_val].alue6;
    return (
    // <Head/>
    <div className="right-side-container">
        {/* <table>
            <tr className="roww">
                <td className='patient-info1'>
                    <div class="patient-info2 box1">
                        <div style={{textAlign:"center"}}><h3>Patient information</h3></div>
                        <div class="row grid-container">
                            <div class="grid-item">Name:  {emrDetails[main_val].fname} {emrDetails[main_val].lname}</div>
                            <div class="grid-item">Date of birth:{emrDetails[main_val].dob}</div>
                            <div class="grid-item">Gender: {emrDetails[main_val].gender}</div>
                            <div class="grid-item">Blood group:{emrDetails[main_val].bloodGroup}</div>
                            <div class="grid-item">Height:{emrDetails[main_val].height} cm</div>
                            <div class="grid-item">Weight: {emrDetails[main_val].weight}kg</div>
                            <div class="grid-item">BMI: {emrDetails[main_val].BMI}</div>
                            <div class="grid-item">Id: {emrDetails[main_val].id}</div>
                            <div class="grid-item">Age: {emrDetails[main_val].age}</div>
                        </div>
                    </div>
                </td>
                <td className='medical-history1'>
                    <div class="medical-history2 box1">
                        <div style={{textAlign:"center"}}><h3>Medical history</h3></div>
                        <tr class="medical-history3" style={{marginTop:"6%"}}>
                            <td class="disease  disease-box">
                            {
                                emrDetails && emrDetails[main_val].medicalhis.disease.map((disease)=>{
                                    return   <tr class="">{disease}</tr>
                                })
                            }
                            </td>
                            <td class="allergy allergy-box">
                                <tr class="" > <h5 style={{paddingLeft:"0",paddingRight:"0"}}>Allergeis</h5></tr>
                                {
                                emrDetails && emrDetails[main_val].medicalhis.allergies?.map((disease)=>{
                                    return   <tr class="">{disease}</tr>
                                })
                            }
                            </td>
                        </tr>
                    </div>
                </td> 
            </tr>
            <tr>
                <td style={{"paddingRight": "0", width:"60%"}}>
                    <tr class="requested-treatment1 box1">
                        <div class="requested-treatment2">
                            <div style={{textAlign:" center", marginBottom: "3%"}}><h3>Requested treatment</h3></div>
                            <td class=" " style={{width:"33.33%"}}>
                                <div class="issue-head row"><h5>Disease</h5></div>
                                <div class="issue-disease row"><p>Disease: Leukemia</p></div>
                                <div class="issue-severity row">Severity: High</div>
                            </td>
                            <td class="drug">
                                <div class="drug-name row">Name of Drug: {drug.name}</div>
                                <div class="drug-brand row">Drug brand: Value 1</div>
                                <div class="drug-price row">Drug price: ﹩11.5</div>
                            </td>
                            <td class="dose">
                                <div class="drug-quantity row">{drug.quantity} dose daily</div>
                                <div class="drug-timing row">Date: {drug.day}</div>
                            </td>
                        </div>
                    </tr>
                    <tr class="supporting-doc1 box1 " >
                        <div class="supporting-doc2" style={{textAlign:"center", paddingTop:"1%"}}>
                            <tr class="" style={{textAlign:"center", marginBottom: "5%", paddingTop:"5%"}}><h3>Supporting doc</h3></tr>
                            <td class=" supporting-doc">
                                <td class="supporting-doc2">
                                    <a href="#">doc1</a>
                                </td>
                            </td >
                            <td class="supporting-doc">
                                <td class="supporting-doc2">
                                    <a href="#">doc2</a>
                                </td>
                            </td>
                        </div>
                    </tr>
                </td>
                <td class="">
                    <div class="family-his1" style={{widht:"100%", height:"20rem"}}>
                        <div class="family-his2" style={{widht:"100%", height:"100%"}}>
                            <tr class="" style={{textAlign:" center", marginBottom: "2%",paddingTop:"10px"}}><h3>Family history</h3></tr>
                            <tr class="row father-history">
                                <div class="" style={{paddingLeft: "11px", paddingRight: "0",paddingTop:"20px"}}><h5>Father family side</h5></div>
                            
                            {
                                emrDetails && emrDetails[main_val].familyhis?.fatherside?.map((disease)=>{
                                    return   <tr class="">{disease}</tr>
                                })
                            }
                            </tr>
                            <tr class=" mother-history">
                                <tr class="" style={{paddingLeft: "0", paddingRight: "0", marginTop:"20px"}}><h5>Mother family side</h5></tr>
                                {
                                emrDetails && emrDetails[main_val].familyhis?.motherside?.map((disease)=>{
                                    return   <tr class="">{disease}</tr>
                                })
                            }
                            </tr>
                        </div>
                    </div>
                </td>
            </tr>
            <tr className="row3" style={{"paddingRight": "0",width:"150%",display:"flex", justifyContent:"space-between"}}>
                <div class="contact-info1" style={{width:"100%"}}>
                    <div class="contact-info2" style={{width:"100%"}}>
                        <td class="">
                            <tr class="" style={{paddingLeft: "0", paddingRight: "0", textAlign:" center", marginBottom: "3%"}}> <h3>Status</h3></tr>
                            <tr class="">{emrDetails[main_val].status}</tr>
                        </td>
                        <td class="">
                            <tr class="" style={{paddingLeft: "2rem", paddingRight: "100px", textAlign:" center", marginBottom: "3%",marginRight:"40px"}}> <h3>Report</h3></tr>
                            <tr class="">
                                <td class="lab-report" style={{textAlign:"center"}}>
                                    <td class="lab-report2" style={{textAlign:"center"}}>
                                        <a href="#">Report1</a>
                                    </td>
                                </td>
                            </tr>
                        </td>
                        <td class="">
                            
                            <tr class="" style={{paddingLeft: "2rem", paddingRight: "", textAlign:"center", marginBottom: "3%"}}><h3>Contact information</h3></tr>
                            <tr class="" style={{paddingLeft: "1rem"}}>Contact no.:+91 836xxxxxxx</tr>
                            <tr class="" style={{paddingLeft: "1rem"}}>Email: anuxxx@mail.com</tr>
                        </td>
                    </div>
                </div>
            </tr>
        </table> */}
        <div class="row row1">
            <div class="col col-md-6 patient-info1" >
                <div class="patient-info2 box1">
                    <div style={{textAlign:"center",paddingTop:"5%",paddingBottom:"2%"}}><h3>Patient information</h3></div>
                    <div class="d-flex flex-row" style={{justifyContent:"center", justifyContent:"space-evenly"}}>
                        <div className='d-flex flex-column' style={{justifyContent:"space-center"}}>
                            <div class="patientinfo-1">Name:  {emrDetails[main_val].fname} {emrDetails[main_val].lname}</div>
                            <div class="patientinfo-1">Date of birth:{emrDetails[main_val].dob}</div>
                            <div class="patientinfo-1">Gender: {emrDetails[main_val].gender}</div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div class="patientinfo-2">Blood group:{emrDetails[main_val].bloodGroup}</div>
                            <div class="patientinfo-2">Height:{emrDetails[main_val].height} cm</div>
                            <div class="patientinfo-2">Weight: {emrDetails[main_val].weight}kg</div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div class="patientinfo-3">Id: {emrDetails[main_val].id}</div>
                            <div class="patinetinfo-3">Age: {emrDetails[main_val].age}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-6 medical-history1">
                <div class="medical-history2 box1">
                    <div style={{textAlign:"center",paddingTop:"5%",paddingBottom:"2%"}}><h3>Medical history</h3></div>
                    <div class="medical-history3 d-flex flex-row" style={{marginTop:"6%"}}>
                        <div class=" disease  disease-box d-flex flex-column">
                        {
                            emrDetails && emrDetails[main_val].medicalhis?.disease?.map((disease)=>{
                                return   <div class="">{disease}</div>
                            })
                          }
                        </div>
                        <div class=" allergy allergy-box d-flex flex-column">
                            <div class="" > <h5 style={{paddingLeft:"0",paddingRight:"0"}}>Allergeis</h5></div>
                            {
                            emrDetails && emrDetails[main_val].medicalhis?.allergies?.map((disease)=>{
                                return   <div class="">{disease}</div>
                            })
                          }
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <span style={{marginTop:"20px"}}>Sugar level: </span>
                        <HorizontalBarChart value={value1} />
                    </div>
                    <div className="d-flex flex-row" style={{marginBottom:"40px"}}>
                        <span style={{marginTop:"20px",marginRight:"20px"}}>BP level: </span>
                        <HorizontalBarChart value={value2} />
                    </div>
                </div>
            </div>
        </div>
        <div class="row row2">
            <div class="col col-md-7.5" style={{"paddingRight": "0"}}>
                <div class="row requested-treatment1 box1">
                    <div class="requested-treatment2">
                        <div style={{textAlign:" center", marginBottom: "3%",paddingTop:"4%",paddingBottom:"2%"}}><h3>Requested treatment</h3></div>
                        <div className='d-flex flex-row'>
                            <div class="Issue col col-md-4 d-flex flex-column">
                                <div class="issue-head"style={{fontWeight:"bolder"}}><h5>Disease</h5></div>
                                <div class="issue-disease" style={{paddingBottom:"0"}}><p>Disease: {emrDetails[main_val].disease}</p></div>
                                <div class="issue-severity" style={{marginBottom:"20px"}}>Severity: {emrDetails[main_val].severity}</div>
                            </div>
                            <div class="drug col col-md-4 d-flex flex-column">
                                <div class="drug-name">Name of Drug: {emrDetails[main_val].drugname}</div>
                                <div class="drug-brand">Drug brand: {emrDetails[main_val].brand}</div>
                                <div class="drug-price">Drug price: ﹩11.5</div>
                            </div>
                            <div class="dose col col-md-4 d-flex flex-column">
                                <div class="drug-quantity">{drug.quantity} dose daily</div>
                                <div class="drug-timing">Date: {emrDetails[main_val].date}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row supporting-doc1 box1">
                    <div class="supporting-doc2">
                    <div class="row" style={{textAlign:" center", marginBottom: "3%",paddingTop:"5%",paddingBottom:"2%"}}><h3>Family history</h3></div>
                        <div className='d-flex flex-row'>
                            <div class="row father-history d-flex flex-column">
                                <div class="row" style={{paddingLeft: "0", paddingRight: "0",textAlign:"center"}}><h5>Father family side</h5></div>
                            
                            {
                                emrDetails && emrDetails[main_val].familyhis?.fatherside?.map((disease)=>{
                                    return   <div class="row" style={{marginBottom:"15px",textAlign:"center",paddingLeft:"150px"}}>{disease}</div>
                                })
                            }
                            </div>
                            <div class="row mother-history d-flex flex-column">
                                <div class="row" style={{paddingLeft: "0", paddingRight: "0",textAlign:"center"}}><h5>Mother family side</h5></div>
                                {
                                emrDetails && emrDetails[main_val].familyhis?.motherside?.map((disease)=>{
                                    return   <div class="row" style={{marginBottom:"15px",textAlign:"center",paddingLeft:"100px"}}>{disease}</div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-4" style={{paddingLeft:"0"}}>
                <div class="family-his1" style={{width:"100%",paddingLeft:"0",marginLeft:"0"}}>
                    <div class="family-his2" style={{width:"100%", marginLeft:"0"}}>
                        <div class="row" style={{textAlign:" center", marginBottom: "3%",paddingTop:"3%",paddingBottom:"2%"}}><h3>Supporting doc</h3></div>
                        <div className="d-flex flex-column">
                            <div class="col col-md-4 " style={{marginBottom:"10px"}}>
                                <div class="col col-md-4 2">
                                    <a href="#">DOC-1</a>
                                </div>
                            </div>
                            <div class="col col-md-4 " style={{marginBottom:"10px"}}>
                                <div class="col col-md-4 2">
                                    <a href="#">DOC-2</a>
                                </div>
                            </div>
                            <div class="col col-md-4 " style={{marginBottom:"10px"}}>
                                <div class="col col-md-4 2">
                                    <a href="#">DOC-3</a>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:"15%",height:"10%"}}>
                            <ProgressChart progress1={value4} progress2={value5} progress3={value6}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row3">
            <div class="contact-info1">
                <div class="contact-info2 d-flex flex-row">
                    <div class="col col-md-6 d-flex flex-column" style={{textAlign:"center"}}>
                        <div class="" style={{ textAlign:" center", marginBottom: "3%",paddingTop:"4%",paddingBottom:"2%"}}> <h3>Status</h3></div>
                        {/* <div class="">{emrDetails[main_val].status}</div> */}
                        <div className='d-flex flex-row'>
                            <span>Form Submitted</span>
                            <BarChart1 value={value3}/>
                            <span>PA Approved</span>
                        </div>
                    </div>
                    <div class="col col-md-3 d-flex flex-column" style={{textAlign:"center"}}>
                        <div class="" style={{ textAlign:" center", marginBottom: "3%",paddingTop:"4%",paddingBottom:"2%"}}> <h3>Lab report</h3></div>
                        <div class="d-flex flex-row" style={{justifyContent:"center", justifyContent:"space-evenly"}}>
                            <div class="lab-report">
                                <div class="lab-report2">
                                    {/* <a href="#">Report1</a> */}
                                </div>
                            </div>
                            <div class="lab-report" style={{marginTop:"10%"}}>
                                <div class="lab-report2">
                                    <a href="#" style={{width:"90%",marginTop:"40%"}}>Report</a>
                                </div>
                            </div>
                            <div class="lab-report">
                                <div class="lab-report2">
                                    {/* <a href="#">Report3</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3">
                        
                        <div class="row" style={{ textAlign:"left", marginBottom: "3%",paddingTop:"4%",paddingBottom:"2%"}}><h3>Contact information</h3></div>
                        <div class="row">Contact no.:+91 836xxxxxxx</div>
                        <div class="row">Email: anuxxx@mail.com</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default EMR
