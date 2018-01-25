import React, { Component } from "react";
import "./Print.css"

export class PrintComponent extends Component {
    constructor(props) {
        super(props);
        if (PrintComponent.Instance) {
            throw "Can and only have one <Print /> element";
        }
        this.generateClassName = this.generateClassName.bind(this);
        PrintComponent.Instance = this;

        this.state = {
            component: props.component,
            print: false,
            singlePage: props.singlePage,
        };
    }

    static Instance;

    static SetPrintContent(component) {
        PrintComponent.Instance.setState({
            component: component,
        });
    }

    static Print() {
        PrintComponent.Instance.setState({
            print: true,
        });
        PrintComponent.Instance.forceUpdate();
        setTimeout(() => {
            window.print();
            PrintComponent.Instance.setState({
                print: false,
            });
            PrintComponent.Instance.forceUpdate();
        }, 1000);

    }

    generateClassName() {
        let print = this.state.print
            ? "react-print-print "
            : "react-print-hidden ";
        let page = this.state.singlePage
            ? "react-print-single"
            : "";
        return print + page;
    }

    render() {
        return (
            <div
                className={this.generateClassName()} >
                {this.state.component ? this.state.component : false}
            </div>
        );
    }
}