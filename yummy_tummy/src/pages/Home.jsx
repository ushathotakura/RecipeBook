//going to add 2 components: popular and veggie

import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

import React from 'react'

function Home() {
  return (
    <div>
        <Veggie />
        <Popular />
    </div>
  )
}

export default Home