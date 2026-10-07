# PROMPT.md — Reconstrução fiel do site Day Clinic

## Objetivo

Crie um site institucional completo para a **Day Clinic Tirapelle & Vieira**, com alta fidelidade ao design system fornecido em `DESIGN_SYSTEM.md`.

O resultado deve reproduzir a direção visual aprovada:
- medicina premium;
- estética limpa e sofisticada;
- forte uso de branco, grafite/preto e laranja;
- composição editorial;
- referências visuais à arquitetura angular da clínica;
- excelente legibilidade;
- responsividade real;
- foco em conversão para agendamento.

---

## Regra principal

**NÃO invente uma nova identidade.**
Implemente o site seguindo o `DESIGN_SYSTEM.md` com fidelidade visual e estrutural.

Não transforme o projeto em um template genérico de clínica.

---

## Stack

Se o ambiente permitir React:

```txt
Next.js / React
TypeScript
Tailwind CSS
lucide-react
react-icons apenas quando necessário para marcas
```

Se o ambiente não utilizar Next.js, adapte a implementação mantendo:
- componentização;
- CSS responsivo;
- semântica;
- acessibilidade;
- mesmas proporções e tokens.

---

## Iconografia — regra obrigatória

### NÃO CRIAR ÍCONES DO ZERO.

É proibido:
- desenhar SVG manualmente;
- criar ícones com CSS;
- gerar ícones via IA;
- usar emojis como substitutos;
- criar ícones decorativos sem origem conhecida.

Use apenas bibliotecas gratuitas e conhecidas:

```txt
lucide-react
@phosphor-icons/react
react-icons
Simple Icons
Font Awesome Free
```

Exemplos:

```tsx
import {
  ArrowRight,
  CalendarDays,
  Search,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Users,
  Building2,
  BadgeCheck
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF
} from "react-icons/fa";
```

Não recrie visualmente os ícones se eles já existirem em biblioteca.

---

## Imagens

### NESTA FASE NÃO USAR FOTOS FINAIS.

Todas as áreas de imagem devem ser placeholders claramente substituíveis.

Crie um componente reutilizável:

```tsx
<ImagePlaceholder
  name="hero-home"
  ratio="21/9"
  label="Fachada da clínica / Hero"
/>
```

Ou equivalente.

Não:
- gerar imagem;
- buscar imagens aleatórias;
- inserir base64;
- criar ilustração;
- usar fotos genéricas como conteúdo final.

### Criar slots para

```txt
hero-home
hero-about
hero-services
hero-blog

doctor-roberto
doctor-janaina

service-transplante
service-dermatologia
service-cirurgia-plastica
service-tratamentos-capilares
service-estetica

transplante-procedimento

clinic-facade
clinic-centro-cirurgico
clinic-consultorios
clinic-recepcao
clinic-tecnologia

blog-featured
blog-01
blog-02
blog-03
blog-04
blog-05
blog-06
```

Os placeholders devem manter o layout final e aceitar troca posterior por arquivo local ou CMS sem alterar o design.

---

## Estrutura global

Criar componentes reutilizáveis:

```txt
Header
MobileMenu
Hero
SectionHeading
PrimaryButton
SecondaryButton
IconFeature
ServiceCard
DoctorCard
MetricItem
ClinicGallery
TestimonialCard
ArticleCard
CategoryTabs
BlogSidebar
FinalCTA
Footer
ImagePlaceholder
```

Evitar duplicação de markup entre páginas.

---

# PÁGINAS

## 1. Home `/`

### Header
- Logo esquerda.
- Menu central.
- CTA laranja direita.
- Sticky.
- Desktop e mobile.

Menu:

```txt
Quem Somos
Especialidades
Estrutura
Médicos
Conteúdos
Contato
```

CTA:
`Agendar consulta`

---

### Hero Home

Estrutura:
- imagem/placeholder em largura total;
- overlay escuro;
- conteúdo à esquerda;
- pequeno eyebrow em laranja;
- H1 grande;
- texto de apoio;
- dois CTAs;
- linha de diferenciais.

Conteúdo:

```txt
REFERÊNCIA EM MANAUS

Especialistas em
transplante capilar,
dermatologia e
cirurgia plástica.

Tecnologia, experiência médica e acompanhamento individual em cada etapa do seu tratamento.

[Agendar avaliação]
[Conheça a clínica]
```

Diferenciais:

```txt
Equipe médica especializada
Estrutura própria
Tecnologia avançada
Manaus/AM
```

---

### Serviços Home

Eyebrow:
`NOSSAS ESPECIALIDADES`

Título:

```txt
Tratamentos completos
para a sua saúde e bem-estar.
```

Grid de 4 cards grandes:

```txt
Transplante Capilar
Dermatologia
Cirurgia Plástica
Tratamentos Capilares
```

Cada card:
- placeholder de foto;
- overlay;
- título;
- texto curto;
- ArrowRight de biblioteca.

