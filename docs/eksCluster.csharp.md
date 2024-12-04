# `eksCluster` Submodule <a name="`eksCluster` Submodule" id="@cdktf/provider-aws.eksCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCluster <a name="EksCluster" id="@cdktf/provider-aws.eksCluster.EksCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster aws_eks_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksCluster(Construct Scope, string Id, EksClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig">EksClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.eksCluster.EksCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig">EksClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putComputeConfig">PutComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig">PutKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putOutpostConfig">PutOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig">PutRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putStorageConfig">PutStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putUpgradePolicy">PutUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.putZonalShiftConfig">PutZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetBootstrapSelfManagedAddons">ResetBootstrapSelfManagedAddons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetComputeConfig">ResetComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetEnabledClusterLogTypes">ResetEnabledClusterLogTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetKubernetesNetworkConfig">ResetKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetOutpostConfig">ResetOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetRemoteNetworkConfig">ResetRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetStorageConfig">ResetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetUpgradePolicy">ResetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.resetZonalShiftConfig">ResetZonalShiftConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.eksCluster.EksCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.eksCluster.EksCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.eksCluster.EksCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.eksCluster.EksCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.eksCluster.EksCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.eksCluster.EksCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.eksCluster.EksCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.eksCluster.EksCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.eksCluster.EksCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.eksCluster.EksCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.eksCluster.EksCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.eksCluster.EksCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCluster.EksCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksCluster.EksCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.eksCluster.EksCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCluster.EksCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.eksCluster.EksCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.eksCluster.EksCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.eksCluster.EksCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.eksCluster.EksCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCluster.EksCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putAccessConfig"></a>

