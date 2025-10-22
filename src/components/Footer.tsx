export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-6">
        <p className="text-sm text-muted-foreground">
          © 2025 ERP Education Portal. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
