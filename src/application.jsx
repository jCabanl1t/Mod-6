import { useState } from 'react';

function PersonalInfo({info,setInfo}) {


    const handleFullNameInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, fullname: e.target.value }
        ))
    }
    const handleEmailInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, email: e.target.value }
        ))
    }
    const handlePhoneInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, phone: e.target.value }
        ))
    }
    const handleSchoolInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, school: e.target.value }
        ))
    }
    const handleStudyInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, study: e.target.value }
        ))
    }
    const handleDateOfStudyInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, dateofstudy: e.target.value }
        ))
    }
    const handleCompanyInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, company: e.target.value }
        ))
    }
    const handlePositionInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, position: e.target.value }
        ))
    }
    const handleResponsibilitiesInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, responsibilities: e.target.value }
        ))
    }
    const handleStartDateInputChange = (e) => {
        setInfo(prevInfo => (
            { ...prevInfo, startdate: e.target.value }
        ))
    }
    


    return (
        <div>
            <h1>Personal Information</h1>
            <div>
                <label htmlFor="fullname">Full Name:</label>
                <input id="fullname" name="fullname" value={info.fullname} onChange={handleFullNameInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" value={info.email} onChange={handleEmailInputChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input id="phone" name="phone" value={info.phone} onChange={handlePhoneInputChange} />
            </div>
            <div>
                <label htmlFor="school">School:</label>
                <input id="school" name="school" value={info.school} onChange={handleSchoolInputChange} />
            </div>
            <div>
                <label htmlFor="study">Study:</label>
                <input id="study" name="study" value={info.study} onChange={handleStudyInputChange} />
            </div>
            <div>
                <label htmlFor="dateofstudy">Date of Study:</label>
                <input id="dateofstudy" name="dateofstudy" value={info.dateofstudy} onChange={handleDateOfStudyInputChange} />
            </div>
            <div>
                <label htmlFor="company">Company:</label>
                <input id="company" name="company" value={info.company} onChange={handleCompanyInputChange} />
            </div>
            <div>
                <label htmlFor="position">Position:</label>
                <input id="position" name="position" value={info.position} onChange={handlePositionInputChange} />
            </div>
            <div>
                <label htmlFor="responsibilities">Responsibilities:</label>
                <input id="responsibilities" name="responsibilities" value={info.responsibilities} onChange={handleResponsibilitiesInputChange} />
            </div>
            <div>
                <label htmlFor="startdate">Start Date:</label>
                <input id="startdate" name="startdate" value={info.startdate} onChange={handleStartDateInputChange} />
            </div>


        </div>
    )
}

export default PersonalInfo;