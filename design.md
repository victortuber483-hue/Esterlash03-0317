# Pink Glitter — Design

## Reversão atual

- Cards VF removidos a pedido do usuário. Estado visível: hero, transição original e introdução textual, sem cards ou fotos abaixo.

## Cards de cílios — referência VF autorizada

- Reproduzir os cards bio-link-card de VFVERTEXDIGITALOFICIALFINAL-1087: fundo preto em gradiente, bordas arredondadas, placa violeta 3D sobreposta à esquerda, brilho no link e entrada rotacionada no scroll.
- Manter a paleta exata dos cards da referência, dentro do fundo pink existente.
- Apenas seis cards de cílios com aplicação, manutenção e prazos do catálogo. Não adicionar fotos, carrossel, sobrancelhas, remoção química ou seções novas.
- Preservar a introdução textual, hero, transição e WhatsApp existentes.

## Remoção solicitada — estado atual

- Manter hero, transição original e apenas o texto da introdução “Seu olhar. Seu destaque.”.
- Remover também a foto luminosa e a legenda “Beleza em cada detalhe.” da introdução.
- Remover o link “Explore os serviços” e todo o conteúdo posterior: carrossel, catálogo de cílios, remoção química e seção de sobrancelhas.
- Fotos e catálogo permanecem armazenados para futuras etapas.

## Implementação autorizada — serviços

- Preservar hero e transição original. Construir apenas cílios/manutenção e sobrancelhas, sem seção biográfica ou rodapé novo.
- Fotografia editorial assimétrica com recortes curvos, borda branca rosada e pequenos pontos de luz inspirados na referência enviada.
- Carrossel duplo automático, sentidos opostos, sem ampliação por clique; controle de pausa e versão estática em movimento reduzido.
- Cards tridimensionais com gradiente rosa profundo, glitter fino, reflexo de luz e preços/prazos fiéis ao catálogo recebido.
- Tipografia Cormorant Garamond e Poppins; hierarquia limpa em branco, respiro entre categorias e prioridade mobile.
- Nova foto de sobrancelhas usada na categoria correspondente; não inferir técnicas nas fotos de cílios.

## Transição aprovada — feixe de luz

- Substituir a névoa pink larga por uma borda curva acompanhada por feixe fino branco rosado e halo estreito.
- Recorte curvo na base da hero, com a mesma curva usada na luz; fundo pink inferior sobreposto apenas atrás dessa junção.
- Ponto luminoso percorre a curva lentamente, sem piscar; suprimir movimento quando prefers-reduced-motion estiver ativo.
- Manter tamanho compacto da hero, título/subtítulo, loop ping-pong e WhatsApp. Nenhum conteúdo novo abaixo.

## Informações e conteúdo — etapa atual

- Marca verificada no catálogo: Ester Lash Designer. Contexto completo em business-context.md; não publicar preços ou políticas por enquanto.
- Hero recebe título “Ester Lash Designer” e subtítulo “Extensão de cílios e sobrancelhas que realçam a sua beleza.” à esquerda, preservando rosto e animação à direita.
- Display Cormorant Garamond 500, texto Poppins 400/500; fontes locais em public/fonts. Branco sobre sombreado discreto apenas na lateral esquerda.
- WhatsApp fixo à direita em pink com símbolo branco e pulso suave, link para +55 83 99117-3570. Só aparece quando a hero sair totalmente da tela; esconde ao voltar à hero. Respeitar movimento reduzido.
- Manter altura atual da hero, loop ping-pong e transição pink. Não adicionar outros conteúdos abaixo.

## Loop aprovado — ping-pong

- Hero percorre os 192 frames do início ao fim e retorna em ordem inversa, repetindo sem corte ou dissolução entre poses.
- Não duplicar os frames das extremidades; ciclo de 382 passos a 24fps. Pré-carregamento acompanha a direção da reprodução.
- Preservar tamanho compacto no celular, fundo separado abaixo e transição visual suave entre as seções.

## Correção de layout — prioridade atual

- Hero é uma seção no topo em fluxo normal, não uma tela inteira. Desktop 16:9 com altura máxima de 720px; celular 4:3 com altura máxima de 360px (292,5px em largura de 390px).
- Usar a composição ampla dos frames, com foco horizontal na mulher no mobile; remover o close vertical exagerado.
- Área de conteúdo independente abaixo da hero, com o fundo pink e glitter originais. Inicialmente vazia, com pelo menos uma tela de altura, para receber os próximos conteúdos.
- Glitter fica contido na área inferior e acompanha seu tamanho.
- Transição atual: sobreposição de 64–150px apenas na junção, com máscara suave no rodapé da hero revelando o mesmo fundo pink e glitter da área inferior. Sem linha divisória; manter altura compacta da hero e conteúdo em fluxo normal, abaixo dela.

