'use client'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar/menubar"
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react"

interface SubItemType {
    item: string;
    redirectUrl?: string;
}

interface ContentType {
    item: string | ReactNode;
    shortcut?: string;
    redirectUrl?: string;
    hasSubMenu?: boolean;
    subItem?: SubItemType[];
}
  
  export function MenubarComponent(
    {
        icon: Icon,
        contents,
        className
    }: {
        icon: ReactNode, 
        contents: ContentType[],
        className?: string
    }) {
   
    return (
      <Menubar className={className} >
        <MenubarMenu>
          <MenubarTrigger> 
            {Icon}
          </MenubarTrigger>
          <MenubarContent data-side={'start'}>
            {contents.map((content:ContentType) => {

                if(content.hasSubMenu) {
                    return (
                        <>
                            <MenubarSub>
                                <MenubarSubTrigger>{content.item}</MenubarSubTrigger>
                                {content.subItem && (
                                    <MenubarSubContent>
                                        {content.subItem.map(({item}: SubItemType, index) =>  (
                                                <MenubarItem key={index}>
                                                    <Link href={content.redirectUrl || "#"}>
                                                        {item}
                                                    </Link>
                                                </MenubarItem>
                                        ))}
                                </MenubarSubContent>
                                )}
                            </MenubarSub>
                            <MenubarSeparator />
                        </>
                    )
                }
                return (
                    <>
                        <MenubarItem>
                            <Link href={content.redirectUrl || "#"}>
                                {content.item} 
                            </Link>
                            {content.shortcut && <MenubarShortcut>{content.shortcut}</MenubarShortcut>}
                        </MenubarItem>
                        <MenubarSeparator />
                    </>
                )
            })}
          </MenubarContent>
        </MenubarMenu>

      </Menubar>
    )
  }
  