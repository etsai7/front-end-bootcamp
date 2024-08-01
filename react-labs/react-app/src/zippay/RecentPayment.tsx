import { useContext } from "react";
import PaymentDisplay from "./PaymentDisplay";
import { DispatchContext } from "./ZipPayManager";


function RecentPayment({payments }: PaymentDisplayProps) {
    const dispatch = useContext(DispatchContext)
    return (
        <>
        <h4>Recent Payments</h4>
        {/* <ul>
            {payments.map((payment) => (
                <li key={payment.reason}>
                    <PaymentDisplay
                        payment={payment}
                        onChangeTask={displayPayments}
                    />
                </li>
            ))}
        </ul> */}
        {/* <table>
            <thead>
                <tr>
                    <th>Recipient</th>
                    <th>Amount</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((payment) => (
                    <tr key={payment.reason}>
                        <PaymentDisplay
                        payment={payment}
                    />
                    </tr>
                ))}
            </tbody>
            
        </table> */}
        <table>
            <thead>
                <tr>
                    <th>Recipient</th>
                    <th>Amount</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((payment) => (
                    <tr key={payment.reason}>
                        <PaymentDisplay
                        payment={payment}
                    />
                    </tr>
                ))}
            </tbody>
            
        </table>
        </>
    )
}

export default RecentPayment;