import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { FallbackProps } from "react-error-boundary";
import { AlertTriangle } from "@phosphor-icons/react";

        <AlertTitle>Something went wrong</AlertTitle>
          
              {error instanceof Error ? error.message : 'An unexpected error occurred
            <Button 
              onClick={resetErrorBoundary}
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








