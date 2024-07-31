import PaymentDisplay from "./PaymentDisplay";

function RecentPayment({payments, displayPayments }: PaymentDisplayProps) {
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
        <table>
            <thead>
                <th>Recipient</th>
                <th>Amount</th>
                <th>Reason</th>
            </thead>
            <tbody>
                {/* <tr> */}
                    {payments.map((payment) => (
                            <PaymentDisplay
                            payment={payment}
                            onChangeTask={displayPayments}
                        />
                    ))}
                {/* </tr> */}
            </tbody>
            
        </table>
        </>
    )
}

export default RecentPayment;