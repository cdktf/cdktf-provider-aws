# `elasticacheReplicationGroup` Submodule <a name="`elasticacheReplicationGroup` Submodule" id="@cdktf/provider-aws.elasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReplicationGroup <a name="ElasticacheReplicationGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group aws_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

new elasticacheReplicationGroup.ElasticacheReplicationGroup(scope: Construct, id: string, config: ElasticacheReplicationGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig">ElasticacheReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig">ElasticacheReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode">putClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration">putLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled">resetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled">resetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode">resetClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled">resetDataTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId">resetGlobalReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfiguration">resetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled">resetMultiAzEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumberCacheClusters">resetNumberCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters">resetNumCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups">resetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAzs">resetPreferredCacheClusterAzs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup">resetReplicasPerNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupDescription">resetReplicationGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupNames">resetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns">resetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow">resetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSubnetGroupName">resetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled">resetTransitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds">resetUserGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putClusterMode` <a name="putClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode"></a>

```typescript
public putClusterMode(value: ElasticacheReplicationGroupClusterMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---

##### `putLogDeliveryConfiguration` <a name="putLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration"></a>

```typescript
public putLogDeliveryConfiguration(value: IResolvable | ElasticacheReplicationGroupLogDeliveryConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticacheReplicationGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a>

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetApplyImmediately"></a>

```typescript
public resetApplyImmediately(): void
```

##### `resetAtRestEncryptionEnabled` <a name="resetAtRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled"></a>

```typescript
public resetAtRestEncryptionEnabled(): void
```

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken"></a>

```typescript
public resetAuthToken(): void
```

##### `resetAutomaticFailoverEnabled` <a name="resetAutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled"></a>

```typescript
public resetAutomaticFailoverEnabled(): void
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade"></a>

```typescript
public resetAutoMinorVersionUpgrade(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetClusterMode` <a name="resetClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode"></a>

```typescript
public resetClusterMode(): void
```

##### `resetDataTieringEnabled` <a name="resetDataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled"></a>

```typescript
public resetDataTieringEnabled(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetFinalSnapshotIdentifier"></a>

```typescript
public resetFinalSnapshotIdentifier(): void
```

##### `resetGlobalReplicationGroupId` <a name="resetGlobalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId"></a>

```typescript
public resetGlobalReplicationGroupId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLogDeliveryConfiguration` <a name="resetLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfiguration"></a>

```typescript
public resetLogDeliveryConfiguration(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMultiAzEnabled` <a name="resetMultiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled"></a>

```typescript
public resetMultiAzEnabled(): void
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeType"></a>

```typescript
public resetNodeType(): void
```

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn"></a>

```typescript
public resetNotificationTopicArn(): void
```

##### `resetNumberCacheClusters` <a name="resetNumberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumberCacheClusters"></a>

```typescript
public resetNumberCacheClusters(): void
```

##### `resetNumCacheClusters` <a name="resetNumCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters"></a>

```typescript
public resetNumCacheClusters(): void
```

##### `resetNumNodeGroups` <a name="resetNumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups"></a>

```typescript
public resetNumNodeGroups(): void
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetParameterGroupName"></a>

```typescript
public resetParameterGroupName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferredCacheClusterAzs` <a name="resetPreferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAzs"></a>

```typescript
public resetPreferredCacheClusterAzs(): void
```

##### `resetReplicasPerNodeGroup` <a name="resetReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup"></a>

```typescript
public resetReplicasPerNodeGroup(): void
```

##### `resetReplicationGroupDescription` <a name="resetReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupDescription"></a>

```typescript
public resetReplicationGroupDescription(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSecurityGroupNames` <a name="resetSecurityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupNames"></a>

```typescript
public resetSecurityGroupNames(): void
```

##### `resetSnapshotArns` <a name="resetSnapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns"></a>

```typescript
public resetSnapshotArns(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit"></a>

```typescript
public resetSnapshotRetentionLimit(): void
```

##### `resetSnapshotWindow` <a name="resetSnapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow"></a>

```typescript
public resetSnapshotWindow(): void
```

##### `resetSubnetGroupName` <a name="resetSubnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSubnetGroupName"></a>

```typescript
public resetSubnetGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitEncryptionEnabled` <a name="resetTransitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled"></a>

```typescript
public resetTransitEncryptionEnabled(): void
```

##### `resetUserGroupIds` <a name="resetUserGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds"></a>

```typescript
public resetUserGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterEnabled">clusterEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode">clusterMode</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference">ElasticacheReplicationGroupClusterModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndpointAddress">configurationEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionActual">engineVersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList">ElasticacheReplicationGroupLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.memberClusters">memberClusters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndpointAddress">primaryEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndpointAddress">readerEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference">ElasticacheReplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput">atRestEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput">authTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput">automaticFailoverEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput">clusterModeInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput">dataTieringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput">globalReplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationInput">logDeliveryConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput">multiAzEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClustersInput">numberCacheClustersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput">numCacheClustersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput">numNodeGroupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzsInput">preferredCacheClusterAzsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput">replicasPerNodeGroupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput">replicationGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNamesInput">securityGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput">snapshotArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput">snapshotWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput">transitEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput">userGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken">authToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled">multiAzEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClusters">numberCacheClusters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters">numCacheClusters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups">numNodeGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzs">preferredCacheClusterAzs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNames">securityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterEnabled`<sup>Required</sup> <a name="clusterEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterEnabled"></a>

```typescript
public readonly clusterEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clusterMode`<sup>Required</sup> <a name="clusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode"></a>

```typescript
public readonly clusterMode: ElasticacheReplicationGroupClusterModeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference">ElasticacheReplicationGroupClusterModeOutputReference</a>

---

##### `configurationEndpointAddress`<sup>Required</sup> <a name="configurationEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndpointAddress"></a>

```typescript
public readonly configurationEndpointAddress: string;
```

- *Type:* string

---

##### `engineVersionActual`<sup>Required</sup> <a name="engineVersionActual" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionActual"></a>

```typescript
public readonly engineVersionActual: string;
```

- *Type:* string

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: ElasticacheReplicationGroupLogDeliveryConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList">ElasticacheReplicationGroupLogDeliveryConfigurationList</a>

---

##### `memberClusters`<sup>Required</sup> <a name="memberClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.memberClusters"></a>

```typescript
public readonly memberClusters: string[];
```

- *Type:* string[]

---

##### `primaryEndpointAddress`<sup>Required</sup> <a name="primaryEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndpointAddress"></a>

```typescript
public readonly primaryEndpointAddress: string;
```

- *Type:* string

---

##### `readerEndpointAddress`<sup>Required</sup> <a name="readerEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndpointAddress"></a>

```typescript
public readonly readerEndpointAddress: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticacheReplicationGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference">ElasticacheReplicationGroupTimeoutsOutputReference</a>

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediatelyInput"></a>

```typescript
public readonly applyImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `atRestEncryptionEnabledInput`<sup>Optional</sup> <a name="atRestEncryptionEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput"></a>

```typescript
public readonly atRestEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput"></a>

```typescript
public readonly authTokenInput: string;
```

- *Type:* string

---

##### `automaticFailoverEnabledInput`<sup>Optional</sup> <a name="automaticFailoverEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput"></a>

```typescript
public readonly automaticFailoverEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput"></a>

```typescript
public readonly autoMinorVersionUpgradeInput: string;
```

- *Type:* string

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `clusterModeInput`<sup>Optional</sup> <a name="clusterModeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput"></a>

```typescript
public readonly clusterModeInput: ElasticacheReplicationGroupClusterMode;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---

##### `dataTieringEnabledInput`<sup>Optional</sup> <a name="dataTieringEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput"></a>

```typescript
public readonly dataTieringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifierInput"></a>

```typescript
public readonly finalSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `globalReplicationGroupIdInput`<sup>Optional</sup> <a name="globalReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput"></a>

```typescript
public readonly globalReplicationGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `logDeliveryConfigurationInput`<sup>Optional</sup> <a name="logDeliveryConfigurationInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationInput"></a>

```typescript
public readonly logDeliveryConfigurationInput: IResolvable | ElasticacheReplicationGroupLogDeliveryConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>[]

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: string;
```

- *Type:* string

---

##### `multiAzEnabledInput`<sup>Optional</sup> <a name="multiAzEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput"></a>

```typescript
public readonly multiAzEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput"></a>

```typescript
public readonly notificationTopicArnInput: string;
```

- *Type:* string

---

##### `numberCacheClustersInput`<sup>Optional</sup> <a name="numberCacheClustersInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClustersInput"></a>

```typescript
public readonly numberCacheClustersInput: number;
```

- *Type:* number

---

##### `numCacheClustersInput`<sup>Optional</sup> <a name="numCacheClustersInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput"></a>

```typescript
public readonly numCacheClustersInput: number;
```

- *Type:* number

---

##### `numNodeGroupsInput`<sup>Optional</sup> <a name="numNodeGroupsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput"></a>

```typescript
public readonly numNodeGroupsInput: number;
```

- *Type:* number

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupNameInput"></a>

```typescript
public readonly parameterGroupNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preferredCacheClusterAzsInput`<sup>Optional</sup> <a name="preferredCacheClusterAzsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzsInput"></a>

```typescript
public readonly preferredCacheClusterAzsInput: string[];
```

- *Type:* string[]

---

##### `replicasPerNodeGroupInput`<sup>Optional</sup> <a name="replicasPerNodeGroupInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput"></a>

```typescript
public readonly replicasPerNodeGroupInput: number;
```

- *Type:* number

---

##### `replicationGroupDescriptionInput`<sup>Optional</sup> <a name="replicationGroupDescriptionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput"></a>

```typescript
public readonly replicationGroupDescriptionInput: string;
```

- *Type:* string

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```typescript
public readonly replicationGroupIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupNamesInput`<sup>Optional</sup> <a name="securityGroupNamesInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNamesInput"></a>

```typescript
public readonly securityGroupNamesInput: string[];
```

- *Type:* string[]

---

##### `snapshotArnsInput`<sup>Optional</sup> <a name="snapshotArnsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput"></a>

```typescript
public readonly snapshotArnsInput: string[];
```

- *Type:* string[]

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput"></a>

```typescript
public readonly snapshotRetentionLimitInput: number;
```

- *Type:* number

---

##### `snapshotWindowInput`<sup>Optional</sup> <a name="snapshotWindowInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput"></a>

```typescript
public readonly snapshotWindowInput: string;
```

- *Type:* string

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupNameInput"></a>

```typescript
public readonly subnetGroupNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ElasticacheReplicationGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a> | cdktf.IResolvable

---

##### `transitEncryptionEnabledInput`<sup>Optional</sup> <a name="transitEncryptionEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput"></a>

```typescript
public readonly transitEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userGroupIdsInput`<sup>Optional</sup> <a name="userGroupIdsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput"></a>

```typescript
public readonly userGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```typescript
public readonly atRestEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

---

##### `automaticFailoverEnabled`<sup>Required</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `dataTieringEnabled`<sup>Required</sup> <a name="dataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```typescript
public readonly dataTieringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="globalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```typescript
public readonly globalReplicationGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

---

##### `multiAzEnabled`<sup>Required</sup> <a name="multiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled"></a>

```typescript
public readonly multiAzEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `numberCacheClusters`<sup>Required</sup> <a name="numberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClusters"></a>

```typescript
public readonly numberCacheClusters: number;
```

- *Type:* number

---

##### `numCacheClusters`<sup>Required</sup> <a name="numCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters"></a>

```typescript
public readonly numCacheClusters: number;
```

- *Type:* number

---

##### `numNodeGroups`<sup>Required</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups"></a>

```typescript
public readonly numNodeGroups: number;
```

- *Type:* number

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredCacheClusterAzs`<sup>Required</sup> <a name="preferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzs"></a>

```typescript
public readonly preferredCacheClusterAzs: string[];
```

- *Type:* string[]

---

##### `replicasPerNodeGroup`<sup>Required</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```typescript
public readonly replicasPerNodeGroup: number;
```

- *Type:* number

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="replicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```typescript
public readonly replicationGroupDescription: string;
```

- *Type:* string

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `securityGroupNames`<sup>Required</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNames"></a>

```typescript
public readonly securityGroupNames: string[];
```

- *Type:* string[]

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```typescript
public readonly transitEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userGroupIds`<sup>Required</sup> <a name="userGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReplicationGroupClusterMode <a name="ElasticacheReplicationGroupClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

const elasticacheReplicationGroupClusterMode: elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.numNodeGroups">numNodeGroups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}. |

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.numNodeGroups"></a>

```typescript
public readonly numNodeGroups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}.

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.replicasPerNodeGroup"></a>

```typescript
public readonly replicasPerNodeGroup: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}.

---

### ElasticacheReplicationGroupConfig <a name="ElasticacheReplicationGroupConfig" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

const elasticacheReplicationGroupConfig: elasticacheReplicationGroup.ElasticacheReplicationGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken">authToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode">clusterMode</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | cluster_mode block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#description ElasticacheReplicationGroup#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#id ElasticacheReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>[]</code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled">multiAzEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numberCacheClusters">numberCacheClusters</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters">numCacheClusters</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups">numNodeGroups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#port ElasticacheReplicationGroup#port}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAzs">preferredCacheClusterAzs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#preferred_cache_cluster_azs ElasticacheReplicationGroup#preferred_cache_cluster_azs}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupNames">securityGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}.

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled"></a>

```typescript
public readonly atRestEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}.

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}.

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```typescript
public readonly automaticFailoverEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}.

---

##### `clusterMode`<sup>Optional</sup> <a name="clusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode"></a>

```typescript
public readonly clusterMode: ElasticacheReplicationGroupClusterMode;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

cluster_mode block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `dataTieringEnabled`<sup>Optional</sup> <a name="dataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled"></a>

```typescript
public readonly dataTieringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#description ElasticacheReplicationGroup#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}.

---

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="globalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId"></a>

```typescript
public readonly globalReplicationGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#id ElasticacheReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}.

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: IResolvable | ElasticacheReplicationGroupLogDeliveryConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>[]

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_delivery_configuration ElasticacheReplicationGroup#log_delivery_configuration}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}.

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="multiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled"></a>

```typescript
public readonly multiAzEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}.

---

##### `numberCacheClusters`<sup>Optional</sup> <a name="numberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numberCacheClusters"></a>

```typescript
public readonly numberCacheClusters: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}.

