# `opsworksMysqlLayer` Submodule <a name="`opsworksMysqlLayer` Submodule" id="@cdktf/provider-aws.opsworksMysqlLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksMysqlLayer <a name="OpsworksMysqlLayer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer aws_opsworks_mysql_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayer(Construct Scope, string Id, OpsworksMysqlLayerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig">OpsworksMysqlLayerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig">OpsworksMysqlLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration">PutCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume">PutEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling">PutLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignElasticIps">ResetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignPublicIps">ResetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCloudwatchConfiguration">ResetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomConfigureRecipes">ResetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomDeployRecipes">ResetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomInstanceProfileArn">ResetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomJson">ResetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSecurityGroupIds">ResetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSetupRecipes">ResetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomShutdownRecipes">ResetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomUndeployRecipes">ResetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetDrainElbOnShutdown">ResetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetEbsVolume">ResetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetElasticLoadBalancer">ResetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstallUpdatesOnBoot">ResetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstanceShutdownTimeout">ResetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetLoadBasedAutoScaling">ResetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPassword">ResetRootPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPasswordOnAllInstances">ResetRootPasswordOnAllInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetSystemPackages">ResetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetUseEbsOptimizedInstances">ResetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration"></a>

```csharp
private void PutCloudwatchConfiguration(OpsworksMysqlLayerCloudwatchConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---

##### `PutEbsVolume` <a name="PutEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume"></a>

```csharp
private void PutEbsVolume(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume.parameter.value"></a>

- *Type:* object

---

##### `PutLoadBasedAutoScaling` <a name="PutLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling"></a>

```csharp
private void PutLoadBasedAutoScaling(OpsworksMysqlLayerLoadBasedAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---

##### `ResetAutoAssignElasticIps` <a name="ResetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignElasticIps"></a>

```csharp
private void ResetAutoAssignElasticIps()
```

##### `ResetAutoAssignPublicIps` <a name="ResetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignPublicIps"></a>

```csharp
private void ResetAutoAssignPublicIps()
```

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoHealing"></a>

```csharp
private void ResetAutoHealing()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCloudwatchConfiguration"></a>

```csharp
private void ResetCloudwatchConfiguration()
```

##### `ResetCustomConfigureRecipes` <a name="ResetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomConfigureRecipes"></a>

```csharp
private void ResetCustomConfigureRecipes()
```

##### `ResetCustomDeployRecipes` <a name="ResetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomDeployRecipes"></a>

```csharp
private void ResetCustomDeployRecipes()
```

##### `ResetCustomInstanceProfileArn` <a name="ResetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomInstanceProfileArn"></a>

```csharp
private void ResetCustomInstanceProfileArn()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomJson"></a>

```csharp
private void ResetCustomJson()
```

##### `ResetCustomSecurityGroupIds` <a name="ResetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSecurityGroupIds"></a>

```csharp
private void ResetCustomSecurityGroupIds()
```

##### `ResetCustomSetupRecipes` <a name="ResetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSetupRecipes"></a>

```csharp
private void ResetCustomSetupRecipes()
```

##### `ResetCustomShutdownRecipes` <a name="ResetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomShutdownRecipes"></a>

```csharp
private void ResetCustomShutdownRecipes()
```

##### `ResetCustomUndeployRecipes` <a name="ResetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomUndeployRecipes"></a>

```csharp
private void ResetCustomUndeployRecipes()
```

##### `ResetDrainElbOnShutdown` <a name="ResetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetDrainElbOnShutdown"></a>

```csharp
private void ResetDrainElbOnShutdown()
```

##### `ResetEbsVolume` <a name="ResetEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetEbsVolume"></a>

```csharp
private void ResetEbsVolume()
```

##### `ResetElasticLoadBalancer` <a name="ResetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetElasticLoadBalancer"></a>

```csharp
private void ResetElasticLoadBalancer()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstallUpdatesOnBoot` <a name="ResetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstallUpdatesOnBoot"></a>

```csharp
private void ResetInstallUpdatesOnBoot()
```

##### `ResetInstanceShutdownTimeout` <a name="ResetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstanceShutdownTimeout"></a>

```csharp
private void ResetInstanceShutdownTimeout()
```

##### `ResetLoadBasedAutoScaling` <a name="ResetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetLoadBasedAutoScaling"></a>

```csharp
private void ResetLoadBasedAutoScaling()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRootPassword` <a name="ResetRootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPassword"></a>

```csharp
private void ResetRootPassword()
```

##### `ResetRootPasswordOnAllInstances` <a name="ResetRootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPasswordOnAllInstances"></a>

```csharp
private void ResetRootPasswordOnAllInstances()
```

##### `ResetSystemPackages` <a name="ResetSystemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetSystemPackages"></a>

```csharp
private void ResetSystemPackages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUseEbsOptimizedInstances` <a name="ResetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetUseEbsOptimizedInstances"></a>

```csharp
private void ResetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksMysqlLayer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksMysqlLayer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksMysqlLayer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference">OpsworksMysqlLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolume">EbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList">OpsworksMysqlLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIpsInput">AutoAssignElasticIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIpsInput">AutoAssignPublicIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealingInput">AutoHealingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipesInput">CustomConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipesInput">CustomDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArnInput">CustomInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJsonInput">CustomJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIdsInput">CustomSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipesInput">CustomSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipesInput">CustomShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipesInput">CustomUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdownInput">DrainElbOnShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolumeInput">EbsVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancerInput">ElasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBootInput">InstallUpdatesOnBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeoutInput">InstanceShutdownTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScalingInput">LoadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordInput">RootPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstancesInput">RootPasswordOnAllInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackIdInput">StackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackagesInput">SystemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstancesInput">UseEbsOptimizedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealing">AutoHealing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJson">CustomJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPassword">RootPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstances">RootPasswordOnAllInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackages">SystemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfiguration"></a>

```csharp
public OpsworksMysqlLayerCloudwatchConfigurationOutputReference CloudwatchConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference">OpsworksMysqlLayerCloudwatchConfigurationOutputReference</a>

---

##### `EbsVolume`<sup>Required</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolume"></a>

```csharp
public OpsworksMysqlLayerEbsVolumeList EbsVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList">OpsworksMysqlLayerEbsVolumeList</a>

---

##### `LoadBasedAutoScaling`<sup>Required</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScaling"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingOutputReference LoadBasedAutoScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingOutputReference</a>

---

##### `AutoAssignElasticIpsInput`<sup>Optional</sup> <a name="AutoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIpsInput"></a>

```csharp
public object AutoAssignElasticIpsInput { get; }
```

- *Type:* object

---

##### `AutoAssignPublicIpsInput`<sup>Optional</sup> <a name="AutoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIpsInput"></a>

```csharp
public object AutoAssignPublicIpsInput { get; }
```

- *Type:* object

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealingInput"></a>

```csharp
public object AutoHealingInput { get; }
```

- *Type:* object

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfigurationInput"></a>

```csharp
public OpsworksMysqlLayerCloudwatchConfiguration CloudwatchConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---

##### `CustomConfigureRecipesInput`<sup>Optional</sup> <a name="CustomConfigureRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipesInput"></a>

```csharp
public string[] CustomConfigureRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomDeployRecipesInput`<sup>Optional</sup> <a name="CustomDeployRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipesInput"></a>

```csharp
public string[] CustomDeployRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomInstanceProfileArnInput`<sup>Optional</sup> <a name="CustomInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArnInput"></a>

```csharp
public string CustomInstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJsonInput"></a>

```csharp
public string CustomJsonInput { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIdsInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIdsInput"></a>

```csharp
public string[] CustomSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `CustomSetupRecipesInput`<sup>Optional</sup> <a name="CustomSetupRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipesInput"></a>

```csharp
public string[] CustomSetupRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomShutdownRecipesInput`<sup>Optional</sup> <a name="CustomShutdownRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipesInput"></a>

```csharp
public string[] CustomShutdownRecipesInput { get; }
```

- *Type:* string[]

---

##### `CustomUndeployRecipesInput`<sup>Optional</sup> <a name="CustomUndeployRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipesInput"></a>

```csharp
public string[] CustomUndeployRecipesInput { get; }
```

- *Type:* string[]

---

##### `DrainElbOnShutdownInput`<sup>Optional</sup> <a name="DrainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdownInput"></a>

```csharp
public object DrainElbOnShutdownInput { get; }
```

- *Type:* object

---

##### `EbsVolumeInput`<sup>Optional</sup> <a name="EbsVolumeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolumeInput"></a>

```csharp
public object EbsVolumeInput { get; }
```

- *Type:* object

---

##### `ElasticLoadBalancerInput`<sup>Optional</sup> <a name="ElasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancerInput"></a>

```csharp
public string ElasticLoadBalancerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstallUpdatesOnBootInput`<sup>Optional</sup> <a name="InstallUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBootInput"></a>

```csharp
public object InstallUpdatesOnBootInput { get; }
```

- *Type:* object

---

##### `InstanceShutdownTimeoutInput`<sup>Optional</sup> <a name="InstanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeoutInput"></a>

```csharp
public double InstanceShutdownTimeoutInput { get; }
```

- *Type:* double

---

##### `LoadBasedAutoScalingInput`<sup>Optional</sup> <a name="LoadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScalingInput"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScaling LoadBasedAutoScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RootPasswordInput`<sup>Optional</sup> <a name="RootPasswordInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordInput"></a>

```csharp
public string RootPasswordInput { get; }
```

- *Type:* string

---

##### `RootPasswordOnAllInstancesInput`<sup>Optional</sup> <a name="RootPasswordOnAllInstancesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstancesInput"></a>

```csharp
public object RootPasswordOnAllInstancesInput { get; }
```

- *Type:* object

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackIdInput"></a>

```csharp
public string StackIdInput { get; }
```

- *Type:* string

---

##### `SystemPackagesInput`<sup>Optional</sup> <a name="SystemPackagesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackagesInput"></a>

```csharp
public string[] SystemPackagesInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="UseEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstancesInput"></a>

```csharp
public object UseEbsOptimizedInstancesInput { get; }
```

- *Type:* object

---

##### `AutoAssignElasticIps`<sup>Required</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIps"></a>

```csharp
public object AutoAssignElasticIps { get; }
```

- *Type:* object

---

##### `AutoAssignPublicIps`<sup>Required</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIps"></a>

```csharp
public object AutoAssignPublicIps { get; }
```

- *Type:* object

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealing"></a>

```csharp
public object AutoHealing { get; }
```

- *Type:* object

---

##### `CustomConfigureRecipes`<sup>Required</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipes"></a>

```csharp
public string[] CustomConfigureRecipes { get; }
```

- *Type:* string[]

---

##### `CustomDeployRecipes`<sup>Required</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipes"></a>

```csharp
public string[] CustomDeployRecipes { get; }
```

- *Type:* string[]

---

##### `CustomInstanceProfileArn`<sup>Required</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArn"></a>

```csharp
public string CustomInstanceProfileArn { get; }
```

- *Type:* string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJson"></a>

```csharp
public string CustomJson { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIds`<sup>Required</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIds"></a>

```csharp
public string[] CustomSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `CustomSetupRecipes`<sup>Required</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipes"></a>

```csharp
public string[] CustomSetupRecipes { get; }
```

- *Type:* string[]

---

##### `CustomShutdownRecipes`<sup>Required</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipes"></a>

```csharp
public string[] CustomShutdownRecipes { get; }
```

- *Type:* string[]

---

##### `CustomUndeployRecipes`<sup>Required</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipes"></a>

```csharp
public string[] CustomUndeployRecipes { get; }
```

- *Type:* string[]

---

##### `DrainElbOnShutdown`<sup>Required</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdown"></a>

```csharp
public object DrainElbOnShutdown { get; }
```

- *Type:* object

---

##### `ElasticLoadBalancer`<sup>Required</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancer"></a>

```csharp
public string ElasticLoadBalancer { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallUpdatesOnBoot`<sup>Required</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBoot"></a>

```csharp
public object InstallUpdatesOnBoot { get; }
```

- *Type:* object

---

##### `InstanceShutdownTimeout`<sup>Required</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeout"></a>

```csharp
public double InstanceShutdownTimeout { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RootPassword`<sup>Required</sup> <a name="RootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPassword"></a>

```csharp
public string RootPassword { get; }
```

- *Type:* string

---

##### `RootPasswordOnAllInstances`<sup>Required</sup> <a name="RootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstances"></a>

```csharp
public object RootPasswordOnAllInstances { get; }
```

- *Type:* object

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

##### `SystemPackages`<sup>Required</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackages"></a>

```csharp
public string[] SystemPackages { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseEbsOptimizedInstances`<sup>Required</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstances"></a>

```csharp
public object UseEbsOptimizedInstances { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksMysqlLayerCloudwatchConfiguration <a name="OpsworksMysqlLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerCloudwatchConfiguration {
    object Enabled = null,
    object LogStreams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.logStreams">LogStreams</a></code> | <code>object</code> | log_streams block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}.

---

##### `LogStreams`<sup>Optional</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.logStreams"></a>

```csharp
public object LogStreams { get; set; }
```

- *Type:* object

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_streams OpsworksMysqlLayer#log_streams}

---

### OpsworksMysqlLayerCloudwatchConfigurationLogStreams <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerCloudwatchConfigurationLogStreams {
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.file">File</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file OpsworksMysqlLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchCount">BatchCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchSize">BatchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.bufferDuration">BufferDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">DatetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.initialPosition">InitialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file OpsworksMysqlLayer#file}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}.

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```csharp
public double BatchCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}.

---

##### `BufferDuration`<sup>Optional</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```csharp
public double BufferDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}.

