import { RenderConfigScreenCtx } from "datocms-plugin-sdk";
import { Canvas } from "datocms-react-ui";

type Props = {
  ctx: RenderConfigScreenCtx;
};

export default function ConfigScreen({ ctx }: Props) {
  return (
    <Canvas ctx={ctx}>
      Add it to the slug field you want as a field addon. From then
      on, all of the changes made to that slug field will be logged and saved
      with a "source" and "destination" rule on the "Slug Redirects" model.
    </Canvas>
  );
}
