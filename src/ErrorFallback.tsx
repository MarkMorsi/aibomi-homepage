import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { FallbackProps } from "react-error-boundary";
import { Warning } from "@phosphor-icons/react";
import { Button } from "./components/ui/button";

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Alert variant="destructive" className="max-w-md">
        <Warning className="h-4 w-4" />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>
          <div className="mt-2 space-y-4">
            <p className="text-sm">
              {error instanceof Error ? error.message : 'An unexpected error occurred'}
            </p>
            <Button 
              onClick={resetErrorBoundary}
              variant="outline"
              size="sm"
            >
              Try again
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
