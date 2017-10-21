
export interface IData{
  id: number;
  name?: string;
}


export class Person{
  fname: string;
  lname: string;
}


export interface IHttpResult {
  ok: boolean;
  error?: string;
  rows?: any;
  customer?: ICustomer;
  token?: string;
  userId?: string;
  
  latLng?: IMapCoord;
  status?: string;
}



export interface ICustomer {
  id?: number;
  first_name?: string;
  last_name?: string;
  sex?: string;
  customer_type_id?: number;
  telephone?: string;
  email?: string;
  image?: string;
}



export interface IPullData {
  id?: number;
  iwho?: string;
  iwhat?: string;
  iwhere?: string;

  iprovince?: number;
  iwhen?: string;
  ihow?: string;
  ietc?: string;

  telephone?: string;
  email?: string;

  image?: string;
  image2?: string;
  image3?: string;

  itype?: number;
  ilv1?: number;
  ilv2?: number;
  is1?: number;
  is2?: string;
  is3?: string;
  iclose?: number;
  user_id?: string;
}
// 1
/*
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `iwho` varchar(1000) DEFAULT NULL,
  `iwhat` varchar(1000) DEFAULT NULL,
  `iwhere` varchar(1000) DEFAULT NULL,
  `iprovince` int(11) DEFAULT NULL,

  `telephone` varchar(50) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,

  `lat` decimal(18,12) DEFAULT NULL,
  `lng` decimal(18,12) DEFAULT NULL,


`iwhen` varchar(1000) DEFAULT NULL,
`ihow` varchar(1000) DEFAULT NULL,
`ietc` varchar(1000) DEFAULT NULL,

  `image` longblob,
  `image2` longblob,
  `image3` longblob,


  
`itype` int(11) DEFAULT NULL,
`ilv1` int(11)  DEFAULT NULL,
`ilv2` int(11)  DEFAULT NULL,
`is1` int(11) DEFAULT NULL,
`is2` varchar(1000) DEFAULT NULL,
`is3` varchar(1000) DEFAULT NULL,
`iclose` int(11) DEFAULT NULL,
*/

export interface IGroup {
  id: number;
  name: string;
}

export interface IMapCoord {
  lat: number;
  lng: number;
}

export interface IMapEvent {
	coords: IMapCoord
}

export interface IContact {
  id?: number;
  first_name?: string;
  last_name?: string;
  sex?: string;
  telephone?: string;
  email?: string;
}