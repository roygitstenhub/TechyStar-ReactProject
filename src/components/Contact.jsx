import React, { useState } from 'react'


const Contact = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')
    let [errorName, seterrorName] = useState(false)
    let [errorEmail, seterrorEmail] = useState(false)


    function submitForm(e) {
        e.preventDefault();

        alert(` ${name}  (Your Message: "${message}")  has sent secussfully --${email} `)
        setName('')
        setEmail('')
        setMessage('')
    }

    function handleNameError(e) {
        let usrname = e.target.value;
        if (usrname.length <= 3) {
            seterrorName(true)
        }
        else if (usrname.match(/[0-9]/)) {
            seterrorName(true)
        }
        else {
            seterrorName(false)
        }

        setName(usrname)
    }

    function handleEmailError(e) {
        let usremail = e.target.value;
        if (usremail.length <= 5) {
            seterrorEmail(true)
        }
        else {
            seterrorEmail(false)
        }

        setEmail(usremail)
    }


    return (
        <>
            <div class='contact'>
                <main>
                    <h2>contact us</h2>

                    <form action="/" onSubmit={submitForm}>
                        <div>
                            <label htmlFor="">Name:</label>
                            <input type="text" placeholder='enter your name' value={name} onChange={handleNameError} required />
                        </div>
                        {
                            errorName ? (<span>* please type correct</span>) : " "
                        }

                        <div>
                            <label htmlFor="">Email:</label>
                            <input type="text" placeholder='enter your email adress' value={email} onChange={handleEmailError} required />

                        </div>
                        {
                            errorEmail ? (<span>* please type correct</span>) : " "
                        }

                        <div>
                            <label htmlFor="">Message:</label>
                            <input type="text" placeholder='message....' value={message} onChange={(e) => { setMessage(e.target.value) }} required />
                        </div>

                        <button>send</button>

                    </form>

                </main>

            </div>
        </>
    );
}

export default Contact