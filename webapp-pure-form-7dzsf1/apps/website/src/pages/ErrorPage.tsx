import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="py-6 px-6">
        <div className="container mx-auto">
          <Link to="/" className="text-foreground text-xl tracking-wider">
            ИНЖЕНЕРИЯ ФОРМЫ
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Error code with architectural border */}
            <div className="mb-8 relative inline-block architectural-border p-8">
              <h1 className="text-6xl font-light">404</h1>
            </div>
            
            {/* Separator line */}
            <div className="h-px w-16 bg-primary/30 mx-auto mb-8"></div>
            
            <h2 className="text-2xl font-light mb-4">Страница не найдена</h2>
            
            <p className="text-foreground/70 mb-8">
              Запрашиваемая страница не существует или была перемещена.
              Вернитесь на главную страницу.
            </p>
            
            <Button 
              asChild
              className="bg-transparent border border-primary/30 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-500"
            >
              <Link to="/">
                На главную
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-6 px-6 border-t border-border/30">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/0bcd745a-7cce-4d29-aa51-fa78c3e56af3.webp" 
              alt="Инженерия формы" 
              className="h-8 w-auto"
            />
          </div>
          <div>
            <p className="text-sm text-foreground/50">
              © {new Date().getFullYear()} Инженерия формы
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}