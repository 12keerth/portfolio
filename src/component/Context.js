import React, { Component } from 'react';
export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        "_id": 1,
        "title": "Nike shoes 01",
        "img": "shoe1.jpg",
        "description": "UI/UX designing, html css tutorials",
        "price": 23
      },
      {
        "_id": 2,
        "title": "Nike shoes 02",
        "img": "shoe2.jpg",
        "description": "UI/UX designing, html css tutorials",
        "price": 19
      },
      {
        "_id": 3,
        "title": "Nike shoes 03",
        "img": "shoe3.jpg",
        "description": "UI/UX designing, html css tutorials",
        "price": 50
      },
      {
        "_id": 4,
        "title": "Nike shoes 04",
        "img": "shoe4.jpg",
        "description": "UI/UX designing, html css tutorials",
        "price": 15
      },
      {
        "_id": 5,
        "title": "Nike shoes 05",
        "img": "shoe5.jpg",
        "description": "UI/UX designing, html css tutorials",
        "price": 10
      },
      {
        "_id": 6,
        "title": "Nike shoes 06",
        "img": "shoe6.jpg",
        "description": "UI/UX designing, html css tutorials",
        "price": 17
      }
    ]
  };

  render() {
    const { products } = this.state;
    return (
      <DataContext.Provider value={{ products }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
