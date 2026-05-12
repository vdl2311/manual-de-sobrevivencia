export default function TermsOfUse({ onBack }: { onBack: () => void }) { 
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white border border-[#E8E0D0] rounded-xl p-10 md:p-14 shadow-sm">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B1426] mb-8">Termos de Uso</h1>
        
        <div className="space-y-6 text-[#2C3A52] leading-relaxed text-[15px]">
          <p>Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
          
          <h2 className="font-bold text-lg text-[#0B1426] mt-8 mb-4">Uso de Licença</h2>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) contidos neste site, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido neste site;</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
          </ul>
          
          <h2 className="font-bold text-lg text-[#0B1426] mt-8 mb-4">Isenção de Responsabilidade</h2>
          <p>Este material tem caráter educacional e informativo. Os materiais contidos neste site são fornecidos 'como estão'. O autor não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias. Não substitui de maneira alguma a orientação e o acompanhamento de um profissional contador ou advogado tributarista adequado.</p>
          
          <h2 className="font-bold text-lg text-[#0B1426] mt-8 mb-4">Limitações</h2>
          <p>Em nenhum caso a empresa fornecedora deste guia ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, mas não limitados a, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais, mesmo que a empresa ou um representante autorizado desta site tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.</p>
        </div>

        <button 
          onClick={onBack} 
          className="mt-12 inline-flex items-center gap-2 font-bold text-[#C9922A] hover:text-[#E5B84A] transition-colors"
        >
          <span>←</span> Voltar para a página inicial
        </button>
      </div>
    </div>
  ); 
}
