using Microsoft.ReactNative.Managed;
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Storage;

namespace rnw_assignment
{
    [ReactModule("RNReaderModule")]
    public sealed class RNReaderModule
    {
        private ReactContext _reactContext;

        [ReactInitializer]
        public void Initialize(ReactContext reactContext)
        {
            _reactContext = reactContext;
        }

        [ReactMethod("getDevices")]
        public async Task<string> GetDevices()
        {
            var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///Devices.txt"));
            Stream fileStream = await file.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadToEnd();
            }
        }

        [ReactMethod("getDrivers")]
        public async Task<string> GetDrivers()
        {
            var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///Drivers.txt"));
            Stream fileStream = await file.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadToEnd();
            }
        }

    }
}