import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  contact: z.string().min(5, { message: 'Введите корректный email или телефон' }),
  message: z.string().min(10, { message: 'Сообщение должно содержать минимум 10 символов' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      message: '',
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      form.reset();
      setIsDialogOpen(true);
    }, 1000);
  };

  return (
    <section id="contact" data-animate className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wider mb-16 text-center">
          Связаться
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/70">Имя</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-background border-border/30 focus:border-primary/50 rounded-none"
                          placeholder="Ваше имя"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/70">E-mail / Телефон</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-background border-border/30 focus:border-primary/50 rounded-none"
                          placeholder="Ваш email или телефон"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/70">Ваше сообщение</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          className="bg-background border-border/30 focus:border-primary/50 rounded-none min-h-[150px]"
                          placeholder="Опишите ваш проект или вопрос"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-transparent border border-primary/30 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-2">E-mail</h3>
                <a 
                  href="mailto:contact@form-eng.com" 
                  className="text-foreground/70 hover:text-primary transition-colors line-animation"
                >
                  contact@form-eng.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Телефон</h3>
                <a 
                  href="tel:+74951234567" 
                  className="text-foreground/70 hover:text-primary transition-colors line-animation"
                >
                  +7 (495) 123-45-67
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Адрес</h3>
                <p className="text-foreground/70">
                  Москва, Проектируемый проезд, 1
                </p>
              </div>

              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-foreground/50 italic">
                  Мы открыты для сотрудничества с архитекторами, дизайнерами и частными заказчиками. Свяжитесь с нами для обсуждения вашего проекта.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-border/50 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-light">Спасибо!</DialogTitle>
            <DialogDescription className="text-foreground/70 pt-2">
              Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button 
              onClick={() => setIsDialogOpen(false)}
              className="bg-transparent border border-primary/30 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
            >
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
