/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Wallet, 
  FileText, 
  HelpCircle,
  Clock,
  Briefcase,
  Target,
  Mail,
  Lock,
  Star,
  Check
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* URGENCY BAR */}
      <div className="bg-red-600 text-white text-center py-2.5 px-4 text-xs md:text-sm font-semibold sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 text-white" />
          <span>A reforma entra em vigor em 2026 — <span className="font-normal opacity-90 underline decoration-red-300 underline-offset-4">cada mês sem preparação é um mês de prejuízo acumulando.</span></span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-brand-navy text-brand-cream-light pt-20 pb-32 px-6 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#2563EB_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-brand-gold text-brand-navy px-4 py-1.5 rounded-sm text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8 shadow-lg shadow-brand-gold/20"
          >
            Lançamento 2026 · Guia Definitivo
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 font-black"
          >
            A Reforma Tributária vai <span className="italic text-brand-gold-light">mudar as regras do jogo.</span> Você está preparado?
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-brand-cream-light/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Enquanto a maioria dos empresários vai ser <strong className="text-white font-semibold underline decoration-brand-gold/40 underline-offset-4">pega de surpresa</strong>, você pode entender agora o que muda, proteger sua margem e sair na frente dos concorrentes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <a 
              href="https://pay.hotmart.com/O105792845M" 
              className="inline-flex items-center gap-2 bg-gradient-to-br from-brand-gold to-brand-gold-light hover:to-white text-brand-navy px-10 py-5 rounded-md text-lg font-extrabold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-gold/40 active:translate-y-0"
              id="hero-cta"
            >
              Quero meu Manual de Sobrevivência <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-brand-cream-light/40 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de 7 dias · Acesso imediato · Sem complicação</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative Curve */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-brand-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* PAIN SECTION */}
      <section className="bg-brand-cream pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block font-bold">O problema real</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8 text-brand-navy">
              Você sabe o que é IBS, CBS, IVA e Split Payment?<br />
              <span className="text-red-700">Se não sabe — sua empresa está em risco.</span>
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-normal">
              <p>
                A Reforma Tributária é <strong className="text-brand-navy font-bold">a maior mudança no sistema de impostos do Brasil em décadas.</strong> Ela vai afetar preços, contratos, fluxo de caixa e a relação com seus clientes corporativos. E o pior: de forma silenciosa.
              </p>
              <p>
                Enquanto você lê isso, empresas maiores já estão se adaptando. Já estão simulando créditos. Já estão conversando com fornecedores. E quando a poeira baixar, quem não se preparou vai descobrir que perdeu clientes, margem e competitividade sem nem entender o que aconteceu.
              </p>
            </div>
          </motion.div>

          <motion.ul 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            {[
              "Seus clientes B2B vão começar a exigir fornecedores que gerem crédito tributário — e trocar os que não geram",
              "O Split Payment vai reter imposto automaticamente antes do dinheiro chegar no seu caixa",
              "Sua precificação atual pode estar gerando prejuízo disfarçado de lucro",
              "Empresas do Simples Nacional podem perder atratividade competitiva da noite para o dia",
              "A falta de informação vai custar mais caro do que qualquer imposto novo"
            ].map((item, idx) => (
              <motion.li key={idx} variants={itemScale} className="flex gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-300">
                <div className="flex-shrink-0 mt-1">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-gray-800 text-base md:text-lg">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p 
            {...fadeIn}
            className="text-xl font-bold text-brand-navy border-l-4 border-brand-gold pl-6 py-2 italic"
          >
            A boa notícia: quem entende o que vem pela frente tem tempo de virar o jogo.
          </motion.p>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="bg-brand-navy-light text-brand-cream-light py-16 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-xs md:text-sm uppercase tracking-widest text-brand-cream-light/40 mb-10 font-bold">Por que este manual foi criado</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: "7", label: "capítulos práticos" },
              { num: "5", label: "perfis de risco mapeados" },
              { num: "0", label: "juridiquês. Zero." },
              { num: "100%", label: "acionável agora" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-1"
              >
                <div className="font-serif text-4xl md:text-5xl font-black text-brand-gold">{stat.num}</div>
                <div className="text-xs uppercase tracking-wider text-brand-cream-light/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION (CHAPTERS) */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.span {...fadeIn} className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block font-bold">O que você recebe</motion.span>
          <motion.h2 {...fadeIn} className="font-serif text-3xl md:text-5xl leading-tight mb-16 text-brand-navy max-w-2xl font-black">
            7 capítulos que transformam confusão em clareza — e clareza em vantagem competitiva
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                cap: "Capítulo 01", 
                title: "O que realmente muda em 2026", 
                desc: "IBS, CBS, IVA e Split Payment explicados em linguagem humana. Sem juridiquês. Sem enrolação.",
                icon: <FileText className="w-5 h-5" />
              },
              { 
                cap: "Capítulo 02", 
                title: "O risco invisível que pode destruir sua margem", 
                desc: "Como o aumento indireto de custos, a pressão de preços e a perda de competitividade estão se formando agora — em silêncio.",
                tag: "🔥 Urgente",
                icon: <AlertTriangle className="w-5 h-5" />
              },
              { 
                cap: "Capítulo 03", 
                title: "Por que empresas B2B vão trocar fornecedores", 
                desc: "Entenda como o crédito tributário vai mudar a lógica de compras corporativas e o que fazer antes de perder seus melhores clientes.",
                tag: "⚡ Vital",
                icon: <Users className="w-5 h-5" />
              },
              { 
                cap: "Capítulo 04", 
                title: "O impacto no fluxo de caixa", 
                desc: "Split Payment na prática: como a retenção automática muda tudo — e como calcular o impacto real no seu caixa disponível.",
                icon: <Wallet className="w-5 h-5" />
              },
              { 
                cap: "Capítulo 05", 
                title: "Como recalcular seus preços sem perder clientes", 
                desc: "Passo a passo para ajustar sua precificação, comunicar reajustes com inteligência e manter margem sem afastar clientes.",
                tag: "✅ Prático",
                icon: <TrendingUp className="w-5 h-5" />
              },
              { 
                cap: "Capítulo 06", 
                title: "Os 5 perfis que mais correm risco", 
                desc: "Serviços B2B, distribuidoras, dependentes de PJ, empresas do Simples — você se reconhece em algum? Aqui está o que fazer.",
                icon: <Target className="w-5 h-5" />
              },
              { 
                cap: "Capítulo 07", 
                title: "Checklist de Sobrevivência 2026", 
                desc: "Tudo que você precisa revisar, simular e ajustar — numa lista direta que você pode agir hoje mesmo.",
                tag: "📋 Bônus",
                icon: <CheckCircle2 className="w-5 h-5" />,
                fullWidth: true
              }
            ].map((chapter, idx) => (
              <motion.div 
                key={idx}
                variants={itemScale}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group relative bg-brand-cream/30 border border-gray-100 p-8 rounded-xl transition-all duration-300 hover:border-brand-gold/30 hover:bg-white hover:shadow-xl ${chapter.fullWidth ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white p-3 rounded-lg shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                    {chapter.icon}
                  </div>
                  {chapter.tag && (
                    <span className="bg-brand-gold/20 text-brand-navy py-1 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {chapter.tag}
                    </span>
                  )}
                </div>
                <div className="space-y-4">
                  <p className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest">{chapter.cap}</p>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-brand-navy transition-colors">{chapter.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{chapter.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="bg-brand-navy text-brand-cream-light py-24 px-6 overflow-hidden relative">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
          <motion.div {...fadeIn} className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-4 block font-bold">Este manual é para você se…</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-4 font-black">
              Você toca um negócio real e precisa de respostas — não de teoria
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <Briefcase />, title: "Pequenas e médias empresas", desc: "Que não têm equipe jurídica e precisam entender a reforma por conta própria." },
              { icon: <TrendingUp />, title: "Empresas que vendem para PJ", desc: "Que precisam entender crédito tributário antes de perder contratos importantes." },
              { icon: <ShieldCheck />, title: "Negócios com margem apertada", desc: "Onde qualquer variação tributária pode transformar lucro em prejuízo." },
              { icon: <Clock />, title: "Empreendedores que querem sair na frente", desc: "Que entendem que informação antecipada é vantagem competitiva real." },
              { icon: <Target />, title: "Optantes pelo Simples Nacional", desc: "Que precisam entender se seu regime ainda é vantajoso no novo cenário." },
              { icon: <Wallet />, title: "Quem quer proteger o caixa", desc: "Antes que o Split Payment chegue e mude a matemática do seu capital de giro." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemScale}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 md:text-left text-left items-start"
              >
                <div className="bg-brand-gold text-brand-navy p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-white text-base">{item.title}</h4>
                  <p className="text-sm text-brand-cream-light/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block font-bold">Depoimentos</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-brand-navy font-black">Quem leu, entendeu. Quem entendeu, agiu.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                text: "Finalmente alguém explicou a reforma sem me fazer dormir. Em duas horas li tudo, já marquei reunião com meu contador e estou revisando minha tabela de preços.",
                author: "Fernanda R.",
                role: "Consultora de RH · São Paulo, SP"
              },
              { 
                text: "O capítulo sobre B2B e crédito tributário me abriu os olhos. Meu maior cliente já perguntou sobre isso e eu fui o único fornecedor que soube responder direito.",
                author: "Marcos T.",
                role: "Distribuidora de materiais · Curitiba, PR"
              },
              { 
                text: "Comprei com desconfiança, li em uma tarde. O checklist final sozinho já valeu cada centavo. Agora tenho um plano de ação para os próximos 6 meses.",
                author: "Juliana M.",
                role: "Agência de marketing · Belo Horizonte, MG"
              }
            ].map((testi, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-brand-cream/20 p-8 rounded-2xl border-l-4 border-brand-gold relative group"
              >
                <div className="flex gap-1 text-brand-gold mb-6">
                  <Star className="w-4 h-4 fill-brand-gold" />
                  <Star className="w-4 h-4 fill-brand-gold" />
                  <Star className="w-4 h-4 fill-brand-gold" />
                  <Star className="w-4 h-4 fill-brand-gold" />
                  <Star className="w-4 h-4 fill-brand-gold" />
                </div>
                <p className="text-gray-700 italic text-base leading-relaxed mb-8 flex-grow">"{testi.text}"</p>
                <div>
                  <p className="font-extrabold text-brand-navy text-sm">{testi.author}</p>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="comprar" className="bg-brand-navy relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(37,99,235,0.3)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span {...fadeIn} className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-4 block font-bold">Investimento</motion.span>
          <motion.h2 {...fadeIn} className="font-serif text-3xl md:text-5xl leading-tight mb-20 text-white font-black max-w-2xl mx-auto">
            Menos do que uma hora de consultoria.<br />
            <span className="text-brand-gold-light">O impacto de um ano de preparação.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto bg-white rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden border border-white/20"
          >
            <div className="bg-brand-gold py-2 px-4 shadow-inner">
               <span className="text-[10px] font-extrabold text-brand-navy uppercase tracking-[0.2em]">Acesso Imediato · Oferta de Lançamento</span>
            </div>
            
            <div className="p-10 text-brand-navy">
              <h3 className="font-serif text-2xl font-black mb-1">Reforma Tributária 2026</h3>
              <p className="text-gray-500 text-sm font-medium mb-10">O Manual de Sobrevivência para Pequenas Empresas</p>

              <div className="mb-10 text-center">
                <p className="text-gray-400 line-through text-sm font-medium mb-1">De R$ 97,00</p>
                <div className="flex items-center justify-center -ml-4">
                  <span className="text-2xl font-serif font-black self-start mt-2 mr-1">R$</span>
                  <span className="text-7xl font-serif font-black tracking-tight">37</span>
                  <div className="text-left ml-2">
                    <p className="text-xl font-serif font-black leading-none">,90</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">único</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-medium mt-6">Pagamento único · Sem mensalidade · Sem renovação</p>
              </div>

              <ul className="space-y-4 mb-10 text-left">
                {[
                  "7 capítulos completos em PDF (acesso imediato)",
                  "Checklist de Sobrevivência 2026 para imprimir",
                  "Linguagem clara, sem juridiquês",
                  "Leitura em menos de 2 horas",
                  "Atualizado com as regras de 2026"
                ].map((inc, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="bg-green-100 rounded-full p-1 border border-green-200">
                      <Check className="w-3.5 h-3.5 text-green-700" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{inc}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://pay.hotmart.com/O105792845M" 
                className="block w-full bg-brand-navy hover:bg-black text-white text-lg font-black py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-brand-navy/30 active:translate-y-0 text-center mb-6"
                id="pricing-cta"
              >
                SIM! Quero meu Manual por R$ 37,90 →
              </a>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                <Lock className="w-3 h-3" />
                <span>Pagamento 100% seguro · Pix, cartão ou boleto</span>
              </div>
            </div>
          </motion.div>

          {/* GUARANTEE BOX */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-20 bg-green-50/5 border border-green-500/20 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start text-left"
          >
            <div className="bg-green-500 rounded-2xl p-6 text-white shadow-xl shadow-green-500/20 animate-pulse">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-green-400 font-black mb-3">Garantia Incondicional de 7 Dias</h3>
              <p className="text-brand-cream-light/60 text-base leading-relaxed font-light">
                Se por qualquer motivo você não ficar satisfeito com o conteúdo nos primeiros 7 dias após a compra, basta enviar um e-mail e devolvemos <strong className="text-white font-bold">100% do seu dinheiro.</strong> Sem perguntas, sem burocracia, sem enrolação. O risco é todo nosso.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block font-bold">Dúvidas frequentes</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-brand-navy font-black">Perguntas que você pode ter</h2>
          </div>

          <div className="space-y-2">
            {[
              { q: "Como vou receber o material?", a: "Imediatamente após a confirmação do pagamento, você recebe o link de download por e-mail. Não precisa esperar nada — é acesso imediato." },
              { q: "Precisa ter conhecimento contábil para entender?", a: "Não. O material foi escrito justamente para quem não é contador. Zero juridiquês, linguagem direta, exemplos práticos do dia a dia de quem tem um negócio." },
              { q: "Minha empresa é do Simples Nacional. Vale para mim?", a: "Especialmente para você. O manual tem um capítulo inteiro sobre os riscos e oportunidades para empresas do Simples no novo cenário tributário." },
              { q: "E se eu quiser meu dinheiro de volta?", a: "Você tem 7 dias de garantia total. Se não gostar, basta pedir o reembolso por e-mail e devolvemos tudo, sem questionamentos. Simples assim." },
              { q: "Isso substitui meu contador?", a: "Não — e esse nunca foi o objetivo. O manual te prepara para entender o cenário, fazer as perguntas certas e tomar decisões informadas junto com seu contador. Ele vai agradecer pelo cliente mais preparado." }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-gray-100 last:border-0 py-6">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black flex-shrink-0 group-open:bg-blue-600 group-open:text-white transition-all duration-300">?</div>
                    <h4 className="text-lg font-extrabold text-brand-navy group-hover:text-blue-600 transition-colors leading-tight">{faq.q}</h4>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="pl-12 pt-4">
                  <p className="text-gray-600 leading-relaxed text-base">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-navy-light py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-6xl leading-[1.1] text-white font-black mb-8"
          >
            A reforma vai acontecer.<br />
            <span className="italic text-brand-gold">A questão é: você vai ser vítima ou protagonista?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-cream-light/60 max-w-lg mx-auto mb-12 font-light"
          >
            Em 2026, quem tiver clareza vai ter vantagem. Quem ficar esperando vai ficar para trás. A decisão é simples.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="https://pay.hotmart.com/O105792845M" 
              className="inline-flex items-center gap-3 bg-gradient-to-br from-brand-gold to-brand-gold-light text-brand-navy px-12 py-6 rounded-2xl text-xl font-black transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/40 active:translate-y-0"
              id="final-cta-btn"
            >
              Quero estar preparado por R$ 37,90 <ArrowRight />
            </a>
            <p className="text-xs text-brand-cream-light/30 mt-8 font-bold uppercase tracking-[0.2em]">Garantia de 7 dias · Acesso imediato · Pagamento seguro</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-navy border-t border-white/5 py-12 px-6 text-center text-[10px] md:text-xs">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-brand-cream-light/30 font-bold uppercase tracking-widest leading-loose">
            © 2026 · Reforma Tributária 2026 — Manual de Sobrevivência
          </p>
          <p className="text-brand-cream-light/20 max-w-sm mx-auto leading-relaxed">
            Este material tem fins educacionais e informativos. Não substitui consultoria jurídica ou contábil especializada.
          </p>
        </div>
      </footer>
    </div>
  );
}
