# `opsworksMysqlLayer` Submodule <a name="`opsworksMysqlLayer` Submodule" id="@cdktf/provider-aws.opsworksMysqlLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksMysqlLayer <a name="OpsworksMysqlLayer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer aws_opsworks_mysql_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayer(scope Construct, id *string, config OpsworksMysqlLayerConfig) OpsworksMysqlLayer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig">OpsworksMysqlLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration"></a>

```go
func PutCloudwatchConfiguration(value OpsworksMysqlLayerCloudwatchConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---

##### `PutEbsVolume` <a name="PutEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume"></a>

```go
func PutEbsVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoadBasedAutoScaling` <a name="PutLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling"></a>

```go
func PutLoadBasedAutoScaling(value OpsworksMysqlLayerLoadBasedAutoScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---

##### `ResetAutoAssignElasticIps` <a name="ResetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignElasticIps"></a>

```go
func ResetAutoAssignElasticIps()
```

##### `ResetAutoAssignPublicIps` <a name="ResetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignPublicIps"></a>

```go
func ResetAutoAssignPublicIps()
```

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoHealing"></a>

```go
func ResetAutoHealing()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCloudwatchConfiguration"></a>

```go
func ResetCloudwatchConfiguration()
```

##### `ResetCustomConfigureRecipes` <a name="ResetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomConfigureRecipes"></a>

```go
func ResetCustomConfigureRecipes()
```

##### `ResetCustomDeployRecipes` <a name="ResetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomDeployRecipes"></a>

```go
func ResetCustomDeployRecipes()
```

##### `ResetCustomInstanceProfileArn` <a name="ResetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomInstanceProfileArn"></a>

```go
func ResetCustomInstanceProfileArn()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomJson"></a>

```go
func ResetCustomJson()
```

##### `ResetCustomSecurityGroupIds` <a name="ResetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSecurityGroupIds"></a>

```go
func ResetCustomSecurityGroupIds()
```

##### `ResetCustomSetupRecipes` <a name="ResetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSetupRecipes"></a>

```go
func ResetCustomSetupRecipes()
```

##### `ResetCustomShutdownRecipes` <a name="ResetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomShutdownRecipes"></a>

```go
func ResetCustomShutdownRecipes()
```

##### `ResetCustomUndeployRecipes` <a name="ResetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomUndeployRecipes"></a>

```go
func ResetCustomUndeployRecipes()
```

##### `ResetDrainElbOnShutdown` <a name="ResetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetDrainElbOnShutdown"></a>

```go
func ResetDrainElbOnShutdown()
```

##### `ResetEbsVolume` <a name="ResetEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetEbsVolume"></a>

```go
func ResetEbsVolume()
```

##### `ResetElasticLoadBalancer` <a name="ResetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetElasticLoadBalancer"></a>

```go
func ResetElasticLoadBalancer()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetId"></a>

```go
func ResetId()
```

##### `ResetInstallUpdatesOnBoot` <a name="ResetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstallUpdatesOnBoot"></a>

```go
func ResetInstallUpdatesOnBoot()
```

##### `ResetInstanceShutdownTimeout` <a name="ResetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstanceShutdownTimeout"></a>

```go
func ResetInstanceShutdownTimeout()
```

##### `ResetLoadBasedAutoScaling` <a name="ResetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetLoadBasedAutoScaling"></a>

```go
func ResetLoadBasedAutoScaling()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetName"></a>

```go
func ResetName()
```

##### `ResetRootPassword` <a name="ResetRootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPassword"></a>

```go
func ResetRootPassword()
```

##### `ResetRootPasswordOnAllInstances` <a name="ResetRootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPasswordOnAllInstances"></a>

```go
func ResetRootPasswordOnAllInstances()
```

##### `ResetSystemPackages` <a name="ResetSystemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetSystemPackages"></a>

```go
func ResetSystemPackages()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUseEbsOptimizedInstances` <a name="ResetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetUseEbsOptimizedInstances"></a>

```go
func ResetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.OpsworksMysqlLayer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.OpsworksMysqlLayer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.OpsworksMysqlLayer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference">OpsworksMysqlLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolume">EbsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList">OpsworksMysqlLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIpsInput">AutoAssignElasticIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIpsInput">AutoAssignPublicIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealingInput">AutoHealingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipesInput">CustomConfigureRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipesInput">CustomDeployRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArnInput">CustomInstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJsonInput">CustomJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIdsInput">CustomSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipesInput">CustomSetupRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipesInput">CustomShutdownRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipesInput">CustomUndeployRecipesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdownInput">DrainElbOnShutdownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolumeInput">EbsVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancerInput">ElasticLoadBalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBootInput">InstallUpdatesOnBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeoutInput">InstanceShutdownTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScalingInput">LoadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordInput">RootPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstancesInput">RootPasswordOnAllInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackIdInput">StackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackagesInput">SystemPackagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstancesInput">UseEbsOptimizedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJson">CustomJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPassword">RootPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstances">RootPasswordOnAllInstances</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackages">SystemPackages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfiguration"></a>

```go
func CloudwatchConfiguration() OpsworksMysqlLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference">OpsworksMysqlLayerCloudwatchConfigurationOutputReference</a>

---

##### `EbsVolume`<sup>Required</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolume"></a>

```go
func EbsVolume() OpsworksMysqlLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList">OpsworksMysqlLayerEbsVolumeList</a>

---

##### `LoadBasedAutoScaling`<sup>Required</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScaling"></a>

```go
func LoadBasedAutoScaling() OpsworksMysqlLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingOutputReference</a>

---

##### `AutoAssignElasticIpsInput`<sup>Optional</sup> <a name="AutoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIpsInput"></a>

```go
func AutoAssignElasticIpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignPublicIpsInput`<sup>Optional</sup> <a name="AutoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIpsInput"></a>

```go
func AutoAssignPublicIpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealingInput"></a>

```go
func AutoHealingInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfigurationInput"></a>

```go
func CloudwatchConfigurationInput() OpsworksMysqlLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---

##### `CustomConfigureRecipesInput`<sup>Optional</sup> <a name="CustomConfigureRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipesInput"></a>

```go
func CustomConfigureRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDeployRecipesInput`<sup>Optional</sup> <a name="CustomDeployRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipesInput"></a>

```go
func CustomDeployRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInstanceProfileArnInput`<sup>Optional</sup> <a name="CustomInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArnInput"></a>

```go
func CustomInstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJsonInput"></a>

```go
func CustomJsonInput() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIdsInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIdsInput"></a>

```go
func CustomSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSetupRecipesInput`<sup>Optional</sup> <a name="CustomSetupRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipesInput"></a>

```go
func CustomSetupRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomShutdownRecipesInput`<sup>Optional</sup> <a name="CustomShutdownRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipesInput"></a>

```go
func CustomShutdownRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomUndeployRecipesInput`<sup>Optional</sup> <a name="CustomUndeployRecipesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipesInput"></a>

```go
func CustomUndeployRecipesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DrainElbOnShutdownInput`<sup>Optional</sup> <a name="DrainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdownInput"></a>

```go
func DrainElbOnShutdownInput() interface{}
```

- *Type:* interface{}

---

##### `EbsVolumeInput`<sup>Optional</sup> <a name="EbsVolumeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolumeInput"></a>

```go
func EbsVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticLoadBalancerInput`<sup>Optional</sup> <a name="ElasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancerInput"></a>

```go
func ElasticLoadBalancerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstallUpdatesOnBootInput`<sup>Optional</sup> <a name="InstallUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBootInput"></a>

```go
func InstallUpdatesOnBootInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceShutdownTimeoutInput`<sup>Optional</sup> <a name="InstanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeoutInput"></a>

```go
func InstanceShutdownTimeoutInput() *f64
```

- *Type:* *f64

---

##### `LoadBasedAutoScalingInput`<sup>Optional</sup> <a name="LoadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScalingInput"></a>

```go
func LoadBasedAutoScalingInput() OpsworksMysqlLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RootPasswordInput`<sup>Optional</sup> <a name="RootPasswordInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordInput"></a>

```go
func RootPasswordInput() *string
```

- *Type:* *string

---

##### `RootPasswordOnAllInstancesInput`<sup>Optional</sup> <a name="RootPasswordOnAllInstancesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstancesInput"></a>

```go
func RootPasswordOnAllInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackIdInput"></a>

```go
func StackIdInput() *string
```

- *Type:* *string

---

##### `SystemPackagesInput`<sup>Optional</sup> <a name="SystemPackagesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackagesInput"></a>

```go
func SystemPackagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="UseEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstancesInput"></a>

```go
func UseEbsOptimizedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignElasticIps`<sup>Required</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIps"></a>

```go
func AutoAssignElasticIps() interface{}
```

- *Type:* interface{}

---

##### `AutoAssignPublicIps`<sup>Required</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIps"></a>

```go
func AutoAssignPublicIps() interface{}
```

- *Type:* interface{}

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealing"></a>

```go
func AutoHealing() interface{}
```

- *Type:* interface{}

---

##### `CustomConfigureRecipes`<sup>Required</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipes"></a>

```go
func CustomConfigureRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDeployRecipes`<sup>Required</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipes"></a>

```go
func CustomDeployRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInstanceProfileArn`<sup>Required</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArn"></a>

```go
func CustomInstanceProfileArn() *string
```

- *Type:* *string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJson"></a>

```go
func CustomJson() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIds`<sup>Required</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIds"></a>

```go
func CustomSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSetupRecipes`<sup>Required</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipes"></a>

```go
func CustomSetupRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomShutdownRecipes`<sup>Required</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipes"></a>

```go
func CustomShutdownRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomUndeployRecipes`<sup>Required</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipes"></a>

```go
func CustomUndeployRecipes() *[]*string
```

- *Type:* *[]*string

---

##### `DrainElbOnShutdown`<sup>Required</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdown"></a>

```go
func DrainElbOnShutdown() interface{}
```

- *Type:* interface{}

---

##### `ElasticLoadBalancer`<sup>Required</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancer"></a>

```go
func ElasticLoadBalancer() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallUpdatesOnBoot`<sup>Required</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBoot"></a>

```go
func InstallUpdatesOnBoot() interface{}
```

- *Type:* interface{}

---

##### `InstanceShutdownTimeout`<sup>Required</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeout"></a>

```go
func InstanceShutdownTimeout() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RootPassword`<sup>Required</sup> <a name="RootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPassword"></a>

```go
func RootPassword() *string
```

- *Type:* *string

---

##### `RootPasswordOnAllInstances`<sup>Required</sup> <a name="RootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstances"></a>

```go
func RootPasswordOnAllInstances() interface{}
```

- *Type:* interface{}

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `SystemPackages`<sup>Required</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackages"></a>

```go
func SystemPackages() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseEbsOptimizedInstances`<sup>Required</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstances"></a>

```go
func UseEbsOptimizedInstances() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksMysqlLayerCloudwatchConfiguration <a name="OpsworksMysqlLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

&opsworksmysqllayer.OpsworksMysqlLayerCloudwatchConfiguration {
	Enabled: interface{},
	LogStreams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.logStreams">LogStreams</a></code> | <code>interface{}</code> | log_streams block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}.

---

##### `LogStreams`<sup>Optional</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.logStreams"></a>

```go
LogStreams interface{}
```

- *Type:* interface{}

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_streams OpsworksMysqlLayer#log_streams}

---

### OpsworksMysqlLayerCloudwatchConfigurationLogStreams <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

&opsworksmysqllayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams {
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.file">File</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file OpsworksMysqlLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchCount">BatchCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.bufferDuration">BufferDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">DatetimeFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.initialPosition">InitialPosition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.file"></a>

```go
File *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file OpsworksMysqlLayer#file}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}.

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```go
BatchCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}.

---

##### `BufferDuration`<sup>Optional</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```go
BufferDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}.

---

##### `DatetimeFormat`<sup>Optional</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```go
DatetimeFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}.

