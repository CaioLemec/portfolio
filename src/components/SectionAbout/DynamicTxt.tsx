import Typewriter from "typewriter-effect";

export function DynamicTxt() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Girl's father.").pauseFor(2000).deleteAll();
        typewriter.typeString("Software developer.").pauseFor(2000).deleteAll();
        typewriter.typeString("Lord of the rings fan.").pauseFor(2000).deleteAll();
        typewriter.typeString("Amateur scuba diver.").pauseFor(2000).deleteAll().start();
      }}
      options={{
        autoStart: true,
        loop: true,
      }}
    />
  );
}
