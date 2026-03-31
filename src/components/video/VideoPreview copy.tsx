import { CharacterPanel } from "../shared/CharacterPanel";
import { SceneSelector } from "../shared/SceneSelector";
import { useVideoPanel } from "./useVideoPanel";

/**
 * @description 视频预览组件，展示视频故事板、角色选择和场景选择器
 * @returns 视频预览面板 React 组件
 */
export function VideoPreview() {
  const { characters, selectedCharacter, handleCharacterSelect } =
    useVideoPanel();
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // const [isVideoLoading, setIsVideoLoading] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (selectedCharacter?.video) {
  //     setIsVideoLoaded(false);
  //     setIsPlaying(false);
  //     setIsVideoLoading(true);
  //   }
  // }, [selectedCharacter?.video]);

  // const handlePlay = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   }
  // };

  // const handleVideoClick = () => {
  //   if (videoRef.current && isPlaying) {
  //     videoRef.current.pause();
  //     videoRef.current.currentTime = 0;
  //     setIsPlaying(false);
  //   }
  // };

  // const handleVideoEnded = () => {
  //   setIsPlaying(false);
  // };

  // const handleVideoLoaded = () => {
  //   setIsVideoLoaded(true);
  //   setIsVideoLoading(false);
  // };

  return (
    <div className="flex gap-11">
      <div className="flex-1 flex flex-col">
        <h2 className="text-white font-bold text-[2rem] leading-[1.25em] mb-3">
          STORYBOARD PREVIEW
        </h2>
        <div className="relative w-296 h-167 overflow-hidden bg-black/50 border-5 border-red">
          {selectedCharacter?.video && (
            <>
              {/* <video
                key={selectedCharacter.video}
                ref={videoRef}
                src={selectedCharacter.video}
                className="absolute inset-0 w-full h-full object-cover"
                onLoadedData={handleVideoLoaded}
                onEnded={handleVideoEnded}
                onClick={handleVideoClick}
                playsInline
              /> */}
              <iframe
                width="1030"
                height="580"
                src="https://www.youtube.com/embed/29SQ3GTJNPM?si=k1rCf4CE9XEcJHT2"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
              ></iframe>
              {/* {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
              {isVideoLoaded && !isPlaying && (
                <PlayButton onClick={handlePlay} />
              )} */}
            </>
          )}
        </div>
      </div>

      <div className="w-143 flex flex-col gap-10">
        <CharacterPanel
          characters={characters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={handleCharacterSelect}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            SCENE SELECTOR
          </h3>
          <SceneSelector variant="video" />
        </div>
      </div>
    </div>
  );
}
