# `opsworksRailsAppLayer` Submodule <a name="`opsworksRailsAppLayer` Submodule" id="@cdktf/provider-aws.opsworksRailsAppLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksRailsAppLayer <a name="OpsworksRailsAppLayer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer aws_opsworks_rails_app_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayer(scope Construct, id *string, config OpsworksRailsAppLayerConfig) OpsworksRailsAppLayer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig">OpsworksRailsAppLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig">OpsworksRailsAppLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration">PutCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume">PutEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling">PutLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAppServer">ResetAppServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignElasticIps">ResetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignPublicIps">ResetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetBundlerVersion">ResetBundlerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCloudwatchConfiguration">ResetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomConfigureRecipes">ResetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomDeployRecipes">ResetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomInstanceProfileArn">ResetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomJson">ResetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSecurityGroupIds">ResetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSetupRecipes">ResetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomShutdownRecipes">ResetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomUndeployRecipes">ResetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetDrainElbOnShutdown">ResetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetEbsVolume">ResetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetElasticLoadBalancer">ResetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstallUpdatesOnBoot">ResetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstanceShutdownTimeout">ResetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetLoadBasedAutoScaling">ResetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetManageBundler">ResetManageBundler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetPassengerVersion">ResetPassengerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubygemsVersion">ResetRubygemsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubyVersion">ResetRubyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetSystemPackages">ResetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetUseEbsOptimizedInstances">ResetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration"></a>

