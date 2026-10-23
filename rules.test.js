import test from 'node:test';import assert from 'node:assert/strict';import {strength,trickWinner,handWinner,nextStake} from './rules.js';
test('mineiro: quatro de paus é maior',()=>assert.ok(strength({id:'4♣',v:'4',s:'♣'},'mineiro')>strength({id:'7♦',v:'7',s:'♦'},'mineiro')));
test('paulista: manilha é sucessora da vira',()=>assert.ok(strength({id:'5♣',v:'5',s:'♣'},'paulista',{v:'4'})>strength({id:'3♣',v:'3',s:'♣'},'paulista',{v:'4'})));
test('empate em vaza',()=>assert.equal(trickWinner([{seat:0,card:{id:'A♣',v:'A',s:'♣'}},{seat:1,card:{id:'A♦',v:'A',s:'♦'}}],'mineiro'),null));
test('duas vazas vencem',()=>assert.equal(handWinner([1,1]),1));
test('escalada truco',()=>assert.deepEqual([1,3,6,9,12].map(nextStake),[3,6,9,12,null]));
