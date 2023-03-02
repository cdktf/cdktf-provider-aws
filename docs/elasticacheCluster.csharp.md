# `elasticacheCluster` Submodule <a name="`elasticacheCluster` Submodule" id="@cdktf/provider-aws.elasticacheCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheCluster <a name="ElasticacheCluster" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster aws_elasticache_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheCluster(Construct Scope, string Id, ElasticacheClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig">ElasticacheClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig">ElasticacheClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration">PutLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAzMode">ResetAzMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetIpDiscovery">ResetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetLogDeliveryConfiguration">ResetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNumCacheNodes">ResetNumCacheNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOutpostMode">ResetOutpostMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredAvailabilityZones">ResetPreferredAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredOutpostArn">ResetPreferredOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetReplicationGroupId">ResetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupNames">ResetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSubnetGroupName">ResetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLogDeliveryConfiguration` <a name="PutLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration"></a>

```csharp
private void PutLogDeliveryConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAzMode` <a name="ResetAzMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAzMode"></a>

```csharp
private void ResetAzMode()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetFinalSnapshotIdentifier"></a>

```csharp
private void ResetFinalSnapshotIdentifier()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpDiscovery` <a name="ResetIpDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetIpDiscovery"></a>

```csharp
private void ResetIpDiscovery()
```

##### `ResetLogDeliveryConfiguration` <a name="ResetLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetLogDeliveryConfiguration"></a>

```csharp
private void ResetLogDeliveryConfiguration()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNodeType"></a>

```csharp
private void ResetNodeType()
```

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNotificationTopicArn"></a>

```csharp
private void ResetNotificationTopicArn()
```

##### `ResetNumCacheNodes` <a name="ResetNumCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNumCacheNodes"></a>

```csharp
private void ResetNumCacheNodes()
```

##### `ResetOutpostMode` <a name="ResetOutpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOutpostMode"></a>

```csharp
private void ResetOutpostMode()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetParameterGroupName"></a>

```csharp
private void ResetParameterGroupName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreferredAvailabilityZones` <a name="ResetPreferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredAvailabilityZones"></a>

```csharp
private void ResetPreferredAvailabilityZones()
```

##### `ResetPreferredOutpostArn` <a name="ResetPreferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredOutpostArn"></a>

```csharp
private void ResetPreferredOutpostArn()
```

##### `ResetReplicationGroupId` <a name="ResetReplicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetReplicationGroupId"></a>

```csharp
private void ResetReplicationGroupId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSecurityGroupNames` <a name="ResetSecurityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupNames"></a>

```csharp
private void ResetSecurityGroupNames()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotArns"></a>

```csharp
private void ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotName"></a>

```csharp
private void ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotRetentionLimit"></a>

```csharp
private void ResetSnapshotRetentionLimit()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotWindow"></a>

```csharp
private void ResetSnapshotWindow()
```

##### `ResetSubnetGroupName` <a name="ResetSubnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSubnetGroupName"></a>

```csharp
private void ResetSubnetGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cacheNodes">CacheNodes</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList">ElasticacheClusterCacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterAddress">ClusterAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.configurationEndpoint">ConfigurationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionActual">EngineVersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList">ElasticacheClusterLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azModeInput">AzModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscoveryInput">IpDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfigurationInput">LogDeliveryConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodesInput">NumCacheNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostModeInput">OutpostModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZonesInput">PreferredAvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArnInput">PreferredOutpostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNamesInput">SecurityGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupNameInput">SubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azMode">AzMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscovery">IpDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodes">NumCacheNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostMode">OutpostMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArn">PreferredOutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNames">SecurityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArns">SnapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CacheNodes`<sup>Required</sup> <a name="CacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cacheNodes"></a>

```csharp
public ElasticacheClusterCacheNodesList CacheNodes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList">ElasticacheClusterCacheNodesList</a>

---

##### `ClusterAddress`<sup>Required</sup> <a name="ClusterAddress" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterAddress"></a>

```csharp
public string ClusterAddress { get; }
```

- *Type:* string

---

##### `ConfigurationEndpoint`<sup>Required</sup> <a name="ConfigurationEndpoint" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.configurationEndpoint"></a>

```csharp
public string ConfigurationEndpoint { get; }
```

- *Type:* string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionActual"></a>

```csharp
public string EngineVersionActual { get; }
```

- *Type:* string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfiguration"></a>

```csharp
public ElasticacheClusterLogDeliveryConfigurationList LogDeliveryConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList">ElasticacheClusterLogDeliveryConfigurationList</a>

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediatelyInput"></a>

```csharp
public object ApplyImmediatelyInput { get; }
```

- *Type:* object

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgradeInput"></a>

```csharp
public string AutoMinorVersionUpgradeInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `AzModeInput`<sup>Optional</sup> <a name="AzModeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azModeInput"></a>

