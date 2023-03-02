# `ec2TransitGatewayMulticastGroupSource` Submodule <a name="`ec2TransitGatewayMulticastGroupSource` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastGroupSource <a name="Ec2TransitGatewayMulticastGroupSource" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source aws_ec2_transit_gateway_multicast_group_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer"></a>

```typescript
import { ec2TransitGatewayMulticastGroupSource } from '@cdktf/provider-aws'

new ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource(scope: Construct, id: string, config: Ec2TransitGatewayMulticastGroupSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig">Ec2TransitGatewayMulticastGroupSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig">Ec2TransitGatewayMulticastGroupSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isConstruct"></a>

```typescript
import { ec2TransitGatewayMulticastGroupSource } from '@cdktf/provider-aws'

ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayMulticastGroupSource } from '@cdktf/provider-aws'

ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayMulticastGroupSource } from '@cdktf/provider-aws'

ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.groupIpAddressInput">groupIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.transitGatewayMulticastDomainIdInput">transitGatewayMulticastDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.groupIpAddress">groupIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupIpAddressInput`<sup>Optional</sup> <a name="groupIpAddressInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.groupIpAddressInput"></a>

```typescript
public readonly groupIpAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `transitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="transitGatewayMulticastDomainIdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.transitGatewayMulticastDomainIdInput"></a>

```typescript
public readonly transitGatewayMulticastDomainIdInput: string;
```

- *Type:* string

---

##### `groupIpAddress`<sup>Required</sup> <a name="groupIpAddress" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.groupIpAddress"></a>

```typescript
public readonly groupIpAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `transitGatewayMulticastDomainId`<sup>Required</sup> <a name="transitGatewayMulticastDomainId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.transitGatewayMulticastDomainId"></a>

```typescript
public readonly transitGatewayMulticastDomainId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastGroupSourceConfig <a name="Ec2TransitGatewayMulticastGroupSourceConfig" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayMulticastGroupSource } from '@cdktf/provider-aws'

const ec2TransitGatewayMulticastGroupSourceConfig: ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.groupIpAddress">groupIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#group_ip_address Ec2TransitGatewayMulticastGroupSource#group_ip_address}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#network_interface_id Ec2TransitGatewayMulticastGroupSource#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupSource#transit_gateway_multicast_domain_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#id Ec2TransitGatewayMulticastGroupSource#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupIpAddress`<sup>Required</sup> <a name="groupIpAddress" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.groupIpAddress"></a>

```typescript
public readonly groupIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#group_ip_address Ec2TransitGatewayMulticastGroupSource#group_ip_address}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#network_interface_id Ec2TransitGatewayMulticastGroupSource#network_interface_id}.

---

##### `transitGatewayMulticastDomainId`<sup>Required</sup> <a name="transitGatewayMulticastDomainId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.transitGatewayMulticastDomainId"></a>

```typescript
public readonly transitGatewayMulticastDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupSource#transit_gateway_multicast_domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#id Ec2TransitGatewayMulticastGroupSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



