# `dataAwsRoute` Submodule <a name="`dataAwsRoute` Submodule" id="@cdktf/provider-aws.dataAwsRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute <a name="DataAwsRoute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route aws_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer"></a>

```typescript
import { dataAwsRoute } from '@cdktf/provider-aws'

new dataAwsRoute.DataAwsRoute(scope: Construct, id: string, config: DataAwsRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig">DataAwsRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig">DataAwsRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetCarrierGatewayId">resetCarrierGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetCoreNetworkArn">resetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationCidrBlock">resetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationIpv6CidrBlock">resetDestinationIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetEgressOnlyGatewayId">resetEgressOnlyGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetLocalGatewayId">resetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetNatGatewayId">resetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetVpcPeeringConnectionId">resetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAwsRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>

---

##### `resetCarrierGatewayId` <a name="resetCarrierGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetCarrierGatewayId"></a>

```typescript
public resetCarrierGatewayId(): void
```

##### `resetCoreNetworkArn` <a name="resetCoreNetworkArn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetCoreNetworkArn"></a>

```typescript
public resetCoreNetworkArn(): void
```

##### `resetDestinationCidrBlock` <a name="resetDestinationCidrBlock" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationCidrBlock"></a>

```typescript
public resetDestinationCidrBlock(): void
```

##### `resetDestinationIpv6CidrBlock` <a name="resetDestinationIpv6CidrBlock" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationIpv6CidrBlock"></a>

```typescript
public resetDestinationIpv6CidrBlock(): void
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetDestinationPrefixListId"></a>

```typescript
public resetDestinationPrefixListId(): void
```

##### `resetEgressOnlyGatewayId` <a name="resetEgressOnlyGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetEgressOnlyGatewayId"></a>

```typescript
public resetEgressOnlyGatewayId(): void
```

##### `resetGatewayId` <a name="resetGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetGatewayId"></a>

```typescript
public resetGatewayId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetLocalGatewayId` <a name="resetLocalGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetLocalGatewayId"></a>

```typescript
public resetLocalGatewayId(): void
```

##### `resetNatGatewayId` <a name="resetNatGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetNatGatewayId"></a>

```typescript
public resetNatGatewayId(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```

##### `resetVpcPeeringConnectionId` <a name="resetVpcPeeringConnectionId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.resetVpcPeeringConnectionId"></a>

```typescript
public resetVpcPeeringConnectionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct"></a>

```typescript
import { dataAwsRoute } from '@cdktf/provider-aws'

dataAwsRoute.DataAwsRoute.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement"></a>

```typescript
import { dataAwsRoute } from '@cdktf/provider-aws'

dataAwsRoute.DataAwsRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource"></a>

```typescript
import { dataAwsRoute } from '@cdktf/provider-aws'

dataAwsRoute.DataAwsRoute.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference">DataAwsRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayIdInput">carrierGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArnInput">coreNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlockInput">destinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlockInput">destinationIpv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayIdInput">egressOnlyGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayIdInput">localGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayIdInput">natGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableIdInput">routeTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayId">carrierGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlock">destinationIpv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference">DataAwsRouteTimeoutsOutputReference</a>

---

##### `carrierGatewayIdInput`<sup>Optional</sup> <a name="carrierGatewayIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayIdInput"></a>

```typescript
public readonly carrierGatewayIdInput: string;
```

- *Type:* string

---

##### `coreNetworkArnInput`<sup>Optional</sup> <a name="coreNetworkArnInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArnInput"></a>

```typescript
public readonly coreNetworkArnInput: string;
```

- *Type:* string

---

##### `destinationCidrBlockInput`<sup>Optional</sup> <a name="destinationCidrBlockInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlockInput"></a>

```typescript
public readonly destinationCidrBlockInput: string;
```

- *Type:* string

---

##### `destinationIpv6CidrBlockInput`<sup>Optional</sup> <a name="destinationIpv6CidrBlockInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlockInput"></a>

```typescript
public readonly destinationIpv6CidrBlockInput: string;
```

- *Type:* string

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListIdInput"></a>

```typescript
public readonly destinationPrefixListIdInput: string;
```

- *Type:* string

---

##### `egressOnlyGatewayIdInput`<sup>Optional</sup> <a name="egressOnlyGatewayIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayIdInput"></a>

