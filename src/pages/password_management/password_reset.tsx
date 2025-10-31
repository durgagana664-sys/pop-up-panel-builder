import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Info, Search, Copy, RotateCcw, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidEmployeeId, setIsValidEmployeeId] = useState(false);

  // Check if form is complete and valid
const isFormValid =
  (isValidEmail && email.trim() !== "") ||
  (isValidEmployeeId && employeeId.trim() !== "");



  // Validate email/phone format
  useEffect(() => {
    if (email.trim() === "") {
      setIsValidEmail(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    setIsValidEmail(emailRegex.test(email) || mobileRegex.test(email));
  }, [email]);

  // Validate employee ID format
  useEffect(() => {
    if (employeeId.trim() === "") {
      setIsValidEmployeeId(false);
      return;
    }
    setIsValidEmployeeId(employeeId.trim().length >= 3);
  }, [employeeId]);

  const generatePassword = () => {
    // Generate a random password (in real app, this would come from backend)
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "Global";
    for (let i = 0; i < 7; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      toast({
        title: "Validation Error",
        description: "Please fill all fields with valid information",
        variant: "destructive",
      });
      return;
    }

    const newPassword = generatePassword();
    setGeneratedPassword(newPassword);
    setIsSubmitted(true);
    
    toast({
      title: "Success!",
      description: "New password has been generated successfully",
    });
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    toast({
      title: "Copied!",
      description: "Password copied to clipboard",
    });
  };

  const handleResetAnother = () => {
    setEmail("");
    setEmployeeId("");
    setGeneratedPassword("");
    setIsSubmitted(false);
  };

  return (
    <div className="p-4 md:p-8">
      <Card className="w-full max-w-5xl mx-auto shadow-xl border-2 animate-fade-in">
        <CardContent className="p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Search className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-primary">Reset Password</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="rounded-full bg-info text-info-foreground w-7 h-7 flex items-center justify-center hover:bg-info/90 transition-all hover:scale-110 shadow-md">
                    <Info className="w-4 h-4" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold mb-4">Password Reset Instructions</DialogTitle>
                    <DialogDescription asChild>
                      <div className="space-y-4 text-base">
                        <div className="flex gap-3 p-4 bg-info/5 rounded-lg border border-info/20">
                          <span className="text-info mt-1 text-xl">★</span>
                          <p className="text-foreground">
                            If account already exists in staff with same email ID as father or mother email ID of any student, then staff login will open.
                          </p>
                        </div>
                        <div className="flex gap-3 p-4 bg-info/5 rounded-lg border border-info/20">
                          <span className="text-info mt-1 text-xl">★</span>
                          <p className="text-foreground">
                            If father email and mother email ID of student are same, then father email ID will be given preference and login basis father email ID will open.
                          </p>
                        </div>
                        <div className="flex gap-3 p-4 bg-info/5 rounded-lg border border-info/20">
                          <span className="text-info mt-1 text-xl">★</span>
                          <p className="text-foreground">
                            If student, father, mother email ID are same, then information basis student email ID will open.
                          </p>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Password Management</p>
          </div>

          <div className="mb-8 p-4 bg-info/10 border-l-4 border-info rounded-r-lg">
            <p className="text-base leading-relaxed text-foreground">
              Kindly enter the registered mobile number/e-mail Id of the student/staff given in school/college to reset the password. If parent login too is enabled, for resetting parent login, kindly enter father or mother email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 relative">
              <Label htmlFor="email" className="text-base font-semibold">
                Enter Email ID/ Mobile No. <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter Email ID/ Mobile No."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitted}
                  className={`h-12 text-base pr-10 transition-all ${
                    email && isValidEmail ? "border-success" : email ? "border-destructive" : ""
                  }`}
                />
                {email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isValidEmail ? (
                      <CheckCircle2 className="w-5 h-5 text-success animate-scale-in" />
                    ) : (
                      <span className="text-destructive text-sm">✗</span>
                    )}
                  </div>
                )}
              </div>
              {email && !isValidEmail && (
                <p className="text-xs text-destructive animate-fade-in">
                  Please enter a valid email or 10-digit mobile number
                </p>
              )}
            </div>

            <div className="space-y-2 relative">
              <Label htmlFor="employeeId" className="text-base font-semibold">
                Search by employee ID/ admission ID <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                  employeeId && isValidEmployeeId ? "text-success" : "text-muted-foreground"
                }`} />
                <Input
                  id="employeeId"
                  type="text"
                  placeholder="Enter ID..."
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  disabled={isSubmitted}
                  className={`h-12 pl-10 pr-10 text-base transition-all ${
                    employeeId && isValidEmployeeId ? "border-success" : employeeId ? "border-destructive" : ""
                  }`}
                />
                {employeeId && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isValidEmployeeId ? (
                      <CheckCircle2 className="w-5 h-5 text-success animate-scale-in" />
                    ) : (
                      <span className="text-destructive text-sm">✗</span>
                    )}
                  </div>
                )}
              </div>
              {employeeId && !isValidEmployeeId && (
                <p className="text-xs text-destructive animate-fade-in">
                  Please enter a valid ID (minimum 3 characters)
                </p>
              )}
            </div>

            {isSubmitted && (
              <div className="space-y-2 animate-in fade-in duration-300">
                <Label htmlFor="generatedPassword" className="text-base font-semibold text-success flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Generated Password
                </Label>
                <div className="relative">
                  <Input
                    id="generatedPassword"
                    type="text"
                    value={generatedPassword}
                    readOnly
                    className="h-12 pr-12 text-base font-medium bg-white"
                  />
                  <button
                    type="button"
                    onClick={handleCopyPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-accent hover:text-accent/80 transition-all hover:scale-110"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-center pt-6">
              {!isSubmitted ? (
                <Button 
                  type="submit" 
                  className={`min-w-[200px] h-12 text-base font-semibold transition-all ${
                    isFormValid
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105"
                      : "bg-muted hover:bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                >
                  {isFormValid ? "SUBMIT" : "SUBMIT"}
                </Button>
              ) : (
                <Button 
                  type="button" 
                  onClick={handleResetAnother}
                  className="min-w-[250px] h-12 text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                  RESET ANOTHER PASSWORD
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordReset;
