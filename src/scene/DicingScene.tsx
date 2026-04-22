import { LabelComp, SceneComponent, Vec2 } from '@safe-engine/webgl'
import { DicedSpriteComp } from '@safe-engine/webgl/dist/dicing/DicedSpriteComp'

import { atlas_json, sf_atlas } from '../assets'
import { BackButton } from '../components/BackButton'

export class DicingScene extends SceneComponent {
  dicedSpriteComp: DicedSpriteComp

  start() {
    this.dicedSpriteComp.getRenderNode().play('Run')
  }

  render() {
    <SceneComponent>
      <LabelComp node={{ position: Vec2(607, 270) }} string="Hello safex dicing" />
      <DicedSpriteComp $ref={this.dicedSpriteComp}  node={{ position: Vec2(157, 454), scale: 1 }} data={atlas_json} texture={sf_atlas} animation='Heal' />
      <BackButton />
    </SceneComponent>
  }
}
