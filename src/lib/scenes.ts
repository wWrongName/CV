import { cases } from "./cases";
export const scenes = [
  {name:"Иван Величко",eyebrow:"INFRASTRUCTURE & PLATFORM ENGINEER",title:"Разработка и инфраструктура",lines:["Приложения, инфраструктура и автоматизация."],detail:"Кейсы и опыт работы",slug:null,position:[0,0,0] as [number,number,number]},
  ...cases.map((c, index) => ({name:c.company,eyebrow:`${c.number} / ${c.kind}`,title:c.title,lines:[c.description,c.role],detail:c.tags.join(" · "),slug:c.id,position:[0,0,-12*(index+1)] as [number,number,number]}))
];
