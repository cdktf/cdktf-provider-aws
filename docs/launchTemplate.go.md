# `launchTemplate` Submodule <a name="`launchTemplate` Submodule" id="@cdktf/provider-aws.launchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchTemplate <a name="LaunchTemplate" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template aws_launch_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplate(scope Construct, id *string, config LaunchTemplateConfig) LaunchTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig">LaunchTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig">LaunchTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification">PutCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions">PutCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification">PutCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticGpuSpecifications">PutElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator">PutElasticInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions">PutEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions">PutHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile">PutIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions">PutInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements">PutInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification">PutLicenseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions">PutMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions">PutPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCapacityReservationSpecification">ResetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCpuOptions">ResetCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCreditSpecification">ResetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDefaultVersion">ResetDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiStop">ResetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiTermination">ResetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetElasticGpuSpecifications">ResetElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetElasticInferenceAccelerator">ResetElasticInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEnclaveOptions">ResetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetHibernationOptions">ResetHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceInitiatedShutdownBehavior">ResetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceMarketOptions">ResetInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceRequirements">ResetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKernelId">ResetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetLicenseSpecification">ResetLicenseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMaintenanceOptions">ResetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPrivateDnsNameOptions">ResetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetRamDiskId">ResetRamDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetSecurityGroupNames">ResetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUpdateDefaultVersion">ResetUpdateDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings"></a>

```go
func PutBlockDeviceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCapacityReservationSpecification` <a name="PutCapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification"></a>

