# `opsworksEcsClusterLayer` Submodule <a name="`opsworksEcsClusterLayer` Submodule" id="@cdktf/provider-aws.opsworksEcsClusterLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksEcsClusterLayer <a name="OpsworksEcsClusterLayer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer aws_opsworks_ecs_cluster_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayer(Construct Scope, string Id, OpsworksEcsClusterLayerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig">OpsworksEcsClusterLayerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig">OpsworksEcsClusterLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration">PutCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume">PutEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling">PutLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignElasticIps">ResetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignPublicIps">ResetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCloudwatchConfiguration">ResetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomConfigureRecipes">ResetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomDeployRecipes">ResetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomInstanceProfileArn">ResetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomJson">ResetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSecurityGroupIds">ResetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSetupRecipes">ResetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomShutdownRecipes">ResetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomUndeployRecipes">ResetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetDrainElbOnShutdown">ResetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetEbsVolume">ResetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetElasticLoadBalancer">ResetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstallUpdatesOnBoot">ResetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstanceShutdownTimeout">ResetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetLoadBasedAutoScaling">ResetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetSystemPackages">ResetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetUseEbsOptimizedInstances">ResetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration"></a>

```csharp
private void PutCloudwatchConfiguration(OpsworksEcsClusterLayerCloudwatchConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---

##### `PutEbsVolume` <a name="PutEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume"></a>

```csharp
private void PutEbsVolume(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume.parameter.value"></a>

- *Type:* object

---

##### `PutLoadBasedAutoScaling` <a name="PutLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling"></a>

```csharp
private void PutLoadBasedAutoScaling(OpsworksEcsClusterLayerLoadBasedAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---

##### `ResetAutoAssignElasticIps` <a name="ResetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignElasticIps"></a>

```csharp
private void ResetAutoAssignElasticIps()
```

##### `ResetAutoAssignPublicIps` <a name="ResetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignPublicIps"></a>

```csharp
private void ResetAutoAssignPublicIps()
```

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoHealing"></a>

```csharp
private void ResetAutoHealing()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCloudwatchConfiguration"></a>

```csharp
private void ResetCloudwatchConfiguration()
```

##### `ResetCustomConfigureRecipes` <a name="ResetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomConfigureRecipes"></a>

```csharp
private void ResetCustomConfigureRecipes()
```

##### `ResetCustomDeployRecipes` <a name="ResetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomDeployRecipes"></a>

```csharp
private void ResetCustomDeployRecipes()
```

##### `ResetCustomInstanceProfileArn` <a name="ResetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomInstanceProfileArn"></a>

```csharp
private void ResetCustomInstanceProfileArn()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomJson"></a>

```csharp
private void ResetCustomJson()
```

##### `ResetCustomSecurityGroupIds` <a name="ResetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSecurityGroupIds"></a>

```csharp
private void ResetCustomSecurityGroupIds()
```

##### `ResetCustomSetupRecipes` <a name="ResetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSetupRecipes"></a>

```csharp
private void ResetCustomSetupRecipes()
```

##### `ResetCustomShutdownRecipes` <a name="ResetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomShutdownRecipes"></a>

```csharp
private void ResetCustomShutdownRecipes()
```

##### `ResetCustomUndeployRecipes` <a name="ResetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomUndeployRecipes"></a>

```csharp
private void ResetCustomUndeployRecipes()
```

##### `ResetDrainElbOnShutdown` <a name="ResetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetDrainElbOnShutdown"></a>

```csharp
private void ResetDrainElbOnShutdown()
```

##### `ResetEbsVolume` <a name="ResetEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetEbsVolume"></a>

```csharp
private void ResetEbsVolume()
```

##### `ResetElasticLoadBalancer` <a name="ResetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetElasticLoadBalancer"></a>

```csharp
private void ResetElasticLoadBalancer()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstallUpdatesOnBoot` <a name="ResetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstallUpdatesOnBoot"></a>

```csharp
private void ResetInstallUpdatesOnBoot()
```

##### `ResetInstanceShutdownTimeout` <a name="ResetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstanceShutdownTimeout"></a>

```csharp
private void ResetInstanceShutdownTimeout()
```

##### `ResetLoadBasedAutoScaling` <a name="ResetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetLoadBasedAutoScaling"></a>

```csharp
private void ResetLoadBasedAutoScaling()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSystemPackages` <a name="ResetSystemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetSystemPackages"></a>

```csharp
private void ResetSystemPackages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUseEbsOptimizedInstances` <a name="ResetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetUseEbsOptimizedInstances"></a>

```csharp
private void ResetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksEcsClusterLayer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksEcsClusterLayer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksEcsClusterLayer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference">OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolume">EbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList">OpsworksEcsClusterLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIpsInput">AutoAssignElasticIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIpsInput">AutoAssignPublicIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealingInput">AutoHealingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipesInput">CustomConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipesInput">CustomDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArnInput">CustomInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJsonInput">CustomJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIdsInput">CustomSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipesInput">CustomSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipesInput">CustomShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipesInput">CustomUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdownInput">DrainElbOnShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolumeInput">EbsVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArnInput">EcsClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancerInput">ElasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBootInput">InstallUpdatesOnBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeoutInput">InstanceShutdownTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScalingInput">LoadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackIdInput">StackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackagesInput">SystemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstancesInput">UseEbsOptimizedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealing">AutoHealing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJson">CustomJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArn">EcsClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackages">SystemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfiguration"></a>

```csharp
public OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference CloudwatchConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference">OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference</a>

---

##### `EbsVolume`<sup>Required</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolume"></a>

```csharp
public OpsworksEcsClusterLayerEbsVolumeList EbsVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList">OpsworksEcsClusterLayerEbsVolumeList</a>

---

##### `LoadBasedAutoScaling`<sup>Required</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScaling"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference LoadBasedAutoScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference</a>

---

##### `AutoAssignElasticIpsInput`<sup>Optional</sup> <a name="AutoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIpsInput"></a>

```csharp
public object AutoAssignElasticIpsInput { get; }
```

- *Type:* object

---

##### `AutoAssignPublicIpsInput`<sup>Optional</sup> <a name="AutoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIpsInput"></a>

```csharp
public object AutoAssignPublicIpsInput { get; }
```

- *Type:* object

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealingInput"></a>

```csharp
public object AutoHealingInput { get; }
```

- *Type:* object

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfigurationInput"></a>

```csharp
public OpsworksEcsClusterLayerCloudwatchConfiguration CloudwatchConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---

##### `CustomConfigureRecipesInput`<sup>Optional</sup> <a name="CustomConfigureRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipesInput"></a>

```csharp
public string[] CustomConfigureRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomDeployRecipesInput`<sup>Optional</sup> <a name="CustomDeployRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipesInput"></a>

```csharp
public string[] CustomDeployRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomInstanceProfileArnInput`<sup>Optional</sup> <a name="CustomInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArnInput"></a>

```csharp
public string CustomInstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJsonInput"></a>

```csharp
public string CustomJsonInput { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIdsInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIdsInput"></a>

```csharp
public string[] CustomSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `CustomSetupRecipesInput`<sup>Optional</sup> <a name="CustomSetupRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipesInput"></a>

```csharp
public string[] CustomSetupRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomShutdownRecipesInput`<sup>Optional</sup> <a name="CustomShutdownRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipesInput"></a>

```csharp
public string[] CustomShutdownRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomUndeployRecipesInput`<sup>Optional</sup> <a name="CustomUndeployRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipesInput"></a>

```csharp
public string[] CustomUndeployRecipesInput { get; }
```

- *Type:* string[]

---

##### `DrainElbOnShutdownInput`<sup>Optional</sup> <a name="DrainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdownInput"></a>

```csharp
public object DrainElbOnShutdownInput { get; }
```

- *Type:* object

---

##### `EbsVolumeInput`<sup>Optional</sup> <a name="EbsVolumeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolumeInput"></a>

```csharp
public object EbsVolumeInput { get; }
```

- *Type:* object

---

##### `EcsClusterArnInput`<sup>Optional</sup> <a name="EcsClusterArnInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArnInput"></a>

```csharp
public string EcsClusterArnInput { get; }
```

- *Type:* string

---

##### `ElasticLoadBalancerInput`<sup>Optional</sup> <a name="ElasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancerInput"></a>

```csharp
public string ElasticLoadBalancerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstallUpdatesOnBootInput`<sup>Optional</sup> <a name="InstallUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBootInput"></a>

```csharp
public object InstallUpdatesOnBootInput { get; }
```

- *Type:* object

---

##### `InstanceShutdownTimeoutInput`<sup>Optional</sup> <a name="InstanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeoutInput"></a>

```csharp
public double InstanceShutdownTimeoutInput { get; }
```

- *Type:* double

---

##### `LoadBasedAutoScalingInput`<sup>Optional</sup> <a name="LoadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScalingInput"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScaling LoadBasedAutoScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackIdInput"></a>

```csharp
public string StackIdInput { get; }
```

- *Type:* string

---

##### `SystemPackagesInput`<sup>Optional</sup> <a name="SystemPackagesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackagesInput"></a>

```csharp
public string[] SystemPackagesInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="UseEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstancesInput"></a>

```csharp
public object UseEbsOptimizedInstancesInput { get; }
```

- *Type:* object

---

##### `AutoAssignElasticIps`<sup>Required</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIps"></a>

```csharp
public object AutoAssignElasticIps { get; }
```

- *Type:* object

---

##### `AutoAssignPublicIps`<sup>Required</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIps"></a>

```csharp
public object AutoAssignPublicIps { get; }
```

- *Type:* object

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealing"></a>

```csharp
public object AutoHealing { get; }
```

- *Type:* object

---

##### `CustomConfigureRecipes`<sup>Required</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipes"></a>

```csharp
public string[] CustomConfigureRecipes { get; }
```

- *Type:* string[]

---

##### `CustomDeployRecipes`<sup>Required</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipes"></a>

```csharp
public string[] CustomDeployRecipes { get; }
```

- *Type:* string[]

---

##### `CustomInstanceProfileArn`<sup>Required</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArn"></a>

```csharp
public string CustomInstanceProfileArn { get; }
```

- *Type:* string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJson"></a>

```csharp
public string CustomJson { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIds`<sup>Required</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIds"></a>

```csharp
public string[] CustomSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `CustomSetupRecipes`<sup>Required</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipes"></a>

```csharp
public string[] CustomSetupRecipes { get; }
```

- *Type:* string[]

---

##### `CustomShutdownRecipes`<sup>Required</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipes"></a>

```csharp
public string[] CustomShutdownRecipes { get; }
```

- *Type:* string[]

---

##### `CustomUndeployRecipes`<sup>Required</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipes"></a>

```csharp
public string[] CustomUndeployRecipes { get; }
```

- *Type:* string[]

---

##### `DrainElbOnShutdown`<sup>Required</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdown"></a>

```csharp
public object DrainElbOnShutdown { get; }
```

- *Type:* object

---

##### `EcsClusterArn`<sup>Required</sup> <a name="EcsClusterArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArn"></a>

```csharp
public string EcsClusterArn { get; }
```

- *Type:* string

---

##### `ElasticLoadBalancer`<sup>Required</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancer"></a>

```csharp
public string ElasticLoadBalancer { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallUpdatesOnBoot`<sup>Required</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBoot"></a>

```csharp
public object InstallUpdatesOnBoot { get; }
```

- *Type:* object

---

##### `InstanceShutdownTimeout`<sup>Required</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeout"></a>

```csharp
public double InstanceShutdownTimeout { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

##### `SystemPackages`<sup>Required</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackages"></a>

```csharp
public string[] SystemPackages { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseEbsOptimizedInstances`<sup>Required</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstances"></a>

```csharp
public object UseEbsOptimizedInstances { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksEcsClusterLayerCloudwatchConfiguration <a name="OpsworksEcsClusterLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerCloudwatchConfiguration {
    object Enabled = null,
    object LogStreams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.logStreams">LogStreams</a></code> | <code>object</code> | log_streams block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}.

---

##### `LogStreams`<sup>Optional</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.logStreams"></a>

```csharp
public object LogStreams { get; set; }
```

- *Type:* object

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_streams OpsworksEcsClusterLayer#log_streams}

---

### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams {
    string File,
    string LogGroupName,
    double BatchCount = null,
    double BatchSize = null,
    double BufferDuration = null,
    string DatetimeFormat = null,
    string Encoding = null,
    string FileFingerprintLines = null,
    string InitialPosition = null,
    string MultilineStartPattern = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.file">File</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchCount">BatchCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchSize">BatchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.bufferDuration">BufferDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">DatetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.initialPosition">InitialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}.

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```csharp
public double BatchCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}.

---

##### `BufferDuration`<sup>Optional</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```csharp
public double BufferDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}.

---

##### `DatetimeFormat`<sup>Optional</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```csharp
public string DatetimeFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}.

---

##### `FileFingerprintLines`<sup>Optional</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```csharp
public string FileFingerprintLines { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}.

---

##### `InitialPosition`<sup>Optional</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```csharp
public string InitialPosition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}.

