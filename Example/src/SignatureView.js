import React, {useRef} from 'react';
import {View, Text, Modal, Platform, Button} from 'react-native';
import SignatureCapture from '@lagregance/react-native-signature-capture';

const toolbarHeight = Platform.select({
  android: 0,
  ios: 22,
});

const modalViewStyle = {
  paddingTop: toolbarHeight,
  backgroundColor: 'silver',
  flex: 1,
};

export const SignatureDialog = props => {
  const {open, onSave, onClose} = props;

  const signRef = useRef();

  return (
    <Modal transparent={false} visible={open}>
      <View style={modalViewStyle}>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text style={{fontSize: 50}} onPress={onClose}>
            {' x '}
          </Text>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 14}}>Please write your signature.</Text>
          </View>
        </View>
        <SignatureCapture
          ref={signRef}
          style={{width: 500, height: 300, margin: 50}}
          showNativeButtons={false}
          showBorder={false}
          saveImageFileInExtStorage={false}
          showTitleLabel={false}
          onSaveEvent={onSave}
          onDragEvent={e => console.log('Drag event', e)}
          minStrokeWidth={Platform.OS === 'android' ? 2 : 0.004}
          maxStrokeWidth={Platform.OS === 'android' ? 4 : 0.01}
        />
        <Button title="Save" onPress={() => signRef.current.saveImage()} />
      </View>
    </Modal>
  );
};
