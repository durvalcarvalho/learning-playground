from io import BytesIO

import weasyprint
from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import render_to_string


def send_email(order):
    subject = f'My Shop - Invoice no. {order.id}'
    message = 'Please, find attached the invoice for your recent purchase.'

    email = EmailMessage(
        subject,
        message,
        'admin@ecommerce.com',
        [order.email]
    )

    html = render_to_string('orders/order/pdf.html', {'order': order})

    out = BytesIO()
    stylesheets = [weasyprint.CSS(settings.STATIC_ROOT + 'css/pdf.css')]
    weasyprint.HTML(string=html).write_pdf(out, stylesheets=stylesheets)
    email.attach(f'order_{order_id}.pdf', out.getvalue(), 'application/pdf')
    email.send()