```go
func PutCloudwatchConfiguration(value OpsworksRailsAppLayerCloudwatchConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---

##### `PutEbsVolume` <a name="PutEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume"></a>

```go
func PutEbsVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoadBasedAutoScaling` <a name="PutLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling"></a>

```go
func PutLoadBasedAutoScaling(value OpsworksRailsAppLayerLoadBasedAutoScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---

##### `ResetAppServer` <a name="ResetAppServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAppServer"></a>

```go
func ResetAppServer()
```

##### `ResetAutoAssignElasticIps` <a name="ResetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignElasticIps"></a>

```go
func ResetAutoAssignElasticIps()
```

##### `ResetAutoAssignPublicIps` <a name="ResetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignPublicIps"></a>

```go
func ResetAutoAssignPublicIps()
```

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoHealing"></a>

```go
func ResetAutoHealing()
```

##### `ResetBundlerVersion` <a name="ResetBundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetBundlerVersion"></a>

```go
func ResetBundlerVersion()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCloudwatchConfiguration"></a>

```go
func ResetCloudwatchConfiguration()
```

##### `ResetCustomConfigureRecipes` <a name="ResetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomConfigureRecipes"></a>

```go
func ResetCustomConfigureRecipes()
```

##### `ResetCustomDeployRecipes` <a name="ResetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomDeployRecipes"></a>

```go
func ResetCustomDeployRecipes()
```

##### `ResetCustomInstanceProfileArn` <a name="ResetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomInstanceProfileArn"></a>

```go
func ResetCustomInstanceProfileArn()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomJson"></a>

```go
func ResetCustomJson()
```

##### `ResetCustomSecurityGroupIds` <a name="ResetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSecurityGroupIds"></a>

```go
func ResetCustomSecurityGroupIds()
```

##### `ResetCustomSetupRecipes` <a name="ResetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSetupRecipes"></a>

```go
func ResetCustomSetupRecipes()
```

##### `ResetCustomShutdownRecipes` <a name="ResetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomShutdownRecipes"></a>

```go
func ResetCustomShutdownRecipes()
```

##### `ResetCustomUndeployRecipes` <a name="ResetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomUndeployRecipes"></a>

```go
func ResetCustomUndeployRecipes()
```

##### `ResetDrainElbOnShutdown` <a name="ResetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetDrainElbOnShutdown"></a>

```go
func ResetDrainElbOnShutdown()
```

##### `ResetEbsVolume` <a name="ResetEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetEbsVolume"></a>

```go
func ResetEbsVolume()
```

##### `ResetElasticLoadBalancer` <a name="ResetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetElasticLoadBalancer"></a>

```go
func ResetElasticLoadBalancer()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetId"></a>

```go
func ResetId()
```

##### `ResetInstallUpdatesOnBoot` <a name="ResetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstallUpdatesOnBoot"></a>

```go
func ResetInstallUpdatesOnBoot()
```

##### `ResetInstanceShutdownTimeout` <a name="ResetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstanceShutdownTimeout"></a>

```go
func ResetInstanceShutdownTimeout()
```

##### `ResetLoadBasedAutoScaling` <a name="ResetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetLoadBasedAutoScaling"></a>

```go
func ResetLoadBasedAutoScaling()
```

##### `ResetManageBundler` <a name="ResetManageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetManageBundler"></a>

```go
func ResetManageBundler()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetName"></a>

```go
func ResetName()
```

##### `ResetPassengerVersion` <a name="ResetPassengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetPassengerVersion"></a>

```go
func ResetPassengerVersion()
```

##### `ResetRubygemsVersion` <a name="ResetRubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubygemsVersion"></a>

```go
func ResetRubygemsVersion()
```

##### `ResetRubyVersion` <a name="ResetRubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubyVersion"></a>

```go
func ResetRubyVersion()
```

##### `ResetSystemPackages` <a name="ResetSystemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetSystemPackages"></a>

```go
func ResetSystemPackages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUseEbsOptimizedInstances` <a name="ResetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetUseEbsOptimizedInstances"></a>

```go
func ResetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.OpsworksRailsAppLayer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.OpsworksRailsAppLayer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.OpsworksRailsAppLayer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference">OpsworksRailsAppLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolume">EbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList">OpsworksRailsAppLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServerInput">AppServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIpsInput">AutoAssignElasticIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIpsInput">AutoAssignPublicIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealingInput">AutoHealingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersionInput">BundlerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipesInput">CustomConfigureRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipesInput">CustomDeployRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArnInput">CustomInstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJsonInput">CustomJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIdsInput">CustomSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipesInput">CustomSetupRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipesInput">CustomShutdownRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipesInput">CustomUndeployRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdownInput">DrainElbOnShutdownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolumeInput">EbsVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancerInput">ElasticLoadBalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBootInput">InstallUpdatesOnBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeoutInput">InstanceShutdownTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScalingInput">LoadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundlerInput">ManageBundlerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersionInput">PassengerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersionInput">RubygemsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersionInput">RubyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackIdInput">StackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackagesInput">SystemPackagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstancesInput">UseEbsOptimizedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServer">AppServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersion">BundlerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJson">CustomJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundler">ManageBundler</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersion">PassengerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersion">RubygemsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersion">RubyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackages">SystemPackages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfiguration"></a>

```go
func CloudwatchConfiguration() OpsworksRailsAppLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference">OpsworksRailsAppLayerCloudwatchConfigurationOutputReference</a>

---

##### `EbsVolume`<sup>Required</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolume"></a>

```go
func EbsVolume() OpsworksRailsAppLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList">OpsworksRailsAppLayerEbsVolumeList</a>

---

##### `LoadBasedAutoScaling`<sup>Required</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScaling"></a>

```go
func LoadBasedAutoScaling() OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference</a>

---

##### `AppServerInput`<sup>Optional</sup> <a name="AppServerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServerInput"></a>

```go
func AppServerInput() *string
```

- *Type:* *string

---

##### `AutoAssignElasticIpsInput`<sup>Optional</sup> <a name="AutoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIpsInput"></a>

```go
func AutoAssignElasticIpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignPublicIpsInput`<sup>Optional</sup> <a name="AutoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIpsInput"></a>

```go
func AutoAssignPublicIpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealingInput"></a>

```go
func AutoHealingInput() interface{}
```

- *Type:* interface{}

---

##### `BundlerVersionInput`<sup>Optional</sup> <a name="BundlerVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersionInput"></a>

```go
func BundlerVersionInput() *string
```

- *Type:* *string

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfigurationInput"></a>

```go
func CloudwatchConfigurationInput() OpsworksRailsAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---

##### `CustomConfigureRecipesInput`<sup>Optional</sup> <a name="CustomConfigureRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipesInput"></a>

```go
func CustomConfigureRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDeployRecipesInput`<sup>Optional</sup> <a name="CustomDeployRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipesInput"></a>

```go
func CustomDeployRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInstanceProfileArnInput`<sup>Optional</sup> <a name="CustomInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArnInput"></a>

```go
func CustomInstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJsonInput"></a>

```go
func CustomJsonInput() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIdsInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIdsInput"></a>

```go
func CustomSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSetupRecipesInput`<sup>Optional</sup> <a name="CustomSetupRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipesInput"></a>

```go
func CustomSetupRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomShutdownRecipesInput`<sup>Optional</sup> <a name="CustomShutdownRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipesInput"></a>

```go
func CustomShutdownRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomUndeployRecipesInput`<sup>Optional</sup> <a name="CustomUndeployRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipesInput"></a>

```go
func CustomUndeployRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DrainElbOnShutdownInput`<sup>Optional</sup> <a name="DrainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdownInput"></a>

```go
func DrainElbOnShutdownInput() interface{}
```

- *Type:* interface{}

---

##### `EbsVolumeInput`<sup>Optional</sup> <a name="EbsVolumeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolumeInput"></a>

```go
func EbsVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticLoadBalancerInput`<sup>Optional</sup> <a name="ElasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancerInput"></a>

```go
func ElasticLoadBalancerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstallUpdatesOnBootInput`<sup>Optional</sup> <a name="InstallUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBootInput"></a>

```go
func InstallUpdatesOnBootInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceShutdownTimeoutInput`<sup>Optional</sup> <a name="InstanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeoutInput"></a>

```go
func InstanceShutdownTimeoutInput() *f64
```

- *Type:* *f64

---

##### `LoadBasedAutoScalingInput`<sup>Optional</sup> <a name="LoadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScalingInput"></a>

```go
func LoadBasedAutoScalingInput() OpsworksRailsAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---

##### `ManageBundlerInput`<sup>Optional</sup> <a name="ManageBundlerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundlerInput"></a>

```go
func ManageBundlerInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PassengerVersionInput`<sup>Optional</sup> <a name="PassengerVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersionInput"></a>

```go
func PassengerVersionInput() *string
```

- *Type:* *string

---

##### `RubygemsVersionInput`<sup>Optional</sup> <a name="RubygemsVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersionInput"></a>

```go
func RubygemsVersionInput() *string
```

- *Type:* *string

---

##### `RubyVersionInput`<sup>Optional</sup> <a name="RubyVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersionInput"></a>

```go
func RubyVersionInput() *string
```

- *Type:* *string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackIdInput"></a>

```go
func StackIdInput() *string
```

- *Type:* *string

---

##### `SystemPackagesInput`<sup>Optional</sup> <a name="SystemPackagesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackagesInput"></a>

```go
func SystemPackagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="UseEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstancesInput"></a>

```go
func UseEbsOptimizedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `AppServer`<sup>Required</sup> <a name="AppServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServer"></a>

```go
func AppServer() *string
```

- *Type:* *string

---

##### `AutoAssignElasticIps`<sup>Required</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIps"></a>

```go
func AutoAssignElasticIps() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignPublicIps`<sup>Required</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIps"></a>

```go
func AutoAssignPublicIps() interface{}
```

- *Type:* interface{}

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealing"></a>

```go
func AutoHealing() interface{}
```

- *Type:* interface{}

---

##### `BundlerVersion`<sup>Required</sup> <a name="BundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersion"></a>

```go
func BundlerVersion() *string
```

- *Type:* *string

---

##### `CustomConfigureRecipes`<sup>Required</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipes"></a>

```go
func CustomConfigureRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDeployRecipes`<sup>Required</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipes"></a>

```go
func CustomDeployRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInstanceProfileArn`<sup>Required</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArn"></a>

```go
func CustomInstanceProfileArn() *string
```

- *Type:* *string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJson"></a>

```go
func CustomJson() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIds`<sup>Required</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIds"></a>

```go
func CustomSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSetupRecipes`<sup>Required</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipes"></a>

```go
func CustomSetupRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomShutdownRecipes`<sup>Required</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipes"></a>

```go
func CustomShutdownRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomUndeployRecipes`<sup>Required</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipes"></a>

```go
func CustomUndeployRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `DrainElbOnShutdown`<sup>Required</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdown"></a>

```go
func DrainElbOnShutdown() interface{}
```

- *Type:* interface{}

---

##### `ElasticLoadBalancer`<sup>Required</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancer"></a>

```go
func ElasticLoadBalancer() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallUpdatesOnBoot`<sup>Required</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBoot"></a>

```go
func InstallUpdatesOnBoot() interface{}
```

- *Type:* interface{}

---

##### `InstanceShutdownTimeout`<sup>Required</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeout"></a>

```go
func InstanceShutdownTimeout() *f64
```

- *Type:* *f64

---

##### `ManageBundler`<sup>Required</sup> <a name="ManageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundler"></a>

```go
func ManageBundler() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PassengerVersion`<sup>Required</sup> <a name="PassengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersion"></a>

```go
func PassengerVersion() *string
```

- *Type:* *string

---

##### `RubygemsVersion`<sup>Required</sup> <a name="RubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersion"></a>

```go
func RubygemsVersion() *string
```

- *Type:* *string

---

##### `RubyVersion`<sup>Required</sup> <a name="RubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersion"></a>

```go
func RubyVersion() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `SystemPackages`<sup>Required</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackages"></a>

```go
func SystemPackages() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseEbsOptimizedInstances`<sup>Required</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstances"></a>

```go
func UseEbsOptimizedInstances() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksRailsAppLayerCloudwatchConfiguration <a name="OpsworksRailsAppLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

&opsworksrailsapplayer.OpsworksRailsAppLayerCloudwatchConfiguration {
	Enabled: interface{},
	LogStreams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.logStreams">LogStreams</a></code> | <code>interface{}</code> | log_streams block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}.

---

##### `LogStreams`<sup>Optional</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.logStreams"></a>

```go
LogStreams interface{}
```

- *Type:* interface{}

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_streams OpsworksRailsAppLayer#log_streams}

---

### OpsworksRailsAppLayerCloudwatchConfigurationLogStreams <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

&opsworksrailsapplayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams {
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.file">File</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchCount">BatchCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration">BufferDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">DatetimeFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition">InitialPosition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.file"></a>

```go
File *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}.

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```go
BatchCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}.

---

##### `BufferDuration`<sup>Optional</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```go
BufferDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}.

---

##### `DatetimeFormat`<sup>Optional</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```go
DatetimeFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}.

