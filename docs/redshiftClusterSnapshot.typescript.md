# `aws_redshift_cluster_snapshot`

Refer to the Terraform Registory for docs: [`aws_redshift_cluster_snapshot`](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot).

# `redshiftClusterSnapshot` Submodule <a name="`redshiftClusterSnapshot` Submodule" id="@cdktf/provider-aws.redshiftClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftClusterSnapshot <a name="RedshiftClusterSnapshot" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot aws_redshift_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer"></a>

```typescript
import { redshiftClusterSnapshot } from '@cdktf/provider-aws'

new redshiftClusterSnapshot.RedshiftClusterSnapshot(scope: Construct, id: string, config: RedshiftClusterSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig">RedshiftClusterSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig">RedshiftClusterSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetManualSnapshotRetentionPeriod">resetManualSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManualSnapshotRetentionPeriod` <a name="resetManualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetManualSnapshotRetentionPeriod"></a>

```typescript
public resetManualSnapshotRetentionPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftClusterSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isConstruct"></a>

```typescript
import { redshiftClusterSnapshot } from '@cdktf/provider-aws'

redshiftClusterSnapshot.RedshiftClusterSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformElement"></a>

```typescript
import { redshiftClusterSnapshot } from '@cdktf/provider-aws'

redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformResource"></a>

```typescript
import { redshiftClusterSnapshot } from '@cdktf/provider-aws'

redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport"></a>

```typescript
import { redshiftClusterSnapshot } from '@cdktf/provider-aws'

redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RedshiftClusterSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftClusterSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.manualSnapshotRetentionPeriodInput">manualSnapshotRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `manualSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriodInput" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.manualSnapshotRetentionPeriodInput"></a>

```typescript
public readonly manualSnapshotRetentionPeriodInput: number;
```

- *Type:* number

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.snapshotIdentifierInput"></a>

```typescript
public readonly snapshotIdentifierInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.manualSnapshotRetentionPeriod"></a>

```typescript
public readonly manualSnapshotRetentionPeriod: number;
```

- *Type:* number

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterSnapshotConfig <a name="RedshiftClusterSnapshotConfig" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.Initializer"></a>

```typescript
import { redshiftClusterSnapshot } from '@cdktf/provider-aws'

const redshiftClusterSnapshotConfig: redshiftClusterSnapshot.RedshiftClusterSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#cluster_identifier RedshiftClusterSnapshot#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#snapshot_identifier RedshiftClusterSnapshot#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#id RedshiftClusterSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#manual_snapshot_retention_period RedshiftClusterSnapshot#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#tags RedshiftClusterSnapshot#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#tags_all RedshiftClusterSnapshot#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#cluster_identifier RedshiftClusterSnapshot#cluster_identifier}.

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#snapshot_identifier RedshiftClusterSnapshot#snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#id RedshiftClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.manualSnapshotRetentionPeriod"></a>

```typescript
public readonly manualSnapshotRetentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#manual_snapshot_retention_period RedshiftClusterSnapshot#manual_snapshot_retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#tags RedshiftClusterSnapshot#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/redshift_cluster_snapshot#tags_all RedshiftClusterSnapshot#tags_all}.

---



