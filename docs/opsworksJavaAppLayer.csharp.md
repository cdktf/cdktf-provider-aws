# `opsworksJavaAppLayer` Submodule <a name="`opsworksJavaAppLayer` Submodule" id="@cdktf/provider-aws.opsworksJavaAppLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksJavaAppLayer <a name="OpsworksJavaAppLayer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer aws_opsworks_java_app_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayer(Construct Scope, string Id, OpsworksJavaAppLayerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig">OpsworksJavaAppLayerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig">OpsworksJavaAppLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putCloudwatchConfiguration">PutCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putEbsVolume">PutEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putLoadBasedAutoScaling">PutLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAppServer">ResetAppServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAppServerVersion">ResetAppServerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoAssignElasticIps">ResetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoAssignPublicIps">ResetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCloudwatchConfiguration">ResetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomConfigureRecipes">ResetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomDeployRecipes">ResetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomInstanceProfileArn">ResetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomJson">ResetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomSecurityGroupIds">ResetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomSetupRecipes">ResetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomShutdownRecipes">ResetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomUndeployRecipes">ResetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetDrainElbOnShutdown">ResetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetEbsVolume">ResetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetElasticLoadBalancer">ResetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetInstallUpdatesOnBoot">ResetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetInstanceShutdownTimeout">ResetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmOptions">ResetJvmOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmType">ResetJvmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmVersion">ResetJvmVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetLoadBasedAutoScaling">ResetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetSystemPackages">ResetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetUseEbsOptimizedInstances">ResetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putCloudwatchConfiguration"></a>

