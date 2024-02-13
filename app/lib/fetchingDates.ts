
import icsToJson from "ics-to-json-extended";
export const fetchICSData = async (icsUrl: string) => {
  try {
    const response = await fetch(icsUrl);
    const icsData = await response.text();
    const data = icsToJson(icsData);
    
    return  data
  } catch (error) {
    console.error("Error fetching or parsing .ics file:", error);
    return null;
  } 
};
        