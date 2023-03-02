# `rdsClusterInstance` Submodule <a name="`rdsClusterInstance` Submodule" id="@cdktf/provider-aws.rdsClusterInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterInstance <a name="RdsClusterInstance" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance aws_rds_cluster_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterInstance(Construct Scope, string Id, RdsClusterInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig">RdsClusterInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig">RdsClusterInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetCaCertIdentifier">ResetCaCertIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetDbParameterGroupName">ResetDbParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetDbSubnetGroupName">ResetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetIdentifierPrefix">ResetIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetMonitoringInterval">ResetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetMonitoringRoleArn">ResetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsEnabled">ResetPerformanceInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsKmsKeyId">ResetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsRetentionPeriod">ResetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPromotionTier">ResetPromotionTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(RdsClusterInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a>

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetCaCertIdentifier` <a name="ResetCaCertIdentifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetCaCertIdentifier"></a>

```csharp
private void ResetCaCertIdentifier()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetCopyTagsToSnapshot"></a>

```csharp
private void ResetCopyTagsToSnapshot()
```

##### `ResetDbParameterGroupName` <a name="ResetDbParameterGroupName" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetDbParameterGroupName"></a>

```csharp
private void ResetDbParameterGroupName()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetDbSubnetGroupName"></a>

```csharp
private void ResetDbSubnetGroupName()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetIdentifierPrefix` <a name="ResetIdentifierPrefix" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetIdentifierPrefix"></a>

```csharp
private void ResetIdentifierPrefix()
```

##### `ResetMonitoringInterval` <a name="ResetMonitoringInterval" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetMonitoringInterval"></a>

```csharp
private void ResetMonitoringInterval()
```

##### `ResetMonitoringRoleArn` <a name="ResetMonitoringRoleArn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetMonitoringRoleArn"></a>

```csharp
private void ResetMonitoringRoleArn()
```

##### `ResetPerformanceInsightsEnabled` <a name="ResetPerformanceInsightsEnabled" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsEnabled"></a>

```csharp
private void ResetPerformanceInsightsEnabled()
```

##### `ResetPerformanceInsightsKmsKeyId` <a name="ResetPerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsKmsKeyId"></a>

```csharp
private void ResetPerformanceInsightsKmsKeyId()
```

##### `ResetPerformanceInsightsRetentionPeriod` <a name="ResetPerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPerformanceInsightsRetentionPeriod"></a>

```csharp
private void ResetPerformanceInsightsRetentionPeriod()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPreferredBackupWindow"></a>

```csharp
private void ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetPromotionTier` <a name="ResetPromotionTier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPromotionTier"></a>

```csharp
private void ResetPromotionTier()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsClusterInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsClusterInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsClusterInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbiResourceId">DbiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersionActual">EngineVersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.storageEncrypted">StorageEncrypted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference">RdsClusterInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.writer">Writer</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.caCertIdentifierInput">CaCertIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbParameterGroupNameInput">DbParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierPrefixInput">IdentifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringIntervalInput">MonitoringIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringRoleArnInput">MonitoringRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsEnabledInput">PerformanceInsightsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsKmsKeyIdInput">PerformanceInsightsKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsRetentionPeriodInput">PerformanceInsightsRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.promotionTierInput">PromotionTierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.caCertIdentifier">CaCertIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbParameterGroupName">DbParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierPrefix">IdentifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringInterval">MonitoringInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.promotionTier">PromotionTier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DbiResourceId`<sup>Required</sup> <a name="DbiResourceId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbiResourceId"></a>

