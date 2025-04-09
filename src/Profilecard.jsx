import React from "react";
import viteLogo from './assets/bb.svg'
const Profilecard=({profile})=>{
    return <div style={{textAlign:"center",}}>
                <style>{'body { background-color:white; }'}</style>
<img style={{border:'3px solid black',
        width:'200px',
        height:'200px',
        borderRadius:'50%',
        textAlign:'center',}}src={viteLogo}/>
        <h1 class='text'>Madhu</h1>
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContent:"start",
        alignItems:"start",
        gap:'1px',
        fontSize:'20px',
        fontWeight:'normal',
        backgroundColor:'black',
        color:"white",
        boxsizing:'border-box',
        width:'400px',
        height:'200px',
        paddind:'10px',
        borderRadius:'6px',
        fontStyle:"initial",}}>
        <span>NAME : {profile.name} </span>
        <span>DEPARTMENT : {profile.Department}</span>
        <span>YEAR : {profile.year}</span>
        <span>MOBILE : {profile.mobile}</span>
    <span>ADDRESS :{profile.address}</span> </div>
    <a href="https://www.linkedin.com/in/madhumitha-santhoshkumar-082a6531b/?trk=public_profile-settings_edit-profile-content&originalSubdomain=in"target="_blank"rel="noopener" >linkedin...</a>
</div>
}
export default Profilecard;