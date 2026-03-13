import { Component, type ErrorInfo, type ReactNode } from "react";

interface SectionErrorBoundaryProps {
  children: ReactNode;
  sectionName: string;
}

interface SectionErrorBoundaryState {
  hasError: boolean;
}

export class SectionErrorBoundary extends Component<
  SectionErrorBoundaryProps,
  SectionErrorBoundaryState
> {
  state: SectionErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Section "${this.props.sectionName}" failed to render.`, error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <section className="mx-5 my-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(5,5,5,0.92))] px-6 py-16 text-white shadow-[0_32px_80px_rgba(0,0,0,0.45)] md:mx-8 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[#cd7f32]/75">
            Временное ограничение
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#f5f5f5] md:text-4xl">
            Секция «{this.props.sectionName}» сейчас недоступна
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#c0c0c0]/75 md:text-base">
            Остальная часть сайта продолжает работать. Обновите страницу через
            несколько секунд или воспользуйтесь контактной формой ниже.
          </p>
        </div>
      </section>
    );
  }
}
