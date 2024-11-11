import { formik } from 'formik'
import { MovieDataInterface } from './data/Movies';

type BookingPageProps = {
    selectedSeats: string[];
    totalSeatCost: number;
    selectedMovie?: MovieDataInterface;
  }


  function formValidation(values){
    const errors = {}

  }


function BookingPage({selectedSeats, totalSeatCost, selectedMovie}:BookingPageProps){


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            txt: ''
        },

        validate: formValidation,

        onSubmit: values => {
            // Hantera submit
        },
    })


    return(
        <>
            <section>
                <h1>To book these seats, we need your information!</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-row'>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}/>
                        {formik.errors.firstName ? <span className="error">{formik.errors.firstName}</span> : null}
                    </div>
                    <div className="row">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}/>
                        {formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
                    </div>
                    <div className="row">
                        <label htmlFor="email">Email Address</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}/>
                        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    </div>
                    <div className="row">
                        <label htmlFor="txt">Message</label>
                        <textarea
                            id="txt"
                            name="txt"
                            onChange={formik.handleChange}
                            value={formik.values.txt}/>
                    </div>
                    <button className="" type="submit">Submit</button>  
                </form>
            </section>

        </>
    )
}

export default BookingPage;