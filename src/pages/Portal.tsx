
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AuthTabs } from "@/components/auth/auth-tabs";
import { Card, CardContent } from "@/components/ui/card";

const Portal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6 px-6 pb-8">
                <div className="mb-6 text-center">
                  <h1 className="text-2xl font-display font-bold">EESPIRE Portal</h1>
                  <p className="text-muted-foreground mt-2">
                    Access your account to manage your EESPIRE 2025 experience
                  </p>
                </div>
                
                <AuthTabs />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portal;
