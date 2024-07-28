import Home from "@/components/home";
import { getPhotoUrl, listPhotos } from "@/firebase/db/photo";

export default async function App() {
  const photosPromise = listPhotos("photos");
  const avatarUrlPromise = getPhotoUrl("avatar/wzh.jpg"); 
  const dogUrlPromise = getPhotoUrl("avatar/black.png");
  const actionImageUrlPromise = getPhotoUrl("projects/gher.jpg");
  const webagentUrlPromise = getPhotoUrl("projects/soft.jpg");
  const chatbotUrlPromise = getPhotoUrl("projects/usv.jpg");
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
    actionImageUrl,
    resumeUrl,
    webagentUrl,
    chatbotUrl,
    paperUrl,
  ] = await Promise.all([
    photosPromise,
    avatarUrlPromise,
    dogUrlPromise,
    actionImageUrlPromise,
    resumeUrlPromise,
    webagentUrlPromise,
    chatbotUrlPromise,
    paperUrlPromise,
  ]);

  return (
    <Home
      actionImageUrl={actionImageUrl}
      avatarUrl={avatarUrl}
      chatbotUrl={chatbotUrl}
      dogUrl={dogUrl}
      paperUrl={paperUrl}
      photos={photos}
      resumeUrl={resumeUrl}
      webagentUrl={webagentUrl}
    />
  );
}
