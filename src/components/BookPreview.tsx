import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export default function BookPreview() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Page 0: Cover / Title
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#0B1426] text-white p-8 text-center border-l-8 border-[#C9922A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9922A] opacity-10 rounded-bl-full"></div>
      <p className="text-[#C9922A] font-bold tracking-[0.2em] uppercase text-xs mb-6">Reforma Tributária 2026</p>
      <h3 className="font-serif text-3xl md:text-5xl font-black mb-4 leading-none text-white">REFORMA<br />TRIBUTÁRIA<br /><span className="text-[#E5B84A]">2026</span></h3>
      <div className="w-16 h-1 bg-[#C9922A] my-6"></div>
      <p className="font-medium text-lg text-white mb-6">O Manual de Sobrevivência para Pequenas Empresas</p>
      <p className="text-sm text-white/70 max-w-[280px]">Descubra como proteger sua margem, manter clientes B2B e evitar prejuízos ocultos na transição do novo IVA.</p>
    </div>,

    // Page 1: Chapter 1
    <div className="w-full h-full bg-[#FAF7F2] text-[#0B1426] p-6 md:p-10 text-left overflow-y-auto">
      <div className="bg-[#1C3060] text-white p-4 mb-6">
        <p className="text-[#C9922A] font-bold text-xs uppercase tracking-widest mb-1">Capítulo 1</p>
        <h4 className="font-serif text-2xl font-bold">O que realmente muda em 2026</h4>
        <p className="text-white/80 italic text-sm mt-1">Em linguagem humana, sem juridiquês</p>
      </div>
      <p className="text-sm mb-4 leading-relaxed">Você já deve ter ouvido falar da Reforma Tributária. Mas entre tanto texto jurídico e sigla nova, o que de fato muda para quem tem uma pequena empresa? A resposta curta: muita coisa. A resposta útil: é exatamente o que você vai aprender aqui.</p>
      
      <div className="mb-4">
        <strong className="text-[#1C3060] block mb-1">IBS — Imposto sobre Bens e Serviços</strong>
        <p className="text-xs leading-relaxed text-[#2C3A52]">Pensa nele como o substituto do ICMS (estadual) e do ISS (municipal). Em vez de cada estado e prefeitura ter suas próprias alíquotas, o IBS vai unificar tudo num só imposto.</p>
      </div>

      <div className="mb-4">
        <strong className="text-[#1C3060] block mb-1">CBS — Contribuição sobre Bens e Serviços</strong>
        <p className="text-xs leading-relaxed text-[#2C3A52]">Ocupa o lugar do PIS e COFINS (federais). IBS + CBS formam o que o governo chama de IVA Dual.</p>
      </div>

      <div className="mb-4">
        <strong className="text-[#1C3060] block mb-1">Split Payment — O pagamento dividido</strong>
        <p className="text-xs leading-relaxed text-[#2C3A52]">Aki começa a virar realidade para o seu caixa. Quando um cliente paga por um produto ou serviço, o sistema bancário automaticamente separa a parte do imposto e já manda direto para o governo — antes mesmo do dinheiro chegar na sua conta.</p>
      </div>
    </div>,

    // Page 2: Chapter 2
    <div className="w-full h-full bg-[#FAF7F2] text-[#0B1426] p-6 md:p-10 text-left overflow-y-auto">
      <div className="bg-[#1C3060] text-white p-4 mb-6">
        <p className="text-[#C9922A] font-bold text-xs uppercase tracking-widest mb-1">Capítulo 2</p>
        <h4 className="font-serif text-2xl font-bold leading-tight">O risco invisível que pode destruir sua margem</h4>
      </div>
      <p className="text-sm mb-4 leading-relaxed">Tem um erro que muitos empresários vão cometer: achar que a Reforma Tributária é problema do contador. Spoiler: não é. É problema seu.</p>
      
      <div className="space-y-4">
        <div>
          <h5 className="font-bold text-[#C9922A] text-sm border-b border-[#E8E0D0] pb-1 mb-2">1. Aumento Indireto de Custo</h5>
          <p className="text-xs leading-relaxed text-[#2C3A52]">Seus fornecedores também estão se adaptando. Se eles errarem na precificação, isso vai subir na cadeia e chegará até você na forma de insumos mais caros.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#C9922A] text-sm border-b border-[#E8E0D0] pb-1 mb-2">2. Perda de Competitividade</h5>
          <p className="text-xs leading-relaxed text-[#2C3A52]">Grandes empresas têm equipe jurídica e capital de giro. Enquanto eles ajustam a precificação com precisão, pequenos negócios vão repassar demais (perdendo vendas) ou absorver o custo (corroendo a margem).</p>
        </div>
        <div>
          <h5 className="font-bold text-[#C9922A] text-sm border-b border-[#E8E0D0] pb-1 mb-2">3. Pressão no Preço</h5>
          <p className="text-xs leading-relaxed text-[#2C3A52]">Seu cliente vai buscar fornecedores mais eficientes. Se você não souber explicar sua precificação e mostrar valor, vai perder a venda.</p>
        </div>
      </div>
    </div>,

    // Page 3: Chapter 3
    <div className="w-full h-full bg-[#FAF7F2] text-[#0B1426] p-6 md:p-10 text-left overflow-y-auto">
      <div className="bg-[#1C3060] text-white p-4 mb-6">
        <p className="text-[#C9922A] font-bold text-xs uppercase tracking-widest mb-1">Capítulo 3</p>
        <h4 className="font-serif text-2xl font-bold leading-tight">Por que empresas B2B vão trocar fornecedores</h4>
      </div>
      <p className="text-sm mb-4 leading-relaxed">Se você vende para outras empresas (B2B), preste muita atenção. O que vai acontecer nos próximos meses vai forçar empresas a reavaliarem todos os seus fornecedores. Não por qualidade ou preço. Por imposto.</p>
      
      <h5 className="font-bold text-[#1C3060] text-base mb-2">Atratividade fiscal como fator de decisão</h5>
      <p className="text-xs leading-relaxed text-[#2C3A52] mb-4">
        Empresas que compram de fornecedores optantes pelo regime regular (que geram crédito de IVA) poderão abater esse valor nos impostos de suas próprias vendas.
      </p>

      <div className="bg-[#1C3060]/5 p-4 border-l-4 border-[#C9922A]">
        <p className="text-xs font-medium text-[#1C3060] italic">
          "Se eu comprar desse fornecedor, eu gero crédito?" E se a resposta for não, eles vão buscar quem diz sim.
        </p>
      </div>

      <p className="text-xs leading-relaxed text-[#2C3A52] mt-4">
        Quem será mais afetado? Empresas do Simples Nacional, prestadores de serviços, profissionais autônomos e qualquer negócio cujo regime não permita a geração de crédito integral.
      </p>
    </div>,

    // Page 4: Chapter 4
    <div className="w-full h-full bg-[#FAF7F2] text-[#0B1426] p-6 md:p-10 text-left overflow-y-auto">
      <div className="bg-[#1C3060] text-white p-4 mb-6">
        <p className="text-[#C9922A] font-bold text-xs uppercase tracking-widest mb-1">Capítulo 4</p>
        <h4 className="font-serif text-2xl font-bold leading-tight">O impacto no fluxo de caixa</h4>
      </div>
      <p className="text-sm mb-4 leading-relaxed font-medium">A matemática do seu caixa vai mudar com o Split Payment.</p>
      
      <div className="mb-6">
        <h5 className="font-bold text-[#1C3060] text-sm mb-2">ANTES (Hoje)</h5>
        <p className="text-xs leading-relaxed text-[#2C3A52]">Você recebe o dinheiro do cliente (ex: R$ 10.000) e paga impostos depois de 30 a 90 dias. Você tem tempo para girar o capital.</p>
      </div>

      <div className="mb-6">
        <h5 className="font-bold text-[#C9922A] text-sm mb-2">DEPOIS (Com Split Payment)</h5>
        <p className="text-xs leading-relaxed text-[#2C3A52]">Você recebe apenas o valor líquido (ex: R$ 7.300). O imposto de R$ 2.700 já foi retido na hora, antes de cair na sua conta. Seu caixa disponível imediato é menor.</p>
      </div>

      <div className="bg-[#C0392B]/10 p-4 border-l-4 border-[#C0392B]">
        <p className="text-xs font-bold text-[#C0392B]">
          ⚠ Pequenas empresas com capital de giro enxuto precisam rever suas projeções. O impacto pode ser imediato e significativo.
        </p>
      </div>
    </div>
  ];

  const nextPage = () => {
    const step = window.innerWidth >= 768 && currentPage !== 0 ? 2 : 1;
    if (currentPage < pages.length - step) setCurrentPage(currentPage + step);
    else if (currentPage < pages.length - 1) setCurrentPage(pages.length - 1);
  };

  const prevPage = () => {
    const step = window.innerWidth >= 768 && currentPage > 1 ? 2 : 1;
    if (currentPage >= step) setCurrentPage(currentPage - step);
    else setCurrentPage(0);
  };

  return (
    <div className="mx-auto w-full max-w-sm md:max-w-[800px]">
      {currentPage === 0 && (
        <div className="mb-6 flex justify-center animate-bounce">
          <span className="bg-[#C9922A] text-[#0B1426] px-5 py-2.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
            👉 Clique na seta à direita para visualizar as páginas
          </span>
        </div>
      )}
      <div className="bg-[#E8E0D0] p-2 md:p-4 rounded-xl shadow-2xl relative">
        <div className="bg-white rounded-lg overflow-hidden shadow-inner flex flex-col md:flex-row aspect-[3/4] md:aspect-[3/2] w-full relative">
          
          {/* Mobile view / Single page */}
          <div className="block md:hidden w-full h-full relative">
             {pages[currentPage]}
          </div>

          {/* Desktop view / Two pages side by side */}
          <div className="hidden md:flex w-full h-full">
            <div className="w-1/2 h-full border-r border-[#E8E0D0]/50 relative shadow-[inset_-10px_0_20px_rgba(0,0,0,0.05)]">
              {currentPage === 0 ? (
                // Inside cover/blank if on page 0?
                <div className="w-full h-full bg-[#E8E0D0] flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-[#0B1426]/10" />
                </div>
              ) : (
                pages[currentPage - (currentPage % 2 === 0 ? 1 : 0)]
              )}
            </div>
            <div className="w-1/2 h-full relative shadow-[inset_10px_0_20px_rgba(0,0,0,0.05)]">
               {currentPage === 0 ? (
                 pages[0]
               ) : (
                 currentPage + (currentPage % 2 === 0 ? 0 : 1) < pages.length 
                 ? pages[currentPage + (currentPage % 2 === 0 ? 0 : 1)]
                 : <div className="w-full h-full bg-[#FAF7F2] flex items-center justify-center"><BookOpen className="w-16 h-16 text-[#0B1426]/10" /></div>
               )}
            </div>
          </div>

          <button 
            onClick={prevPage} 
            disabled={currentPage === 0}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#0B1426] p-2 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-opacity"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextPage} 
            disabled={currentPage === pages.length - 1 || (currentPage === pages.length - 2 && pages.length % 2 === 0 && currentPage !== 0)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#0B1426] p-2 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-opacity"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center flex-wrap gap-2 mt-4">
          {pages.map((_, i) => (
            <button 
               key={i}
               onClick={() => setCurrentPage(i)}
               className={`w-2 h-2 rounded-full transition-colors ${
                 (i === currentPage) || (i === currentPage + 1 && i % 2 !== 0 && currentPage !== 0) 
                   ? 'bg-[#0B1426]' 
                   : 'bg-white/40 hover:bg-white/70'
               }`}
               aria-label={`Ir para página ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
