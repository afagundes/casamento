function getPaymentInfo() {
    return {
        paymentInfo: {
            pix: process.env.PIX_PHONE_KEY,
            bankReceiverName: process.env.BANK_INFO_RECEIVER_NAME,
            bankReceiverDocument: process.env.BANK_INFO_RECEIVER_DOCUMENT,
            bankName: process.env.BANK_INFO_NAME,
            bankAgency:process.env.BANK_INFO_AGENCY,
            bankAccount: process.env.BANK_INFO_ACCOUNT
          }
    };
}

export { getPaymentInfo };
