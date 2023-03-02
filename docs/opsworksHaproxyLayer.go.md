# `opsworksHaproxyLayer` Submodule <a name="`opsworksHaproxyLayer` Submodule" id="@cdktf/provider-aws.opsworksHaproxyLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksHaproxyLayer <a name="OpsworksHaproxyLayer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer aws_opsworks_haproxy_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayer(scope Construct, id *string, config OpsworksHaproxyLayerConfig) OpsworksHaproxyLayer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig">OpsworksHaproxyLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig">OpsworksHaproxyLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration">PutCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume">PutEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling">PutLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignElasticIps">ResetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignPublicIps">ResetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCloudwatchConfiguration">ResetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomConfigureRecipes">ResetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomDeployRecipes">ResetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomInstanceProfileArn">ResetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomJson">ResetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSecurityGroupIds">ResetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSetupRecipes">ResetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomShutdownRecipes">ResetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomUndeployRecipes">ResetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetDrainElbOnShutdown">ResetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetEbsVolume">ResetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetElasticLoadBalancer">ResetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckMethod">ResetHealthcheckMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckUrl">ResetHealthcheckUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstallUpdatesOnBoot">ResetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstanceShutdownTimeout">ResetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetLoadBasedAutoScaling">ResetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsEnabled">ResetStatsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUrl">ResetStatsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUser">ResetStatsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetSystemPackages">ResetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetUseEbsOptimizedInstances">ResetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration"></a>

