# `ec2TransitGateway` Submodule <a name="`ec2TransitGateway` Submodule" id="@cdktf/provider-aws.ec2TransitGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGateway <a name="Ec2TransitGateway" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway aws_ec2_transit_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer"></a>

```typescript
import { ec2TransitGateway } from '@cdktf/provider-aws'

new ec2TransitGateway.Ec2TransitGateway(scope: Construct, id: string, config?: Ec2TransitGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig">Ec2TransitGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig">Ec2TransitGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn">resetAmazonSideAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments">resetAutoAcceptSharedAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation">resetDefaultRouteTableAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation">resetDefaultRouteTablePropagation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport">resetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport">resetMulticastSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks">resetTransitGatewayCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport">resetVpnEcmpSupport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: Ec2TransitGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

---

##### `resetAmazonSideAsn` <a name="resetAmazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn"></a>

```typescript
public resetAmazonSideAsn(): void
```

##### `resetAutoAcceptSharedAttachments` <a name="resetAutoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments"></a>

```typescript
public resetAutoAcceptSharedAttachments(): void
```

##### `resetDefaultRouteTableAssociation` <a name="resetDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation"></a>

```typescript
public resetDefaultRouteTableAssociation(): void
```

##### `resetDefaultRouteTablePropagation` <a name="resetDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation"></a>

```typescript
public resetDefaultRouteTablePropagation(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDnsSupport` <a name="resetDnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport"></a>

```typescript
public resetDnsSupport(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMulticastSupport` <a name="resetMulticastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport"></a>

```typescript
public resetMulticastSupport(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitGatewayCidrBlocks` <a name="resetTransitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks"></a>

```typescript
public resetTransitGatewayCidrBlocks(): void
```

##### `resetVpnEcmpSupport` <a name="resetVpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport"></a>

```typescript
public resetVpnEcmpSupport(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct"></a>

```typescript
import { ec2TransitGateway } from '@cdktf/provider-aws'

ec2TransitGateway.Ec2TransitGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement"></a>

```typescript
import { ec2TransitGateway } from '@cdktf/provider-aws'

ec2TransitGateway.Ec2TransitGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource"></a>

```typescript
import { ec2TransitGateway } from '@cdktf/provider-aws'

ec2TransitGateway.Ec2TransitGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId">associationDefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId">propagationDefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference">Ec2TransitGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput">amazonSideAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput">autoAcceptSharedAttachmentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput">defaultRouteTableAssociationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput">defaultRouteTablePropagationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput">dnsSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput">multicastSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput">transitGatewayCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput">vpnEcmpSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn">amazonSideAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments">autoAcceptSharedAttachments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation">defaultRouteTableAssociation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation">defaultRouteTablePropagation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport">multicastSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks">transitGatewayCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationDefaultRouteTableId`<sup>Required</sup> <a name="associationDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId"></a>

```typescript
public readonly associationDefaultRouteTableId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `propagationDefaultRouteTableId`<sup>Required</sup> <a name="propagationDefaultRouteTableId" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId"></a>

```typescript
public readonly propagationDefaultRouteTableId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2TransitGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference">Ec2TransitGatewayTimeoutsOutputReference</a>

---

##### `amazonSideAsnInput`<sup>Optional</sup> <a name="amazonSideAsnInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput"></a>

```typescript
public readonly amazonSideAsnInput: number;
```

- *Type:* number

---

##### `autoAcceptSharedAttachmentsInput`<sup>Optional</sup> <a name="autoAcceptSharedAttachmentsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput"></a>

```typescript
public readonly autoAcceptSharedAttachmentsInput: string;
```

- *Type:* string

---

##### `defaultRouteTableAssociationInput`<sup>Optional</sup> <a name="defaultRouteTableAssociationInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput"></a>

```typescript
public readonly defaultRouteTableAssociationInput: string;
```

- *Type:* string

---

##### `defaultRouteTablePropagationInput`<sup>Optional</sup> <a name="defaultRouteTablePropagationInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput"></a>

```typescript
public readonly defaultRouteTablePropagationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dnsSupportInput`<sup>Optional</sup> <a name="dnsSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput"></a>

```typescript
public readonly dnsSupportInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multicastSupportInput`<sup>Optional</sup> <a name="multicastSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput"></a>

```typescript
public readonly multicastSupportInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Ec2TransitGatewayTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a> | cdktf.IResolvable

---

##### `transitGatewayCidrBlocksInput`<sup>Optional</sup> <a name="transitGatewayCidrBlocksInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput"></a>

```typescript
public readonly transitGatewayCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `vpnEcmpSupportInput`<sup>Optional</sup> <a name="vpnEcmpSupportInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput"></a>

```typescript
public readonly vpnEcmpSupportInput: string;
```

- *Type:* string

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: number;
```

- *Type:* number

---

##### `autoAcceptSharedAttachments`<sup>Required</sup> <a name="autoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments"></a>

```typescript
public readonly autoAcceptSharedAttachments: string;
```

- *Type:* string

---

##### `defaultRouteTableAssociation`<sup>Required</sup> <a name="defaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation"></a>

```typescript
public readonly defaultRouteTableAssociation: string;
```

- *Type:* string

---

##### `defaultRouteTablePropagation`<sup>Required</sup> <a name="defaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation"></a>

```typescript
public readonly defaultRouteTablePropagation: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multicastSupport`<sup>Required</sup> <a name="multicastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport"></a>

```typescript
public readonly multicastSupport: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayCidrBlocks`<sup>Required</sup> <a name="transitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks"></a>

```typescript
public readonly transitGatewayCidrBlocks: string[];
```

- *Type:* string[]

---

##### `vpnEcmpSupport`<sup>Required</sup> <a name="vpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport"></a>

```typescript
public readonly vpnEcmpSupport: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConfig <a name="Ec2TransitGatewayConfig" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.Initializer"></a>

```typescript
import { ec2TransitGateway } from '@cdktf/provider-aws'

const ec2TransitGatewayConfig: ec2TransitGateway.Ec2TransitGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn">amazonSideAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments">autoAcceptSharedAttachments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation">defaultRouteTableAssociation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation">defaultRouteTablePropagation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport">multicastSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks">transitGatewayCidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amazonSideAsn`<sup>Optional</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.

---

##### `autoAcceptSharedAttachments`<sup>Optional</sup> <a name="autoAcceptSharedAttachments" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments"></a>

```typescript
public readonly autoAcceptSharedAttachments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.

---

##### `defaultRouteTableAssociation`<sup>Optional</sup> <a name="defaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation"></a>

```typescript
public readonly defaultRouteTableAssociation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}.

---

##### `defaultRouteTablePropagation`<sup>Optional</sup> <a name="defaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation"></a>

```typescript
public readonly defaultRouteTablePropagation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#description Ec2TransitGateway#description}.

---

##### `dnsSupport`<sup>Optional</sup> <a name="dnsSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#id Ec2TransitGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multicastSupport`<sup>Optional</sup> <a name="multicastSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport"></a>

```typescript
public readonly multicastSupport: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags Ec2TransitGateway#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2TransitGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#timeouts Ec2TransitGateway#timeouts}

---

##### `transitGatewayCidrBlocks`<sup>Optional</sup> <a name="transitGatewayCidrBlocks" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks"></a>

```typescript
public readonly transitGatewayCidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}.

---

##### `vpnEcmpSupport`<sup>Optional</sup> <a name="vpnEcmpSupport" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport"></a>

```typescript
public readonly vpnEcmpSupport: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.

---

### Ec2TransitGatewayTimeouts <a name="Ec2TransitGatewayTimeouts" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.Initializer"></a>

```typescript
import { ec2TransitGateway } from '@cdktf/provider-aws'

const ec2TransitGatewayTimeouts: ec2TransitGateway.Ec2TransitGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#create Ec2TransitGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#delete Ec2TransitGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway#update Ec2TransitGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayTimeoutsOutputReference <a name="Ec2TransitGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGateway } from '@cdktf/provider-aws'

new ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2TransitGatewayTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGateway.Ec2TransitGatewayTimeouts">Ec2TransitGatewayTimeouts</a> | cdktf.IResolvable

---



