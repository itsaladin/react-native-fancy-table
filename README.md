# react-native-fancy-table

react native responsive,scrollable data table

<table>
  <tr>
     <td>Uncheck all option</td>
    <td>Check all options</td>
     <td>Check single options</td>
  </tr>
  <tr>
    <td>![Screenshot a](screenshots/a.png)</td>
    <td>![Screenshot b](screenshots/b.png) </td>
    <td>![Screenshot c](screenshots/c.png)</td> 
  </tr>
 </table>

| ![Screenshot a](screenshots/a.png) | ![Screenshot b](screenshots/b.png) | ![Screenshot error]![Screenshot c](screenshots/c.png) |
| ---------------------------------- | ---------------------------------- | ----------------------------------------------------- |

## Installation

Using Yarn:

```sh
yarn add react-native-fancy-table
```

```sh
npm install react-native-fancy-table
```

## Usage

```js
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FancyTable from 'react-native-fancy-table';

export default function App() {
  const header = [
    ' id',
    'Roll No',
    'Order Qty',
    'Line Input',
    'Line Balalance',
    'Production',
    'Sample',
    'Killed',
    'Missing',
    'Buy Date',
    'Ship Date',
    'Proto No',
    'Set Code',
    'Destination Place',
    'Delivery Place',
    'Item Number',
  ];
  const tableBody = [
    {
      id: 1,
      RollNo: '1',
      Pdm_ItemCode: '2442010',
      description: ' BUET',
      LotNo: 'N23060829',
      UOM: 'YDS',
      RollQty: 55,
      RollWidth: '153cm',
      RollColor: 'DKT N07A BLACK',
      RollShrinkageWarp: '',
      RollshrinkageWeft: '',
      SupplierId: 380,
      supplier: '',
      ItemId: 0,
      item: 'Fabric',
      consignment: '3333',
    },
    {
      id: 1,
      RollNo: '1',
      Pdm_ItemCode: '2442010',
      description: ' BUET',
      LotNo: 'N23060829',
      UOM: 'YDS',
      RollQty: 55,
      RollWidth: '153cm',
      RollColor: 'DKT N07A BLACK',
      RollShrinkageWarp: '',
      RollshrinkageWeft: '',
      SupplierId: 380,
      supplier: '',
      ItemId: 0,
      item: 'Fabric',
      consignment: '3333',
    },
  ];

  return (
    <>
      <FancyTable
        headerBGColor="silver"
        headerFontColor="white"
        headerFontSize={15}
        bodyFontSize={13}
        bodyFontColor="black"
        tableHeight={1.4}
        header={header}
        tableBody={tableBody}
        rowWidth={4}
        borderColor="gray"
        borderWidth={1}
      />
    </>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
