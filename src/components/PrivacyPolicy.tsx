export default function PrivacyPolicy({ onBack }: { onBack: () => void }) { 
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white border border-[#E8E0D0] rounded-xl p-10 md:p-14 shadow-sm">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B1426] mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 text-[#2C3A52] leading-relaxed text-[15px]">
          <p>Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você visita ou faz uma compra neste site.</p>
          
          <h2 className="font-bold text-lg text-[#0B1426] mt-8 mb-4">Coleta de Informações Pessoais</h2>
          <p>Quando você visita o site, coletamos automaticamente determinadas informações sobre o seu dispositivo, incluindo informações sobre seu navegador da web, endereço IP, fuso horário e alguns dos cookies instalados no seu dispositivo.</p>
          
          <h2 className="font-bold text-lg text-[#0B1426] mt-8 mb-4">Uso de Informações Pessoais</h2>
          <p>Usamos as Informações do Pedido que coletamos para processar processar seu pagamento, providenciar o acesso ao produto digital e fornecer faturas e/ou confirmações de pedidos.</p>
          
          <h2 className="font-bold text-lg text-[#0B1426] mt-8 mb-4">Compartilhamento de Informações</h2>
          <p>Compartilhamos suas Informações Pessoais com terceiros para nos ajudar a usar suas Informações Pessoais, conforme descrito acima. Somente utilizamos plataformas seguras de pagamento para intermediar as compras.</p>
          
          <h2 className="font-bold text-lg text-[#0B1426] mt-8 mb-4">Direitos do Usuário</h2>
          <p>Se você é residente na Europa ou no Brasil (LGPD), tem o direito de acessar as informações pessoais que mantemos sobre você e de solicitar que suas informações pessoais sejam corrigidas, atualizadas ou excluídas. Se você quiser exercer esse direito, entre em contato conosco.</p>
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