---

##### `DatetimeFormat`<sup>Optional</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```csharp
public string DatetimeFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}.

---

##### `FileFingerprintLines`<sup>Optional</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```csharp
public string FileFingerprintLines { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}.

---

##### `InitialPosition`<sup>Optional</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```csharp
public string InitialPosition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}.

---

##### `MultilineStartPattern`<sup>Optional</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```csharp
public string MultilineStartPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}.

---

### OpsworksMysqlLayerConfig <a name="OpsworksMysqlLayerConfig" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerConfig {
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
    OpsworksMysqlLayerCloudwatchConfiguration CloudwatchConfiguration = null,
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
    OpsworksMysqlLayerLoadBasedAutoScaling LoadBasedAutoScaling = null,
    string Name = null,
    string RootPassword = null,
    object RootPasswordOnAllInstances = null,
    string[] SystemPackages = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object UseEbsOptimizedInstances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.stackId">StackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoHealing">AutoHealing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customJson">CustomJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.ebsVolume">EbsVolume</a></code> | <code>object</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPassword">RootPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPasswordOnAllInstances">RootPasswordOnAllInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.systemPackages">SystemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.stackId"></a>

```csharp
public string StackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}.

---

##### `AutoAssignElasticIps`<sup>Optional</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignElasticIps"></a>

```csharp
public object AutoAssignElasticIps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}.

