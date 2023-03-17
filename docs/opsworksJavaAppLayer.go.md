# `opsworksJavaAppLayer` Submodule <a name="`opsworksJavaAppLayer` Submodule" id="@cdktf/provider-aws.opsworksJavaAppLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksJavaAppLayer <a name="OpsworksJavaAppLayer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer aws_opsworks_java_app_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayer(scope Construct, id *string, config OpsworksJavaAppLayerConfig) OpsworksJavaAppLayer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig">OpsworksJavaAppLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putCloudwatchConfiguration"></a>

```go
func PutCloudwatchConfiguration(value OpsworksJavaAppLayerCloudwatchConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a>

---

##### `PutEbsVolume` <a name="PutEbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putEbsVolume"></a>

```go
func PutEbsVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putEbsVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoadBasedAutoScaling` <a name="PutLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putLoadBasedAutoScaling"></a>

```go
func PutLoadBasedAutoScaling(value OpsworksJavaAppLayerLoadBasedAutoScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a>

---

##### `ResetAppServer` <a name="ResetAppServer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAppServer"></a>

```go
func ResetAppServer()
```

##### `ResetAppServerVersion` <a name="ResetAppServerVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAppServerVersion"></a>

```go
func ResetAppServerVersion()
```

##### `ResetAutoAssignElasticIps` <a name="ResetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoAssignElasticIps"></a>

```go
func ResetAutoAssignElasticIps()
```

##### `ResetAutoAssignPublicIps` <a name="ResetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoAssignPublicIps"></a>

```go
func ResetAutoAssignPublicIps()
```

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetAutoHealing"></a>

```go
func ResetAutoHealing()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCloudwatchConfiguration"></a>

```go
func ResetCloudwatchConfiguration()
```

##### `ResetCustomConfigureRecipes` <a name="ResetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomConfigureRecipes"></a>

```go
func ResetCustomConfigureRecipes()
```

##### `ResetCustomDeployRecipes` <a name="ResetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomDeployRecipes"></a>

```go
func ResetCustomDeployRecipes()
```

##### `ResetCustomInstanceProfileArn` <a name="ResetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomInstanceProfileArn"></a>

```go
func ResetCustomInstanceProfileArn()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomJson"></a>

```go
func ResetCustomJson()
```

##### `ResetCustomSecurityGroupIds` <a name="ResetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomSecurityGroupIds"></a>

```go
func ResetCustomSecurityGroupIds()
```

##### `ResetCustomSetupRecipes` <a name="ResetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomSetupRecipes"></a>

```go
func ResetCustomSetupRecipes()
```

##### `ResetCustomShutdownRecipes` <a name="ResetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomShutdownRecipes"></a>

```go
func ResetCustomShutdownRecipes()
```

##### `ResetCustomUndeployRecipes` <a name="ResetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetCustomUndeployRecipes"></a>

```go
func ResetCustomUndeployRecipes()
```

##### `ResetDrainElbOnShutdown` <a name="ResetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetDrainElbOnShutdown"></a>

```go
func ResetDrainElbOnShutdown()
```

##### `ResetEbsVolume` <a name="ResetEbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetEbsVolume"></a>

```go
func ResetEbsVolume()
```

##### `ResetElasticLoadBalancer` <a name="ResetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetElasticLoadBalancer"></a>

```go
func ResetElasticLoadBalancer()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetId"></a>

```go
func ResetId()
```

##### `ResetInstallUpdatesOnBoot` <a name="ResetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetInstallUpdatesOnBoot"></a>

```go
func ResetInstallUpdatesOnBoot()
```

##### `ResetInstanceShutdownTimeout` <a name="ResetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetInstanceShutdownTimeout"></a>

```go
func ResetInstanceShutdownTimeout()
```

##### `ResetJvmOptions` <a name="ResetJvmOptions" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmOptions"></a>

```go
func ResetJvmOptions()
```

##### `ResetJvmType` <a name="ResetJvmType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmType"></a>

```go
func ResetJvmType()
```

##### `ResetJvmVersion` <a name="ResetJvmVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetJvmVersion"></a>

```go
func ResetJvmVersion()
```

##### `ResetLoadBasedAutoScaling` <a name="ResetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetLoadBasedAutoScaling"></a>

```go
func ResetLoadBasedAutoScaling()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetName"></a>

```go
func ResetName()
```

##### `ResetSystemPackages` <a name="ResetSystemPackages" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetSystemPackages"></a>

```go
func ResetSystemPackages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUseEbsOptimizedInstances` <a name="ResetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.resetUseEbsOptimizedInstances"></a>

```go
func ResetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.OpsworksJavaAppLayer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.OpsworksJavaAppLayer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.OpsworksJavaAppLayer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference">OpsworksJavaAppLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.ebsVolume">EbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList">OpsworksJavaAppLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerInput">AppServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerVersionInput">AppServerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignElasticIpsInput">AutoAssignElasticIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignPublicIpsInput">AutoAssignPublicIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoHealingInput">AutoHealingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customConfigureRecipesInput">CustomConfigureRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customDeployRecipesInput">CustomDeployRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customInstanceProfileArnInput">CustomInstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customJsonInput">CustomJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSecurityGroupIdsInput">CustomSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSetupRecipesInput">CustomSetupRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customShutdownRecipesInput">CustomShutdownRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customUndeployRecipesInput">CustomUndeployRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.drainElbOnShutdownInput">DrainElbOnShutdownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.ebsVolumeInput">EbsVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.elasticLoadBalancerInput">ElasticLoadBalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.installUpdatesOnBootInput">InstallUpdatesOnBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.instanceShutdownTimeoutInput">InstanceShutdownTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmOptionsInput">JvmOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmTypeInput">JvmTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmVersionInput">JvmVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.loadBasedAutoScalingInput">LoadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.stackIdInput">StackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.systemPackagesInput">SystemPackagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.useEbsOptimizedInstancesInput">UseEbsOptimizedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServer">AppServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerVersion">AppServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customJson">CustomJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmOptions">JvmOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmType">JvmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmVersion">JvmVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.systemPackages">SystemPackages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cloudwatchConfiguration"></a>

```go
func CloudwatchConfiguration() OpsworksJavaAppLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference">OpsworksJavaAppLayerCloudwatchConfigurationOutputReference</a>

---

##### `EbsVolume`<sup>Required</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.ebsVolume"></a>

```go
func EbsVolume() OpsworksJavaAppLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList">OpsworksJavaAppLayerEbsVolumeList</a>

---

##### `LoadBasedAutoScaling`<sup>Required</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.loadBasedAutoScaling"></a>

```go
func LoadBasedAutoScaling() OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference</a>

---

##### `AppServerInput`<sup>Optional</sup> <a name="AppServerInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerInput"></a>

```go
func AppServerInput() *string
```

- *Type:* *string

---

##### `AppServerVersionInput`<sup>Optional</sup> <a name="AppServerVersionInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerVersionInput"></a>

```go
func AppServerVersionInput() *string
```

- *Type:* *string

---

##### `AutoAssignElasticIpsInput`<sup>Optional</sup> <a name="AutoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignElasticIpsInput"></a>

```go
func AutoAssignElasticIpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignPublicIpsInput`<sup>Optional</sup> <a name="AutoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignPublicIpsInput"></a>

```go
func AutoAssignPublicIpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoHealingInput"></a>

```go
func AutoHealingInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.cloudwatchConfigurationInput"></a>

```go
func CloudwatchConfigurationInput() OpsworksJavaAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a>

---

##### `CustomConfigureRecipesInput`<sup>Optional</sup> <a name="CustomConfigureRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customConfigureRecipesInput"></a>

```go
func CustomConfigureRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDeployRecipesInput`<sup>Optional</sup> <a name="CustomDeployRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customDeployRecipesInput"></a>

```go
func CustomDeployRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInstanceProfileArnInput`<sup>Optional</sup> <a name="CustomInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customInstanceProfileArnInput"></a>

```go
func CustomInstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customJsonInput"></a>

```go
func CustomJsonInput() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIdsInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSecurityGroupIdsInput"></a>

```go
func CustomSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSetupRecipesInput`<sup>Optional</sup> <a name="CustomSetupRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSetupRecipesInput"></a>

```go
func CustomSetupRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomShutdownRecipesInput`<sup>Optional</sup> <a name="CustomShutdownRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customShutdownRecipesInput"></a>

```go
func CustomShutdownRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomUndeployRecipesInput`<sup>Optional</sup> <a name="CustomUndeployRecipesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customUndeployRecipesInput"></a>

```go
func CustomUndeployRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DrainElbOnShutdownInput`<sup>Optional</sup> <a name="DrainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.drainElbOnShutdownInput"></a>

```go
func DrainElbOnShutdownInput() interface{}
```

- *Type:* interface{}

---

##### `EbsVolumeInput`<sup>Optional</sup> <a name="EbsVolumeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.ebsVolumeInput"></a>

```go
func EbsVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticLoadBalancerInput`<sup>Optional</sup> <a name="ElasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.elasticLoadBalancerInput"></a>

```go
func ElasticLoadBalancerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstallUpdatesOnBootInput`<sup>Optional</sup> <a name="InstallUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.installUpdatesOnBootInput"></a>

```go
func InstallUpdatesOnBootInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceShutdownTimeoutInput`<sup>Optional</sup> <a name="InstanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.instanceShutdownTimeoutInput"></a>

```go
func InstanceShutdownTimeoutInput() *f64
```

- *Type:* *f64

---

##### `JvmOptionsInput`<sup>Optional</sup> <a name="JvmOptionsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmOptionsInput"></a>

```go
func JvmOptionsInput() *string
```

- *Type:* *string

---

##### `JvmTypeInput`<sup>Optional</sup> <a name="JvmTypeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmTypeInput"></a>

```go
func JvmTypeInput() *string
```

- *Type:* *string

---

##### `JvmVersionInput`<sup>Optional</sup> <a name="JvmVersionInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmVersionInput"></a>

```go
func JvmVersionInput() *string
```

- *Type:* *string

---

##### `LoadBasedAutoScalingInput`<sup>Optional</sup> <a name="LoadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.loadBasedAutoScalingInput"></a>

```go
func LoadBasedAutoScalingInput() OpsworksJavaAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.stackIdInput"></a>

```go
func StackIdInput() *string
```

- *Type:* *string

---

##### `SystemPackagesInput`<sup>Optional</sup> <a name="SystemPackagesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.systemPackagesInput"></a>

```go
func SystemPackagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="UseEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.useEbsOptimizedInstancesInput"></a>

```go
func UseEbsOptimizedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `AppServer`<sup>Required</sup> <a name="AppServer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServer"></a>

```go
func AppServer() *string
```

- *Type:* *string

---

##### `AppServerVersion`<sup>Required</sup> <a name="AppServerVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.appServerVersion"></a>

```go
func AppServerVersion() *string
```

- *Type:* *string

---

##### `AutoAssignElasticIps`<sup>Required</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignElasticIps"></a>

```go
func AutoAssignElasticIps() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignPublicIps`<sup>Required</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoAssignPublicIps"></a>

```go
func AutoAssignPublicIps() interface{}
```

- *Type:* interface{}

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.autoHealing"></a>

```go
func AutoHealing() interface{}
```

- *Type:* interface{}

---

##### `CustomConfigureRecipes`<sup>Required</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customConfigureRecipes"></a>

```go
func CustomConfigureRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDeployRecipes`<sup>Required</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customDeployRecipes"></a>

```go
func CustomDeployRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInstanceProfileArn`<sup>Required</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customInstanceProfileArn"></a>

```go
func CustomInstanceProfileArn() *string
```

- *Type:* *string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customJson"></a>

```go
func CustomJson() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIds`<sup>Required</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSecurityGroupIds"></a>

```go
func CustomSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSetupRecipes`<sup>Required</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customSetupRecipes"></a>

```go
func CustomSetupRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomShutdownRecipes`<sup>Required</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customShutdownRecipes"></a>

```go
func CustomShutdownRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomUndeployRecipes`<sup>Required</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.customUndeployRecipes"></a>

```go
func CustomUndeployRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `DrainElbOnShutdown`<sup>Required</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.drainElbOnShutdown"></a>

```go
func DrainElbOnShutdown() interface{}
```

- *Type:* interface{}

---

##### `ElasticLoadBalancer`<sup>Required</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.elasticLoadBalancer"></a>

```go
func ElasticLoadBalancer() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallUpdatesOnBoot`<sup>Required</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.installUpdatesOnBoot"></a>

```go
func InstallUpdatesOnBoot() interface{}
```

- *Type:* interface{}

---

##### `InstanceShutdownTimeout`<sup>Required</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.instanceShutdownTimeout"></a>

```go
func InstanceShutdownTimeout() *f64
```

- *Type:* *f64

---

##### `JvmOptions`<sup>Required</sup> <a name="JvmOptions" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmOptions"></a>

```go
func JvmOptions() *string
```

- *Type:* *string

---

##### `JvmType`<sup>Required</sup> <a name="JvmType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmType"></a>

```go
func JvmType() *string
```

- *Type:* *string

---

##### `JvmVersion`<sup>Required</sup> <a name="JvmVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.jvmVersion"></a>

```go
func JvmVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `SystemPackages`<sup>Required</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.systemPackages"></a>

```go
func SystemPackages() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseEbsOptimizedInstances`<sup>Required</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.useEbsOptimizedInstances"></a>

```go
func UseEbsOptimizedInstances() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksJavaAppLayerCloudwatchConfiguration <a name="OpsworksJavaAppLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

&opsworksjavaapplayer.OpsworksJavaAppLayerCloudwatchConfiguration {
	Enabled: interface{},
	LogStreams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#enabled OpsworksJavaAppLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.property.logStreams">LogStreams</a></code> | <code>interface{}</code> | log_streams block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#enabled OpsworksJavaAppLayer#enabled}.

---

##### `LogStreams`<sup>Optional</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration.property.logStreams"></a>

```go
LogStreams interface{}
```

- *Type:* interface{}

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#log_streams OpsworksJavaAppLayer#log_streams}

---

### OpsworksJavaAppLayerCloudwatchConfigurationLogStreams <a name="OpsworksJavaAppLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

&opsworksjavaapplayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams {
	File: *string,
	LogGroupName: *string,
	BatchCount: *f64,
	BatchSize: *f64,
	BufferDuration: *f64,
	DatetimeFormat: *string,
	Encoding: *string,
	FileFingerprintLines: *string,
	InitialPosition: *string,
	MultilineStartPattern: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.file">File</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#file OpsworksJavaAppLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#log_group_name OpsworksJavaAppLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.batchCount">BatchCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#batch_count OpsworksJavaAppLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#batch_size OpsworksJavaAppLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration">BufferDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#buffer_duration OpsworksJavaAppLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">DatetimeFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#datetime_format OpsworksJavaAppLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#encoding OpsworksJavaAppLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#file_fingerprint_lines OpsworksJavaAppLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.initialPosition">InitialPosition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#initial_position OpsworksJavaAppLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#multiline_start_pattern OpsworksJavaAppLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#time_zone OpsworksJavaAppLayer#time_zone}. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.file"></a>

```go
File *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#file OpsworksJavaAppLayer#file}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#log_group_name OpsworksJavaAppLayer#log_group_name}.

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```go
BatchCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#batch_count OpsworksJavaAppLayer#batch_count}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#batch_size OpsworksJavaAppLayer#batch_size}.

---

##### `BufferDuration`<sup>Optional</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```go
BufferDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#buffer_duration OpsworksJavaAppLayer#buffer_duration}.

---

##### `DatetimeFormat`<sup>Optional</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```go
DatetimeFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#datetime_format OpsworksJavaAppLayer#datetime_format}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#encoding OpsworksJavaAppLayer#encoding}.

---

##### `FileFingerprintLines`<sup>Optional</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```go
FileFingerprintLines *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#file_fingerprint_lines OpsworksJavaAppLayer#file_fingerprint_lines}.

---

##### `InitialPosition`<sup>Optional</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```go
InitialPosition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#initial_position OpsworksJavaAppLayer#initial_position}.

---

##### `MultilineStartPattern`<sup>Optional</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```go
MultilineStartPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#multiline_start_pattern OpsworksJavaAppLayer#multiline_start_pattern}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#time_zone OpsworksJavaAppLayer#time_zone}.

---

### OpsworksJavaAppLayerConfig <a name="OpsworksJavaAppLayerConfig" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

&opsworksjavaapplayer.OpsworksJavaAppLayerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StackId: *string,
	AppServer: *string,
	AppServerVersion: *string,
	AutoAssignElasticIps: interface{},
	AutoAssignPublicIps: interface{},
	AutoHealing: interface{},
	CloudwatchConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration,
	CustomConfigureRecipes: *[]*string,
	CustomDeployRecipes: *[]*string,
	CustomInstanceProfileArn: *string,
	CustomJson: *string,
	CustomSecurityGroupIds: *[]*string,
	CustomSetupRecipes: *[]*string,
	CustomShutdownRecipes: *[]*string,
	CustomUndeployRecipes: *[]*string,
	DrainElbOnShutdown: interface{},
	EbsVolume: interface{},
	ElasticLoadBalancer: *string,
	Id: *string,
	InstallUpdatesOnBoot: interface{},
	InstanceShutdownTimeout: *f64,
	JvmOptions: *string,
	JvmType: *string,
	JvmVersion: *string,
	LoadBasedAutoScaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling,
	Name: *string,
	SystemPackages: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	UseEbsOptimizedInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.stackId">StackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#stack_id OpsworksJavaAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.appServer">AppServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#app_server OpsworksJavaAppLayer#app_server}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.appServerVersion">AppServerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#app_server_version OpsworksJavaAppLayer#app_server_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_assign_elastic_ips OpsworksJavaAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_assign_public_ips OpsworksJavaAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_healing OpsworksJavaAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_configure_recipes OpsworksJavaAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_deploy_recipes OpsworksJavaAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_instance_profile_arn OpsworksJavaAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customJson">CustomJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_json OpsworksJavaAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_security_group_ids OpsworksJavaAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_setup_recipes OpsworksJavaAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_shutdown_recipes OpsworksJavaAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_undeploy_recipes OpsworksJavaAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#drain_elb_on_shutdown OpsworksJavaAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.ebsVolume">EbsVolume</a></code> | <code>interface{}</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#elastic_load_balancer OpsworksJavaAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#id OpsworksJavaAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#install_updates_on_boot OpsworksJavaAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_shutdown_timeout OpsworksJavaAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmOptions">JvmOptions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_options OpsworksJavaAppLayer#jvm_options}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmType">JvmType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_type OpsworksJavaAppLayer#jvm_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmVersion">JvmVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_version OpsworksJavaAppLayer#jvm_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#name OpsworksJavaAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.systemPackages">SystemPackages</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#system_packages OpsworksJavaAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#tags OpsworksJavaAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#tags_all OpsworksJavaAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#use_ebs_optimized_instances OpsworksJavaAppLayer#use_ebs_optimized_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.stackId"></a>

```go
StackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#stack_id OpsworksJavaAppLayer#stack_id}.

---

##### `AppServer`<sup>Optional</sup> <a name="AppServer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.appServer"></a>

```go
AppServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#app_server OpsworksJavaAppLayer#app_server}.

---

##### `AppServerVersion`<sup>Optional</sup> <a name="AppServerVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.appServerVersion"></a>

```go
AppServerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#app_server_version OpsworksJavaAppLayer#app_server_version}.

---

##### `AutoAssignElasticIps`<sup>Optional</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoAssignElasticIps"></a>

```go
AutoAssignElasticIps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_assign_elastic_ips OpsworksJavaAppLayer#auto_assign_elastic_ips}.

---

##### `AutoAssignPublicIps`<sup>Optional</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoAssignPublicIps"></a>

```go
AutoAssignPublicIps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_assign_public_ips OpsworksJavaAppLayer#auto_assign_public_ips}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.autoHealing"></a>

```go
AutoHealing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#auto_healing OpsworksJavaAppLayer#auto_healing}.

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.cloudwatchConfiguration"></a>

```go
CloudwatchConfiguration OpsworksJavaAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cloudwatch_configuration OpsworksJavaAppLayer#cloudwatch_configuration}

---

##### `CustomConfigureRecipes`<sup>Optional</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customConfigureRecipes"></a>

```go
CustomConfigureRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_configure_recipes OpsworksJavaAppLayer#custom_configure_recipes}.

---

##### `CustomDeployRecipes`<sup>Optional</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customDeployRecipes"></a>

```go
CustomDeployRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_deploy_recipes OpsworksJavaAppLayer#custom_deploy_recipes}.

---

##### `CustomInstanceProfileArn`<sup>Optional</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customInstanceProfileArn"></a>

```go
CustomInstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_instance_profile_arn OpsworksJavaAppLayer#custom_instance_profile_arn}.

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customJson"></a>

```go
CustomJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_json OpsworksJavaAppLayer#custom_json}.

---

##### `CustomSecurityGroupIds`<sup>Optional</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customSecurityGroupIds"></a>

```go
CustomSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_security_group_ids OpsworksJavaAppLayer#custom_security_group_ids}.

---

##### `CustomSetupRecipes`<sup>Optional</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customSetupRecipes"></a>

```go
CustomSetupRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_setup_recipes OpsworksJavaAppLayer#custom_setup_recipes}.

---

##### `CustomShutdownRecipes`<sup>Optional</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customShutdownRecipes"></a>

```go
CustomShutdownRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_shutdown_recipes OpsworksJavaAppLayer#custom_shutdown_recipes}.

---

##### `CustomUndeployRecipes`<sup>Optional</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.customUndeployRecipes"></a>

```go
CustomUndeployRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#custom_undeploy_recipes OpsworksJavaAppLayer#custom_undeploy_recipes}.

---

##### `DrainElbOnShutdown`<sup>Optional</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.drainElbOnShutdown"></a>

```go
DrainElbOnShutdown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#drain_elb_on_shutdown OpsworksJavaAppLayer#drain_elb_on_shutdown}.

---

##### `EbsVolume`<sup>Optional</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.ebsVolume"></a>

```go
EbsVolume interface{}
```

- *Type:* interface{}

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ebs_volume OpsworksJavaAppLayer#ebs_volume}

---

##### `ElasticLoadBalancer`<sup>Optional</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.elasticLoadBalancer"></a>

```go
ElasticLoadBalancer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#elastic_load_balancer OpsworksJavaAppLayer#elastic_load_balancer}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#id OpsworksJavaAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallUpdatesOnBoot`<sup>Optional</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.installUpdatesOnBoot"></a>

```go
InstallUpdatesOnBoot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#install_updates_on_boot OpsworksJavaAppLayer#install_updates_on_boot}.

---

##### `InstanceShutdownTimeout`<sup>Optional</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.instanceShutdownTimeout"></a>

```go
InstanceShutdownTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_shutdown_timeout OpsworksJavaAppLayer#instance_shutdown_timeout}.

---

##### `JvmOptions`<sup>Optional</sup> <a name="JvmOptions" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmOptions"></a>

```go
JvmOptions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_options OpsworksJavaAppLayer#jvm_options}.

---

##### `JvmType`<sup>Optional</sup> <a name="JvmType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmType"></a>

```go
JvmType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_type OpsworksJavaAppLayer#jvm_type}.

---

##### `JvmVersion`<sup>Optional</sup> <a name="JvmVersion" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.jvmVersion"></a>

```go
JvmVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#jvm_version OpsworksJavaAppLayer#jvm_version}.

---

##### `LoadBasedAutoScaling`<sup>Optional</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.loadBasedAutoScaling"></a>

```go
LoadBasedAutoScaling OpsworksJavaAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_based_auto_scaling OpsworksJavaAppLayer#load_based_auto_scaling}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#name OpsworksJavaAppLayer#name}.

---

##### `SystemPackages`<sup>Optional</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.systemPackages"></a>

```go
SystemPackages *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#system_packages OpsworksJavaAppLayer#system_packages}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#tags OpsworksJavaAppLayer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#tags_all OpsworksJavaAppLayer#tags_all}.

---

##### `UseEbsOptimizedInstances`<sup>Optional</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerConfig.property.useEbsOptimizedInstances"></a>

```go
UseEbsOptimizedInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#use_ebs_optimized_instances OpsworksJavaAppLayer#use_ebs_optimized_instances}.

---

### OpsworksJavaAppLayerEbsVolume <a name="OpsworksJavaAppLayerEbsVolume" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

&opsworksjavaapplayer.OpsworksJavaAppLayerEbsVolume {
	MountPoint: *string,
	NumberOfDisks: *f64,
	Size: *f64,
	Encrypted: interface{},
	Iops: *f64,
	RaidLevel: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.mountPoint">MountPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#mount_point OpsworksJavaAppLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#number_of_disks OpsworksJavaAppLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#size OpsworksJavaAppLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#encrypted OpsworksJavaAppLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#iops OpsworksJavaAppLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.raidLevel">RaidLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#raid_level OpsworksJavaAppLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#type OpsworksJavaAppLayer#type}. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.mountPoint"></a>

```go
MountPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#mount_point OpsworksJavaAppLayer#mount_point}.

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.numberOfDisks"></a>

```go
NumberOfDisks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#number_of_disks OpsworksJavaAppLayer#number_of_disks}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#size OpsworksJavaAppLayer#size}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#encrypted OpsworksJavaAppLayer#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#iops OpsworksJavaAppLayer#iops}.

---

##### `RaidLevel`<sup>Optional</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.raidLevel"></a>

```go
RaidLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#raid_level OpsworksJavaAppLayer#raid_level}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolume.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#type OpsworksJavaAppLayer#type}.

---

### OpsworksJavaAppLayerLoadBasedAutoScaling <a name="OpsworksJavaAppLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

&opsworksjavaapplayer.OpsworksJavaAppLayerLoadBasedAutoScaling {
	Downscaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling,
	Enable: interface{},
	Upscaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#enable OpsworksJavaAppLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `Downscaling`<sup>Optional</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.downscaling"></a>

```go
Downscaling OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#downscaling OpsworksJavaAppLayer#downscaling}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#enable OpsworksJavaAppLayer#enable}.

---

##### `Upscaling`<sup>Optional</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling.property.upscaling"></a>

```go
Upscaling OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#upscaling OpsworksJavaAppLayer#upscaling}

---

### OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling <a name="OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

&opsworksjavaapplayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling {
	Alarms: *[]*string,
	CpuThreshold: *f64,
	IgnoreMetricsTime: *f64,
	InstanceCount: *f64,
	LoadThreshold: *f64,
	MemoryThreshold: *f64,
	ThresholdsWaitTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.alarms">Alarms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#alarms OpsworksJavaAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cpu_threshold OpsworksJavaAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ignore_metrics_time OpsworksJavaAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_count OpsworksJavaAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_threshold OpsworksJavaAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#memory_threshold OpsworksJavaAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#thresholds_wait_time OpsworksJavaAppLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```go
Alarms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#alarms OpsworksJavaAppLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cpu_threshold OpsworksJavaAppLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```go
IgnoreMetricsTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ignore_metrics_time OpsworksJavaAppLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_count OpsworksJavaAppLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```go
LoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_threshold OpsworksJavaAppLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```go
MemoryThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#memory_threshold OpsworksJavaAppLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```go
ThresholdsWaitTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#thresholds_wait_time OpsworksJavaAppLayer#thresholds_wait_time}.

---

### OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling <a name="OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

&opsworksjavaapplayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling {
	Alarms: *[]*string,
	CpuThreshold: *f64,
	IgnoreMetricsTime: *f64,
	InstanceCount: *f64,
	LoadThreshold: *f64,
	MemoryThreshold: *f64,
	ThresholdsWaitTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.alarms">Alarms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#alarms OpsworksJavaAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cpu_threshold OpsworksJavaAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ignore_metrics_time OpsworksJavaAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_count OpsworksJavaAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_threshold OpsworksJavaAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#memory_threshold OpsworksJavaAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#thresholds_wait_time OpsworksJavaAppLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```go
Alarms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#alarms OpsworksJavaAppLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#cpu_threshold OpsworksJavaAppLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```go
IgnoreMetricsTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#ignore_metrics_time OpsworksJavaAppLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#instance_count OpsworksJavaAppLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```go
LoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#load_threshold OpsworksJavaAppLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```go
MemoryThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#memory_threshold OpsworksJavaAppLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```go
ThresholdsWaitTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer#thresholds_wait_time OpsworksJavaAppLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.get"></a>

```go
func Get(index *f64) OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```go
func ResetBatchCount()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetBufferDuration` <a name="ResetBufferDuration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```go
func ResetBufferDuration()
```

##### `ResetDatetimeFormat` <a name="ResetDatetimeFormat" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```go
func ResetDatetimeFormat()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFileFingerprintLines` <a name="ResetFileFingerprintLines" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```go
func ResetFileFingerprintLines()
```

##### `ResetInitialPosition` <a name="ResetInitialPosition" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```go
func ResetInitialPosition()
```

##### `ResetMultilineStartPattern` <a name="ResetMultilineStartPattern" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```go
func ResetMultilineStartPattern()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">BufferDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">DatetimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">FileFingerprintLinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">InitialPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">MultilineStartPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">BatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">BufferDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">DatetimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">InitialPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```go
func BatchCountInput() *f64
```

- *Type:* *f64

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `BufferDurationInput`<sup>Optional</sup> <a name="BufferDurationInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```go
func BufferDurationInput() *f64
```

- *Type:* *f64

---

##### `DatetimeFormatInput`<sup>Optional</sup> <a name="DatetimeFormatInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```go
func DatetimeFormatInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FileFingerprintLinesInput`<sup>Optional</sup> <a name="FileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```go
func FileFingerprintLinesInput() *string
```

- *Type:* *string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `InitialPositionInput`<sup>Optional</sup> <a name="InitialPositionInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```go
func InitialPositionInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `MultilineStartPatternInput`<sup>Optional</sup> <a name="MultilineStartPatternInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```go
func MultilineStartPatternInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```go
func BatchCount() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `BufferDuration`<sup>Required</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```go
func BufferDuration() *f64
```

- *Type:* *f64

---

##### `DatetimeFormat`<sup>Required</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```go
func DatetimeFormat() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `FileFingerprintLines`<sup>Required</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```go
func FileFingerprintLines() *string
```

- *Type:* *string

---

##### `InitialPosition`<sup>Required</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```go
func InitialPosition() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `MultilineStartPattern`<sup>Required</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```go
func MultilineStartPattern() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksJavaAppLayerCloudwatchConfigurationOutputReference <a name="OpsworksJavaAppLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayerCloudwatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksJavaAppLayerCloudwatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```go
func PutLogStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogStreams` <a name="ResetLogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```go
func ResetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList">OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">LogStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```go
func LogStreams() OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList">OpsworksJavaAppLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```go
func LogStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksJavaAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerCloudwatchConfiguration">OpsworksJavaAppLayerCloudwatchConfiguration</a>

---


### OpsworksJavaAppLayerEbsVolumeList <a name="OpsworksJavaAppLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayerEbsVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksJavaAppLayerEbsVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.get"></a>

```go
func Get(index *f64) OpsworksJavaAppLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksJavaAppLayerEbsVolumeOutputReference <a name="OpsworksJavaAppLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayerEbsVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksJavaAppLayerEbsVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetRaidLevel` <a name="ResetRaidLevel" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```go
func ResetRaidLevel()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.raidLevelInput">RaidLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.raidLevel">RaidLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```go
func MountPointInput() *string
```

- *Type:* *string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```go
func NumberOfDisksInput() *f64
```

- *Type:* *f64

---

##### `RaidLevelInput`<sup>Optional</sup> <a name="RaidLevelInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```go
func RaidLevelInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```go
func NumberOfDisks() *f64
```

- *Type:* *f64

---

##### `RaidLevel`<sup>Required</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.raidLevel"></a>

```go
func RaidLevel() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerEbsVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```go
func ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```go
func ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```go
func ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```go
func ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">Alarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```go
func IgnoreMetricsTimeInput() *f64
```

- *Type:* *f64

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```go
func LoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```go
func MemoryThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```go
func ThresholdsWaitTimeInput() *f64
```

- *Type:* *f64

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```go
func Alarms() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```go
func IgnoreMetricsTime() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```go
func LoadThreshold() *f64
```

- *Type:* *f64

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```go
func MemoryThreshold() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```go
func ThresholdsWaitTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference <a name="OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayerLoadBasedAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownscaling` <a name="PutDownscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```go
func PutDownscaling(value OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `PutUpscaling` <a name="PutUpscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```go
func PutUpscaling(value OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `ResetDownscaling` <a name="ResetDownscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```go
func ResetDownscaling()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetUpscaling` <a name="ResetUpscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```go
func ResetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">DownscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">UpscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Downscaling`<sup>Required</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```go
func Downscaling() OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `Upscaling`<sup>Required</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```go
func Upscaling() OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `DownscalingInput`<sup>Optional</sup> <a name="DownscalingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```go
func DownscalingInput() OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling">OpsworksJavaAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `UpscalingInput`<sup>Optional</sup> <a name="UpscalingInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```go
func UpscalingInput() OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksJavaAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScaling">OpsworksJavaAppLayerLoadBasedAutoScaling</a>

---


### OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksjavaapplayer"

opsworksjavaapplayer.NewOpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```go
func ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```go
func ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```go
func ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```go
func ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">Alarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```go
func IgnoreMetricsTimeInput() *f64
```

- *Type:* *f64

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```go
func LoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```go
func MemoryThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```go
func ThresholdsWaitTimeInput() *f64
```

- *Type:* *f64

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```go
func Alarms() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```go
func IgnoreMetricsTime() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```go
func LoadThreshold() *f64
```

- *Type:* *f64

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```go
func MemoryThreshold() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```go
func ThresholdsWaitTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksJavaAppLayer.OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling">OpsworksJavaAppLayerLoadBasedAutoScalingUpscaling</a>

---



