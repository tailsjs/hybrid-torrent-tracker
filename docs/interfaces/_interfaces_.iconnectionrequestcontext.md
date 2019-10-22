[hybrid-torrent-tracker](../README.md) › ["interfaces"](../modules/_interfaces_.md) › [IConnectionRequestContext](_interfaces_.iconnectionrequestcontext.md)

# Interface: IConnectionRequestContext

Request connection

**`see`** http://www.bittorrent.org/beps/bep_0015.html UDP connections

## Hierarchy

* [IRequestContext](_interfaces_.irequestcontext.md)

  ↳ **IConnectionRequestContext**

## Implemented by

* [ConnectionRequestContext](../classes/_contexts_requests_connection_.connectionrequestcontext.md)

## Index

### Properties

* [action](_interfaces_.iconnectionrequestcontext.md#action)
* [isAnnounce](_interfaces_.iconnectionrequestcontext.md#isannounce)
* [isConnect](_interfaces_.iconnectionrequestcontext.md#isconnect)
* [isScrape](_interfaces_.iconnectionrequestcontext.md#isscrape)
* [isSourceHTTP](_interfaces_.iconnectionrequestcontext.md#issourcehttp)
* [isSourceUDP](_interfaces_.iconnectionrequestcontext.md#issourceudp)
* [sent](_interfaces_.iconnectionrequestcontext.md#sent)
* [transactionId](_interfaces_.iconnectionrequestcontext.md#transactionid)

### Methods

* [send](_interfaces_.iconnectionrequestcontext.md#send)

## Properties

###  action

• **action**: *[CONNECT](../enums/_constants_.trackeraction.md#connect)*

*Overrides [IRequestContext](_interfaces_.irequestcontext.md).[action](_interfaces_.irequestcontext.md#action)*

Defined in interfaces.ts:312

___

###  isAnnounce

• **isAnnounce**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isAnnounce](_interfaces_.irequestcontext.md#isannounce)*

Defined in interfaces.ts:163

The current action is "announce"

___

###  isConnect

• **isConnect**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isConnect](_interfaces_.irequestcontext.md#isconnect)*

Defined in interfaces.ts:158

The current action is "connect"

___

###  isScrape

• **isScrape**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isScrape](_interfaces_.irequestcontext.md#isscrape)*

Defined in interfaces.ts:168

The current action is "scrape"

___

###  isSourceHTTP

• **isSourceHTTP**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isSourceHTTP](_interfaces_.irequestcontext.md#issourcehttp)*

Defined in interfaces.ts:173

The request source is HTTP

___

###  isSourceUDP

• **isSourceUDP**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[isSourceUDP](_interfaces_.irequestcontext.md#issourceudp)*

Defined in interfaces.ts:178

The request source is UDP

___

###  sent

• **sent**: *boolean*

*Inherited from [IRequestContext](_interfaces_.irequestcontext.md).[sent](_interfaces_.irequestcontext.md#sent)*

Defined in interfaces.ts:188

Has an answer been sent

___

###  transactionId

• **transactionId**: *number*

Defined in interfaces.ts:317

Returns the transaction ID (only UDP)

## Methods

###  send

▸ **send**(`payload`: [ConnectionRequestContextSendOptions](../modules/_interfaces_.md#connectionrequestcontextsendoptions)): *Promise‹void›*

Defined in interfaces.ts:322

Sends a response

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ConnectionRequestContextSendOptions](../modules/_interfaces_.md#connectionrequestcontextsendoptions) |

**Returns:** *Promise‹void›*