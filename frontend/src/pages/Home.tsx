import { MainLayout } from "../components/layouts";
import { CardsContent, PageTop } from "../components/shared";

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <PageTop title="Web news" postTitle="News about everything" />
      <CardsContent />
    </MainLayout>
  );
};
