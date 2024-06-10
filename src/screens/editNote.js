import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomButton from '../components/customButton'
import CustomTextInput from '../components/customTextInput'

const EditNote = ({ setCurrentPage, editNote, note }) => {
    const [title, setTitle] = useState(note.title)
    const [desc, setDesc] = useState(note.desc)

    const handleSave = () => {
        editNote(note.id, title, desc)
        setCurrentPage('home')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Edit Note</Text>
            <CustomTextInput
                label="Title"
                text={title}
                onChange={setTitle}
            />
            <CustomTextInput
                label="Description"
                text={desc}
                onChange={setDesc}
                multiline={true}
                numberOfLines={4}
            />
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#247881"
                    color="white"
                    text="Simpan"
                    width="100%"
                    onPress={handleSave}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Batal"
                    width="100%"
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    pageTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#203239',
    },
    spacerTop: {
        marginTop: 30,
    },
})
export default EditNote