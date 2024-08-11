import OpenAI from "openai";
import { openai_gpt_key } from "./constant";

const openai = new OpenAI({
  apiKey: openai_gpt_key, 
  dangerouslyAllowBrowser: true
});

export default openai;
