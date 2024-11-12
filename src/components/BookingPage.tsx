import { useFormik } from 'formik'
import { MovieDataInterface } from './data/Movies';
import { useNavigate } from 'react-router-dom';
import './style.css';

type BookingPageProps = {
    selectedSeats: string[];
    totalSeatCost: number;
    selectedMovie?: MovieDataInterface;
  }

type errorObjectTypes = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;

}

  function formValidation(values: errorObjectTypes){
    const errors: errorObjectTypes = {}

    if(!values.firstName){
        errors.firstName = 'This field is required'
    }
    if(!values.lastName){
        errors.lastName = 'This field is required'
    }
    if (!values.email) {
        errors.email = 'This field is required';
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if(!values.phone){
        errors.phone = 'This field is required'
    }
    else if(!/^(\+46|0)[7-9]\d{1,2}\d{3}\d{3,4}$/i.test(values.phone)){
        errors.phone = 'Enter a correct phone number'
    }
    return errors;
  }


function BookingPage({selectedSeats, totalSeatCost, selectedMovie}:BookingPageProps){

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            selectedSeats,
            totalSeatCost,
            selectedMovie
        },

        validate: formValidation,

        onSubmit: values => {
            //  POST görs här
            console.log(values)

            //Dirigerar användaren till tack-sida
            navigate('/ThankYou')
        },
    })


    return(
        <>
            <section>
                <p className="text">
                    You have selected <span id="count">{selectedSeats.length}</span> seat<span className={selectedSeats.length === 1 ? 'hidden' : ''}>s </span>for a price of $<span id="total">{totalSeatCost}</span>
                </p>
                <p>{selectedSeats.map((seat) => `${seat}, `)}</p>
                <p>To complete your booking, we need your information!</p>
                <br></br>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <div className='form-row'>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                            value={formik.values.firstName}/>
                        {formik.touched.firstName && formik.errors.firstName ? <span className="error">{formik.errors.firstName}</span> : null}
                    </div>
                    <div className="form-row">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                            value={formik.values.lastName}/>
                        {formik.touched.lastName && formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Email Address</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        value={formik.values.email}/>
                        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    </div>
                    <div className="form-row">
                        <label htmlFor="phone">Phone number</label>
                        <input
                            id="phone"
                            name="phone"
                            type='phone'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                            value={formik.values.phone}/>
                            {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
                    </div>
                    <button className="continue-button" type="submit">Submit</button>  
                </form>
            </section>

        </>
    )
}

export default BookingPage;