```csharp
public string AzModeInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifierInput"></a>

```csharp
public string FinalSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpDiscoveryInput`<sup>Optional</sup> <a name="IpDiscoveryInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscoveryInput"></a>

```csharp
public string IpDiscoveryInput { get; }
```

- *Type:* string

---

##### `LogDeliveryConfigurationInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfigurationInput"></a>

```csharp
public object LogDeliveryConfigurationInput { get; }
```

- *Type:* object

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindowInput"></a>

```csharp
public string MaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArnInput"></a>

```csharp
public string NotificationTopicArnInput { get; }
```

- *Type:* string

---

##### `NumCacheNodesInput`<sup>Optional</sup> <a name="NumCacheNodesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodesInput"></a>

```csharp
public double NumCacheNodesInput { get; }
```

- *Type:* double

---

##### `OutpostModeInput`<sup>Optional</sup> <a name="OutpostModeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostModeInput"></a>

```csharp
public string OutpostModeInput { get; }
```

- *Type:* string

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupNameInput"></a>

```csharp
public string ParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreferredAvailabilityZonesInput`<sup>Optional</sup> <a name="PreferredAvailabilityZonesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZonesInput"></a>

```csharp
public string[] PreferredAvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `PreferredOutpostArnInput`<sup>Optional</sup> <a name="PreferredOutpostArnInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArnInput"></a>

```csharp
public string PreferredOutpostArnInput { get; }
```

- *Type:* string

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupIdInput"></a>

```csharp
public string ReplicationGroupIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupNamesInput`<sup>Optional</sup> <a name="SecurityGroupNamesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNamesInput"></a>

```csharp
public string[] SecurityGroupNamesInput { get; }
```

- *Type:* string[]

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArnsInput"></a>

```csharp
public string[] SnapshotArnsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimitInput"></a>

```csharp
public double SnapshotRetentionLimitInput { get; }
```

- *Type:* double

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindowInput"></a>

```csharp
public string SnapshotWindowInput { get; }
```

- *Type:* string

---

##### `SubnetGroupNameInput`<sup>Optional</sup> <a name="SubnetGroupNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupNameInput"></a>

```csharp
public string SubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; }
```

- *Type:* object

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgrade"></a>

```csharp
public string AutoMinorVersionUpgrade { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azMode"></a>

```csharp
public string AzMode { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscovery"></a>

```csharp
public string IpDiscovery { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArn"></a>

```csharp
public string NotificationTopicArn { get; }
```

- *Type:* string

---

##### `NumCacheNodes`<sup>Required</sup> <a name="NumCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodes"></a>

```csharp
public double NumCacheNodes { get; }
```

- *Type:* double

---

##### `OutpostMode`<sup>Required</sup> <a name="OutpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostMode"></a>

```csharp
public string OutpostMode { get; }
```

- *Type:* string

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferredAvailabilityZones`<sup>Required</sup> <a name="PreferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZones"></a>

```csharp
public string[] PreferredAvailabilityZones { get; }
```

- *Type:* string[]

---

##### `PreferredOutpostArn`<sup>Required</sup> <a name="PreferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArn"></a>

```csharp
public string PreferredOutpostArn { get; }
```

- *Type:* string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SecurityGroupNames`<sup>Required</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNames"></a>

```csharp
public string[] SecurityGroupNames { get; }
```

- *Type:* string[]

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArns"></a>

```csharp
public string[] SnapshotArns { get; }
```

- *Type:* string[]

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; }
```

- *Type:* double

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; }
```

- *Type:* string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheClusterCacheNodes <a name="ElasticacheClusterCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheClusterCacheNodes {

};
```


### ElasticacheClusterConfig <a name="ElasticacheClusterConfig" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object ApplyImmediately = null,
    string AutoMinorVersionUpgrade = null,
    string AvailabilityZone = null,
    string AzMode = null,
    string Engine = null,
    string EngineVersion = null,
    string FinalSnapshotIdentifier = null,
    string Id = null,
    string IpDiscovery = null,
    object LogDeliveryConfiguration = null,
    string MaintenanceWindow = null,
    string NetworkType = null,
    string NodeType = null,
    string NotificationTopicArn = null,
    double NumCacheNodes = null,
    string OutpostMode = null,
    string ParameterGroupName = null,
    double Port = null,
    string[] PreferredAvailabilityZones = null,
    string PreferredOutpostArn = null,
    string ReplicationGroupId = null,
    string[] SecurityGroupIds = null,
    string[] SecurityGroupNames = null,
    string[] SnapshotArns = null,
    string SnapshotName = null,
    double SnapshotRetentionLimit = null,
    string SnapshotWindow = null,
    string SubnetGroupName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#auto_minor_version_upgrade ElasticacheCluster#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.azMode">AzMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#az_mode ElasticacheCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine ElasticacheCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine_version ElasticacheCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#id ElasticacheCluster#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.ipDiscovery">IpDiscovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#ip_discovery ElasticacheCluster#ip_discovery}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code>object</code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#network_type ElasticacheCluster#network_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#node_type ElasticacheCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.numCacheNodes">NumCacheNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.outpostMode">OutpostMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#outpost_mode ElasticacheCluster#outpost_mode}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#port ElasticacheCluster#port}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredOutpostArn">PreferredOutpostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_outpost_arn ElasticacheCluster#preferred_outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupNames">SecurityGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotArns">SnapshotArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags ElasticacheCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags_all ElasticacheCluster#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public string AutoMinorVersionUpgrade { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#auto_minor_version_upgrade ElasticacheCluster#auto_minor_version_upgrade}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}.

---

##### `AzMode`<sup>Optional</sup> <a name="AzMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.azMode"></a>

```csharp
public string AzMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#az_mode ElasticacheCluster#az_mode}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine ElasticacheCluster#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine_version ElasticacheCluster#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#id ElasticacheCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpDiscovery`<sup>Optional</sup> <a name="IpDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.ipDiscovery"></a>