```go
func PutCloudwatchConfiguration(value OpsworksHaproxyLayerCloudwatchConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---

##### `PutEbsVolume` <a name="PutEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume"></a>

```go
func PutEbsVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoadBasedAutoScaling` <a name="PutLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling"></a>

```go
func PutLoadBasedAutoScaling(value OpsworksHaproxyLayerLoadBasedAutoScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---

##### `ResetAutoAssignElasticIps` <a name="ResetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignElasticIps"></a>

```go
func ResetAutoAssignElasticIps()
```

##### `ResetAutoAssignPublicIps` <a name="ResetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignPublicIps"></a>

```go
func ResetAutoAssignPublicIps()
```

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoHealing"></a>

```go
func ResetAutoHealing()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCloudwatchConfiguration"></a>

```go
func ResetCloudwatchConfiguration()
```

##### `ResetCustomConfigureRecipes` <a name="ResetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomConfigureRecipes"></a>

```go
func ResetCustomConfigureRecipes()
```

##### `ResetCustomDeployRecipes` <a name="ResetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomDeployRecipes"></a>

```go
func ResetCustomDeployRecipes()
```

##### `ResetCustomInstanceProfileArn` <a name="ResetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomInstanceProfileArn"></a>

```go
func ResetCustomInstanceProfileArn()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomJson"></a>

```go
func ResetCustomJson()
```

##### `ResetCustomSecurityGroupIds` <a name="ResetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSecurityGroupIds"></a>

```go
func ResetCustomSecurityGroupIds()
```

##### `ResetCustomSetupRecipes` <a name="ResetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSetupRecipes"></a>

```go
func ResetCustomSetupRecipes()
```

##### `ResetCustomShutdownRecipes` <a name="ResetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomShutdownRecipes"></a>

```go
func ResetCustomShutdownRecipes()
```

##### `ResetCustomUndeployRecipes` <a name="ResetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomUndeployRecipes"></a>

```go
func ResetCustomUndeployRecipes()
```

##### `ResetDrainElbOnShutdown` <a name="ResetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetDrainElbOnShutdown"></a>

```go
func ResetDrainElbOnShutdown()
```

##### `ResetEbsVolume` <a name="ResetEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetEbsVolume"></a>

```go
func ResetEbsVolume()
```

##### `ResetElasticLoadBalancer` <a name="ResetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetElasticLoadBalancer"></a>

```go
func ResetElasticLoadBalancer()
```

##### `ResetHealthcheckMethod` <a name="ResetHealthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckMethod"></a>

```go
func ResetHealthcheckMethod()
```

##### `ResetHealthcheckUrl` <a name="ResetHealthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckUrl"></a>

```go
func ResetHealthcheckUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetId"></a>

```go
func ResetId()
```

##### `ResetInstallUpdatesOnBoot` <a name="ResetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstallUpdatesOnBoot"></a>

```go
func ResetInstallUpdatesOnBoot()
```

##### `ResetInstanceShutdownTimeout` <a name="ResetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstanceShutdownTimeout"></a>

```go
func ResetInstanceShutdownTimeout()
```

##### `ResetLoadBasedAutoScaling` <a name="ResetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetLoadBasedAutoScaling"></a>

```go
func ResetLoadBasedAutoScaling()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetName"></a>

```go
func ResetName()
```

##### `ResetStatsEnabled` <a name="ResetStatsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsEnabled"></a>

```go
func ResetStatsEnabled()
```

##### `ResetStatsUrl` <a name="ResetStatsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUrl"></a>

```go
func ResetStatsUrl()
```

##### `ResetStatsUser` <a name="ResetStatsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUser"></a>

```go
func ResetStatsUser()
```

##### `ResetSystemPackages` <a name="ResetSystemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetSystemPackages"></a>

```go
func ResetSystemPackages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUseEbsOptimizedInstances` <a name="ResetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetUseEbsOptimizedInstances"></a>

```go
func ResetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.OpsworksHaproxyLayer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.OpsworksHaproxyLayer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.OpsworksHaproxyLayer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference">OpsworksHaproxyLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolume">EbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList">OpsworksHaproxyLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIpsInput">AutoAssignElasticIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIpsInput">AutoAssignPublicIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealingInput">AutoHealingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipesInput">CustomConfigureRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipesInput">CustomDeployRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArnInput">CustomInstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJsonInput">CustomJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIdsInput">CustomSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipesInput">CustomSetupRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipesInput">CustomShutdownRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipesInput">CustomUndeployRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdownInput">DrainElbOnShutdownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolumeInput">EbsVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancerInput">ElasticLoadBalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethodInput">HealthcheckMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrlInput">HealthcheckUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBootInput">InstallUpdatesOnBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeoutInput">InstanceShutdownTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScalingInput">LoadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackIdInput">StackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabledInput">StatsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPasswordInput">StatsPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrlInput">StatsUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUserInput">StatsUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackagesInput">SystemPackagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstancesInput">UseEbsOptimizedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJson">CustomJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethod">HealthcheckMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrl">HealthcheckUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabled">StatsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPassword">StatsPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrl">StatsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUser">StatsUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackages">SystemPackages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfiguration"></a>

```go
func CloudwatchConfiguration() OpsworksHaproxyLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference">OpsworksHaproxyLayerCloudwatchConfigurationOutputReference</a>

---

##### `EbsVolume`<sup>Required</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolume"></a>

```go
func EbsVolume() OpsworksHaproxyLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList">OpsworksHaproxyLayerEbsVolumeList</a>

---

##### `LoadBasedAutoScaling`<sup>Required</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScaling"></a>

```go
func LoadBasedAutoScaling() OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference</a>

---

##### `AutoAssignElasticIpsInput`<sup>Optional</sup> <a name="AutoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIpsInput"></a>

```go
func AutoAssignElasticIpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignPublicIpsInput`<sup>Optional</sup> <a name="AutoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIpsInput"></a>

```go
func AutoAssignPublicIpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealingInput"></a>

```go
func AutoHealingInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfigurationInput"></a>

```go
func CloudwatchConfigurationInput() OpsworksHaproxyLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---

##### `CustomConfigureRecipesInput`<sup>Optional</sup> <a name="CustomConfigureRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipesInput"></a>

```go
func CustomConfigureRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDeployRecipesInput`<sup>Optional</sup> <a name="CustomDeployRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipesInput"></a>

```go
func CustomDeployRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInstanceProfileArnInput`<sup>Optional</sup> <a name="CustomInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArnInput"></a>

```go
func CustomInstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJsonInput"></a>

```go
func CustomJsonInput() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIdsInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIdsInput"></a>

```go
func CustomSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSetupRecipesInput`<sup>Optional</sup> <a name="CustomSetupRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipesInput"></a>

```go
func CustomSetupRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomShutdownRecipesInput`<sup>Optional</sup> <a name="CustomShutdownRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipesInput"></a>

```go
func CustomShutdownRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomUndeployRecipesInput`<sup>Optional</sup> <a name="CustomUndeployRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipesInput"></a>

```go
func CustomUndeployRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DrainElbOnShutdownInput`<sup>Optional</sup> <a name="DrainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdownInput"></a>

```go
func DrainElbOnShutdownInput() interface{}
```

- *Type:* interface{}

---

##### `EbsVolumeInput`<sup>Optional</sup> <a name="EbsVolumeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolumeInput"></a>

```go
func EbsVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticLoadBalancerInput`<sup>Optional</sup> <a name="ElasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancerInput"></a>

```go
func ElasticLoadBalancerInput() *string
```

- *Type:* *string

---

##### `HealthcheckMethodInput`<sup>Optional</sup> <a name="HealthcheckMethodInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethodInput"></a>

```go
func HealthcheckMethodInput() *string
```

- *Type:* *string

---

##### `HealthcheckUrlInput`<sup>Optional</sup> <a name="HealthcheckUrlInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrlInput"></a>

```go
func HealthcheckUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstallUpdatesOnBootInput`<sup>Optional</sup> <a name="InstallUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBootInput"></a>

```go
func InstallUpdatesOnBootInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceShutdownTimeoutInput`<sup>Optional</sup> <a name="InstanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeoutInput"></a>

```go
func InstanceShutdownTimeoutInput() *f64
```

- *Type:* *f64

---

##### `LoadBasedAutoScalingInput`<sup>Optional</sup> <a name="LoadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScalingInput"></a>

```go
func LoadBasedAutoScalingInput() OpsworksHaproxyLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackIdInput"></a>

```go
func StackIdInput() *string
```

- *Type:* *string

---

##### `StatsEnabledInput`<sup>Optional</sup> <a name="StatsEnabledInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabledInput"></a>

```go
func StatsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StatsPasswordInput`<sup>Optional</sup> <a name="StatsPasswordInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPasswordInput"></a>

```go
func StatsPasswordInput() *string
```

- *Type:* *string

---

##### `StatsUrlInput`<sup>Optional</sup> <a name="StatsUrlInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrlInput"></a>

```go
func StatsUrlInput() *string
```

- *Type:* *string

---

##### `StatsUserInput`<sup>Optional</sup> <a name="StatsUserInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUserInput"></a>

```go
func StatsUserInput() *string
```

- *Type:* *string

---

##### `SystemPackagesInput`<sup>Optional</sup> <a name="SystemPackagesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackagesInput"></a>

```go
func SystemPackagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="UseEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstancesInput"></a>

```go
func UseEbsOptimizedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignElasticIps`<sup>Required</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIps"></a>

```go
func AutoAssignElasticIps() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignPublicIps`<sup>Required</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIps"></a>

```go
func AutoAssignPublicIps() interface{}
```

- *Type:* interface{}

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealing"></a>

```go
func AutoHealing() interface{}
```

- *Type:* interface{}

---

##### `CustomConfigureRecipes`<sup>Required</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipes"></a>

```go
func CustomConfigureRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDeployRecipes`<sup>Required</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipes"></a>

```go
func CustomDeployRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInstanceProfileArn`<sup>Required</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArn"></a>

```go
func CustomInstanceProfileArn() *string
```

- *Type:* *string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJson"></a>

```go
func CustomJson() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIds`<sup>Required</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIds"></a>

```go
func CustomSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSetupRecipes`<sup>Required</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipes"></a>

```go
func CustomSetupRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomShutdownRecipes`<sup>Required</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipes"></a>

```go
func CustomShutdownRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomUndeployRecipes`<sup>Required</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipes"></a>

```go
func CustomUndeployRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `DrainElbOnShutdown`<sup>Required</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdown"></a>

```go
func DrainElbOnShutdown() interface{}
```

- *Type:* interface{}

---

##### `ElasticLoadBalancer`<sup>Required</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancer"></a>

```go
func ElasticLoadBalancer() *string
```

- *Type:* *string

---

##### `HealthcheckMethod`<sup>Required</sup> <a name="HealthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethod"></a>

```go
func HealthcheckMethod() *string
```

- *Type:* *string

---

##### `HealthcheckUrl`<sup>Required</sup> <a name="HealthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrl"></a>

```go
func HealthcheckUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallUpdatesOnBoot`<sup>Required</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBoot"></a>

```go
func InstallUpdatesOnBoot() interface{}
```

- *Type:* interface{}

---

##### `InstanceShutdownTimeout`<sup>Required</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeout"></a>

```go
func InstanceShutdownTimeout() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `StatsEnabled`<sup>Required</sup> <a name="StatsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabled"></a>

```go
func StatsEnabled() interface{}
```

- *Type:* interface{}

---

##### `StatsPassword`<sup>Required</sup> <a name="StatsPassword" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPassword"></a>

```go
func StatsPassword() *string
```

- *Type:* *string

---

##### `StatsUrl`<sup>Required</sup> <a name="StatsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrl"></a>

```go
func StatsUrl() *string
```

- *Type:* *string

---

##### `StatsUser`<sup>Required</sup> <a name="StatsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUser"></a>

```go
func StatsUser() *string
```

- *Type:* *string

---

##### `SystemPackages`<sup>Required</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackages"></a>

```go
func SystemPackages() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseEbsOptimizedInstances`<sup>Required</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstances"></a>

```go
func UseEbsOptimizedInstances() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksHaproxyLayerCloudwatchConfiguration <a name="OpsworksHaproxyLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

&opsworkshaproxylayer.OpsworksHaproxyLayerCloudwatchConfiguration {
	Enabled: interface{},
	LogStreams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enabled OpsworksHaproxyLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.logStreams">LogStreams</a></code> | <code>interface{}</code> | log_streams block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enabled OpsworksHaproxyLayer#enabled}.

---

##### `LogStreams`<sup>Optional</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.logStreams"></a>

```go
LogStreams interface{}
```

- *Type:* interface{}

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_streams OpsworksHaproxyLayer#log_streams}

---

### OpsworksHaproxyLayerCloudwatchConfigurationLogStreams <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

&opsworkshaproxylayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams {
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.file">File</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file OpsworksHaproxyLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_group_name OpsworksHaproxyLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchCount">BatchCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_count OpsworksHaproxyLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_size OpsworksHaproxyLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.bufferDuration">BufferDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#buffer_duration OpsworksHaproxyLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">DatetimeFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#datetime_format OpsworksHaproxyLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encoding OpsworksHaproxyLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file_fingerprint_lines OpsworksHaproxyLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.initialPosition">InitialPosition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#initial_position OpsworksHaproxyLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#multiline_start_pattern OpsworksHaproxyLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#time_zone OpsworksHaproxyLayer#time_zone}. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.file"></a>

```go
File *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file OpsworksHaproxyLayer#file}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_group_name OpsworksHaproxyLayer#log_group_name}.

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```go
BatchCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_count OpsworksHaproxyLayer#batch_count}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_size OpsworksHaproxyLayer#batch_size}.

---

##### `BufferDuration`<sup>Optional</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```go
BufferDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#buffer_duration OpsworksHaproxyLayer#buffer_duration}.

---

##### `DatetimeFormat`<sup>Optional</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```go
DatetimeFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#datetime_format OpsworksHaproxyLayer#datetime_format}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encoding OpsworksHaproxyLayer#encoding}.

---

##### `FileFingerprintLines`<sup>Optional</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```go
FileFingerprintLines *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file_fingerprint_lines OpsworksHaproxyLayer#file_fingerprint_lines}.

---

##### `InitialPosition`<sup>Optional</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```go
InitialPosition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#initial_position OpsworksHaproxyLayer#initial_position}.

---

##### `MultilineStartPattern`<sup>Optional</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```go
MultilineStartPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#multiline_start_pattern OpsworksHaproxyLayer#multiline_start_pattern}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#time_zone OpsworksHaproxyLayer#time_zone}.

---

### OpsworksHaproxyLayerConfig <a name="OpsworksHaproxyLayerConfig" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

&opsworkshaproxylayer.OpsworksHaproxyLayerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StackId: *string,
	StatsPassword: *string,
	AutoAssignElasticIps: interface{},
	AutoAssignPublicIps: interface{},
	AutoHealing: interface{},
	CloudwatchConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration,
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
	HealthcheckMethod: *string,
	HealthcheckUrl: *string,
	Id: *string,
	InstallUpdatesOnBoot: interface{},
	InstanceShutdownTimeout: *f64,
	LoadBasedAutoScaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling,
	Name: *string,
	StatsEnabled: interface{},
	StatsUrl: *string,
	StatsUser: *string,
	SystemPackages: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	UseEbsOptimizedInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.stackId">StackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsPassword">StatsPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customJson">CustomJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.ebsVolume">EbsVolume</a></code> | <code>interface{}</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckMethod">HealthcheckMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckUrl">HealthcheckUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsEnabled">StatsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUrl">StatsUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUser">StatsUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.systemPackages">SystemPackages</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.stackId"></a>

```go
StackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}.

---

##### `StatsPassword`<sup>Required</sup> <a name="StatsPassword" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsPassword"></a>

```go
StatsPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}.

---

##### `AutoAssignElasticIps`<sup>Optional</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignElasticIps"></a>

```go
AutoAssignElasticIps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}.

---

##### `AutoAssignPublicIps`<sup>Optional</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignPublicIps"></a>

```go
AutoAssignPublicIps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoHealing"></a>

```go
AutoHealing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}.

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.cloudwatchConfiguration"></a>

```go
CloudwatchConfiguration OpsworksHaproxyLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cloudwatch_configuration OpsworksHaproxyLayer#cloudwatch_configuration}

---

##### `CustomConfigureRecipes`<sup>Optional</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customConfigureRecipes"></a>

```go
CustomConfigureRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}.

---

##### `CustomDeployRecipes`<sup>Optional</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customDeployRecipes"></a>

```go
CustomDeployRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}.

---

##### `CustomInstanceProfileArn`<sup>Optional</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customInstanceProfileArn"></a>

```go
CustomInstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}.

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customJson"></a>

```go
CustomJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}.

