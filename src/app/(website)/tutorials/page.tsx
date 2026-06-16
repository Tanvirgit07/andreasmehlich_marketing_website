import LearningPath from "./_components/LearningPath";
import MostPopular from "./_components/MostPopular";
import NeedHelp from "./_components/NeedHelp";
import SearchTutorials from "./_components/SearchTutorials";
import Tutorials from "./_components/Tutorials";

function page() {
  return (
    <div>
      <Tutorials />
      <LearningPath />
      <MostPopular />
      <SearchTutorials />
      <NeedHelp />
    </div>
  );
}

export default page;
