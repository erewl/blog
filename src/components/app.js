import { Button, CssBaseline, GeistProvider } from '@geist-ui/react'
import React, { useState } from 'react';
import Layout from "./layout"
import { StaticImage } from "gatsby-plugin-image"

import '../components/layout.css'; // add some style if you want!
import { Display, Image } from "@geist-ui/react"

const App = () => {
    const [themeType, setThemeType] = useState('dark')
    const switchThemes = () => {
        setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
    }
    return (
        <GeistProvider themeType={themeType}>
            <CssBaseline />

            <Layout/>
            {/* <Button onClick={switchThemes}>Toggle</Button> */}
            <Display>
                {/* <Image src="../images/cover.jpg" /> */}
                <StaticImage
                    src="../images/cover.jpg"
                    // width={300}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Early morning in Cadiz, Spain"
                    style={{ marginBottom: `1.45rem` }}
                />
            </Display>
        </GeistProvider>
    )
}

export default App