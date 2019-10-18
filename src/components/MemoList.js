import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MemoList extends React.Component {
    render() {
        return (
            <View style={styles.memoList}>
                <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2019/10/10</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2019/10/10</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2019/10/10</Text>
                    </View>
                </TouchableHighlight>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
    },
});

export default MemoList;
