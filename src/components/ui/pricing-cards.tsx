import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Pricing() {
  return (
    <div className="w-full py-12 lg:py-24">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1 text-sm">Event Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold text-foreground">
              Transparent, high-end coverage.
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-foreground/70 max-w-2xl text-center">
              We provide fixed-rate packages for corporate events, summits, and exhibitions across Singapore. No hidden fees.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8 max-w-6xl mx-auto">
            <Card className="w-full rounded-2xl bg-surface border-border">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-foreground">
                    Half-Day
                  </span>
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  Perfect for intimate panels, product launches, and networking sessions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-foreground">SGD 1,500</span>
                    <span className="text-sm text-foreground/70">
                      {" "}
                      / event
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">4 hours coverage</p>
                        <p className="text-foreground/70 text-sm">
                          Single professional camera operation.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">Highlight Reel</p>
                        <p className="text-foreground/70 text-sm">
                          1-2 minute cinematic event recap.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">Fast Turnaround</p>
                        <p className="text-foreground/70 text-sm">
                          First draft delivered within 7 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full gap-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      Book now <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-2xl rounded-2xl bg-surface/80 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 py-1 px-3 bg-primary text-primary-foreground text-xs font-bold rounded-bl-lg">
                POPULAR
              </div>
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-foreground">
                    Full-Day
                  </span>
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  Comprehensive coverage for major conferences, summits, and corporate offsites.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-foreground">SGD 3,500</span>
                    <span className="text-sm text-foreground/70">
                      {" "}
                      / event
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">8 hours coverage</p>
                        <p className="text-foreground/70 text-sm">
                          Two-person crew (Camera Op + Audio/Grip).
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">Multiple Deliverables</p>
                        <p className="text-foreground/70 text-sm">
                          Main highlight reel + 3 short-form social cutdowns.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">Attendee Testimonials</p>
                        <p className="text-foreground/70 text-sm">
                          Professional lighting & audio setup for vox-pops.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full gap-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Book now <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full rounded-2xl bg-surface border-border">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-foreground">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  Bespoke solutions for multi-day events, exhibitions, and major festivals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-foreground">Custom</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">Dedicated Crew</p>
                        <p className="text-foreground/70 text-sm">
                          Producers, directors, multiple camera operators.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">Daily Recaps</p>
                        <p className="text-foreground/70 text-sm">
                          Ultra-fast turnaround edits provided on-site daily.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <p className="font-semibold text-foreground">Full Records & Streams</p>
                        <p className="text-foreground/70 text-sm">
                          Multi-cam switching & live streaming integration.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full gap-4 border-border text-foreground hover:bg-surface hover:border-primary transition-colors">
                      Book a meeting <PhoneCall className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
