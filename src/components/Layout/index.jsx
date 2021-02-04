import React from 'react';
import Grid from 'components/Grid';
import Header from 'components/Header';
import './layout.scss'


export default ({children})=>{
return <Grid>
    <Header/>
    <main>
        {children}
    </main>
</Grid>
}