```go
func PutCapacityReservationSpecification(value LaunchTemplateCapacityReservationSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---

##### `PutCpuOptions` <a name="PutCpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions"></a>

```go
func PutCpuOptions(value LaunchTemplateCpuOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---

##### `PutCreditSpecification` <a name="PutCreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification"></a>

```go
func PutCreditSpecification(value LaunchTemplateCreditSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---

##### `PutElasticGpuSpecifications` <a name="PutElasticGpuSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticGpuSpecifications"></a>

```go
func PutElasticGpuSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticGpuSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `PutElasticInferenceAccelerator` <a name="PutElasticInferenceAccelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator"></a>

```go
func PutElasticInferenceAccelerator(value LaunchTemplateElasticInferenceAccelerator)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

---

##### `PutEnclaveOptions` <a name="PutEnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions"></a>

```go
func PutEnclaveOptions(value LaunchTemplateEnclaveOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---

##### `PutHibernationOptions` <a name="PutHibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions"></a>

```go
func PutHibernationOptions(value LaunchTemplateHibernationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---

##### `PutIamInstanceProfile` <a name="PutIamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile"></a>

```go
func PutIamInstanceProfile(value LaunchTemplateIamInstanceProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---

##### `PutInstanceMarketOptions` <a name="PutInstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions"></a>

```go
func PutInstanceMarketOptions(value LaunchTemplateInstanceMarketOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---

##### `PutInstanceRequirements` <a name="PutInstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements"></a>

```go
func PutInstanceRequirements(value LaunchTemplateInstanceRequirements)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

---

##### `PutLicenseSpecification` <a name="PutLicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification"></a>

```go
func PutLicenseSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaintenanceOptions` <a name="PutMaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions"></a>

```go
func PutMaintenanceOptions(value LaunchTemplateMaintenanceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions"></a>

```go
func PutMetadataOptions(value LaunchTemplateMetadataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring"></a>

```go
func PutMonitoring(value LaunchTemplateMonitoring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces"></a>

```go
func PutNetworkInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement"></a>

```go
func PutPlacement(value LaunchTemplatePlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---

##### `PutPrivateDnsNameOptions` <a name="PutPrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions"></a>

```go
func PutPrivateDnsNameOptions(value LaunchTemplatePrivateDnsNameOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications"></a>

```go
func PutTagSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetBlockDeviceMappings"></a>

```go
func ResetBlockDeviceMappings()
```

##### `ResetCapacityReservationSpecification` <a name="ResetCapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCapacityReservationSpecification"></a>

```go
func ResetCapacityReservationSpecification()
```

##### `ResetCpuOptions` <a name="ResetCpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCpuOptions"></a>

```go
func ResetCpuOptions()
```

##### `ResetCreditSpecification` <a name="ResetCreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCreditSpecification"></a>

```go
func ResetCreditSpecification()
```

##### `ResetDefaultVersion` <a name="ResetDefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDefaultVersion"></a>

```go
func ResetDefaultVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableApiStop` <a name="ResetDisableApiStop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiStop"></a>

```go
func ResetDisableApiStop()
```

##### `ResetDisableApiTermination` <a name="ResetDisableApiTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiTermination"></a>

```go
func ResetDisableApiTermination()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetElasticGpuSpecifications` <a name="ResetElasticGpuSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetElasticGpuSpecifications"></a>

```go
func ResetElasticGpuSpecifications()
```

##### `ResetElasticInferenceAccelerator` <a name="ResetElasticInferenceAccelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetElasticInferenceAccelerator"></a>

```go
func ResetElasticInferenceAccelerator()
```

##### `ResetEnclaveOptions` <a name="ResetEnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEnclaveOptions"></a>

```go
func ResetEnclaveOptions()
```

##### `ResetHibernationOptions` <a name="ResetHibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetHibernationOptions"></a>

```go
func ResetHibernationOptions()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetIamInstanceProfile"></a>

```go
func ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetInstanceInitiatedShutdownBehavior` <a name="ResetInstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceInitiatedShutdownBehavior"></a>

```go
func ResetInstanceInitiatedShutdownBehavior()
```

##### `ResetInstanceMarketOptions` <a name="ResetInstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceMarketOptions"></a>

```go
func ResetInstanceMarketOptions()
```

##### `ResetInstanceRequirements` <a name="ResetInstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceRequirements"></a>

```go
func ResetInstanceRequirements()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetKernelId` <a name="ResetKernelId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKernelId"></a>

```go
func ResetKernelId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetLicenseSpecification` <a name="ResetLicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetLicenseSpecification"></a>

```go
func ResetLicenseSpecification()
```

##### `ResetMaintenanceOptions` <a name="ResetMaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMaintenanceOptions"></a>

```go
func ResetMaintenanceOptions()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMetadataOptions"></a>

```go
func ResetMetadataOptions()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNetworkInterfaces"></a>

```go
func ResetNetworkInterfaces()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPlacement"></a>

```go
func ResetPlacement()
```

##### `ResetPrivateDnsNameOptions` <a name="ResetPrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPrivateDnsNameOptions"></a>

```go
func ResetPrivateDnsNameOptions()
```

##### `ResetRamDiskId` <a name="ResetRamDiskId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetRamDiskId"></a>

```go
func ResetRamDiskId()
```

##### `ResetSecurityGroupNames` <a name="ResetSecurityGroupNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetSecurityGroupNames"></a>

```go
func ResetSecurityGroupNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagSpecifications"></a>

```go
func ResetTagSpecifications()
```

##### `ResetUpdateDefaultVersion` <a name="ResetUpdateDefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUpdateDefaultVersion"></a>

```go
func ResetUpdateDefaultVersion()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.LaunchTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.LaunchTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.LaunchTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList">LaunchTemplateBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference">LaunchTemplateCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference">LaunchTemplateCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference">LaunchTemplateCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticGpuSpecifications">ElasticGpuSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList">LaunchTemplateElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticInferenceAccelerator">ElasticInferenceAccelerator</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference">LaunchTemplateElasticInferenceAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference">LaunchTemplateEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference">LaunchTemplateHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference">LaunchTemplateIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptions">InstanceMarketOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference">LaunchTemplateInstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference">LaunchTemplateInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.latestVersion">LatestVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecification">LicenseSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList">LaunchTemplateLicenseSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference">LaunchTemplateMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference">LaunchTemplateMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference">LaunchTemplateMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList">LaunchTemplateNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference">LaunchTemplatePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference">LaunchTemplatePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList">LaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecificationInput">CapacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptionsInput">CpuOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecificationInput">CreditSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersionInput">DefaultVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStopInput">DisableApiStopInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTerminationInput">DisableApiTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticGpuSpecificationsInput">ElasticGpuSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticInferenceAcceleratorInput">ElasticInferenceAcceleratorInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptionsInput">EnclaveOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptionsInput">HibernationOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehaviorInput">InstanceInitiatedShutdownBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptionsInput">InstanceMarketOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirementsInput">InstanceRequirementsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelIdInput">KernelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecificationInput">LicenseSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptionsInput">MaintenanceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placementInput">PlacementInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptionsInput">PrivateDnsNameOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskIdInput">RamDiskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNamesInput">SecurityGroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersionInput">UpdateDefaultVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersion">DefaultVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStop">DisableApiStop</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTermination">DisableApiTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimized">EbsOptimized</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelId">KernelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskId">RamDiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNames">SecurityGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersion">UpdateDefaultVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() LaunchTemplateBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList">LaunchTemplateBlockDeviceMappingsList</a>

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecification"></a>

```go
func CapacityReservationSpecification() LaunchTemplateCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference">LaunchTemplateCapacityReservationSpecificationOutputReference</a>

---

##### `CpuOptions`<sup>Required</sup> <a name="CpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptions"></a>

```go
func CpuOptions() LaunchTemplateCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference">LaunchTemplateCpuOptionsOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecification"></a>

```go
func CreditSpecification() LaunchTemplateCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference">LaunchTemplateCreditSpecificationOutputReference</a>

---

##### `ElasticGpuSpecifications`<sup>Required</sup> <a name="ElasticGpuSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticGpuSpecifications"></a>

```go
func ElasticGpuSpecifications() LaunchTemplateElasticGpuSpecificationsList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList">LaunchTemplateElasticGpuSpecificationsList</a>

---

##### `ElasticInferenceAccelerator`<sup>Required</sup> <a name="ElasticInferenceAccelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticInferenceAccelerator"></a>

```go
func ElasticInferenceAccelerator() LaunchTemplateElasticInferenceAcceleratorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference">LaunchTemplateElasticInferenceAcceleratorOutputReference</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptions"></a>

```go
func EnclaveOptions() LaunchTemplateEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference">LaunchTemplateEnclaveOptionsOutputReference</a>

---

##### `HibernationOptions`<sup>Required</sup> <a name="HibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptions"></a>

```go
func HibernationOptions() LaunchTemplateHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference">LaunchTemplateHibernationOptionsOutputReference</a>

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() LaunchTemplateIamInstanceProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference">LaunchTemplateIamInstanceProfileOutputReference</a>

---

##### `InstanceMarketOptions`<sup>Required</sup> <a name="InstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptions"></a>

```go
func InstanceMarketOptions() LaunchTemplateInstanceMarketOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference">LaunchTemplateInstanceMarketOptionsOutputReference</a>

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirements"></a>

```go
func InstanceRequirements() LaunchTemplateInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference">LaunchTemplateInstanceRequirementsOutputReference</a>

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.latestVersion"></a>

```go
func LatestVersion() *f64
```

- *Type:* *f64

---

##### `LicenseSpecification`<sup>Required</sup> <a name="LicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecification"></a>

```go
func LicenseSpecification() LaunchTemplateLicenseSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList">LaunchTemplateLicenseSpecificationList</a>

---

##### `MaintenanceOptions`<sup>Required</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptions"></a>

```go
func MaintenanceOptions() LaunchTemplateMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference">LaunchTemplateMaintenanceOptionsOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptions"></a>

```go
func MetadataOptions() LaunchTemplateMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference">LaunchTemplateMetadataOptionsOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoring"></a>

```go
func Monitoring() LaunchTemplateMonitoringOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference">LaunchTemplateMonitoringOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfaces"></a>

```go
func NetworkInterfaces() LaunchTemplateNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList">LaunchTemplateNetworkInterfacesList</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placement"></a>

```go
func Placement() LaunchTemplatePlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference">LaunchTemplatePlacementOutputReference</a>

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptions"></a>

```go
func PrivateDnsNameOptions() LaunchTemplatePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference">LaunchTemplatePrivateDnsNameOptionsOutputReference</a>

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecifications"></a>

```go
func TagSpecifications() LaunchTemplateTagSpecificationsList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList">LaunchTemplateTagSpecificationsList</a>

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappingsInput"></a>

```go
func BlockDeviceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityReservationSpecificationInput`<sup>Optional</sup> <a name="CapacityReservationSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecificationInput"></a>

```go
func CapacityReservationSpecificationInput() LaunchTemplateCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---

##### `CpuOptionsInput`<sup>Optional</sup> <a name="CpuOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptionsInput"></a>

```go
func CpuOptionsInput() LaunchTemplateCpuOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---

##### `CreditSpecificationInput`<sup>Optional</sup> <a name="CreditSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecificationInput"></a>

```go
func CreditSpecificationInput() LaunchTemplateCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---

##### `DefaultVersionInput`<sup>Optional</sup> <a name="DefaultVersionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersionInput"></a>

```go
func DefaultVersionInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableApiStopInput`<sup>Optional</sup> <a name="DisableApiStopInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStopInput"></a>

```go
func DisableApiStopInput() interface{}
```

- *Type:* interface{}

---

##### `DisableApiTerminationInput`<sup>Optional</sup> <a name="DisableApiTerminationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTerminationInput"></a>

```go
func DisableApiTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() *string
```

- *Type:* *string

---

##### `ElasticGpuSpecificationsInput`<sup>Optional</sup> <a name="ElasticGpuSpecificationsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticGpuSpecificationsInput"></a>

```go
func ElasticGpuSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticInferenceAcceleratorInput`<sup>Optional</sup> <a name="ElasticInferenceAcceleratorInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticInferenceAcceleratorInput"></a>

```go
func ElasticInferenceAcceleratorInput() LaunchTemplateElasticInferenceAccelerator
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

---

##### `EnclaveOptionsInput`<sup>Optional</sup> <a name="EnclaveOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptionsInput"></a>

```go
func EnclaveOptionsInput() LaunchTemplateEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---

##### `HibernationOptionsInput`<sup>Optional</sup> <a name="HibernationOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptionsInput"></a>

```go
func HibernationOptionsInput() LaunchTemplateHibernationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() LaunchTemplateIamInstanceProfile
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `InstanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehaviorInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehaviorInput"></a>

```go
func InstanceInitiatedShutdownBehaviorInput() *string
```

- *Type:* *string

---

##### `InstanceMarketOptionsInput`<sup>Optional</sup> <a name="InstanceMarketOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptionsInput"></a>

```go
func InstanceMarketOptionsInput() LaunchTemplateInstanceMarketOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---

##### `InstanceRequirementsInput`<sup>Optional</sup> <a name="InstanceRequirementsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirementsInput"></a>

```go
func InstanceRequirementsInput() LaunchTemplateInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `KernelIdInput`<sup>Optional</sup> <a name="KernelIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelIdInput"></a>

```go
func KernelIdInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `LicenseSpecificationInput`<sup>Optional</sup> <a name="LicenseSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecificationInput"></a>

```go
func LicenseSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceOptionsInput`<sup>Optional</sup> <a name="MaintenanceOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptionsInput"></a>

```go
func MaintenanceOptionsInput() LaunchTemplateMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptionsInput"></a>

```go
func MetadataOptionsInput() LaunchTemplateMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoringInput"></a>

```go
func MonitoringInput() LaunchTemplateMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfacesInput"></a>

```go
func NetworkInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placementInput"></a>

```go
func PlacementInput() LaunchTemplatePlacement
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---

##### `PrivateDnsNameOptionsInput`<sup>Optional</sup> <a name="PrivateDnsNameOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptionsInput"></a>

```go
func PrivateDnsNameOptionsInput() LaunchTemplatePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

---

##### `RamDiskIdInput`<sup>Optional</sup> <a name="RamDiskIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskIdInput"></a>

```go
func RamDiskIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupNamesInput`<sup>Optional</sup> <a name="SecurityGroupNamesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNamesInput"></a>

```go
func SecurityGroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecificationsInput"></a>

```go
func TagSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateDefaultVersionInput`<sup>Optional</sup> <a name="UpdateDefaultVersionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersionInput"></a>

```go
func UpdateDefaultVersionInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersion"></a>

```go
func DefaultVersion() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableApiStop`<sup>Required</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStop"></a>

```go
func DisableApiStop() interface{}
```

- *Type:* interface{}

---

##### `DisableApiTermination`<sup>Required</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTermination"></a>

```go
func DisableApiTermination() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimized"></a>

```go
func EbsOptimized() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehavior"></a>

```go
func InstanceInitiatedShutdownBehavior() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelId"></a>

```go
func KernelId() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `RamDiskId`<sup>Required</sup> <a name="RamDiskId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskId"></a>

```go
func RamDiskId() *string
```

- *Type:* *string

---

##### `SecurityGroupNames`<sup>Required</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNames"></a>

```go
func SecurityGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpdateDefaultVersion`<sup>Required</sup> <a name="UpdateDefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersion"></a>

```go
func UpdateDefaultVersion() interface{}
```

- *Type:* interface{}

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchTemplateBlockDeviceMappings <a name="LaunchTemplateBlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateBlockDeviceMappings {
	DeviceName: *string,
	Ebs: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs,
	NoDevice: *string,
	VirtualName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#device_name LaunchTemplate#device_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#no_device LaunchTemplate#no_device}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#virtual_name LaunchTemplate#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#device_name LaunchTemplate#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.ebs"></a>

```go
Ebs LaunchTemplateBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ebs LaunchTemplate#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.noDevice"></a>

```go
NoDevice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#no_device LaunchTemplate#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.virtualName"></a>

```go
VirtualName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#virtual_name LaunchTemplate#virtual_name}.

---

### LaunchTemplateBlockDeviceMappingsEbs <a name="LaunchTemplateBlockDeviceMappingsEbs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateBlockDeviceMappingsEbs {
	DeleteOnTermination: *string,
	Encrypted: *string,
	Iops: *f64,
	KmsKeyId: *string,
	SnapshotId: *string,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#encrypted LaunchTemplate#encrypted}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#iops LaunchTemplate#iops}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kms_key_id LaunchTemplate#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#snapshot_id LaunchTemplate#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#throughput LaunchTemplate#throughput}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_size LaunchTemplate#volume_size}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_type LaunchTemplate#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```go
DeleteOnTermination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.encrypted"></a>

```go
Encrypted *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#encrypted LaunchTemplate#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#iops LaunchTemplate#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kms_key_id LaunchTemplate#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#snapshot_id LaunchTemplate#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#throughput LaunchTemplate#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_size LaunchTemplate#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_type LaunchTemplate#volume_type}.

---

### LaunchTemplateCapacityReservationSpecification <a name="LaunchTemplateCapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateCapacityReservationSpecification {
	CapacityReservationPreference: *string,
	CapacityReservationTarget: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationPreference"></a>

```go
CapacityReservationPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}.

---

##### `CapacityReservationTarget`<sup>Optional</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationTarget"></a>

```go
CapacityReservationTarget LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_target LaunchTemplate#capacity_reservation_target}

---

### LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget <a name="LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
	CapacityReservationId: *string,
	CapacityReservationResourceGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_resource_group_arn LaunchTemplate#capacity_reservation_resource_group_arn}. |

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}.

---

##### `CapacityReservationResourceGroupArn`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```go
CapacityReservationResourceGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_resource_group_arn LaunchTemplate#capacity_reservation_resource_group_arn}.

---

### LaunchTemplateConfig <a name="LaunchTemplateConfig" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BlockDeviceMappings: interface{},
	CapacityReservationSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateCapacityReservationSpecification,
	CpuOptions: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateCpuOptions,
	CreditSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateCreditSpecification,
	DefaultVersion: *f64,
	Description: *string,
	DisableApiStop: interface{},
	DisableApiTermination: interface{},
	EbsOptimized: *string,
	ElasticGpuSpecifications: interface{},
	ElasticInferenceAccelerator: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator,
	EnclaveOptions: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateEnclaveOptions,
	HibernationOptions: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateHibernationOptions,
	IamInstanceProfile: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateIamInstanceProfile,
	Id: *string,
	ImageId: *string,
	InstanceInitiatedShutdownBehavior: *string,
	InstanceMarketOptions: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceMarketOptions,
	InstanceRequirements: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirements,
	InstanceType: *string,
	KernelId: *string,
	KeyName: *string,
	LicenseSpecification: interface{},
	MaintenanceOptions: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateMaintenanceOptions,
	MetadataOptions: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateMetadataOptions,
	Monitoring: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateMonitoring,
	Name: *string,
	NamePrefix: *string,
	NetworkInterfaces: interface{},
	Placement: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplatePlacement,
	PrivateDnsNameOptions: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions,
	RamDiskId: *string,
	SecurityGroupNames: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TagSpecifications: interface{},
	UpdateDefaultVersion: interface{},
	UserData: *string,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>interface{}</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | cpu_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.defaultVersion">DefaultVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#default_version LaunchTemplate#default_version}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiStop">DisableApiStop</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiTermination">DisableApiTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.elasticGpuSpecifications">ElasticGpuSpecifications</a></code> | <code>interface{}</code> | elastic_gpu_specifications block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.elasticInferenceAccelerator">ElasticInferenceAccelerator</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | elastic_inference_accelerator block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | hibernation_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | iam_instance_profile block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#id LaunchTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#image_id LaunchTemplate#image_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceMarketOptions">InstanceMarketOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | instance_market_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_type LaunchTemplate#instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.kernelId">KernelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kernel_id LaunchTemplate#kernel_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#key_name LaunchTemplate#key_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.licenseSpecification">LicenseSpecification</a></code> | <code>interface{}</code> | license_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name_prefix LaunchTemplate#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.networkInterfaces">NetworkInterfaces</a></code> | <code>interface{}</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ramDiskId">RamDiskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.securityGroupNames">SecurityGroupNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_group_names LaunchTemplate#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags_all LaunchTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagSpecifications">TagSpecifications</a></code> | <code>interface{}</code> | tag_specifications block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.updateDefaultVersion">UpdateDefaultVersion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#update_default_version LaunchTemplate#update_default_version}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#user_data LaunchTemplate#user_data}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.blockDeviceMappings"></a>

```go
BlockDeviceMappings interface{}
```

- *Type:* interface{}

block_device_mappings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#block_device_mappings LaunchTemplate#block_device_mappings}

---

##### `CapacityReservationSpecification`<sup>Optional</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.capacityReservationSpecification"></a>

```go
CapacityReservationSpecification LaunchTemplateCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}

---

##### `CpuOptions`<sup>Optional</sup> <a name="CpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.cpuOptions"></a>

```go
CpuOptions LaunchTemplateCpuOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

cpu_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_options LaunchTemplate#cpu_options}

---

##### `CreditSpecification`<sup>Optional</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.creditSpecification"></a>

```go
CreditSpecification LaunchTemplateCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#credit_specification LaunchTemplate#credit_specification}

---

##### `DefaultVersion`<sup>Optional</sup> <a name="DefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.defaultVersion"></a>

```go
DefaultVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#default_version LaunchTemplate#default_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}.

---

##### `DisableApiStop`<sup>Optional</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiStop"></a>

```go
DisableApiStop interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}.

---

##### `DisableApiTermination`<sup>Optional</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiTermination"></a>

```go
DisableApiTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ebsOptimized"></a>

```go
EbsOptimized *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}.

---

##### `ElasticGpuSpecifications`<sup>Optional</sup> <a name="ElasticGpuSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.elasticGpuSpecifications"></a>

```go
ElasticGpuSpecifications interface{}
```

- *Type:* interface{}

elastic_gpu_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}

---

##### `ElasticInferenceAccelerator`<sup>Optional</sup> <a name="ElasticInferenceAccelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.elasticInferenceAccelerator"></a>

```go
ElasticInferenceAccelerator LaunchTemplateElasticInferenceAccelerator
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

elastic_inference_accelerator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}

---

##### `EnclaveOptions`<sup>Optional</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.enclaveOptions"></a>

```go
EnclaveOptions LaunchTemplateEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enclave_options LaunchTemplate#enclave_options}

---

##### `HibernationOptions`<sup>Optional</sup> <a name="HibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.hibernationOptions"></a>

```go
HibernationOptions LaunchTemplateHibernationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

hibernation_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#hibernation_options LaunchTemplate#hibernation_options}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.iamInstanceProfile"></a>

```go
IamInstanceProfile LaunchTemplateIamInstanceProfile
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

iam_instance_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#iam_instance_profile LaunchTemplate#iam_instance_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#id LaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#image_id LaunchTemplate#image_id}.

---

##### `InstanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceInitiatedShutdownBehavior"></a>

```go
InstanceInitiatedShutdownBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}.

---

##### `InstanceMarketOptions`<sup>Optional</sup> <a name="InstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceMarketOptions"></a>

```go
InstanceMarketOptions LaunchTemplateInstanceMarketOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

instance_market_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_market_options LaunchTemplate#instance_market_options}

---

##### `InstanceRequirements`<sup>Optional</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceRequirements"></a>

```go
InstanceRequirements LaunchTemplateInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_requirements LaunchTemplate#instance_requirements}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_type LaunchTemplate#instance_type}.

---

##### `KernelId`<sup>Optional</sup> <a name="KernelId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.kernelId"></a>

```go
KernelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kernel_id LaunchTemplate#kernel_id}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#key_name LaunchTemplate#key_name}.

---

##### `LicenseSpecification`<sup>Optional</sup> <a name="LicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.licenseSpecification"></a>

```go
LicenseSpecification interface{}
```

- *Type:* interface{}

license_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#license_specification LaunchTemplate#license_specification}

---

##### `MaintenanceOptions`<sup>Optional</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.maintenanceOptions"></a>

```go
MaintenanceOptions LaunchTemplateMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#maintenance_options LaunchTemplate#maintenance_options}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.metadataOptions"></a>

```go
MetadataOptions LaunchTemplateMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#metadata_options LaunchTemplate#metadata_options}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.monitoring"></a>

```go
Monitoring LaunchTemplateMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#monitoring LaunchTemplate#monitoring}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name_prefix LaunchTemplate#name_prefix}.

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.networkInterfaces"></a>

```go
NetworkInterfaces interface{}
```

- *Type:* interface{}

network_interfaces block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interfaces LaunchTemplate#network_interfaces}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.placement"></a>

```go
Placement LaunchTemplatePlacement
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

placement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#placement LaunchTemplate#placement}

---

##### `PrivateDnsNameOptions`<sup>Optional</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.privateDnsNameOptions"></a>

```go
PrivateDnsNameOptions LaunchTemplatePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#private_dns_name_options LaunchTemplate#private_dns_name_options}

---

##### `RamDiskId`<sup>Optional</sup> <a name="RamDiskId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ramDiskId"></a>

```go
RamDiskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}.

---

##### `SecurityGroupNames`<sup>Optional</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.securityGroupNames"></a>

```go
SecurityGroupNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_group_names LaunchTemplate#security_group_names}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags_all LaunchTemplate#tags_all}.

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagSpecifications"></a>

```go
TagSpecifications interface{}
```

- *Type:* interface{}

tag_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tag_specifications LaunchTemplate#tag_specifications}

---

##### `UpdateDefaultVersion`<sup>Optional</sup> <a name="UpdateDefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.updateDefaultVersion"></a>

```go
UpdateDefaultVersion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#update_default_version LaunchTemplate#update_default_version}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#user_data LaunchTemplate#user_data}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}.

---

### LaunchTemplateCpuOptions <a name="LaunchTemplateCpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateCpuOptions {
	CoreCount: *f64,
	ThreadsPerCore: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.coreCount">CoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#core_count LaunchTemplate#core_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#threads_per_core LaunchTemplate#threads_per_core}. |

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.coreCount"></a>

```go
CoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#core_count LaunchTemplate#core_count}.

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.threadsPerCore"></a>

```go
ThreadsPerCore *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#threads_per_core LaunchTemplate#threads_per_core}.

---

### LaunchTemplateCreditSpecification <a name="LaunchTemplateCreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateCreditSpecification {
	CpuCredits: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_credits LaunchTemplate#cpu_credits}. |

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.property.cpuCredits"></a>

```go
CpuCredits *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_credits LaunchTemplate#cpu_credits}.

---

### LaunchTemplateElasticGpuSpecifications <a name="LaunchTemplateElasticGpuSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateElasticGpuSpecifications {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}.

---

### LaunchTemplateElasticInferenceAccelerator <a name="LaunchTemplateElasticInferenceAccelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateElasticInferenceAccelerator {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}.

---

### LaunchTemplateEnclaveOptions <a name="LaunchTemplateEnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateEnclaveOptions {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}.

---

### LaunchTemplateHibernationOptions <a name="LaunchTemplateHibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateHibernationOptions {
	Configured: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.property.configured">Configured</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#configured LaunchTemplate#configured}. |

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.property.configured"></a>

```go
Configured interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#configured LaunchTemplate#configured}.

---

### LaunchTemplateIamInstanceProfile <a name="LaunchTemplateIamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateIamInstanceProfile {
	Arn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#arn LaunchTemplate#arn}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#arn LaunchTemplate#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}.

---

### LaunchTemplateInstanceMarketOptions <a name="LaunchTemplateInstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceMarketOptions {
	MarketType: *string,
	SpotOptions: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.marketType">MarketType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#market_type LaunchTemplate#market_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | spot_options block. |

---

##### `MarketType`<sup>Optional</sup> <a name="MarketType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.marketType"></a>

```go
MarketType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#market_type LaunchTemplate#market_type}.

---

##### `SpotOptions`<sup>Optional</sup> <a name="SpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.spotOptions"></a>

```go
SpotOptions LaunchTemplateInstanceMarketOptionsSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_options LaunchTemplate#spot_options}

---

### LaunchTemplateInstanceMarketOptionsSpotOptions <a name="LaunchTemplateInstanceMarketOptionsSpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceMarketOptionsSpotOptions {
	BlockDurationMinutes: *f64,
	InstanceInterruptionBehavior: *string,
	MaxPrice: *string,
	SpotInstanceType: *string,
	ValidUntil: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.maxPrice">MaxPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max_price LaunchTemplate#max_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.spotInstanceType">SpotInstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.validUntil">ValidUntil</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#valid_until LaunchTemplate#valid_until}. |

---

##### `BlockDurationMinutes`<sup>Optional</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.blockDurationMinutes"></a>

```go
BlockDurationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}.

---

##### `InstanceInterruptionBehavior`<sup>Optional</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.instanceInterruptionBehavior"></a>

```go
InstanceInterruptionBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}.

---

##### `MaxPrice`<sup>Optional</sup> <a name="MaxPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.maxPrice"></a>

```go
MaxPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max_price LaunchTemplate#max_price}.

---

##### `SpotInstanceType`<sup>Optional</sup> <a name="SpotInstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.spotInstanceType"></a>

```go
SpotInstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}.

