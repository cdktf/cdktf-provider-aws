# `dataAwsWorkspacesWorkspace` Submodule <a name="`dataAwsWorkspacesWorkspace` Submodule" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWorkspacesWorkspace <a name="DataAwsWorkspacesWorkspace" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace aws_workspaces_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/provider-aws'

new dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace(scope: Construct, id: string, config?: DataAwsWorkspacesWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig">DataAwsWorkspacesWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig">DataAwsWorkspacesWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/provider-aws'

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/provider-aws'

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/provider-aws'

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.computerName">computerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.rootVolumeEncryptionEnabled">rootVolumeEncryptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userVolumeEncryptionEnabled">userVolumeEncryptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.volumeEncryptionKey">volumeEncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceProperties">workspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList">DataAwsWorkspacesWorkspaceWorkspacePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `rootVolumeEncryptionEnabled`<sup>Required</sup> <a name="rootVolumeEncryptionEnabled" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

```typescript
public readonly rootVolumeEncryptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `userVolumeEncryptionEnabled`<sup>Required</sup> <a name="userVolumeEncryptionEnabled" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userVolumeEncryptionEnabled"></a>

```typescript
public readonly userVolumeEncryptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `volumeEncryptionKey`<sup>Required</sup> <a name="volumeEncryptionKey" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.volumeEncryptionKey"></a>

```typescript
public readonly volumeEncryptionKey: string;
```

- *Type:* string

---

##### `workspaceProperties`<sup>Required</sup> <a name="workspaceProperties" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceProperties"></a>

```typescript
public readonly workspaceProperties: DataAwsWorkspacesWorkspaceWorkspacePropertiesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList">DataAwsWorkspacesWorkspaceWorkspacePropertiesList</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWorkspacesWorkspaceConfig <a name="DataAwsWorkspacesWorkspaceConfig" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/provider-aws'

const dataAwsWorkspacesWorkspaceConfig: dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}.

---

### DataAwsWorkspacesWorkspaceWorkspaceProperties <a name="DataAwsWorkspacesWorkspaceWorkspaceProperties" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/provider-aws'

const dataAwsWorkspacesWorkspaceWorkspaceProperties: dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsWorkspacesWorkspaceWorkspacePropertiesList <a name="DataAwsWorkspacesWorkspaceWorkspacePropertiesList" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/provider-aws'

new dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get"></a>

```typescript
public get(index: number): DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference <a name="DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/provider-aws'

new dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName">computeTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib">rootVolumeSizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode">runningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes">runningModeAutoStopTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib">userVolumeSizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties">DataAwsWorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeTypeName`<sup>Required</sup> <a name="computeTypeName" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName"></a>

```typescript
public readonly computeTypeName: string;
```

- *Type:* string

---

##### `rootVolumeSizeGib`<sup>Required</sup> <a name="rootVolumeSizeGib" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib"></a>

```typescript
public readonly rootVolumeSizeGib: number;
```

- *Type:* number

---

##### `runningMode`<sup>Required</sup> <a name="runningMode" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode"></a>

```typescript
public readonly runningMode: string;
```

- *Type:* string

---

##### `runningModeAutoStopTimeoutInMinutes`<sup>Required</sup> <a name="runningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes"></a>

```typescript
public readonly runningModeAutoStopTimeoutInMinutes: number;
```

- *Type:* number

---

##### `userVolumeSizeGib`<sup>Required</sup> <a name="userVolumeSizeGib" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib"></a>

```typescript
public readonly userVolumeSizeGib: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsWorkspacesWorkspaceWorkspaceProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties">DataAwsWorkspacesWorkspaceWorkspaceProperties</a>

---



