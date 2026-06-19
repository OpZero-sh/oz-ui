/**
 * MDX Component Registry
 *
 * All custom components available in MDX blog posts.
 * Pass this map to MDXRemote's `components` prop.
 *
 * Usage in MDX content:
 *   <Callout type="info" title="Note">Important info here</Callout>
 *   <Chart type="bar" data={[{label:"Jan",value:100},{label:"Feb",value:200}]} />
 *   <Stats items={[{label:"Users",value:"12k",change:"+14%"}]} />
 *   <Tabs items={[{label:"Tab 1",content:"<p>Content</p>"}]} />
 */

import { Callout } from './callout'
import { Chart } from './chart'
import { Stats } from './stats'
import { MdxTabs } from './tabs'

export const mdxComponents = {
  Callout,
  Chart,
  Stats,
  Tabs: MdxTabs,
}
