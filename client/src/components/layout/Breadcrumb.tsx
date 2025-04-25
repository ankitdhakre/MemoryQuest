import { Link, useLocation } from "wouter";

type BreadcrumbItem = {
  label: string;
  path: string;
  isCurrent?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-primary-500 dark:text-primary-300 hover:underline">
            Home
          </Link>
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="material-icons text-neutral-400 mx-1 text-xs">chevron_right</span>
              {item.isCurrent ? (
                <span className="text-neutral-600 dark:text-neutral-400">{item.label}</span>
              ) : (
                <Link href={item.path} className="text-primary-500 dark:text-primary-300 hover:underline">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
