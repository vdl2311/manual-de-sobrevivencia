export default function Contact({ onBack }: { onBack: () => void }) { 
  return (
    <div className="min-h-screen py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto bg-white border border-[#E8E0D0] rounded-xl p-10 md:p-14 shadow-sm text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B1426] mb-4">Contato</h1>
        
        <p className="text-[#2C3A52] leading-relaxed mb-8">
          Tem alguma dúvida ou precisa de suporte? Entre em contato conosco através do e-mail abaixo. Nossa equipe responderá o mais rápido possível.
        </p>

        <div className="bg-[#FAF7F2] border border-[#E8E0D0] rounded-lg p-6 mb-10">
          <p className="font-mono text-[10px] sm:text-xs font-bold text-[#C9922A] uppercase tracking-widest mb-2">E-mail de Suporte</p>
          <a href="mailto:vdlmarketdigital@gmail.com" className="text-lg md:text-xl font-medium text-[#0B1426] hover:text-[#C9922A] transition-colors">
            vdlmarketdigital@gmail.com
          </a>
        </div>

        <button 
          onClick={onBack} 
          className="inline-flex items-center gap-2 font-bold text-[#C9922A] hover:text-[#E5B84A] transition-colors"
        >
          <span>←</span> Voltar para a página inicial
        </button>
      </div>
    </div>
  ); 
}
