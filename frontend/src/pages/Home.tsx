import { PageTop } from "../components/shared";
import { MainLayout } from "../layouts";

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <PageTop title="Web news" postTitle="News about everything" />
    </MainLayout>
  );
};
