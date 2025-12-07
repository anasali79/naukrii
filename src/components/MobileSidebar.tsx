import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import SidebarMenu from './SidebarMenu';
import { Button } from './ui/button';

const MobileSidebar = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-4/5 max-w-xs overflow-y-auto">
        <SidebarMenu onClose={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;