---

##### `FileFingerprintLines`<sup>Optional</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```go
FileFingerprintLines *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}.

---

##### `InitialPosition`<sup>Optional</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```go
InitialPosition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}.

---

##### `MultilineStartPattern`<sup>Optional</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```go
MultilineStartPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}.

---

### OpsworksRailsAppLayerConfig <a name="OpsworksRailsAppLayerConfig" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

&opsworksrailsapplayer.OpsworksRailsAppLayerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StackId: *string,
	AppServer: *string,
	AutoAssignElasticIps: interface{},
	AutoAssignPublicIps: interface{},
	AutoHealing: interface{},
	BundlerVersion: *string,
	CloudwatchConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration,
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
	LoadBasedAutoScaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling,
	ManageBundler: interface{},
	Name: *string,
	PassengerVersion: *string,
	RubygemsVersion: *string,
	RubyVersion: *string,
	SystemPackages: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	UseEbsOptimizedInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.stackId">StackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.appServer">AppServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.bundlerVersion">BundlerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customJson">CustomJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.ebsVolume">EbsVolume</a></code> | <code>interface{}</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.manageBundler">ManageBundler</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.passengerVersion">PassengerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubygemsVersion">RubygemsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubyVersion">RubyVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.systemPackages">SystemPackages</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.stackId"></a>