```csharp
private void PutAccessConfig(EksClusterAccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `PutComputeConfig` <a name="PutComputeConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putComputeConfig"></a>

```csharp
private void PutComputeConfig(EksClusterComputeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putComputeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(EksClusterEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---

##### `PutKubernetesNetworkConfig` <a name="PutKubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig"></a>

```csharp
private void PutKubernetesNetworkConfig(EksClusterKubernetesNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putKubernetesNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `PutOutpostConfig` <a name="PutOutpostConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putOutpostConfig"></a>

```csharp
private void PutOutpostConfig(EksClusterOutpostConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putOutpostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `PutRemoteNetworkConfig` <a name="PutRemoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig"></a>

```csharp
private void PutRemoteNetworkConfig(EksClusterRemoteNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putRemoteNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `PutStorageConfig` <a name="PutStorageConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putStorageConfig"></a>

```csharp
private void PutStorageConfig(EksClusterStorageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.eksCluster.EksCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(EksClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

---

##### `PutUpgradePolicy` <a name="PutUpgradePolicy" id="@cdktf/provider-aws.eksCluster.EksCluster.putUpgradePolicy"></a>

```csharp
private void PutUpgradePolicy(EksClusterUpgradePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putVpcConfig"></a>

```csharp
private void PutVpcConfig(EksClusterVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---

##### `PutZonalShiftConfig` <a name="PutZonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.putZonalShiftConfig"></a>

```csharp
private void PutZonalShiftConfig(EksClusterZonalShiftConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksCluster.putZonalShiftConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetAccessConfig"></a>

```csharp
private void ResetAccessConfig()
```

##### `ResetBootstrapSelfManagedAddons` <a name="ResetBootstrapSelfManagedAddons" id="@cdktf/provider-aws.eksCluster.EksCluster.resetBootstrapSelfManagedAddons"></a>

```csharp
private void ResetBootstrapSelfManagedAddons()
```

##### `ResetComputeConfig` <a name="ResetComputeConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetComputeConfig"></a>

```csharp
private void ResetComputeConfig()
```

##### `ResetEnabledClusterLogTypes` <a name="ResetEnabledClusterLogTypes" id="@cdktf/provider-aws.eksCluster.EksCluster.resetEnabledClusterLogTypes"></a>

```csharp
private void ResetEnabledClusterLogTypes()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.eksCluster.EksCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKubernetesNetworkConfig` <a name="ResetKubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetKubernetesNetworkConfig"></a>

```csharp
private void ResetKubernetesNetworkConfig()
```

##### `ResetOutpostConfig` <a name="ResetOutpostConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetOutpostConfig"></a>

```csharp
private void ResetOutpostConfig()
```

##### `ResetRemoteNetworkConfig` <a name="ResetRemoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetRemoteNetworkConfig"></a>

```csharp
private void ResetRemoteNetworkConfig()
```

##### `ResetStorageConfig` <a name="ResetStorageConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetStorageConfig"></a>

```csharp
private void ResetStorageConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.eksCluster.EksCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.eksCluster.EksCluster.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.eksCluster.EksCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpgradePolicy` <a name="ResetUpgradePolicy" id="@cdktf/provider-aws.eksCluster.EksCluster.resetUpgradePolicy"></a>

```csharp
private void ResetUpgradePolicy()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.eksCluster.EksCluster.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetZonalShiftConfig` <a name="ResetZonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.resetZonalShiftConfig"></a>

```csharp
private void ResetZonalShiftConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EksCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.eksCluster.EksCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksCluster.EksCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.eksCluster.EksCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksCluster.EksCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.eksCluster.EksCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksCluster.EksCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EksCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EksCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EksCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksCluster.EksCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EksCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList">EksClusterCertificateAuthorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference">EksClusterEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList">EksClusterIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfig">KubernetesNetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.outpostConfig">OutpostConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfig">RemoteNetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference">EksClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference">EksClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.zonalShiftConfig">ZonalShiftConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput">BootstrapSelfManagedAddonsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.computeConfigInput">ComputeConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypesInput">EnabledClusterLogTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfigInput">KubernetesNetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.outpostConfigInput">OutpostConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfigInput">RemoteNetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.storageConfigInput">StorageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.upgradePolicyInput">UpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.zonalShiftConfigInput">ZonalShiftConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddons">BootstrapSelfManagedAddons</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypes">EnabledClusterLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.eksCluster.EksCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.eksCluster.EksCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.eksCluster.EksCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.eksCluster.EksCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.eksCluster.EksCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.eksCluster.EksCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksCluster.EksCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksCluster.EksCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksCluster.EksCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksCluster.EksCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksCluster.EksCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksCluster.EksCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksCluster.EksCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.accessConfig"></a>

```csharp
public EksClusterAccessConfigOutputReference AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference">EksClusterAccessConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.eksCluster.EksCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktf/provider-aws.eksCluster.EksCluster.property.certificateAuthority"></a>

```csharp
public EksClusterCertificateAuthorityList CertificateAuthority { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList">EksClusterCertificateAuthorityList</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.eksCluster.EksCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ComputeConfig`<sup>Required</sup> <a name="ComputeConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.computeConfig"></a>

```csharp
public EksClusterComputeConfigOutputReference ComputeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference">EksClusterComputeConfigOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.eksCluster.EksCluster.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.encryptionConfig"></a>

```csharp
public EksClusterEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference">EksClusterEncryptionConfigOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.eksCluster.EksCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-aws.eksCluster.EksCluster.property.identity"></a>

```csharp
public EksClusterIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList">EksClusterIdentityList</a>

---

##### `KubernetesNetworkConfig`<sup>Required</sup> <a name="KubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfig"></a>

```csharp
public EksClusterKubernetesNetworkConfigOutputReference KubernetesNetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference">EksClusterKubernetesNetworkConfigOutputReference</a>

---

##### `OutpostConfig`<sup>Required</sup> <a name="OutpostConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.outpostConfig"></a>

```csharp
public EksClusterOutpostConfigOutputReference OutpostConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference">EksClusterOutpostConfigOutputReference</a>

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-aws.eksCluster.EksCluster.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `RemoteNetworkConfig`<sup>Required</sup> <a name="RemoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfig"></a>

```csharp
public EksClusterRemoteNetworkConfigOutputReference RemoteNetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference">EksClusterRemoteNetworkConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.eksCluster.EksCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageConfig`<sup>Required</sup> <a name="StorageConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.storageConfig"></a>

```csharp
public EksClusterStorageConfigOutputReference StorageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference">EksClusterStorageConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksCluster.EksCluster.property.timeouts"></a>

```csharp
public EksClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference">EksClusterTimeoutsOutputReference</a>

---

##### `UpgradePolicy`<sup>Required</sup> <a name="UpgradePolicy" id="@cdktf/provider-aws.eksCluster.EksCluster.property.upgradePolicy"></a>

```csharp
public EksClusterUpgradePolicyOutputReference UpgradePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference">EksClusterUpgradePolicyOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.vpcConfig"></a>

```csharp
public EksClusterVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference">EksClusterVpcConfigOutputReference</a>

---

##### `ZonalShiftConfig`<sup>Required</sup> <a name="ZonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksCluster.property.zonalShiftConfig"></a>

```csharp
public EksClusterZonalShiftConfigOutputReference ZonalShiftConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference">EksClusterZonalShiftConfigOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.accessConfigInput"></a>

```csharp
public EksClusterAccessConfig AccessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---

##### `BootstrapSelfManagedAddonsInput`<sup>Optional</sup> <a name="BootstrapSelfManagedAddonsInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddonsInput"></a>

```csharp
public object BootstrapSelfManagedAddonsInput { get; }
```

- *Type:* object

---

##### `ComputeConfigInput`<sup>Optional</sup> <a name="ComputeConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.computeConfigInput"></a>

```csharp
public EksClusterComputeConfig ComputeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---

##### `EnabledClusterLogTypesInput`<sup>Optional</sup> <a name="EnabledClusterLogTypesInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypesInput"></a>

```csharp
public string[] EnabledClusterLogTypesInput { get; }
```

- *Type:* string[]

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.encryptionConfigInput"></a>

```csharp
public EksClusterEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesNetworkConfigInput`<sup>Optional</sup> <a name="KubernetesNetworkConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.kubernetesNetworkConfigInput"></a>

```csharp
public EksClusterKubernetesNetworkConfig KubernetesNetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutpostConfigInput`<sup>Optional</sup> <a name="OutpostConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.outpostConfigInput"></a>

```csharp
public EksClusterOutpostConfig OutpostConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---

##### `RemoteNetworkConfigInput`<sup>Optional</sup> <a name="RemoteNetworkConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.remoteNetworkConfigInput"></a>

```csharp
public EksClusterRemoteNetworkConfig RemoteNetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StorageConfigInput`<sup>Optional</sup> <a name="StorageConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.storageConfigInput"></a>

```csharp
public EksClusterStorageConfig StorageConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpgradePolicyInput`<sup>Optional</sup> <a name="UpgradePolicyInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.upgradePolicyInput"></a>

```csharp
public EksClusterUpgradePolicy UpgradePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.vpcConfigInput"></a>

```csharp
public EksClusterVpcConfig VpcConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---

##### `ZonalShiftConfigInput`<sup>Optional</sup> <a name="ZonalShiftConfigInput" id="@cdktf/provider-aws.eksCluster.EksCluster.property.zonalShiftConfigInput"></a>

```csharp
public EksClusterZonalShiftConfig ZonalShiftConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---

##### `BootstrapSelfManagedAddons`<sup>Required</sup> <a name="BootstrapSelfManagedAddons" id="@cdktf/provider-aws.eksCluster.EksCluster.property.bootstrapSelfManagedAddons"></a>

```csharp
public object BootstrapSelfManagedAddons { get; }
```

- *Type:* object

---

##### `EnabledClusterLogTypes`<sup>Required</sup> <a name="EnabledClusterLogTypes" id="@cdktf/provider-aws.eksCluster.EksCluster.property.enabledClusterLogTypes"></a>

```csharp
public string[] EnabledClusterLogTypes { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksCluster.EksCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.eksCluster.EksCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.eksCluster.EksCluster.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.eksCluster.EksCluster.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.eksCluster.EksCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksClusterAccessConfig <a name="EksClusterAccessConfig" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterAccessConfig {
    string AuthenticationMode = null,
    object BootstrapClusterCreatorAdminPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions">BootstrapClusterCreatorAdminPermissions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}. |

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}.

---

##### `BootstrapClusterCreatorAdminPermissions`<sup>Optional</sup> <a name="BootstrapClusterCreatorAdminPermissions" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfig.property.bootstrapClusterCreatorAdminPermissions"></a>

```csharp
public object BootstrapClusterCreatorAdminPermissions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}.

---

### EksClusterCertificateAuthority <a name="EksClusterCertificateAuthority" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthority.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterCertificateAuthority {

};
```


### EksClusterComputeConfig <a name="EksClusterComputeConfig" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterComputeConfig {
    object Enabled = null,
    string[] NodePools = null,
    string NodeRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.nodePools">NodePools</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.nodeRoleArn">NodeRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

##### `NodePools`<sup>Optional</sup> <a name="NodePools" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.nodePools"></a>

```csharp
public string[] NodePools { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}.

---

##### `NodeRoleArn`<sup>Optional</sup> <a name="NodeRoleArn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfig.property.nodeRoleArn"></a>

```csharp
public string NodeRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}.

---

### EksClusterConfig <a name="EksClusterConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RoleArn,
    EksClusterVpcConfig VpcConfig,
    EksClusterAccessConfig AccessConfig = null,
    object BootstrapSelfManagedAddons = null,
    EksClusterComputeConfig ComputeConfig = null,
    string[] EnabledClusterLogTypes = null,
    EksClusterEncryptionConfig EncryptionConfig = null,
    string Id = null,
    EksClusterKubernetesNetworkConfig KubernetesNetworkConfig = null,
    EksClusterOutpostConfig OutpostConfig = null,
    EksClusterRemoteNetworkConfig RemoteNetworkConfig = null,
    EksClusterStorageConfig StorageConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    EksClusterTimeouts Timeouts = null,
    EksClusterUpgradePolicy UpgradePolicy = null,
    string Version = null,
    EksClusterZonalShiftConfig ZonalShiftConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#name EksCluster#name}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | vpc_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons">BootstrapSelfManagedAddons</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | compute_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.enabledClusterLogTypes">EnabledClusterLogTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#id EksCluster#id}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig">KubernetesNetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | kubernetes_network_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.outpostConfig">OutpostConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | outpost_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.remoteNetworkConfig">RemoteNetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | remote_network_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#tags EksCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#tags_all EksCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#version EksCluster#version}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterConfig.property.zonalShiftConfig">ZonalShiftConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | zonal_shift_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#name EksCluster#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}.

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.vpcConfig"></a>

```csharp
public EksClusterVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#vpc_config EksCluster#vpc_config}

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.accessConfig"></a>

```csharp
public EksClusterAccessConfig AccessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#access_config EksCluster#access_config}

---

##### `BootstrapSelfManagedAddons`<sup>Optional</sup> <a name="BootstrapSelfManagedAddons" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.bootstrapSelfManagedAddons"></a>

```csharp
public object BootstrapSelfManagedAddons { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}.

---

##### `ComputeConfig`<sup>Optional</sup> <a name="ComputeConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.computeConfig"></a>

```csharp
public EksClusterComputeConfig ComputeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

compute_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#compute_config EksCluster#compute_config}

---

##### `EnabledClusterLogTypes`<sup>Optional</sup> <a name="EnabledClusterLogTypes" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.enabledClusterLogTypes"></a>

```csharp
public string[] EnabledClusterLogTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}.

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.encryptionConfig"></a>

```csharp
public EksClusterEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#id EksCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesNetworkConfig`<sup>Optional</sup> <a name="KubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.kubernetesNetworkConfig"></a>

```csharp
public EksClusterKubernetesNetworkConfig KubernetesNetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

kubernetes_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}

---

##### `OutpostConfig`<sup>Optional</sup> <a name="OutpostConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.outpostConfig"></a>

```csharp
public EksClusterOutpostConfig OutpostConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

outpost_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#outpost_config EksCluster#outpost_config}

---

##### `RemoteNetworkConfig`<sup>Optional</sup> <a name="RemoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.remoteNetworkConfig"></a>

```csharp
public EksClusterRemoteNetworkConfig RemoteNetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

remote_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#remote_network_config EksCluster#remote_network_config}

---

##### `StorageConfig`<sup>Optional</sup> <a name="StorageConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.storageConfig"></a>

```csharp
public EksClusterStorageConfig StorageConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#storage_config EksCluster#storage_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#tags EksCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#tags_all EksCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.timeouts"></a>

```csharp
public EksClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts">EksClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#timeouts EksCluster#timeouts}

---

##### `UpgradePolicy`<sup>Optional</sup> <a name="UpgradePolicy" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.upgradePolicy"></a>

```csharp
public EksClusterUpgradePolicy UpgradePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#upgrade_policy EksCluster#upgrade_policy}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#version EksCluster#version}.

---

##### `ZonalShiftConfig`<sup>Optional</sup> <a name="ZonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksClusterConfig.property.zonalShiftConfig"></a>

```csharp
public EksClusterZonalShiftConfig ZonalShiftConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

zonal_shift_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#zonal_shift_config EksCluster#zonal_shift_config}

---

### EksClusterEncryptionConfig <a name="EksClusterEncryptionConfig" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterEncryptionConfig {
    EksClusterEncryptionConfigProvider Provider,
    string[] Resources
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.property.provider">Provider</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | provider block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.property.resources">Resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#resources EksCluster#resources}. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.property.provider"></a>

```csharp
public EksClusterEncryptionConfigProvider Provider { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#provider EksCluster#provider}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#resources EksCluster#resources}.

---

### EksClusterEncryptionConfigProvider <a name="EksClusterEncryptionConfigProvider" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterEncryptionConfigProvider {
    string KeyArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn">KeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}. |

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider.property.keyArn"></a>

```csharp
public string KeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}.

---

### EksClusterIdentity <a name="EksClusterIdentity" id="@cdktf/provider-aws.eksCluster.EksClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterIdentity {

};
```


### EksClusterIdentityOidc <a name="EksClusterIdentityOidc" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterIdentityOidc {

};
```


### EksClusterKubernetesNetworkConfig <a name="EksClusterKubernetesNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterKubernetesNetworkConfig {
    EksClusterKubernetesNetworkConfigElasticLoadBalancing ElasticLoadBalancing = null,
    string IpFamily = null,
    string ServiceIpv4Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing">ElasticLoadBalancing</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | elastic_load_balancing block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily">IpFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr">ServiceIpv4Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}. |

---

##### `ElasticLoadBalancing`<sup>Optional</sup> <a name="ElasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.elasticLoadBalancing"></a>

```csharp
public EksClusterKubernetesNetworkConfigElasticLoadBalancing ElasticLoadBalancing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

elastic_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#elastic_load_balancing EksCluster#elastic_load_balancing}

---

##### `IpFamily`<sup>Optional</sup> <a name="IpFamily" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.ipFamily"></a>

```csharp
public string IpFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}.

---

##### `ServiceIpv4Cidr`<sup>Optional</sup> <a name="ServiceIpv4Cidr" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig.property.serviceIpv4Cidr"></a>

```csharp
public string ServiceIpv4Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}.

---

### EksClusterKubernetesNetworkConfigElasticLoadBalancing <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterKubernetesNetworkConfigElasticLoadBalancing {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

### EksClusterOutpostConfig <a name="EksClusterOutpostConfig" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterOutpostConfig {
    string ControlPlaneInstanceType,
    string[] OutpostArns,
    EksClusterOutpostConfigControlPlanePlacement ControlPlanePlacement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType">ControlPlaneInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.outpostArns">OutpostArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement">ControlPlanePlacement</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | control_plane_placement block. |

---

##### `ControlPlaneInstanceType`<sup>Required</sup> <a name="ControlPlaneInstanceType" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlaneInstanceType"></a>

```csharp
public string ControlPlaneInstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}.

---

##### `OutpostArns`<sup>Required</sup> <a name="OutpostArns" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.outpostArns"></a>

```csharp
public string[] OutpostArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}.

---

##### `ControlPlanePlacement`<sup>Optional</sup> <a name="ControlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig.property.controlPlanePlacement"></a>

```csharp
public EksClusterOutpostConfigControlPlanePlacement ControlPlanePlacement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

control_plane_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#control_plane_placement EksCluster#control_plane_placement}

---

### EksClusterOutpostConfigControlPlanePlacement <a name="EksClusterOutpostConfigControlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterOutpostConfigControlPlanePlacement {
    string GroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#group_name EksCluster#group_name}. |

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#group_name EksCluster#group_name}.

---

### EksClusterRemoteNetworkConfig <a name="EksClusterRemoteNetworkConfig" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterRemoteNetworkConfig {
    EksClusterRemoteNetworkConfigRemoteNodeNetworks RemoteNodeNetworks,
    EksClusterRemoteNetworkConfigRemotePodNetworks RemotePodNetworks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks">RemoteNodeNetworks</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | remote_node_networks block. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks">RemotePodNetworks</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | remote_pod_networks block. |

---

##### `RemoteNodeNetworks`<sup>Required</sup> <a name="RemoteNodeNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remoteNodeNetworks"></a>

```csharp
public EksClusterRemoteNetworkConfigRemoteNodeNetworks RemoteNodeNetworks { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

remote_node_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#remote_node_networks EksCluster#remote_node_networks}

---

##### `RemotePodNetworks`<sup>Optional</sup> <a name="RemotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig.property.remotePodNetworks"></a>

```csharp
public EksClusterRemoteNetworkConfigRemotePodNetworks RemotePodNetworks { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

remote_pod_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#remote_pod_networks EksCluster#remote_pod_networks}

---

### EksClusterRemoteNetworkConfigRemoteNodeNetworks <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterRemoteNetworkConfigRemoteNodeNetworks {
    string[] Cidrs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs">Cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}. |

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks.property.cidrs"></a>

```csharp
public string[] Cidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}.

---

### EksClusterRemoteNetworkConfigRemotePodNetworks <a name="EksClusterRemoteNetworkConfigRemotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterRemoteNetworkConfigRemotePodNetworks {
    string[] Cidrs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs">Cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}. |

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks.property.cidrs"></a>

```csharp
public string[] Cidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}.

---

### EksClusterStorageConfig <a name="EksClusterStorageConfig" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterStorageConfig {
    EksClusterStorageConfigBlockStorage BlockStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig.property.blockStorage">BlockStorage</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | block_storage block. |

---

##### `BlockStorage`<sup>Optional</sup> <a name="BlockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfig.property.blockStorage"></a>

```csharp
public EksClusterStorageConfigBlockStorage BlockStorage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

block_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#block_storage EksCluster#block_storage}

---

### EksClusterStorageConfigBlockStorage <a name="EksClusterStorageConfigBlockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterStorageConfigBlockStorage {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

### EksClusterTimeouts <a name="EksClusterTimeouts" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#create EksCluster#create}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#delete EksCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#update EksCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#create EksCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#delete EksCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.eksCluster.EksClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#update EksCluster#update}.

---

### EksClusterUpgradePolicy <a name="EksClusterUpgradePolicy" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterUpgradePolicy {
    string SupportType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy.property.supportType">SupportType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#support_type EksCluster#support_type}. |

---

##### `SupportType`<sup>Optional</sup> <a name="SupportType" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy.property.supportType"></a>

```csharp
public string SupportType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#support_type EksCluster#support_type}.

---

### EksClusterVpcConfig <a name="EksClusterVpcConfig" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterVpcConfig {
    string[] SubnetIds,
    object EndpointPrivateAccess = null,
    object EndpointPublicAccess = null,
    string[] PublicAccessCidrs = null,
    string[] SecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPrivateAccess">EndpointPrivateAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPublicAccess">EndpointPublicAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.publicAccessCidrs">PublicAccessCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}.

---

##### `EndpointPrivateAccess`<sup>Optional</sup> <a name="EndpointPrivateAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPrivateAccess"></a>

```csharp
public object EndpointPrivateAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}.

---

##### `EndpointPublicAccess`<sup>Optional</sup> <a name="EndpointPublicAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.endpointPublicAccess"></a>

```csharp
public object EndpointPublicAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}.

---

##### `PublicAccessCidrs`<sup>Optional</sup> <a name="PublicAccessCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.publicAccessCidrs"></a>

```csharp
public string[] PublicAccessCidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}.

---

### EksClusterZonalShiftConfig <a name="EksClusterZonalShiftConfig" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterZonalShiftConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled EksCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/eks_cluster#enabled EksCluster#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksClusterAccessConfigOutputReference <a name="EksClusterAccessConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions">ResetBootstrapClusterCreatorAdminPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```

##### `ResetBootstrapClusterCreatorAdminPermissions` <a name="ResetBootstrapClusterCreatorAdminPermissions" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.resetBootstrapClusterCreatorAdminPermissions"></a>

```csharp
private void ResetBootstrapClusterCreatorAdminPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput">BootstrapClusterCreatorAdminPermissionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions">BootstrapClusterCreatorAdminPermissions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `BootstrapClusterCreatorAdminPermissionsInput`<sup>Optional</sup> <a name="BootstrapClusterCreatorAdminPermissionsInput" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissionsInput"></a>

```csharp
public object BootstrapClusterCreatorAdminPermissionsInput { get; }
```

- *Type:* object

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `BootstrapClusterCreatorAdminPermissions`<sup>Required</sup> <a name="BootstrapClusterCreatorAdminPermissions" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions"></a>

```csharp
public object BootstrapClusterCreatorAdminPermissions { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterAccessConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterAccessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterAccessConfig">EksClusterAccessConfig</a>

---


### EksClusterCertificateAuthorityList <a name="EksClusterCertificateAuthorityList" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterCertificateAuthorityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get"></a>

```csharp
private EksClusterCertificateAuthorityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EksClusterCertificateAuthorityOutputReference <a name="EksClusterCertificateAuthorityOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterCertificateAuthorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthority">EksClusterCertificateAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthorityOutputReference.property.internalValue"></a>

```csharp
public EksClusterCertificateAuthority InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterCertificateAuthority">EksClusterCertificateAuthority</a>

---


### EksClusterComputeConfigOutputReference <a name="EksClusterComputeConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterComputeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools">ResetNodePools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn">ResetNodeRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetNodePools` <a name="ResetNodePools" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodePools"></a>

```csharp
private void ResetNodePools()
```

##### `ResetNodeRoleArn` <a name="ResetNodeRoleArn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.resetNodeRoleArn"></a>

```csharp
private void ResetNodeRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput">NodePoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput">NodeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools">NodePools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn">NodeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NodePoolsInput`<sup>Optional</sup> <a name="NodePoolsInput" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePoolsInput"></a>

```csharp
public string[] NodePoolsInput { get; }
```

- *Type:* string[]

---

##### `NodeRoleArnInput`<sup>Optional</sup> <a name="NodeRoleArnInput" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArnInput"></a>

```csharp
public string NodeRoleArnInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `NodePools`<sup>Required</sup> <a name="NodePools" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodePools"></a>

```csharp
public string[] NodePools { get; }
```

- *Type:* string[]

---

##### `NodeRoleArn`<sup>Required</sup> <a name="NodeRoleArn" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.nodeRoleArn"></a>

```csharp
public string NodeRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterComputeConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterComputeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterComputeConfig">EksClusterComputeConfig</a>

---


### EksClusterEncryptionConfigOutputReference <a name="EksClusterEncryptionConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider">PutProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvider` <a name="PutProvider" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider"></a>

```csharp
private void PutProvider(EksClusterEncryptionConfigProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.putProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput">ProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.provider"></a>

```csharp
public EksClusterEncryptionConfigProviderOutputReference Provider { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference">EksClusterEncryptionConfigProviderOutputReference</a>

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.providerInput"></a>

```csharp
public EksClusterEncryptionConfigProvider ProviderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfig">EksClusterEncryptionConfig</a>

---


### EksClusterEncryptionConfigProviderOutputReference <a name="EksClusterEncryptionConfigProviderOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterEncryptionConfigProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArnInput"></a>

```csharp
public string KeyArnInput { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProviderOutputReference.property.internalValue"></a>

```csharp
public EksClusterEncryptionConfigProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterEncryptionConfigProvider">EksClusterEncryptionConfigProvider</a>

---


### EksClusterIdentityList <a name="EksClusterIdentityList" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.get"></a>

```csharp
private EksClusterIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EksClusterIdentityOidcList <a name="EksClusterIdentityOidcList" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterIdentityOidcList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.get"></a>

```csharp
private EksClusterIdentityOidcOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EksClusterIdentityOidcOutputReference <a name="EksClusterIdentityOidcOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterIdentityOidcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidc">EksClusterIdentityOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcOutputReference.property.internalValue"></a>

```csharp
public EksClusterIdentityOidc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidc">EksClusterIdentityOidc</a>

---


### EksClusterIdentityOutputReference <a name="EksClusterIdentityOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList">EksClusterIdentityOidcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentity">EksClusterIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.oidc"></a>

```csharp
public EksClusterIdentityOidcList Oidc { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentityOidcList">EksClusterIdentityOidcList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterIdentityOutputReference.property.internalValue"></a>

```csharp
public EksClusterIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterIdentity">EksClusterIdentity</a>

---


### EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference <a name="EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue"></a>

```csharp
public EksClusterKubernetesNetworkConfigElasticLoadBalancing InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---


### EksClusterKubernetesNetworkConfigOutputReference <a name="EksClusterKubernetesNetworkConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterKubernetesNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing">PutElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing">ResetElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily">ResetIpFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr">ResetServiceIpv4Cidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElasticLoadBalancing` <a name="PutElasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing"></a>

```csharp
private void PutElasticLoadBalancing(EksClusterKubernetesNetworkConfigElasticLoadBalancing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.putElasticLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `ResetElasticLoadBalancing` <a name="ResetElasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetElasticLoadBalancing"></a>

```csharp
private void ResetElasticLoadBalancing()
```

##### `ResetIpFamily` <a name="ResetIpFamily" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetIpFamily"></a>

```csharp
private void ResetIpFamily()
```

##### `ResetServiceIpv4Cidr` <a name="ResetServiceIpv4Cidr" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.resetServiceIpv4Cidr"></a>

```csharp
private void ResetServiceIpv4Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing">ElasticLoadBalancing</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr">ServiceIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput">ElasticLoadBalancingInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput">IpFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput">ServiceIpv4CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily">IpFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr">ServiceIpv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElasticLoadBalancing`<sup>Required</sup> <a name="ElasticLoadBalancing" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing"></a>

```csharp
public EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference ElasticLoadBalancing { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a>

---

##### `ServiceIpv6Cidr`<sup>Required</sup> <a name="ServiceIpv6Cidr" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr"></a>

```csharp
public string ServiceIpv6Cidr { get; }
```

- *Type:* string

---

##### `ElasticLoadBalancingInput`<sup>Optional</sup> <a name="ElasticLoadBalancingInput" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancingInput"></a>

```csharp
public EksClusterKubernetesNetworkConfigElasticLoadBalancing ElasticLoadBalancingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigElasticLoadBalancing">EksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---

##### `IpFamilyInput`<sup>Optional</sup> <a name="IpFamilyInput" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamilyInput"></a>

```csharp
public string IpFamilyInput { get; }
```

- *Type:* string

---

##### `ServiceIpv4CidrInput`<sup>Optional</sup> <a name="ServiceIpv4CidrInput" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4CidrInput"></a>

```csharp
public string ServiceIpv4CidrInput { get; }
```

- *Type:* string

---

##### `IpFamily`<sup>Required</sup> <a name="IpFamily" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.ipFamily"></a>

```csharp
public string IpFamily { get; }
```

- *Type:* string

---

##### `ServiceIpv4Cidr`<sup>Required</sup> <a name="ServiceIpv4Cidr" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr"></a>

```csharp
public string ServiceIpv4Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterKubernetesNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterKubernetesNetworkConfig">EksClusterKubernetesNetworkConfig</a>

---


### EksClusterOutpostConfigControlPlanePlacementOutputReference <a name="EksClusterOutpostConfigControlPlanePlacementOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterOutpostConfigControlPlanePlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue"></a>

```csharp
public EksClusterOutpostConfigControlPlanePlacement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---


### EksClusterOutpostConfigOutputReference <a name="EksClusterOutpostConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterOutpostConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement">PutControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement">ResetControlPlanePlacement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPlanePlacement` <a name="PutControlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement"></a>

```csharp
private void PutControlPlanePlacement(EksClusterOutpostConfigControlPlanePlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.putControlPlanePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `ResetControlPlanePlacement` <a name="ResetControlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.resetControlPlanePlacement"></a>

```csharp
private void ResetControlPlanePlacement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement">ControlPlanePlacement</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput">ControlPlaneInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput">ControlPlanePlacementInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput">OutpostArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType">ControlPlaneInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns">OutpostArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlanePlacement`<sup>Required</sup> <a name="ControlPlanePlacement" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacement"></a>

```csharp
public EksClusterOutpostConfigControlPlanePlacementOutputReference ControlPlanePlacement { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacementOutputReference">EksClusterOutpostConfigControlPlanePlacementOutputReference</a>

---

##### `ControlPlaneInstanceTypeInput`<sup>Optional</sup> <a name="ControlPlaneInstanceTypeInput" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceTypeInput"></a>

```csharp
public string ControlPlaneInstanceTypeInput { get; }
```

- *Type:* string

---

##### `ControlPlanePlacementInput`<sup>Optional</sup> <a name="ControlPlanePlacementInput" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlanePlacementInput"></a>

```csharp
public EksClusterOutpostConfigControlPlanePlacement ControlPlanePlacementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigControlPlanePlacement">EksClusterOutpostConfigControlPlanePlacement</a>

---

##### `OutpostArnsInput`<sup>Optional</sup> <a name="OutpostArnsInput" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArnsInput"></a>

```csharp
public string[] OutpostArnsInput { get; }
```

- *Type:* string[]

---

##### `ControlPlaneInstanceType`<sup>Required</sup> <a name="ControlPlaneInstanceType" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType"></a>

```csharp
public string ControlPlaneInstanceType { get; }
```

- *Type:* string

---

##### `OutpostArns`<sup>Required</sup> <a name="OutpostArns" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.outpostArns"></a>

```csharp
public string[] OutpostArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterOutpostConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterOutpostConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterOutpostConfig">EksClusterOutpostConfig</a>

---


### EksClusterRemoteNetworkConfigOutputReference <a name="EksClusterRemoteNetworkConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterRemoteNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks">PutRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks">PutRemotePodNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks">ResetRemotePodNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRemoteNodeNetworks` <a name="PutRemoteNodeNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks"></a>

```csharp
private void PutRemoteNodeNetworks(EksClusterRemoteNetworkConfigRemoteNodeNetworks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemoteNodeNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---

##### `PutRemotePodNetworks` <a name="PutRemotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks"></a>

```csharp
private void PutRemotePodNetworks(EksClusterRemoteNetworkConfigRemotePodNetworks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.putRemotePodNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---

##### `ResetRemotePodNetworks` <a name="ResetRemotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.resetRemotePodNetworks"></a>

```csharp
private void ResetRemotePodNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks">RemoteNodeNetworks</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference">EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks">RemotePodNetworks</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference">EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput">RemoteNodeNetworksInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput">RemotePodNetworksInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RemoteNodeNetworks`<sup>Required</sup> <a name="RemoteNodeNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks"></a>

```csharp
public EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference RemoteNodeNetworks { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference">EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference</a>

---

##### `RemotePodNetworks`<sup>Required</sup> <a name="RemotePodNetworks" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks"></a>

```csharp
public EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference RemotePodNetworks { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference">EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference</a>

---

##### `RemoteNodeNetworksInput`<sup>Optional</sup> <a name="RemoteNodeNetworksInput" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworksInput"></a>

```csharp
public EksClusterRemoteNetworkConfigRemoteNodeNetworks RemoteNodeNetworksInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---

##### `RemotePodNetworksInput`<sup>Optional</sup> <a name="RemotePodNetworksInput" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworksInput"></a>

```csharp
public EksClusterRemoteNetworkConfigRemotePodNetworks RemotePodNetworksInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterRemoteNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfig">EksClusterRemoteNetworkConfig</a>

---


### EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resetCidrs"></a>

```csharp
private void ResetCidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs">Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrsInput"></a>

```csharp
public string[] CidrsInput { get; }
```

- *Type:* string[]

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs"></a>

```csharp
public string[] Cidrs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue"></a>

```csharp
public EksClusterRemoteNetworkConfigRemoteNodeNetworks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemoteNodeNetworks">EksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---


### EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference <a name="EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resetCidrs"></a>

```csharp
private void ResetCidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs">Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrsInput"></a>

```csharp
public string[] CidrsInput { get; }
```

- *Type:* string[]

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs"></a>

```csharp
public string[] Cidrs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue"></a>

```csharp
public EksClusterRemoteNetworkConfigRemotePodNetworks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterRemoteNetworkConfigRemotePodNetworks">EksClusterRemoteNetworkConfigRemotePodNetworks</a>

---


### EksClusterStorageConfigBlockStorageOutputReference <a name="EksClusterStorageConfigBlockStorageOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterStorageConfigBlockStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference.property.internalValue"></a>

```csharp
public EksClusterStorageConfigBlockStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---


### EksClusterStorageConfigOutputReference <a name="EksClusterStorageConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage">PutBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage">ResetBlockStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockStorage` <a name="PutBlockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage"></a>

```csharp
private void PutBlockStorage(EksClusterStorageConfigBlockStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.putBlockStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `ResetBlockStorage` <a name="ResetBlockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.resetBlockStorage"></a>

```csharp
private void ResetBlockStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage">BlockStorage</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput">BlockStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockStorage`<sup>Required</sup> <a name="BlockStorage" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorage"></a>

```csharp
public EksClusterStorageConfigBlockStorageOutputReference BlockStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorageOutputReference">EksClusterStorageConfigBlockStorageOutputReference</a>

---

##### `BlockStorageInput`<sup>Optional</sup> <a name="BlockStorageInput" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.blockStorageInput"></a>

```csharp
public EksClusterStorageConfigBlockStorage BlockStorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfigBlockStorage">EksClusterStorageConfigBlockStorage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterStorageConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterStorageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterStorageConfig">EksClusterStorageConfig</a>

---


### EksClusterTimeoutsOutputReference <a name="EksClusterTimeoutsOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EksClusterUpgradePolicyOutputReference <a name="EksClusterUpgradePolicyOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterUpgradePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType">ResetSupportType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportType` <a name="ResetSupportType" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.resetSupportType"></a>

```csharp
private void ResetSupportType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput">SupportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType">SupportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SupportTypeInput`<sup>Optional</sup> <a name="SupportTypeInput" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportTypeInput"></a>

```csharp
public string SupportTypeInput { get; }
```

- *Type:* string

---

##### `SupportType`<sup>Required</sup> <a name="SupportType" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.supportType"></a>

```csharp
public string SupportType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicyOutputReference.property.internalValue"></a>

```csharp
public EksClusterUpgradePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterUpgradePolicy">EksClusterUpgradePolicy</a>

---


### EksClusterVpcConfigOutputReference <a name="EksClusterVpcConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPrivateAccess">ResetEndpointPrivateAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPublicAccess">ResetEndpointPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetPublicAccessCidrs">ResetPublicAccessCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointPrivateAccess` <a name="ResetEndpointPrivateAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPrivateAccess"></a>

```csharp
private void ResetEndpointPrivateAccess()
```

##### `ResetEndpointPublicAccess` <a name="ResetEndpointPublicAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetEndpointPublicAccess"></a>

```csharp
private void ResetEndpointPublicAccess()
```

##### `ResetPublicAccessCidrs` <a name="ResetPublicAccessCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetPublicAccessCidrs"></a>

```csharp
private void ResetPublicAccessCidrs()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.clusterSecurityGroupId">ClusterSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccessInput">EndpointPrivateAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccessInput">EndpointPublicAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrsInput">PublicAccessCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccess">EndpointPrivateAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccess">EndpointPublicAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrs">PublicAccessCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterSecurityGroupId`<sup>Required</sup> <a name="ClusterSecurityGroupId" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.clusterSecurityGroupId"></a>

```csharp
public string ClusterSecurityGroupId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `EndpointPrivateAccessInput`<sup>Optional</sup> <a name="EndpointPrivateAccessInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccessInput"></a>

```csharp
public object EndpointPrivateAccessInput { get; }
```

- *Type:* object

---

##### `EndpointPublicAccessInput`<sup>Optional</sup> <a name="EndpointPublicAccessInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccessInput"></a>

```csharp
public object EndpointPublicAccessInput { get; }
```

- *Type:* object

---

##### `PublicAccessCidrsInput`<sup>Optional</sup> <a name="PublicAccessCidrsInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrsInput"></a>

```csharp
public string[] PublicAccessCidrsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `EndpointPrivateAccess`<sup>Required</sup> <a name="EndpointPrivateAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPrivateAccess"></a>

```csharp
public object EndpointPrivateAccess { get; }
```

- *Type:* object

---

##### `EndpointPublicAccess`<sup>Required</sup> <a name="EndpointPublicAccess" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.endpointPublicAccess"></a>

```csharp
public object EndpointPublicAccess { get; }
```

- *Type:* object

---

##### `PublicAccessCidrs`<sup>Required</sup> <a name="PublicAccessCidrs" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.publicAccessCidrs"></a>

```csharp
public string[] PublicAccessCidrs { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterVpcConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterVpcConfig">EksClusterVpcConfig</a>

---


### EksClusterZonalShiftConfigOutputReference <a name="EksClusterZonalShiftConfigOutputReference" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksClusterZonalShiftConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfigOutputReference.property.internalValue"></a>

```csharp
public EksClusterZonalShiftConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksCluster.EksClusterZonalShiftConfig">EksClusterZonalShiftConfig</a>

---



