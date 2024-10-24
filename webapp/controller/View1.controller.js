sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    'sap/ui/model/Sorter',
    'sap/ui/model/Filter',


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment, Sorter, Filter) {
        "use strict";

        return Controller.extend("com.sap.acp.controller.View1", {
            onInit: function () {
                let acptable = [{
                    "contractType":"JOC",
                    "group": "CGC",
                    "icp": "CG0005",
                    "reqNo": "",
                    "FPAL": "03.99.99",
                    "activityDes": "Provision of services on arrangement of corporate events",
                    "activityDesRus": "Предоставление услуг по организации мероприятий",
                    "contractValue": "0.791",
                    "plannedDuration": "36",
                    "optionalExtension": "12+12",
                    "expectedAwdDate": "Q2 2025",
                    "latestComment": "",

                },
                {
                    "contractType":"JOC",
                    "group": "CGC",
                    "icp": "CG0002",
                    "reqNo": "",
                    "FPAL": "03.02.11",
                    "activityDes": "Provision of national and regional media services",
                    "activityDesRus": "Предоставление услуг по медиа поддержке республиканских и региональных сми",
                    "contractValue": "1.37",
                    "plannedDuration": "36",
                    "optionalExtension": "12+12",
                    "expectedAwdDate": "Q2 2024",
                    "latestComment": "",

                }, {
                    "contractType":"JOC",
                    "group": "DCI",
                    "icp": "DCI002",
                    "reqNo": "",
                    "FPAL": "03.01.12",
                    "activityDes": "Implementation of high-speed data transfer network in the field",
                    "activityDesRus": "Внедрение высокоскоростной сети передачи данных на месторождении",
                    "contractValue": "1.00",
                    "plannedDuration": "36",
                    "optionalExtension": "12+12",
                    "expectedAwdDate": "Q1 2026",
                    "latestComment": "",

                }, {
                    "contractType":"JOC",
                    "group": "DCI",
                    "icp": "DCI.001",
                    "reqNo": "23/0469",
                    "FPAL": "03.04.23",
                    "activityDes": "Telemetry equipment / systems installation at the Unit-3",
                    "activityDesRus": "Установка оборудования телеметрии на ГП-3",
                    "contractValue": "3.20",
                    "plannedDuration": "24",
                    "optionalExtension": "",
                    "expectedAwdDate": "Q1 2025",
                    "latestComment": "",

                }, {
                    "contractType":"JPC",
                    "group": "EMS",
                    "icp": "EMS002",
                    "reqNo": "",
                    "FPAL": "03.02.02",
                    "activityDes": "Provision of services on environmental monitoring",
                    "activityDesRus": "Предоставление услуг по производственному экологическому мониторингу ",
                    "contractValue": "0.52",
                    "plannedDuration": "36",
                    "optionalExtension": "12+12",
                    "expectedAwdDate": "Q3 2025",
                    "latestComment": "",

                }, {
                    "contractType":"JPC",
                    "group": "EMS",
                    "icp": "EMS003",
                    "reqNo": "",
                    "FPAL": "03.02.02",
                    "activityDes": "Provision of services on environmental monitoring",
                    "activityDesRus": "Предоставление услуг по производственному экологическому мониторингу ",
                    "contractValue": "3.75",
                    "plannedDuration": "36",
                    "optionalExtension": "12+12",
                    "expectedAwdDate": "Q1 2026",
                    "latestComment": "",

                }, {
                    "contractType":"JPC",
                    "group": "FIN",
                    "icp": "FC0031C",
                    "reqNo": " 23/2416",
                    "FPAL": "03.14.32",
                    "activityDes": "Construction all risks, third party liability insurance and cargo insurance",
                    "activityDesRus": "Страхование строительно-монтажных рисков (СМР), гражданско - правовой ответственности за причинение вреда третьим лицам при выполнении строительных работ, страхование грузов",
                    "contractValue": "15.209",
                    "plannedDuration": "38.3",
                    "optionalExtension": "12",
                    "expectedAwdDate": "Q4 2024",
                    "latestComment": "",

                },

                {
                    "contractType":"JOC",
                    "group": "FIN",
                    "icp": "FC0033B",
                    "reqNo": "",
                    "FPAL": "03.14.32",
                    "activityDes": "Provision of services to cover risks under the property damage, cargo, combined general third party liability, control of well and medical malpractice insurance ",
                    "activityDesRus": "Оказание услуг по страхованию рисков имущественного ущерба, грузоперевозок, страхование общей гражданско - правовой ответственности за причинение вреда третьим лицам, выхода скважин из-под контроля и страхование профессиональной ответственности медицинских работников",
                    "contractValue": "24.172",
                    "plannedDuration": "36",
                    "optionalExtension": "12",
                    "expectedAwdDate": "Q2 2026",
                    "latestComment": "",

                }, {
                    "contractType":"JOC",
                    "group": "FM",
                    "icp": "FM2027",
                    "reqNo": "23/0443",
                    "FPAL": "03.99.16",
                    "activityDes": "Rental and maintenance of Astana office",
                    "activityDesRus": "Аренда и обслуживание офиса в Астане",
                    "contractValue": "4.61",
                    "plannedDuration": "168",
                    "optionalExtension": "",
                    "expectedAwdDate": "Q3 2024",
                    "latestComment": "",

                }, {
                    "contractType":"JPC",
                    "group": "FM",
                    "icp": "FM2042A",
                    "reqNo": "",
                    "FPAL": "03.99.16",
                    "activityDes": "Rental of mechanical workshop with associated facilities premises and open areas",
                    "activityDesRus": "Аренда механического цеха с сопутствующими помещениями и открытыми площадками",
                    "contractValue": "1.96",
                    "plannedDuration": "156",
                    "optionalExtension": "",
                    "expectedAwdDate": "Q4 2024",
                    "latestComment": "",

                },
                ]

                let acpModel = new JSONModel(acptable);
                this.getView().setModel(acpModel, "tModel");


            // this.applyGroupingAndSorting("contractType", false); // Change 'Department' to the actual key of your Department column

            this.applyGroupingAndSorting([

                { path: "contractType", descending: false },
            ]);
                

            },
            onCommentsLog: function () {
                debugger
                if (!this._commentsDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.acp.view.fragment.Comments",
                        controller: this
                    }).then(oDialog => {
                        this._commentsDialog = oDialog;
                        this.getView().addDependent()
                        oDialog.open()
                    })
                }
                else {
                    this._commentsDialog.open()
                }

            },


            onCommentClose: function () {
                this._commentsDialog.close()

            },
            handleGroupButtonPressed: function () {
                if (!this._groupDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.acp.view.fragment.Group",
                        controller: this
                    }).then(oDialog => {
                        this._groupDialog = oDialog;
                        this.getView().addDependent()
                        oDialog.open()
                    })
                }
                else {
                    this._groupDialog.open()
                }
            },
            // handleGroupDialogConfirm: function (oEvent) {
            //     debugger;

            //     const oGroupItem = oEvent.getParameter('groupItem')
            //     let key = oEvent.get
            //     const bDescending = oEvent.getParameter('groupDescending')
            //     this.getView()
            //         .byId('itemsTableUpdated')
            //         .getBinding('items')
            //         .sort(oGroupItem ? [new Sorter(oGroupItem.getKey(), bDescending, true )] : [])

            // }
        // },

        // applyGroupingAndSorting: function (sPath, bDescending) {
        //     var oTable = this.byId("itemsTableUpdated"),
        //         oBinding = oTable.getBinding("items");

        //     // Apply grouping and sorting
        //     oBinding.sort([new Sorter(sPath, bDescending, true /* group */)]);
        // }


        applyGroupingAndSorting: function (aColumns) {
            debugger
            var oTable = this.byId("itemsTableUpdated"),
                oBinding = oTable.getBinding("items"),
                aSorters = [];

            aColumns.forEach(function (oColumn) {
                aSorters.push(new Sorter(oColumn.path, oColumn.descending, true /* group */));
            });

            // Apply grouping and sorting
            oBinding.sort(aSorters);
        }

        });
    });
