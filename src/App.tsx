/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Check, 
  ChevronRight, 
  Lock, 
  ShieldCheck, 
  Star, 
  Zap, 
  MessageSquare, 
  Calendar, 
  BookOpen, 
  Heart,
  ArrowRight,
  Clock,
  Sparkles
} from "lucide-react";

const Button = ({ children, className = "", onClick = () => {} }: { children: React.ReactNode, className?: string, onClick?: () => void, key?: React.Key }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full py-5 px-6 rounded-xl font-bold text-lg uppercase tracking-wider shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all ${className}`}
  >
    {children}
  </motion.button>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <h2 className={`text-2xl md:text-3xl font-black text-center uppercase tracking-tighter leading-tight ${className}`}>
    {children}
  </h2>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <div className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 ${className}`}>
    {children}
  </div>
);

export default function App() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Top Banner */}
      <div className="bg-yellow-500 text-black py-2 text-center text-[10px] md:text-xs font-black uppercase tracking-widest sticky top-0 z-50">
        Condição Especial por Tempo Limitado
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
              Programa 100% Digital
            </span>
            <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-6">
              Código da <br />
              <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">Atração</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
              Faça ele ir atrás de você mudando apenas a sua <span className="text-white font-bold italic">frequência vibracional</span>. Sem joguinhos, sem scripts, apenas energia pura.
            </p>

            <div className="relative mb-12">
              <img 
                src="https://images.unsplash.com/photo-1513301356161-91b582ee7224?q=80&w=800&auto=format&fit=crop" 
                alt="Conexão e Atração" 
                className="w-full h-80 object-cover rounded-3xl transition-all duration-700 border border-zinc-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
            </div>

            <Button onClick={scrollToOffer} className="bg-yellow-500 text-black mb-6">
              Quero meu acesso agora
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-yellow-500" /> Compra Segura</span>
              <span className="flex items-center gap-1"><Lock size={14} className="text-yellow-500" /> Acesso Imediato</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain & Solution Section */}
      <section className="py-20 px-6 bg-zinc-900/20 border-y border-zinc-800">
        <div className="max-w-xl mx-auto text-center">
          <SectionTitle className="mb-8">
            Por que ele se <span className="text-yellow-500 italic">afasta</span> quanto mais você tenta se <span className="text-yellow-500 italic">aproximar?</span>
          </SectionTitle>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Você já sentiu que, quanto mais tenta, mais o resultado é o mesmo: <span className="text-white font-bold">silêncio ou desculpas?</span> A verdade é que o problema não é o que você faz, mas a energia que você carrega.
            </p>
            <p>
              O <span className="text-white font-bold">Código da Atração</span> quebra esse ciclo. Nós não te damos scripts vazios; nós te damos a chave para mudar sua frequência vibracional, transformando a carência em magnetismo puro, fazendo com que ele sinta sua falta e tome a iniciativa.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-xl mx-auto">
          <SectionTitle className="mb-12">
            Isso é para você <span className="text-yellow-500">se...</span>
          </SectionTitle>

          <div className="grid gap-4">
            {[
              { title: "Um ex que foi embora", desc: "Ainda tem conexão real, mas ele não volta. E você sente que não acabou." },
              { title: "Alguém que não avança", desc: "Está presente, tem olhares e momentos — mas nunca dá o próximo passo." },
              { title: "Um amigo com algo a mais", desc: "Você sente que ele sente também. Mas ele recua sempre que chega perto." },
              { title: "Alguém que mal te conhece", desc: "Uma atração que você sente antes mesmo do contato. E quer que ele te enxergue." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/50"
              >
                <div className="mt-1">
                  <Check className="text-yellow-500" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mecanismo */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full" />
        
        <div className="max-w-xl mx-auto text-center">
          <SectionTitle className="mb-8">
            O Segredo não é o que você <span className="text-yellow-500 italic">faz</span>, mas o que você <span className="text-yellow-500 italic">emite</span>
          </SectionTitle>
          
          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed text-left">
            <p>
              Quando você deseja alguém que está distante, o estado emocional de <span className="text-white font-bold">"querer e não ter"</span> cria um campo de carência.
            </p>
            <div className="p-6 bg-yellow-500/5 border-l-4 border-yellow-500 rounded-r-2xl italic">
              "Carência afasta. Não é fraqueza. É frequência."
            </div>
            <p>
              O <span className="text-white font-bold">Código da Atração</span> muda esse campo. Você para de emitir carência e começa a emitir certeza. E é exatamente aí que o comportamento dele começa a mudar sem você precisar fazer nada forçado.
            </p>
          </div>
        </div>
      </section>

      {/* O que vem na compra - Módulos */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-xl mx-auto">
          <SectionTitle className="mb-12">
            O que você vai <span className="text-yellow-500">receber</span>
          </SectionTitle>

          <div className="space-y-4">
            {[
              { mod: "01", title: "O Despertar Quântico", desc: "Entenda a frequência energética e o paradoxo do desejo. Diagnóstico da sua frequência atual." },
              { mod: "02", title: "A Limpeza do Campo", desc: "Identifique e remova bloqueios energéticos e crenças limitantes sobre o amor." },
              { mod: "03", title: "A Conexão de Almas", desc: "Entrelaçamento quântico e a técnica da 'Ponte Invisível' para criar o elo energético." },
              { mod: "04", title: "Programação do Subconsciente", desc: "Reprogramação diária de 10 minutos para alinhar seu crer inconsciente." },
              { mod: "05", title: "O Ritual de Manifestação", desc: "Protocolo completo: materiais, ambiente e passos para o Ritual do Código." },
              { mod: "06", title: "A Manutenção da Chama", desc: "Como manter o campo ativo e evitar a armadilha da verificação constante." },
              { mod: "07", title: "A Selagem do Destino", desc: "Sinais de movimento e como agir no momento crítico da aproximação." }
            ].map((item, i) => (
              <Card key={i} className="group hover:border-yellow-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-yellow-500 font-black text-2xl opacity-30 group-hover:opacity-100 transition-opacity">
                    {item.mod}
                  </span>
                  <div>
                    <h3 className="font-black uppercase tracking-tight text-lg mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 flex items-center gap-4">
              <BookOpen className="text-yellow-500 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase text-sm">Manual dos Rituais</h4>
                <p className="text-zinc-400 text-xs">Guia prático e direto de cada ritual.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 flex items-center gap-4">
              <Calendar className="text-yellow-500 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase text-sm">Calendário Energético</h4>
                <p className="text-zinc-400 text-xs">30 dias de práticas para manter a frequência elevada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-black uppercase tracking-[0.3em] text-xs">Presentes Exclusivos</span>
            <SectionTitle className="mt-4 italic">Bônus Inclusos</SectionTitle>
          </div>

          <div className="grid gap-6">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <Sparkles className="text-yellow-500 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-2 block">Bônus 01</span>
              <h3 className="text-2xl font-black uppercase mb-4">Afirmações Quânticas</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Sequência programada para reprogramar sua frequência em menos de 5 minutos diários.
              </p>
              <div className="inline-flex items-center gap-2 text-yellow-500 font-bold text-xs uppercase">
                <Zap size={14} /> Valor: R$ 67,00 (Grátis hoje)
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <MessageSquare className="text-yellow-500 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-2 block">Bônus 02</span>
              <h3 className="text-2xl font-black uppercase mb-4">Guia de Mensagens Energéticas</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                O que escrever para ele em cada fase — sem parecer ansiosa, sem afastar, sem jogar.
              </p>
              <div className="inline-flex items-center gap-2 text-yellow-500 font-bold text-xs uppercase">
                <Zap size={14} /> Valor: R$ 47,00 (Grátis hoje)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-xl mx-auto">
          <SectionTitle className="mb-12">Resultados <span className="text-yellow-500 italic">Reais</span></SectionTitle>
          
          <div className="grid gap-6">
            {[
              { 
                name: "Ana Paula", 
                initials: "AP", 
                text: "Estava bloqueada há 3 meses. Fiz o ritual do módulo 5 e em 48 horas ele me mandou um 'oi sumida'. Inacreditável como a energia realmente dita o comportamento dele." 
              },
              { 
                name: "Juliana S.", 
                initials: "JS", 
                text: "O amigo que eu amava finalmente me viu como mulher. A técnica da ponte invisível mudou tudo entre nós. Hoje estamos namorando e ele diz que sentiu algo 'diferente' em mim." 
              },
              { 
                name: "Beatriz Lima", 
                initials: "BL", 
                text: "Parei de correr atrás e ele começou a me procurar desesperado. O Código funciona mesmo! Recuperei minha autoconfiança e o respeito que ele tinha perdido por mim." 
              },
              { 
                name: "Caio Moraes", 
                initials: "CM", 
                text: "Tinha um bloqueio que achava que não conseguiria mais que duas vendas no mês. Fiquei limpando, limpando... em Junho consegui fechar 5 vendas de imóveis. Fiquei impressionado com o poder." 
              }
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F9F9F7] rounded-3xl p-8 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-zinc-800">
                    {testi.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{testi.name}</h4>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => <Star key={star} size={12} className="fill-yellow-500 text-yellow-500" />)}
                    </div>
                  </div>
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed italic">
                  "{testi.text}"
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-200 flex justify-between items-center text-[10px] text-zinc-400 uppercase font-bold tracking-widest">
                  <span>Aluna Código da Atração</span>
                  <span className="flex items-center gap-1 text-green-600"><ShieldCheck size={10} /> Verificado</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Recapitulando tudo o que você terá acesso:</h2>
            <div className="inline-block px-6 py-2 rounded-full bg-yellow-500 text-black font-black text-sm uppercase tracking-widest">
              Somente Hoje
            </div>
          </div>

          <Card className="border-yellow-500/50 bg-black/80 backdrop-blur-xl mb-8">
            <ul className="space-y-4 mb-10">
              {[
                "7 Módulos Completos",
                "Manual dos Rituais de Manifestação",
                "Calendário Energético de 30 dias",
                "Bônus: Afirmações Quânticas",
                "Bônus: Guia de Mensagens Energéticas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                  <Check className="text-yellow-500 shrink-0" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-10">
              <span className="text-zinc-500 line-through text-lg block mb-1">De R$ 197,00</span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-7xl font-black text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">19,90</span>
              </div>
              <p className="text-zinc-400 text-xs mt-4 font-bold uppercase tracking-widest">Pagamento Único · Acesso Vitalício</p>
            </div>

            <Button className="bg-yellow-500 text-black text-xl py-6 flex items-center justify-center gap-3">
              Quero meu acesso agora <ArrowRight size={20} />
            </Button>
          </Card>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
              <Clock size={16} className="text-yellow-500" /> Oferta expira em breve
            </div>
            
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 text-center w-full">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-yellow-500" size={32} />
              </div>
              <h4 className="font-black uppercase mb-2">Garantia Incondicional</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Experimente por 7 dias. Se você não sentir a mudança na sua frequência ou não gostar do conteúdo, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=100&auto=format&fit=crop" alt="Logo" className="h-8 grayscale opacity-50" referrerPolicy="no-referrer" />
          </div>
          <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest mb-6">
            © 2026 Código da Atração | Todos os Direitos Reservados
          </p>
          <div className="flex justify-center gap-6 text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-yellow-500 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
