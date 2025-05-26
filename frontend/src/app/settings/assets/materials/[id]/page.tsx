import FormCardSkeleton from '@/components/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import MaterialsDetails from '../_components/MaterialsDetails';

export const metadata = {
  title: 'Dashboard : Materials Details View'
};

type PageProps = { params: Promise<{ id: number }> };

export default async function Page({ params }: PageProps) {
  // Directly use the id from params
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <Suspense fallback={<FormCardSkeleton />}>
          <MaterialsDetails id={id} />
        </Suspense>
      </div>
    </PageContainer>
  );
}