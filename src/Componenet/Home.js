import React from 'react';
import CrudSetUp from './CrudOparetor/CrudSetUp';
import UserShow from './CrudOparetor/UserShow';
import HomeFirst from './HomeFirst';
import MenuSetup from './Menu/MenuSetup';

import QusitionSetup from './Qusition/QusitionSetup';
import RevewSetup from './Revew/RevewSetup';
import TabSetup from './TabComponent/TabSetup';
import TourSetUp from './TourComponent/TourSetUp';
import WordSetUp from './Word/WordSetUp';

const Home = () => {

    return (
        <div>


            {/* <HomeFirst></HomeFirst> */}
            <MenuSetup></MenuSetup>
            <TourSetUp></TourSetUp>
            <WordSetUp />
            <UserShow></UserShow>
            <RevewSetup></RevewSetup>
            <QusitionSetup></QusitionSetup>
            <TabSetup></TabSetup>
        </div>
    );
};

export default Home;