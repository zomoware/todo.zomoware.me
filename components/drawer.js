export let showDrawer = false;


export default function Drawer({children}, {showDrawer}) {
  return (
    <main className=''>
        <div className="">
            <button onClick={{showDrawer :! showDrawer}}>click</button>
        </div>
        <div className=''>
            {children}
        </div>
    </main>
  )
}