---

### Médicos

Título:

```txt
Experiência e dedicação
em cada atendimento.
```

Médicos:

```txt
Dra. Janaina Tirapelle
Dermatologista

Dr. Roberto Vieira
Cirurgião Plástico
```

Adicionar campos editáveis para CRM/RQE.
Não inventar números.

CTA:
`Conheça nossa equipe`

---

### Transplante Capilar

Layout 50/50.

Título:

```txt
Tecnologia e experiência
para resultados naturais.
```

Itens:

```txt
Técnica FUE
Planejamento individual
Acompanhamento
Estrutura especializada
```

Botão:
`Saiba mais sobre o transplante capilar`

---

### Estrutura

Título:

```txt
Um espaço completo
para o seu cuidado.
```

Galeria com placeholders:

```txt
Fachada
Centro cirúrgico
Consultórios
Tecnologia
```

---

### Diferenciais

```txt
Especialistas
Estrutura própria
Tecnologia
Acompanhamento
```

Usar ícones apenas de biblioteca.

---

### Depoimentos

Título:

```txt
Histórias reais
de resultados.
```

Criar cards de placeholder de depoimento.
Não inventar nomes ou avaliações.
Usar conteúdo mock explicitamente marcado como exemplo ou deixar vazio.

---

### Papo de Especialista

Título:

```txt
Conteúdos para a sua
saúde e bem-estar.
```

3 cards de artigos.

---

### CTA final

```txt
Seu tratamento começa
com uma boa avaliação.

Converse com nossa equipe e agende sua consulta.

[Agendar pelo WhatsApp]
```

---

## 2. Quem Somos `/quem-somos`

### Hero

```txt
QUEM SOMOS

Experiência, tecnologia
e cuidado em cada detalhe.
```

Texto curto institucional.

---

### Nossa História

Layout 50/50:
- placeholder recepção;
- texto institucional.

Título:

```txt
Uma trajetória construída
com propósito.
```

---

### Missão, Visão e Valores

Criar 3 cards:

```txt
Missão
Visão
Valores
```

Ícones somente de biblioteca.

---

### Métricas

Bloco escuro.

Campos editáveis:

```txt
+XX anos de experiência
+XXXX procedimentos realizados
Equipe médica especializada
Estrutura cirúrgica própria
```

Não inventar os valores reais se não forem fornecidos.

---

### Médicos
Mesma linguagem visual da Home.

---

### Estrutura
Galeria maior com 5 slots:

```txt
Fachada
Centro cirúrgico
Consultórios
Recepção
Sala de procedimentos
```

---

## 3. Serviços `/servicos`

### Hero

```txt
NOSSOS SERVIÇOS

Tratamentos completos
para a sua saúde e
bem-estar.
```

Adicionar 4 diferenciais em card escuro sobre o hero:

```txt
Equipe médica especializada
Estrutura própria
Tecnologia avançada
Atendimento personalizado
```

---

### Tabs

```txt
Todos os serviços
Transplante Capilar
Dermatologia
Cirurgia Plástica
Tratamentos Capilares
Estética
```

Tabs devem funcionar como filtro/âncora.

---

### Seções de serviço

Alternar imagem e conteúdo.

#### Transplante Capilar

```txt
TRANSPLANTE CAPILAR

Transplante Capilar Fio a Fio (FUE)
```

Benefícios:
```txt
Técnica FUE
Planejamento da linha capilar
Resultados naturais
Acompanhamento pós-operatório
Equipe especializada
Procedimento seguro
```

CTAs:
`Agendar avaliação`
`Saiba mais`

---

#### Dermatologia

```txt
DERMATOLOGIA

Dermatologia Clínica e Estética
```

Itens:
```txt
Acne e oleosidade
Manchas e melasma
Rejuvenescimento facial
Doenças de pele, cabelos e unhas
Procedimentos estéticos
Tecnologias avançadas
```

---

#### Cirurgia Plástica

```txt
CIRURGIA PLÁSTICA

Procedimentos Estéticos e Reparadores
```

Lista editável de procedimentos.

---

#### Tratamentos Capilares

```txt
TRATAMENTOS CAPILARES

Soluções para a saúde dos seus cabelos
```

Itens:
```txt
MMP capilar
Bioestimuladores
Terapias injetáveis
LED / laser capilar
Protocolos personalizados
Acompanhamento médico
```

---

#### Estética

```txt
ESTÉTICA

Procedimentos estéticos não cirúrgicos
```

Itens:
```txt
Limpeza de pele
Peelings químicos
Microagulhamento
Preenchimentos
Toxina botulínica
Bioestimuladores de colágeno
```

---

## 4. Blog `/papo-de-especialista`

### Hero

```txt
Papo de Especialista

Conteúdos confiáveis e atualizados sobre dermatologia,
transplante capilar, cirurgia plástica e saúde,
com a experiência da equipe Day Clinic Tirapelle & Vieira.
```

