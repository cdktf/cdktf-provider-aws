# `fsxOpenzfsSnapshot` Submodule <a name="`fsxOpenzfsSnapshot` Submodule" id="@cdktf/provider-aws.fsxOpenzfsSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsSnapshot <a name="FsxOpenzfsSnapshot" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer"></a>

```typescript
import { fsxOpenzfsSnapshot } from '@cdktf/provider-aws'

new fsxOpenzfsSnapshot.FsxOpenzfsSnapshot(scope: Construct, id: string, config: FsxOpenzfsSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig">FsxOpenzfsSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig">FsxOpenzfsSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxOpenzfsSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isConstruct"></a>

```typescript
import { fsxOpenzfsSnapshot } from '@cdktf/provider-aws'

fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformElement"></a>

```typescript
import { fsxOpenzfsSnapshot } from '@cdktf/provider-aws'

fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformResource"></a>

```typescript
import { fsxOpenzfsSnapshot } from '@cdktf/provider-aws'

fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference">FsxOpenzfsSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOpenzfsSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference">FsxOpenzfsSnapshotTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: FsxOpenzfsSnapshotTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a> | cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsSnapshotConfig <a name="FsxOpenzfsSnapshotConfig" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.Initializer"></a>

```typescript
import { fsxOpenzfsSnapshot } from '@cdktf/provider-aws'

const fsxOpenzfsSnapshotConfig: fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#name FsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.volumeId">volumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#volume_id FsxOpenzfsSnapshot#volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#id FsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags FsxOpenzfsSnapshot#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags_all FsxOpenzfsSnapshot#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#name FsxOpenzfsSnapshot#name}.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#volume_id FsxOpenzfsSnapshot#volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#id FsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags FsxOpenzfsSnapshot#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags_all FsxOpenzfsSnapshot#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOpenzfsSnapshotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#timeouts FsxOpenzfsSnapshot#timeouts}

---

### FsxOpenzfsSnapshotTimeouts <a name="FsxOpenzfsSnapshotTimeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.Initializer"></a>

```typescript
import { fsxOpenzfsSnapshot } from '@cdktf/provider-aws'

const fsxOpenzfsSnapshotTimeouts: fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#create FsxOpenzfsSnapshot#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#delete FsxOpenzfsSnapshot#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#read FsxOpenzfsSnapshot#read}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#update FsxOpenzfsSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#create FsxOpenzfsSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#delete FsxOpenzfsSnapshot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#read FsxOpenzfsSnapshot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#update FsxOpenzfsSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsSnapshotTimeoutsOutputReference <a name="FsxOpenzfsSnapshotTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsSnapshot } from '@cdktf/provider-aws'

new fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsSnapshotTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a> | cdktf.IResolvable

---



