# DESIGN_SYSTEM.md — Day Clinic Tirapelle & Vieira

> Sistema visual e de interface para reconstrução do site com alta fidelidade aos layouts aprovados.
> Objetivo: aparência médica premium, moderna, humana e precisa, mantendo a identidade laranja/preto/branco da Day Clinic.
> Nesta fase, **não usar imagens definitivas**: todas as fotografias devem ser tratadas como placeholders substituíveis.

---

## 1. Princípios de marca

### Posicionamento visual
- Clínica médica premium.
- Especialidades principais: transplante capilar, dermatologia, cirurgia plástica, tratamentos capilares e estética.
- Sensação desejada: confiança, tecnologia, precisão, acolhimento e sofisticação.
- Evitar aparência genérica de “template de clínica”.
- Explorar visualmente a arquitetura da clínica: linhas diagonais, ângulos e detalhes em laranja.

### Palavras-chave
`premium` · `medical` · `clean` · `precise` · `human` · `modern` · `architectural`

---

## 2. Identidade cromática

```css
:root {
  --brand-orange: #D98900;
  --brand-orange-hover: #C77900;
  --brand-orange-soft: #FFF4E3;

  --ink-950: #111111;
  --ink-900: #171717;
  --ink-800: #242424;
  --ink-700: #3C3C3C;
  --ink-600: #5C5C5C;
  --ink-500: #777777;

  --gray-300: #D7D7D7;
  --gray-200: #E7E7E7;
  --gray-100: #F2F2F2;
  --surface: #F8F8F6;
  --white: #FFFFFF;

  --brown-950: #2C1804;
  --brown-900: #3A2106;

  --success: #2F7D4A;
  --danger: #B33A3A;
}
```

### Uso
- Laranja: CTA, labels, destaques, ícones, divisores e estados ativos.
- Preto/grafite: títulos, textos fortes, seções premium.
- Branco/off-white: fundo principal.
- Marrom escuro: opcional para depoimentos ou blocos institucionais.
- Nunca usar gradientes coloridos chamativos.

---

## 3. Tipografia

### Família
Preferência:
- `Manrope`
- fallback: `Inter, Arial, sans-serif`

### Escala
```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 32px;
--text-4xl: 40px;
--text-5xl: 52px;
--text-6xl: 64px;
```

### Pesos
- 400: corpo
- 500: elementos auxiliares
- 600: botões e subtítulos
- 700: títulos
- 800: hero / títulos de impacto

### Regras
- Heading principal desktop: 48–64px.
- Heading de seção: 36–48px.
- Mobile hero: 36–44px.
- Corpo: 16–18px.
- Labels em uppercase: 11–13px, peso 700, letter-spacing entre 0.14em e 0.20em.

---

## 4. Grid, layout e espaçamento

### Container
```css
max-width: 1240px;
padding-inline: 24px;
margin-inline: auto;
```

### Breakpoints
```txt
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Espaçamento base
Utilizar sistema múltiplo de 4/8:
`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120`

### Seções
- Desktop: 88–120px vertical.
- Tablet: 72–88px.
- Mobile: 56–72px.

### Grid recomendado
- Desktop: 12 colunas.
- Cards de serviços: 4 colunas.
- Blog: 2–3 colunas + sidebar.
- Médicos: composição editorial assimétrica.
- Mobile: 1 coluna.

---

## 5. Bordas, sombras e superfícies

### Radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-pill: 999px;
```

### Sombras
```css
--shadow-card: 0 8px 30px rgba(0,0,0,.08);
--shadow-soft: 0 14px 50px rgba(0,0,0,.10);
--shadow-header: 0 8px 30px rgba(0,0,0,.10);
```

### Regras
- Cards claros com borda `#ECECEC`.
- Sombras discretas, nunca “flutuantes” demais.
- Imagens com radius entre 12 e 20px.
- Seção hero pode ter cantos retos para maior impacto.

---

## 6. Iconografia — regra obrigatória

### NÃO FAZER
- Não desenhar ícones próprios.
- Não criar SVG manual do zero.
- Não inventar ícones com CSS.
- Não utilizar emojis como ícones.
- Não usar ícones sem origem conhecida.

### USAR APENAS BIBLIOTECAS EXISTENTES
Preferência:
1. `lucide-react`
2. `@phosphor-icons/react`
3. `react-icons`
4. `Simple Icons` para marcas
5. Font Awesome Free quando necessário

