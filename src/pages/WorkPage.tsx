import { SelectedWork } from '@/components/SelectedWork';
import { VisualStorytelling } from '@/components/VisualStorytelling';

export function WorkPage() {
  return (
    <div className="pt-20">
      <SelectedWork />
      <VisualStorytelling />
    </div>
  );
}
