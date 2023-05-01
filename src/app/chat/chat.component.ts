import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  async sendMessage(): Promise<void> {
    
    const form = document.getElementById("chat-form") as HTMLFormElement;
    const input = document.getElementById("chat-input") as HTMLInputElement;
    const messages = document.getElementById("chat-messages") as HTMLElement;
    console.log(input.value);

    // const apiKey = "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" ;
    const apiKey ="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";
    const message = input.value;
    input.value = "";

    messages.innerHTML += `<div class="message user-message">
    <img src="../../assets/icons/user1.png" alt="user icon"> <span>${message}</span>
    </div>`;
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: message,
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const chatbotResponse = response.data.choices[0].text;

    messages.innerHTML += `<div class="message bot-message">
    <img src="../../assets/icons/chat1.png" alt="bot icon"> <span>${chatbotResponse}</span>
    </div>`;
  
  } 

}