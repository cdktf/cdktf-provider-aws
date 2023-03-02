# `opsworksStaticWebLayer` Submodule <a name="`opsworksStaticWebLayer` Submodule" id="@cdktf/provider-aws.opsworksStaticWebLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksStaticWebLayer <a name="OpsworksStaticWebLayer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer aws_opsworks_static_web_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayer(Construct Scope, string Id, OpsworksStaticWebLayerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig">OpsworksStaticWebLayerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig">OpsworksStaticWebLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putCloudwatchConfiguration">PutCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putEbsVolume">PutEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putLoadBasedAutoScaling">PutLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoAssignElasticIps">ResetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoAssignPublicIps">ResetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCloudwatchConfiguration">ResetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomConfigureRecipes">ResetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomDeployRecipes">ResetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomInstanceProfileArn">ResetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomJson">ResetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomSecurityGroupIds">ResetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomSetupRecipes">ResetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomShutdownRecipes">ResetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomUndeployRecipes">ResetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetDrainElbOnShutdown">ResetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetEbsVolume">ResetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetElasticLoadBalancer">ResetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetInstallUpdatesOnBoot">ResetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetInstanceShutdownTimeout">ResetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetLoadBasedAutoScaling">ResetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetSystemPackages">ResetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetUseEbsOptimizedInstances">ResetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putCloudwatchConfiguration"></a>

