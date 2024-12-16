 let apiKey = "AIzaSyDrUekOukjwVtJUQptjZ2SWTdnNa9Y3urE";
import{
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    let result1 = result.response.text()
    return result1 ;
  }
  
  export default run;











// import{
// GoogleGenerativeAI,
// HarmCategory,
// HarmBlockThreshold,
// } from "@google/generative-ai";

// const MODAL_NAME = "gemini-1.5-pro";
// const API_KEY = ;

// async function runChat(prompt) {
//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const modal = genai.getGenerativeModel({modal:"gemini-pro"});

//     const generationConfig = {
//         temperature: 0.9,
//         topK: 1,
//         topP: 1,
//         maxOutputTokens: 2048
//     };

//     const safetySettings =[
//         {
//           category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//           threshold: HarmBlockThreshold.block_medium_and_above,
//         },
//         {
//             category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//             threshold: HarmBlockThreshold.block_medium_and_above,
//         },
//         {
//             category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//             threshold: HarmBlockThreshold.block_medium_and_above,
//         },
//         {
//             category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//             threshold: HarmBlockThreshold.block_medium_and_above,
//         }
//     ];

//     const chat = modal.startChat({
//         generationConfig,
//         safetySettings,
//         history:[
//         ],  
//     })

//     const result = await chat.sendMessage(prompt);
//     const response =result.response;
//     console.log(response.text());
// }
//  export default runChat;











