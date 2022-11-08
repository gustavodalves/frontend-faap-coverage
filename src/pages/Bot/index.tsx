import React, { ChangeEvent, useEffect, useState } from 'react'

import { MessageList, Input, Button } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css'

import Container from 'react-bootstrap/Container';

import bot from '../../services/api/bot'

import './style.css'


const ChatBot: React.FC = () => {
    const messageListReferance = React.createRef();
    const inputReferance = React.createRef<any>()

    const [botData, setBotData] = useState<any[]>([])
    const [botReq, setBotReq] = useState<any[]>([])
    const [inputValue, setInputValue] = useState<any>('')
    const [botIsValid, setBotIsValid] = useState<boolean>(true)

    useEffect(() => {
        handleInputMessage()
    }, [botReq])

    async function handleInputMessage() {
        const { data, status } = await bot(botReq)

        if (botIsValid) {
            setInputValue('')
            if (status === 200) {
                setBotData([...botData, {
                    ...data.message,
                    position: 'right',
                }])
                if (data.message.message === 'Tchau :)' || data.message.options[0].message === 'Tchau :)') {
                    setBotIsValid(false)
                }
            }
        }
    }

    function handleClickButton() {
        if (botIsValid) {
            setBotReq([...botReq, inputValue])
            setBotData([...botData, {
                message: inputValue,
                position: 'left',
            }])
        }
    }

    const dataSource: any[] = [];
    botData.forEach((item: any) => {
        dataSource.push({
            text: item.message,
            position: item.position,
            type: 'text'
        })

        if (item.options?.length > 0) {
            item.options.forEach((itemOption: any) => {
                dataSource.push({
                    text: itemOption.message,
                    position: 'right',
                    type: 'text'
                })
            })
        }
    })
    
    const styles = {
        height: {

        }
    }


    return (
        <Container style={{ paddingTop: '80px', paddingBottom: '90px' }} >

                <MessageList
                    referance={messageListReferance}
                    className='message-list list-message-container'
                    toBottomHeight={10}
                    dataSource={dataSource}
                    lockable={true}
                    downButton={false}
                    downButtonBadge={0}
                    sendMessagePreview={false}

                />
            <div style={{ bottom: '80px', position: 'fixed', width: '90vw', left: '50%', transform: 'translateX(-50%)' }}>
                <Input
                    ref={inputReferance}
                    clear={() => (setInputValue(''))}
                    placeholder='Type here...'
                    maxHeight={100}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setInputValue(+e.target.value || e.target.value)}}
                    rightButtons={<Button onClick={handleClickButton} color='white' backgroundColor='#123680' text='Enviar' />}
                />
            </div>
        </Container>
    )
}

export default ChatBot;