## Direção aprovada — etapa 2

- Hero no topo composta por frames extraídos do arquivo enviado (8 segundos, 24 fps, 1280 × 720), renderizados em canvas em loop automático. Sem elemento video, controles ou áudio.
- A animação é a própria seção de abertura: tela inteira, sem card, borda ou player; enquadramento central responsivo.
- Manter o pink com glitter existente abaixo da hero e criar transição suave na borda inferior.
- Nenhum texto, botão ou seção adicional nesta etapa. Marca d’água continua removida.
- Carregar frames progressivamente com cache limitado; pausar em abas ocultas e mostrar frame estático para movimento reduzido.
- Alterações somente no frontend web: componente hero, página inicial, CSS e frames em public/images/hero-frames. Sem novas APIs ou tabelas.
- Prioridade mobile: sequência própria 720 × 1080, recorte centrado no rosto, redimensionamento Lanczos e nitidez moderada sem inventar detalhes. Cache menor para celular. Altura baseada em svh para navegadores móveis; desktop mantém o enquadramento original.

## Direção aprovada — etapa 1

Somente fundo pink vivo de tela inteira, com glitter animado e luzes cintilantes. Sem hero, textos, botões ou novas seções até o próximo comando do usuário.

- Paleta: #ed087e dominante, #ff168f e #cd0063 para profundidade discreta; glitter branco, prata e rosa claro.
- Glitter fino e denso com estrelas pequenas e brilho suave, sem bolhas grandes.
- Layout responsivo de tela inteira, sem margens ou rolagem.
- Canvas decorativo; respeitar prefers-reduced-motion e pausar em abas ocultas.
- Tipografia futura: Poppins, sans-serif. Nenhum texto nesta etapa.
- Web apenas. Nenhuma API ou tabela nova.

---

> Starter design brief. Replace this content with the app you're building before writing any UI.
> Keep it short and concrete — it's the single source of truth for palette, typography, pages,
> screens, and flows across web, mobile, and desktop.

One-line description of the app, the platforms it ships on, the visual direction (style, feel), and the core job it does for the user.

## Brand & Colors

One token set, consumed per platform:

- **Web & desktop**: CSS variables in `packages/web/src/web/styles.css` (desktop loads the web UI).
- **Mobile**: `Colors.light` / `Colors.dark` in `packages/mobile/constants/theme.ts`, read via `useColors()`; `userInterfaceStyle: "automatic"` follows the system light/dark setting.

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| primary | #1F1F1F | #E5E5E5 | Buttons, active tab, accents |
| background | #FFFFFF | #0A0A0A | Page/screen background |
| card | #FFFFFF | #1A1A1A | Cards, surfaces |
| foreground | #171717 | #FAFAFA | Primary text |
| mutedForeground | #737373 | #A3A3A3 | Secondary text |
| border | #E5E5E5 | #262626 | Hairlines |
| destructive | #DC2626 | #EF4444 | Delete / errors |

## Typography

Name the display + body pairing here. Web: set font families in `styles.css` (self-hosted files go in `packages/web/public/fonts/`). Mobile: system font by default; load custom fonts with `useFonts` from `expo-font` and reference them via `Fonts` in `constants/theme.ts`.

## Pages & Screens

List each page/screen, its route file, and what it shows. Example:

- **Web — Home** (`packages/web/src/web/pages/index.tsx`) — what the user sees first.
- **Mobile — Home** (`packages/mobile/app/(tabs)/index.tsx`) — main tab.
- Add web pages under `src/web/pages/` (+ route in `app.tsx`); mobile tabs under `app/(tabs)/`, stack/modal screens under `app/`.

## Key User Flows

1. Describe the primary flow end to end (open → action → result).
2. ...

## Architecture

- **API**: typed oRPC client (`lib/api.ts` in each package) → the backend in `@template/web`. Query/mutation hooks live in `queries/` (one file per feature); pages/screens call them with `@tanstack/react-query`.
- **State/sync**: TanStack Query with optimistic updates for instant-feel interactions.
- **Auth / payments / uploads**: see `skills/app/references/` when those features are needed.
