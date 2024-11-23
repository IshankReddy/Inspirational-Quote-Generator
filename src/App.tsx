import React, { useState } from 'react';
import { RefreshCw, Quote as QuoteIcon } from 'lucide-react';
import { quotes } from './quotes';

function App() {
  const [quote, setQuote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
  const [isLoading, setIsLoading] = useState(false);

  const getNewQuote = () => {
    setIsLoading(true);
    // Simulate a small delay for smooth transition
    setTimeout(() => {
      let newQuote;
      do {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while (newQuote === quote);
      setQuote(newQuote);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2240&q=80")',
      }}
    >
      <div className="min-h-screen w-full backdrop-blur-sm bg-black/30 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="flex flex-col items-center space-y-8">
            <QuoteIcon className="w-12 h-12 text-white/90" />
            
            <div className={`text-center transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6">
                "{quote.text}"
              </p>
              <p className="text-lg md:text-xl text-white/80 font-medium">
                — {quote.author}
              </p>
            </div>

            <button
              onClick={getNewQuote}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 
                       text-white rounded-lg transition-all duration-300 
                       hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
              Get Another Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;