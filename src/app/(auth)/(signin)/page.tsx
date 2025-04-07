import { Metadata } from 'next';
import SignInViewPage from '@/features/auth/components/sigin-view';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default async function Page() {
  try {
    const response = await fetch(
      'https://api.github.com/Souvik-223/nextjs-shadcn-dashboard-startterpack',
      {
        next: { revalidate: 3600 }
      }
    );

    if (response.ok) {
      const data = await response.json();
    }
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
  }
  return <SignInViewPage />;
}