```go
StackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}.

---

##### `AppServer`<sup>Optional</sup> <a name="AppServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.appServer"></a>

```go
AppServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}.

---

##### `AutoAssignElasticIps`<sup>Optional</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignElasticIps"></a>

```go
AutoAssignElasticIps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}.

---

##### `AutoAssignPublicIps`<sup>Optional</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignPublicIps"></a>

```go
AutoAssignPublicIps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoHealing"></a>

```go
AutoHealing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}.

---

##### `BundlerVersion`<sup>Optional</sup> <a name="BundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.bundlerVersion"></a>

```go
BundlerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}.

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.cloudwatchConfiguration"></a>

```go
CloudwatchConfiguration OpsworksRailsAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cloudwatch_configuration OpsworksRailsAppLayer#cloudwatch_configuration}

---

##### `CustomConfigureRecipes`<sup>Optional</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customConfigureRecipes"></a>

```go
CustomConfigureRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}.

---

##### `CustomDeployRecipes`<sup>Optional</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customDeployRecipes"></a>

```go
CustomDeployRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}.

---

##### `CustomInstanceProfileArn`<sup>Optional</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customInstanceProfileArn"></a>

```go
CustomInstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}.

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customJson"></a>

```go
CustomJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}.

---

##### `CustomSecurityGroupIds`<sup>Optional</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSecurityGroupIds"></a>

```go
CustomSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}.

---

##### `CustomSetupRecipes`<sup>Optional</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSetupRecipes"></a>

```go
CustomSetupRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}.

---

##### `CustomShutdownRecipes`<sup>Optional</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customShutdownRecipes"></a>

```go
CustomShutdownRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}.

---

