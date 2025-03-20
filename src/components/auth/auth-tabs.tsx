
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState<string>("login");

  return (
    <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm onSignUpClick={() => setActiveTab("signup")} />
      </TabsContent>
      <TabsContent value="signup">
        <SignupForm onLoginClick={() => setActiveTab("login")} />
      </TabsContent>
    </Tabs>
  );
}