```csharp
private void PutCloudwatchConfiguration(OpsworksStaticWebLayerCloudwatchConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a>

---

##### `PutEbsVolume` <a name="PutEbsVolume" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putEbsVolume"></a>

```csharp
private void PutEbsVolume(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putEbsVolume.parameter.value"></a>

- *Type:* object

---

##### `PutLoadBasedAutoScaling` <a name="PutLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putLoadBasedAutoScaling"></a>

```csharp
private void PutLoadBasedAutoScaling(OpsworksStaticWebLayerLoadBasedAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling">OpsworksStaticWebLayerLoadBasedAutoScaling</a>

---

##### `ResetAutoAssignElasticIps` <a name="ResetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoAssignElasticIps"></a>

```csharp
private void ResetAutoAssignElasticIps()
```

##### `ResetAutoAssignPublicIps` <a name="ResetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoAssignPublicIps"></a>

```csharp
private void ResetAutoAssignPublicIps()
```

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetAutoHealing"></a>

```csharp
private void ResetAutoHealing()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCloudwatchConfiguration"></a>

```csharp
private void ResetCloudwatchConfiguration()
```

##### `ResetCustomConfigureRecipes` <a name="ResetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomConfigureRecipes"></a>

```csharp
private void ResetCustomConfigureRecipes()
```

##### `ResetCustomDeployRecipes` <a name="ResetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomDeployRecipes"></a>

```csharp
private void ResetCustomDeployRecipes()
```

##### `ResetCustomInstanceProfileArn` <a name="ResetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomInstanceProfileArn"></a>

```csharp
private void ResetCustomInstanceProfileArn()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomJson"></a>

```csharp
private void ResetCustomJson()
```

##### `ResetCustomSecurityGroupIds` <a name="ResetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomSecurityGroupIds"></a>

```csharp
private void ResetCustomSecurityGroupIds()
```

##### `ResetCustomSetupRecipes` <a name="ResetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomSetupRecipes"></a>

```csharp
private void ResetCustomSetupRecipes()
```

##### `ResetCustomShutdownRecipes` <a name="ResetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomShutdownRecipes"></a>

```csharp
private void ResetCustomShutdownRecipes()
```

##### `ResetCustomUndeployRecipes` <a name="ResetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetCustomUndeployRecipes"></a>

```csharp
private void ResetCustomUndeployRecipes()
```

##### `ResetDrainElbOnShutdown` <a name="ResetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetDrainElbOnShutdown"></a>

```csharp
private void ResetDrainElbOnShutdown()
```

##### `ResetEbsVolume` <a name="ResetEbsVolume" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetEbsVolume"></a>

```csharp
private void ResetEbsVolume()
```

##### `ResetElasticLoadBalancer` <a name="ResetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetElasticLoadBalancer"></a>

```csharp
private void ResetElasticLoadBalancer()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstallUpdatesOnBoot` <a name="ResetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetInstallUpdatesOnBoot"></a>

```csharp
private void ResetInstallUpdatesOnBoot()
```

##### `ResetInstanceShutdownTimeout` <a name="ResetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetInstanceShutdownTimeout"></a>

```csharp
private void ResetInstanceShutdownTimeout()
```

##### `ResetLoadBasedAutoScaling` <a name="ResetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetLoadBasedAutoScaling"></a>

```csharp
private void ResetLoadBasedAutoScaling()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSystemPackages` <a name="ResetSystemPackages" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetSystemPackages"></a>

```csharp
private void ResetSystemPackages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUseEbsOptimizedInstances` <a name="ResetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.resetUseEbsOptimizedInstances"></a>

```csharp
private void ResetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksStaticWebLayer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksStaticWebLayer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksStaticWebLayer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference">OpsworksStaticWebLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.ebsVolume">EbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList">OpsworksStaticWebLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference">OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignElasticIpsInput">AutoAssignElasticIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignPublicIpsInput">AutoAssignPublicIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoHealingInput">AutoHealingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customConfigureRecipesInput">CustomConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customDeployRecipesInput">CustomDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customInstanceProfileArnInput">CustomInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customJsonInput">CustomJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSecurityGroupIdsInput">CustomSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSetupRecipesInput">CustomSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customShutdownRecipesInput">CustomShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customUndeployRecipesInput">CustomUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.drainElbOnShutdownInput">DrainElbOnShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.ebsVolumeInput">EbsVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.elasticLoadBalancerInput">ElasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.installUpdatesOnBootInput">InstallUpdatesOnBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.instanceShutdownTimeoutInput">InstanceShutdownTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.loadBasedAutoScalingInput">LoadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling">OpsworksStaticWebLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.stackIdInput">StackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.systemPackagesInput">SystemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.useEbsOptimizedInstancesInput">UseEbsOptimizedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoHealing">AutoHealing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customJson">CustomJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.systemPackages">SystemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cloudwatchConfiguration"></a>

```csharp
public OpsworksStaticWebLayerCloudwatchConfigurationOutputReference CloudwatchConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference">OpsworksStaticWebLayerCloudwatchConfigurationOutputReference</a>

---

##### `EbsVolume`<sup>Required</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.ebsVolume"></a>

```csharp
public OpsworksStaticWebLayerEbsVolumeList EbsVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList">OpsworksStaticWebLayerEbsVolumeList</a>

---

##### `LoadBasedAutoScaling`<sup>Required</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.loadBasedAutoScaling"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference LoadBasedAutoScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference">OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference</a>

---

##### `AutoAssignElasticIpsInput`<sup>Optional</sup> <a name="AutoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignElasticIpsInput"></a>

```csharp
public object AutoAssignElasticIpsInput { get; }
```

- *Type:* object

---

##### `AutoAssignPublicIpsInput`<sup>Optional</sup> <a name="AutoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignPublicIpsInput"></a>

```csharp
public object AutoAssignPublicIpsInput { get; }
```

- *Type:* object

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoHealingInput"></a>

```csharp
public object AutoHealingInput { get; }
```

- *Type:* object

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.cloudwatchConfigurationInput"></a>

```csharp
public OpsworksStaticWebLayerCloudwatchConfiguration CloudwatchConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a>

---

##### `CustomConfigureRecipesInput`<sup>Optional</sup> <a name="CustomConfigureRecipesInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customConfigureRecipesInput"></a>

```csharp
public string[] CustomConfigureRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomDeployRecipesInput`<sup>Optional</sup> <a name="CustomDeployRecipesInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customDeployRecipesInput"></a>

```csharp
public string[] CustomDeployRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomInstanceProfileArnInput`<sup>Optional</sup> <a name="CustomInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customInstanceProfileArnInput"></a>

```csharp
public string CustomInstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customJsonInput"></a>

```csharp
public string CustomJsonInput { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIdsInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSecurityGroupIdsInput"></a>

```csharp
public string[] CustomSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `CustomSetupRecipesInput`<sup>Optional</sup> <a name="CustomSetupRecipesInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSetupRecipesInput"></a>

```csharp
public string[] CustomSetupRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomShutdownRecipesInput`<sup>Optional</sup> <a name="CustomShutdownRecipesInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customShutdownRecipesInput"></a>

```csharp
public string[] CustomShutdownRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomUndeployRecipesInput`<sup>Optional</sup> <a name="CustomUndeployRecipesInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customUndeployRecipesInput"></a>

```csharp
public string[] CustomUndeployRecipesInput { get; }
```

- *Type:* string[]

---

##### `DrainElbOnShutdownInput`<sup>Optional</sup> <a name="DrainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.drainElbOnShutdownInput"></a>

```csharp
public object DrainElbOnShutdownInput { get; }
```

- *Type:* object

---

##### `EbsVolumeInput`<sup>Optional</sup> <a name="EbsVolumeInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.ebsVolumeInput"></a>

```csharp
public object EbsVolumeInput { get; }
```

- *Type:* object

---

##### `ElasticLoadBalancerInput`<sup>Optional</sup> <a name="ElasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.elasticLoadBalancerInput"></a>

```csharp
public string ElasticLoadBalancerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstallUpdatesOnBootInput`<sup>Optional</sup> <a name="InstallUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.installUpdatesOnBootInput"></a>

```csharp
public object InstallUpdatesOnBootInput { get; }
```

- *Type:* object

---

##### `InstanceShutdownTimeoutInput`<sup>Optional</sup> <a name="InstanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.instanceShutdownTimeoutInput"></a>

```csharp
public double InstanceShutdownTimeoutInput { get; }
```

- *Type:* double

---

##### `LoadBasedAutoScalingInput`<sup>Optional</sup> <a name="LoadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.loadBasedAutoScalingInput"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScaling LoadBasedAutoScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling">OpsworksStaticWebLayerLoadBasedAutoScaling</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.stackIdInput"></a>

```csharp
public string StackIdInput { get; }
```

- *Type:* string

---

##### `SystemPackagesInput`<sup>Optional</sup> <a name="SystemPackagesInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.systemPackagesInput"></a>

```csharp
public string[] SystemPackagesInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="UseEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.useEbsOptimizedInstancesInput"></a>

```csharp
public object UseEbsOptimizedInstancesInput { get; }
```

- *Type:* object

---

##### `AutoAssignElasticIps`<sup>Required</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignElasticIps"></a>

```csharp
public object AutoAssignElasticIps { get; }
```

- *Type:* object

---

##### `AutoAssignPublicIps`<sup>Required</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoAssignPublicIps"></a>

```csharp
public object AutoAssignPublicIps { get; }
```

- *Type:* object

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.autoHealing"></a>

```csharp
public object AutoHealing { get; }
```

- *Type:* object

---

##### `CustomConfigureRecipes`<sup>Required</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customConfigureRecipes"></a>

```csharp
public string[] CustomConfigureRecipes { get; }
```

- *Type:* string[]

---

##### `CustomDeployRecipes`<sup>Required</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customDeployRecipes"></a>

```csharp
public string[] CustomDeployRecipes { get; }
```

- *Type:* string[]

---

##### `CustomInstanceProfileArn`<sup>Required</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customInstanceProfileArn"></a>

```csharp
public string CustomInstanceProfileArn { get; }
```

- *Type:* string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customJson"></a>

```csharp
public string CustomJson { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIds`<sup>Required</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSecurityGroupIds"></a>

```csharp
public string[] CustomSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `CustomSetupRecipes`<sup>Required</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customSetupRecipes"></a>

```csharp
public string[] CustomSetupRecipes { get; }
```

- *Type:* string[]

---

##### `CustomShutdownRecipes`<sup>Required</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customShutdownRecipes"></a>

```csharp
public string[] CustomShutdownRecipes { get; }
```

- *Type:* string[]

---

##### `CustomUndeployRecipes`<sup>Required</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.customUndeployRecipes"></a>

```csharp
public string[] CustomUndeployRecipes { get; }
```

- *Type:* string[]

---

##### `DrainElbOnShutdown`<sup>Required</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.drainElbOnShutdown"></a>

```csharp
public object DrainElbOnShutdown { get; }
```

- *Type:* object

---

##### `ElasticLoadBalancer`<sup>Required</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.elasticLoadBalancer"></a>

```csharp
public string ElasticLoadBalancer { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallUpdatesOnBoot`<sup>Required</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.installUpdatesOnBoot"></a>

```csharp
public object InstallUpdatesOnBoot { get; }
```

- *Type:* object

---

##### `InstanceShutdownTimeout`<sup>Required</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.instanceShutdownTimeout"></a>

```csharp
public double InstanceShutdownTimeout { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

##### `SystemPackages`<sup>Required</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.systemPackages"></a>

```csharp
public string[] SystemPackages { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseEbsOptimizedInstances`<sup>Required</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.useEbsOptimizedInstances"></a>

```csharp
public object UseEbsOptimizedInstances { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksStaticWebLayerCloudwatchConfiguration <a name="OpsworksStaticWebLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerCloudwatchConfiguration {
    object Enabled = null,
    object LogStreams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#enabled OpsworksStaticWebLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.property.logStreams">LogStreams</a></code> | <code>object</code> | log_streams block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#enabled OpsworksStaticWebLayer#enabled}.

---

##### `LogStreams`<sup>Optional</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration.property.logStreams"></a>

```csharp
public object LogStreams { get; set; }
```

- *Type:* object

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#log_streams OpsworksStaticWebLayer#log_streams}

---

### OpsworksStaticWebLayerCloudwatchConfigurationLogStreams <a name="OpsworksStaticWebLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerCloudwatchConfigurationLogStreams {
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
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.file">File</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#file OpsworksStaticWebLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#log_group_name OpsworksStaticWebLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.batchCount">BatchCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#batch_count OpsworksStaticWebLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.batchSize">BatchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#batch_size OpsworksStaticWebLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.bufferDuration">BufferDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#buffer_duration OpsworksStaticWebLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">DatetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#datetime_format OpsworksStaticWebLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#encoding OpsworksStaticWebLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#file_fingerprint_lines OpsworksStaticWebLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.initialPosition">InitialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#initial_position OpsworksStaticWebLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#multiline_start_pattern OpsworksStaticWebLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#time_zone OpsworksStaticWebLayer#time_zone}. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#file OpsworksStaticWebLayer#file}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#log_group_name OpsworksStaticWebLayer#log_group_name}.

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```csharp
public double BatchCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#batch_count OpsworksStaticWebLayer#batch_count}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#batch_size OpsworksStaticWebLayer#batch_size}.

---

##### `BufferDuration`<sup>Optional</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```csharp
public double BufferDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#buffer_duration OpsworksStaticWebLayer#buffer_duration}.

---

##### `DatetimeFormat`<sup>Optional</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```csharp
public string DatetimeFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#datetime_format OpsworksStaticWebLayer#datetime_format}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#encoding OpsworksStaticWebLayer#encoding}.

---

##### `FileFingerprintLines`<sup>Optional</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```csharp
public string FileFingerprintLines { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#file_fingerprint_lines OpsworksStaticWebLayer#file_fingerprint_lines}.

---

##### `InitialPosition`<sup>Optional</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```csharp
public string InitialPosition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#initial_position OpsworksStaticWebLayer#initial_position}.

---

##### `MultilineStartPattern`<sup>Optional</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```csharp
public string MultilineStartPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#multiline_start_pattern OpsworksStaticWebLayer#multiline_start_pattern}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#time_zone OpsworksStaticWebLayer#time_zone}.

---

### OpsworksStaticWebLayerConfig <a name="OpsworksStaticWebLayerConfig" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StackId,
    object AutoAssignElasticIps = null,
    object AutoAssignPublicIps = null,
    object AutoHealing = null,
    OpsworksStaticWebLayerCloudwatchConfiguration CloudwatchConfiguration = null,
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
    OpsworksStaticWebLayerLoadBasedAutoScaling LoadBasedAutoScaling = null,
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
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.stackId">StackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#stack_id OpsworksStaticWebLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#auto_assign_elastic_ips OpsworksStaticWebLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#auto_assign_public_ips OpsworksStaticWebLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoHealing">AutoHealing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#auto_healing OpsworksStaticWebLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_configure_recipes OpsworksStaticWebLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_deploy_recipes OpsworksStaticWebLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_instance_profile_arn OpsworksStaticWebLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customJson">CustomJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_json OpsworksStaticWebLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_security_group_ids OpsworksStaticWebLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_setup_recipes OpsworksStaticWebLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_shutdown_recipes OpsworksStaticWebLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_undeploy_recipes OpsworksStaticWebLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#drain_elb_on_shutdown OpsworksStaticWebLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.ebsVolume">EbsVolume</a></code> | <code>object</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#elastic_load_balancer OpsworksStaticWebLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#id OpsworksStaticWebLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#install_updates_on_boot OpsworksStaticWebLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#instance_shutdown_timeout OpsworksStaticWebLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling">OpsworksStaticWebLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#name OpsworksStaticWebLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.systemPackages">SystemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#system_packages OpsworksStaticWebLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#tags OpsworksStaticWebLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#tags_all OpsworksStaticWebLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#use_ebs_optimized_instances OpsworksStaticWebLayer#use_ebs_optimized_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.stackId"></a>

```csharp
public string StackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#stack_id OpsworksStaticWebLayer#stack_id}.

---

##### `AutoAssignElasticIps`<sup>Optional</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoAssignElasticIps"></a>

```csharp
public object AutoAssignElasticIps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#auto_assign_elastic_ips OpsworksStaticWebLayer#auto_assign_elastic_ips}.

---

##### `AutoAssignPublicIps`<sup>Optional</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoAssignPublicIps"></a>

```csharp
public object AutoAssignPublicIps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#auto_assign_public_ips OpsworksStaticWebLayer#auto_assign_public_ips}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.autoHealing"></a>

```csharp
public object AutoHealing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#auto_healing OpsworksStaticWebLayer#auto_healing}.

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.cloudwatchConfiguration"></a>

```csharp
public OpsworksStaticWebLayerCloudwatchConfiguration CloudwatchConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#cloudwatch_configuration OpsworksStaticWebLayer#cloudwatch_configuration}

---

##### `CustomConfigureRecipes`<sup>Optional</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customConfigureRecipes"></a>

```csharp
public string[] CustomConfigureRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_configure_recipes OpsworksStaticWebLayer#custom_configure_recipes}.

---

##### `CustomDeployRecipes`<sup>Optional</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customDeployRecipes"></a>

```csharp
public string[] CustomDeployRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_deploy_recipes OpsworksStaticWebLayer#custom_deploy_recipes}.

---

##### `CustomInstanceProfileArn`<sup>Optional</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customInstanceProfileArn"></a>

```csharp
public string CustomInstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_instance_profile_arn OpsworksStaticWebLayer#custom_instance_profile_arn}.

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customJson"></a>

```csharp
public string CustomJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_json OpsworksStaticWebLayer#custom_json}.

---

##### `CustomSecurityGroupIds`<sup>Optional</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customSecurityGroupIds"></a>

```csharp
public string[] CustomSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_security_group_ids OpsworksStaticWebLayer#custom_security_group_ids}.

---

##### `CustomSetupRecipes`<sup>Optional</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customSetupRecipes"></a>

```csharp
public string[] CustomSetupRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_setup_recipes OpsworksStaticWebLayer#custom_setup_recipes}.

---

##### `CustomShutdownRecipes`<sup>Optional</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customShutdownRecipes"></a>

```csharp
public string[] CustomShutdownRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_shutdown_recipes OpsworksStaticWebLayer#custom_shutdown_recipes}.

---

##### `CustomUndeployRecipes`<sup>Optional</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.customUndeployRecipes"></a>

```csharp
public string[] CustomUndeployRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#custom_undeploy_recipes OpsworksStaticWebLayer#custom_undeploy_recipes}.

---

##### `DrainElbOnShutdown`<sup>Optional</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.drainElbOnShutdown"></a>

```csharp
public object DrainElbOnShutdown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#drain_elb_on_shutdown OpsworksStaticWebLayer#drain_elb_on_shutdown}.

---

##### `EbsVolume`<sup>Optional</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.ebsVolume"></a>

```csharp
public object EbsVolume { get; set; }
```

- *Type:* object

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#ebs_volume OpsworksStaticWebLayer#ebs_volume}

---

##### `ElasticLoadBalancer`<sup>Optional</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.elasticLoadBalancer"></a>

```csharp
public string ElasticLoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#elastic_load_balancer OpsworksStaticWebLayer#elastic_load_balancer}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#id OpsworksStaticWebLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallUpdatesOnBoot`<sup>Optional</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.installUpdatesOnBoot"></a>

```csharp
public object InstallUpdatesOnBoot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#install_updates_on_boot OpsworksStaticWebLayer#install_updates_on_boot}.

---

##### `InstanceShutdownTimeout`<sup>Optional</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.instanceShutdownTimeout"></a>

```csharp
public double InstanceShutdownTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#instance_shutdown_timeout OpsworksStaticWebLayer#instance_shutdown_timeout}.

---

##### `LoadBasedAutoScaling`<sup>Optional</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.loadBasedAutoScaling"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScaling LoadBasedAutoScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling">OpsworksStaticWebLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#load_based_auto_scaling OpsworksStaticWebLayer#load_based_auto_scaling}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#name OpsworksStaticWebLayer#name}.

---

##### `SystemPackages`<sup>Optional</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.systemPackages"></a>

```csharp
public string[] SystemPackages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#system_packages OpsworksStaticWebLayer#system_packages}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#tags OpsworksStaticWebLayer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#tags_all OpsworksStaticWebLayer#tags_all}.

---

##### `UseEbsOptimizedInstances`<sup>Optional</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerConfig.property.useEbsOptimizedInstances"></a>

```csharp
public object UseEbsOptimizedInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#use_ebs_optimized_instances OpsworksStaticWebLayer#use_ebs_optimized_instances}.

---

### OpsworksStaticWebLayerEbsVolume <a name="OpsworksStaticWebLayerEbsVolume" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerEbsVolume {
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
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.mountPoint">MountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#mount_point OpsworksStaticWebLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#number_of_disks OpsworksStaticWebLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#size OpsworksStaticWebLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#encrypted OpsworksStaticWebLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#iops OpsworksStaticWebLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.raidLevel">RaidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#raid_level OpsworksStaticWebLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#type OpsworksStaticWebLayer#type}. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#mount_point OpsworksStaticWebLayer#mount_point}.

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#number_of_disks OpsworksStaticWebLayer#number_of_disks}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#size OpsworksStaticWebLayer#size}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#encrypted OpsworksStaticWebLayer#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#iops OpsworksStaticWebLayer#iops}.

---

##### `RaidLevel`<sup>Optional</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.raidLevel"></a>

```csharp
public string RaidLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#raid_level OpsworksStaticWebLayer#raid_level}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolume.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#type OpsworksStaticWebLayer#type}.

---

### OpsworksStaticWebLayerLoadBasedAutoScaling <a name="OpsworksStaticWebLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerLoadBasedAutoScaling {
    OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling Downscaling = null,
    object Enable = null,
    OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling Upscaling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling">OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#enable OpsworksStaticWebLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling">OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `Downscaling`<sup>Optional</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling.property.downscaling"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling Downscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling">OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#downscaling OpsworksStaticWebLayer#downscaling}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#enable OpsworksStaticWebLayer#enable}.

---

##### `Upscaling`<sup>Optional</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling.property.upscaling"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling Upscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling">OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#upscaling OpsworksStaticWebLayer#upscaling}

---

### OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling <a name="OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#alarms OpsworksStaticWebLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#cpu_threshold OpsworksStaticWebLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#ignore_metrics_time OpsworksStaticWebLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#instance_count OpsworksStaticWebLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#load_threshold OpsworksStaticWebLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#memory_threshold OpsworksStaticWebLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#thresholds_wait_time OpsworksStaticWebLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#alarms OpsworksStaticWebLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#cpu_threshold OpsworksStaticWebLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#ignore_metrics_time OpsworksStaticWebLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#instance_count OpsworksStaticWebLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#load_threshold OpsworksStaticWebLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#memory_threshold OpsworksStaticWebLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#thresholds_wait_time OpsworksStaticWebLayer#thresholds_wait_time}.

---

### OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling <a name="OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#alarms OpsworksStaticWebLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#cpu_threshold OpsworksStaticWebLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#ignore_metrics_time OpsworksStaticWebLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#instance_count OpsworksStaticWebLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#load_threshold OpsworksStaticWebLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#memory_threshold OpsworksStaticWebLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#thresholds_wait_time OpsworksStaticWebLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#alarms OpsworksStaticWebLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#cpu_threshold OpsworksStaticWebLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#ignore_metrics_time OpsworksStaticWebLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#instance_count OpsworksStaticWebLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#load_threshold OpsworksStaticWebLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#memory_threshold OpsworksStaticWebLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer#thresholds_wait_time OpsworksStaticWebLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.get"></a>

```csharp
private OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">ResetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">ResetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">ResetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">ResetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">ResetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">ResetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```csharp
private void ResetBatchCount()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```csharp
private void ResetBatchSize()
```

##### `ResetBufferDuration` <a name="ResetBufferDuration" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```csharp
private void ResetBufferDuration()
```

##### `ResetDatetimeFormat` <a name="ResetDatetimeFormat" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```csharp
private void ResetDatetimeFormat()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFileFingerprintLines` <a name="ResetFileFingerprintLines" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```csharp
private void ResetFileFingerprintLines()
```

##### `ResetInitialPosition` <a name="ResetInitialPosition" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```csharp
private void ResetInitialPosition()
```

##### `ResetMultilineStartPattern` <a name="ResetMultilineStartPattern" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```csharp
private void ResetMultilineStartPattern()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">BufferDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">DatetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">FileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">InitialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">MultilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">BatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">BufferDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">DatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">InitialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```csharp
public double BatchCountInput { get; }
```

- *Type:* double

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `BufferDurationInput`<sup>Optional</sup> <a name="BufferDurationInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```csharp
public double BufferDurationInput { get; }
```

- *Type:* double

---

##### `DatetimeFormatInput`<sup>Optional</sup> <a name="DatetimeFormatInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```csharp
public string DatetimeFormatInput { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FileFingerprintLinesInput`<sup>Optional</sup> <a name="FileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```csharp
public string FileFingerprintLinesInput { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `InitialPositionInput`<sup>Optional</sup> <a name="InitialPositionInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```csharp
public string InitialPositionInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `MultilineStartPatternInput`<sup>Optional</sup> <a name="MultilineStartPatternInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```csharp
public string MultilineStartPatternInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```csharp
public double BatchCount { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `BufferDuration`<sup>Required</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```csharp
public double BufferDuration { get; }
```

- *Type:* double

---

##### `DatetimeFormat`<sup>Required</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```csharp
public string DatetimeFormat { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `FileFingerprintLines`<sup>Required</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```csharp
public string FileFingerprintLines { get; }
```

- *Type:* string

---

##### `InitialPosition`<sup>Required</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```csharp
public string InitialPosition { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `MultilineStartPattern`<sup>Required</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```csharp
public string MultilineStartPattern { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksStaticWebLayerCloudwatchConfigurationOutputReference <a name="OpsworksStaticWebLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerCloudwatchConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.putLogStreams">PutLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resetLogStreams">ResetLogStreams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```csharp
private void PutLogStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogStreams` <a name="ResetLogStreams" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```csharp
private void ResetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList">OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">LogStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```csharp
public OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList LogStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList">OpsworksStaticWebLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```csharp
public object LogStreamsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```csharp
public OpsworksStaticWebLayerCloudwatchConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerCloudwatchConfiguration">OpsworksStaticWebLayerCloudwatchConfiguration</a>

---


### OpsworksStaticWebLayerEbsVolumeList <a name="OpsworksStaticWebLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerEbsVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.get"></a>

```csharp
private OpsworksStaticWebLayerEbsVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksStaticWebLayerEbsVolumeOutputReference <a name="OpsworksStaticWebLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerEbsVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetRaidLevel">ResetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetRaidLevel` <a name="ResetRaidLevel" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```csharp
private void ResetRaidLevel()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.raidLevelInput">RaidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.raidLevel">RaidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```csharp
public double NumberOfDisksInput { get; }
```

- *Type:* double

---

##### `RaidLevelInput`<sup>Optional</sup> <a name="RaidLevelInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```csharp
public string RaidLevelInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; }
```

- *Type:* double

---

##### `RaidLevel`<sup>Required</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.raidLevel"></a>

```csharp
public string RaidLevel { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerEbsVolumeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```csharp
private void ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```csharp
private void ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```csharp
private void ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```csharp
private void ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```csharp
private void ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling">OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```csharp
public double CpuThresholdInput { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```csharp
public double IgnoreMetricsTimeInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```csharp
public double LoadThresholdInput { get; }
```

- *Type:* double

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```csharp
public double MemoryThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```csharp
public double ThresholdsWaitTimeInput { get; }
```

- *Type:* double

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; }
```

- *Type:* double

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling">OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference <a name="OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.putDownscaling">PutDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.putUpscaling">PutUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resetDownscaling">ResetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resetUpscaling">ResetUpscaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownscaling` <a name="PutDownscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```csharp
private void PutDownscaling(OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling">OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling</a>

---

##### `PutUpscaling` <a name="PutUpscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```csharp
private void PutUpscaling(OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling">OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling</a>

---

##### `ResetDownscaling` <a name="ResetDownscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```csharp
private void ResetDownscaling()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetUpscaling` <a name="ResetUpscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```csharp
private void ResetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">DownscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling">OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">UpscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling">OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling">OpsworksStaticWebLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Downscaling`<sup>Required</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference Downscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksStaticWebLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `Upscaling`<sup>Required</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference Upscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `DownscalingInput`<sup>Optional</sup> <a name="DownscalingInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling DownscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling">OpsworksStaticWebLayerLoadBasedAutoScalingDownscaling</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `UpscalingInput`<sup>Optional</sup> <a name="UpscalingInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling UpscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling">OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScaling">OpsworksStaticWebLayerLoadBasedAutoScaling</a>

---


### OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```csharp
private void ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```csharp
private void ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```csharp
private void ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```csharp
private void ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```csharp
private void ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling">OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```csharp
public double CpuThresholdInput { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```csharp
public double IgnoreMetricsTimeInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```csharp
public double LoadThresholdInput { get; }
```

- *Type:* double

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```csharp
public double MemoryThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```csharp
public double ThresholdsWaitTimeInput { get; }
```

- *Type:* double

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; }
```

- *Type:* double

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStaticWebLayer.OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling">OpsworksStaticWebLayerLoadBasedAutoScalingUpscaling</a>

---



