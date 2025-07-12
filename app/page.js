import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials} from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="bg-background text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-cyan-900 via-emerald-950 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-cyan-900/30 border-cyan-600/40 px-4 py-2 text-cyan-400 text-sm font-medium"
              >
                Smarter Healthcare Access
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Connect with doctors <br />
                <span className="text-cyan-400">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video with specialists, and manage
                your health—all in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-600 text-white hover:bg-cyan-700"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cyan-700/30 hover:bg-muted/80"
                >
                  <Link href="/doctors">Explore Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/banner.png"
                alt="Online doctor consultation"
                fill
                priority
                className="object-cover md:pt-14 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Health at Your Fingertips
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A few taps are all it takes to access world-class healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-cyan-700/20 hover:border-cyan-600/40 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="bg-cyan-800/30 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-cyan-900/30 border-cyan-600/30 px-4 py-1 text-cyan-400 text-sm font-medium mb-4"
            >
              Transparent & Flexible Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose a Plan That Works for You
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether it’s a one-time consult or ongoing care, we’ve got you
              covered.
            </p>
          </div>

          <div className="mx-auto">
            <Pricing />

            <Card className="mt-12 bg-muted/20 border-cyan-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-cyan-400" />
                  Credit System Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-cyan-800/20 p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-emerald-950/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-cyan-900/30 border-cyan-600/30 px-4 py-1 text-cyan-400 text-sm font-medium mb-4"
            >
              Patient & Doctor Feedback
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover stories of care, trust, and success.
            </p>
          </div>

          <div className="group relative">
            <div className="flex gap-6 md:gap-8 px-1 md:px-4 overflow-hidden hover:overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-transparent">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-sm snap-start shrink-0"
                >
                  <Card className="border-cyan-800/20 hover:border-cyan-700/40 transition-all h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-800/30 flex items-center justify-center mr-4">
                          <span className="text-cyan-400 font-bold">
                            {testimonial.initials}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Answers to commonly asked questions about MediConnect
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400">
                  What is online doctor consultation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Online doctor consultation through MediConnect allows you to
                  connect with licensed doctors virtually using secure video
                  calls and chats from the comfort of your home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400">
                  How do I start consulting a doctor on MediConnect?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Simply sign up, choose your health concern, and select a
                  doctor from our network. You can start a video consultation in
                  just a few steps.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400">
                  Are the doctors on MediConnect verified?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, all doctors go through a thorough background and license
                  verification before joining MediConnect.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400">
                  Is my consultation on MediConnect secure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We follow industry-standard encryption and privacy
                  protocols to keep your medical data and consultations safe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400">
                  What if I don’t get a response from a doctor?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If your doctor is unavailable, we’ll either reschedule or help
                  you connect with another qualified professional promptly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-cyan-400">
                  Can I get free consultations on MediConnect?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We occasionally offer free consultation campaigns. Keep
                  an eye out for these limited-time opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-cyan-900/30 to-emerald-950/20 border-cyan-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Take Charge of Your Health Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands simplifying their healthcare experience with
                  our platform. Secure, seamless, and supportive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-cyan-600 text-white hover:bg-cyan-700"
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-cyan-700/30 hover:bg-muted/80"
                  >
                    <Link href="#pricing">Explore Plans</Link>
                  </Button>
                </div>
              </div>

              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-cyan-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
