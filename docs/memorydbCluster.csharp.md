# `memorydbCluster` Submodule <a name="`memorydbCluster` Submodule" id="@cdktf/provider-aws.memorydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbCluster <a name="MemorydbCluster" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster aws_memorydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbCluster(Construct Scope, string Id, MemorydbClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig">MemorydbClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig">MemorydbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetDataTiering">ResetDataTiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetFinalSnapshotName">ResetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard">ResetNumReplicasPerShard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNumShards">ResetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSubnetGroupName">ResetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTlsEnabled">ResetTlsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(MemorydbClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a>

---

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetDataTiering` <a name="ResetDataTiering" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetDataTiering"></a>

```csharp
private void ResetDataTiering()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetFinalSnapshotName` <a name="ResetFinalSnapshotName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetFinalSnapshotName"></a>

```csharp
private void ResetFinalSnapshotName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetNumReplicasPerShard` <a name="ResetNumReplicasPerShard" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNumReplicasPerShard"></a>

```csharp
private void ResetNumReplicasPerShard()
```

##### `ResetNumShards` <a name="ResetNumShards" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetNumShards"></a>

```csharp
private void ResetNumShards()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetParameterGroupName"></a>

```csharp
private void ResetParameterGroupName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotArns"></a>

```csharp
private void ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotName"></a>

```csharp
private void ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotRetentionLimit"></a>

```csharp
private void ResetSnapshotRetentionLimit()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnapshotWindow"></a>

```csharp
private void ResetSnapshotWindow()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```

##### `ResetSubnetGroupName` <a name="ResetSubnetGroupName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetSubnetGroupName"></a>

```csharp
private void ResetSubnetGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsEnabled` <a name="ResetTlsEnabled" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.resetTlsEnabled"></a>

```csharp
private void ResetTlsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MemorydbCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MemorydbCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MemorydbCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.clusterEndpoint">ClusterEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList">MemorydbClusterClusterEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.enginePatchVersion">EnginePatchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.shards">Shards</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList">MemorydbClusterShardsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference">MemorydbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.aclNameInput">AclNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dataTieringInput">DataTieringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput">FinalSnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput">NumReplicasPerShardInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numShardsInput">NumShardsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput">SubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tlsEnabledInput">TlsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.aclName">AclName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dataTiering">DataTiering</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numReplicasPerShard">NumReplicasPerShard</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numShards">NumShards</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotArns">SnapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tlsEnabled">TlsEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterEndpoint`<sup>Required</sup> <a name="ClusterEndpoint" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.clusterEndpoint"></a>