##### `CustomUndeployRecipes`<sup>Optional</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customUndeployRecipes"></a>

```go
CustomUndeployRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}.

---

##### `DrainElbOnShutdown`<sup>Optional</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.drainElbOnShutdown"></a>

```go
DrainElbOnShutdown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}.

---

##### `EbsVolume`<sup>Optional</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.ebsVolume"></a>

```go
EbsVolume interface{}
```

- *Type:* interface{}

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ebs_volume OpsworksRailsAppLayer#ebs_volume}

---

##### `ElasticLoadBalancer`<sup>Optional</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.elasticLoadBalancer"></a>

```go
ElasticLoadBalancer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallUpdatesOnBoot`<sup>Optional</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.installUpdatesOnBoot"></a>

```go
InstallUpdatesOnBoot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}.

---

##### `InstanceShutdownTimeout`<sup>Optional</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.instanceShutdownTimeout"></a>

```go
InstanceShutdownTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}.

---

##### `LoadBasedAutoScaling`<sup>Optional</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.loadBasedAutoScaling"></a>

```go
LoadBasedAutoScaling OpsworksRailsAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_based_auto_scaling OpsworksRailsAppLayer#load_based_auto_scaling}

---

##### `ManageBundler`<sup>Optional</sup> <a name="ManageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.manageBundler"></a>

```go
ManageBundler interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}.

---

##### `PassengerVersion`<sup>Optional</sup> <a name="PassengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.passengerVersion"></a>

```go
PassengerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}.

---

##### `RubygemsVersion`<sup>Optional</sup> <a name="RubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubygemsVersion"></a>

```go
RubygemsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}.

---

##### `RubyVersion`<sup>Optional</sup> <a name="RubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubyVersion"></a>

```go
RubyVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}.

---

##### `SystemPackages`<sup>Optional</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.systemPackages"></a>

```go
SystemPackages *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}.

---

##### `UseEbsOptimizedInstances`<sup>Optional</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.useEbsOptimizedInstances"></a>

```go
UseEbsOptimizedInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}.

---

### OpsworksRailsAppLayerEbsVolume <a name="OpsworksRailsAppLayerEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

&opsworksrailsapplayer.OpsworksRailsAppLayerEbsVolume {
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.mountPoint">MountPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.raidLevel">RaidLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.mountPoint"></a>

```go
MountPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}.

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.numberOfDisks"></a>

```go
NumberOfDisks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}.

---

##### `RaidLevel`<sup>Optional</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.raidLevel"></a>

```go
RaidLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}.

---

### OpsworksRailsAppLayerLoadBasedAutoScaling <a name="OpsworksRailsAppLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

&opsworksrailsapplayer.OpsworksRailsAppLayerLoadBasedAutoScaling {
	Downscaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling,
	Enable: interface{},
	Upscaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enable OpsworksRailsAppLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `Downscaling`<sup>Optional</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.downscaling"></a>

```go
Downscaling OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#downscaling OpsworksRailsAppLayer#downscaling}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enable OpsworksRailsAppLayer#enable}.

---

##### `Upscaling`<sup>Optional</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.upscaling"></a>

```go
Upscaling OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#upscaling OpsworksRailsAppLayer#upscaling}

---

### OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling <a name="OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

&opsworksrailsapplayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.alarms">Alarms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```go
Alarms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```go
IgnoreMetricsTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```go
LoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```go
MemoryThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```go
ThresholdsWaitTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}.

---

### OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling <a name="OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

&opsworksrailsapplayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.alarms">Alarms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```go
Alarms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```go
IgnoreMetricsTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```go
LoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```go
MemoryThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```go
ThresholdsWaitTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get"></a>