### Sugestões
- WhatsApp: `FaWhatsapp`
- Instagram: `FaInstagram`
- YouTube: `FaYoutube`
- LinkedIn: `FaLinkedinIn`
- Facebook: `FaFacebookF`
- Localização: `MapPin`
- Telefone: `Phone`
- E-mail: `Mail`
- Calendário/agendamento: `CalendarDays`
- Equipe: `Users`
- Estrutura: `Building2`
- Tecnologia: `BadgeCheck`, `Scan`, `Cpu`
- Procedimentos: usar ícones genéricos de saúde presentes na biblioteca, nunca desenhados manualmente.
- Seta: `ArrowRight`
- Busca: `Search`
- Menu mobile: `Menu`
- Fechar: `X`

### Estilo
- Stroke: 1.7–2px.
- Tamanho padrão: 18–24px.
- Ícone CTA: branco.
- Ícones institucionais: laranja.

---

## 7. Imagens e placeholders

### Regra desta fase
Todas as imagens são temporárias.

### Não usar
- Imagem gerada automaticamente pelo código.
- Base64.
- Ilustrações artificiais.
- Fotos aleatórias de banco sem necessidade.

### Implementação
Use componentes de placeholder, por exemplo:

```html
<div class="image-placeholder" data-image-slot="hero-home">
  <span>Imagem: fachada da clínica / hero</span>
</div>
```

Ou, caso a estrutura exija `<img>`:

```html
<img
  src="/images/placeholders/hero-home.jpg"
  alt="Placeholder — fachada da Day Clinic"
/>
```

### Slots sugeridos
```txt
hero-home
service-transplante-capilar
service-dermatologia
service-cirurgia-plastica
service-tratamentos-capilares
doctor-janaina
doctor-roberto
transplante-procedimento
clinic-facade
clinic-centro-cirurgico
clinic-consultorios
clinic-tecnologia
blog-featured
blog-01
blog-02
blog-03
about-hero
about-recepcao
services-hero
```

### Aspect ratios
- Hero: 16:9 ou 21:9.
- Cards: 4:3.
- Médico corpo inteiro: 3:4.
- Blog: 16:10.
- Galeria: 16:9.

---

## 8. Header

### Desktop
- Header branco ou translúcido claro.
- Altura aproximada: 72–82px.
- Logo à esquerda.
- Menu central.
- CTA à direita: `Agendar consulta`.
- Borda/sombra suave.
- Em hero: pode ficar flutuante dentro do container, com radius 12–16px.

### Menu
```txt
Quem Somos
Especialidades
Estrutura
Médicos
Conteúdos
Contato
```

### CTA
- Fundo laranja.
- Texto branco.
- Ícone WhatsApp opcional.
- Radius 10–12px.

### Mobile
- Logo.
- CTA reduzido opcional.
- Botão Menu (`Menu` de Lucide).
- Drawer/modal lateral.
- Não encher header com todos os links.

---

## 9. Botões

### Primary
```css
background: var(--brand-orange);
color: white;
border: 1px solid var(--brand-orange);
border-radius: 10px;
padding: 14px 20px;
font-weight: 700;
```

### Hover
```css
background: var(--brand-orange-hover);
transform: translateY(-1px);
```

### Secondary
- Fundo transparente.
- Border laranja.
- Texto laranja/escuro.

### Dark / Overlay
- Fundo `rgba(17,17,17,.15)`.
- Borda branca.
- Texto branco.

### Regra
- Sempre incluir affordance clara.
- Opcional `ArrowRight`.
- Não usar pílulas exageradas em todos os botões.

---

## 10. Hero

### Estrutura
- Background/placeholder de imagem.
- Overlay escuro `rgba(0,0,0,.40–.58)`.
- Conteúdo alinhado à esquerda.
- Eyebrow laranja.
- Título forte.
- Texto de apoio curto.
- 1–2 CTAs.
- Linha inferior de diferenciais.

### Exemplo
```txt
REFERÊNCIA EM MANAUS

Especialistas em
transplante capilar,
dermatologia e
cirurgia plástica.

Tecnologia, experiência médica e acompanhamento individual.

[Agendar avaliação] [Conheça a clínica]
```

### Elementos inferiores
- Equipe médica especializada
- Estrutura própria
- Tecnologia avançada
- Atendimento em Manaus

---

## 11. Cards de serviços

### Visual
- Foto/placeholder ocupando o card.
- Overlay escuro inferior.
- Label/título em branco.
- Texto curto.
- CTA circular ou `ArrowRight`.
- Hover com zoom de imagem 1.03–1.05 e overlay levemente mais claro.

