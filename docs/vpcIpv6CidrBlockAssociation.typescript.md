# `vpcIpv6CidrBlockAssociation` Submodule <a name="`vpcIpv6CidrBlockAssociation` Submodule" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpv6CidrBlockAssociation <a name="VpcIpv6CidrBlockAssociation" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association aws_vpc_ipv6_cidr_block_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer"></a>

```typescript
import { vpcIpv6CidrBlockAssociation } from '@cdktf/provider-aws'

new vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation(scope: Construct, id: string, config: VpcIpv6CidrBlockAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig">VpcIpv6CidrBlockAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig">VpcIpv6CidrBlockAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetIpv6NetmaskLength">resetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcIpv6CidrBlockAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetIpv6NetmaskLength` <a name="resetIpv6NetmaskLength" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetIpv6NetmaskLength"></a>

```typescript
public resetIpv6NetmaskLength(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isConstruct"></a>

```typescript
import { vpcIpv6CidrBlockAssociation } from '@cdktf/provider-aws'

vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformElement"></a>

```typescript
import { vpcIpv6CidrBlockAssociation } from '@cdktf/provider-aws'

vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformResource"></a>

```typescript
import { vpcIpv6CidrBlockAssociation } from '@cdktf/provider-aws'

vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference">VpcIpv6CidrBlockAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6IpamPoolIdInput">ipv6IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6NetmaskLengthInput">ipv6NetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: VpcIpv6CidrBlockAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference">VpcIpv6CidrBlockAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="ipv6IpamPoolIdInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6IpamPoolIdInput"></a>

```typescript
public readonly ipv6IpamPoolIdInput: string;
```

- *Type:* string

---

##### `ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="ipv6NetmaskLengthInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6NetmaskLengthInput"></a>

```typescript
public readonly ipv6NetmaskLengthInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VpcIpv6CidrBlockAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a> | cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpv6CidrBlockAssociationConfig <a name="VpcIpv6CidrBlockAssociationConfig" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.Initializer"></a>

```typescript
import { vpcIpv6CidrBlockAssociation } from '@cdktf/provider-aws'

const vpcIpv6CidrBlockAssociationConfig: vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#id VpcIpv6CidrBlockAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#id VpcIpv6CidrBlockAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}.

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcIpv6CidrBlockAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#timeouts VpcIpv6CidrBlockAssociation#timeouts}

---

### VpcIpv6CidrBlockAssociationTimeouts <a name="VpcIpv6CidrBlockAssociationTimeouts" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.Initializer"></a>

```typescript
import { vpcIpv6CidrBlockAssociation } from '@cdktf/provider-aws'

const vpcIpv6CidrBlockAssociationTimeouts: vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#create VpcIpv6CidrBlockAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#delete VpcIpv6CidrBlockAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#create VpcIpv6CidrBlockAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association#delete VpcIpv6CidrBlockAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpv6CidrBlockAssociationTimeoutsOutputReference <a name="VpcIpv6CidrBlockAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcIpv6CidrBlockAssociation } from '@cdktf/provider-aws'

new vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcIpv6CidrBlockAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpv6CidrBlockAssociation.VpcIpv6CidrBlockAssociationTimeouts">VpcIpv6CidrBlockAssociationTimeouts</a> | cdktf.IResolvable

---