```typescript
public readonly egressOnlyGatewayIdInput: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `localGatewayIdInput`<sup>Optional</sup> <a name="localGatewayIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayIdInput"></a>

```typescript
public readonly localGatewayIdInput: string;
```

- *Type:* string

---

##### `natGatewayIdInput`<sup>Optional</sup> <a name="natGatewayIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayIdInput"></a>

```typescript
public readonly natGatewayIdInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `routeTableIdInput`<sup>Optional</sup> <a name="routeTableIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableIdInput"></a>

```typescript
public readonly routeTableIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAwsRouteTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a> | cdktf.IResolvable

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionIdInput"></a>

```typescript
public readonly vpcPeeringConnectionIdInput: string;
```

- *Type:* string

---

##### `carrierGatewayId`<sup>Required</sup> <a name="carrierGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.carrierGatewayId"></a>

```typescript
public readonly carrierGatewayId: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `destinationIpv6CidrBlock`<sup>Required</sup> <a name="destinationIpv6CidrBlock" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationIpv6CidrBlock"></a>

```typescript
public readonly destinationIpv6CidrBlock: string;
```

- *Type:* string

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.destinationPrefixListId"></a>

```typescript
public readonly destinationPrefixListId: string;
```

- *Type:* string

---

##### `egressOnlyGatewayId`<sup>Required</sup> <a name="egressOnlyGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.egressOnlyGatewayId"></a>

```typescript
public readonly egressOnlyGatewayId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRouteConfig <a name="DataAwsRouteConfig" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.Initializer"></a>

```typescript
import { dataAwsRoute } from '@cdktf/provider-aws'

const dataAwsRouteConfig: dataAwsRoute.DataAwsRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.routeTableId">routeTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#route_table_id DataAwsRoute#route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.carrierGatewayId">carrierGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#core_network_arn DataAwsRoute#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_cidr_block DataAwsRoute#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationIpv6CidrBlock">destinationIpv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#gateway_id DataAwsRoute#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#id DataAwsRoute#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#instance_id DataAwsRoute#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#local_gateway_id DataAwsRoute#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#nat_gateway_id DataAwsRoute#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#network_interface_id DataAwsRoute#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#transit_gateway_id DataAwsRoute#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#route_table_id DataAwsRoute#route_table_id}.

---

##### `carrierGatewayId`<sup>Optional</sup> <a name="carrierGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.carrierGatewayId"></a>

```typescript
public readonly carrierGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}.

---

##### `coreNetworkArn`<sup>Optional</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#core_network_arn DataAwsRoute#core_network_arn}.

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_cidr_block DataAwsRoute#destination_cidr_block}.

---

##### `destinationIpv6CidrBlock`<sup>Optional</sup> <a name="destinationIpv6CidrBlock" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationIpv6CidrBlock"></a>

```typescript
public readonly destinationIpv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}.

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.destinationPrefixListId"></a>

```typescript
public readonly destinationPrefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}.

---

##### `egressOnlyGatewayId`<sup>Optional</sup> <a name="egressOnlyGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.egressOnlyGatewayId"></a>

```typescript
public readonly egressOnlyGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#gateway_id DataAwsRoute#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#id DataAwsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#instance_id DataAwsRoute#instance_id}.

---

##### `localGatewayId`<sup>Optional</sup> <a name="localGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#local_gateway_id DataAwsRoute#local_gateway_id}.

---

##### `natGatewayId`<sup>Optional</sup> <a name="natGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#nat_gateway_id DataAwsRoute#nat_gateway_id}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#network_interface_id DataAwsRoute#network_interface_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAwsRouteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#timeouts DataAwsRoute#timeouts}

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#transit_gateway_id DataAwsRoute#transit_gateway_id}.

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteConfig.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}.

---

### DataAwsRouteTimeouts <a name="DataAwsRouteTimeouts" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.Initializer"></a>

```typescript
import { dataAwsRoute } from '@cdktf/provider-aws'

const dataAwsRouteTimeouts: dataAwsRoute.DataAwsRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#read DataAwsRoute#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route#read DataAwsRoute#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRouteTimeoutsOutputReference <a name="DataAwsRouteTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAwsRoute } from '@cdktf/provider-aws'

new dataAwsRoute.DataAwsRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRouteTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute.DataAwsRouteTimeouts">DataAwsRouteTimeouts</a> | cdktf.IResolvable

---



