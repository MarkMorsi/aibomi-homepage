import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { FallbackProps } from "react-error-boundary";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "./components/ui/button";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full space-y-4">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            An unexpected error occurred. Please try refreshing the page.
          </AlertDescription>
        </Alert>
        
        <div className="bg-card border rounded-lg p-4">
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">Error Details:</h3>
          <pre className="text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32">
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>
        
        <Button 
          onClick={resetErrorBoundary} 
          className="w-full"
          variant="outline"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
