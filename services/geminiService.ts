import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing.");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateForecastTeaser = async (signName: string): Promise<string> => {
  try {
    const ai = getAiClient();
    const prompt = `
      Write a short, mystical, and captivating 2-sentence teaser for the 2026 annual horoscope for the zodiac sign ${signName}. 
      Make it sound professional, intriguing, and positive. 
      Do not include any preamble, just the teaser text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "The stars are aligning in mysterious ways...";
  } catch (error) {
    console.error("Error generating teaser:", error);
    return "The mists of time obscure this reading momentarily. Please try again.";
  }
};
