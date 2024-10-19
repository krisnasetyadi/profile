'use client'

import { Label } from "@/components/ui/label/label"
import { Switch } from "@/components/ui/switch/switch"

export function SwitchComponent({
    label,
    handleChange,
    isChecked = false,
}:{
    label?: string, 
    handleChange: (e: any) => void
    isChecked?: boolean
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch 
        onCheckedChange={e => handleChange(e)}
        checked={isChecked}
      />
      <Label htmlFor="airplane-mode">{label}</Label>
    </div>
  )
}
