This is a fork of https://www.npmjs.com/package/react-native-signature-capture.

# Breaking changes
 - Manage `minStrokeWidth` & `maxStrokeWidth` on both iOS & Android
 - `onDragEvent` is send at the end of dragging on iOS (like it does on Android)
 - Long press not erase the signature anymore on iOS (like it does on Android)
 - Add `enableDate` option to add the date on the signature result
 - Image is not saved anymore, you can easily save it if you want with react-native-fs and the base64
 - Add typescript definition

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
