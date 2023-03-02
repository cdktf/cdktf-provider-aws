# `mediaPackageChannel` Submodule <a name="`mediaPackageChannel` Submodule" id="@cdktf/provider-aws.mediaPackageChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaPackageChannel <a name="MediaPackageChannel" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel aws_media_package_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

new mediaPackageChannel.MediaPackageChannel(scope: Construct, id: string, config: MediaPackageChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig">MediaPackageChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig">MediaPackageChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isConstruct"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

mediaPackageChannel.MediaPackageChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformElement"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

mediaPackageChannel.MediaPackageChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformResource"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

mediaPackageChannel.MediaPackageChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.hlsIngest">hlsIngest</a></code> | <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList">MediaPackageChannelHlsIngestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hlsIngest`<sup>Required</sup> <a name="hlsIngest" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.hlsIngest"></a>

```typescript
public readonly hlsIngest: MediaPackageChannelHlsIngestList;
```

- *Type:* <a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList">MediaPackageChannelHlsIngestList</a>

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaPackageChannelConfig <a name="MediaPackageChannelConfig" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.Initializer"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

const mediaPackageChannelConfig: mediaPackageChannel.MediaPackageChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.channelId">channelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#channel_id MediaPackageChannel#channel_id}. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#description MediaPackageChannel#description}. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#id MediaPackageChannel#id}. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#tags MediaPackageChannel#tags}. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#tags_all MediaPackageChannel#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#channel_id MediaPackageChannel#channel_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#description MediaPackageChannel#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#id MediaPackageChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#tags MediaPackageChannel#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel#tags_all MediaPackageChannel#tags_all}.

---

### MediaPackageChannelHlsIngest <a name="MediaPackageChannelHlsIngest" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngest.Initializer"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

const mediaPackageChannelHlsIngest: mediaPackageChannel.MediaPackageChannelHlsIngest = { ... }
```


### MediaPackageChannelHlsIngestIngestEndpoints <a name="MediaPackageChannelHlsIngestIngestEndpoints" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints.Initializer"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

const mediaPackageChannelHlsIngestIngestEndpoints: mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### MediaPackageChannelHlsIngestIngestEndpointsList <a name="MediaPackageChannelHlsIngestIngestEndpointsList" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

new mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.get"></a>

```typescript
public get(index: number): MediaPackageChannelHlsIngestIngestEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MediaPackageChannelHlsIngestIngestEndpointsOutputReference <a name="MediaPackageChannelHlsIngestIngestEndpointsOutputReference" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

new mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints">MediaPackageChannelHlsIngestIngestEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaPackageChannelHlsIngestIngestEndpoints;
```

- *Type:* <a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints">MediaPackageChannelHlsIngestIngestEndpoints</a>

---


### MediaPackageChannelHlsIngestList <a name="MediaPackageChannelHlsIngestList" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

new mediaPackageChannel.MediaPackageChannelHlsIngestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.get"></a>

```typescript
public get(index: number): MediaPackageChannelHlsIngestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MediaPackageChannelHlsIngestOutputReference <a name="MediaPackageChannelHlsIngestOutputReference" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer"></a>

```typescript
import { mediaPackageChannel } from '@cdktf/provider-aws'

new mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.ingestEndpoints">ingestEndpoints</a></code> | <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList">MediaPackageChannelHlsIngestIngestEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngest">MediaPackageChannelHlsIngest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestEndpoints`<sup>Required</sup> <a name="ingestEndpoints" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.ingestEndpoints"></a>

```typescript
public readonly ingestEndpoints: MediaPackageChannelHlsIngestIngestEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList">MediaPackageChannelHlsIngestIngestEndpointsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaPackageChannelHlsIngest;
```

- *Type:* <a href="#@cdktf/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngest">MediaPackageChannelHlsIngest</a>

---



