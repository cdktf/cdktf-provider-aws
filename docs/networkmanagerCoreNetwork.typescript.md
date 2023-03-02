# `networkmanagerCoreNetwork` Submodule <a name="`networkmanagerCoreNetwork` Submodule" id="@cdktf/provider-aws.networkmanagerCoreNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetwork <a name="NetworkmanagerCoreNetwork" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network aws_networkmanager_core_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetwork(scope: Construct, id: string, config: NetworkmanagerCoreNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig">NetworkmanagerCoreNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig">NetworkmanagerCoreNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetBasePolicyRegion">resetBasePolicyRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetCreateBasePolicy">resetCreateBasePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerCoreNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>

---

##### `resetBasePolicyRegion` <a name="resetBasePolicyRegion" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetBasePolicyRegion"></a>

```typescript
public resetBasePolicyRegion(): void
```

##### `resetCreateBasePolicy` <a name="resetCreateBasePolicy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetCreateBasePolicy"></a>

```typescript
public resetCreateBasePolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.edges">edges</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList">NetworkmanagerCoreNetworkEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.segments">segments</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList">NetworkmanagerCoreNetworkSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference">NetworkmanagerCoreNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegionInput">basePolicyRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicyInput">createBasePolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegion">basePolicyRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicy">createBasePolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `edges`<sup>Required</sup> <a name="edges" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.edges"></a>

```typescript
public readonly edges: NetworkmanagerCoreNetworkEdgesList;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList">NetworkmanagerCoreNetworkEdgesList</a>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.segments"></a>

```typescript
public readonly segments: NetworkmanagerCoreNetworkSegmentsList;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList">NetworkmanagerCoreNetworkSegmentsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerCoreNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference">NetworkmanagerCoreNetworkTimeoutsOutputReference</a>

---

##### `basePolicyRegionInput`<sup>Optional</sup> <a name="basePolicyRegionInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegionInput"></a>

```typescript
public readonly basePolicyRegionInput: string;
```

- *Type:* string

---

##### `createBasePolicyInput`<sup>Optional</sup> <a name="createBasePolicyInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicyInput"></a>

```typescript
public readonly createBasePolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkmanagerCoreNetworkTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a> | cdktf.IResolvable

---

##### `basePolicyRegion`<sup>Required</sup> <a name="basePolicyRegion" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegion"></a>

```typescript
public readonly basePolicyRegion: string;
```

- *Type:* string

---

##### `createBasePolicy`<sup>Required</sup> <a name="createBasePolicy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicy"></a>

```typescript
public readonly createBasePolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkConfig <a name="NetworkmanagerCoreNetworkConfig" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

const networkmanagerCoreNetworkConfig: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.basePolicyRegion">basePolicyRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.createBasePolicy">createBasePolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}.

---

##### `basePolicyRegion`<sup>Optional</sup> <a name="basePolicyRegion" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.basePolicyRegion"></a>

```typescript
public readonly basePolicyRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}.

---

##### `createBasePolicy`<sup>Optional</sup> <a name="createBasePolicy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.createBasePolicy"></a>

```typescript
public readonly createBasePolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerCoreNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#timeouts NetworkmanagerCoreNetwork#timeouts}

---

### NetworkmanagerCoreNetworkEdges <a name="NetworkmanagerCoreNetworkEdges" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

const networkmanagerCoreNetworkEdges: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges = { ... }
```


### NetworkmanagerCoreNetworkSegments <a name="NetworkmanagerCoreNetworkSegments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

const networkmanagerCoreNetworkSegments: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments = { ... }
```


### NetworkmanagerCoreNetworkTimeouts <a name="NetworkmanagerCoreNetworkTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

const networkmanagerCoreNetworkTimeouts: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create NetworkmanagerCoreNetwork#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#delete NetworkmanagerCoreNetwork#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#update NetworkmanagerCoreNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create NetworkmanagerCoreNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#delete NetworkmanagerCoreNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#update NetworkmanagerCoreNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCoreNetworkEdgesList <a name="NetworkmanagerCoreNetworkEdgesList" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get"></a>

```typescript
public get(index: number): NetworkmanagerCoreNetworkEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkmanagerCoreNetworkEdgesOutputReference <a name="NetworkmanagerCoreNetworkEdgesOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges">NetworkmanagerCoreNetworkEdges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCoreNetworkEdges;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges">NetworkmanagerCoreNetworkEdges</a>

---


### NetworkmanagerCoreNetworkSegmentsList <a name="NetworkmanagerCoreNetworkSegmentsList" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get"></a>

```typescript
public get(index: number): NetworkmanagerCoreNetworkSegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkmanagerCoreNetworkSegmentsOutputReference <a name="NetworkmanagerCoreNetworkSegmentsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments">sharedSegments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments">NetworkmanagerCoreNetworkSegments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sharedSegments`<sup>Required</sup> <a name="sharedSegments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments"></a>

```typescript
public readonly sharedSegments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCoreNetworkSegments;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments">NetworkmanagerCoreNetworkSegments</a>

---


### NetworkmanagerCoreNetworkTimeoutsOutputReference <a name="NetworkmanagerCoreNetworkTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktf/provider-aws'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCoreNetworkTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a> | cdktf.IResolvable

---



