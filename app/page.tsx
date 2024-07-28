import Home from "@/components/home";
import { getPhotoUrl, listPhotos } from "@/firebase/db/photo";

export default async function App() {
  const photosPromise = listPhotos("photos");
  const avatarUrlPromise = getPhotoUrl("avatar/wzh.jpg"); 
  const dogUrlPromise = getPhotoUrl("avatar/black.png");
  const gherUrlPromise = getPhotoUrl("projects/gher.jpg");
  const smartScheduleUrlPromise = getPhotoUrl("projects/soft.jpg");
  const usvUrlPromise = getPhotoUrl("projects/usv.jpg");
  // const resumeUrlPromise = getPhotoUrl("Chengxiang-Wu-Resume-2024.pdf");
  const paperUrlPromise = getPhotoUrl("projects/paper.jpg");
  const resumeUrlPromise = 'https://drive.google.com/file/d/1a83eyUResWSZiJG-k_1HnkJD9HSekgc7/view?usp=drive_link';


  // const photosPromise = ['https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png'];
  // const avatarUrlPromise = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png';
  // const dogUrlPromise = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png';
  // const actionImageUrlPromise = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png';
  // const webagentUrlPromise = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png';
  // const chatbotUrlPromise = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png';
  // const resumeUrlPromise = 'https://drive.google.com/file/d/1a83eyUResWSZiJG-k_1HnkJD9HSekgc7/view?usp=drive_link';
  // const paperUrlPromise = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium-Dark%20Skin%20Tone.png';


  const [
    photos,
    avatarUrl,
    dogUrl,
    gherUrl,
    resumeUrl,
    smartScheduleUrl,
    usvUrl,
    paperUrl,
  ] = await Promise.all([
    photosPromise,
    avatarUrlPromise,
    dogUrlPromise,
    gherUrlPromise,
    resumeUrlPromise,
    smartScheduleUrlPromise,
    usvUrlPromise,
    paperUrlPromise,
  ]);

  return (
    <Home
      gherUrl={gherUrl}
      avatarUrl={avatarUrl}
      usvUrl={usvUrl}
      dogUrl={dogUrl}
      paperUrl={paperUrl}
      photos={photos}
      resumeUrl={resumeUrl}
      smartScheduleUrl={smartScheduleUrl}
    />
  );
}