---

##### `ValidUntil`<sup>Optional</sup> <a name="ValidUntil" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.validUntil"></a>

```go
ValidUntil *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#valid_until LaunchTemplate#valid_until}.

---

### LaunchTemplateInstanceRequirements <a name="LaunchTemplateInstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirements {
	MemoryMib: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib,
	VcpuCount: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount,
	AcceleratorCount: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount,
	AcceleratorManufacturers: *[]*string,
	AcceleratorNames: *[]*string,
	AcceleratorTotalMemoryMib: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib,
	AcceleratorTypes: *[]*string,
	AllowedInstanceTypes: *[]*string,
	BareMetal: *string,
	BaselineEbsBandwidthMbps: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps,
	BurstablePerformance: *string,
	CpuManufacturers: *[]*string,
	ExcludedInstanceTypes: *[]*string,
	InstanceGenerations: *[]*string,
	LocalStorage: *string,
	LocalStorageTypes: *[]*string,
	MemoryGibPerVcpu: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu,
	NetworkBandwidthGbps: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps,
	NetworkInterfaceCount: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount,
	OnDemandMaxPricePercentageOverLowestPrice: *f64,
	RequireHibernateSupport: interface{},
	SpotMaxPricePercentageOverLowestPrice: *f64,
	TotalLocalStorageGb: github.com/cdktf/cdktf-provider-aws-go/aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_manufacturers LaunchTemplate#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorNames">AcceleratorNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_names LaunchTemplate#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_types LaunchTemplate#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#allowed_instance_types LaunchTemplate#allowed_instance_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.bareMetal">BareMetal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#bare_metal LaunchTemplate#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.burstablePerformance">BurstablePerformance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#burstable_performance LaunchTemplate#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.cpuManufacturers">CpuManufacturers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_manufacturers LaunchTemplate#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#excluded_instance_types LaunchTemplate#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.instanceGenerations">InstanceGenerations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_generations LaunchTemplate#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorage">LocalStorage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage LaunchTemplate#local_storage}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorageTypes">LocalStorageTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage_types LaunchTemplate#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a></code> | network_bandwidth_gbps block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#on_demand_max_price_percentage_over_lowest_price LaunchTemplate#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#require_hibernate_support LaunchTemplate#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_max_price_percentage_over_lowest_price LaunchTemplate#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |

---

##### `MemoryMib`<sup>Required</sup> <a name="MemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryMib"></a>

```go
MemoryMib LaunchTemplateInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#memory_mib LaunchTemplate#memory_mib}

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.vcpuCount"></a>

