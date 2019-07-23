import React from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Table from './Table';

export default class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            card: [[1,0],[1,0],[2,0],[3,0],[17,0],[0,0],
                   [6,0],[7,0],[8,0],[15,0],[10,0],[11,0],
                   [12,0],[9,0],[14,0],[15,0],[3,0],[5,0],
                   [0,0],[2,0],[16,0],[4,0],[5,0],[13,0],
                   [17,0],[8,0],[13,0],[10,0],[11,0],[12,0],
                   [6,0],[14,0],[9,0],[16,0],[7,0],[4,0]],
            player: 1,
            player1Point: 0,
            player2Point: 0,
            sec: 0,
            min: 0
        };
    }
    playerChange = () => {
        let player = 0;
        if (this.state.player == 1) {
            player = 2;
        } else {
            player = 1;
        }
        this.setState({
            player: player
        });
    }
    pointCounter = () => {

        if (this.state.player == 1) {

            this.setState({
                player1Point: this.state.player1Point + 1
            });
        } else {
            this.setState({
                player2Point: this.state.player2Point + 1
            });
        }
    };
    checkWin = () => {
        const winPlayer = this.state.player1Point > this.state.player2Point ?
            this.props.navigation.state.params.name2 : this.props.navigation.state.params.name1;
        if (this.state.player1Point + this.state.player2Point == 18) {
            alert(`Победил ${winPlayer}`);
        }
    };
    checkCard = () => {

        const checkArr = this.state.card.filter((el, i) => el[1] == 1);
        if (checkArr.length == 2 && checkArr[0][0] == checkArr[1][0]) {
            let card = [...this.state.card];
            card.map((el, i) => {
                if (el[0] == checkArr[0][0]) {
                    card[i][1] = 2;
                    this.pointCounter();

                }

                this.setState({
                    card: card,

                });
                this.checkWin();

            });
        }
    }
    closeCard = () => {
        let checkArr = this.state.card.filter((el, i) => el[1] == 1);
        if (checkArr.length == 2 && checkArr[0][0] != checkArr[1][0]) {
            setTimeout(() => {
                let card = [...this.state.card];
                card.map((el, i) => {
                    if (el[1] == 1) {
                        card[i][1] = 0;
                    }
                });

                this.setState({
                    card: card
                });
                this.playerChange();
            }, 2000);
        }
    };

   
    cellClick = async (i) => {

        let checkArr = this.state.card.filter((el, i) => el[1] == 1);
        const card = [...this.state.card];
        if (checkArr.length < 2 && card[i][1] !== 2) {

            card[i][1] = 1;
            this.setState({
                card: card
            });
        }

        // setTimeout(this.closeCard, 2000);
        this.closeCard();
        await this.checkCard();
        this.checkWin();


    };
    reset = () => {
        const array = [...this.state.card]
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            array[i][1] = 0;
        }
        this.setState({
            card: array,
            player1Point: 0,
            player2Point: 0,
            player: 1,

        });

    };

    Dimensions = require('Dimensions');


    render(){
        const width = this.Dimensions.get('window').width;
        return(
            <View style={{width: width ,height: width + 150}}>
                <Button title='Reset' onPress={this.reset}></Button>
                    <Text style={styles.text}>Игрок {this.state.player} ходи!</Text>
                    <Text style={styles.text}>{this.props.navigation.state.params.name2}: {this.state.player1Point}</Text>
                    <Text style={styles.text}>{this.props.navigation.state.params.name1 }: {this.state.player2Point}</Text>
                <Table widthWindow={width} cellClick={this.cellClick} date={this.state.card}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        backgroundColor: '#daa520',
        fontSize: 20,
        color: '#924e7d',
        textAlign: 'center'

    }
})
