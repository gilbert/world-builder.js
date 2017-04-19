import * as m from 'mithril'

import Game from './models/game'

import Map from './components/map'
import Timeline from './components/timeline'
import PendingDecisions from './components/pending-decisions'


function drawGame () {
  var gs = Game.state
  if ( ! gs ) return m('#ui', m('.loading', "Loading..."))
  return m('#ui',
    m('.sidebar',
      m(PendingDecisions, { game: gs, userPlayer: Game.userPlayer })
    ),
    m('.main', m(Map, { game: gs })),
    m(Timeline, { game: gs })
  )
}

m.mount(document.body, { view: drawGame })
