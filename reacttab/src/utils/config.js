
import React from 'react';
import asyncComponent from './asyncComponent';

function setComp (C) {
  return C ? <C  /> : null;
}

export const routeConfig = {
  'workplace': setComp(asyncComponent(() => import("../container/About/workplace.js"))),
  '1': setComp(asyncComponent(() => import("../container/About/index.js"))),
  '2': setComp(asyncComponent(() =>  import("../container/About/index1.js"))),
  '3': setComp(asyncComponent(() =>  import("../container/About/index2.js"))),
}