---

##### `FileFingerprintLines`<sup>Optional</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```go
FileFingerprintLines *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}.

---

##### `InitialPosition`<sup>Optional</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```go
InitialPosition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}.

---

##### `MultilineStartPattern`<sup>Optional</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```go
MultilineStartPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}.

---

### OpsworksMysqlLayerConfig <a name="OpsworksMysqlLayerConfig" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

&opsworksmysqllayer.OpsworksMysqlLayerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StackId: *string,
	AutoAssignElasticIps: interface{},
	AutoAssignPublicIps: interface{},
	AutoHealing: interface{},
	CloudwatchConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration,
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
	LoadBasedAutoScaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling,
	Name: *string,
	RootPassword: *string,
	RootPasswordOnAllInstances: interface{},
	SystemPackages: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	UseEbsOptimizedInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.stackId">StackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignElasticIps">AutoAssignElasticIps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignPublicIps">AutoAssignPublicIps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customConfigureRecipes">CustomConfigureRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customDeployRecipes">CustomDeployRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customInstanceProfileArn">CustomInstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customJson">CustomJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSecurityGroupIds">CustomSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSetupRecipes">CustomSetupRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customShutdownRecipes">CustomShutdownRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customUndeployRecipes">CustomUndeployRecipes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.drainElbOnShutdown">DrainElbOnShutdown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.ebsVolume">EbsVolume</a></code> | <code>interface{}</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.elasticLoadBalancer">ElasticLoadBalancer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.installUpdatesOnBoot">InstallUpdatesOnBoot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.instanceShutdownTimeout">InstanceShutdownTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.loadBasedAutoScaling">LoadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPassword">RootPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPasswordOnAllInstances">RootPasswordOnAllInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.systemPackages">SystemPackages</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.useEbsOptimizedInstances">UseEbsOptimizedInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.stackId"></a>

