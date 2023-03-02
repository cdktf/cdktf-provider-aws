# `networkmanagerCoreNetworkPolicyAttachment` Submodule <a name="`networkmanagerCoreNetworkPolicyAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetworkPolicyAttachment <a name="NetworkmanagerCoreNetworkPolicyAttachment" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment aws_networkmanager_core_network_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer"></a>

```typescript
import { networkmanagerCoreNetworkPolicyAttachment } from '@cdktf/provider-aws'

new networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment(scope: Construct, id: string, config: NetworkmanagerCoreNetworkPolicyAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig">NetworkmanagerCoreNetworkPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig">NetworkmanagerCoreNetworkPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct"></a>

```typescript
import { networkmanagerCoreNetworkPolicyAttachment } from '@cdktf/provider-aws'

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement"></a>

```typescript
import { networkmanagerCoreNetworkPolicyAttachment } from '@cdktf/provider-aws'

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource"></a>

```typescript
import { networkmanagerCoreNetworkPolicyAttachment } from '@cdktf/provider-aws'

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference">NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference">NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference</a>

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkIdInput"></a>

```typescript
public readonly coreNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a> | cdktf.IResolvable

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkPolicyAttachmentConfig <a name="NetworkmanagerCoreNetworkPolicyAttachmentConfig" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.Initializer"></a>

```typescript
import { networkmanagerCoreNetworkPolicyAttachment } from '@cdktf/provider-aws'

const networkmanagerCoreNetworkPolicyAttachmentConfig: networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}.

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#timeouts NetworkmanagerCoreNetworkPolicyAttachment#timeouts}

---

### NetworkmanagerCoreNetworkPolicyAttachmentTimeouts <a name="NetworkmanagerCoreNetworkPolicyAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.Initializer"></a>

```typescript
import { networkmanagerCoreNetworkPolicyAttachment } from '@cdktf/provider-aws'

const networkmanagerCoreNetworkPolicyAttachmentTimeouts: networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference <a name="NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetworkPolicyAttachment } from '@cdktf/provider-aws'

new networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a> | cdktf.IResolvable

---



