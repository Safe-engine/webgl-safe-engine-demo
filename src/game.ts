import { GameWorld, loadAll, loadScene, setupCollider, setupRichText, startGame } from '@safe-engine/webgl'
import { setupDragonBones } from '@safe-engine/webgl/dist/dragonbones'
import { setupTiledMap } from '@safe-engine/webgl/dist/fasttiled'
import { setupPhysics } from '@safe-engine/webgl/dist/planck'
import { setupSpine } from '@safe-engine/webgl/dist/spine'
import { lilita_one_regularFont, sf_progress_bar, sf_progress_bg } from './assets'
import { Loading } from './scene/Loading'
import { colliderMatrix, designedResolution } from './settings'
(async () => {
  await startGame(lilita_one_regularFont, designedResolution)
  setupDragonBones()
  setupSpine()
  setupCollider(colliderMatrix, true)
  setupPhysics(GameWorld.Instance, true)
  setupRichText()
  setupTiledMap()
  await loadAll([sf_progress_bar, sf_progress_bg])
  loadScene(Loading)
})()
