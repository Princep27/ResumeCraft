import styled from "styled-components";
import BasicDetail from "./Component/BasicDetail";
import Education from "./Component/Eduaction";
import WorkExperience from "./Component/WorkExperience";
import Projects from "./Component/Projects";
import Achievement from "./Component/Achievement";
import Profiles from "./Component/Profiles";
import TechnicalSkill from "./Component/TechnicalSkill";
import Certificates from "./Component/Certificate";
import {RxDragHandleHorizontal} from "react-icons/rx";
import { useState } from "react";
import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";

const Wrapper = styled.div`
        height:100%;
        width:100%;
    `

    const Icon = styled.span`
    position: absolute;
    right:10px;     
    top:10px;
    visibility: hidden;
    font-size: 30px;
    `

    const Text = styled.p   `
    position: absolute;
    right : 8px;
    top : 35px;
    font-size: large;
    font-weight: 600;
    color: #b1afaf;
    visibility: hidden;
    `   

    const Container = styled.div`   
        position:relative;
        :hover {
            background-color: #dfdede69;
        };

        &:hover ${Icon}{
            visibility: visible;
        }

        &:hover ${Text}{
            visibility: visible;
        }
    `

function PlainTemplate(){                        
    const [arr,setArr] = useState([{Name:BasicDetail, id:0}, {Name:Education, id:1}, {Name:WorkExperience, id:2} ,{Name:Projects, id:3}, {Name:TechnicalSkill,id:4}, {Name:Achievement,id:5},{Name:Profiles,id:6},{Name:Certificates,id:7}]);

    function handleDragEnd(result){
        console.log(result);
        if(!result.destination) return;
        const items = Array.from(arr);
        const [reorderData] = items.splice(result.source.index,1);
        items.splice(result.destination.index,0,reorderData);
        setArr(items);
    }

    return (

        <DragDropContext onDragEnd={handleDragEnd} >
            <Droppable droppableId="Draggable" >
                {   
                    (provided)=>{
                        return (<Wrapper {...provided.droppableProps} ref={provided.innerRef} >
                                {
                                    arr.map((Component,index) => (
                                        <Draggable direction="vertical" key={Component.id} draggableId={Component.id.toString()} index={index} >
                                        {
                                            (provided)=>{
                                                return (<Container  ref={provided.innerRef}  {...provided.draggableProps} ><Component.Name /><Icon {...provided.dragHandleProps}><RxDragHandleHorizontal /></Icon> <Text>Drag</Text></Container>);
                                            }
                                        }                                            
                                        </Draggable>
                                    ))
                                }       
                                {provided.placeholder}          
                                </Wrapper>) 
                    }
                }
            </Droppable>
        </DragDropContext>        
    )
}

export default PlainTemplate;       