```csharp
private void PutCloudwatchConfiguration(OpsworksJavaAppLayerCloudwatchConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a>

---

##### `PutEbsVolume` <a name="PutEbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putEbsVolume"></a>

```csharp
private void PutEbsVolume(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putEbsVolume.parameter.value"></a>

- *Type:* object

---

##### `PutLoadBasedAutoScaling` <a name="PutLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putLoadBasedAutoScaling"></a>

```csharp
private void PutLoadBasedAutoScaling(OpsworksJavaAppLayerLoadBasedAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a>

---

##### `ResetAppServer` <a name="ResetAppServer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAppServer"></a>

```csharp
private void ResetAppServer()
```

##### `ResetAppServerVersion` <a name="ResetAppServerVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAppServerVersion"></a>

```csharp
private void ResetAppServerVersion()
```

##### `ResetAutoAssignElasticIps` <a name="ResetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoAssignElasticIps"></a>

```csharp
private void ResetAutoAssignElasticIps()
```

##### `ResetAutoAssignPublicIps` <a name="ResetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoAssignPublicIps"></a>

```csharp
private void ResetAutoAssignPublicIps()
```

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoHealing"></a>

```csharp
private void ResetAutoHealing()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCloudwatchConfiguration"></a>

```csharp
private void ResetCloudwatchConfiguration()
```

##### `ResetCustomConfigureRecipes` <a name="ResetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomConfigureRecipes"></a>

```csharp
private void ResetCustomConfigureRecipes()
```

##### `ResetCustomDeployRecipes` <a name="ResetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomDeployRecipes"></a>

```csharp
private void ResetCustomDeployRecipes()
```

##### `ResetCustomInstanceProfileArn` <a name="ResetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomInstanceProfileArn"></a>

```csharp
private void ResetCustomInstanceProfileArn()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomJson"></a>

```csharp
private void ResetCustomJson()
```

##### `ResetCustomSecurityGroupIds` <a name="ResetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomSecurityGroupIds"></a>

```csharp
private void ResetCustomSecurityGroupIds()
```

##### `ResetCustomSetupRecipes` <a name="ResetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomSetupRecipes"></a>

```csharp
private void ResetCustomSetupRecipes()
```

##### `ResetCustomShutdownRecipes` <a name="ResetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomShutdownRecipes"></a>

```csharp
private void ResetCustomShutdownRecipes()
```

##### `ResetCustomUndeployRecipes` <a name="ResetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomUndeployRecipes"></a>

```csharp
private void ResetCustomUndeployRecipes()
```

##### `ResetDrainElbOnShutdown` <a name="ResetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetDrainElbOnShutdown"></a>

```csharp
private void ResetDrainElbOnShutdown()
```

##### `ResetEbsVolume` <a name="ResetEbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetEbsVolume"></a>

```csharp
private void ResetEbsVolume()
```

##### `ResetElasticLoadBalancer` <a name="ResetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetElasticLoadBalancer"></a>

```csharp
private void ResetElasticLoadBalancer()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstallUpdatesOnBoot` <a name="ResetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetInstallUpdatesOnBoot"></a>

```csharp
private void ResetInstallUpdatesOnBoot()
```

##### `ResetInstanceShutdownTimeout` <a name="ResetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetInstanceShutdownTimeout"></a>

```csharp
private void ResetInstanceShutdownTimeout()
```

##### `ResetJvmOptions` <a name="ResetJvmOptions" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmOptions"></a>

```csharp
private void ResetJvmOptions()
```

##### `ResetJvmType` <a name="ResetJvmType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmType"></a>

```csharp
private void ResetJvmType()
```

##### `ResetJvmVersion` <a name="ResetJvmVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmVersion"></a>

```csharp
private void ResetJvmVersion()
```

##### `ResetLoadBasedAutoScaling` <a name="ResetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetLoadBasedAutoScaling"></a>

```csharp
private void ResetLoadBasedAutoScaling()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSystemPackages` <a name="ResetSystemPackages" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetSystemPackages"></a>

```csharp
private void ResetSystemPackages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUseEbsOptimizedInstances` <a name="ResetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetUseEbsOptimizedInstances"></a>

```csharp
private void ResetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksJavaAppLayer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksJavaAppLayer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksJavaAppLayer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference">OpsworksJavaAppLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.ebsVolume">EbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList">OpsworksJavaAppLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerInput">AppServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerVersionInput">AppServerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignElasticIpsInput">AutoAssignElasticIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignPublicIpsInput">AutoAssignPublicIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoHealingInput">AutoHealingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customConfigureRecipesInput">CustomConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customDeployRecipesInput">CustomDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customInstanceProfileArnInput">CustomInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customJsonInput">CustomJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSecurityGroupIdsInput">CustomSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSetupRecipesInput">CustomSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customShutdownRecipesInput">CustomShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customUndeployRecipesInput">CustomUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.drainElbOnShutdownInput">DrainElbOnShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.ebsVolumeInput">EbsVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.elasticLoadBalancerInput">ElasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.installUpdatesOnBootInput">InstallUpdatesOnBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.instanceShutdownTimeoutInput">InstanceShutdownTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmOptionsInput">JvmOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmTypeInput">JvmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmVersionInput">JvmVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.loadBasedAutoScalingInput">LoadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.stackIdInput">StackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.systemPackagesInput">SystemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.useEbsOptimizedInstancesInput">UseEbsOptimizedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServer">AppServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerVersion">AppServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoHealing">AutoHealing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customJson">CustomJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmOptions">JvmOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmType">JvmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmVersion">JvmVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.systemPackages">SystemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cloudwatchConfiguration"></a>

```csharp
public OpsworksJavaAppLayerCloudwatchConfigurationOutputReference CloudwatchConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference">OpsworksJavaAppLayerCloudwatchConfigurationOutputReference</a>

---

##### `EbsVolume`<sup>Required</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.ebsVolume"></a>

```csharp
public OpsworksJavaAppLayerEbsVolumeList EbsVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList">OpsworksJavaAppLayerEbsVolumeList</a>

---

##### `LoadBasedAutoScaling`<sup>Required</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.loadBasedAutoScaling"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference LoadBasedAutoScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference</a>

---

##### `AppServerInput`<sup>Optional</sup> <a name="AppServerInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerInput"></a>

```csharp
public string AppServerInput { get; }
```

- *Type:* string

---

##### `AppServerVersionInput`<sup>Optional</sup> <a name="AppServerVersionInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerVersionInput"></a>

```csharp
public string AppServerVersionInput { get; }
```

- *Type:* string

---

##### `AutoAssignElasticIpsInput`<sup>Optional</sup> <a name="AutoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignElasticIpsInput"></a>

```csharp
public object AutoAssignElasticIpsInput { get; }
```

- *Type:* object

---

##### `AutoAssignPublicIpsInput`<sup>Optional</sup> <a name="AutoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignPublicIpsInput"></a>

```csharp
public object AutoAssignPublicIpsInput { get; }
```

- *Type:* object

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoHealingInput"></a>

```csharp
public object AutoHealingInput { get; }
```

- *Type:* object

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cloudwatchConfigurationInput"></a>

```csharp
public OpsworksJavaAppLayerCloudwatchConfiguration CloudwatchConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a>

---

##### `CustomConfigureRecipesInput`<sup>Optional</sup> <a name="CustomConfigureRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customConfigureRecipesInput"></a>

```csharp
public string[] CustomConfigureRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomDeployRecipesInput`<sup>Optional</sup> <a name="CustomDeployRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customDeployRecipesInput"></a>

```csharp
public string[] CustomDeployRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomInstanceProfileArnInput`<sup>Optional</sup> <a name="CustomInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customInstanceProfileArnInput"></a>

```csharp
public string CustomInstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customJsonInput"></a>

```csharp
public string CustomJsonInput { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIdsInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSecurityGroupIdsInput"></a>

```csharp
public string[] CustomSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `CustomSetupRecipesInput`<sup>Optional</sup> <a name="CustomSetupRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSetupRecipesInput"></a>

```csharp
public string[] CustomSetupRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomShutdownRecipesInput`<sup>Optional</sup> <a name="CustomShutdownRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customShutdownRecipesInput"></a>

```csharp
public string[] CustomShutdownRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomUndeployRecipesInput`<sup>Optional</sup> <a name="CustomUndeployRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customUndeployRecipesInput"></a>

```csharp
public string[] CustomUndeployRecipesInput { get; }
```

- *Type:* string[]

---

##### `DrainElbOnShutdownInput`<sup>Optional</sup> <a name="DrainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.drainElbOnShutdownInput"></a>

```csharp
public object DrainElbOnShutdownInput { get; }
```

- *Type:* object

---

##### `EbsVolumeInput`<sup>Optional</sup> <a name="EbsVolumeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.ebsVolumeInput"></a>

```csharp
public object EbsVolumeInput { get; }
```

- *Type:* object

---

##### `ElasticLoadBalancerInput`<sup>Optional</sup> <a name="ElasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.elasticLoadBalancerInput"></a>

```csharp
public string ElasticLoadBalancerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstallUpdatesOnBootInput`<sup>Optional</sup> <a name="InstallUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.installUpdatesOnBootInput"></a>

```csharp
public object InstallUpdatesOnBootInput { get; }
```

- *Type:* object

---

##### `InstanceShutdownTimeoutInput`<sup>Optional</sup> <a name="InstanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.instanceShutdownTimeoutInput"></a>

```csharp
public double InstanceShutdownTimeoutInput { get; }
```

- *Type:* double

---

##### `JvmOptionsInput`<sup>Optional</sup> <a name="JvmOptionsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmOptionsInput"></a>

```csharp
public string JvmOptionsInput { get; }
```

- *Type:* string

---

##### `JvmTypeInput`<sup>Optional</sup> <a name="JvmTypeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmTypeInput"></a>

```csharp
public string JvmTypeInput { get; }
```

- *Type:* string

---

##### `JvmVersionInput`<sup>Optional</sup> <a name="JvmVersionInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmVersionInput"></a>

```csharp
public string JvmVersionInput { get; }
```

- *Type:* string

---

##### `LoadBasedAutoScalingInput`<sup>Optional</sup> <a name="LoadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.loadBasedAutoScalingInput"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScaling LoadBasedAutoScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.stackIdInput"></a>

```csharp
public string StackIdInput { get; }
```

- *Type:* string

---

##### `SystemPackagesInput`<sup>Optional</sup> <a name="SystemPackagesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.systemPackagesInput"></a>

```csharp
public string[] SystemPackagesInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="UseEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.useEbsOptimizedInstancesInput"></a>

```csharp
public object UseEbsOptimizedInstancesInput { get; }
```

- *Type:* object

---

##### `AppServer`<sup>Required</sup> <a name="AppServer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServer"></a>

```csharp
public string AppServer { get; }
```

- *Type:* string

---

##### `AppServerVersion`<sup>Required</sup> <a name="AppServerVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerVersion"></a>

```csharp
public string AppServerVersion { get; }
```

- *Type:* string

---

##### `AutoAssignElasticIps`<sup>Required</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignElasticIps"></a>

```csharp
public object AutoAssignElasticIps { get; }
```

- *Type:* object

---

##### `AutoAssignPublicIps`<sup>Required</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignPublicIps"></a>

```csharp
public object AutoAssignPublicIps { get; }
```

- *Type:* object

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoHealing"></a>

```csharp
public object AutoHealing { get; }
```

- *Type:* object

---

##### `CustomConfigureRecipes`<sup>Required</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customConfigureRecipes"></a>

```csharp
public string[] CustomConfigureRecipes { get; }
```

- *Type:* string[]

---

##### `CustomDeployRecipes`<sup>Required</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customDeployRecipes"></a>

```csharp
public string[] CustomDeployRecipes { get; }
```

- *Type:* string[]

---

##### `CustomInstanceProfileArn`<sup>Required</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customInstanceProfileArn"></a>

```csharp
public string CustomInstanceProfileArn { get; }
```

- *Type:* string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customJson"></a>

```csharp
public string CustomJson { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIds`<sup>Required</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSecurityGroupIds"></a>

```csharp
public string[] CustomSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `CustomSetupRecipes`<sup>Required</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSetupRecipes"></a>

```csharp
public string[] CustomSetupRecipes { get; }
```

- *Type:* string[]

---

##### `CustomShutdownRecipes`<sup>Required</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customShutdownRecipes"></a>

```csharp
public string[] CustomShutdownRecipes { get; }
```

- *Type:* string[]

---

##### `CustomUndeployRecipes`<sup>Required</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customUndeployRecipes"></a>

```csharp
public string[] CustomUndeployRecipes { get; }
```

- *Type:* string[]

---

##### `DrainElbOnShutdown`<sup>Required</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.drainElbOnShutdown"></a>

```csharp
public object DrainElbOnShutdown { get; }
```

- *Type:* object

---

##### `ElasticLoadBalancer`<sup>Required</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.elasticLoadBalancer"></a>

```csharp
public string ElasticLoadBalancer { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallUpdatesOnBoot`<sup>Required</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.installUpdatesOnBoot"></a>

```csharp
public object InstallUpdatesOnBoot { get; }
```

- *Type:* object

---

##### `InstanceShutdownTimeout`<sup>Required</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.instanceShutdownTimeout"></a>

```csharp
public double InstanceShutdownTimeout { get; }
```

- *Type:* double

---

##### `JvmOptions`<sup>Required</sup> <a name="JvmOptions" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmOptions"></a>

```csharp
public string JvmOptions { get; }
```

- *Type:* string

---

##### `JvmType`<sup>Required</sup> <a name="JvmType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmType"></a>

```csharp
public string JvmType { get; }
```

- *Type:* string

---

##### `JvmVersion`<sup>Required</sup> <a name="JvmVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmVersion"></a>

```csharp
public string JvmVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

##### `SystemPackages`<sup>Required</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.systemPackages"></a>

```csharp
public string[] SystemPackages { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseEbsOptimizedInstances`<sup>Required</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.useEbsOptimizedInstances"></a>

```csharp
public object UseEbsOptimizedInstances { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksJavaAppLayerCloudwatchConfiguration <a name="OpsworksJavaAppLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerCloudwatchConfiguration {
    object Enabled = null,
    object LogStreams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#enabled OpsworksJavaAppLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.property.logStreams">LogStreams</a></code> | <code>object</code> | log_streams block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#enabled OpsworksJavaAppLayer#enabled}.

---

##### `LogStreams`<sup>Optional</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.property.logStreams"></a>

```csharp
public object LogStreams { get; set; }
```

- *Type:* object

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#log_streams OpsworksJavaAppLayer#log_streams}

---

### OpsworksJavaAppLayerCloudwatchConfigurationLogStreams <a name="OpsworksJavaAppLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerCloudwatchConfigurationLogStreams {
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
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.file">File</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#file OpsworksJavaAppLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#log_group_name OpsworksJavaAppLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.batchCount">BatchCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#batch_count OpsworksJavaAppLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.batchSize">BatchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#batch_size OpsworksJavaAppLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration">BufferDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#buffer_duration OpsworksJavaAppLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">DatetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#datetime_format OpsworksJavaAppLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#encoding OpsworksJavaAppLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#file_fingerprint_lines OpsworksJavaAppLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.initialPosition">InitialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#initial_position OpsworksJavaAppLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#multiline_start_pattern OpsworksJavaAppLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#time_zone OpsworksJavaAppLayer#time_zone}. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#file OpsworksJavaAppLayer#file}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#log_group_name OpsworksJavaAppLayer#log_group_name}.

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```csharp
public double BatchCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#batch_count OpsworksJavaAppLayer#batch_count}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#batch_size OpsworksJavaAppLayer#batch_size}.

---

##### `BufferDuration`<sup>Optional</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```csharp
public double BufferDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#buffer_duration OpsworksJavaAppLayer#buffer_duration}.

---

##### `DatetimeFormat`<sup>Optional</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```csharp
public string DatetimeFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#datetime_format OpsworksJavaAppLayer#datetime_format}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#encoding OpsworksJavaAppLayer#encoding}.

---

##### `FileFingerprintLines`<sup>Optional</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```csharp
public string FileFingerprintLines { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#file_fingerprint_lines OpsworksJavaAppLayer#file_fingerprint_lines}.

---

##### `InitialPosition`<sup>Optional</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```csharp
public string InitialPosition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#initial_position OpsworksJavaAppLayer#initial_position}.

---

##### `MultilineStartPattern`<sup>Optional</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```csharp
public string MultilineStartPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#multiline_start_pattern OpsworksJavaAppLayer#multiline_start_pattern}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#time_zone OpsworksJavaAppLayer#time_zone}.

---

### OpsworksJavaAppLayerConfig <a name="OpsworksJavaAppLayerConfig" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StackId,
    string AppServer = null,
    string AppServerVersion = null,
    object AutoAssignElasticIps = null,
    object AutoAssignPublicIps = null,
    object AutoHealing = null,
    OpsworksJavaAppLayerCloudwatchConfiguration CloudwatchConfiguration = null,
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
    string JvmOptions = null,
    string JvmType = null,
    string JvmVersion = null,
    OpsworksJavaAppLayerLoadBasedAutoScaling LoadBasedAutoScaling = null,
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
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.stackId">StackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#stack_id OpsworksJavaAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.appServer">AppServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#app_server OpsworksJavaAppLayer#app_server}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.appServerVersion">AppServerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#app_server_version OpsworksJavaAppLayer#app_server_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_assign_elastic_ips OpsworksJavaAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_assign_public_ips OpsworksJavaAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoHealing">AutoHealing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_healing OpsworksJavaAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_configure_recipes OpsworksJavaAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_deploy_recipes OpsworksJavaAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_instance_profile_arn OpsworksJavaAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customJson">CustomJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_json OpsworksJavaAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_security_group_ids OpsworksJavaAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_setup_recipes OpsworksJavaAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_shutdown_recipes OpsworksJavaAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_undeploy_recipes OpsworksJavaAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#drain_elb_on_shutdown OpsworksJavaAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.ebsVolume">EbsVolume</a></code> | <code>object</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#elastic_load_balancer OpsworksJavaAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#id OpsworksJavaAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#install_updates_on_boot OpsworksJavaAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_shutdown_timeout OpsworksJavaAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmOptions">JvmOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_options OpsworksJavaAppLayer#jvm_options}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmType">JvmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_type OpsworksJavaAppLayer#jvm_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmVersion">JvmVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_version OpsworksJavaAppLayer#jvm_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#name OpsworksJavaAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.systemPackages">SystemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#system_packages OpsworksJavaAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#tags OpsworksJavaAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#tags_all OpsworksJavaAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#use_ebs_optimized_instances OpsworksJavaAppLayer#use_ebs_optimized_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.stackId"></a>

```csharp
public string StackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#stack_id OpsworksJavaAppLayer#stack_id}.

---

##### `AppServer`<sup>Optional</sup> <a name="AppServer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.appServer"></a>

```csharp
public string AppServer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#app_server OpsworksJavaAppLayer#app_server}.

---

##### `AppServerVersion`<sup>Optional</sup> <a name="AppServerVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.appServerVersion"></a>

```csharp
public string AppServerVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#app_server_version OpsworksJavaAppLayer#app_server_version}.

---

##### `AutoAssignElasticIps`<sup>Optional</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoAssignElasticIps"></a>

```csharp
public object AutoAssignElasticIps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_assign_elastic_ips OpsworksJavaAppLayer#auto_assign_elastic_ips}.

---

##### `AutoAssignPublicIps`<sup>Optional</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoAssignPublicIps"></a>

```csharp
public object AutoAssignPublicIps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_assign_public_ips OpsworksJavaAppLayer#auto_assign_public_ips}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoHealing"></a>

```csharp
public object AutoHealing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_healing OpsworksJavaAppLayer#auto_healing}.

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.cloudwatchConfiguration"></a>

```csharp
public OpsworksJavaAppLayerCloudwatchConfiguration CloudwatchConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cloudwatch_configuration OpsworksJavaAppLayer#cloudwatch_configuration}

---

##### `CustomConfigureRecipes`<sup>Optional</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customConfigureRecipes"></a>

```csharp
public string[] CustomConfigureRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_configure_recipes OpsworksJavaAppLayer#custom_configure_recipes}.

---

##### `CustomDeployRecipes`<sup>Optional</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customDeployRecipes"></a>

```csharp
public string[] CustomDeployRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_deploy_recipes OpsworksJavaAppLayer#custom_deploy_recipes}.

---

##### `CustomInstanceProfileArn`<sup>Optional</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customInstanceProfileArn"></a>

```csharp
public string CustomInstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_instance_profile_arn OpsworksJavaAppLayer#custom_instance_profile_arn}.

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customJson"></a>

```csharp
public string CustomJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_json OpsworksJavaAppLayer#custom_json}.

---

##### `CustomSecurityGroupIds`<sup>Optional</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customSecurityGroupIds"></a>

```csharp
public string[] CustomSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_security_group_ids OpsworksJavaAppLayer#custom_security_group_ids}.

---

##### `CustomSetupRecipes`<sup>Optional</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customSetupRecipes"></a>

```csharp
public string[] CustomSetupRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_setup_recipes OpsworksJavaAppLayer#custom_setup_recipes}.

---

##### `CustomShutdownRecipes`<sup>Optional</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customShutdownRecipes"></a>

```csharp
public string[] CustomShutdownRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_shutdown_recipes OpsworksJavaAppLayer#custom_shutdown_recipes}.

---

##### `CustomUndeployRecipes`<sup>Optional</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customUndeployRecipes"></a>

```csharp
public string[] CustomUndeployRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_undeploy_recipes OpsworksJavaAppLayer#custom_undeploy_recipes}.

---

##### `DrainElbOnShutdown`<sup>Optional</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.drainElbOnShutdown"></a>

```csharp
public object DrainElbOnShutdown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#drain_elb_on_shutdown OpsworksJavaAppLayer#drain_elb_on_shutdown}.

---

##### `EbsVolume`<sup>Optional</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.ebsVolume"></a>

```csharp
public object EbsVolume { get; set; }
```

- *Type:* object

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ebs_volume OpsworksJavaAppLayer#ebs_volume}

---

##### `ElasticLoadBalancer`<sup>Optional</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.elasticLoadBalancer"></a>

```csharp
public string ElasticLoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#elastic_load_balancer OpsworksJavaAppLayer#elastic_load_balancer}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#id OpsworksJavaAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallUpdatesOnBoot`<sup>Optional</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.installUpdatesOnBoot"></a>

```csharp
public object InstallUpdatesOnBoot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#install_updates_on_boot OpsworksJavaAppLayer#install_updates_on_boot}.

---

##### `InstanceShutdownTimeout`<sup>Optional</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.instanceShutdownTimeout"></a>

```csharp
public double InstanceShutdownTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_shutdown_timeout OpsworksJavaAppLayer#instance_shutdown_timeout}.

---

##### `JvmOptions`<sup>Optional</sup> <a name="JvmOptions" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmOptions"></a>

```csharp
public string JvmOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_options OpsworksJavaAppLayer#jvm_options}.

---

##### `JvmType`<sup>Optional</sup> <a name="JvmType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmType"></a>

```csharp
public string JvmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_type OpsworksJavaAppLayer#jvm_type}.

---

##### `JvmVersion`<sup>Optional</sup> <a name="JvmVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmVersion"></a>

```csharp
public string JvmVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_version OpsworksJavaAppLayer#jvm_version}.

---

##### `LoadBasedAutoScaling`<sup>Optional</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.loadBasedAutoScaling"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScaling LoadBasedAutoScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_based_auto_scaling OpsworksJavaAppLayer#load_based_auto_scaling}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#name OpsworksJavaAppLayer#name}.

---

##### `SystemPackages`<sup>Optional</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.systemPackages"></a>

```csharp
public string[] SystemPackages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#system_packages OpsworksJavaAppLayer#system_packages}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#tags OpsworksJavaAppLayer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#tags_all OpsworksJavaAppLayer#tags_all}.

---

##### `UseEbsOptimizedInstances`<sup>Optional</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.useEbsOptimizedInstances"></a>

```csharp
public object UseEbsOptimizedInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#use_ebs_optimized_instances OpsworksJavaAppLayer#use_ebs_optimized_instances}.

---

### OpsworksJavaAppLayerEbsVolume <a name="OpsworksJavaAppLayerEbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerEbsVolume {
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
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.mountPoint">MountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#mount_point OpsworksJavaAppLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#number_of_disks OpsworksJavaAppLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#size OpsworksJavaAppLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#encrypted OpsworksJavaAppLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#iops OpsworksJavaAppLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.raidLevel">RaidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#raid_level OpsworksJavaAppLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#type OpsworksJavaAppLayer#type}. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#mount_point OpsworksJavaAppLayer#mount_point}.

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#number_of_disks OpsworksJavaAppLayer#number_of_disks}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#size OpsworksJavaAppLayer#size}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#encrypted OpsworksJavaAppLayer#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#iops OpsworksJavaAppLayer#iops}.

---

##### `RaidLevel`<sup>Optional</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.raidLevel"></a>

```csharp
public string RaidLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#raid_level OpsworksJavaAppLayer#raid_level}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#type OpsworksJavaAppLayer#type}.

---

### OpsworksJavaAppLayerLoadBasedAutoScaling <a name="OpsworksJavaAppLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerLoadBasedAutoScaling {
    OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling Downscaling = null,
    object Enable = null,
    OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling Upscaling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#enable OpsworksJavaAppLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `Downscaling`<sup>Optional</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.downscaling"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling Downscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#downscaling OpsworksJavaAppLayer#downscaling}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#enable OpsworksJavaAppLayer#enable}.

---

##### `Upscaling`<sup>Optional</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.upscaling"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling Upscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#upscaling OpsworksJavaAppLayer#upscaling}

---

### OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling <a name="OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#alarms OpsworksJavaAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cpu_threshold OpsworksJavaAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ignore_metrics_time OpsworksJavaAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_count OpsworksJavaAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_threshold OpsworksJavaAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#memory_threshold OpsworksJavaAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#thresholds_wait_time OpsworksJavaAppLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#alarms OpsworksJavaAppLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cpu_threshold OpsworksJavaAppLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ignore_metrics_time OpsworksJavaAppLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_count OpsworksJavaAppLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_threshold OpsworksJavaAppLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#memory_threshold OpsworksJavaAppLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#thresholds_wait_time OpsworksJavaAppLayer#thresholds_wait_time}.

---

### OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling <a name="OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#alarms OpsworksJavaAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cpu_threshold OpsworksJavaAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ignore_metrics_time OpsworksJavaAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_count OpsworksJavaAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_threshold OpsworksJavaAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#memory_threshold OpsworksJavaAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#thresholds_wait_time OpsworksJavaAppLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#alarms OpsworksJavaAppLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cpu_threshold OpsworksJavaAppLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ignore_metrics_time OpsworksJavaAppLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_count OpsworksJavaAppLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_threshold OpsworksJavaAppLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#memory_threshold OpsworksJavaAppLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#thresholds_wait_time OpsworksJavaAppLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.get"></a>

```csharp
private OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">ResetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">ResetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">ResetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">ResetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">ResetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">ResetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```csharp
private void ResetBatchCount()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```csharp
private void ResetBatchSize()
```

##### `ResetBufferDuration` <a name="ResetBufferDuration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```csharp
private void ResetBufferDuration()
```

##### `ResetDatetimeFormat` <a name="ResetDatetimeFormat" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```csharp
private void ResetDatetimeFormat()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFileFingerprintLines` <a name="ResetFileFingerprintLines" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```csharp
private void ResetFileFingerprintLines()
```

##### `ResetInitialPosition` <a name="ResetInitialPosition" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```csharp
private void ResetInitialPosition()
```

##### `ResetMultilineStartPattern` <a name="ResetMultilineStartPattern" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```csharp
private void ResetMultilineStartPattern()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">BufferDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">DatetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">FileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">InitialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">MultilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">BatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">BufferDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">DatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">InitialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```csharp
public double BatchCountInput { get; }
```

- *Type:* double

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `BufferDurationInput`<sup>Optional</sup> <a name="BufferDurationInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```csharp
public double BufferDurationInput { get; }
```

- *Type:* double

---

##### `DatetimeFormatInput`<sup>Optional</sup> <a name="DatetimeFormatInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```csharp
public string DatetimeFormatInput { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FileFingerprintLinesInput`<sup>Optional</sup> <a name="FileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```csharp
public string FileFingerprintLinesInput { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `InitialPositionInput`<sup>Optional</sup> <a name="InitialPositionInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```csharp
public string InitialPositionInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `MultilineStartPatternInput`<sup>Optional</sup> <a name="MultilineStartPatternInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```csharp
public string MultilineStartPatternInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```csharp
public double BatchCount { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `BufferDuration`<sup>Required</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```csharp
public double BufferDuration { get; }
```

- *Type:* double

---

##### `DatetimeFormat`<sup>Required</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```csharp
public string DatetimeFormat { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `FileFingerprintLines`<sup>Required</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```csharp
public string FileFingerprintLines { get; }
```

- *Type:* string

---

##### `InitialPosition`<sup>Required</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```csharp
public string InitialPosition { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `MultilineStartPattern`<sup>Required</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```csharp
public string MultilineStartPattern { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksJavaAppLayerCloudwatchConfigurationOutputReference <a name="OpsworksJavaAppLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerCloudwatchConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.putLogStreams">PutLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resetLogStreams">ResetLogStreams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```csharp
private void PutLogStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogStreams` <a name="ResetLogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```csharp
private void ResetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList">OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">LogStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```csharp
public OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList LogStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList">OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```csharp
public object LogStreamsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```csharp
public OpsworksJavaAppLayerCloudwatchConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a>

---


### OpsworksJavaAppLayerEbsVolumeList <a name="OpsworksJavaAppLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerEbsVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.get"></a>

```csharp
private OpsworksJavaAppLayerEbsVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksJavaAppLayerEbsVolumeOutputReference <a name="OpsworksJavaAppLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerEbsVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetRaidLevel">ResetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetRaidLevel` <a name="ResetRaidLevel" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```csharp
private void ResetRaidLevel()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.raidLevelInput">RaidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.raidLevel">RaidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```csharp
public double NumberOfDisksInput { get; }
```

- *Type:* double

---

##### `RaidLevelInput`<sup>Optional</sup> <a name="RaidLevelInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```csharp
public string RaidLevelInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; }
```

- *Type:* double

---

##### `RaidLevel`<sup>Required</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.raidLevel"></a>

```csharp
public string RaidLevel { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```csharp
private void ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```csharp
private void ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```csharp
private void ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```csharp
private void ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```csharp
private void ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```csharp
public double CpuThresholdInput { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```csharp
public double IgnoreMetricsTimeInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```csharp
public double LoadThresholdInput { get; }
```

- *Type:* double

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```csharp
public double MemoryThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```csharp
public double ThresholdsWaitTimeInput { get; }
```

- *Type:* double

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; }
```

- *Type:* double

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference <a name="OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putDownscaling">PutDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putUpscaling">PutUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling">ResetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling">ResetUpscaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownscaling` <a name="PutDownscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```csharp
private void PutDownscaling(OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `PutUpscaling` <a name="PutUpscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```csharp
private void PutUpscaling(OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `ResetDownscaling` <a name="ResetDownscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```csharp
private void ResetDownscaling()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetUpscaling` <a name="ResetUpscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```csharp
private void ResetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">DownscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">UpscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Downscaling`<sup>Required</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference Downscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `Upscaling`<sup>Required</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference Upscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `DownscalingInput`<sup>Optional</sup> <a name="DownscalingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling DownscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `UpscalingInput`<sup>Optional</sup> <a name="UpscalingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling UpscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a>

---


### OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```csharp
private void ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```csharp
private void ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```csharp
private void ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```csharp
private void ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```csharp
private void ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```csharp
public double CpuThresholdInput { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```csharp
public double IgnoreMetricsTimeInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```csharp
public double LoadThresholdInput { get; }
```

- *Type:* double

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```csharp
public double MemoryThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```csharp
public double ThresholdsWaitTimeInput { get; }
```

- *Type:* double

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; }
```

- *Type:* double

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a>

---



