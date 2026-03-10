import { loadAll, loadScene, startGame } from '@safe-engine/webgl'
import { initBox2d } from '@safe-engine/webgl/dist/box2d-wasm'

import { defaultFont, sf_progress_bar, sf_progress_bg } from './assets'
import { Loading } from './scene/Loading'
import { designedResolution } from './settings'

initBox2d().then(async () => {
  await startGame(defaultFont, designedResolution)
  // setupDragonBones()
  // setupSpine()
  // setupCollider(colliderMatrix, true)
  // setupPhysics(colliderMatrix, true)
  // setupRichText()
  // setupTiledMap()
  await loadAll([sf_progress_bar, sf_progress_bg])
  loadScene(Loading)
})