---

##### `AutoAssignPublicIps`<sup>Optional</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignPublicIps"></a>

```csharp
public object AutoAssignPublicIps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoHealing"></a>

```csharp
public object AutoHealing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}.

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.cloudwatchConfiguration"></a>

```csharp
public OpsworksMysqlLayerCloudwatchConfiguration CloudwatchConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cloudwatch_configuration OpsworksMysqlLayer#cloudwatch_configuration}

---

##### `CustomConfigureRecipes`<sup>Optional</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customConfigureRecipes"></a>

```csharp
public string[] CustomConfigureRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}.

---

##### `CustomDeployRecipes`<sup>Optional</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customDeployRecipes"></a>

```csharp
public string[] CustomDeployRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}.

---

##### `CustomInstanceProfileArn`<sup>Optional</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customInstanceProfileArn"></a>

```csharp
public string CustomInstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}.

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customJson"></a>

```csharp
public string CustomJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}.

---

##### `CustomSecurityGroupIds`<sup>Optional</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSecurityGroupIds"></a>

```csharp
public string[] CustomSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}.

---

##### `CustomSetupRecipes`<sup>Optional</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSetupRecipes"></a>

```csharp
public string[] CustomSetupRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}.

---

##### `CustomShutdownRecipes`<sup>Optional</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customShutdownRecipes"></a>

```csharp
public string[] CustomShutdownRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}.

