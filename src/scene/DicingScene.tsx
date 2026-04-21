import { LabelComp, SceneComponent, Vec2 } from '@safe-engine/webgl'
import { DicedSpriteComp } from '@safe-engine/webgl/dist/dicing/DicedSpriteComp'

import { atlas_json, sf_atlas } from '../assets'
import { BackButton } from '../components/BackButton'

export class DicingScene extends SceneComponent {

  render() {
    <SceneComponent>
      <LabelComp node={{ position: Vec2(607, 270) }} string="Hello safex dicing" />
      <DicedSpriteComp node={{ position: Vec2(357, 454), scale: 1 }} data={atlas_json} texture={sf_atlas} animation='Pawn' />
      <BackButton />
    </SceneComponent>
  }
}