```csharp
public MemorydbClusterClusterEndpointList ClusterEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList">MemorydbClusterClusterEndpointList</a>

---

##### `EnginePatchVersion`<sup>Required</sup> <a name="EnginePatchVersion" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.enginePatchVersion"></a>

```csharp
public string EnginePatchVersion { get; }
```

- *Type:* string

---

##### `Shards`<sup>Required</sup> <a name="Shards" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.shards"></a>

```csharp
public MemorydbClusterShardsList Shards { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList">MemorydbClusterShardsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.timeouts"></a>

```csharp
public MemorydbClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference">MemorydbClusterTimeoutsOutputReference</a>

---

##### `AclNameInput`<sup>Optional</sup> <a name="AclNameInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.aclNameInput"></a>

```csharp
public string AclNameInput { get; }
```

- *Type:* string

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgradeInput"></a>

```csharp
public object AutoMinorVersionUpgradeInput { get; }
```

- *Type:* object

---

##### `DataTieringInput`<sup>Optional</sup> <a name="DataTieringInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dataTieringInput"></a>

```csharp
public object DataTieringInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotNameInput`<sup>Optional</sup> <a name="FinalSnapshotNameInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.finalSnapshotNameInput"></a>

```csharp
public string FinalSnapshotNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.maintenanceWindowInput"></a>

```csharp
public string MaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `NumReplicasPerShardInput`<sup>Optional</sup> <a name="NumReplicasPerShardInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numReplicasPerShardInput"></a>

```csharp
public double NumReplicasPerShardInput { get; }
```

- *Type:* double

---

##### `NumShardsInput`<sup>Optional</sup> <a name="NumShardsInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numShardsInput"></a>

```csharp
public double NumShardsInput { get; }
```

- *Type:* double

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.parameterGroupNameInput"></a>

```csharp
public string ParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotArnsInput"></a>

```csharp
public string[] SnapshotArnsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimitInput"></a>

```csharp
public double SnapshotRetentionLimitInput { get; }
```

- *Type:* double

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotWindowInput"></a>

```csharp
public string SnapshotWindowInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `SubnetGroupNameInput`<sup>Optional</sup> <a name="SubnetGroupNameInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.subnetGroupNameInput"></a>

```csharp
public string SubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsEnabledInput`<sup>Optional</sup> <a name="TlsEnabledInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tlsEnabledInput"></a>

```csharp
public object TlsEnabledInput { get; }
```

- *Type:* object

---

##### `AclName`<sup>Required</sup> <a name="AclName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.aclName"></a>

```csharp
public string AclName { get; }
```

- *Type:* string

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.autoMinorVersionUpgrade"></a>

```csharp
public object AutoMinorVersionUpgrade { get; }
```

- *Type:* object

---

##### `DataTiering`<sup>Required</sup> <a name="DataTiering" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.dataTiering"></a>

```csharp
public object DataTiering { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `NumReplicasPerShard`<sup>Required</sup> <a name="NumReplicasPerShard" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numReplicasPerShard"></a>

```csharp
public double NumReplicasPerShard { get; }
```

- *Type:* double

---

##### `NumShards`<sup>Required</sup> <a name="NumShards" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.numShards"></a>

```csharp
public double NumShards { get; }
```

- *Type:* double

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotArns"></a>

```csharp
public string[] SnapshotArns { get; }
```

- *Type:* string[]

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; }
```

- *Type:* double

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TlsEnabled`<sup>Required</sup> <a name="TlsEnabled" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tlsEnabled"></a>

```csharp
public object TlsEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.memorydbCluster.MemorydbCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbClusterClusterEndpoint <a name="MemorydbClusterClusterEndpoint" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterClusterEndpoint {

};
```


### MemorydbClusterConfig <a name="MemorydbClusterConfig" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AclName,
    string NodeType,
    object AutoMinorVersionUpgrade = null,
    object DataTiering = null,
    string Description = null,
    string EngineVersion = null,
    string FinalSnapshotName = null,
    string Id = null,
    string KmsKeyArn = null,
    string MaintenanceWindow = null,
    string Name = null,
    string NamePrefix = null,
    double NumReplicasPerShard = null,
    double NumShards = null,
    string ParameterGroupName = null,
    double Port = null,
    string[] SecurityGroupIds = null,
    string[] SnapshotArns = null,
    string SnapshotName = null,
    double SnapshotRetentionLimit = null,
    string SnapshotWindow = null,
    string SnsTopicArn = null,
    string SubnetGroupName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    MemorydbClusterTimeouts Timeouts = null,
    object TlsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.aclName">AclName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#acl_name MemorydbCluster#acl_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#node_type MemorydbCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.dataTiering">DataTiering</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#description MemorydbCluster#description}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#engine_version MemorydbCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#id MemorydbCluster#id}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#kms_key_arn MemorydbCluster#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name MemorydbCluster#name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name_prefix MemorydbCluster#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard">NumReplicasPerShard</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.numShards">NumShards</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_shards MemorydbCluster#num_shards}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#port MemorydbCluster#port}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotArns">SnapshotArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags MemorydbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags_all MemorydbCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled">TlsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AclName`<sup>Required</sup> <a name="AclName" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.aclName"></a>

```csharp
public string AclName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#acl_name MemorydbCluster#acl_name}.

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#node_type MemorydbCluster#node_type}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public object AutoMinorVersionUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}.

---

##### `DataTiering`<sup>Optional</sup> <a name="DataTiering" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.dataTiering"></a>

```csharp
public object DataTiering { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#description MemorydbCluster#description}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#engine_version MemorydbCluster#engine_version}.

---

##### `FinalSnapshotName`<sup>Optional</sup> <a name="FinalSnapshotName" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#id MemorydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#kms_key_arn MemorydbCluster#kms_key_arn}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name MemorydbCluster#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#name_prefix MemorydbCluster#name_prefix}.

---

##### `NumReplicasPerShard`<sup>Optional</sup> <a name="NumReplicasPerShard" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.numReplicasPerShard"></a>

```csharp
public double NumReplicasPerShard { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}.

---

##### `NumShards`<sup>Optional</sup> <a name="NumShards" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.numShards"></a>

```csharp
public double NumShards { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#num_shards MemorydbCluster#num_shards}.

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#port MemorydbCluster#port}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}.

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotArns"></a>

```csharp
public string[] SnapshotArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}.

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}.

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}.

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}.

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}.

---

##### `SubnetGroupName`<sup>Optional</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags MemorydbCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tags_all MemorydbCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.timeouts"></a>

```csharp
public MemorydbClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts">MemorydbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#timeouts MemorydbCluster#timeouts}

---

##### `TlsEnabled`<sup>Optional</sup> <a name="TlsEnabled" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterConfig.property.tlsEnabled"></a>

```csharp
public object TlsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}.

---

### MemorydbClusterShards <a name="MemorydbClusterShards" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShards.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShards {

};
```


### MemorydbClusterShardsNodes <a name="MemorydbClusterShardsNodes" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShardsNodes {

};
```


### MemorydbClusterShardsNodesEndpoint <a name="MemorydbClusterShardsNodesEndpoint" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShardsNodesEndpoint {

};
```


### MemorydbClusterTimeouts <a name="MemorydbClusterTimeouts" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#create MemorydbCluster#create}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#delete MemorydbCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#update MemorydbCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#create MemorydbCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#delete MemorydbCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_cluster#update MemorydbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbClusterClusterEndpointList <a name="MemorydbClusterClusterEndpointList" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterClusterEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.get"></a>

```csharp
private MemorydbClusterClusterEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MemorydbClusterClusterEndpointOutputReference <a name="MemorydbClusterClusterEndpointOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterClusterEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpointOutputReference.property.internalValue"></a>

```csharp
public MemorydbClusterClusterEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterClusterEndpoint">MemorydbClusterClusterEndpoint</a>

---


### MemorydbClusterShardsList <a name="MemorydbClusterShardsList" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShardsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.get"></a>

```csharp
private MemorydbClusterShardsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MemorydbClusterShardsNodesEndpointList <a name="MemorydbClusterShardsNodesEndpointList" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShardsNodesEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.get"></a>

```csharp
private MemorydbClusterShardsNodesEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MemorydbClusterShardsNodesEndpointOutputReference <a name="MemorydbClusterShardsNodesEndpointOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShardsNodesEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpoint">MemorydbClusterShardsNodesEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointOutputReference.property.internalValue"></a>

```csharp
public MemorydbClusterShardsNodesEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpoint">MemorydbClusterShardsNodesEndpoint</a>

---


### MemorydbClusterShardsNodesList <a name="MemorydbClusterShardsNodesList" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShardsNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.get"></a>

```csharp
private MemorydbClusterShardsNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MemorydbClusterShardsNodesOutputReference <a name="MemorydbClusterShardsNodesOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShardsNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList">MemorydbClusterShardsNodesEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodes">MemorydbClusterShardsNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.endpoint"></a>

```csharp
public MemorydbClusterShardsNodesEndpointList Endpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesEndpointList">MemorydbClusterShardsNodesEndpointList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesOutputReference.property.internalValue"></a>

```csharp
public MemorydbClusterShardsNodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodes">MemorydbClusterShardsNodes</a>

---


### MemorydbClusterShardsOutputReference <a name="MemorydbClusterShardsOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterShardsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList">MemorydbClusterShardsNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.numNodes">NumNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.slots">Slots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShards">MemorydbClusterShards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.nodes"></a>

```csharp
public MemorydbClusterShardsNodesList Nodes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsNodesList">MemorydbClusterShardsNodesList</a>

---

##### `NumNodes`<sup>Required</sup> <a name="NumNodes" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.numNodes"></a>

```csharp
public double NumNodes { get; }
```

- *Type:* double

---

##### `Slots`<sup>Required</sup> <a name="Slots" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.slots"></a>

```csharp
public string Slots { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterShardsOutputReference.property.internalValue"></a>

```csharp
public MemorydbClusterShards InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterShards">MemorydbClusterShards</a>

---


### MemorydbClusterTimeoutsOutputReference <a name="MemorydbClusterTimeoutsOutputReference" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MemorydbClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.memorydbCluster.MemorydbClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



