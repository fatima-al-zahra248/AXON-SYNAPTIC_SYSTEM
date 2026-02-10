
import { GoogleGenAI, Type } from "@google/genai";
import { SecurityAnalysis, Severity } from "../types";

const SYSTEM_INSTRUCTION = `You are AXON, a professional Cybersecurity Risk Analyst. 
Your goal is to perform defensive security reviews for:
1. System Architectures & Apps.
2. Emails & Communications (Phishing/Spam).
3. Technical URLs & Domains.
4. Security Scenarios.

For any input:
1. Summarize the security profile.
2. Identify 3-5 vulnerabilities or risks.
3. For each risk, provide:
   - A clear Name.
   - Simple impact explanation.
   - Specific, actionable PREVENTION and mitigation steps.
   - Severity level (Low to Critical).

STRICT RULES:
- NO offensive or illegal terminology.
- NO exploit code or attack instructions.
- FOCUS ON DEFENSE AND PREVENTION.
- Response must be valid JSON.`;

export const analyzeSystemSecurity = async (description: string): Promise<SecurityAnalysis> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Defensively review this for security risks and provide prevention steps: ${description}`,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      thinkingConfig: { thinkingBudget: 4000 },
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          attackerPerspective: { type: Type.STRING },
          vectors: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                vectorName: { type: Type.STRING },
                riskExplanation: { type: Type.STRING },
                mitigationSteps: { 
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                severity: { 
                  type: Type.STRING,
                  enum: Object.values(Severity)
                }
              },
              required: ["vectorName", "riskExplanation", "mitigationSteps", "severity"]
            }
          }
        },
        required: ["summary", "attackerPerspective", "vectors"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("Analysis failed. Please try again.");
  
  return JSON.parse(text) as SecurityAnalysis;
};
