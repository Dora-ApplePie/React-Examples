import React, {useMemo, useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
// import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
// import UncontrolledRating from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff";
import Input from "./components/Input";
// import {Select} from "./components/Select/Select";
import {Example} from "./components/MemoComponents/ReactMemo";
import {HelpsForReactMemo, LikeCallback, UseMemoDifficult} from "./components/MemoComponents/UseMemo";
import {Select} from "./components/Select/Select";
import {UseStateEx} from "./components/UseState/UseState";
import {UseEffectEx} from "./components/useEffect/useEffect";
import {SetTimeoutAndInterval} from "./components/useEffect/SetTimeoutAndInterval";


const App = React.memo(() => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setCollapsed] = useState<boolean>(false);
    let [switcherValue, setSwitcher] = useState<boolean>(false);
    // let [UncontrolledSwitcherValue, UncontrolledSetSwitcher] = useState<boolean>(false);
    let [value, setValue] = useState<any>(2)


    console.log('App rendering..')
    return (
        <div className={'main'}>
            <PageTitle title={"This is APP Component"}/>
            Article 666
            <hr/>
            <UncontrolledAccordion title={"Menu"}/>
            {/*<UncontrolledAccordion title={"Users"}/>*/}
            <hr/>
            <Example/>
            <hr/>
            <UseMemoDifficult/>
            <hr/>
            <HelpsForReactMemo/>
            <hr/>
            <LikeCallback/>
            <hr/>
            <Accordion title={"Control component"}
                       items={[{title: 'Jesss', value: 1}, {title: 'Monika', value: 2}, {title: 'Patricia', value: 3}]}
                       collapsed={accordionCollapsed} onChange={() => setCollapsed(!accordionCollapsed)}
                       onClick={(value) => {
                           alert(`Was clicked ${value} user`)
                       }}/>
            {/*accordion = parents*/}
            <hr/>
            <Select items={[{title: 'Patricia', value: 1}, {title: 'Helga', value: 2}, {title: 'Jessica', value: 3}]}
                    onChange={setValue}
                    value={value}/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            {/*<UncontrolledRating/>*/}
            {/*<hr/>*/}
            {/*<UncontrolledOnOff onChange={UncontrolledSetSwitcher}/> {UncontrolledSwitcherValue.toString()}*/}
            {/*<hr/>*/}
            <OnOff switcher={switcherValue} onClick={setSwitcher}/>
            <Input/>
            <hr/>
            <UseStateEx/>
            <hr/>
            <UseEffectEx/>
            <hr/>
            <SetTimeoutAndInterval/>
        </div>
    );
})

type PageTitlePropsType = {
    title: string
}

const PageTitle = React.memo((props: PageTitlePropsType) => {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
})

export default App;

