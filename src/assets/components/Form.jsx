import './Form.css'
import {useState} from 'react'


const Form = ()=> {
const [isSubmitting, setIsSubmitting] = useState(false);

const initialData = {
    name: '',
    email: '',
    phone: '',
};

const [data,setData] = useState({
    name: '',
    email: '',
    phone: '',
})

const submitHandler = async(e)=> {
    e.preventDefault();
    setIsSubmitting(true);
    try{
        const response = await fetch('https://react-https-b20a5-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json',{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
        'Content-type' : 'application/json'
      }
    })
    if (!response.ok) {
            throw new Error('Failed to submit');
    }
    const datas = response.json()
    console.log(datas)
    setIsSubmitting(false);
    setData(initialData);
    }catch(err){
        console.log(error);
    }
}

    return(
        <form onSubmit={submitHandler} className="movie-form">
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Enter Name" type="text" value={data.name} onChange={(e) => setData({...data, name : e.target.value})}/>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter Email" type="email" value={data.email} onChange={(e) => setData({...data, email : e.target.value})}/>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" placeholder="Enter Phone Number" type="number" value={data.phone} onChange={(e) => setData({...data, phone : e.target.value})}/>
            <button disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    )
}


export default Form;