```go
StackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}.

---

##### `AutoAssignElasticIps`<sup>Optional</sup> <a name="AutoAssignElasticIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignElasticIps"></a>

```go
AutoAssignElasticIps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}.

---

##### `AutoAssignPublicIps`<sup>Optional</sup> <a name="AutoAssignPublicIps" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignPublicIps"></a>

```go
AutoAssignPublicIps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoHealing"></a>

```go
AutoHealing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}.

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.cloudwatchConfiguration"></a>

```go
CloudwatchConfiguration OpsworksMysqlLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cloudwatch_configuration OpsworksMysqlLayer#cloudwatch_configuration}

---

##### `CustomConfigureRecipes`<sup>Optional</sup> <a name="CustomConfigureRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customConfigureRecipes"></a>

```go
CustomConfigureRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}.

---

##### `CustomDeployRecipes`<sup>Optional</sup> <a name="CustomDeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customDeployRecipes"></a>

```go
CustomDeployRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}.

---

##### `CustomInstanceProfileArn`<sup>Optional</sup> <a name="CustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customInstanceProfileArn"></a>

```go
CustomInstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}.

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customJson"></a>

```go
CustomJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}.

---

##### `CustomSecurityGroupIds`<sup>Optional</sup> <a name="CustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSecurityGroupIds"></a>

```go
CustomSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}.