```csharp
public string DbiResourceId { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersionActual"></a>

```csharp
public string EngineVersionActual { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.storageEncrypted"></a>

```csharp
public IResolvable StorageEncrypted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.timeouts"></a>

```csharp
public RdsClusterInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference">RdsClusterInstanceTimeoutsOutputReference</a>

---

##### `Writer`<sup>Required</sup> <a name="Writer" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.writer"></a>

```csharp
public IResolvable Writer { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.applyImmediatelyInput"></a>

```csharp
public object ApplyImmediatelyInput { get; }
```

- *Type:* object

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.autoMinorVersionUpgradeInput"></a>

```csharp
public object AutoMinorVersionUpgradeInput { get; }
```

- *Type:* object

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `CaCertIdentifierInput`<sup>Optional</sup> <a name="CaCertIdentifierInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.caCertIdentifierInput"></a>

```csharp
public string CaCertIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.copyTagsToSnapshotInput"></a>

```csharp
public object CopyTagsToSnapshotInput { get; }
```

- *Type:* object

---

##### `DbParameterGroupNameInput`<sup>Optional</sup> <a name="DbParameterGroupNameInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbParameterGroupNameInput"></a>

```csharp
public string DbParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbSubnetGroupNameInput"></a>

```csharp
public string DbSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdentifierPrefixInput`<sup>Optional</sup> <a name="IdentifierPrefixInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierPrefixInput"></a>

```csharp
public string IdentifierPrefixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `MonitoringIntervalInput`<sup>Optional</sup> <a name="MonitoringIntervalInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringIntervalInput"></a>

```csharp
public double MonitoringIntervalInput { get; }
```

- *Type:* double

---

##### `MonitoringRoleArnInput`<sup>Optional</sup> <a name="MonitoringRoleArnInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringRoleArnInput"></a>

```csharp
public string MonitoringRoleArnInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsEnabledInput`<sup>Optional</sup> <a name="PerformanceInsightsEnabledInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsEnabledInput"></a>

```csharp
public object PerformanceInsightsEnabledInput { get; }
```

- *Type:* object

---

##### `PerformanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyIdInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsKmsKeyIdInput"></a>

```csharp
public string PerformanceInsightsKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriodInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsRetentionPeriodInput"></a>

```csharp
public double PerformanceInsightsRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredBackupWindowInput"></a>

```csharp
public string PreferredBackupWindowInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `PromotionTierInput`<sup>Optional</sup> <a name="PromotionTierInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.promotionTierInput"></a>

```csharp
public double PromotionTierInput { get; }
```

- *Type:* double

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.publiclyAccessibleInput"></a>

```csharp
public object PubliclyAccessibleInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; }
```

- *Type:* object

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.autoMinorVersionUpgrade"></a>

```csharp
public object AutoMinorVersionUpgrade { get; }
```

- *Type:* object

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CaCertIdentifier`<sup>Required</sup> <a name="CaCertIdentifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.caCertIdentifier"></a>

```csharp
public string CaCertIdentifier { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.copyTagsToSnapshot"></a>

```csharp
public object CopyTagsToSnapshot { get; }
```

- *Type:* object

---

##### `DbParameterGroupName`<sup>Required</sup> <a name="DbParameterGroupName" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbParameterGroupName"></a>

```csharp
public string DbParameterGroupName { get; }
```

- *Type:* string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `IdentifierPrefix`<sup>Required</sup> <a name="IdentifierPrefix" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.identifierPrefix"></a>

```csharp
public string IdentifierPrefix { get; }
```

- *Type:* string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `MonitoringInterval`<sup>Required</sup> <a name="MonitoringInterval" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringInterval"></a>

```csharp
public double MonitoringInterval { get; }
```

- *Type:* double

---

##### `MonitoringRoleArn`<sup>Required</sup> <a name="MonitoringRoleArn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.monitoringRoleArn"></a>

```csharp
public string MonitoringRoleArn { get; }
```

- *Type:* string

---

##### `PerformanceInsightsEnabled`<sup>Required</sup> <a name="PerformanceInsightsEnabled" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsEnabled"></a>

```csharp
public object PerformanceInsightsEnabled { get; }
```

- *Type:* object

---

##### `PerformanceInsightsKmsKeyId`<sup>Required</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; }
```

- *Type:* string

---

##### `PerformanceInsightsRetentionPeriod`<sup>Required</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.performanceInsightsRetentionPeriod"></a>

```csharp
public double PerformanceInsightsRetentionPeriod { get; }
```

- *Type:* double

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `PromotionTier`<sup>Required</sup> <a name="PromotionTier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.promotionTier"></a>

```csharp
public double PromotionTier { get; }
```

