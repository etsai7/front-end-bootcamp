
import './zippay.css'
export interface PaymentDisplayProp {
	payment: Payment;
	onChangeTask: (payment: Payment) => void;
}
// export default function PaymentDisplay({payment, onChangeTask} : PaymentDisplayProp){
//     return (
//         <>
//             <ul >
//                 <li>Recipient: {payment.recipient},</li>
//                 <li>Amount: {payment.amount},</li>
//                 <li>Reason: {payment.reason}</li>
//             </ul>
//         </>
//     )
// };

export default function PaymentDisplay({payment, onChangeTask} : PaymentDisplayProp){
    return (
        <tr>
            <td>{payment.recipient}</td>
            <td>{payment.amount}</td>
            <td>{payment.reason}</td>
        </tr>
    )
};