---

##### `CustomSecurityGroupIds`<sup>Optional</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSecurityGroupIds"></a>

```go
CustomSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}.

---

##### `CustomSetupRecipes`<sup>Optional</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSetupRecipes"></a>

```go
CustomSetupRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}.

---

##### `CustomShutdownRecipes`<sup>Optional</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customShutdownRecipes"></a>

```go
CustomShutdownRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}.

---

##### `CustomUndeployRecipes`<sup>Optional</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customUndeployRecipes"></a>

```go
CustomUndeployRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}.

---

##### `DrainElbOnShutdown`<sup>Optional</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.drainElbOnShutdown"></a>

```go
DrainElbOnShutdown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}.

---

##### `EbsVolume`<sup>Optional</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.ebsVolume"></a>

```go
EbsVolume interface{}
```

- *Type:* interface{}

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ebs_volume OpsworksHaproxyLayer#ebs_volume}

---

##### `ElasticLoadBalancer`<sup>Optional</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.elasticLoadBalancer"></a>

```go
ElasticLoadBalancer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}.

---

##### `HealthcheckMethod`<sup>Optional</sup> <a name="HealthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckMethod"></a>

```go
HealthcheckMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}.

---

##### `HealthcheckUrl`<sup>Optional</sup> <a name="HealthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckUrl"></a>

```go
HealthcheckUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallUpdatesOnBoot`<sup>Optional</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.installUpdatesOnBoot"></a>

```go
InstallUpdatesOnBoot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}.