```go
VcpuCount LaunchTemplateInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vcpu_count LaunchTemplate#vcpu_count}

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorCount"></a>

```go
AcceleratorCount LaunchTemplateInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_count LaunchTemplate#accelerator_count}

---

##### `AcceleratorManufacturers`<sup>Optional</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorManufacturers"></a>

```go
AcceleratorManufacturers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_manufacturers LaunchTemplate#accelerator_manufacturers}.

---

##### `AcceleratorNames`<sup>Optional</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorNames"></a>

```go
AcceleratorNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_names LaunchTemplate#accelerator_names}.

---

##### `AcceleratorTotalMemoryMib`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```go
AcceleratorTotalMemoryMib LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_total_memory_mib LaunchTemplate#accelerator_total_memory_mib}

---

##### `AcceleratorTypes`<sup>Optional</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTypes"></a>

```go
AcceleratorTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_types LaunchTemplate#accelerator_types}.

---

##### `AllowedInstanceTypes`<sup>Optional</sup> <a name="AllowedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.allowedInstanceTypes"></a>

```go
AllowedInstanceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#allowed_instance_types LaunchTemplate#allowed_instance_types}.

---

##### `BareMetal`<sup>Optional</sup> <a name="BareMetal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.bareMetal"></a>

```go
BareMetal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#bare_metal LaunchTemplate#bare_metal}.

---

##### `BaselineEbsBandwidthMbps`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```go
BaselineEbsBandwidthMbps LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#baseline_ebs_bandwidth_mbps LaunchTemplate#baseline_ebs_bandwidth_mbps}

---

##### `BurstablePerformance`<sup>Optional</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.burstablePerformance"></a>

```go
BurstablePerformance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#burstable_performance LaunchTemplate#burstable_performance}.

---

##### `CpuManufacturers`<sup>Optional</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.cpuManufacturers"></a>

```go
CpuManufacturers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_manufacturers LaunchTemplate#cpu_manufacturers}.

---

##### `ExcludedInstanceTypes`<sup>Optional</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.excludedInstanceTypes"></a>

```go
ExcludedInstanceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#excluded_instance_types LaunchTemplate#excluded_instance_types}.

---

##### `InstanceGenerations`<sup>Optional</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.instanceGenerations"></a>

```go
InstanceGenerations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_generations LaunchTemplate#instance_generations}.

---

##### `LocalStorage`<sup>Optional</sup> <a name="LocalStorage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorage"></a>

```go
LocalStorage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage LaunchTemplate#local_storage}.

---

##### `LocalStorageTypes`<sup>Optional</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorageTypes"></a>

```go
LocalStorageTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage_types LaunchTemplate#local_storage_types}.

---

##### `MemoryGibPerVcpu`<sup>Optional</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryGibPerVcpu"></a>

```go
MemoryGibPerVcpu LaunchTemplateInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#memory_gib_per_vcpu LaunchTemplate#memory_gib_per_vcpu}

---

##### `NetworkBandwidthGbps`<sup>Optional</sup> <a name="NetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkBandwidthGbps"></a>

```go
NetworkBandwidthGbps LaunchTemplateInstanceRequirementsNetworkBandwidthGbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

network_bandwidth_gbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_bandwidth_gbps LaunchTemplate#network_bandwidth_gbps}

---

##### `NetworkInterfaceCount`<sup>Optional</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkInterfaceCount"></a>

```go
NetworkInterfaceCount LaunchTemplateInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interface_count LaunchTemplate#network_interface_count}

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```go
OnDemandMaxPricePercentageOverLowestPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#on_demand_max_price_percentage_over_lowest_price LaunchTemplate#on_demand_max_price_percentage_over_lowest_price}.

---

##### `RequireHibernateSupport`<sup>Optional</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.requireHibernateSupport"></a>

```go
RequireHibernateSupport interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#require_hibernate_support LaunchTemplate#require_hibernate_support}.

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```go
SpotMaxPricePercentageOverLowestPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_max_price_percentage_over_lowest_price LaunchTemplate#spot_max_price_percentage_over_lowest_price}.

---

##### `TotalLocalStorageGb`<sup>Optional</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.totalLocalStorageGb"></a>

```go
TotalLocalStorageGb LaunchTemplateInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#total_local_storage_gb LaunchTemplate#total_local_storage_gb}

---

### LaunchTemplateInstanceRequirementsAcceleratorCount <a name="LaunchTemplateInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsAcceleratorCount {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib <a name="LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps <a name="LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsMemoryGibPerVcpu <a name="LaunchTemplateInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsMemoryMib <a name="LaunchTemplateInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsMemoryMib {
	Min: *f64,
	Max: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

### LaunchTemplateInstanceRequirementsNetworkBandwidthGbps <a name="LaunchTemplateInstanceRequirementsNetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsNetworkInterfaceCount <a name="LaunchTemplateInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsTotalLocalStorageGb <a name="LaunchTemplateInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsVcpuCount <a name="LaunchTemplateInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateInstanceRequirementsVcpuCount {
	Min: *f64,
	Max: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

### LaunchTemplateLicenseSpecification <a name="LaunchTemplateLicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateLicenseSpecification {
	LicenseConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}. |

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.property.licenseConfigurationArn"></a>

```go
LicenseConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}.

---

### LaunchTemplateMaintenanceOptions <a name="LaunchTemplateMaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateMaintenanceOptions {
	AutoRecovery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#auto_recovery LaunchTemplate#auto_recovery}. |

