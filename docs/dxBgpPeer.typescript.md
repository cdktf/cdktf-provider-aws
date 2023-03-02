# `dxBgpPeer` Submodule <a name="`dxBgpPeer` Submodule" id="@cdktf/provider-aws.dxBgpPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxBgpPeer <a name="DxBgpPeer" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer aws_dx_bgp_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.Initializer"></a>

```typescript
import { dxBgpPeer } from '@cdktf/provider-aws'

new dxBgpPeer.DxBgpPeer(scope: Construct, id: string, config: DxBgpPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig">DxBgpPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig">DxBgpPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.putTimeouts"></a>

```typescript
public putTimeouts(value: DxBgpPeerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts">DxBgpPeerTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetAmazonAddress"></a>

```typescript
public resetAmazonAddress(): void
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetBgpAuthKey"></a>

```typescript
public resetBgpAuthKey(): void
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetCustomerAddress"></a>

```typescript
public resetCustomerAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isConstruct"></a>

```typescript
import { dxBgpPeer } from '@cdktf/provider-aws'

dxBgpPeer.DxBgpPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isTerraformElement"></a>

```typescript
import { dxBgpPeer } from '@cdktf/provider-aws'

dxBgpPeer.DxBgpPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isTerraformResource"></a>

```typescript
import { dxBgpPeer } from '@cdktf/provider-aws'

dxBgpPeer.DxBgpPeer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.awsDevice">awsDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpPeerId">bgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpStatus">bgpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference">DxBgpPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.amazonAddressInput">amazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpAsnInput">bgpAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.customerAddressInput">customerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts">DxBgpPeerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.virtualInterfaceIdInput">virtualInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpAuthKey">bgpAuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.customerAddress">customerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.awsDevice"></a>

```typescript
public readonly awsDevice: string;
```

- *Type:* string

---

##### `bgpPeerId`<sup>Required</sup> <a name="bgpPeerId" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpPeerId"></a>

```typescript
public readonly bgpPeerId: string;
```

- *Type:* string

---

##### `bgpStatus`<sup>Required</sup> <a name="bgpStatus" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpStatus"></a>

```typescript
public readonly bgpStatus: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.timeouts"></a>

```typescript
public readonly timeouts: DxBgpPeerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference">DxBgpPeerTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.amazonAddressInput"></a>

```typescript
public readonly amazonAddressInput: string;
```

- *Type:* string

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpAsnInput"></a>

```typescript
public readonly bgpAsnInput: number;
```

- *Type:* number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpAuthKeyInput"></a>

```typescript
public readonly bgpAuthKeyInput: string;
```

- *Type:* string

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.customerAddressInput"></a>

```typescript
public readonly customerAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DxBgpPeerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts">DxBgpPeerTimeouts</a> | cdktf.IResolvable

---

##### `virtualInterfaceIdInput`<sup>Optional</sup> <a name="virtualInterfaceIdInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.virtualInterfaceIdInput"></a>

```typescript
public readonly virtualInterfaceIdInput: string;
```

- *Type:* string

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.bgpAuthKey"></a>

```typescript
public readonly bgpAuthKey: string;
```

- *Type:* string

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxBgpPeerConfig <a name="DxBgpPeerConfig" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.Initializer"></a>

```typescript
import { dxBgpPeer } from '@cdktf/provider-aws'

const dxBgpPeerConfig: dxBgpPeer.DxBgpPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#address_family DxBgpPeer#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#bgp_asn DxBgpPeer#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#virtual_interface_id DxBgpPeer#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#amazon_address DxBgpPeer#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#bgp_auth_key DxBgpPeer#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.customerAddress">customerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#customer_address DxBgpPeer#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#id DxBgpPeer#id}. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts">DxBgpPeerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#address_family DxBgpPeer#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#bgp_asn DxBgpPeer#bgp_asn}.

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#virtual_interface_id DxBgpPeer#virtual_interface_id}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#amazon_address DxBgpPeer#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.bgpAuthKey"></a>

```typescript
public readonly bgpAuthKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#bgp_auth_key DxBgpPeer#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#customer_address DxBgpPeer#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#id DxBgpPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DxBgpPeerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts">DxBgpPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#timeouts DxBgpPeer#timeouts}

---

### DxBgpPeerTimeouts <a name="DxBgpPeerTimeouts" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts.Initializer"></a>

```typescript
import { dxBgpPeer } from '@cdktf/provider-aws'

const dxBgpPeerTimeouts: dxBgpPeer.DxBgpPeerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#create DxBgpPeer#create}. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#delete DxBgpPeer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#create DxBgpPeer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer#delete DxBgpPeer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxBgpPeerTimeoutsOutputReference <a name="DxBgpPeerTimeoutsOutputReference" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.Initializer"></a>

```typescript
import { dxBgpPeer } from '@cdktf/provider-aws'

new dxBgpPeer.DxBgpPeerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts">DxBgpPeerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DxBgpPeerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dxBgpPeer.DxBgpPeerTimeouts">DxBgpPeerTimeouts</a> | cdktf.IResolvable

---



