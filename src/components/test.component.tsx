import * as React from "react";

/* Instead of using this you can use class, they support lifecycle methods etc.. */
const Headline = (props: any) => {
    const {content} = props; //Destructuring 

    return <h1>{content}</h1>
}

interface States {
    itemsToBuy: string[];
    message: string;
}

/* This class has generic States, that is interface that contains declaration of all states for this class */
export class Test extends React.Component<{}, States> {

    /* These two variables are there to "take out" values from form */
    private newItem: HTMLInputElement;
    private addForm: HTMLFormElement;

    constructor(props: any) {
        super(props);
        
        /* State is simple object, that contains state of our application */
        this.state = {
            itemsToBuy: [
                "Milk",
                "Apple",
                "Banana",
            ],
            message: "",
        }

        this.addItem = this.addItem.bind(this); /* We are binding this (every) method to make keyword this work properly and to call the methods */
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(e: any) {
        e.preventDefault(); /* Prevents default html events */

        const { itemsToBuy } = this.state; /* Destructuring */
        const newItem = this.newItem.value; /* Referencing to value from form */

        const isOnTheList = itemsToBuy.some(x => x == newItem); /* We return a boolean telling us if the item what we want to add is in array or not */

        /* We check isOnTheList */
        if(isOnTheList) {
            this.setState({
               message: "Item is already on list", 
            }); /* If it is, we tell user that the item is already in an array */
        }
        else {
            /* Otherwise we check that he doesn't want to add empty value if not, we add the item to an array  */
            newItem !== "" && this.setState({
                itemsToBuy: [...this.state.itemsToBuy, newItem],  /* ... is a spread operator, this line of code adds a new item to array */
                message: "",
            });
        }

        this.addForm.reset(); /* Referencing to value from form and reset it*/
    }

    removeItem(item: string) {
        /* We are making a new array that contains only elements that doesnt match the item, that we want to remove */
        const newBuyItems = this.state.itemsToBuy.filter(buyItem => {
            return buyItem !== item;
        }); 

        /* There we change state of itemsToBuy to new array we declare above */
        this.setState({
            itemsToBuy: [...newBuyItems]
        });
    }
    
    public render(): JSX.Element {

        /* Again same like in props we !DESTRUCTURING! states to make code more readable
        *  It causes that instead of writing this.state.itemsToBuy we can write only itemsToBuy
        */
        const { itemsToBuy, message } = this.state; 

        return (
            <div>
                <Headline content={"SHOPPING LIST"} />

                {
                    message !== "" ? <p>The item is already on list!</p> : null
                }

                <form onSubmit={this.addItem} ref={input => this.addForm = input} /* This is a ref callback */ id="shopForm">
                    <input ref={(input) => this.newItem = input} /* This is a ref callback */ type="text" placeholder="BREAD" id="shopListAdd"/>
                    <button type="submit">Add</button>
                </form>

                <table className="shopTable">
                    <tbody>
                        <tr>
                            <td>#</td>
                            <td>ITEM</td>
                            <td>ACTION</td>
                        </tr>
                {
                    /* Map is pretty similiar to foreach loop */
                    itemsToBuy.map(item => {
                        /* Notice that when we work with arrays every element in array should have unique key 
                        *  It is for react to recognize small DOM changes 
                        */
                        return (                             
                            <tr key={item}>
                                <th>1</th>
                                <td>{item}</td>
                                <td>
                                    <button onClick={() => this.removeItem(item)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
                    </tbody>
                </table>
            </div>
        );
    }
}