---

##### `AutoRecovery`<sup>Optional</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.property.autoRecovery"></a>

```go
AutoRecovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#auto_recovery LaunchTemplate#auto_recovery}.

---

### LaunchTemplateMetadataOptions <a name="LaunchTemplateMetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateMetadataOptions {
	HttpEndpoint: *string,
	HttpProtocolIpv6: *string,
	HttpPutResponseHopLimit: *f64,
	HttpTokens: *string,
	InstanceMetadataTags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_endpoint LaunchTemplate#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_tokens LaunchTemplate#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpEndpoint"></a>

```go
HttpEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_endpoint LaunchTemplate#http_endpoint}.

---

##### `HttpProtocolIpv6`<sup>Optional</sup> <a name="HttpProtocolIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpProtocolIpv6"></a>

```go
HttpProtocolIpv6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}.

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_tokens LaunchTemplate#http_tokens}.

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.instanceMetadataTags"></a>

```go
InstanceMetadataTags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}.

---

### LaunchTemplateMonitoring <a name="LaunchTemplateMonitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateMonitoring {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}.

---

### LaunchTemplateNetworkInterfaces <a name="LaunchTemplateNetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateNetworkInterfaces {
	AssociateCarrierIpAddress: *string,
	AssociatePublicIpAddress: *string,
	DeleteOnTermination: *string,
	Description: *string,
	DeviceIndex: *f64,
	InterfaceType: *string,
	Ipv4AddressCount: *f64,
	Ipv4Addresses: *[]*string,
	Ipv4PrefixCount: *f64,
	Ipv4Prefixes: *[]*string,
	Ipv6AddressCount: *f64,
	Ipv6Addresses: *[]*string,
	Ipv6PrefixCount: *f64,
	Ipv6Prefixes: *[]*string,
	NetworkCardIndex: *f64,
	NetworkInterfaceId: *string,
	PrivateIpAddress: *string,
	SecurityGroups: *[]*string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associateCarrierIpAddress">AssociateCarrierIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#device_index LaunchTemplate#device_index}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.interfaceType">InterfaceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#interface_type LaunchTemplate#interface_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4AddressCount">Ipv4AddressCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_prefix_count LaunchTemplate#ipv4_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_prefixes LaunchTemplate#ipv4_prefixes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_prefix_count LaunchTemplate#ipv6_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_prefixes LaunchTemplate#ipv6_prefixes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkCardIndex">NetworkCardIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_card_index LaunchTemplate#network_card_index}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interface_id LaunchTemplate#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#private_ip_address LaunchTemplate#private_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_groups LaunchTemplate#security_groups}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#subnet_id LaunchTemplate#subnet_id}. |

---

##### `AssociateCarrierIpAddress`<sup>Optional</sup> <a name="AssociateCarrierIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associateCarrierIpAddress"></a>

```go
AssociateCarrierIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associatePublicIpAddress"></a>

```go
AssociatePublicIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deleteOnTermination"></a>

```go
DeleteOnTermination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}.

---

##### `DeviceIndex`<sup>Optional</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deviceIndex"></a>

```go
DeviceIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#device_index LaunchTemplate#device_index}.

---

##### `InterfaceType`<sup>Optional</sup> <a name="InterfaceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.interfaceType"></a>

```go
InterfaceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#interface_type LaunchTemplate#interface_type}.

---

##### `Ipv4AddressCount`<sup>Optional</sup> <a name="Ipv4AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4AddressCount"></a>

```go
Ipv4AddressCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}.

---

##### `Ipv4Addresses`<sup>Optional</sup> <a name="Ipv4Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Addresses"></a>

```go
Ipv4Addresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}.

---

##### `Ipv4PrefixCount`<sup>Optional</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4PrefixCount"></a>

```go
Ipv4PrefixCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_prefix_count LaunchTemplate#ipv4_prefix_count}.

---

##### `Ipv4Prefixes`<sup>Optional</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Prefixes"></a>

```go
Ipv4Prefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_prefixes LaunchTemplate#ipv4_prefixes}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6AddressCount"></a>

```go
Ipv6AddressCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Addresses"></a>

```go
Ipv6Addresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}.

---

##### `Ipv6PrefixCount`<sup>Optional</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6PrefixCount"></a>

```go
Ipv6PrefixCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_prefix_count LaunchTemplate#ipv6_prefix_count}.

---

##### `Ipv6Prefixes`<sup>Optional</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Prefixes"></a>

```go
Ipv6Prefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_prefixes LaunchTemplate#ipv6_prefixes}.

---

##### `NetworkCardIndex`<sup>Optional</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkCardIndex"></a>

```go
NetworkCardIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_card_index LaunchTemplate#network_card_index}.

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interface_id LaunchTemplate#network_interface_id}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.privateIpAddress"></a>

```go
PrivateIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#private_ip_address LaunchTemplate#private_ip_address}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_groups LaunchTemplate#security_groups}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#subnet_id LaunchTemplate#subnet_id}.

---

### LaunchTemplatePlacement <a name="LaunchTemplatePlacement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplatePlacement {
	Affinity: *string,
	AvailabilityZone: *string,
	GroupName: *string,
	HostId: *string,
	HostResourceGroupArn: *string,
	PartitionNumber: *f64,
	SpreadDomain: *string,
	Tenancy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.affinity">Affinity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#affinity LaunchTemplate#affinity}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#availability_zone LaunchTemplate#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#group_name LaunchTemplate#group_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostId">HostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_id LaunchTemplate#host_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.partitionNumber">PartitionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#partition_number LaunchTemplate#partition_number}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.spreadDomain">SpreadDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spread_domain LaunchTemplate#spread_domain}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.tenancy">Tenancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tenancy LaunchTemplate#tenancy}. |

---

##### `Affinity`<sup>Optional</sup> <a name="Affinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.affinity"></a>

```go
Affinity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#affinity LaunchTemplate#affinity}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#availability_zone LaunchTemplate#availability_zone}.

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#group_name LaunchTemplate#group_name}.

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostId"></a>

```go
HostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_id LaunchTemplate#host_id}.

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostResourceGroupArn"></a>

```go
HostResourceGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}.

---

##### `PartitionNumber`<sup>Optional</sup> <a name="PartitionNumber" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.partitionNumber"></a>

```go
PartitionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#partition_number LaunchTemplate#partition_number}.

---

##### `SpreadDomain`<sup>Optional</sup> <a name="SpreadDomain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.spreadDomain"></a>

```go
SpreadDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spread_domain LaunchTemplate#spread_domain}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tenancy LaunchTemplate#tenancy}.

---

### LaunchTemplatePrivateDnsNameOptions <a name="LaunchTemplatePrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplatePrivateDnsNameOptions {
	EnableResourceNameDnsAaaaRecord: interface{},
	EnableResourceNameDnsARecord: interface{},
	HostnameType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_aaaa_record LaunchTemplate#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_a_record LaunchTemplate#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.hostnameType">HostnameType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#hostname_type LaunchTemplate#hostname_type}. |

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```go
EnableResourceNameDnsAaaaRecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_aaaa_record LaunchTemplate#enable_resource_name_dns_aaaa_record}.

---

##### `EnableResourceNameDnsARecord`<sup>Optional</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```go
EnableResourceNameDnsARecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_a_record LaunchTemplate#enable_resource_name_dns_a_record}.

---

##### `HostnameType`<sup>Optional</sup> <a name="HostnameType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.hostnameType"></a>