```csharp
public string IpDiscovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#ip_discovery ElasticacheCluster#ip_discovery}.

---

##### `LogDeliveryConfiguration`<sup>Optional</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.logDeliveryConfiguration"></a>

```csharp
public object LogDeliveryConfiguration { get; set; }
```

- *Type:* object

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_delivery_configuration ElasticacheCluster#log_delivery_configuration}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#network_type ElasticacheCluster#network_type}.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#node_type ElasticacheCluster#node_type}.

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.notificationTopicArn"></a>

```csharp
public string NotificationTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}.

---

##### `NumCacheNodes`<sup>Optional</sup> <a name="NumCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.numCacheNodes"></a>

```csharp
public double NumCacheNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}.

---

##### `OutpostMode`<sup>Optional</sup> <a name="OutpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.outpostMode"></a>

```csharp
public string OutpostMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#outpost_mode ElasticacheCluster#outpost_mode}.

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#port ElasticacheCluster#port}.

---

##### `PreferredAvailabilityZones`<sup>Optional</sup> <a name="PreferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredAvailabilityZones"></a>

```csharp
public string[] PreferredAvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}.

---

##### `PreferredOutpostArn`<sup>Optional</sup> <a name="PreferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredOutpostArn"></a>

```csharp
public string PreferredOutpostArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_outpost_arn ElasticacheCluster#preferred_outpost_arn}.

---

##### `ReplicationGroupId`<sup>Optional</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}.

---

##### `SecurityGroupNames`<sup>Optional</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupNames"></a>

```csharp
public string[] SecurityGroupNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}.

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotArns"></a>

```csharp
public string[] SnapshotArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}.

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}.

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}.

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}.

---

##### `SubnetGroupName`<sup>Optional</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags ElasticacheCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags_all ElasticacheCluster#tags_all}.

---

### ElasticacheClusterLogDeliveryConfiguration <a name="ElasticacheClusterLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheClusterLogDeliveryConfiguration {
    string Destination,
    string DestinationType,
    string LogFormat,
    string LogType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination ElasticacheCluster#destination}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destinationType">DestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination_type ElasticacheCluster#destination_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logFormat">LogFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_format ElasticacheCluster#log_format}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logType">LogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_type ElasticacheCluster#log_type}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination ElasticacheCluster#destination}.

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination_type ElasticacheCluster#destination_type}.

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logFormat"></a>

```csharp
public string LogFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_format ElasticacheCluster#log_format}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_type ElasticacheCluster#log_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheClusterCacheNodesList <a name="ElasticacheClusterCacheNodesList" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheClusterCacheNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get"></a>

```csharp
private ElasticacheClusterCacheNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ElasticacheClusterCacheNodesOutputReference <a name="ElasticacheClusterCacheNodesOutputReference" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheClusterCacheNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes">ElasticacheClusterCacheNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.internalValue"></a>

```csharp
public ElasticacheClusterCacheNodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes">ElasticacheClusterCacheNodes</a>

---


### ElasticacheClusterLogDeliveryConfigurationList <a name="ElasticacheClusterLogDeliveryConfigurationList" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheClusterLogDeliveryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get"></a>

```csharp
private ElasticacheClusterLogDeliveryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticacheClusterLogDeliveryConfigurationOutputReference <a name="ElasticacheClusterLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheClusterLogDeliveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormat">LogFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormatInput"></a>

```csharp
public string LogFormatInput { get; }
```

- *Type:* string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```csharp
public string LogFormat { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



