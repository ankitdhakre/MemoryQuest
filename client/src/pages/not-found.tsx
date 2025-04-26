import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-neutral-900">
      <Card className="w-full max-w-md mx-4 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col space-y-2">
              <h2 className="text-md font-medium text-neutral-800 dark:text-neutral-200">Try visiting one of these pages:</h2>
              <ul className="list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <Link href="/">
                    <span className="text-primary-500 hover:text-primary-600 hover:underline cursor-pointer">Home Page</span>
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge-areas">
                    <span className="text-primary-500 hover:text-primary-600 hover:underline cursor-pointer">Knowledge Areas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tools-and-templates">
                    <span className="text-primary-500 hover:text-primary-600 hover:underline cursor-pointer">Project Management Resources</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <Link href="/">
              <Button className="mt-4 w-full">
                Return to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