---

##### `CustomSetupRecipes`<sup>Optional</sup> <a name="CustomSetupRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSetupRecipes"></a>

```go
CustomSetupRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}.

---

##### `CustomShutdownRecipes`<sup>Optional</sup> <a name="CustomShutdownRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customShutdownRecipes"></a>

```go
CustomShutdownRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}.

---

##### `CustomUndeployRecipes`<sup>Optional</sup> <a name="CustomUndeployRecipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customUndeployRecipes"></a>

```go
CustomUndeployRecipes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}.

---

##### `DrainElbOnShutdown`<sup>Optional</sup> <a name="DrainElbOnShutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.drainElbOnShutdown"></a>

```go
DrainElbOnShutdown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}.

---

##### `EbsVolume`<sup>Optional</sup> <a name="EbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.ebsVolume"></a>

```go
EbsVolume interface{}
```

- *Type:* interface{}

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ebs_volume OpsworksMysqlLayer#ebs_volume}

---

##### `ElasticLoadBalancer`<sup>Optional</sup> <a name="ElasticLoadBalancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.elasticLoadBalancer"></a>

```go
ElasticLoadBalancer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallUpdatesOnBoot`<sup>Optional</sup> <a name="InstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.installUpdatesOnBoot"></a>

```go
InstallUpdatesOnBoot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}.

---

##### `InstanceShutdownTimeout`<sup>Optional</sup> <a name="InstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.instanceShutdownTimeout"></a>

```go
InstanceShutdownTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}.

