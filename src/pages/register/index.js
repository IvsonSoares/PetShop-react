import React, {useState, useRef} from 'react';
import Navbar from '../../components/Navbar';
import { RegisterPageContainer,
         ResgisterPageWrap,
         RegisterPageContent,
         RegisterForm,
         RegisterFormH1,
         RegisterFormLabel,
         RegisterFormInput,
         RegisterSubmit

} from './registerElements';


const URL_RESGISTER = "http://localhost/php/registration.php";

const sendData = async (url, data) => {
    
    const answer = await fetch ( url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
            
        });
        const json = await answer.json();
        return json;
    }
    
    

export default function RegisterPage() {

    const [wait, setWait] = useState(false);
    const[registered, setRegistered] = useState(false);

    const userName = useRef(null);
    const userPassword= useRef(null);
    const userEmail= useRef(null);
    const userPet= useRef(null);
    const userBreed= useRef(null);


    const HandleLogin = async() => {


        
        setWait(true);

        const data =  {
            "name": userName.current.value,
            "password": userPassword.current.value,
            "email": userEmail.current.value,
            "pet": userPet.current.value,
            "breed": userBreed.current.value

        };

        const answerJson = await sendData(URL_RESGISTER, data);
        console.log(answerJson)
        
        //  if (answerJson.result === "ok") {
        //      setRegistered(true)
        
        // };
        
        // answerJson.result.value ? setRegistered(true) : setRegistered(false)

        setWait(false);
    };

    return (
        <>
        <Navbar/>
        <RegisterPageContainer>
            <ResgisterPageWrap>
                <RegisterPageContent>
                    <RegisterForm>
                        <RegisterFormH1>Registration</RegisterFormH1>
                            <RegisterFormLabel >First Name</RegisterFormLabel>
                                <RegisterFormInput type="text" ref={userName} placeholder="Enter your first name"/>
                            <RegisterFormLabel>Password</RegisterFormLabel>
                                <RegisterFormInput type="password"  ref={userPassword} placeholder="Enter a password" />
                            <RegisterFormLabel>Email</RegisterFormLabel>
                                <RegisterFormInput type="text" ref={userEmail} placeholder="Enter your email"/>
                            <RegisterFormLabel>Pet</RegisterFormLabel>
                                <RegisterFormInput type="text" ref={userPet} placeholder="Enter which is your pet"/>
                            <RegisterFormLabel>Raca</RegisterFormLabel>
                                <RegisterFormInput type="text" ref={userBreed} placeholder="Enter its breed"/>
                        <RegisterSubmit hidden={registered} disabled={wait} onClick={HandleLogin}  >Submit</RegisterSubmit>
                    </RegisterForm>
                </RegisterPageContent>
            </ResgisterPageWrap>
        </RegisterPageContainer>
        </>
    )

}
