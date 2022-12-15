import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  details: any;

  constructor() { }
  searchText: any;
  ngOnInit(): void {
  }
  columns = [{
    title: "Date"
  },
  {
    title: "List Name",
  },
  {
    title: "No. of Entities",
  }
  ];
  datas = [
    {
      date: "2022-09-23T01:27:40.016Z",
      name: "KPMG_Pvt_ltd",
      entities: 12,
      details: [{ name: "Think & Learn Private Limited" }, { name: "Delivery Private Limited" }, { name: "Infosys Pvt Ltd" }, { name: "Yrl Logistics" }, { name: "Dominos Restaurant" }, { name: "Puma footwears" }, { name: "Shepperd Pvt Ltd" }, { name: "Charathasha Technologies" }, { name: "D Fresh Foods and Diary" }]
    },
    {
      date: "2022-10-08T01:27:40.016Z",
      name: "Tata Power",
      entities: 41,
      details: [{ name: "Byju's Private Limited" }, { name: "Delivery Private Limited" }, { name: "Infosys Pvt Ltd" }, { name: "Yrl Logistics" }]
    },
    {
      date: "2022-10-13T01:27:40.016Z",
      name: "Tesla",
      entities: 22
    },
    {
      date: "2022-10-20T01:27:40.016Z",
      name: "Amazon_ware",
      entities: 5,
      details: [{ name: "Absolute BBQ" }, { name: "Wow Momos" }, , { name: "Puma footwears" }, { name: "Shepperd Pvt Ltd" }, { name: "Infosys Pvt Ltd" }, { name: "Yrl Logistics" }]
    },
    {
      date: "2022-10-22T01:27:40.016Z",
      name: "Error Case-LTB",
      entities: 32,
      details: [{ name: "Thermo Fisher Ltd" }, { name: "Flipkart" }, { name: "Infosys Pvt Ltd" }, { name: "Yrl Logistics" }]
    },
    {
      date: "2022-10-26T01:27:40.016Z",
      name: "Two Companies",
      entities: 2,
      details: [{ name: "Learn Private Limited" }, { name: "Delhivery Private Limited" }]
    },
    {
      date: "2022-11-02T01:27:40.016Z",
      name: "Custom",
      entities: 13,
      details: [{ name: "Think & Learn Private Limited" }, { name: "Delivery Private Limited" }, { name: "Infosys Pvt Ltd" }, { name: "Yrl Logistics" }]
    },
    {
      date: "2022-08-20T01:27:40.016Z",
      name: "Mumbai",
      entities: 5
    },
    {
      date: "2022-12-12T01:27:40.016Z",
      name: "Chennai",
      entities: 10,
      details: [{ name: "Puma footwears" }, { name: "Shepperd Pvt Ltd" }]
    },
    {
      date: "2022-07-30T01:27:40.016Z",
      name: "Tata Nue",
      entities: 22
    },

  ]
  showDetails(index: any) {
    this.details = [{}];
    this.details = this.datas[index].details;
    console.log(this.details)
  }
}
