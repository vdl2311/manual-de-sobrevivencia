import React, { useState } from 'react';
import './LandingPage.css';
import BookPreview from './BookPreview';

const CHECKOUT_URL = "https://pay.hotmart.com/O105792845M";

export default function LandingPage({ setPage }: { setPage?: (page: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
    <header>
      {/* ANNOUNCEMENT BAR */}
      <div className="topbar">
        ⚠ A Reforma Tributária já está em vigor — sua empresa ainda tem tempo de se reposicionar
      </div>
    </header>

    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">Manual Prático para Empreendedores · Em vigor agora</div>

          <h1>A Reforma Tributária já chegou.<br />Sua empresa está <em>preparada?</em></h1>

          <p className="hero-sub">
            Entenda o que mudou, proteja sua margem, mantenha seus clientes B2B
            e corrija agora os erros que já estão corroendo o caixa de quem não se adaptou.
          </p>

          <div className="hero-book">
            <div className="book-icon">📘</div>
            <div className="book-info">
              <p>Manual completo · 7 capítulos</p>
              <strong>Reforma Tributária 2026 — O Manual de Sobrevivência para Pequenas Empresas</strong>
            </div>
          </div>

          <div className="cta-group">
            <div className="price-display">Por apenas <strong>R$ 37,90</strong></div>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero me preparar agora →</a>
          </div>

          <div className="trust-row">
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Compra 100% segura
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12m0 0l-4 4m4-4l4 4M4 4h16"/></svg>
              Download imediato
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              Garantia de 7 dias
            </div>
          </div>
        </div>
      </section>

      {/* BOOK PREVIEW */}
      <section className="section bg-[var(--navy-mid)] text-white" id="preview">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ color: 'var(--gold)' }}>Espiadinha no Manual</div>
          <h2 className="section-title text-white" style={{ color: 'var(--white)' }}>Veja como o conteúdo é direto ao ponto</h2>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>
            Leia agora mesmo as primeiras páginas e entenda por que empresários estão agindo rápido.
          </p>

          <BookPreview />
          
          <div style={{ marginTop: '40px' }}>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero ler o manual completo →</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section">
        <div className="container">
          <div className="section-label">O cenário atual</div>
          <h2 className="section-title">O que já mudou para as pequenas empresas</h2>
          <p className="section-body">
            A Reforma Tributária não é mais uma promessa futura. É uma realidade em vigor — e ela mudou
            a forma como o dinheiro flui, afetando diretamente o caixa, a competitividade e os contratos
            de qualquer pequeno negócio.
          </p>
          <p className="section-body" style={{ marginTop: '16px' }}>
            IBS, CBS, IVA, Split Payment: cada um desses mecanismos já opera com lógica nova.
            Quem compreender essa lógica agora ainda consegue se reposicionar. Quem ignorar,
            vai absorver o custo sem saber de onde ele veio.
          </p>

          <div className="urgency-strip" style={{ marginTop: '36px' }}>
            <p>
              <strong>Com o Split Payment já em implementação</strong>, quando um cliente paga pelo seu produto ou serviço,
              o sistema bancário separa automaticamente a parcela do imposto — antes mesmo de o valor chegar na sua conta.
              A "folga" financeira que existia entre receber e recolher o imposto está desaparecendo.
              <strong>Quem não ajustou o fluxo de caixa já está sentindo o impacto.</strong>
            </p>
          </div>

          <div className="risk-grid">
            <div className="risk-card">
              <div className="risk-number">01</div>
              <h3>Impacto no fluxo de caixa</h3>
              <p>O Split Payment encerra o "intervalo" entre receber e recolher impostos. O caixa disponível imediato vai diminuir.</p>
            </div>
            <div className="risk-card">
              <div className="risk-number">02</div>
              <h3>Perda de clientes B2B</h3>
              <p>Empresas que compram vão priorizar fornecedores que geram crédito tributário. Estar fora desse critério significa perder contratos.</p>
            </div>
            <div className="risk-card">
              <div className="risk-number">03</div>
              <h3>Margem corroída</h3>
              <p>Sem reprecificação adequada, o aumento de carga tributária vai ser absorvido silenciosamente pela margem de lucro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section className="section learn-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--gold)' }}>O que você vai dominar</div>
          <h2 className="section-title">7 capítulos direto ao ponto</h2>
          <p className="section-body">
            Sem juridiquês. Sem enrolação. Cada capítulo traz o que você precisa entender —
            e o que você precisa fazer agora, com a reforma já em vigor.
          </p>

          <div className="chapters-list">
            <div className="chapter-item">
              <div className="chapter-num">1</div>
              <div className="chapter-text">
                <strong>O que realmente muda em 2026</strong>
                <span>IBS, CBS, IVA e Split Payment explicados em linguagem humana — o que cada um significa na prática para o seu negócio hoje.</span>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num">2</div>
              <div className="chapter-text">
                <strong>O risco invisível que pode destruir sua margem</strong>
                <span>Os três riscos silenciosos que estão se formando agora — e como identificá-los antes que seja tarde.</span>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num">3</div>
              <div className="chapter-text">
                <strong>Por que empresas B2B vão trocar fornecedores</strong>
                <span>A lógica econômica do crédito tributário e por que "atratividade fiscal" vai ser o novo critério de seleção.</span>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num">4</div>
              <div className="chapter-text">
                <strong>O impacto no fluxo de caixa</strong>
                <span>Como o Split Payment já está alterando a matemática do caixa — e como corrigir suas projeções financeiras agora.</span>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num">5</div>
              <div className="chapter-text">
                <strong>Como recalcular seus preços sem perder clientes</strong>
                <span>Passo a passo para ajustar a precificação com inteligência, incluindo a técnica do markup reverso.</span>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num">6</div>
              <div className="chapter-text">
                <strong>Os 5 perfis de empresa que mais correm risco</strong>
                <span>Distribuidoras, prestadores B2B, Simples Nacional com ticket alto: veja se o seu negócio está na mira.</span>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num">7</div>
              <div className="chapter-text">
                <strong>Checklist de Sobrevivência 2026</strong>
                <span>Roteiro de ações concretas + as 3 conversas que você precisa ter agora (com contador, clientes e banco).</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="container-wide">
          <div className="container" style={{ maxWidth: '780px' }}>
            <div className="section-label">Para quem é este manual</div>
            <h2 className="section-title">Este material foi escrito para você se…</h2>
          </div>

          <div className="profiles-grid" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div className="profile-card">
              <div className="profile-icon">🏪</div>
              <h3>Tem uma pequena ou média empresa</h3>
              <p>E quer entender como a reforma afeta seu setor específico — e o que corrigir agora na operação.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">🤝</div>
              <h3>Vende para outras empresas (B2B)</h3>
              <p>E precisa saber se vai gerar crédito tributário para seus clientes — e o que fazer se não gerar.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">📊</div>
              <h3>Trabalha com margens apertadas</h3>
              <p>E sabe que qualquer mudança tributária sem planejamento pode consumir a lucratividade rapidamente.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">💼</div>
              <h3>Está no Simples Nacional</h3>
              <p>E quer entender se vale migrar de regime — e o que muda na sua competitividade com o novo IVA.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">💰</div>
              <h3>Depende de capital de giro</h3>
              <p>E precisa simular como o Split Payment vai afetar suas projeções financeiras mensais.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">🎯</div>
              <h3>Quer precificar corretamente</h3>
              <p>E não sabe como repassar o impacto sem perder clientes ou corroer silenciosamente a margem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section" style={{ background: 'var(--gold-pale)', borderTop: '1px solid rgba(201,146,42,0.2)' }}>
        <div className="container">
          <div className="section-label">O que você leva</div>
          <h2 className="section-title">Tudo para agir com clareza</h2>

          <div className="checklist">
            <div className="check-item">
              <div className="check-icon">
                <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2,6 5,9 10,3"/></svg>
              </div>
              <span><strong>Manual completo em PDF</strong> — 7 capítulos, leitura direta e sem enrolação, com linguagem acessível para quem não é contador</span>
            </div>
            <div className="check-item">
              <div className="check-icon">
                <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2,6 5,9 10,3"/></svg>
              </div>
              <span><strong>Checklist de Sobrevivência 2026</strong> — roteiro prático com ações concretas para implementar agora, organizadas por prioridade</span>
            </div>
            <div className="check-item">
              <div className="check-icon">
                <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2,6 5,9 10,3"/></svg>
              </div>
              <span><strong>Passo a passo de reprecificação</strong> — método markup reverso explicado com espaço para você preencher com os números do seu próprio negócio</span>
            </div>
            <div className="check-item">
              <div className="check-icon">
                <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2,6 5,9 10,3"/></svg>
              </div>
              <span><strong>As 3 conversas que você precisa ter agora</strong> — scripts prontos para falar com seu contador, seus clientes B2B e seu gerente bancário</span>
            </div>
            <div className="check-item">
              <div className="check-icon">
                <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5"><polyline points="2,6 5,9 10,3"/></svg>
              </div>
              <span><strong>Download imediato após a compra</strong> — acesso instantâneo, sem espera, leia em qualquer dispositivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container-wide">
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="section-label">Depoimentos</div>
            <h2 className="section-title">Quem leu, entendeu. Quem entendeu, agiu.</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Finalmente alguém explicou a reforma sem me fazer dormir. Em duas horas li tudo, já marquei reunião com meu contador e estou revisando minha tabela de preços."</p>
              <div className="testimonial-author">
                <strong>Fernanda R.</strong>
                <span>Consultora de RH · São Paulo, SP</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">"O capítulo sobre B2B e crédito tributário me abriu os olhos. Meu maior cliente já perguntou sobre isso e eu fui o único fornecedor que soube responder direito."</p>
              <div className="testimonial-author">
                <strong>Marcos T.</strong>
                <span>Distribuidora de materiais · Curitiba, PR</span>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">"Comprei com desconfiança, li em uma tarde. O checklist final sozinho já valeu cada centavo. Agora tenho um plano de ação para os próximos 6 meses."</p>
              <div className="testimonial-author">
                <strong>Juliana M.</strong>
                <span>Agência de marketing · Belo Horizonte, MG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="section offer-section" id="oferta">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-label" style={{ color: 'var(--gold)' }}>Sua oferta de hoje</div>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Você ainda está a tempo.<br />Mas a janela está se fechando.</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* MOCKUP IMAGE */}
            <div className="flex-1 w-full flex justify-center order-2 lg:order-1 pt-8 lg:pt-0">
              <div className="relative group cursor-pointer w-full max-w-md lg:max-w-full">
                <img 
                  src="/mockup.png" 
                  alt="" 
                  className="w-full drop-shadow-2xl rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {/* Fallback visual caso a imagem não carregue */}
                <div className="absolute inset-0 border-2 border-dashed border-[#C9922A] rounded-xl opacity-0 m-2 flex items-end justify-center pb-6 pointer-events-none group-has-[img:-moz-broken]:opacity-50 group-has-[img:-webkit-broken]:opacity-50">
                  <span className="bg-[#132040] text-[#E5B84A] px-4 py-2 text-xs font-bold rounded shadow-lg uppercase tracking-wider text-center">
                    Faça upload da imagem "mockup.png" <br />na pasta "public" à esquerda
                  </span>
                </div>
              </div>
            </div>

            {/* OFFER BOX */}
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="offer-box" style={{ margin: '0 auto', width: '100%', maxWidth: '100%' }}>
                <div className="offer-header">
                  <p>Acesso completo · Download imediato</p>
                  <strong>Reforma Tributária 2026 — Manual de Sobrevivência</strong>
                </div>
                <div className="offer-body">
                  <div className="price-main"><sup>R$</sup>37<sup>,90</sup></div>
                  <div className="price-label">pagamento único · acesso vitalício</div>

                  <div className="offer-features">
                    <div className="offer-feature"><div className="feature-dot"></div>Manual completo em PDF (7 capítulos)</div>
                    <div className="offer-feature"><div className="feature-dot"></div>Checklist de Sobrevivência 2026</div>
                    <div className="offer-feature"><div className="feature-dot"></div>Passo a passo de reprecificação</div>
                    <div className="offer-feature"><div className="feature-dot"></div>Scripts das 3 conversas estratégicas</div>
                    <div className="offer-feature"><div className="feature-dot"></div>Download imediato após o pagamento</div>
                  </div>

                  <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-offer">Quero meu acesso agora →</a>

                  <div className="offer-guarantee">
                    <div className="guarantee-badge">🛡</div>
                    <span>Garantia incondicional de 7 dias. Não gostou? Devolvemos 100% do valor.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section guarantee-section">
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-seal">
              <strong>7</strong>
              <span>dias de<br />garantia</span>
            </div>
            <div className="guarantee-text">
              <h3>Risco zero para você</h3>
              <p>
                Se você adquirir o manual e sentir que ele não valeu cada centavo — por qualquer razão —,
                basta enviar um e-mail em até 7 dias corridos após a compra e devolvemos
                <strong>100% do valor, sem perguntas, sem burocracia.</strong> Simples assim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-label">Dúvidas frequentes</div>
          <h2 className="section-title">Perguntas e respostas</h2>

          <div className="faq-list">
            {[
              {
                q: "Preciso ter conhecimento de contabilidade para entender o guia?",
                a: "Não. O manual foi escrito especificamente para quem não é contador. Todos os conceitos — IBS, CBS, IVA, Split Payment — são explicados em linguagem direta, com exemplos práticos e sem juridiquês."
              },
              {
                q: "Como vou receber o material após a compra?",
                a: "Imediatamente após a confirmação do pagamento você receberá o link de download por e-mail. O acesso é instantâneo e o arquivo pode ser lido em qualquer dispositivo — celular, tablet ou computador."
              },
              {
                q: "Esse conteúdo serve para qualquer segmento ou setor?",
                a: "Sim. O manual cobre os impactos que afetam qualquer pequena ou média empresa — fluxo de caixa, precificação, relações B2B, regime tributário. Há um capítulo específico sobre os 5 perfis de negócio que mais correm risco, o que facilita identificar sua situação."
              },
              {
                q: "Como funciona a garantia de 7 dias?",
                a: "É incondicional. Se dentro de 7 dias corridos após a compra você sentir que o conteúdo não valeu, basta enviar um e-mail solicitando o reembolso. Devolvemos 100% do valor pago, sem questionamentos."
              },
              {
                q: "As informações vão ficar desatualizadas com o tempo?",
                a: "O manual trata dos fundamentos e mecanismos da reforma — como o IVA funciona, o que o Split Payment muda no caixa, como calcular margem. Quem domina esses conceitos consegue acompanhar qualquer atualização regulatória futura com muito mais clareza e autonomia."
              }
            ].map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <span className="arrow">▾</span>
                </div>
                <div className="faq-a">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', maxWidth: '380px' }}>
              Quero acesso ao manual agora →
            </a>
            <p style={{ marginTop: '14px', fontSize: '13px', color: 'var(--text-muted)' }}>
              R$ 37,90 · pagamento único · garantia de 7 dias
            </p>
          </div>
        </div>
      </section>
    </main>

      {/* FOOTER */}
      <footer>
        <p style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '8px' }}>Reforma Tributária 2026</p>
        <div className="footer-divider"></div>
        <p>
          Este material tem caráter educacional e informativo. Não substitui a orientação de um contador
          ou advogado tributarista. Para decisões específicas sobre o seu negócio, consulte sempre um profissional habilitado.
        </p>
        <p style={{ marginTop: '12px', fontSize: '11px', opacity: 0.8 }}>
          Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da Meta Platforms, Inc.
        </p>
        <p style={{ marginTop: '12px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage?.('privacy'); }}>Política de Privacidade</a> · <a href="#" onClick={(e) => { e.preventDefault(); setPage?.('terms'); }}>Termos de Uso</a> · <a href="#" onClick={(e) => { e.preventDefault(); setPage?.('contact'); }}>Contato</a>
        </p>
      </footer>

      {/* COOKIE CONSENT */}
      {showCookieConsent && (
        <div style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          backgroundColor: '#0B1426',
          borderTop: '1px solid #132040',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          zIndex: 9999,
          color: 'var(--white)',
          fontSize: '14px',
          textAlign: 'center',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.2)'
        }}>
          <div style={{ maxWidth: '800px' }}>
            <p style={{ margin: 0 }}>
              Utilizamos cookies para oferecer a melhor experiência e melhorar o desempenho e análise de tráfego do nosso site. 
              Ao continuar navegando, você concorda com o uso de cookies e com a nossa Política de Privacidade.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              onClick={() => setShowCookieConsent(false)}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--white)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '10px 24px',
                borderRadius: '4px',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              Não Aceitar
            </button>
            <button 
              onClick={() => setShowCookieConsent(false)}
              style={{
                backgroundColor: 'var(--gold)',
                color: 'var(--navy-deep)',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '4px',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

