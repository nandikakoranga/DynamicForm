import React, { useState } from "react";
import useForm from "../hooks/useForm";
import useValidation from "../hooks/useValidation";
import "./EventRegistrationForm.css";

const EventRegistrationForm = () => {
    const { values, handleChange, handleSubmit } = useForm(submitForm);
    const { errors, validate } = useValidation(values);

    const [isAttendingWithGuest, setIsAttendingWithGuest] = useState(false);

    function submitForm() {
        if (validate()) {
            alert(JSON.stringify(values, null, 2));
        }
    }

    return (
        <div className="form-container">
            <h1>Event Registration</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={values.name || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={values.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={values.age || ""}
                            onChange={handleChange}
                            required
                            min="1"
                        />
                    </label>
                    {errors.age && <p className="error">{errors.age}</p>}
                </div>

                <div className="form-group">
                    <label>
                        Are you attending with a guest?
                        <select
                            name="attendingWithGuest"
                            value={values.attendingWithGuest || ""}
                            onChange={(e) => {
                                handleChange(e);
                                setIsAttendingWithGuest(e.target.value === "yes");
                            }}
                            required
                        >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>
                    {errors.attendingWithGuest && <p className="error">{errors.attendingWithGuest}</p>}
                </div>

                {isAttendingWithGuest && (
                    <div className="form-group">
                        <label>
                            Guest Name:
                            <input
                                type="text"
                                name="guestName"
                                value={values.guestName || ""}
                                onChange={handleChange}
                                required={isAttendingWithGuest}
                            />
                        </label>
                        {errors.guestName && <p className="error">{errors.guestName}</p>}
                    </div>
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EventRegistrationForm;