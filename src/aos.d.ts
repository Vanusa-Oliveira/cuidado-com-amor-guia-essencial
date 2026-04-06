declare module "aos" {
  interface AOSOptions {
    duration?: number;
    once?: boolean;
    easing?: string;
    offset?: number;
  }
  const AOS: {
    init(options?: AOSOptions): void;
    refresh(): void;
  };
  export default AOS;
}
declare module "aos/dist/aos.css";
