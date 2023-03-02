# `networkmanagerConnectAttachment` Submodule <a name="`networkmanagerConnectAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerConnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnectAttachment <a name="NetworkmanagerConnectAttachment" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment aws_networkmanager_connect_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachment(scope: Construct, id: string, config: NetworkmanagerConnectAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig">NetworkmanagerConnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig">NetworkmanagerConnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions"></a>

```typescript
public putOptions(value: NetworkmanagerConnectAttachmentOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerConnectAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference">NetworkmanagerConnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput">edgeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput">transportAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId">transportAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options"></a>

```typescript
public readonly options: NetworkmanagerConnectAttachmentOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a>

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerConnectAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference">NetworkmanagerConnectAttachmentTimeoutsOutputReference</a>

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput"></a>

```typescript
public readonly coreNetworkIdInput: string;
```

- *Type:* string

---

##### `edgeLocationInput`<sup>Optional</sup> <a name="edgeLocationInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput"></a>

```typescript
public readonly edgeLocationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput"></a>

```typescript
public readonly optionsInput: NetworkmanagerConnectAttachmentOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkmanagerConnectAttachmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a> | cdktf.IResolvable

---

##### `transportAttachmentIdInput`<sup>Optional</sup> <a name="transportAttachmentIdInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput"></a>

```typescript
public readonly transportAttachmentIdInput: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId"></a>

```typescript
public readonly transportAttachmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectAttachmentConfig <a name="NetworkmanagerConnectAttachmentConfig" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

const networkmanagerConnectAttachmentConfig: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId">transportAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#id NetworkmanagerConnectAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#tags_all NetworkmanagerConnectAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}.

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options"></a>

```typescript
public readonly options: NetworkmanagerConnectAttachmentOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#options NetworkmanagerConnectAttachment#options}

---

##### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId"></a>

```typescript
public readonly transportAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#id NetworkmanagerConnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#tags_all NetworkmanagerConnectAttachment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerConnectAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#timeouts NetworkmanagerConnectAttachment#timeouts}

---

### NetworkmanagerConnectAttachmentOptions <a name="NetworkmanagerConnectAttachmentOptions" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

const networkmanagerConnectAttachmentOptions: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}. |

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}.

---

### NetworkmanagerConnectAttachmentTimeouts <a name="NetworkmanagerConnectAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

const networkmanagerConnectAttachmentTimeouts: networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#create NetworkmanagerConnectAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#delete NetworkmanagerConnectAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#create NetworkmanagerConnectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connect_attachment#delete NetworkmanagerConnectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectAttachmentOptionsOutputReference <a name="NetworkmanagerConnectAttachmentOptionsOutputReference" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerConnectAttachmentOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---


### NetworkmanagerConnectAttachmentTimeoutsOutputReference <a name="NetworkmanagerConnectAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectAttachment } from '@cdktf/provider-aws'

new networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerConnectAttachmentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a> | cdktf.IResolvable

---