---

##### `CustomUndeployRecipes`<sup>Optional</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customUndeployRecipes"></a>

```csharp
public string[] CustomUndeployRecipes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}.

---

##### `DrainElbOnShutdown`<sup>Optional</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.drainElbOnShutdown"></a>

```csharp
public object DrainElbOnShutdown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}.

---

##### `EbsVolume`<sup>Optional</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.ebsVolume"></a>

```csharp
public object EbsVolume { get; set; }
```

- *Type:* object

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ebs_volume OpsworksMysqlLayer#ebs_volume}

---

##### `ElasticLoadBalancer`<sup>Optional</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.elasticLoadBalancer"></a>

```csharp
public string ElasticLoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallUpdatesOnBoot`<sup>Optional</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.installUpdatesOnBoot"></a>

```csharp
public object InstallUpdatesOnBoot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}.

---

##### `InstanceShutdownTimeout`<sup>Optional</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.instanceShutdownTimeout"></a>

```csharp
public double InstanceShutdownTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}.

---

##### `LoadBasedAutoScaling`<sup>Optional</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.loadBasedAutoScaling"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScaling LoadBasedAutoScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_based_auto_scaling OpsworksMysqlLayer#load_based_auto_scaling}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}.

---

##### `RootPassword`<sup>Optional</sup> <a name="RootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPassword"></a>

