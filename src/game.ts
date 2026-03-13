import { loadAll, loadScene, setupRichText, startGame } from '@safe-engine/webgl'
// import { initBox2d } from '@safe-engine/webgl/dist/box2d-wasm'

import { lilita_one_regularFont, sf_progress_bar, sf_progress_bg } from './assets'
import { Loading } from './scene/Loading'
import { designedResolution } from './settings'

(async () => {
  await startGame(lilita_one_regularFont, designedResolution)
  // setupDragonBones()
  // setupSpine()
  // setupCollider(colliderMatrix, true)
  // setupPhysics(colliderMatrix, true)
  setupRichText()
  // setupTiledMap()
  await loadAll([sf_progress_bar, sf_progress_bg])
  loadScene(Loading)
})()