---

##### `InstanceShutdownTimeout`<sup>Optional</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.instanceShutdownTimeout"></a>

```go
InstanceShutdownTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}.

---

##### `LoadBasedAutoScaling`<sup>Optional</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.loadBasedAutoScaling"></a>

```go
LoadBasedAutoScaling OpsworksHaproxyLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_based_auto_scaling OpsworksHaproxyLayer#load_based_auto_scaling}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}.

---

##### `StatsEnabled`<sup>Optional</sup> <a name="StatsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsEnabled"></a>

```go
StatsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}.

---

##### `StatsUrl`<sup>Optional</sup> <a name="StatsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUrl"></a>

```go
StatsUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}.

---

##### `StatsUser`<sup>Optional</sup> <a name="StatsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUser"></a>

```go
StatsUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}.

---

##### `SystemPackages`<sup>Optional</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.systemPackages"></a>

```go
SystemPackages *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}.

---

##### `UseEbsOptimizedInstances`<sup>Optional</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.useEbsOptimizedInstances"></a>

```go
UseEbsOptimizedInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}.

---

### OpsworksHaproxyLayerEbsVolume <a name="OpsworksHaproxyLayerEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

&opsworkshaproxylayer.OpsworksHaproxyLayerEbsVolume {
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.mountPoint">MountPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#mount_point OpsworksHaproxyLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#number_of_disks OpsworksHaproxyLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#size OpsworksHaproxyLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encrypted OpsworksHaproxyLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#iops OpsworksHaproxyLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.raidLevel">RaidLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#raid_level OpsworksHaproxyLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#type OpsworksHaproxyLayer#type}. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.mountPoint"></a>

```go
MountPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#mount_point OpsworksHaproxyLayer#mount_point}.

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.numberOfDisks"></a>

