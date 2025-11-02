import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Form validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно содержать минимум 2 символа" }),
  contact: z
    .string()
    .min(5, { message: "Введите корректный email или телефон" }),
  message: z
    .string()
    .min(10, { message: "Сообщение должно содержать минимум 10 символов" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      form.reset();
      setIsDialogOpen(true);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-40 bg-background"
      data-oid="c1_1sya"
    >
      <div className="container mx-auto px-8 max-w-6xl" data-oid="5t86rtm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
          data-oid="pw9jka8"
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-normal text-foreground mb-8 leading-tight"
            data-oid="6rrmfe:"
          >
            Начнём
            <br data-oid="-6wxt9a" />
            <span className="text-foreground/50" data-oid="igw147n">
              сотрудничество
            </span>
          </h2>
          <div className="max-w-xl" data-oid="9xpujn0">
            <p
              className="text-lg text-foreground/60 font-light leading-relaxed"
              data-oid="jesu91a"
            >
              Мы создадим мебель по вашим идеям, фото или референсам. Оставьте
              заявку — свяжемся, обсудим детали и предложим решение.
            </p>
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          data-oid="l5fey_k"
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-oid="h2xyg9u"
          >
            <Form {...form} data-oid="hi.u..a">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
                data-oid="35rz1fx"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem data-oid="lhjb.ht">
                      <FormLabel
                        className="text-sm font-light text-foreground/60 tracking-wide"
                        data-oid="4_q-xj-"
                      >
                        ИМЯ
                      </FormLabel>
                      <FormControl data-oid="p4ugpnd">
                        <Input
                          {...field}
                          className="bg-transparent border-0 border-b border-foreground/20 focus:border-foreground rounded-none px-0 py-4 text-lg font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Ваше имя"
                          data-oid="6_sbtzo"
                        />
                      </FormControl>
                      <FormMessage data-oid="ymks8.4" />
                    </FormItem>
                  )}
                  data-oid="bghldky"
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem data-oid="b8ni41n">
                      <FormLabel
                        className="text-sm font-light text-foreground/60 tracking-wide"
                        data-oid="bza:qc:"
                      >
                        КОНТАКТ
                      </FormLabel>
                      <FormControl data-oid="8cx.chr">
                        <Input
                          {...field}
                          className="bg-transparent border-0 border-b border-foreground/20 focus:border-foreground rounded-none px-0 py-4 text-lg font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Email или телефон"
                          data-oid="vmnj3t8"
                        />
                      </FormControl>
                      <FormMessage data-oid="81_uzt6" />
                    </FormItem>
                  )}
                  data-oid="3q.87z3"
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem data-oid="i2y:_t6">
                      <FormLabel
                        className="text-sm font-light text-foreground/60 tracking-wide"
                        data-oid="2ohjnub"
                      >
                        СООБЩЕНИЕ
                      </FormLabel>
                      <FormControl data-oid="lr1ii_a">
                        <Textarea
                          {...field}
                          className="bg-transparent border-0 border-b border-foreground/20 focus:border-foreground rounded-none px-0 py-4 text-lg font-light min-h-[120px] resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Опишите ваш проект"
                          data-oid="_-48tn4"
                        />
                      </FormControl>
                      <FormMessage data-oid="hx9k3-w" />
                    </FormItem>
                  )}
                  data-oid="_f8lae-"
                />

                <Button
                  type="submit"
                  className="text-sm font-light text-foreground border border-foreground/20 px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-500 tracking-wide bg-transparent"
                  disabled={isSubmitting}
                  data-oid="9f6a26a"
                >
                  {isSubmitting ? "Отправка..." : "Отправить"}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12"
            data-oid="nge:jnw"
          >
            <div className="space-y-8" data-oid="y_4axtj">
              <div data-oid="jlbave4">
                <h3
                  className="text-sm font-light text-foreground/60 tracking-wide mb-3"
                  data-oid="7_k6wtl"
                >
                  EMAIL
                </h3>
                <a
                  href="mailto:contact@form-eng.com"
                  className="text-lg font-light text-foreground hover:text-foreground/70 transition-colors"
                  data-oid="jzex-8."
                >
                  contact@form-eng.com
                </a>
              </div>

              <div data-oid="ip_v2dc">
                <h3
                  className="text-sm font-light text-foreground/60 tracking-wide mb-3"
                  data-oid="gbwytk8"
                >
                  ТЕЛЕФОН
                </h3>
                <a
                  href="tel:+74951234567"
                  className="text-lg font-light text-foreground hover:text-foreground/70 transition-colors"
                  data-oid="zj:-3pv"
                >
                  +7 (495) 123-45-67
                </a>
              </div>

              <div data-oid="9e0fkxq">
                <h3
                  className="text-sm font-light text-foreground/60 tracking-wide mb-3"
                  data-oid="tr.3oqz"
                >
                  АДРЕС
                </h3>
                <p
                  className="text-lg font-light text-foreground"
                  data-oid="bx4dmnj"
                >
                  Москва, Проектируемый проезд, 1
                </p>
              </div>
            </div>

            <div
              className="pt-8 border-t border-foreground/10"
              data-oid="myaclrq"
            >
              <p
                className="text-base font-light text-foreground/50 leading-relaxed"
                data-oid="_wfzu9z"
              >
                Мы открыты для сотрудничества с архитекторами, дизайнерами и
                частными заказчиками.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        data-oid="m4d0s9w"
      >
        <DialogContent
          className="bg-card border-border/50 max-w-md"
          data-oid="qq91z:k"
        >
          <DialogHeader data-oid="e3wqga9">
            <DialogTitle className="text-xl font-light" data-oid=":6i2oqm">
              Спасибо!
            </DialogTitle>
            <DialogDescription
              className="text-foreground/70 pt-2"
              data-oid="hfx_98k"
            >
              Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end" data-oid="r44hjc:">
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="text-sm font-light text-foreground border border-foreground/20 px-6 py-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
              data-oid="lde:m_1"
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
