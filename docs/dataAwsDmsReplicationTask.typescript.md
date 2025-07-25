# `dataAwsDmsReplicationTask` Submodule <a name="`dataAwsDmsReplicationTask` Submodule" id="@cdktf/provider-aws.dataAwsDmsReplicationTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDmsReplicationTask <a name="DataAwsDmsReplicationTask" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task aws_dms_replication_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.Initializer"></a>

```typescript
import { dataAwsDmsReplicationTask } from '@cdktf/provider-aws'

new dataAwsDmsReplicationTask.DataAwsDmsReplicationTask(scope: Construct, id: string, config: DataAwsDmsReplicationTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig">DataAwsDmsReplicationTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig">DataAwsDmsReplicationTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDmsReplicationTask resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isConstruct"></a>

```typescript
import { dataAwsDmsReplicationTask } from '@cdktf/provider-aws'

dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isTerraformElement"></a>

```typescript
import { dataAwsDmsReplicationTask } from '@cdktf/provider-aws'

dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isTerraformDataSource"></a>

```typescript
import { dataAwsDmsReplicationTask } from '@cdktf/provider-aws'

dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.generateConfigForImport"></a>

```typescript
import { dataAwsDmsReplicationTask } from '@cdktf/provider-aws'

dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsDmsReplicationTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDmsReplicationTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDmsReplicationTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDmsReplicationTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.cdcStartPosition">cdcStartPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.cdcStartTime">cdcStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.migrationType">migrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationTaskArn">replicationTaskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationTaskSettings">replicationTaskSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.startReplicationTask">startReplicationTask</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.tableMappings">tableMappings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.targetEndpointArn">targetEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationTaskIdInput">replicationTaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationTaskId">replicationTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cdcStartPosition`<sup>Required</sup> <a name="cdcStartPosition" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.cdcStartPosition"></a>

```typescript
public readonly cdcStartPosition: string;
```

- *Type:* string

---

##### `cdcStartTime`<sup>Required</sup> <a name="cdcStartTime" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.cdcStartTime"></a>

```typescript
public readonly cdcStartTime: string;
```

- *Type:* string

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.migrationType"></a>

```typescript
public readonly migrationType: string;
```

- *Type:* string

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationInstanceArn"></a>

```typescript
public readonly replicationInstanceArn: string;
```

- *Type:* string

---

##### `replicationTaskArn`<sup>Required</sup> <a name="replicationTaskArn" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationTaskArn"></a>

```typescript
public readonly replicationTaskArn: string;
```

- *Type:* string

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="replicationTaskSettings" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationTaskSettings"></a>

```typescript
public readonly replicationTaskSettings: string;
```

- *Type:* string

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.sourceEndpointArn"></a>

```typescript
public readonly sourceEndpointArn: string;
```

- *Type:* string

---

##### `startReplicationTask`<sup>Required</sup> <a name="startReplicationTask" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.startReplicationTask"></a>

```typescript
public readonly startReplicationTask: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.tableMappings"></a>

```typescript
public readonly tableMappings: string;
```

- *Type:* string

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.targetEndpointArn"></a>

```typescript
public readonly targetEndpointArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicationTaskIdInput`<sup>Optional</sup> <a name="replicationTaskIdInput" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationTaskIdInput"></a>

```typescript
public readonly replicationTaskIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicationTaskId`<sup>Required</sup> <a name="replicationTaskId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.replicationTaskId"></a>

```typescript
public readonly replicationTaskId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDmsReplicationTaskConfig <a name="DataAwsDmsReplicationTaskConfig" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.Initializer"></a>

```typescript
import { dataAwsDmsReplicationTask } from '@cdktf/provider-aws'

const dataAwsDmsReplicationTaskConfig: dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.replicationTaskId">replicationTaskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task#replication_task_id DataAwsDmsReplicationTask#replication_task_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task#id DataAwsDmsReplicationTask#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task#tags DataAwsDmsReplicationTask#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `replicationTaskId`<sup>Required</sup> <a name="replicationTaskId" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.replicationTaskId"></a>

```typescript
public readonly replicationTaskId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task#replication_task_id DataAwsDmsReplicationTask#replication_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task#id DataAwsDmsReplicationTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task#region DataAwsDmsReplicationTask#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDmsReplicationTask.DataAwsDmsReplicationTaskConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/dms_replication_task#tags DataAwsDmsReplicationTask#tags}.

---



