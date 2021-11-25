This is a fork of https://www.npmjs.com/package/react-native-signature-capture
You can now use `minStrokeWidth` & `maxStrokeWidth` on both iOS & Android.
The repo contain an up-to-date typescript definition. 

# Install
```bash
yarn add @lagregance/react-native-signature-capture
```

# Usage

The `minStrokeWidth` & `maxStrokeWidth` replace the DEFINE `STROKE_WIDTH_MIN` & `STROKE_WIDTH_MAX` of the file `PPSSignatureView.m`.  
The default value are respectively `0.004` & `0.030`, so it's not in pixel and we have to do something like that :
```jsx
import SignatureCapture from '@lagregance/react-native-signature-capture';

// [...]

<SignatureCapture
    minStrokeWidth={Platform.OS === 'android' ? 2 : 0.004}
    maxStrokeWidth={Platform.OS === 'android' ? 4 : 0.01}
/>
```
I know it's not very clean but I didn't have much time to spend on it, but it may be useful for you.