```go
NumberOfDisks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#number_of_disks OpsworksHaproxyLayer#number_of_disks}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#size OpsworksHaproxyLayer#size}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encrypted OpsworksHaproxyLayer#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#iops OpsworksHaproxyLayer#iops}.

---

##### `RaidLevel`<sup>Optional</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.raidLevel"></a>

```go
RaidLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#raid_level OpsworksHaproxyLayer#raid_level}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#type OpsworksHaproxyLayer#type}.

---

### OpsworksHaproxyLayerLoadBasedAutoScaling <a name="OpsworksHaproxyLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

&opsworkshaproxylayer.OpsworksHaproxyLayerLoadBasedAutoScaling {
	Downscaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling,
	Enable: interface{},
	Upscaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enable OpsworksHaproxyLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `Downscaling`<sup>Optional</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.downscaling"></a>

```go
Downscaling OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#downscaling OpsworksHaproxyLayer#downscaling}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enable OpsworksHaproxyLayer#enable}.

---

##### `Upscaling`<sup>Optional</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.upscaling"></a>

```go
Upscaling OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#upscaling OpsworksHaproxyLayer#upscaling}

---

### OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling <a name="OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

&opsworkshaproxylayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.alarms">Alarms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```go
Alarms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```go
IgnoreMetricsTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```go
LoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```go
MemoryThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```go
ThresholdsWaitTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}.

