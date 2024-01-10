import * as yup from "yup";

export const schemaBookingForm = yup.object({
  dateCheckIn: yup.string().required(),
  dateCheckOut: yup.string().required(),
  guest: yup.string().required(),
  children: yup.number().required(),
  adults: yup.number().required(),
  placeName: yup.string().required().default("12312 Millerbrook Dr"),
  name: yup.string().required(),
  country: yup.string().optional(),
  email: yup.string().email().required(),
  phone: yup.string().required().max(10),
  address: yup.string().optional(),
});
