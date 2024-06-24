package com.jewelry_store.jewelry_store.service.Payment;

import com.jewelry_store.jewelry_store.model.Orderr;
import com.jewelry_store.jewelry_store.response.PaymentRespone;

public interface PaymentService {
    public PaymentRespone createPaymentLink(Orderr order);

}
