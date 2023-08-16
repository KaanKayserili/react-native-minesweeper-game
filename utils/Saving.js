import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

import { captureRef } from 'react-native-view-shot';

export const Saving = async ({ viewRef }) => {
    try {
        console.log(viewRef)
        const uri = await captureRef(viewRef.current, {
            format: 'jpg', // Dosya formatı (png, jpg)
            quality: 1,    // Kalite (0.0 - 1.0)
        });

        console.log("1")

        const fileUri = `${FileSystem.documentDirectory}resim_${Date.now()}.jpg`;

        try {
            await FileSystem.copyAsync({
                from: uri,
                to: fileUri,
            });

            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);

            if (status !== 'granted') {
                alert('Depolama alanına erişim izni gereklidir!');
                return;
            }

            try {
                const asset = await MediaLibrary.createAssetAsync(fileUri);
                if (asset) {
                    alert('Resim başarıyla kaydedildi!');
                    return;
                } else {
                    alert('Resim kaydedilirken bir hata oluştu.');
                }
            } catch (error) {
                alert('Resim kaydedilirken bir hata oluştu.');
                console.error(error);
            }
        } catch (error) {
            alert('Resim kaydedilirken bir hata oluştu.');
            console.error(error);
        }

    } catch (error) {
        console.error('Resim yakalama hatası:', error);
    }
}