---

### OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling <a name="OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

&opsworkshaproxylayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.alarms">Alarms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```go
Alarms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```go
IgnoreMetricsTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```go
LoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```go
MemoryThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```go
ThresholdsWaitTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get"></a>

```go
func Get(index *f64) OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">ResetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">ResetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">ResetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">ResetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">ResetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">ResetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```go
func ResetBatchCount()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetBufferDuration` <a name="ResetBufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```go
func ResetBufferDuration()
```

##### `ResetDatetimeFormat` <a name="ResetDatetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```go
func ResetDatetimeFormat()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFileFingerprintLines` <a name="ResetFileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```go
func ResetFileFingerprintLines()
```

##### `ResetInitialPosition` <a name="ResetInitialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```go
func ResetInitialPosition()
```

##### `ResetMultilineStartPattern` <a name="ResetMultilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```go
func ResetMultilineStartPattern()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">BufferDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">DatetimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">FileFingerprintLinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">InitialPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">MultilineStartPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">BatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">BufferDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">DatetimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">InitialPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```go
func BatchCountInput() *f64
```

- *Type:* *f64

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `BufferDurationInput`<sup>Optional</sup> <a name="BufferDurationInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```go
func BufferDurationInput() *f64
```

- *Type:* *f64

---

##### `DatetimeFormatInput`<sup>Optional</sup> <a name="DatetimeFormatInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```go
func DatetimeFormatInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FileFingerprintLinesInput`<sup>Optional</sup> <a name="FileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```go
func FileFingerprintLinesInput() *string
```

- *Type:* *string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `InitialPositionInput`<sup>Optional</sup> <a name="InitialPositionInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```go
func InitialPositionInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `MultilineStartPatternInput`<sup>Optional</sup> <a name="MultilineStartPatternInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```go
func MultilineStartPatternInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```go
func BatchCount() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `BufferDuration`<sup>Required</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```go
func BufferDuration() *f64
```

- *Type:* *f64

---

##### `DatetimeFormat`<sup>Required</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```go
func DatetimeFormat() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `FileFingerprintLines`<sup>Required</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```go
func FileFingerprintLines() *string
```