### Serviços
1. Transplante Capilar
2. Dermatologia
3. Cirurgia Plástica
4. Tratamentos Capilares
5. Estética

---

## 12. Seção médicos

### Direção
- Fundo branco ou off-white.
- Composição editorial.
- Fotos de corpo inteiro ou meia altura.
- Nome em laranja.
- Especialidade em uppercase ou peso 700.
- CRM/RQE em texto menor.
- Link `Conhecer trajetória`.

### Médicos
- Dra. Janaina Tirapelle — Dermatologista
- Dr. Roberto Vieira — Cirurgião Plástico / Transplante Capilar

---

## 13. Seção Transplante Capilar

### Estrutura
- 50/50 imagem + conteúdo.
- Divisor diagonal opcional inspirado na arquitetura da clínica.
- Fundo branco.
- Ícones de benefícios vindos da biblioteca.

### Benefícios
- Técnica FUE
- Avaliação individual
- Planejamento da linha capilar
- Equipe especializada
- Acompanhamento pós-operatório
- Resultados naturais

---

## 14. Bloco de métricas

### Visual
- Fundo escuro.
- Texto branco.
- Ícones laranja.

### Itens
- `+10 anos` de experiência
- `+2.000` procedimentos realizados
- Equipe médica especializada
- Estrutura cirúrgica própria

> Se números reais não estiverem confirmados, marcar como conteúdo editável e não inventar dados.

---

## 15. Estrutura / galeria da clínica

### Desktop
- Texto à esquerda.
- Galeria mosaico à direita.
- Foto principal grande.
- 2–3 miniaturas abaixo.

### Categorias
- Fachada
- Centro cirúrgico
- Consultórios
- Recepção
- Tecnologia e equipamentos

---

## 16. Depoimentos

### Card
- Fundo branco.
- Rating.
- Nome.
- Texto.
- Serviço/categoria opcional.
- Ícone/logo do Google apenas se houver asset real/biblioteca apropriada.

### Layout
- 3 cards no desktop.
- Carousel no mobile.
- Não simular avaliações reais não fornecidas.

---

## 17. Blog / Papo de Especialista

### Página listing
- Hero editorial.
- Categorias em tabs.
- Campo de busca.
- Grid de artigos.
- Sidebar com:
  - Categorias
  - Mais lidos
  - Newsletter / captura

### Categorias
- Todos
- Dermatologia
- Transplante Capilar
- Cirurgia Plástica
- Saúde

### Card de artigo
- Imagem/placeholder.
- Badge de categoria.
- Data.
- Título.
- Excerpt de 2–3 linhas.
- CTA `Ler artigo`.

### Desktop
- Conteúdo principal: ~8 colunas.
- Sidebar: ~4 colunas.

### Mobile
- Sidebar vira blocos abaixo dos artigos.

---

## 18. CTA final

### Visual
- Seção escura.
- Background/placeholder de procedimento.
- Overlay forte.
- Texto branco.
- Botão laranja grande.

### Texto
```txt
Seu tratamento começa
com uma boa avaliação.

Converse com nossa equipe e agende sua consulta.

[Agendar pelo WhatsApp]
```

---

## 19. Footer

### Colunas
1. Logo + posicionamento.
2. Contato.
3. Navegação.
4. Redes sociais + CTA.

### Contato
- Telefone
- E-mail
- Endereço
- Instagram

### Ícones
Somente biblioteca.

### Base
- Copyright.
- Texto institucional curto.
- Fundo branco.
- Divisor superior discreto.

---

## 20. Página Home — ordem

```txt
Header
Hero
Especialidades / Serviços
Médicos
Transplante Capilar
Métricas
Estrutura
Diferenciais
Depoimentos
Papo de Especialista
CTA final
Footer
```

---

## 21. Página Quem Somos — ordem

```txt
Header
Hero Quem Somos
História / Propósito
Missão, Visão e Valores
Métricas
Médicos
Estrutura / Galeria
CTA final
Footer
```

---

## 22. Página Serviços — ordem

```txt
Header
Hero Serviços
Tabs/Filtros
Transplante Capilar
Dermatologia
Cirurgia Plástica
Tratamentos Capilares
Estética
CTA final
Footer
```

### Padrão das seções
Alternar imagem esquerda / conteúdo direita e vice-versa.

---

## 23. Página Blog — ordem

