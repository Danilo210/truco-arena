export const suits=['♣','♥','♠','♦'];
export const ranks=['4','5','6','7','Q','J','K','A','2','3'];
export function deck(){const a=suits.flatMap(s=>ranks.map(v=>({id:v+s,v,s})));for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
// Mineiro: 4 de paus, 7 de copas, A de espadas, 7 de ouros (da maior à menor).
const mineiro=['7♦','A♠','7♥','4♣'];
const order=['♦','♠','♥','♣'];
export function strength(card,mode,vira){if(mode==='mineiro'){const i=mineiro.indexOf(card.id);return i<0?ranks.indexOf(card.v):20+i}const next=ranks[(ranks.indexOf(vira.v)+1)%ranks.length];return card.v===next?20+order.indexOf(card.s):ranks.indexOf(card.v)}
export function trickWinner(table,mode,vira){const vals=table.map(x=>strength(x.card,mode,vira)),max=Math.max(...vals);return vals.filter(v=>v===max).length>1?null:table[vals.indexOf(max)].seat}
export function handWinner(tricks){const wins=[0,0];for(const t of tricks)if(t!==null)wins[t]++;if(wins[0]>=2)return 0;if(wins[1]>=2)return 1;if(tricks.length<3)return undefined;if(wins[0]!==wins[1])return wins[0]>wins[1]?0:1;const first=tricks.find(x=>x!==null);return first??0}
export function nextStake(stake){return stake===1?3:stake===3?6:stake===6?9:stake===9?12:null}