---

##### `numCacheClusters`<sup>Optional</sup> <a name="numCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters"></a>

```typescript
public readonly numCacheClusters: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}.

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups"></a>

```typescript
public readonly numNodeGroups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#port ElasticacheReplicationGroup#port}.

---

##### `preferredCacheClusterAzs`<sup>Optional</sup> <a name="preferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAzs"></a>

```typescript
public readonly preferredCacheClusterAzs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#preferred_cache_cluster_azs ElasticacheReplicationGroup#preferred_cache_cluster_azs}.

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup"></a>

```typescript
public readonly replicasPerNodeGroup: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}.

---

##### `replicationGroupDescription`<sup>Optional</sup> <a name="replicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription"></a>

```typescript
public readonly replicationGroupDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}.

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupNames"></a>

```typescript
public readonly securityGroupNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}.

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}.

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticacheReplicationGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#timeouts ElasticacheReplicationGroup#timeouts}

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled"></a>

```typescript
public readonly transitEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}.

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}.

---

### ElasticacheReplicationGroupLogDeliveryConfiguration <a name="ElasticacheReplicationGroupLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

const elasticacheReplicationGroupLogDeliveryConfiguration: elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination ElasticacheReplicationGroup#destination}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logFormat">logFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination ElasticacheReplicationGroup#destination}.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}.

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}.

---

### ElasticacheReplicationGroupTimeouts <a name="ElasticacheReplicationGroupTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

const elasticacheReplicationGroupTimeouts: elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#create ElasticacheReplicationGroup#create}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#delete ElasticacheReplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#update ElasticacheReplicationGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#create ElasticacheReplicationGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#delete ElasticacheReplicationGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#update ElasticacheReplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReplicationGroupClusterModeOutputReference <a name="ElasticacheReplicationGroupClusterModeOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

new elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetNumNodeGroups">resetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetReplicasPerNodeGroup">resetReplicasPerNodeGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumNodeGroups` <a name="resetNumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetNumNodeGroups"></a>