---

##### `MultilineStartPattern`<sup>Optional</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```csharp
public string MultilineStartPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}.

---

### OpsworksEcsClusterLayerConfig <a name="OpsworksEcsClusterLayerConfig" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EcsClusterArn,
    string StackId,
    object AutoAssignElasticIps = null,
    object AutoAssignPublicIps = null,
    object AutoHealing = null,
    OpsworksEcsClusterLayerCloudwatchConfiguration CloudwatchConfiguration = null,
    string[] CustomConfigureRecipes = null,
    string[] CustomDeployRecipes = null,
    string CustomInstanceProfileArn = null,
    string CustomJson = null,
    string[] CustomSecurityGroupIds = null,
    string[] CustomSetupRecipes = null,
    string[] CustomShutdownRecipes = null,
    string[] CustomUndeployRecipes = null,
    object DrainElbOnShutdown = null,
    object EbsVolume = null,
    string ElasticLoadBalancer = null,
    string Id = null,
    object InstallUpdatesOnBoot = null,
    double InstanceShutdownTimeout = null,
    OpsworksEcsClusterLayerLoadBasedAutoScaling LoadBasedAutoScaling = null,
    string Name = null,
    string[] SystemPackages = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object UseEbsOptimizedInstances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ecsClusterArn">EcsClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.stackId">StackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoHealing">AutoHealing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customJson">CustomJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ebsVolume">EbsVolume</a></code> | <code>object</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.systemPackages">SystemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EcsClusterArn`<sup>Required</sup> <a name="EcsClusterArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ecsClusterArn"></a>

```csharp
public string EcsClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}.

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.stackId"></a>

