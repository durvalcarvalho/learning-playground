from shop.models import Product
from shop.recommender import Recommender

p = Product.objects.all()
r = Recommender()

r.product_bought([ p[0], p[1] ])
r.product_bought([ p[0], p[1] ])
r.product_bought([ p[0], p[1] ])
r.product_bought([ p[2], p[3] ])
r.product_bought([ p[2], p[3] ])
r.product_bought([ p[2], p[3] ])
r.product_bought([ p[4], p[6] ])
r.product_bought([ p[4], p[6] ])
r.product_bought([ p[4], p[6] ])


