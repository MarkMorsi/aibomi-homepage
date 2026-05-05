import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { FallbackProps } from "react-error-bound

import { AlertTriangleIcon, RefreshCwIcon } from "lucide-react";

interface ErrorFallbackProps {
    <div classN
        <Alert variant="destructi
 

        </Alert>
        <div className="bg-card border rounded-lg p-4 mb-6">
          <pre className="text-xs text-destructive bg-muted/50 p-3 
          </pre>

          
          variant="outline"
          <RefreshCwIcon />
        </Button>
    </div>
}



        </Alert>
        
        <div className="bg-card border rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">Error Details:</h3>
          <pre className="text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32">
            {error.message}
          </pre>
        </div>
        
        <Button 
          onClick={resetErrorBoundary} 
          className="w-full"
          variant="outline"
        >
          <RefreshCwIcon />
          Try Again
        </Button>
      </div>
    </div>
  );
}
