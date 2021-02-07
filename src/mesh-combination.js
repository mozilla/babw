import { findChildrenByType } from "./utils";
import { createTextureAtlas } from "./create-texture-atlas";
import { remapImages } from "./remap-images";

export async function combine({ avatar }) {
  const meshes = findChildrenByType(avatar, "SkinnedMesh");
  const { images, uvs } = await createTextureAtlas({ meshes });
  meshes
    .filter((mesh) => !mesh.material.transparent)
    .map((mesh) => {
      remapImages({ mesh, images, uvs: uvs.get(mesh) });
    });
  return avatar;
}