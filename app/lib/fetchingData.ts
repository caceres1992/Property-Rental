import data from "@/app/lib/pageData.json";
import { NextResponse } from "next/server";

export const fetchingHomePage = async () => {
  return NextResponse.json( data);
};
