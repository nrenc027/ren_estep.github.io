import React from 'react';
import Grid from 'components/Grid';
import Header from 'components/Header';
import './layout.scss'


const Layout =({children})=>{
return <Grid>
    <Header/>
    <main>
        {children}
    </main>
</Grid>
}
export default  Layout;