```go
HostnameType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#hostname_type LaunchTemplate#hostname_type}.

---

### LaunchTemplateTagSpecifications <a name="LaunchTemplateTagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

&launchtemplate.LaunchTemplateTagSpecifications {
	ResourceType: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#resource_type LaunchTemplate#resource_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#resource_type LaunchTemplate#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LaunchTemplateBlockDeviceMappingsEbsOutputReference <a name="LaunchTemplateBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---


### LaunchTemplateBlockDeviceMappingsList <a name="LaunchTemplateBlockDeviceMappingsList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LaunchTemplateBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) LaunchTemplateBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplateBlockDeviceMappingsOutputReference <a name="LaunchTemplateBlockDeviceMappingsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LaunchTemplateBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs"></a>

```go
func PutEbs(value LaunchTemplateBlockDeviceMappingsEbs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetEbs"></a>

```go
func ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```go
func ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```go
func ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference">LaunchTemplateBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() LaunchTemplateBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference">LaunchTemplateBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```go
func EbsInput() LaunchTemplateBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```go
func NoDeviceInput() *string
```

- *Type:* *string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```go
func VirtualNameInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">ResetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetCapacityReservationResourceGroupArn` <a name="ResetCapacityReservationResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```go
func ResetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">CapacityReservationResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArnInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```go
func CapacityReservationResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```go
func CapacityReservationResourceGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---


### LaunchTemplateCapacityReservationSpecificationOutputReference <a name="LaunchTemplateCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateCapacityReservationSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateCapacityReservationSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">PutCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">ResetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">ResetCapacityReservationTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationTarget` <a name="PutCapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```go
func PutCapacityReservationTarget(value LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```go
func ResetCapacityReservationPreference()
```

##### `ResetCapacityReservationTarget` <a name="ResetCapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```go
func ResetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference">LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">CapacityReservationTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference">LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```go
func CapacityReservationPreferenceInput() *string
```

- *Type:* *string

---

##### `CapacityReservationTargetInput`<sup>Optional</sup> <a name="CapacityReservationTargetInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```go
func CapacityReservationTargetInput() LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---


### LaunchTemplateCpuOptionsOutputReference <a name="LaunchTemplateCpuOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateCpuOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateCpuOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetCoreCount"></a>

```go
func ResetCoreCount()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetThreadsPerCore"></a>

```go
func ResetThreadsPerCore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCountInput"></a>

```go
func CoreCountInput() *f64
```

- *Type:* *f64

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```go
func ThreadsPerCoreInput() *f64
```

- *Type:* *f64

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateCpuOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---


### LaunchTemplateCreditSpecificationOutputReference <a name="LaunchTemplateCreditSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateCreditSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateCreditSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resetCpuCredits">ResetCpuCredits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resetCpuCredits"></a>

```go
func ResetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```go
func CpuCreditsInput() *string
```

- *Type:* *string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCredits"></a>

```go
func CpuCredits() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---


### LaunchTemplateElasticGpuSpecificationsList <a name="LaunchTemplateElasticGpuSpecificationsList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateElasticGpuSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LaunchTemplateElasticGpuSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get"></a>

```go
func Get(index *f64) LaunchTemplateElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplateElasticGpuSpecificationsOutputReference <a name="LaunchTemplateElasticGpuSpecificationsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateElasticGpuSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LaunchTemplateElasticGpuSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplateElasticInferenceAcceleratorOutputReference <a name="LaunchTemplateElasticInferenceAcceleratorOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateElasticInferenceAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateElasticInferenceAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateElasticInferenceAccelerator
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

---


### LaunchTemplateEnclaveOptionsOutputReference <a name="LaunchTemplateEnclaveOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateEnclaveOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateEnclaveOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---


### LaunchTemplateHibernationOptionsOutputReference <a name="LaunchTemplateHibernationOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateHibernationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateHibernationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configuredInput">ConfiguredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configured">Configured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfiguredInput`<sup>Optional</sup> <a name="ConfiguredInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configuredInput"></a>

```go
func ConfiguredInput() interface{}
```

- *Type:* interface{}

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configured"></a>

```go
func Configured() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateHibernationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---


### LaunchTemplateIamInstanceProfileOutputReference <a name="LaunchTemplateIamInstanceProfileOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateIamInstanceProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateIamInstanceProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateIamInstanceProfile
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---


### LaunchTemplateInstanceMarketOptionsOutputReference <a name="LaunchTemplateInstanceMarketOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceMarketOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceMarketOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions">PutSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetMarketType">ResetMarketType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetSpotOptions">ResetSpotOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpotOptions` <a name="PutSpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions"></a>

```go
func PutSpotOptions(value LaunchTemplateInstanceMarketOptionsSpotOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---

##### `ResetMarketType` <a name="ResetMarketType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetMarketType"></a>

```go
func ResetMarketType()
```

##### `ResetSpotOptions` <a name="ResetSpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetSpotOptions"></a>

```go
func ResetSpotOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference">LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketTypeInput">MarketTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptionsInput">SpotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketType">MarketType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```go
func SpotOptions() LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference">LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference</a>

---

##### `MarketTypeInput`<sup>Optional</sup> <a name="MarketTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketTypeInput"></a>

```go
func MarketTypeInput() *string
```

- *Type:* *string

---

##### `SpotOptionsInput`<sup>Optional</sup> <a name="SpotOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptionsInput"></a>

```go
func SpotOptionsInput() LaunchTemplateInstanceMarketOptionsSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---

##### `MarketType`<sup>Required</sup> <a name="MarketType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketType"></a>

```go
func MarketType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceMarketOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---


### LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference <a name="LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetBlockDurationMinutes">ResetBlockDurationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetInstanceInterruptionBehavior">ResetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetMaxPrice">ResetMaxPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetSpotInstanceType">ResetSpotInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetValidUntil">ResetValidUntil</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockDurationMinutes` <a name="ResetBlockDurationMinutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetBlockDurationMinutes"></a>

```go
func ResetBlockDurationMinutes()
```

##### `ResetInstanceInterruptionBehavior` <a name="ResetInstanceInterruptionBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetInstanceInterruptionBehavior"></a>

```go
func ResetInstanceInterruptionBehavior()
```

##### `ResetMaxPrice` <a name="ResetMaxPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetMaxPrice"></a>

```go
func ResetMaxPrice()
```

##### `ResetSpotInstanceType` <a name="ResetSpotInstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetSpotInstanceType"></a>

```go
func ResetSpotInstanceType()
```

##### `ResetValidUntil` <a name="ResetValidUntil" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetValidUntil"></a>

```go
func ResetValidUntil()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutesInput">BlockDurationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput">InstanceInterruptionBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPriceInput">MaxPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceTypeInput">SpotInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntilInput">ValidUntilInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">MaxPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">SpotInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">ValidUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockDurationMinutesInput`<sup>Optional</sup> <a name="BlockDurationMinutesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutesInput"></a>

```go
func BlockDurationMinutesInput() *f64
```

- *Type:* *f64

---

##### `InstanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="InstanceInterruptionBehaviorInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput"></a>

```go
func InstanceInterruptionBehaviorInput() *string
```

- *Type:* *string

---

##### `MaxPriceInput`<sup>Optional</sup> <a name="MaxPriceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPriceInput"></a>

```go
func MaxPriceInput() *string
```

- *Type:* *string

---

##### `SpotInstanceTypeInput`<sup>Optional</sup> <a name="SpotInstanceTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceTypeInput"></a>

```go
func SpotInstanceTypeInput() *string
```

- *Type:* *string

---

##### `ValidUntilInput`<sup>Optional</sup> <a name="ValidUntilInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntilInput"></a>

```go
func ValidUntilInput() *string
```

- *Type:* *string

---

##### `BlockDurationMinutes`<sup>Required</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```go
func BlockDurationMinutes() *f64
```

- *Type:* *f64

---

##### `InstanceInterruptionBehavior`<sup>Required</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```go
func InstanceInterruptionBehavior() *string
```

- *Type:* *string

---

##### `MaxPrice`<sup>Required</sup> <a name="MaxPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```go
func MaxPrice() *string
```

- *Type:* *string

---

##### `SpotInstanceType`<sup>Required</sup> <a name="SpotInstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```go
func SpotInstanceType() *string
```

- *Type:* *string

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```go
func ValidUntil() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceMarketOptionsSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---


### LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference <a name="LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

---


### LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---


### LaunchTemplateInstanceRequirementsMemoryMibOutputReference <a name="LaunchTemplateInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsMemoryMibOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsMemoryMibOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resetMax">ResetMax</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```go
func ResetMax()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

---


### LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsNetworkBandwidthGbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

---


### LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference <a name="LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---


### LaunchTemplateInstanceRequirementsOutputReference <a name="LaunchTemplateInstanceRequirementsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount">PutAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">PutAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">PutBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu">PutMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib">PutMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkBandwidthGbps">PutNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount">PutNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb">PutTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount">PutVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorManufacturers">ResetAcceleratorManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorNames">ResetAcceleratorNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">ResetAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTypes">ResetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAllowedInstanceTypes">ResetAllowedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBareMetal">ResetBareMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">ResetBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBurstablePerformance">ResetBurstablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetCpuManufacturers">ResetCpuManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetExcludedInstanceTypes">ResetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetInstanceGenerations">ResetInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorage">ResetLocalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorageTypes">ResetLocalStorageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">ResetMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkBandwidthGbps">ResetNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkInterfaceCount">ResetNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">ResetOnDemandMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetRequireHibernateSupport">ResetRequireHibernateSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">ResetSpotMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetTotalLocalStorageGb">ResetTotalLocalStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorCount` <a name="PutAcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```go
func PutAcceleratorCount(value LaunchTemplateInstanceRequirementsAcceleratorCount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

---

##### `PutAcceleratorTotalMemoryMib` <a name="PutAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```go
func PutAcceleratorTotalMemoryMib(value LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `PutBaselineEbsBandwidthMbps` <a name="PutBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```go
func PutBaselineEbsBandwidthMbps(value LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `PutMemoryGibPerVcpu` <a name="PutMemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```go
func PutMemoryGibPerVcpu(value LaunchTemplateInstanceRequirementsMemoryGibPerVcpu)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `PutMemoryMib` <a name="PutMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib"></a>

```go
func PutMemoryMib(value LaunchTemplateInstanceRequirementsMemoryMib)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

---

##### `PutNetworkBandwidthGbps` <a name="PutNetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkBandwidthGbps"></a>

```go
func PutNetworkBandwidthGbps(value LaunchTemplateInstanceRequirementsNetworkBandwidthGbps)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkBandwidthGbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

---

##### `PutNetworkInterfaceCount` <a name="PutNetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```go
func PutNetworkInterfaceCount(value LaunchTemplateInstanceRequirementsNetworkInterfaceCount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---

##### `PutTotalLocalStorageGb` <a name="PutTotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```go
func PutTotalLocalStorageGb(value LaunchTemplateInstanceRequirementsTotalLocalStorageGb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---

##### `PutVcpuCount` <a name="PutVcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount"></a>

```go
func PutVcpuCount(value LaunchTemplateInstanceRequirementsVcpuCount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorManufacturers` <a name="ResetAcceleratorManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```go
func ResetAcceleratorManufacturers()
```

##### `ResetAcceleratorNames` <a name="ResetAcceleratorNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```go
func ResetAcceleratorNames()
```

##### `ResetAcceleratorTotalMemoryMib` <a name="ResetAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```go
func ResetAcceleratorTotalMemoryMib()
```

##### `ResetAcceleratorTypes` <a name="ResetAcceleratorTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```go
func ResetAcceleratorTypes()
```

##### `ResetAllowedInstanceTypes` <a name="ResetAllowedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```go
func ResetAllowedInstanceTypes()
```

##### `ResetBareMetal` <a name="ResetBareMetal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBareMetal"></a>

```go
func ResetBareMetal()
```

##### `ResetBaselineEbsBandwidthMbps` <a name="ResetBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```go
func ResetBaselineEbsBandwidthMbps()
```

##### `ResetBurstablePerformance` <a name="ResetBurstablePerformance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```go
func ResetBurstablePerformance()
```

##### `ResetCpuManufacturers` <a name="ResetCpuManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```go
func ResetCpuManufacturers()
```

##### `ResetExcludedInstanceTypes` <a name="ResetExcludedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```go
func ResetExcludedInstanceTypes()
```

##### `ResetInstanceGenerations` <a name="ResetInstanceGenerations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```go
func ResetInstanceGenerations()
```

##### `ResetLocalStorage` <a name="ResetLocalStorage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorage"></a>

```go
func ResetLocalStorage()
```

##### `ResetLocalStorageTypes` <a name="ResetLocalStorageTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```go
func ResetLocalStorageTypes()
```

##### `ResetMemoryGibPerVcpu` <a name="ResetMemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```go
func ResetMemoryGibPerVcpu()
```

##### `ResetNetworkBandwidthGbps` <a name="ResetNetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkBandwidthGbps"></a>

```go
func ResetNetworkBandwidthGbps()
```

##### `ResetNetworkInterfaceCount` <a name="ResetNetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```go
func ResetNetworkInterfaceCount()
```

##### `ResetOnDemandMaxPricePercentageOverLowestPrice` <a name="ResetOnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```go
func ResetOnDemandMaxPricePercentageOverLowestPrice()
```

##### `ResetRequireHibernateSupport` <a name="ResetRequireHibernateSupport" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```go
func ResetRequireHibernateSupport()
```

##### `ResetSpotMaxPricePercentageOverLowestPrice` <a name="ResetSpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```go
func ResetSpotMaxPricePercentageOverLowestPrice()
```

##### `ResetTotalLocalStorageGb` <a name="ResetTotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```go
func ResetTotalLocalStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference">LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference">LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference">LaunchTemplateInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference">LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference">LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference">LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference">LaunchTemplateInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">AcceleratorManufacturersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNamesInput">AcceleratorNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">AcceleratorTotalMemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypesInput">AcceleratorTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">AllowedInstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetalInput">BareMetalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">BaselineEbsBandwidthMbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformanceInput">BurstablePerformanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturersInput">CpuManufacturersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">ExcludedInstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerationsInput">InstanceGenerationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageInput">LocalStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypesInput">LocalStorageTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">MemoryGibPerVcpuInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMibInput">MemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbpsInput">NetworkBandwidthGbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCountInput">NetworkInterfaceCountInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">OnDemandMaxPricePercentageOverLowestPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupportInput">RequireHibernateSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">SpotMaxPricePercentageOverLowestPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">TotalLocalStorageGbInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCountInput">VcpuCountInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames">AcceleratorNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetal">BareMetal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance">BurstablePerformance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers">CpuManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations">InstanceGenerations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorage">LocalStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes">LocalStorageTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference">LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `AcceleratorTotalMemoryMib`<sup>Required</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```go
func AcceleratorTotalMemoryMib() LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `BaselineEbsBandwidthMbps`<sup>Required</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```go
func BaselineEbsBandwidthMbps() LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `MemoryGibPerVcpu`<sup>Required</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```go
func MemoryGibPerVcpu() LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference">LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `MemoryMib`<sup>Required</sup> <a name="MemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMib"></a>

```go
func MemoryMib() LaunchTemplateInstanceRequirementsMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference">LaunchTemplateInstanceRequirementsMemoryMibOutputReference</a>

---

##### `NetworkBandwidthGbps`<sup>Required</sup> <a name="NetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```go
func NetworkBandwidthGbps() LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference">LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `NetworkInterfaceCount`<sup>Required</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```go
func NetworkInterfaceCount() LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference">LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `TotalLocalStorageGb`<sup>Required</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```go
func TotalLocalStorageGb() LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference">LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount"></a>

```go
func VcpuCount() LaunchTemplateInstanceRequirementsVcpuCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference">LaunchTemplateInstanceRequirementsVcpuCountOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() LaunchTemplateInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

---

##### `AcceleratorManufacturersInput`<sup>Optional</sup> <a name="AcceleratorManufacturersInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```go
func AcceleratorManufacturersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorNamesInput`<sup>Optional</sup> <a name="AcceleratorNamesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```go
func AcceleratorNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorTotalMemoryMibInput`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMibInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```go
func AcceleratorTotalMemoryMibInput() LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `AcceleratorTypesInput`<sup>Optional</sup> <a name="AcceleratorTypesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```go
func AcceleratorTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedInstanceTypesInput`<sup>Optional</sup> <a name="AllowedInstanceTypesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```go
func AllowedInstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BareMetalInput`<sup>Optional</sup> <a name="BareMetalInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```go
func BareMetalInput() *string
```

- *Type:* *string

---

##### `BaselineEbsBandwidthMbpsInput`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbpsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```go
func BaselineEbsBandwidthMbpsInput() LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `BurstablePerformanceInput`<sup>Optional</sup> <a name="BurstablePerformanceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```go
func BurstablePerformanceInput() *string
```

- *Type:* *string

---

##### `CpuManufacturersInput`<sup>Optional</sup> <a name="CpuManufacturersInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```go
func CpuManufacturersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedInstanceTypesInput`<sup>Optional</sup> <a name="ExcludedInstanceTypesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```go
func ExcludedInstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceGenerationsInput`<sup>Optional</sup> <a name="InstanceGenerationsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```go
func InstanceGenerationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocalStorageInput`<sup>Optional</sup> <a name="LocalStorageInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageInput"></a>

```go
func LocalStorageInput() *string
```

- *Type:* *string

---

##### `LocalStorageTypesInput`<sup>Optional</sup> <a name="LocalStorageTypesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```go
func LocalStorageTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MemoryGibPerVcpuInput`<sup>Optional</sup> <a name="MemoryGibPerVcpuInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```go
func MemoryGibPerVcpuInput() LaunchTemplateInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `MemoryMibInput`<sup>Optional</sup> <a name="MemoryMibInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```go
func MemoryMibInput() LaunchTemplateInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

---

##### `NetworkBandwidthGbpsInput`<sup>Optional</sup> <a name="NetworkBandwidthGbpsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbpsInput"></a>

```go
func NetworkBandwidthGbpsInput() LaunchTemplateInstanceRequirementsNetworkBandwidthGbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

---

##### `NetworkInterfaceCountInput`<sup>Optional</sup> <a name="NetworkInterfaceCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```go
func NetworkInterfaceCountInput() LaunchTemplateInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---

##### `OnDemandMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```go
func OnDemandMaxPricePercentageOverLowestPriceInput() *f64
```

- *Type:* *f64

---

##### `RequireHibernateSupportInput`<sup>Optional</sup> <a name="RequireHibernateSupportInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```go
func RequireHibernateSupportInput() interface{}
```

- *Type:* interface{}

---

##### `SpotMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```go
func SpotMaxPricePercentageOverLowestPriceInput() *f64
```

- *Type:* *f64

---

##### `TotalLocalStorageGbInput`<sup>Optional</sup> <a name="TotalLocalStorageGbInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```go
func TotalLocalStorageGbInput() LaunchTemplateInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---

##### `VcpuCountInput`<sup>Optional</sup> <a name="VcpuCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```go
func VcpuCountInput() LaunchTemplateInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

---

##### `AcceleratorManufacturers`<sup>Required</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```go
func AcceleratorManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorNames`<sup>Required</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```go
func AcceleratorNames() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```go
func AcceleratorTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```go
func AllowedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `BareMetal`<sup>Required</sup> <a name="BareMetal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetal"></a>

```go
func BareMetal() *string
```

- *Type:* *string

---

##### `BurstablePerformance`<sup>Required</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```go
func BurstablePerformance() *string
```

- *Type:* *string

---

##### `CpuManufacturers`<sup>Required</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```go
func CpuManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```go
func ExcludedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceGenerations`<sup>Required</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```go
func InstanceGenerations() *[]*string
```

- *Type:* *[]*string

---

##### `LocalStorage`<sup>Required</sup> <a name="LocalStorage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorage"></a>

```go
func LocalStorage() *string
```

- *Type:* *string

---

##### `LocalStorageTypes`<sup>Required</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```go
func LocalStorageTypes() *[]*string
```

- *Type:* *[]*string

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```go
func OnDemandMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `RequireHibernateSupport`<sup>Required</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```go
func RequireHibernateSupport() interface{}
```

- *Type:* interface{}

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```go
func SpotMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

---


### LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference <a name="LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---


### LaunchTemplateInstanceRequirementsVcpuCountOutputReference <a name="LaunchTemplateInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateInstanceRequirementsVcpuCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateInstanceRequirementsVcpuCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```go
func ResetMax()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

---


### LaunchTemplateLicenseSpecificationList <a name="LaunchTemplateLicenseSpecificationList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateLicenseSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LaunchTemplateLicenseSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get"></a>

```go
func Get(index *f64) LaunchTemplateLicenseSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplateLicenseSpecificationOutputReference <a name="LaunchTemplateLicenseSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateLicenseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LaunchTemplateLicenseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArnInput">LicenseConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArnInput`<sup>Optional</sup> <a name="LicenseConfigurationArnInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArnInput"></a>

```go
func LicenseConfigurationArnInput() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn"></a>

```go
func LicenseConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplateMaintenanceOptionsOutputReference <a name="LaunchTemplateMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateMaintenanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateMaintenanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resetAutoRecovery">ResetAutoRecovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRecovery` <a name="ResetAutoRecovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```go
func ResetAutoRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecoveryInput">AutoRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRecoveryInput`<sup>Optional</sup> <a name="AutoRecoveryInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```go
func AutoRecoveryInput() *string
```

- *Type:* *string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```go
func AutoRecovery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

---


### LaunchTemplateMetadataOptionsOutputReference <a name="LaunchTemplateMetadataOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpProtocolIpv6">ResetHttpProtocolIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetInstanceMetadataTags">ResetInstanceMetadataTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetHttpProtocolIpv6` <a name="ResetHttpProtocolIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```go
func ResetHttpProtocolIpv6()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpTokens"></a>

```go
func ResetHttpTokens()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```go
func ResetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6Input">HttpProtocolIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() *string
```

- *Type:* *string

---

##### `HttpProtocolIpv6Input`<sup>Optional</sup> <a name="HttpProtocolIpv6Input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```go
func HttpProtocolIpv6Input() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```go
func InstanceMetadataTagsInput() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpProtocolIpv6`<sup>Required</sup> <a name="HttpProtocolIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```go
func HttpProtocolIpv6() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```go
func InstanceMetadataTags() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---


### LaunchTemplateMonitoringOutputReference <a name="LaunchTemplateMonitoringOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplateMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplateMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---


### LaunchTemplateNetworkInterfacesList <a name="LaunchTemplateNetworkInterfacesList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LaunchTemplateNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get"></a>

```go
func Get(index *f64) LaunchTemplateNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplateNetworkInterfacesOutputReference <a name="LaunchTemplateNetworkInterfacesOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LaunchTemplateNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress">ResetAssociateCarrierIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeviceIndex">ResetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetInterfaceType">ResetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4AddressCount">ResetIpv4AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Addresses">ResetIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4PrefixCount">ResetIpv4PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Prefixes">ResetIpv4Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6PrefixCount">ResetIpv6PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Prefixes">ResetIpv6Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkCardIndex">ResetNetworkCardIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssociateCarrierIpAddress` <a name="ResetAssociateCarrierIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress"></a>

```go
func ResetAssociateCarrierIpAddress()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```go
func ResetAssociatePublicIpAddress()
```

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeviceIndex` <a name="ResetDeviceIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```go
func ResetDeviceIndex()
```

##### `ResetInterfaceType` <a name="ResetInterfaceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetInterfaceType"></a>

```go
func ResetInterfaceType()
```

##### `ResetIpv4AddressCount` <a name="ResetIpv4AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4AddressCount"></a>

```go
func ResetIpv4AddressCount()
```

##### `ResetIpv4Addresses` <a name="ResetIpv4Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Addresses"></a>

```go
func ResetIpv4Addresses()
```

##### `ResetIpv4PrefixCount` <a name="ResetIpv4PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4PrefixCount"></a>

```go
func ResetIpv4PrefixCount()
```

##### `ResetIpv4Prefixes` <a name="ResetIpv4Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Prefixes"></a>

```go
func ResetIpv4Prefixes()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```go
func ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```go
func ResetIpv6Addresses()
```

##### `ResetIpv6PrefixCount` <a name="ResetIpv6PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6PrefixCount"></a>

```go
func ResetIpv6PrefixCount()
```

##### `ResetIpv6Prefixes` <a name="ResetIpv6Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Prefixes"></a>

```go
func ResetIpv6Prefixes()
```

##### `ResetNetworkCardIndex` <a name="ResetNetworkCardIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkCardIndex"></a>

```go
func ResetNetworkCardIndex()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```go
func ResetNetworkInterfaceId()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```go
func ResetPrivateIpAddress()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput">AssociateCarrierIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceTypeInput">InterfaceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCountInput">Ipv4AddressCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressesInput">Ipv4AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCountInput">Ipv4PrefixCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixesInput">Ipv4PrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCountInput">Ipv6PrefixCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixesInput">Ipv6PrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndexInput">NetworkCardIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress">AssociateCarrierIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceType">InterfaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount">Ipv4AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociateCarrierIpAddressInput`<sup>Optional</sup> <a name="AssociateCarrierIpAddressInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput"></a>

```go
func AssociateCarrierIpAddressInput() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```go
func AssociatePublicIpAddressInput() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```go
func DeviceIndexInput() *f64
```

- *Type:* *f64

---

##### `InterfaceTypeInput`<sup>Optional</sup> <a name="InterfaceTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceTypeInput"></a>

```go
func InterfaceTypeInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressCountInput`<sup>Optional</sup> <a name="Ipv4AddressCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCountInput"></a>

```go
func Ipv4AddressCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv4AddressesInput`<sup>Optional</sup> <a name="Ipv4AddressesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressesInput"></a>

```go
func Ipv4AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4PrefixCountInput`<sup>Optional</sup> <a name="Ipv4PrefixCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCountInput"></a>

```go
func Ipv4PrefixCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv4PrefixesInput`<sup>Optional</sup> <a name="Ipv4PrefixesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixesInput"></a>

```go
func Ipv4PrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```go
func Ipv6AddressCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```go
func Ipv6AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6PrefixCountInput`<sup>Optional</sup> <a name="Ipv6PrefixCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCountInput"></a>

```go
func Ipv6PrefixCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv6PrefixesInput`<sup>Optional</sup> <a name="Ipv6PrefixesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixesInput"></a>

```go
func Ipv6PrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkCardIndexInput`<sup>Optional</sup> <a name="NetworkCardIndexInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndexInput"></a>

```go
func NetworkCardIndexInput() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```go
func PrivateIpAddressInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `AssociateCarrierIpAddress`<sup>Required</sup> <a name="AssociateCarrierIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```go
func AssociateCarrierIpAddress() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `InterfaceType`<sup>Required</sup> <a name="InterfaceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceType"></a>

```go
func InterfaceType() *string
```

- *Type:* *string

---

##### `Ipv4AddressCount`<sup>Required</sup> <a name="Ipv4AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount"></a>

```go
func Ipv4AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses"></a>

```go
func Ipv4Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4PrefixCount`<sup>Required</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount"></a>

```go
func Ipv4PrefixCount() *f64
```

- *Type:* *f64

---

##### `Ipv4Prefixes`<sup>Required</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes"></a>

```go
func Ipv4Prefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6PrefixCount`<sup>Required</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount"></a>

```go
func Ipv6PrefixCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Prefixes`<sup>Required</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes"></a>

```go
func Ipv6Prefixes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```go
func NetworkCardIndex() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplatePlacementOutputReference <a name="LaunchTemplatePlacementOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplatePlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplatePlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAffinity">ResetAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostResourceGroupArn">ResetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetPartitionNumber">ResetPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetSpreadDomain">ResetSpreadDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetTenancy">ResetTenancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAffinity` <a name="ResetAffinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAffinity"></a>

```go
func ResetAffinity()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostId"></a>

```go
func ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostResourceGroupArn"></a>

```go
func ResetHostResourceGroupArn()
```

##### `ResetPartitionNumber` <a name="ResetPartitionNumber" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetPartitionNumber"></a>

```go
func ResetPartitionNumber()
```

##### `ResetSpreadDomain` <a name="ResetSpreadDomain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetSpreadDomain"></a>

```go
func ResetSpreadDomain()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetTenancy"></a>

```go
func ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinityInput">AffinityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostIdInput">HostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumberInput">PartitionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomainInput">SpreadDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinity">Affinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumber">PartitionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomain">SpreadDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AffinityInput`<sup>Optional</sup> <a name="AffinityInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinityInput"></a>

```go
func AffinityInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostIdInput"></a>

```go
func HostIdInput() *string
```

- *Type:* *string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArnInput"></a>

```go
func HostResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `PartitionNumberInput`<sup>Optional</sup> <a name="PartitionNumberInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumberInput"></a>

```go
func PartitionNumberInput() *f64
```

- *Type:* *f64

---

##### `SpreadDomainInput`<sup>Optional</sup> <a name="SpreadDomainInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomainInput"></a>

```go
func SpreadDomainInput() *string
```

- *Type:* *string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `Affinity`<sup>Required</sup> <a name="Affinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinity"></a>

```go
func Affinity() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArn"></a>

```go
func HostResourceGroupArn() *string
```

- *Type:* *string

---

##### `PartitionNumber`<sup>Required</sup> <a name="PartitionNumber" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumber"></a>

```go
func PartitionNumber() *f64
```

- *Type:* *f64

---

##### `SpreadDomain`<sup>Required</sup> <a name="SpreadDomain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomain"></a>

```go
func SpreadDomain() *string
```

- *Type:* *string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplatePlacement
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---


### LaunchTemplatePrivateDnsNameOptionsOutputReference <a name="LaunchTemplatePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplatePrivateDnsNameOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LaunchTemplatePrivateDnsNameOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">ResetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">ResetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetHostnameType">ResetHostnameType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResourceNameDnsAaaaRecord` <a name="ResetEnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```go
func ResetEnableResourceNameDnsAaaaRecord()
```

##### `ResetEnableResourceNameDnsARecord` <a name="ResetEnableResourceNameDnsARecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```go
func ResetEnableResourceNameDnsARecord()
```

##### `ResetHostnameType` <a name="ResetHostnameType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```go
func ResetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">EnableResourceNameDnsAaaaRecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">EnableResourceNameDnsARecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">HostnameTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```go
func EnableResourceNameDnsAaaaRecordInput() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```go
func EnableResourceNameDnsARecordInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameTypeInput`<sup>Optional</sup> <a name="HostnameTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```go
func HostnameTypeInput() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```go
func EnableResourceNameDnsAaaaRecord() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```go
func EnableResourceNameDnsARecord() interface{}
```

- *Type:* interface{}

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```go
func HostnameType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LaunchTemplatePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

---


### LaunchTemplateTagSpecificationsList <a name="LaunchTemplateTagSpecificationsList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateTagSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LaunchTemplateTagSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get"></a>

```go
func Get(index *f64) LaunchTemplateTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LaunchTemplateTagSpecificationsOutputReference <a name="LaunchTemplateTagSpecificationsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/launchtemplate"

launchtemplate.NewLaunchTemplateTagSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LaunchTemplateTagSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