```csharp
public string StackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}.

---

##### `AutoAssignElasticIps`<sup>Optional</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignElasticIps"></a>

```csharp
public object AutoAssignElasticIps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}.

---

##### `AutoAssignPublicIps`<sup>Optional</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignPublicIps"></a>

```csharp
public object AutoAssignPublicIps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoHealing"></a>

```csharp
public object AutoHealing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}.

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.cloudwatchConfiguration"></a>

```csharp
public OpsworksEcsClusterLayerCloudwatchConfiguration CloudwatchConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cloudwatch_configuration OpsworksEcsClusterLayer#cloudwatch_configuration}

---

##### `CustomConfigureRecipes`<sup>Optional</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customConfigureRecipes"></a>

```csharp
public string[] CustomConfigureRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}.

---

##### `CustomDeployRecipes`<sup>Optional</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customDeployRecipes"></a>

```csharp
public string[] CustomDeployRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}.

---

##### `CustomInstanceProfileArn`<sup>Optional</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customInstanceProfileArn"></a>

```csharp
public string CustomInstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}.

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customJson"></a>

```csharp
public string CustomJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}.

---

##### `CustomSecurityGroupIds`<sup>Optional</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSecurityGroupIds"></a>

```csharp
public string[] CustomSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}.