```csharp
public string RootPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}.

---

##### `RootPasswordOnAllInstances`<sup>Optional</sup> <a name="RootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPasswordOnAllInstances"></a>

```csharp
public object RootPasswordOnAllInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}.

---

##### `SystemPackages`<sup>Optional</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.systemPackages"></a>

```csharp
public string[] SystemPackages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}.

---

##### `UseEbsOptimizedInstances`<sup>Optional</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.useEbsOptimizedInstances"></a>

```csharp
public object UseEbsOptimizedInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}.

---

### OpsworksMysqlLayerEbsVolume <a name="OpsworksMysqlLayerEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerEbsVolume {
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.mountPoint">MountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#size OpsworksMysqlLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.raidLevel">RaidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#type OpsworksMysqlLayer#type}. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}.

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#size OpsworksMysqlLayer#size}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}.

---

##### `RaidLevel`<sup>Optional</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.raidLevel"></a>

```csharp
public string RaidLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#type OpsworksMysqlLayer#type}.

---

### OpsworksMysqlLayerLoadBasedAutoScaling <a name="OpsworksMysqlLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerLoadBasedAutoScaling {
    OpsworksMysqlLayerLoadBasedAutoScalingDownscaling Downscaling = null,
    object Enable = null,
    OpsworksMysqlLayerLoadBasedAutoScalingUpscaling Upscaling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `Downscaling`<sup>Optional</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.downscaling"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingDownscaling Downscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#downscaling OpsworksMysqlLayer#downscaling}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}.

---

##### `Upscaling`<sup>Optional</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.upscaling"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingUpscaling Upscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#upscaling OpsworksMysqlLayer#upscaling}

---

### OpsworksMysqlLayerLoadBasedAutoScalingDownscaling <a name="OpsworksMysqlLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerLoadBasedAutoScalingDownscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

### OpsworksMysqlLayerLoadBasedAutoScalingUpscaling <a name="OpsworksMysqlLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerLoadBasedAutoScalingUpscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get"></a>

```csharp
private OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">ResetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">ResetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">ResetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">ResetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">ResetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">ResetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```csharp
private void ResetBatchCount()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```csharp
private void ResetBatchSize()
```

##### `ResetBufferDuration` <a name="ResetBufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```csharp
private void ResetBufferDuration()
```

##### `ResetDatetimeFormat` <a name="ResetDatetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```csharp
private void ResetDatetimeFormat()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFileFingerprintLines` <a name="ResetFileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```csharp
private void ResetFileFingerprintLines()
```

##### `ResetInitialPosition` <a name="ResetInitialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```csharp
private void ResetInitialPosition()
```

##### `ResetMultilineStartPattern` <a name="ResetMultilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```csharp
private void ResetMultilineStartPattern()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">BufferDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">DatetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">FileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">InitialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">MultilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">BatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">BufferDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">DatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">InitialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```csharp
public double BatchCountInput { get; }
```

- *Type:* double

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `BufferDurationInput`<sup>Optional</sup> <a name="BufferDurationInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```csharp
public double BufferDurationInput { get; }
```

- *Type:* double

---

##### `DatetimeFormatInput`<sup>Optional</sup> <a name="DatetimeFormatInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```csharp
public string DatetimeFormatInput { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FileFingerprintLinesInput`<sup>Optional</sup> <a name="FileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```csharp
public string FileFingerprintLinesInput { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `InitialPositionInput`<sup>Optional</sup> <a name="InitialPositionInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```csharp
public string InitialPositionInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `MultilineStartPatternInput`<sup>Optional</sup> <a name="MultilineStartPatternInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```csharp
public string MultilineStartPatternInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```csharp
public double BatchCount { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `BufferDuration`<sup>Required</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```csharp
public double BufferDuration { get; }
```

- *Type:* double

---

##### `DatetimeFormat`<sup>Required</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```csharp
public string DatetimeFormat { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `FileFingerprintLines`<sup>Required</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```csharp
public string FileFingerprintLines { get; }
```

- *Type:* string

---

##### `InitialPosition`<sup>Required</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```csharp
public string InitialPosition { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `MultilineStartPattern`<sup>Required</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```csharp
public string MultilineStartPattern { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksMysqlLayerCloudwatchConfigurationOutputReference <a name="OpsworksMysqlLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerCloudwatchConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams">PutLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetLogStreams">ResetLogStreams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```csharp
private void PutLogStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogStreams` <a name="ResetLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```csharp
private void ResetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList">OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">LogStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```csharp
public OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList LogStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList">OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```csharp
public object LogStreamsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```csharp
public OpsworksMysqlLayerCloudwatchConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---


### OpsworksMysqlLayerEbsVolumeList <a name="OpsworksMysqlLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerEbsVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get"></a>

```csharp
private OpsworksMysqlLayerEbsVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksMysqlLayerEbsVolumeOutputReference <a name="OpsworksMysqlLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerEbsVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetRaidLevel">ResetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetRaidLevel` <a name="ResetRaidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```csharp
private void ResetRaidLevel()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevelInput">RaidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevel">RaidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```csharp
public double NumberOfDisksInput { get; }
```

- *Type:* double

---

##### `RaidLevelInput`<sup>Optional</sup> <a name="RaidLevelInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```csharp
public string RaidLevelInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; }
```

- *Type:* double

---

##### `RaidLevel`<sup>Required</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevel"></a>

```csharp
public string RaidLevel { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```csharp
private void ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```csharp
private void ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```csharp
private void ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```csharp
private void ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```csharp
private void ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```csharp
public double CpuThresholdInput { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```csharp
public double IgnoreMetricsTimeInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```csharp
public double LoadThresholdInput { get; }
```

- *Type:* double

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```csharp
public double MemoryThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```csharp
public double ThresholdsWaitTimeInput { get; }
```

- *Type:* double

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; }
```

- *Type:* double

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingDownscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksMysqlLayerLoadBasedAutoScalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling">PutDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling">PutUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetDownscaling">ResetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetUpscaling">ResetUpscaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownscaling` <a name="PutDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```csharp
private void PutDownscaling(OpsworksMysqlLayerLoadBasedAutoScalingDownscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---

##### `PutUpscaling` <a name="PutUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```csharp
private void PutUpscaling(OpsworksMysqlLayerLoadBasedAutoScalingUpscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---

##### `ResetDownscaling` <a name="ResetDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```csharp
private void ResetDownscaling()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetUpscaling` <a name="ResetUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```csharp
private void ResetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">DownscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">UpscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Downscaling`<sup>Required</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference Downscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `Upscaling`<sup>Required</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference Upscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `DownscalingInput`<sup>Optional</sup> <a name="DownscalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingDownscaling DownscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `UpscalingInput`<sup>Optional</sup> <a name="UpscalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingUpscaling UpscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---


### OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```csharp
private void ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```csharp
private void ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```csharp
private void ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```csharp
private void ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```csharp
private void ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```csharp
public double CpuThresholdInput { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```csharp
public double IgnoreMetricsTimeInput { get; }
```

- *Type:* double

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```csharp
public double LoadThresholdInput { get; }
```

- *Type:* double

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```csharp
public double MemoryThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```csharp
public double ThresholdsWaitTimeInput { get; }
```

- *Type:* double

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```csharp
public double CpuThreshold { get; }
```

- *Type:* double

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```csharp
public double IgnoreMetricsTime { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```csharp
public double LoadThreshold { get; }
```

- *Type:* double

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```csharp
public double MemoryThreshold { get; }
```

- *Type:* double

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```csharp
public double ThresholdsWaitTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```csharp
public OpsworksMysqlLayerLoadBasedAutoScalingUpscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---



