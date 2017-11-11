import React,{ Component } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import DB from 'local-db';

class CryptoDataChart extends Component {
    render(){

        return <div>
            <LineChart width={1320} height={300} data={this.props.datum}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="time"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="volumeto" stroke={this.props.color} activeDot={{r: 8}}/>
            </LineChart>
            <h1 className="App-title">Último Valor Registrado: </h1> {this.props.datum.length>0?this.props.datum[this.props.datum.length-1].volumeto:0}
        </div>
    }
}

export default class CryptoDataFetcher extends Component {
    constructor(props){
        super(props);
        this.state={
            datum:[]
        };
    }

    populateDb(){
        var urlApi=`https://min-api.cryptocompare.com/data/histominute?fsym=${this.props.coinType}&tsym=USD&limit=60&aggregate=1&e=CCCAGG`;
       return axios(urlApi);

    }

    createLocalDb(){
       return new DB(`CryptoMonedaDB${this.props.coinType}`);
    }
    
    componentDidMount(){

       var CryptoMonedaDB =  this.createLocalDb();

       if(CryptoMonedaDB.query({}).length===0) {
        this.populateDb().then((response) => {
            response.data.Data.forEach((element) => 
            {
                CryptoMonedaDB.insert(element);
            });

        this.setState({datum:CryptoMonedaDB.query({})});

        });
       }
       else{
        this.setState({datum:CryptoMonedaDB.query({})});
       }
    }

    render(){

        return (
            <div>
                 <button onClick={() => this.refreshDB()}>
                 Actualizar 
            </button>
              <CryptoDataChart datum={this.state.datum} color={this.props.color}/>
            </div>)

    }

    refreshDB(){
        var CryptoMonedaDB =  this.createLocalDb();
        CryptoMonedaDB.remove({});

        this.populateDb().then((response) => {
            
          response.data.Data.forEach((element)=> {
            CryptoMonedaDB.insert(element);
          });

          this.setState({datum:CryptoMonedaDB.query({})});
        });
    }
}