# `dmsReplicationTask` Submodule <a name="`dmsReplicationTask` Submodule" id="@cdktf/provider-aws.dmsReplicationTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationTask <a name="DmsReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task aws_dms_replication_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer"></a>

```typescript
import { dmsReplicationTask } from '@cdktf/provider-aws'

new dmsReplicationTask.DmsReplicationTask(scope: Construct, id: string, config: DmsReplicationTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig">DmsReplicationTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig">DmsReplicationTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition">resetCdcStartPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime">resetCdcStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings">resetReplicationTaskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetStartReplicationTask">resetStartReplicationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCdcStartPosition` <a name="resetCdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition"></a>

```typescript
public resetCdcStartPosition(): void
```

##### `resetCdcStartTime` <a name="resetCdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime"></a>

```typescript
public resetCdcStartTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReplicationTaskSettings` <a name="resetReplicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings"></a>

```typescript
public resetReplicationTaskSettings(): void
```

##### `resetStartReplicationTask` <a name="resetStartReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetStartReplicationTask"></a>

```typescript
public resetStartReplicationTask(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct"></a>

```typescript
import { dmsReplicationTask } from '@cdktf/provider-aws'

dmsReplicationTask.DmsReplicationTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement"></a>

```typescript
import { dmsReplicationTask } from '@cdktf/provider-aws'

dmsReplicationTask.DmsReplicationTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource"></a>

```typescript
import { dmsReplicationTask } from '@cdktf/provider-aws'

dmsReplicationTask.DmsReplicationTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn">replicationTaskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput">cdcStartPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput">cdcStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput">migrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput">replicationInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdInput">replicationTaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput">replicationTaskSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput">sourceEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTaskInput">startReplicationTaskInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput">tableMappingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput">targetEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition">cdcStartPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime">cdcStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationType">migrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskId">replicationTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings">replicationTaskSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTask">startReplicationTask</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappings">tableMappings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn">targetEndpointArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `replicationTaskArn`<sup>Required</sup> <a name="replicationTaskArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn"></a>

```typescript
public readonly replicationTaskArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `cdcStartPositionInput`<sup>Optional</sup> <a name="cdcStartPositionInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput"></a>

```typescript
public readonly cdcStartPositionInput: string;
```

- *Type:* string

---

##### `cdcStartTimeInput`<sup>Optional</sup> <a name="cdcStartTimeInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput"></a>

```typescript
public readonly cdcStartTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `migrationTypeInput`<sup>Optional</sup> <a name="migrationTypeInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput"></a>

```typescript
public readonly migrationTypeInput: string;
```

- *Type:* string

---

##### `replicationInstanceArnInput`<sup>Optional</sup> <a name="replicationInstanceArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput"></a>

```typescript
public readonly replicationInstanceArnInput: string;
```

- *Type:* string

---

##### `replicationTaskIdInput`<sup>Optional</sup> <a name="replicationTaskIdInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdInput"></a>

```typescript
public readonly replicationTaskIdInput: string;
```

- *Type:* string

---

##### `replicationTaskSettingsInput`<sup>Optional</sup> <a name="replicationTaskSettingsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput"></a>

```typescript
public readonly replicationTaskSettingsInput: string;
```

- *Type:* string

---

##### `sourceEndpointArnInput`<sup>Optional</sup> <a name="sourceEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput"></a>

```typescript
public readonly sourceEndpointArnInput: string;
```

- *Type:* string

---

##### `startReplicationTaskInput`<sup>Optional</sup> <a name="startReplicationTaskInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTaskInput"></a>

```typescript
public readonly startReplicationTaskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tableMappingsInput`<sup>Optional</sup> <a name="tableMappingsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput"></a>

```typescript
public readonly tableMappingsInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetEndpointArnInput`<sup>Optional</sup> <a name="targetEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput"></a>

```typescript
public readonly targetEndpointArnInput: string;
```

- *Type:* string

---

##### `cdcStartPosition`<sup>Required</sup> <a name="cdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition"></a>

```typescript
public readonly cdcStartPosition: string;
```

- *Type:* string

---

##### `cdcStartTime`<sup>Required</sup> <a name="cdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime"></a>

```typescript
public readonly cdcStartTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationType"></a>

```typescript
public readonly migrationType: string;
```

- *Type:* string

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn"></a>

```typescript
public readonly replicationInstanceArn: string;
```

- *Type:* string

---

##### `replicationTaskId`<sup>Required</sup> <a name="replicationTaskId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskId"></a>

```typescript
public readonly replicationTaskId: string;
```

- *Type:* string

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="replicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings"></a>

```typescript
public readonly replicationTaskSettings: string;
```

- *Type:* string

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn"></a>

```typescript
public readonly sourceEndpointArn: string;
```

- *Type:* string

---

##### `startReplicationTask`<sup>Required</sup> <a name="startReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTask"></a>

```typescript
public readonly startReplicationTask: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappings"></a>

```typescript
public readonly tableMappings: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn"></a>

```typescript
public readonly targetEndpointArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationTaskConfig <a name="DmsReplicationTaskConfig" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.Initializer"></a>

```typescript
import { dmsReplicationTask } from '@cdktf/provider-aws'

const dmsReplicationTaskConfig: dmsReplicationTask.DmsReplicationTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType">migrationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#migration_type DmsReplicationTask#migration_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskId">replicationTaskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings">tableMappings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn">targetEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition">cdcStartPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime">cdcStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#id DmsReplicationTask#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings">replicationTaskSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.startReplicationTask">startReplicationTask</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags_all DmsReplicationTask#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType"></a>

```typescript
public readonly migrationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#migration_type DmsReplicationTask#migration_type}.

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn"></a>

```typescript
public readonly replicationInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}.

---

##### `replicationTaskId`<sup>Required</sup> <a name="replicationTaskId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskId"></a>

```typescript
public readonly replicationTaskId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}.

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn"></a>

```typescript
public readonly sourceEndpointArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}.

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings"></a>

```typescript
public readonly tableMappings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}.

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn"></a>

```typescript
public readonly targetEndpointArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}.

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="cdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition"></a>

```typescript
public readonly cdcStartPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}.

---

##### `cdcStartTime`<sup>Optional</sup> <a name="cdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime"></a>

```typescript
public readonly cdcStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#id DmsReplicationTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicationTaskSettings`<sup>Optional</sup> <a name="replicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings"></a>

```typescript
public readonly replicationTaskSettings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}.

---

##### `startReplicationTask`<sup>Optional</sup> <a name="startReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.startReplicationTask"></a>

```typescript
public readonly startReplicationTask: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags_all DmsReplicationTask#tags_all}.

---