---

##### `CustomSetupRecipes`<sup>Optional</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSetupRecipes"></a>

```csharp
public string[] CustomSetupRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}.

---

##### `CustomShutdownRecipes`<sup>Optional</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customShutdownRecipes"></a>

```csharp
public string[] CustomShutdownRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}.

---

##### `CustomUndeployRecipes`<sup>Optional</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customUndeployRecipes"></a>

```csharp
public string[] CustomUndeployRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}.

---

##### `DrainElbOnShutdown`<sup>Optional</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.drainElbOnShutdown"></a>

```csharp
public object DrainElbOnShutdown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}.

---

##### `EbsVolume`<sup>Optional</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ebsVolume"></a>

```csharp
public object EbsVolume { get; set; }
```

- *Type:* object

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ebs_volume OpsworksEcsClusterLayer#ebs_volume}

---

##### `ElasticLoadBalancer`<sup>Optional</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.elasticLoadBalancer"></a>

```csharp
public string ElasticLoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallUpdatesOnBoot`<sup>Optional</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.installUpdatesOnBoot"></a>

```csharp
public object InstallUpdatesOnBoot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}.

---

##### `InstanceShutdownTimeout`<sup>Optional</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.instanceShutdownTimeout"></a>

```csharp
public double InstanceShutdownTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}.

