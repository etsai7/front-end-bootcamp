interface Payment {
	recipient: string;
	amount: number;
	reason: string;
}
interface PaymentDisplayProps {
	payments: Array<Payment>;
	// displayPayments: (payment: Payment) => void;
}