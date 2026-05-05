import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { FallbackProps } from "react-error-boundary";
import { Warning } from "@phosphor-icons/react";

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Alert variant="destructive" className="max-w-md">
        <Warning className="h-4 w-4" />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>
          <div className="mt-2 space-y-4">
            <p className="font-semibold">
              {error instanceof Error ? error.message : 'An unexpected error occurred'}
            </p>
            <Button 
              className="w-full"
              onClick={resetErrorBoundary}
            >
              Try Again
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
