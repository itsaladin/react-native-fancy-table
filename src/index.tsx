import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const __HEIGHT = Dimensions.get('window').height;
const __WIDTH = Dimensions.get('window').width;

interface TableInterface {
  header: any;
  tableBody: any;
  headerBGColor?: string;
  headerFontColor?: string;
  headerFontSize?: number;
  bodyFontSize?: number;
  bodyFontColor?: string;
  tableHeight?: number;
  rowWidth?: number;
  borderColor?: string;
  borderWidth?: number;
}

const FancyTable = ({
  header,
  tableBody,
  headerBGColor,
  headerFontColor,
  headerFontSize,
  bodyFontSize,
  bodyFontColor,
  tableHeight,
  rowWidth,
  borderColor,
  borderWidth,
}: TableInterface) => {
  const __defaultHeight = __HEIGHT / 1.5;
  const __height = __HEIGHT / tableHeight!;

  const __defaultRowWeight = __WIDTH / 4;
  const __rowWeight = __WIDTH / rowWidth!;

  let dataTableBody: any[] = [];

  tableBody?.forEach((item: any) => {
    let arr: any[] = [];

    for (let key in item) {
      arr.push(item[key]);
    }
    dataTableBody.push(arr);
  });

  return (
    <>
      <ScrollView>
        <ScrollView
          style={{
            height: __height || __defaultHeight,
            borderColor: borderColor,
            borderWidth: borderWidth,
            margin: 5,
          }}
          horizontal={true}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: headerBGColor || 'silver',
              }}
            >
              {header?.map((item: any, index: number) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.viewStyle,
                      { width: __rowWeight || __defaultRowWeight },
                    ]}
                  >
                    <Text
                      style={[
                        styles.headerTextStyle,
                        {
                          color: headerFontColor || 'white',
                          fontSize: headerFontSize || 15,
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  </View>
                );
              })}
            </View>
            <ScrollView>
              {dataTableBody &&
                dataTableBody?.length > 0 &&
                dataTableBody?.map((items, id) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}
                      key={id}
                    >
                      {items?.map((subItems: any, sIndex: number) => {
                        return (
                          <View
                            key={sIndex}
                            style={[
                              styles.viewStyle,
                              {
                                width: __rowWeight || __defaultRowWeight,
                                borderColor: borderColor,
                                borderWidth: borderWidth,
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.textStyle,
                                {
                                  fontSize: bodyFontSize || 13,
                                  color: bodyFontColor || 'black',
                                },
                              ]}
                            >
                              {subItems}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default FancyTable;

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlignVertical: 'center',
    fontSize: 14,
  },
  headerTextStyle: {
    textAlignVertical: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
  },
});
