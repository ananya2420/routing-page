import { NextResponse } from "next/server";
import { getAvailableNewsYears } from "@/app/news/lib/news";

export async function GET(request) {
  try {
    console.log("🔵 Request received:", request);

    const years = getAvailableNewsYears();
    console.log("🟢 API Response:", years); // Debugging output

    return NextResponse.json({ years });
  } catch (error) {
    console.error("🚨 Error fetching news years:", error);
    return NextResponse.json({ error: "Failed to fetch news years" }, { status: 500 });
  }
}
