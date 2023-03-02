# `ec2TransitGatewayPrefixListReference` Submodule <a name="`ec2TransitGatewayPrefixListReference` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPrefixListReference <a name="Ec2TransitGatewayPrefixListReference" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference aws_ec2_transit_gateway_prefix_list_reference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer"></a>

```typescript
import { ec2TransitGatewayPrefixListReference } from '@cdktf/provider-aws'

new ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference(scope: Construct, id: string, config: Ec2TransitGatewayPrefixListReferenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig">Ec2TransitGatewayPrefixListReferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig">Ec2TransitGatewayPrefixListReferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetBlackhole">resetBlackhole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetTransitGatewayAttachmentId">resetTransitGatewayAttachmentId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBlackhole` <a name="resetBlackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetBlackhole"></a>

```typescript
public resetBlackhole(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTransitGatewayAttachmentId` <a name="resetTransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetTransitGatewayAttachmentId"></a>

```typescript
public resetTransitGatewayAttachmentId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct"></a>

```typescript
import { ec2TransitGatewayPrefixListReference } from '@cdktf/provider-aws'

ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayPrefixListReference } from '@cdktf/provider-aws'

ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayPrefixListReference } from '@cdktf/provider-aws'

ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListOwnerId">prefixListOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackholeInput">blackholeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListIdInput">prefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackhole">blackhole</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListId">prefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `prefixListOwnerId`<sup>Required</sup> <a name="prefixListOwnerId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListOwnerId"></a>

```typescript
public readonly prefixListOwnerId: string;
```

- *Type:* string

---

##### `blackholeInput`<sup>Optional</sup> <a name="blackholeInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackholeInput"></a>

```typescript
public readonly blackholeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `prefixListIdInput`<sup>Optional</sup> <a name="prefixListIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListIdInput"></a>

```typescript
public readonly prefixListIdInput: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentIdInput"></a>

```typescript
public readonly transitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableIdInput"></a>

```typescript
public readonly transitGatewayRouteTableIdInput: string;
```

- *Type:* string

---

##### `blackhole`<sup>Required</sup> <a name="blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackhole"></a>

```typescript
public readonly blackhole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPrefixListReferenceConfig <a name="Ec2TransitGatewayPrefixListReferenceConfig" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayPrefixListReference } from '@cdktf/provider-aws'

const ec2TransitGatewayPrefixListReferenceConfig: ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.prefixListId">prefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.blackhole">blackhole</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}.

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}.

---

##### `blackhole`<sup>Optional</sup> <a name="blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.blackhole"></a>

```typescript
public readonly blackhole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `transitGatewayAttachmentId`<sup>Optional</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}.

---



