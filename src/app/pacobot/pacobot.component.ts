import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    watsonAssistantChatOptions: any;
  }
}

@Component({
  selector: 'app-pacobot',
  standalone: true,
  imports: [],
  templateUrl: './pacobot.component.html',
  styleUrl: './pacobot.component.css'
})
export class PacobotComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.loadWatsonAssistantChat();
  }

  loadWatsonAssistantChat(): void {
    window.watsonAssistantChatOptions = {
      integrationID: "3644114b-ae31-4682-85f3-379516b1e57f", 
      region: "us-east", 
      serviceInstanceID: "c1678590-c1af-4b7c-ad53-cf81fb8600a4", 
      onLoad: async (instance: any) => { 
        await instance.render(); 
      }
    };
    setTimeout(() => {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
              (window.watsonAssistantChatOptions.clientVersion || 'latest') + 
              "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }
}
