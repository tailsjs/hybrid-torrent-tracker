[hybrid-torrent-tracker](../README.md) › ["interfaces"](../modules/_interfaces_.md) › [IHTTPConnectionContext](_interfaces_.ihttpconnectioncontext.md)

# Interface: IHTTPConnectionContext

Basic HTTP connection information

## Hierarchy

* [IConnectionContext](_interfaces_.iconnectioncontext.md)

  ↳ **IHTTPConnectionContext**

## Implemented by

* [HTTPConnectionContext](../classes/_contexts_connections_http_.httpconnectioncontext.md)

## Index

### Properties

* [aborted](_interfaces_.ihttpconnectioncontext.md#aborted)
* [ip](_interfaces_.ihttpconnectioncontext.md#ip)
* [sent](_interfaces_.ihttpconnectioncontext.md#sent)
* [url](_interfaces_.ihttpconnectioncontext.md#url)

### Methods

* [send](_interfaces_.ihttpconnectioncontext.md#send)

## Properties

###  aborted

• **aborted**: *boolean*

Defined in interfaces.ts:108

Is the request aborted

___

###  ip

• **ip**: *string*

Defined in interfaces.ts:113

Returns the connection ip addres

___

###  sent

• **sent**: *boolean*

*Inherited from [IConnectionContext](_interfaces_.iconnectioncontext.md).[sent](_interfaces_.iconnectioncontext.md#sent)*

Defined in interfaces.ts:98

Has an answer been sent

___

###  url

• **url**: *string*

Defined in interfaces.ts:118

Returns the current URL path

## Methods

###  send

▸ **send**(`payload`: [HTTPResponseUnion](../modules/_interfaces_.md#httpresponseunion), `options`: object): *Promise‹void›*

Defined in interfaces.ts:123

Sends a response

**Parameters:**

▪ **payload**: *[HTTPResponseUnion](../modules/_interfaces_.md#httpresponseunion)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`action` | [TrackerAction](../enums/_constants_.trackeraction.md) |
`statusCode?` | undefined &#124; number |

**Returns:** *Promise‹void›*