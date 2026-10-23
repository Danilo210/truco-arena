# Truco Arena 2.0

## Instalar e executar

```bash
npm install
npm test
npm start
```

Abra http://localhost:3000. Use 4 navegadores/abas para testar uma sala online; ou clique em **Jogar contra bots**.

## Deploy Render

Web Service / Node, Build Command `npm install`, Start Command `npm start`. Porta via `PORT`. Para login Google configure `GOOGLE_CLIENT_ID` com o ID OAuth Web do Google Cloud e cadastre a origem HTTPS do Render em **Authorized JavaScript origins**. O Google Identity Services exige HTTPS no domínio público. A rota `/config` expõe somente o client ID (não segredo).

## Implementado

- Salas online de 4 jogadores em duplas alternadas, cartas individuais privadas e controle de turnos no servidor.
- Truco Mineiro (manilhas fixas 4♣, 7♥, A♠, 7♦) e Paulista (vira, hierarquia das manilhas por naipe ♣ > ♥ > ♠ > ♦).
- Três vazas por mão, empate de força, placar até 12, truco / 6 / 9 / 12, aceitar, aumentar, correr.
- Treino com três bots simples, chat textual, autenticação Google com validação de ID token no servidor.
- 1000 moedas iniciais por conta Google, moedas e XP persistidos em arquivo JSON, nível por XP, aposta virtual por jogador ao final da partida.
- WebRTC experimental: áudio por conexão peer-to-peer, sinalização restrita a contas Google verificadas.

## Limitações importantes

- **Protótipo, não pronto para produção ou apostas competitivas.** Sem reconexão de sessão, proteção contra múltiplas contas, persistência transacional, bloqueio de saldos durante partidas ou arbitragem de disputas. Salas e partidas são perdidas em reinícios.
- Para produção: PostgreSQL e transações atômicas, Redis/Socket.IO adapter para múltiplas instâncias, proteção anti-bot, recuperação de partidas e auditoria.
- O chat de voz ainda é **experimental**: visitantes sem login não estabelecem conexões de escuta na versão atual; faltam TURN, controle robusto de negociação e controles de moderação.
- Regra de empate em terceira vaza e detalhes regionais de mão de onze devem ser validados e parametrizados; não há mão de onze nem mão de ferro. Aposta virtual não envolve dinheiro real.
- Os bots aceitam aumentos automaticamente e não pedem truco; IA básica.
- Saldo dos visitantes é temporário; saldos Google persistem apenas no volume local configurado em DATA_FILE. No Render gratuito, arquivo local pode ser apagado ao reiniciar ou implantar.
