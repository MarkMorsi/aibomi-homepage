import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { FallbackProps } from "react-error-bound
import { FallbackProps } from "react-error-boundary";
import { AlertTriangle } from "@phosphor-icons/react";

        <AlertTitle>Something went wrong</AlertTitle>
          
              {error instanceof Error ? error.message : 'An unexpected error occurred
            <Button 
              onClick={resetErrorBoundary}
              Try again
          </div>
      </Alert>
  );






              Try again
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
