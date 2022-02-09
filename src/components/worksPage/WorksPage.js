import React, {useState, useEffect} from 'react';
import {Grid, CircularProgress, Typography} from '@mui/material';
import firebase from '../../firebase';

import TabView from './components/TabView';

import DesignsPage from './components/DesignsPage';
import SoftwaresPage from './components/SoftwaresPage';
import ResearchesPage from './components/ResearchesPage';

import colors from '../../constants/colors';

function WorksPage() {
    const [designWorks, setDesignWorks] = useState([]);
    const [dCount, setDCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0);

    const ref = firebase.firestore().collection("designs");
    
    function onTabChange(value) {
        setSelectedTab(value);
    }

    const getWorks = async function() {
        setLoading(true);
        
        let items = [];
        try{
            const data = await ref.get();
            data.docs.forEach(async (doc)=>{
                let filesList = [];
                const filesRef = firebase.firestore().collection("designs").doc(doc.id).collection("files");
                const files = await filesRef.get();
                files.docs.forEach(async (doc2)=>{
                    filesList.push(doc2.data());
                });
                let d = {
                    design: doc.data(),
                    files: filesList
                };
                items.push(d);
                setDCount(items.length);
            });
        }catch(e) {
            
        }finally{
            // setDesignWorks(items);
            setDesignWorks(items);
            setLoading(false);
            // addData();
        }
        
        console.log("Designs: " + designWorks.length + dCount);
    }

    useEffect(() => {
        getWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



  return <Grid container direction="column" paddingTop={3} paddingBottom={3} style={{ backgroundColor: "#EEEEEE" }}>
      <Grid container direction="row" paddingTop={2} justifyContent="center">
          <Typography style={{color: colors.primary, fontSize: "30px",letterSpacing: 5,fontWeight: 800}} 
          fontFamily="Roboto" align='left'> {"Personal PROJECTS".toUpperCase()} </Typography>
      </Grid>
      <br />
      <TabView onTabClicked={onTabChange}/>
      {loading && (
          <Grid container direction="row" justifyContent="center" paddingTop={2} paddingBottom={2}>
              <CircularProgress/>
          </Grid>
      )}

      {!loading && (
          <>
          {selectedTab===0 && (
              <Grid container direction="column" paddingLeft={10} paddingRight={10} paddingTop={5}>
                <Grid container direction="column" marginBottom={2}>
                    {designWorks.map((work) => (
                        <div key={work.files[0].title}>
                            <DesignsPage work={work}/>
                        </div>
                    ))}
                </Grid>
            </Grid>
          )}

          {selectedTab===1 && (
              <SoftwaresPage/>
          )}

          {selectedTab===2 && (
              <ResearchesPage/>
          )}
          </>
      )}
  </Grid>;
}

export default WorksPage;