```typescript
public resetNumNodeGroups(): void
```

##### `resetReplicasPerNodeGroup` <a name="resetReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetReplicasPerNodeGroup"></a>

```typescript
public resetReplicasPerNodeGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroupsInput">numNodeGroupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroupInput">replicasPerNodeGroupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroups">numNodeGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numNodeGroupsInput`<sup>Optional</sup> <a name="numNodeGroupsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroupsInput"></a>

```typescript
public readonly numNodeGroupsInput: number;
```

- *Type:* number

---

##### `replicasPerNodeGroupInput`<sup>Optional</sup> <a name="replicasPerNodeGroupInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroupInput"></a>

```typescript
public readonly replicasPerNodeGroupInput: number;
```

- *Type:* number

---

##### `numNodeGroups`<sup>Required</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroups"></a>

```typescript
public readonly numNodeGroups: number;
```

- *Type:* number

---

##### `replicasPerNodeGroup`<sup>Required</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroup"></a>

```typescript
public readonly replicasPerNodeGroup: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheReplicationGroupClusterMode;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationList <a name="ElasticacheReplicationGroupLogDeliveryConfigurationList" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

new elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get"></a>

```typescript
public get(index: number): ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheReplicationGroupLogDeliveryConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>[]

---


### ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

new elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheReplicationGroupLogDeliveryConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a> | cdktf.IResolvable

---


### ElasticacheReplicationGroupTimeoutsOutputReference <a name="ElasticacheReplicationGroupTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticacheReplicationGroup } from '@cdktf/provider-aws'

new elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheReplicationGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a> | cdktf.IResolvable

---



