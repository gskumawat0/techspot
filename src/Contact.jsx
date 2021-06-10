import React, { useState } from "react";

const Contact = () => {
	const [data, setData] = useState({
		fullname: "",
		email: "",
		phone: "",
		message: "",
	});
	const InputEvent = (event) => {
		const { name, value } = event.target;
		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};
	const formSubmit = (e) => {
		e.preventDefault();
		alert(`
        My Full Name is ${data.fullname}.
        My Email Address is ${data.email}.
        My Phone Number is ${data.phone}.
        Here is what I Want to say ${data.message}.`);
	};

	return (
		<>
			<div className="my-5 mb-0">
				<h1 className=" text-center"> Contact Us </h1>
			</div>

			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-12 mx-auto">
						<form onSubmit={formSubmit}>
							<div className="form-group mb-3">
								<label for="exampleFormControlInput1">
									Full Name
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									name="fullname"
									value={data.fullname}
									onChange={InputEvent}
									placeholder="Enter Your Full Name"
								/>
							</div>

							<div className="form-group mb-5">
								<label for="exampleFormControlInput1">
									Email Address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									name="email"
									value={data.email}
									placeholder="Enter Your Email Address"
									onChange={InputEvent}
								/>
							</div>
							<div class="form-group mb-5">
								<label for="exampleInputPassword1">Phone</label>
								<input
									type="number"
									class="form-control"
									id="exampleInputPassword1"
									name="phone"
									value={data.phone}
									placeholder="Enter Mobile No"
									onChange={InputEvent}
								/>
							</div>

							<div className="form-group mb-5">
								<label for="exampleFormControlTextarea1">
									Message
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									name="message"
									value={data.message}
									placeholder="Type Your Message Here...."
									onChange={InputEvent}
								></textarea>
							</div>
							<button
								type="submit"
								class="btn btn-outline-primary"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
