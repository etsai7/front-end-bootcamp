import React, { useState, useContext } from 'react';
import { DispatchContext } from "./ZipPayManager";

import './SendPayment.css'

interface PaymentProp{
    onSavePayment: (payment: Payment) => void;
}

const initialStatePayment: Payment = {
    recipient: '',
    amount: 0,
    reason: ''
}

function SendPayment({onSavePayment}:PaymentProp ) {
    const [formState, setFormState] = useState(initialStatePayment)
    const dispatch = useContext(DispatchContext)

    const handlFormUpdates = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [event.target.name]: [event.target.value]})
    };

    return (
        <form className="mb-1">
            Send a Payment
            <div className="send-payments">
                <div className="label">
                    <label htmlFor="recipient">Recipient:</label>
                </div>
                <div>
                    <input
                        type="text"
                        name="recipient"
                        id="recipient"
                        value={formState.recipient}
                        onChange={handlFormUpdates}
                    />
                </div>
                <div className="label">
                    <label htmlFor="amount">Amount:</label>
                </div>
                <div>
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        value={formState.amount}
                        onChange={handlFormUpdates}
                    />
                </div>
                <div className="label">
                    <label htmlFor="reason">Reason:</label>
                </div>
                <div>
                    <input
                        type="text"
                        name="reason"
                        id="reason"
                        value={formState.reason}
                        onChange={handlFormUpdates}
                    />
                </div>
                <div className="submit-button">
				    <button type="button" 
                    // onClick={() => onSavePayment(formState)}>
                    onClick={() => {
                        dispatch!({...formState})
                    }}
                    >
                    Submit
                    </button>
			    </div>
            </div>
        </form>
    )
}

export default SendPayment;