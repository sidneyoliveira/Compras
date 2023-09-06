import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar, { SidebarItem } from './components/Sidebar'

import{
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,

} from "lucide-react"

export default function App() {
  return (
    <main className='App'>
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20}/>} text="Inicial" alert />
        <SidebarItem icon={<Package size={20}/>} text="Pedidos" alert />
        <SidebarItem icon={<BarChart3 size={20}/>} text="Relatórios" />
        <hr className='my-3'/>
        <SidebarItem icon={<UserCircle size={20}/>} text="Usuario"  />
        <SidebarItem icon={<Settings size={20}/>} text="Configurações" />
        <SidebarItem icon={<LifeBuoy size={20}/>} text="Ajuda"  />
      </Sidebar>
    </main>
  )
}