- *Type:* double

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterInstanceConfig <a name="RdsClusterInstanceConfig" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterIdentifier,
    string InstanceClass,
    object ApplyImmediately = null,
    object AutoMinorVersionUpgrade = null,
    string AvailabilityZone = null,
    string CaCertIdentifier = null,
    object CopyTagsToSnapshot = null,
    string DbParameterGroupName = null,
    string DbSubnetGroupName = null,
    string Engine = null,
    string EngineVersion = null,
    string Id = null,
    string Identifier = null,
    string IdentifierPrefix = null,
    double MonitoringInterval = null,
    string MonitoringRoleArn = null,
    object PerformanceInsightsEnabled = null,
    string PerformanceInsightsKmsKeyId = null,
    double PerformanceInsightsRetentionPeriod = null,
    string PreferredBackupWindow = null,
    string PreferredMaintenanceWindow = null,
    double PromotionTier = null,
    object PubliclyAccessible = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    RdsClusterInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#cluster_identifier RdsClusterInstance#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#instance_class RdsClusterInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#apply_immediately RdsClusterInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#availability_zone RdsClusterInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.caCertIdentifier">CaCertIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dbParameterGroupName">DbParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine RdsClusterInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine_version RdsClusterInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#id RdsClusterInstance#id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier RdsClusterInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.identifierPrefix">IdentifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier_prefix RdsClusterInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.monitoringInterval">MonitoringInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_interval RdsClusterInstance#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_backup_window RdsClusterInstance#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.promotionTier">PromotionTier</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#promotion_tier RdsClusterInstance#promotion_tier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#publicly_accessible RdsClusterInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags RdsClusterInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags_all RdsClusterInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#cluster_identifier RdsClusterInstance#cluster_identifier}.

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#instance_class RdsClusterInstance#instance_class}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#apply_immediately RdsClusterInstance#apply_immediately}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public object AutoMinorVersionUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#availability_zone RdsClusterInstance#availability_zone}.

---

##### `CaCertIdentifier`<sup>Optional</sup> <a name="CaCertIdentifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.caCertIdentifier"></a>

```csharp
public string CaCertIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}.

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.copyTagsToSnapshot"></a>

```csharp
public object CopyTagsToSnapshot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}.

---

##### `DbParameterGroupName`<sup>Optional</sup> <a name="DbParameterGroupName" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dbParameterGroupName"></a>

```csharp
public string DbParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}.

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine RdsClusterInstance#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#engine_version RdsClusterInstance#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#id RdsClusterInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier RdsClusterInstance#identifier}.

---

##### `IdentifierPrefix`<sup>Optional</sup> <a name="IdentifierPrefix" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.identifierPrefix"></a>

```csharp
public string IdentifierPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#identifier_prefix RdsClusterInstance#identifier_prefix}.

---

##### `MonitoringInterval`<sup>Optional</sup> <a name="MonitoringInterval" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.monitoringInterval"></a>

```csharp
public double MonitoringInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_interval RdsClusterInstance#monitoring_interval}.

---

##### `MonitoringRoleArn`<sup>Optional</sup> <a name="MonitoringRoleArn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.monitoringRoleArn"></a>

```csharp
public string MonitoringRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}.

---

##### `PerformanceInsightsEnabled`<sup>Optional</sup> <a name="PerformanceInsightsEnabled" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsEnabled"></a>

```csharp
public object PerformanceInsightsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}.

---

##### `PerformanceInsightsKmsKeyId`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}.

---

##### `PerformanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```csharp
public double PerformanceInsightsRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#performance_insights_retention_period RdsClusterInstance#performance_insights_retention_period}.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_backup_window RdsClusterInstance#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}.

---

##### `PromotionTier`<sup>Optional</sup> <a name="PromotionTier" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.promotionTier"></a>

```csharp
public double PromotionTier { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#promotion_tier RdsClusterInstance#promotion_tier}.

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#publicly_accessible RdsClusterInstance#publicly_accessible}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags RdsClusterInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#tags_all RdsClusterInstance#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceConfig.property.timeouts"></a>

```csharp
public RdsClusterInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts">RdsClusterInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#timeouts RdsClusterInstance#timeouts}

---

### RdsClusterInstanceTimeouts <a name="RdsClusterInstanceTimeouts" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#create RdsClusterInstance#create}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#delete RdsClusterInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#update RdsClusterInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#create RdsClusterInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#delete RdsClusterInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance#update RdsClusterInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterInstanceTimeoutsOutputReference <a name="RdsClusterInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsClusterInstance.RdsClusterInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



