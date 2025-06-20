
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="h-8 w-8" />
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500"></span>
        </Button>
        
        <Button variant="ghost" size="icon" onClick={handleSignOut} className="hover:bg-gray-100">
          <LogOut className="h-5 w-5" />
        </Button>
        
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
          <span className="text-xs font-semibold text-white">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </span>
        </div>
      </div>
    </header>
  );
}
