/* eslint-disable no-undef */
export const profileInfo = [
    {
        id:crypto.randomUUID(),
        label:"Full Name",
        placeholder:"kelly limo",
        type:"text",
        value:"fullName",
        handleChange: (e)=>{
            setFullName(e.target.value)
        }
    },
    {
        id:crypto.randomUUID(),
        label:"Username",
        placeholder:"Lymore",
        type:"text",
        value:"username",
        handleChange: (e)=>{
            setUsername(e.target.value)
        }
    },{
        id:crypto.randomUUID(),
        label:"Bio",
        placeholder:"Kenya, Nakuru",
        type:"text",
        value:"bio",
        handleChange: (e)=>{
            setBio(e.target.value)
        }
    }
]