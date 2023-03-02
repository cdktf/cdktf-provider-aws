# `dxHostedPrivateVirtualInterface` Submodule <a name="`dxHostedPrivateVirtualInterface` Submodule" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPrivateVirtualInterface <a name="DxHostedPrivateVirtualInterface" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface aws_dx_hosted_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer"></a>

```typescript
import { dxHostedPrivateVirtualInterface } from '@cdktf/provider-aws'

new dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig">DxHostedPrivateVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig">DxHostedPrivateVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts"></a>

```typescript
public putTimeouts(value: DxHostedPrivateVirtualInterfaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetAmazonAddress"></a>

```typescript
public resetAmazonAddress(): void
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetBgpAuthKey"></a>

```typescript
public resetBgpAuthKey(): void
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetCustomerAddress"></a>

```typescript
public resetCustomerAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct"></a>

```typescript
import { dxHostedPrivateVirtualInterface } from '@cdktf/provider-aws'

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement"></a>

```typescript
import { dxHostedPrivateVirtualInterface } from '@cdktf/provider-aws'

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource"></a>

```typescript
import { dxHostedPrivateVirtualInterface } from '@cdktf/provider-aws'

dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonSideAsn">amazonSideAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.awsDevice">awsDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.jumboFrameCapable">jumboFrameCapable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddressInput">amazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsnInput">bgpAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddressInput">customerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountIdInput">ownerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKey">bgpAuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddress">customerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.awsDevice"></a>

```typescript
public readonly awsDevice: string;
```

- *Type:* string

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="jumboFrameCapable" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.jumboFrameCapable"></a>

```typescript
public readonly jumboFrameCapable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeouts"></a>

```typescript
public readonly timeouts: DxHostedPrivateVirtualInterfaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddressInput"></a>

```typescript
public readonly amazonAddressInput: string;
```

- *Type:* string

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsnInput"></a>

```typescript
public readonly bgpAsnInput: number;
```

- *Type:* number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKeyInput"></a>

```typescript
public readonly bgpAuthKeyInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddressInput"></a>

```typescript
public readonly customerAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerAccountIdInput`<sup>Optional</sup> <a name="ownerAccountIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountIdInput"></a>

```typescript
public readonly ownerAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DxHostedPrivateVirtualInterfaceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a> | cdktf.IResolvable

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKey"></a>

```typescript
public readonly bgpAuthKey: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPrivateVirtualInterfaceConfig <a name="DxHostedPrivateVirtualInterfaceConfig" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.Initializer"></a>

```typescript
import { dxHostedPrivateVirtualInterface } from '@cdktf/provider-aws'

const dxHostedPrivateVirtualInterfaceConfig: dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.customerAddress">customerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}.

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAuthKey"></a>

```typescript
public readonly bgpAuthKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DxHostedPrivateVirtualInterfaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#timeouts DxHostedPrivateVirtualInterface#timeouts}

---

### DxHostedPrivateVirtualInterfaceTimeouts <a name="DxHostedPrivateVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.Initializer"></a>

```typescript
import { dxHostedPrivateVirtualInterface } from '@cdktf/provider-aws'

const dxHostedPrivateVirtualInterfaceTimeouts: dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#create DxHostedPrivateVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#delete DxHostedPrivateVirtualInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#create DxHostedPrivateVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface#delete DxHostedPrivateVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPrivateVirtualInterfaceTimeoutsOutputReference <a name="DxHostedPrivateVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dxHostedPrivateVirtualInterface } from '@cdktf/provider-aws'

new dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DxHostedPrivateVirtualInterfaceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a> | cdktf.IResolvable

---