---

##### `LoadBasedAutoScaling`<sup>Optional</sup> <a name="LoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.loadBasedAutoScaling"></a>

```go
LoadBasedAutoScaling OpsworksMysqlLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_based_auto_scaling OpsworksMysqlLayer#load_based_auto_scaling}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}.

---

##### `RootPassword`<sup>Optional</sup> <a name="RootPassword" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPassword"></a>

```go
RootPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}.

---

##### `RootPasswordOnAllInstances`<sup>Optional</sup> <a name="RootPasswordOnAllInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPasswordOnAllInstances"></a>

```go
RootPasswordOnAllInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}.

---

##### `SystemPackages`<sup>Optional</sup> <a name="SystemPackages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.systemPackages"></a>

```go
SystemPackages *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}.

---

##### `UseEbsOptimizedInstances`<sup>Optional</sup> <a name="UseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.useEbsOptimizedInstances"></a>

```go
UseEbsOptimizedInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}.

---

### OpsworksMysqlLayerEbsVolume <a name="OpsworksMysqlLayerEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

&opsworksmysqllayer.OpsworksMysqlLayerEbsVolume {
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.mountPoint">MountPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#size OpsworksMysqlLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.raidLevel">RaidLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#type OpsworksMysqlLayer#type}. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.mountPoint"></a>

```go
MountPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}.

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.numberOfDisks"></a>

```go
NumberOfDisks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#size OpsworksMysqlLayer#size}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}.

---

##### `RaidLevel`<sup>Optional</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.raidLevel"></a>

```go
RaidLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#type OpsworksMysqlLayer#type}.

---

### OpsworksMysqlLayerLoadBasedAutoScaling <a name="OpsworksMysqlLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

