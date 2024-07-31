import React, {useState} from 'react';
import Navbar from './Navbar';
import './zippay.css';
import SendPayment from './SendPayment';
import RecentPayment from './RecentPayment';

let nextId = 4;
const initialPayments: Array<Payment> = [
	{ recipient: 'Joe', amount: 100, reason: 'Groceries' },
	{ recipient: 'Anne', amount: 60, reason: 'Change oil' },
	{ recipient: 'Lebron', amount: 10, reason: 'Clean kitchen table' },
];

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
		<section className="zippay-main">
			<Navbar></Navbar>
			<SendPayment onSavePayment={handleOnSavePayment}/>
			{/* <p>{paymentMessage}</p> */}
			<RecentPayment payments={payments} displayPayments={handleOnSavePayment} />
			
		</section>
	);
}

export default ZipPayManager;
