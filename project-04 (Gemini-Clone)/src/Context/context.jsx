import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext();
const ContextProvider = (props) => {
    
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setResultData] = useState("");
 
    // This function is used settimeout to showresult with typing effect 
    const delayPara = (index,nextWord)=>{

    setTimeout(function(){
        setResultData(prev=>prev+nextWord);
    },80*index);
    }

    // function for new chat for reset the screen--
    const newChat = ()=> {
        setloading(false)
        setShowResult(false)
    }

    const onSent = async(prompt) => {

        setResultData("")
        setloading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            response = await runChat(prompt);
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
             response = await run(input);
        }
        let responseArray = response.split("**");
        let newResponse = ""
        for( let i =0; i<responseArray.length; i++)
            {
          if(i ===0 || i%2 !==1){
            newResponse += responseArray[i]
          }
          else{
            newResponse += "<b>"+responseArray[i]+"</b>";
          }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split("  ");
        for(let i =0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+" ")
        }
        setloading(false)
        setInput("")
    }

    const ContextValue = {

        prevPrompts,
        setPrevPrompts,
        onSent,
        loading,
        recentPrompt,
        setRecentPrompt,
        showResult,
        resultData,
        input,
        setInput,
        newChat
    }
    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