```txt
Header
Hero Papo de Especialista
Tabs de categorias + Busca
Grid de artigos
Sidebar Categorias
Sidebar Mais Lidos
Newsletter
CTA final
Footer
```

---

## 24. Motion & Sistema de Animação Controlada

> **Regra de Ouro:** Animação serve para revelar hierarquia, não para chamar mais atenção que o conteúdo.
> Movimentos contidos entre 20 e 45px garantem a estética de clínica premium, evitando o aspecto de landing page agressiva.

### Parâmetros Base do Sistema
```js
duration: 0.55
ease: [0.22, 1, 0.36, 1] // Easing premium suave
distance: 32 // px (distância sutil, nunca > 45px)
stagger: 0.08 // entrada em cascata de itens
viewportAmount: 0.20 // gatilho ao entrar 20% na viewport
```

### Variantes Padronizadas (Framer Motion)
- `fadeUp`: `opacity 0 → 1`, `y: 32 → 0`
- `fadeDown`: `opacity 0 → 1`, `y: -32 → 0`
- `fadeLeft`: `opacity 0 → 1`, `x: -42 → 0`
- `fadeRight`: `opacity 0 → 1`, `x: 42 → 0`
- `scaleIn`: `opacity 0 → 1`, `scale: 0.97 → 1`
- `staggerContainer`: coordena filhos com delay de 80–120ms
- `staggerItem`: revelação individual suave

### Mapa de Aplicação por Seção
- **Hero:** Texto entra pela esquerda (`fadeLeft`); imagem de fundo em scale sutil (`scaleIn`); botões com atraso de 180–250ms (`fadeUp`); diferenciais em `stagger fadeUp`.
- **Serviços:** Cabeçalho em `fadeUp`; cards de especialidades em cascata progressiva (`stagger fadeUp` 80–120ms).
- **Banner Oficial dos Fundadores:** Entrada em `scaleIn` com texto em `fadeLeft` e CTAs em `fadeRight`.
- **Corpo Clínico (Médicos):** Título em `fadeLeft`; cartões médicos em movimento cruzado (Dra. Janaina entra pela esquerda com `fadeLeft`, Dr. Roberto entra pela direita com `fadeRight`).
- **Seções 50/50 (Transplante Capilar e Serviços):** Imagem entra pelo lado onde está posicionada e texto pelo lado oposto; benefícios em `stagger fadeUp`.
- **Métricas:** Bloco inteiro em `fadeUp`; números com contador animado suave quando entram na viewport; ícones com leve scale `0.9 → 1`.
- **Estrutura / Galeria:** Título em `fadeLeft`; foto principal em `scaleIn` (0.97 → 1); miniaturas em `stagger fadeUp`.
- **Depoimentos:** Título em `fadeUp`; cartões em `fadeUp` com leve antecipação do card central.
- **Blog (Papo de Especialista):** Título em `fadeLeft`; cards em `stagger fadeUp`.
- **CTA Final:** Background estável; título, texto e botão entram em sequência `fadeUp`. Botões com microinteração de hover suave (`-2px`), sem pulsos infinitos.

### Acessibilidade & Reduced Motion
- Respeito obrigatório a `prefers-reduced-motion`: quando ativo no sistema do usuário, todos os deslocamentos `x/y/scale` são anulados, preservando apenas transições imediatas ou fades estáticos para evitar labirintite visual.
- Proibição estrita de rotações, elementos flutuantes contínuos, parallax agressivo ou deslocamentos maiores que 45px.

---

## 25. Acessibilidade

- Contraste mínimo WCAG AA.
- `alt` útil em imagens reais.
- Focus visible.
- Botões e links com área mínima de toque ~44px.
- Navegação por teclado.
- Hierarquia `h1 > h2 > h3`.
- Não usar texto apenas em imagem.

---

## 26. Regras de fidelidade

1. Manter o mesmo tom visual em todas as páginas.
2. Usar laranja como cor de ação e destaque.
3. Priorizar espaços em branco e composição editorial.
4. Não adicionar cores novas sem necessidade.
5. Não inventar recursos, dados médicos ou certificações.
6. Não inventar depoimentos.
7. Não inventar números de CRM/RQE.
8. Não criar ícones manualmente.
9. Não trocar o estilo do logo.
10. Não gerar imagens nesta fase.
11. Toda imagem deve ser um slot substituível.
12. Componentes devem ser reutilizáveis.
13. Responsividade deve preservar hierarquia, não apenas “empilhar tudo”.
