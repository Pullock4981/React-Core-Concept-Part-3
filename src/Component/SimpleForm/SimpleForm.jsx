// Learn form with on Submit

const SimpleForm = () => {

    // add event Handler

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log("Form submited....")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border p-2 rounded-md w-full mb-2" type="text" name="name" placeholder="Name"/>
                <br />
                <input className="border p-2 rounded-md w-full mb-2" type="email" name="email" placeholder="Email"/>
                <br />
                <input className="border p-2 rounded-md w-full mb-2" type="text" name="number" placeholder="Number"/>
                <br />
                <input className="border p-2 rounded-md w-full cursor-pointer" type="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;