```go
func Get(index *f64) OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">ResetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">ResetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">ResetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">ResetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">ResetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">ResetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```go
func ResetBatchCount()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetBufferDuration` <a name="ResetBufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```go
func ResetBufferDuration()
```

##### `ResetDatetimeFormat` <a name="ResetDatetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```go
func ResetDatetimeFormat()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFileFingerprintLines` <a name="ResetFileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```go
func ResetFileFingerprintLines()
```

##### `ResetInitialPosition` <a name="ResetInitialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```go
func ResetInitialPosition()
```

##### `ResetMultilineStartPattern` <a name="ResetMultilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```go
func ResetMultilineStartPattern()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">BufferDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">DatetimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">FileFingerprintLinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">InitialPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">MultilineStartPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">BatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">BufferDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">DatetimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">InitialPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```go
func BatchCountInput() *f64
```

- *Type:* *f64

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `BufferDurationInput`<sup>Optional</sup> <a name="BufferDurationInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```go
func BufferDurationInput() *f64
```

- *Type:* *f64

---

##### `DatetimeFormatInput`<sup>Optional</sup> <a name="DatetimeFormatInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```go
func DatetimeFormatInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FileFingerprintLinesInput`<sup>Optional</sup> <a name="FileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```go
func FileFingerprintLinesInput() *string
```

- *Type:* *string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `InitialPositionInput`<sup>Optional</sup> <a name="InitialPositionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```go
func InitialPositionInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `MultilineStartPatternInput`<sup>Optional</sup> <a name="MultilineStartPatternInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```go
func MultilineStartPatternInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```go
func BatchCount() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `BufferDuration`<sup>Required</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```go
func BufferDuration() *f64
```

- *Type:* *f64

---

##### `DatetimeFormat`<sup>Required</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```go
func DatetimeFormat() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `FileFingerprintLines`<sup>Required</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```go
func FileFingerprintLines() *string
```

- *Type:* *string

---

##### `InitialPosition`<sup>Required</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```go
func InitialPosition() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `MultilineStartPattern`<sup>Required</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```go
func MultilineStartPattern() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksRailsAppLayerCloudwatchConfigurationOutputReference <a name="OpsworksRailsAppLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayerCloudwatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksRailsAppLayerCloudwatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams">PutLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams">ResetLogStreams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```go
func PutLogStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogStreams` <a name="ResetLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```go
func ResetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">LogStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```go
func LogStreams() OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```go
func LogStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksRailsAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---


### OpsworksRailsAppLayerEbsVolumeList <a name="OpsworksRailsAppLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayerEbsVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksRailsAppLayerEbsVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get"></a>

```go
func Get(index *f64) OpsworksRailsAppLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksRailsAppLayerEbsVolumeOutputReference <a name="OpsworksRailsAppLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayerEbsVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksRailsAppLayerEbsVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetRaidLevel">ResetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetRaidLevel` <a name="ResetRaidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```go
func ResetRaidLevel()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevelInput">RaidLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevel">RaidLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```go
func MountPointInput() *string
```

- *Type:* *string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```go
func NumberOfDisksInput() *f64
```

- *Type:* *f64

---

##### `RaidLevelInput`<sup>Optional</sup> <a name="RaidLevelInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```go
func RaidLevelInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```go
func NumberOfDisks() *f64
```

- *Type:* *f64

---

##### `RaidLevel`<sup>Required</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevel"></a>

```go
func RaidLevel() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```go
func ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```go
func ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```go
func ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```go
func ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">Alarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```go
func IgnoreMetricsTimeInput() *f64
```

- *Type:* *f64

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```go
func LoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```go
func MemoryThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```go
func ThresholdsWaitTimeInput() *f64
```

- *Type:* *f64

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```go
func Alarms() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```go
func IgnoreMetricsTime() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```go
func LoadThreshold() *f64
```

- *Type:* *f64

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```go
func MemoryThreshold() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```go
func ThresholdsWaitTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayerLoadBasedAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling">PutDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling">PutUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling">ResetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling">ResetUpscaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownscaling` <a name="PutDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```go
func PutDownscaling(value OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `PutUpscaling` <a name="PutUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```go
func PutUpscaling(value OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `ResetDownscaling` <a name="ResetDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```go
func ResetDownscaling()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetUpscaling` <a name="ResetUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```go
func ResetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">DownscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">UpscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Downscaling`<sup>Required</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```go
func Downscaling() OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `Upscaling`<sup>Required</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```go
func Upscaling() OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `DownscalingInput`<sup>Optional</sup> <a name="DownscalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```go
func DownscalingInput() OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `UpscalingInput`<sup>Optional</sup> <a name="UpscalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```go
func UpscalingInput() OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksRailsAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---


### OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksrailsapplayer"

opsworksrailsapplayer.NewOpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```go
func ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```go
func ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```go
func ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```go
func ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">Alarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```go
func IgnoreMetricsTimeInput() *f64
```

- *Type:* *f64

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```go
func LoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```go
func MemoryThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```go
func ThresholdsWaitTimeInput() *f64
```

- *Type:* *f64

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```go
func Alarms() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```go
func IgnoreMetricsTime() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```go
func LoadThreshold() *f64
```

- *Type:* *f64

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```go
func MemoryThreshold() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```go
func ThresholdsWaitTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---