---

##### `LoadBasedAutoScaling`<sup>Optional</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.loadBasedAutoScaling"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScaling LoadBasedAutoScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_based_auto_scaling OpsworksEcsClusterLayer#load_based_auto_scaling}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}.

---

##### `SystemPackages`<sup>Optional</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.systemPackages"></a>

```csharp
public string[] SystemPackages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}.

---

##### `UseEbsOptimizedInstances`<sup>Optional</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.useEbsOptimizedInstances"></a>

```csharp
public object UseEbsOptimizedInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}.

---

### OpsworksEcsClusterLayerEbsVolume <a name="OpsworksEcsClusterLayerEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerEbsVolume {
    string MountPoint,
    double NumberOfDisks,
    double Size,
    object Encrypted = null,
    double Iops = null,
    string RaidLevel = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.mountPoint">MountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.raidLevel">RaidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}.

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}.

---

##### `RaidLevel`<sup>Optional</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.raidLevel"></a>

```csharp
public string RaidLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}.

---

### OpsworksEcsClusterLayerLoadBasedAutoScaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerLoadBasedAutoScaling {
    OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling Downscaling = null,
    object Enable = null,
    OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling Upscaling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `Downscaling`<sup>Optional</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.downscaling"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling Downscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#downscaling OpsworksEcsClusterLayer#downscaling}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}.

---

##### `Upscaling`<sup>Optional</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.upscaling"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling Upscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#upscaling OpsworksEcsClusterLayer#upscaling}

---

### OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling {
    string[] Alarms = null,
    double CpuThreshold = null,
    double IgnoreMetricsTime = null,
    double InstanceCount = null,
    double LoadThreshold = null,
    double MemoryThreshold = null,
    double ThresholdsWaitTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

### OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling {
    string[] Alarms = null,
    double CpuThreshold = null,
    double IgnoreMetricsTime = null,
    double InstanceCount = null,
    double LoadThreshold = null,
    double MemoryThreshold = null,
    double ThresholdsWaitTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get"></a>

```csharp
private OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">ResetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">ResetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">ResetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">ResetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">ResetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">ResetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```csharp
private void ResetBatchCount()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```csharp
private void ResetBatchSize()
```

##### `ResetBufferDuration` <a name="ResetBufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```csharp
private void ResetBufferDuration()
```

##### `ResetDatetimeFormat` <a name="ResetDatetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```csharp
private void ResetDatetimeFormat()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFileFingerprintLines` <a name="ResetFileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```csharp
private void ResetFileFingerprintLines()
```

##### `ResetInitialPosition` <a name="ResetInitialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```csharp
private void ResetInitialPosition()
```

##### `ResetMultilineStartPattern` <a name="ResetMultilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```csharp
private void ResetMultilineStartPattern()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">BufferDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">DatetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">FileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">InitialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">MultilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">BatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">BufferDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">DatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">InitialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```csharp
public double BatchCountInput { get; }
```

- *Type:* double

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `BufferDurationInput`<sup>Optional</sup> <a name="BufferDurationInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```csharp
public double BufferDurationInput { get; }
```

- *Type:* double

---

##### `DatetimeFormatInput`<sup>Optional</sup> <a name="DatetimeFormatInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```csharp
public string DatetimeFormatInput { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FileFingerprintLinesInput`<sup>Optional</sup> <a name="FileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```csharp
public string FileFingerprintLinesInput { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `InitialPositionInput`<sup>Optional</sup> <a name="InitialPositionInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```csharp
public string InitialPositionInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `MultilineStartPatternInput`<sup>Optional</sup> <a name="MultilineStartPatternInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```csharp
public string MultilineStartPatternInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```csharp
public double BatchCount { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `BufferDuration`<sup>Required</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```csharp
public double BufferDuration { get; }
```

- *Type:* double

---

##### `DatetimeFormat`<sup>Required</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```csharp
public string DatetimeFormat { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `FileFingerprintLines`<sup>Required</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```csharp
public string FileFingerprintLines { get; }
```

- *Type:* string

---

##### `InitialPosition`<sup>Required</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```csharp
public string InitialPosition { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `MultilineStartPattern`<sup>Required</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```csharp
public string MultilineStartPattern { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference <a name="OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams">PutLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetLogStreams">ResetLogStreams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```csharp
private void PutLogStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogStreams` <a name="ResetLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```csharp
private void ResetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">LogStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```csharp
public OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList LogStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```csharp
public object LogStreamsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```csharp
public OpsworksEcsClusterLayerCloudwatchConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---


### OpsworksEcsClusterLayerEbsVolumeList <a name="OpsworksEcsClusterLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerEbsVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get"></a>

```csharp
private OpsworksEcsClusterLayerEbsVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksEcsClusterLayerEbsVolumeOutputReference <a name="OpsworksEcsClusterLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerEbsVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetRaidLevel">ResetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetRaidLevel` <a name="ResetRaidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```csharp
private void ResetRaidLevel()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevelInput">RaidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevel">RaidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```csharp
public double NumberOfDisksInput { get; }
```

- *Type:* double

---

##### `RaidLevelInput`<sup>Optional</sup> <a name="RaidLevelInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```csharp
public string RaidLevelInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; }
```

- *Type:* double

---

##### `RaidLevel`<sup>Required</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevel"></a>

```csharp
public string RaidLevel { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```csharp
private void ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```csharp
private void ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```csharp
private void ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```csharp
private void ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```csharp
private void ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```csharp
public double CpuThresholdInput { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```csharp
public double IgnoreMetricsTimeInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```csharp
public double LoadThresholdInput { get; }
```

- *Type:* double

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```csharp
public double MemoryThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```csharp
public double ThresholdsWaitTimeInput { get; }
```

- *Type:* double

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; }
```

- *Type:* double

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling">PutDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling">PutUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetDownscaling">ResetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetUpscaling">ResetUpscaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownscaling` <a name="PutDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```csharp
private void PutDownscaling(OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---

##### `PutUpscaling` <a name="PutUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```csharp
private void PutUpscaling(OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---

##### `ResetDownscaling` <a name="ResetDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```csharp
private void ResetDownscaling()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetUpscaling` <a name="ResetUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```csharp
private void ResetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">DownscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">UpscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Downscaling`<sup>Required</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference Downscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `Upscaling`<sup>Required</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference Upscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `DownscalingInput`<sup>Optional</sup> <a name="DownscalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling DownscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `UpscalingInput`<sup>Optional</sup> <a name="UpscalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling UpscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```csharp
private void ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```csharp
private void ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```csharp
private void ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```csharp
private void ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```csharp
private void ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```csharp
public double CpuThresholdInput { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```csharp
public double IgnoreMetricsTimeInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```csharp
public double LoadThresholdInput { get; }
```

- *Type:* double

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```csharp
public double MemoryThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```csharp
public double ThresholdsWaitTimeInput { get; }
```

- *Type:* double

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; }
```

- *Type:* double

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---



