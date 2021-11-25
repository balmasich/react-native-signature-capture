import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SignatureDialog} from './SignatureView';

const ExampleApp = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const onSave = result => {
    setData(`data:image/png;base64,${result.encoded}`);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}>
        <View>
          <Text style={styles.titleText}>
            {data ? 'Your signature:' : 'Click to sign'}
          </Text>
          {data && (
            <View style={styles.imageContainer}>
              <Image style={styles.previewImage} source={{uri: data}} />
              <Button title="Clear" onPress={() => setData(null)} />
            </View>
          )}
        </View>
      </TouchableOpacity>
      <SignatureDialog
        open={isOpen}
        onSave={onSave}
        onClose={() => setOpen(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  previewImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default ExampleApp;
