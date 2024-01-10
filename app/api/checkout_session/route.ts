import { NextRequest, NextResponse } from "next/server";
import moment from "moment";
import Stripe from "stripe";
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  console.log(data);
  const days = moment(data.dateCheckOut).diff(data.dateCheckIn, "days");
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              description: `You will stay at our place for ${
                days > 1 ? days + " days " : days + " day "
              }.`,
              name: "Property -> North Carolina 214",
            },
            currency: "usd",
            unit_amount: 32000,
          },
          quantity: days,
        },
        {
          price_data: {
            product_data: {
              name: " Cleaning fee",
            },
            currency: "usd",
            unit_amount: 25000,
          },
          quantity: 1,
        },
      ],

      mode: "payment",
      success_url: `${req.headers.get("origin")}/property/detail`,
      cancel_url: `${req.headers.get("origin")}/?canceled=true`,
    });
    return NextResponse.json({ url: (await session).url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 400 });
  }
}
