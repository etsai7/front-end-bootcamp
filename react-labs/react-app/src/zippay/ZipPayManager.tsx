import React, {useState, Reducer, createContext, useReducer} from 'react';
import Navbar from './Navbar';
import './zippay.css';
import SendPayment from './SendPayment';
import RecentPayment from './RecentPayment';
import LastPayment from './LastPayment';

let nextId = 4;
const initialPayments: Array<Payment> = [
	{ recipient: 'Joe', amount: 100, reason: 'Groceries' },
	{ recipient: 'Anne', amount: 60, reason: 'Change oil' },
	{ recipient: 'Lebron', amount: 10, reason: 'Clean kitchen table' },
];

export const PaymentContext = createContext<Array<Payment> | null>(null);
export const DispatchContext = createContext<React.Dispatch<Payment> | null>(null);

function ZipPayManager() {
	const [paymentMessage, setPaymentMessage] = useState('');
	const [payments, setPayments] = useState(initialPayments);
	

	const handleOnSavePayment = (payment: Payment) => {
		setPaymentMessage(`You paid ${payment.recipient} ${payment.amount} for ${payment.reason}`)
		setPayments([
			...payments,
			{ recipient: payment.recipient, 
				amount: payment.amount, 
				reason: payment.reason 
			}
		])
	}

	const reducer: Reducer<Array<Payment>, Payment> = (state, action) => {
		setPaymentMessage(`You paid ${action.recipient} ${action.amount} for ${action.reason}`)
		setPayments([
			...payments,
			{ recipient: action.recipient, 
				amount: action.amount, 
				reason: action.reason 
			}
		])
	} 

	const [paymentsReducer, dispatch] = useReducer(reducer, initialPayments);

	// const handleDisplayPayments = (payment: Payment) => {
	// 	setPayments([
	// 		...payments,
	// 		{ recipient: payment.recipient, 
	// 			amount: payment.amount, 
	// 			reason: payment.reason 
	// 		}
	// 	])
	// }

	return (
		// <section className="zippay-main">
		// 	<Navbar></Navbar>
		// 	<SendPayment onSavePayment={handleOnSavePayment}/>
		// 	{/* <p>{paymentMessage}</p> */}
		// 	<RecentPayment payments={payments} />
			
		// </section>
		<DispatchContext.Provider value={dispatch}>
			<PaymentContext.Provider value={paymentsReducer}>
				<section className="zippay-main">
					<Navbar></Navbar>
					<SendPayment onSavePayment={handleOnSavePayment}/>
					<LastPayment/>
					<RecentPayment payments={payments} />
				</section>
			</PaymentContext.Provider>
		</DispatchContext.Provider>
	);
}

export default ZipPayManager;