&opsworksmysqllayer.OpsworksMysqlLayerLoadBasedAutoScaling {
	Downscaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling,
	Enable: interface{},
	Upscaling: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `Downscaling`<sup>Optional</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.downscaling"></a>

```go
Downscaling OpsworksMysqlLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#downscaling OpsworksMysqlLayer#downscaling}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}.

---

##### `Upscaling`<sup>Optional</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.upscaling"></a>

```go
Upscaling OpsworksMysqlLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#upscaling OpsworksMysqlLayer#upscaling}

---

### OpsworksMysqlLayerLoadBasedAutoScalingDownscaling <a name="OpsworksMysqlLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

&opsworksmysqllayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.alarms">Alarms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```go
Alarms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```go
IgnoreMetricsTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```go
LoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```go
MemoryThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```go
ThresholdsWaitTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

### OpsworksMysqlLayerLoadBasedAutoScalingUpscaling <a name="OpsworksMysqlLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

&opsworksmysqllayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling {
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.alarms">Alarms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```go
Alarms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

##### `IgnoreMetricsTime`<sup>Optional</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```go
IgnoreMetricsTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

##### `LoadThreshold`<sup>Optional</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```go
LoadThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

##### `MemoryThreshold`<sup>Optional</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```go
MemoryThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

##### `ThresholdsWaitTime`<sup>Optional</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```go
ThresholdsWaitTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayerCloudwatchConfigurationLogStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get"></a>

```go
func Get(index *f64) OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```go
func ResetBatchCount()
```

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetBufferDuration` <a name="ResetBufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```go
func ResetBufferDuration()
```

##### `ResetDatetimeFormat` <a name="ResetDatetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```go
func ResetDatetimeFormat()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFileFingerprintLines` <a name="ResetFileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```go
func ResetFileFingerprintLines()
```

##### `ResetInitialPosition` <a name="ResetInitialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```go
func ResetInitialPosition()
```

##### `ResetMultilineStartPattern` <a name="ResetMultilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```go
func ResetMultilineStartPattern()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">BufferDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">DatetimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">FileFingerprintLinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">InitialPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">MultilineStartPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">BatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">BufferDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">DatetimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">FileFingerprintLines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">InitialPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">MultilineStartPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```go
func BatchCountInput() *f64
```

- *Type:* *f64

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `BufferDurationInput`<sup>Optional</sup> <a name="BufferDurationInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```go
func BufferDurationInput() *f64
```

- *Type:* *f64

---

##### `DatetimeFormatInput`<sup>Optional</sup> <a name="DatetimeFormatInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```go
func DatetimeFormatInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FileFingerprintLinesInput`<sup>Optional</sup> <a name="FileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```go
func FileFingerprintLinesInput() *string
```

- *Type:* *string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `InitialPositionInput`<sup>Optional</sup> <a name="InitialPositionInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```go
func InitialPositionInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `MultilineStartPatternInput`<sup>Optional</sup> <a name="MultilineStartPatternInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```go
func MultilineStartPatternInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```go
func BatchCount() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `BufferDuration`<sup>Required</sup> <a name="BufferDuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```go
func BufferDuration() *f64
```

- *Type:* *f64

---

##### `DatetimeFormat`<sup>Required</sup> <a name="DatetimeFormat" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```go
func DatetimeFormat() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `FileFingerprintLines`<sup>Required</sup> <a name="FileFingerprintLines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```go
func FileFingerprintLines() *string
```

- *Type:* *string

---

##### `InitialPosition`<sup>Required</sup> <a name="InitialPosition" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```go
func InitialPosition() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `MultilineStartPattern`<sup>Required</sup> <a name="MultilineStartPattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```go
func MultilineStartPattern() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksMysqlLayerCloudwatchConfigurationOutputReference <a name="OpsworksMysqlLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayerCloudwatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksMysqlLayerCloudwatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogStreams` <a name="PutLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```go
func PutLogStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogStreams` <a name="ResetLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```go
func ResetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreams">LogStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList">OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">LogStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogStreams`<sup>Required</sup> <a name="LogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```go
func LogStreams() OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList">OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogStreamsInput`<sup>Optional</sup> <a name="LogStreamsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```go
func LogStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksMysqlLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---


### OpsworksMysqlLayerEbsVolumeList <a name="OpsworksMysqlLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayerEbsVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksMysqlLayerEbsVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get"></a>

```go
func Get(index *f64) OpsworksMysqlLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksMysqlLayerEbsVolumeOutputReference <a name="OpsworksMysqlLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayerEbsVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksMysqlLayerEbsVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetRaidLevel` <a name="ResetRaidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```go
func ResetRaidLevel()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevelInput">RaidLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevel">RaidLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```go
func MountPointInput() *string
```

- *Type:* *string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```go
func NumberOfDisksInput() *f64
```

- *Type:* *f64

---

##### `RaidLevelInput`<sup>Optional</sup> <a name="RaidLevelInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```go
func RaidLevelInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```go
func NumberOfDisks() *f64
```

- *Type:* *f64

---

##### `RaidLevel`<sup>Required</sup> <a name="RaidLevel" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevel"></a>

```go
func RaidLevel() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```go
func ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```go
func ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```go
func ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```go
func ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">Alarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```go
func IgnoreMetricsTimeInput() *f64
```

- *Type:* *f64

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```go
func LoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```go
func MemoryThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```go
func ThresholdsWaitTimeInput() *f64
```

- *Type:* *f64

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```go
func Alarms() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```go
func IgnoreMetricsTime() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```go
func LoadThreshold() *f64
```

- *Type:* *f64

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```go
func MemoryThreshold() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```go
func ThresholdsWaitTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksMysqlLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksMysqlLayerLoadBasedAutoScalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayerLoadBasedAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksMysqlLayerLoadBasedAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownscaling` <a name="PutDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```go
func PutDownscaling(value OpsworksMysqlLayerLoadBasedAutoScalingDownscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---

##### `PutUpscaling` <a name="PutUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```go
func PutUpscaling(value OpsworksMysqlLayerLoadBasedAutoScalingUpscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---

##### `ResetDownscaling` <a name="ResetDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```go
func ResetDownscaling()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetUpscaling` <a name="ResetUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```go
func ResetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscaling">Downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscaling">Upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">DownscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">UpscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Downscaling`<sup>Required</sup> <a name="Downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```go
func Downscaling() OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `Upscaling`<sup>Required</sup> <a name="Upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```go
func Upscaling() OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `DownscalingInput`<sup>Optional</sup> <a name="DownscalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```go
func DownscalingInput() OpsworksMysqlLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `UpscalingInput`<sup>Optional</sup> <a name="UpscalingInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```go
func UpscalingInput() OpsworksMysqlLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksMysqlLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---


### OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksmysqllayer"

opsworksmysqllayer.NewOpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetIgnoreMetricsTime` <a name="ResetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```go
func ResetIgnoreMetricsTime()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLoadThreshold` <a name="ResetLoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```go
func ResetLoadThreshold()
```

##### `ResetMemoryThreshold` <a name="ResetMemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```go
func ResetMemoryThreshold()
```

##### `ResetThresholdsWaitTime` <a name="ResetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```go
func ResetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">IgnoreMetricsTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">LoadThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">MemoryThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">ThresholdsWaitTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">Alarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">IgnoreMetricsTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">LoadThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">MemoryThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">ThresholdsWaitTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTimeInput`<sup>Optional</sup> <a name="IgnoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```go
func IgnoreMetricsTimeInput() *f64
```

- *Type:* *f64

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LoadThresholdInput`<sup>Optional</sup> <a name="LoadThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```go
func LoadThresholdInput() *f64
```

- *Type:* *f64

---

##### `MemoryThresholdInput`<sup>Optional</sup> <a name="MemoryThresholdInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```go
func MemoryThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTimeInput`<sup>Optional</sup> <a name="ThresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```go
func ThresholdsWaitTimeInput() *f64
```

- *Type:* *f64

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```go
func Alarms() *[]*string
```

- *Type:* *[]*string

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoreMetricsTime`<sup>Required</sup> <a name="IgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```go
func IgnoreMetricsTime() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LoadThreshold`<sup>Required</sup> <a name="LoadThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```go
func LoadThreshold() *f64
```

- *Type:* *f64

---

##### `MemoryThreshold`<sup>Required</sup> <a name="MemoryThreshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```go
func MemoryThreshold() *f64
```

- *Type:* *f64

---

##### `ThresholdsWaitTime`<sup>Required</sup> <a name="ThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```go
func ThresholdsWaitTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksMysqlLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---



