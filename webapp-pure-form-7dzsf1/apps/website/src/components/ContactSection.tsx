import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowUpRight, Building2, PhoneCall, Ruler } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  contact: z.string().min(5, { message: "Введите корректный email или телефон" }),
  message: z.string().min(10, { message: "Сообщение должно содержать минимум 10 символов" }),
});

type FormValues = z.infer<typeof formSchema>;

const details = [
  {
    icon: Ruler,
    title: "Замер и 3D-проект",
    description: "Формируем основу проекта на старте, чтобы сразу считать сроки и конструктив.",
  },
  {
    icon: Building2,
    title: "Производство и монтаж",
    description: "Одна команда отвечает за изделие до финальной установки на объекте.",
  },
  {
    icon: PhoneCall,
    title: "Быстрый контакт с фабрикой",
    description: "Архитекторы, дизайнеры и частные заказчики общаются напрямую с производством.",
  },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    window.setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      form.reset();
      setIsDialogOpen(true);
    }, 1000);
  };

  return (
    <section id="contact" className="px-5 py-10 md:px-8 md:py-16">
      <div className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(205,127,50,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.09),transparent_20%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="eyebrow">Запрос на производство</p>
            <h2 className="section-heading mt-5 max-w-2xl">
              Обсудим проект напрямую с фабрикой и посчитаем решение под ваш
              интерьер.
            </h2>
            <p className="section-copy mt-8 max-w-2xl">
              Присылайте план, эскиз, Pinterest-референсы или просто задачу.
              Мы предложим материал, конструктив и формат производства: от
              индивидуального премиум-объекта до оптимизированной типовой
              серии.
            </p>

            <div className="mt-10 space-y-4">
              {details.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <motion.article
                    key={detail.title}
                    initial={{ opacity: 0, x: -22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75, delay: index * 0.08, ease: "easeOut" }}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cd7f32]/25 bg-[#cd7f32]/10 text-[#cd7f32]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#f5f5f5]">
                          {detail.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[#c0c0c0]/72">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-10 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-2">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                  Email
                </p>
                <a
                  href="mailto:contact@form-eng.com"
                  className="mt-3 inline-block text-lg font-semibold tracking-[-0.03em] text-[#f5f5f5] transition hover:text-[#cd7f32]"
                >
                  contact@form-eng.com
                </a>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                  Телефон
                </p>
                <a
                  href="tel:+74951234567"
                  className="mt-3 inline-block text-lg font-semibold tracking-[-0.03em] text-[#f5f5f5] transition hover:text-[#cd7f32]"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-[#070707]/95 p-6 shadow-[0_28px_70px_rgba(0,0,0,0.38)] md:p-8"
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                  Brief request
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#f5f5f5]">
                  Расскажите о проекте
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#cd7f32]" />
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.28em] text-[#c0c0c0]/55">
                        Имя
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Ваше имя"
                          className="h-14 rounded-2xl border-white/10 bg-white/[0.03] px-5 text-base text-[#f5f5f5] placeholder:text-[#c0c0c0]/35 focus-visible:ring-[#cd7f32]/35"
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
                      <FormLabel className="text-xs uppercase tracking-[0.28em] text-[#c0c0c0]/55">
                        Контакт
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Email или телефон"
                          className="h-14 rounded-2xl border-white/10 bg-white/[0.03] px-5 text-base text-[#f5f5f5] placeholder:text-[#c0c0c0]/35 focus-visible:ring-[#cd7f32]/35"
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
                      <FormLabel className="text-xs uppercase tracking-[0.28em] text-[#c0c0c0]/55">
                        Задача
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Опишите помещение, желаемую мебель, материалы и ориентир по срокам."
                          className="min-h-[168px] rounded-[1.5rem] border-white/10 bg-white/[0.03] px-5 py-4 text-base leading-7 text-[#f5f5f5] placeholder:text-[#c0c0c0]/35 focus-visible:ring-[#cd7f32]/35"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bronze-button h-auto w-full gap-3 py-4"
                >
                  {isSubmitting ? "Отправка..." : "Отправить запрос"}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md rounded-[1.8rem] border border-white/10 bg-[#0a0a0a] text-[#f5f5f5]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold tracking-[-0.04em]">
              Запрос принят
            </DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-7 text-[#c0c0c0]/72">
              Мы получили ваш бриф и свяжемся в ближайшее время, чтобы обсудить
              материалы, сроки и формат производства.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setIsDialogOpen(false)}
            className="bronze-button mt-2 h-auto w-full py-3"
          >
            Закрыть
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
