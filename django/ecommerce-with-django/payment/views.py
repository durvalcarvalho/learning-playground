import braintree
from django.shortcuts import get_object_or_404, redirect, render

from orders.models import Order

from . import utils


def payment_process(request):
    order_id = request.session.get('order_id')
    order = get_object_or_404(Order, id=order_id)

    if request.method == 'POST':
        nonce = request.POST.get('payment_method_nonce', None)

        result = braintree.Transaction.sale({
            'amount': '{:.2f}'.format(order.get_total_cost()),
            'payment_method_nonce': nonce,
            'option': {
                'submit_for_settlement': True,
            }
        })

        if result.is_success:
            order.paid = True
            order.braintree_id = result.transaction.id
            order.save()
            utils.send_email(order)

            return redirect('payment:done')
        else:
            return redirect('payment:canceled')
    else:
        client_token = braintree.ClientToken.generate()
        context = {
            'order': order,
            'client_token': client_token,
        }
        return render(
            request,
            'payment/process.html',
            context
        )

def payment_done(request):
    return render(request, 'payment/done.html')

def payment_canceled(request):
    return render(request, 'payment/canceled.html')
