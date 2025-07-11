# `docdbCluster` Submodule <a name="`docdbCluster` Submodule" id="@cdktf/provider-aws.docdbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbCluster <a name="DocdbCluster" id="@cdktf/provider-aws.docdbCluster.DocdbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster aws_docdb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

new docdbCluster.DocdbCluster(scope: Construct, id: string, config?: DocdbClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig">DocdbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig">DocdbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.putRestoreToPointInTime">putRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAllowMajorVersionUpgrade">resetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifier">resetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifierPrefix">resetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterMembers">resetClusterMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbClusterParameterGroupName">resetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbSubnetGroupName">resetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEnabledCloudwatchLogsExports">resetEnabledCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetGlobalClusterIdentifier">resetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetManageMasterUserPassword">resetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPassword">resetMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWo">resetMasterPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWoVersion">resetMasterPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterUsername">resetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRestoreToPointInTime">resetRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSkipFinalSnapshot">resetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRestoreToPointInTime` <a name="putRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putRestoreToPointInTime"></a>

```typescript
public putRestoreToPointInTime(value: DocdbClusterRestoreToPointInTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putRestoreToPointInTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: DocdbClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a>

---

##### `resetAllowMajorVersionUpgrade` <a name="resetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAllowMajorVersionUpgrade"></a>

```typescript
public resetAllowMajorVersionUpgrade(): void
```

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetApplyImmediately"></a>

```typescript
public resetApplyImmediately(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetBackupRetentionPeriod"></a>

```typescript
public resetBackupRetentionPeriod(): void
```

##### `resetClusterIdentifier` <a name="resetClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifier"></a>

```typescript
public resetClusterIdentifier(): void
```

##### `resetClusterIdentifierPrefix` <a name="resetClusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifierPrefix"></a>

```typescript
public resetClusterIdentifierPrefix(): void
```

##### `resetClusterMembers` <a name="resetClusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterMembers"></a>

```typescript
public resetClusterMembers(): void
```

##### `resetDbClusterParameterGroupName` <a name="resetDbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbClusterParameterGroupName"></a>

```typescript
public resetDbClusterParameterGroupName(): void
```

##### `resetDbSubnetGroupName` <a name="resetDbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbSubnetGroupName"></a>

```typescript
public resetDbSubnetGroupName(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEnabledCloudwatchLogsExports` <a name="resetEnabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEnabledCloudwatchLogsExports"></a>

```typescript
public resetEnabledCloudwatchLogsExports(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetFinalSnapshotIdentifier"></a>

```typescript
public resetFinalSnapshotIdentifier(): void
```

##### `resetGlobalClusterIdentifier` <a name="resetGlobalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetGlobalClusterIdentifier"></a>

```typescript
public resetGlobalClusterIdentifier(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetManageMasterUserPassword` <a name="resetManageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetManageMasterUserPassword"></a>

```typescript
public resetManageMasterUserPassword(): void
```

##### `resetMasterPassword` <a name="resetMasterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPassword"></a>

```typescript
public resetMasterPassword(): void
```

##### `resetMasterPasswordWo` <a name="resetMasterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWo"></a>

```typescript
public resetMasterPasswordWo(): void
```

##### `resetMasterPasswordWoVersion` <a name="resetMasterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWoVersion"></a>

```typescript
public resetMasterPasswordWoVersion(): void
```

##### `resetMasterUsername` <a name="resetMasterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterUsername"></a>

```typescript
public resetMasterUsername(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredBackupWindow"></a>

```typescript
public resetPreferredBackupWindow(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRestoreToPointInTime` <a name="resetRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRestoreToPointInTime"></a>

```typescript
public resetRestoreToPointInTime(): void
```

##### `resetSkipFinalSnapshot` <a name="resetSkipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSkipFinalSnapshot"></a>

```typescript
public resetSkipFinalSnapshot(): void
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSnapshotIdentifier"></a>

```typescript
public resetSnapshotIdentifier(): void
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageEncrypted"></a>

```typescript
public resetStorageEncrypted(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DocdbCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isConstruct"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

docdbCluster.DocdbCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformElement"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

docdbCluster.DocdbCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformResource"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

docdbCluster.DocdbCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

docdbCluster.DocdbCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DocdbCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocdbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocdbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DocdbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterResourceId">clusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList">DocdbClusterMasterUserSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.readerEndpoint">readerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTime">restoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference">DocdbClusterRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference">DocdbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgradeInput">allowMajorVersionUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefixInput">clusterIdentifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembersInput">clusterMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupNameInput">dbClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupNameInput">dbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExportsInput">enabledCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifierInput">globalClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPasswordInput">manageMasterUserPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordInput">masterPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoInput">masterPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersionInput">masterPasswordWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsernameInput">masterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTimeInput">restoreToPointInTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshotInput">skipFinalSnapshotInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembers">clusterMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPassword">masterPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWo">masterPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersion">masterPasswordWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsername">masterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterResourceId"></a>

```typescript
public readonly clusterResourceId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `masterUserSecret`<sup>Required</sup> <a name="masterUserSecret" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUserSecret"></a>

```typescript
public readonly masterUserSecret: DocdbClusterMasterUserSecretList;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList">DocdbClusterMasterUserSecretList</a>

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.readerEndpoint"></a>

```typescript
public readonly readerEndpoint: string;
```

- *Type:* string

---

##### `restoreToPointInTime`<sup>Required</sup> <a name="restoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTime"></a>

```typescript
public readonly restoreToPointInTime: DocdbClusterRestoreToPointInTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference">DocdbClusterRestoreToPointInTimeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeouts"></a>

```typescript
public readonly timeouts: DocdbClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference">DocdbClusterTimeoutsOutputReference</a>

---

##### `allowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="allowMajorVersionUpgradeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgradeInput"></a>

```typescript
public readonly allowMajorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediatelyInput"></a>

```typescript
public readonly applyImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriodInput"></a>

```typescript
public readonly backupRetentionPeriodInput: number;
```

- *Type:* number

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifierPrefixInput`<sup>Optional</sup> <a name="clusterIdentifierPrefixInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefixInput"></a>

```typescript
public readonly clusterIdentifierPrefixInput: string;
```

- *Type:* string

---

##### `clusterMembersInput`<sup>Optional</sup> <a name="clusterMembersInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembersInput"></a>

```typescript
public readonly clusterMembersInput: string[];
```

- *Type:* string[]

---

##### `dbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="dbClusterParameterGroupNameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupNameInput"></a>

```typescript
public readonly dbClusterParameterGroupNameInput: string;
```

- *Type:* string

---

##### `dbSubnetGroupNameInput`<sup>Optional</sup> <a name="dbSubnetGroupNameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupNameInput"></a>

```typescript
public readonly dbSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enabledCloudwatchLogsExportsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExportsInput"></a>

```typescript
public readonly enabledCloudwatchLogsExportsInput: string[];
```

- *Type:* string[]

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifierInput"></a>

```typescript
public readonly finalSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `globalClusterIdentifierInput`<sup>Optional</sup> <a name="globalClusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifierInput"></a>

```typescript
public readonly globalClusterIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `manageMasterUserPasswordInput`<sup>Optional</sup> <a name="manageMasterUserPasswordInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPasswordInput"></a>

```typescript
public readonly manageMasterUserPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterPasswordInput`<sup>Optional</sup> <a name="masterPasswordInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordInput"></a>

```typescript
public readonly masterPasswordInput: string;
```

- *Type:* string

---

##### `masterPasswordWoInput`<sup>Optional</sup> <a name="masterPasswordWoInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoInput"></a>

```typescript
public readonly masterPasswordWoInput: string;
```

- *Type:* string

---

##### `masterPasswordWoVersionInput`<sup>Optional</sup> <a name="masterPasswordWoVersionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersionInput"></a>

```typescript
public readonly masterPasswordWoVersionInput: number;
```

- *Type:* number

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsernameInput"></a>

```typescript
public readonly masterUsernameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindowInput"></a>

```typescript
public readonly preferredBackupWindowInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `restoreToPointInTimeInput`<sup>Optional</sup> <a name="restoreToPointInTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTimeInput"></a>

```typescript
public readonly restoreToPointInTimeInput: DocdbClusterRestoreToPointInTime;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---

##### `skipFinalSnapshotInput`<sup>Optional</sup> <a name="skipFinalSnapshotInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshotInput"></a>

```typescript
public readonly skipFinalSnapshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifierInput"></a>

```typescript
public readonly snapshotIdentifierInput: string;
```

- *Type:* string

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncryptedInput"></a>

```typescript
public readonly storageEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DocdbClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `clusterIdentifierPrefix`<sup>Required</sup> <a name="clusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefix"></a>

```typescript
public readonly clusterIdentifierPrefix: string;
```

- *Type:* string

---

##### `clusterMembers`<sup>Required</sup> <a name="clusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembers"></a>

```typescript
public readonly clusterMembers: string[];
```

- *Type:* string[]

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="dbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupName"></a>

```typescript
public readonly dbClusterParameterGroupName: string;
```

- *Type:* string

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExports"></a>

```typescript
public readonly enabledCloudwatchLogsExports: string[];
```

- *Type:* string[]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `manageMasterUserPassword`<sup>Required</sup> <a name="manageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPassword"></a>

```typescript
public readonly manageMasterUserPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterPassword`<sup>Required</sup> <a name="masterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPassword"></a>

```typescript
public readonly masterPassword: string;
```

- *Type:* string

---

##### `masterPasswordWo`<sup>Required</sup> <a name="masterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWo"></a>

```typescript
public readonly masterPasswordWo: string;
```

- *Type:* string

---

##### `masterPasswordWoVersion`<sup>Required</sup> <a name="masterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersion"></a>

```typescript
public readonly masterPasswordWoVersion: number;
```

- *Type:* number

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `skipFinalSnapshot`<sup>Required</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshot"></a>

```typescript
public readonly skipFinalSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbClusterConfig <a name="DocdbClusterConfig" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

const docdbClusterConfig: docdbCluster.DocdbClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#allow_major_version_upgrade DocdbCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#apply_immediately DocdbCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#availability_zones DocdbCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#backup_retention_period DocdbCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#cluster_identifier DocdbCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterMembers">clusterMembers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#cluster_members DocdbCluster#cluster_members}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#db_subnet_group_name DocdbCluster#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#deletion_protection DocdbCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#engine DocdbCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#engine_version DocdbCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#global_cluster_identifier DocdbCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#id DocdbCluster#id}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#kms_key_id DocdbCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#manage_master_user_password DocdbCluster#manage_master_user_password}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPassword">masterPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#master_password DocdbCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWo">masterPasswordWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#master_password_wo DocdbCluster#master_password_wo}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWoVersion">masterPasswordWoVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#master_password_wo_version DocdbCluster#master_password_wo_version}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterUsername">masterUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#master_username DocdbCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#port DocdbCluster#port}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#preferred_backup_window DocdbCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.restoreToPointInTime">restoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#skip_final_snapshot DocdbCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#snapshot_identifier DocdbCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#storage_encrypted DocdbCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#storage_type DocdbCluster#storage_type}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#tags DocdbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#tags_all DocdbCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#allow_major_version_upgrade DocdbCluster#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#apply_immediately DocdbCluster#apply_immediately}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#availability_zones DocdbCluster#availability_zones}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#backup_retention_period DocdbCluster#backup_retention_period}.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#cluster_identifier DocdbCluster#cluster_identifier}.

---

##### `clusterIdentifierPrefix`<sup>Optional</sup> <a name="clusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifierPrefix"></a>

```typescript
public readonly clusterIdentifierPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}.

---

##### `clusterMembers`<sup>Optional</sup> <a name="clusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterMembers"></a>

```typescript
public readonly clusterMembers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#cluster_members DocdbCluster#cluster_members}.

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="dbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbClusterParameterGroupName"></a>

```typescript
public readonly dbClusterParameterGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}.

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#db_subnet_group_name DocdbCluster#db_subnet_group_name}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#deletion_protection DocdbCluster#deletion_protection}.

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.enabledCloudwatchLogsExports"></a>

```typescript
public readonly enabledCloudwatchLogsExports: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#engine DocdbCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#engine_version DocdbCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}.

---

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.globalClusterIdentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#global_cluster_identifier DocdbCluster#global_cluster_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#id DocdbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#kms_key_id DocdbCluster#kms_key_id}.

---

##### `manageMasterUserPassword`<sup>Optional</sup> <a name="manageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.manageMasterUserPassword"></a>

```typescript
public readonly manageMasterUserPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#manage_master_user_password DocdbCluster#manage_master_user_password}.

---

##### `masterPassword`<sup>Optional</sup> <a name="masterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPassword"></a>

```typescript
public readonly masterPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#master_password DocdbCluster#master_password}.

---

##### `masterPasswordWo`<sup>Optional</sup> <a name="masterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWo"></a>

```typescript
public readonly masterPasswordWo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#master_password_wo DocdbCluster#master_password_wo}.

---

##### `masterPasswordWoVersion`<sup>Optional</sup> <a name="masterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWoVersion"></a>

```typescript
public readonly masterPasswordWoVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#master_password_wo_version DocdbCluster#master_password_wo_version}.

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#master_username DocdbCluster#master_username}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#port DocdbCluster#port}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#preferred_backup_window DocdbCluster#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#region DocdbCluster#region}

---

##### `restoreToPointInTime`<sup>Optional</sup> <a name="restoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.restoreToPointInTime"></a>

```typescript
public readonly restoreToPointInTime: DocdbClusterRestoreToPointInTime;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#restore_to_point_in_time DocdbCluster#restore_to_point_in_time}

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.skipFinalSnapshot"></a>

```typescript
public readonly skipFinalSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#skip_final_snapshot DocdbCluster#skip_final_snapshot}.

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#snapshot_identifier DocdbCluster#snapshot_identifier}.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#storage_encrypted DocdbCluster#storage_encrypted}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#storage_type DocdbCluster#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#tags DocdbCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#tags_all DocdbCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DocdbClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#timeouts DocdbCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}.

---

### DocdbClusterMasterUserSecret <a name="DocdbClusterMasterUserSecret" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

const docdbClusterMasterUserSecret: docdbCluster.DocdbClusterMasterUserSecret = { ... }
```


### DocdbClusterRestoreToPointInTime <a name="DocdbClusterRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

const docdbClusterRestoreToPointInTime: docdbCluster.DocdbClusterRestoreToPointInTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.sourceClusterIdentifier">sourceClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#source_cluster_identifier DocdbCluster#source_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreToTime">restoreToTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#restore_to_time DocdbCluster#restore_to_time}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreType">restoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#restore_type DocdbCluster#restore_type}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#use_latest_restorable_time DocdbCluster#use_latest_restorable_time}. |

---

##### `sourceClusterIdentifier`<sup>Required</sup> <a name="sourceClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.sourceClusterIdentifier"></a>

```typescript
public readonly sourceClusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#source_cluster_identifier DocdbCluster#source_cluster_identifier}.

---

##### `restoreToTime`<sup>Optional</sup> <a name="restoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreToTime"></a>

```typescript
public readonly restoreToTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#restore_to_time DocdbCluster#restore_to_time}.

---

##### `restoreType`<sup>Optional</sup> <a name="restoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreType"></a>

```typescript
public readonly restoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#restore_type DocdbCluster#restore_type}.

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.useLatestRestorableTime"></a>

```typescript
public readonly useLatestRestorableTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#use_latest_restorable_time DocdbCluster#use_latest_restorable_time}.

---

### DocdbClusterTimeouts <a name="DocdbClusterTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

const docdbClusterTimeouts: docdbCluster.DocdbClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#create DocdbCluster#create}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#delete DocdbCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#update DocdbCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#create DocdbCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#delete DocdbCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/docdb_cluster#update DocdbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbClusterMasterUserSecretList <a name="DocdbClusterMasterUserSecretList" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

new docdbCluster.DocdbClusterMasterUserSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.get"></a>

```typescript
public get(index: number): DocdbClusterMasterUserSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DocdbClusterMasterUserSecretOutputReference <a name="DocdbClusterMasterUserSecretOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

new docdbCluster.DocdbClusterMasterUserSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretStatus">secretStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret">DocdbClusterMasterUserSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretStatus`<sup>Required</sup> <a name="secretStatus" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretStatus"></a>

```typescript
public readonly secretStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocdbClusterMasterUserSecret;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret">DocdbClusterMasterUserSecret</a>

---


### DocdbClusterRestoreToPointInTimeOutputReference <a name="DocdbClusterRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

new docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreToTime">resetRestoreToTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreType">resetRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime">resetUseLatestRestorableTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRestoreToTime` <a name="resetRestoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreToTime"></a>

```typescript
public resetRestoreToTime(): void
```

##### `resetRestoreType` <a name="resetRestoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreType"></a>

```typescript
public resetRestoreType(): void
```

##### `resetUseLatestRestorableTime` <a name="resetUseLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```typescript
public resetUseLatestRestorableTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput">restoreToTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput">restoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput">sourceClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">useLatestRestorableTimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTime">restoreToTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreType">restoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier">sourceClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `restoreToTimeInput`<sup>Optional</sup> <a name="restoreToTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput"></a>

```typescript
public readonly restoreToTimeInput: string;
```

- *Type:* string

---

##### `restoreTypeInput`<sup>Optional</sup> <a name="restoreTypeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput"></a>

```typescript
public readonly restoreTypeInput: string;
```

- *Type:* string

---

##### `sourceClusterIdentifierInput`<sup>Optional</sup> <a name="sourceClusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput"></a>

```typescript
public readonly sourceClusterIdentifierInput: string;
```

- *Type:* string

---

##### `useLatestRestorableTimeInput`<sup>Optional</sup> <a name="useLatestRestorableTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```typescript
public readonly useLatestRestorableTimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restoreToTime`<sup>Required</sup> <a name="restoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTime"></a>

```typescript
public readonly restoreToTime: string;
```

- *Type:* string

---

##### `restoreType`<sup>Required</sup> <a name="restoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreType"></a>

```typescript
public readonly restoreType: string;
```

- *Type:* string

---

##### `sourceClusterIdentifier`<sup>Required</sup> <a name="sourceClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier"></a>

```typescript
public readonly sourceClusterIdentifier: string;
```

- *Type:* string

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```typescript
public readonly useLatestRestorableTime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocdbClusterRestoreToPointInTime;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---


### DocdbClusterTimeoutsOutputReference <a name="DocdbClusterTimeoutsOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { docdbCluster } from '@cdktf/provider-aws'

new docdbCluster.DocdbClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocdbClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a>

---



