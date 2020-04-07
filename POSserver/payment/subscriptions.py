from decouple import config
from django.http import JsonResponse
from stripesubscriptions import CreateSubscription


# defines our actual subscription plans
def monthly_subscription(req):
    if req.method == "POST":
        create_subscription = CreateSubscription(
            stripe_secret_key=config("STRIPE_KEY"),
            body=req.body,
            plan="plan_DjwHm1dTnZ3JSU",
            sub="Monthly",
        )

        create_subscription.parse_body()
        customer_exists = create_subscription.check_if_customer_exists()

        if bool(customer_exists):
            return JsonResponse(
                {"error": "You're already subscribed!", "customer": customer_exists}
            )

        create_subscription.create_subscription()

        return JsonResponse({"statusText": "OK", "statusCode": 200})

    return JsonResponse({"error": "An error occurred while making payment."})


def yearly_subscription(req):
    if req.method == "POST":
        create_subscription = CreateSubscription(
            stripe_secret_key=config("STRIPE_KEY"),
            body=req.body,
            plan="plan_DjwH2GvGtF24O4",
            sub="Yearly",
        )

        create_subscription.parse_body()
        customer_exists = create_subscription.check_if_customer_exists()

        if bool(customer_exists):
            return JsonResponse(
                {"error": "You're already subscribed!", "customer": customer_exists}
            )

        create_subscription.create_subscription()

        return JsonResponse({"statusText": "OK", "statusCode": 200})

    return JsonResponse({"error": "An error occurred while making payment."})