---

### Filtros

Tabs:

```txt
Todos
Dermatologia
Transplante Capilar
Cirurgia Plástica
Saúde
```

Busca:
`Buscar conteúdos...`

---

### Layout

Desktop:

```txt
[ Conteúdo principal 8 colunas ] [ Sidebar 4 colunas ]
```

Mobile:
```txt
Conteúdo
Sidebar
```

---

### Card de artigo

Campos:

```txt
image
category
date
title
excerpt
slug
```

Visual:
- imagem superior;
- badge laranja;
- data;
- título;
- texto com clamp;
- link `Ler artigo`.

---

### Sidebar

Bloco 1:
`Categorias`

Bloco 2:
`Mais lidos`

Bloco 3:
Newsletter

```txt
Receba nossos
conteúdos por e-mail

Fique por dentro das novidades,
dicas e artigos da nossa equipe.

[Quero receber]
```

---

## Footer global

Estrutura aproximada:

```txt
[Logo e frase]
[Contato]
[Navegação]
[CTA + redes sociais]
```

Contato:
```txt
Telefone
E-mail
Endereço
Instagram
```

Use ícones de biblioteca.

---

# RESPONSIVIDADE

## Desktop
- Container máximo ~1240px.
- Hero com 70–85vh quando apropriado.
- Grids 4 / 3 / 2 colunas conforme seção.

## Tablet
- Reduzir headings.
- Cards 2 colunas.
- Sidebar do blog permanece apenas se houver espaço real.

## Mobile
- 1 coluna.
- Menu drawer.
- Botões full/near-full width em CTAs principais.
- Hero mínimo 620–720px quando necessário.
- Imagens/placeholder acima do texto em seções 50/50.
- Não reduzir fonte de corpo abaixo de 15–16px.

---

# MICROINTERAÇÕES

Use apenas:
- hover de botão;
- hover de card;
- leve scale da imagem;
- fade/slide na entrada;
- sticky header;
- smooth scroll.

Não usar:
- parallax pesado;
- glassmorphism excessivo;
- animações infinitas;
- partículas;
- neon;
- blobs decorativos genéricos.

---

# SEO E SEMÂNTICA

- Um `h1` por página.
- Sections com `h2`.
- Cards com `h3`.
- Metadata por rota.
- Open Graph preparado.
- JSON-LD de organização/clínica apenas com dados reais.
- Não inventar informações médicas ou endereço.

---

# PERFORMANCE

- Lazy-load abaixo da dobra.
- Imagens futuras com componente otimizado.
- Evitar dependências pesadas.
- Preferir CSS/Tailwind a bibliotecas de UI gigantes.
- Lighthouse mobile deve permanecer como prioridade.

---

# REGRAS DE CONTEÚDO

1. Não inventar CRM/RQE.
2. Não inventar depoimentos.
3. Não inventar métricas.
4. Não inventar certificações.
5. Não inventar especialidades médicas.
6. Conteúdo provisório deve estar marcado como editável.
7. CTAs devem apontar para rota/URL configurável.
8. WhatsApp deve ser configurado em variável/arquivo central.

---

# VARIÁVEIS DE CONFIGURAÇÃO

Criar arquivo central:

```ts
export const clinicConfig = {
  name: "Day Clinic Tirapelle & Vieira",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  instagram: "",
  youtube: "",
  linkedin: "",
};
```

Não espalhar dados de contato pelo código.

---

# CRITÉRIOS DE ACEITE

A implementação só está pronta quando:

- [ ] Visual segue o `DESIGN_SYSTEM.md`.
- [ ] Home está completa.
- [ ] Quem Somos está completa.
- [ ] Serviços está completa.
- [ ] Blog está completo.
- [ ] Desktop, tablet e mobile funcionam.
- [ ] Nenhum ícone foi criado manualmente.
- [ ] Nenhuma imagem definitiva foi inventada.
- [ ] Todos os slots de imagem são substituíveis.
- [ ] Header e footer são reutilizados.
- [ ] Componentes repetidos foram abstraídos.
- [ ] CTAs possuem estados hover/focus.
- [ ] Layout não parece template genérico.
- [ ] Nenhum dado médico foi inventado.
- [ ] Não há emojis usados como interface.
- [ ] A identidade laranja/preto/branco permanece consistente.

---

# INSTRUÇÃO FINAL AO GERADOR

Antes de codificar, leia `DESIGN_SYSTEM.md` inteiro.

Depois:
1. Estruture os tokens.
2. Crie os componentes globais.
3. Implemente Header e Footer.
4. Implemente a Home.
5. Implemente Quem Somos.
6. Implemente Serviços.
7. Implemente Blog.
8. Ajuste responsividade.
9. Revise fidelidade visual.
10. Confirme que nenhum ícone foi desenhado do zero.
11. Confirme que todas as imagens são placeholders substituíveis.

**Priorize fidelidade ao layout e consistência sobre criatividade.**