- *Type:* *string

---

##### `InitialPosition`<sup>Required</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```go
func InitialPosition() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `MultilineStartPattern`<sup>Required</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```go
func MultilineStartPattern() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksHaproxyLayerCloudwatchConfigurationOutputReference <a name="OpsworksHaproxyLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayerCloudwatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksHaproxyLayerCloudwatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams">PutLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetLogStreams">ResetLogStreams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```go
func PutLogStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogStreams` <a name="ResetLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```go
func ResetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList">OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">LogStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```go
func LogStreams() OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList">OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```go
func LogStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksHaproxyLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---


### OpsworksHaproxyLayerEbsVolumeList <a name="OpsworksHaproxyLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayerEbsVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksHaproxyLayerEbsVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get"></a>

```go
func Get(index *f64) OpsworksHaproxyLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksHaproxyLayerEbsVolumeOutputReference <a name="OpsworksHaproxyLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayerEbsVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksHaproxyLayerEbsVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetRaidLevel">ResetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetRaidLevel` <a name="ResetRaidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```go
func ResetRaidLevel()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevelInput">RaidLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevel">RaidLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```go
func MountPointInput() *string
```

- *Type:* *string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```go
func NumberOfDisksInput() *f64
```

- *Type:* *f64

---

##### `RaidLevelInput`<sup>Optional</sup> <a name="RaidLevelInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```go
func RaidLevelInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```go
func NumberOfDisks() *f64
```

- *Type:* *f64

---

##### `RaidLevel`<sup>Required</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevel"></a>

```go
func RaidLevel() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```go
func ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```go
func ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```go
func ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```go
func ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">Alarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```go
func IgnoreMetricsTimeInput() *f64
```

- *Type:* *f64

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```go
func LoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```go
func MemoryThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```go
func ThresholdsWaitTimeInput() *f64
```

- *Type:* *f64

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```go
func Alarms() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```go
func IgnoreMetricsTime() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```go
func LoadThreshold() *f64
```

- *Type:* *f64

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```go
func MemoryThreshold() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```go
func ThresholdsWaitTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayerLoadBasedAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling">PutDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling">PutUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetDownscaling">ResetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetUpscaling">ResetUpscaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownscaling` <a name="PutDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```go
func PutDownscaling(value OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---

##### `PutUpscaling` <a name="PutUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```go
func PutUpscaling(value OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---

##### `ResetDownscaling` <a name="ResetDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```go
func ResetDownscaling()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetUpscaling` <a name="ResetUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```go
func ResetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">DownscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">UpscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Downscaling`<sup>Required</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```go
func Downscaling() OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `Upscaling`<sup>Required</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```go
func Upscaling() OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `DownscalingInput`<sup>Optional</sup> <a name="DownscalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```go
func DownscalingInput() OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `UpscalingInput`<sup>Optional</sup> <a name="UpscalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```go
func UpscalingInput() OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksHaproxyLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---


### OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkshaproxylayer"

opsworkshaproxylayer.NewOpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">ResetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">ResetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">ResetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">ResetThresholdsWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```go
func ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```go
func ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```go
func ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```go
func ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">Alarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```go
func IgnoreMetricsTimeInput() *f64
```

- *Type:* *f64

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```go
func LoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```go
func MemoryThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```go
func ThresholdsWaitTimeInput() *f64
```

- *Type:* *f64

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```go
func Alarms() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```go
func IgnoreMetricsTime() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```go
func LoadThreshold() *f64
```

- *Type:* *f64

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```go
func MemoryThreshold() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```go
func ThresholdsWaitTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---



