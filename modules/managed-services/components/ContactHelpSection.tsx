import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const ContactHelpSection = () => {
    return (
        <section className="py-[24px] md:py-[32px] bg-white">
            <AnimateOnScroll variant="fade-up" className="max-w-4xl mx-auto px-6 md:px-8 xl:px-10 text-center">
                <h2 className={`text-[35px] font-light leading-snug text-[#024645] mb-6 font-funnel`}>
                    We&apos;re Here to Help
                </h2>
                <p className={`text-lg leading-relaxed text-black mb-12 max-w-2xl mx-auto font-dm-sans`}>
                    Explore how your fiber internet can power your home or business. Our team is ready to assist you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        variant="primary"
                        size="lg"
                        icon="none"
                        className="w-full sm:w-auto text-[14px] font-semibold"
                    >
                        Get Started
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        icon="none"
                        className="w-full sm:w-auto text-[14px] font-semibold flex items-center gap-2 hover:bg-[#038F8D] hover:text-white transition-colors duration-200"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Chat with us
                    </Button>
                </div>
            </AnimateOnScroll>
        </section>
    );
};