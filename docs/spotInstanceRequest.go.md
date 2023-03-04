# `spotInstanceRequest` Submodule <a name="`spotInstanceRequest` Submodule" id="@cdktf/provider-aws.spotInstanceRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotInstanceRequest <a name="SpotInstanceRequest" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request aws_spot_instance_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequest(scope Construct, id *string, config SpotInstanceRequestConfig) SpotInstanceRequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig">SpotInstanceRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig">SpotInstanceRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification">PutCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification">PutCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice">PutEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions">PutEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice">PutEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions">PutMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions">PutPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice">PutRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAmi">ResetAmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetBlockDurationMinutes">ResetBlockDurationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCapacityReservationSpecification">ResetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuThreadsPerCore">ResetCpuThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCreditSpecification">ResetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiStop">ResetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiTermination">ResetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsBlockDevice">ResetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEnclaveOptions">ResetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEphemeralBlockDevice">ResetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetFetchPasswordData">ResetFetchPasswordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHibernation">ResetHibernation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostResourceGroupArn">ResetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInitiatedShutdownBehavior">ResetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInterruptionBehavior">ResetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchGroup">ResetLaunchGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMaintenanceOptions">ResetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementGroup">ResetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementPartitionNumber">ResetPlacementPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateDnsNameOptions">ResetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetRootBlockDevice">ResetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecondaryPrivateIps">ResetSecondaryPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSourceDestCheck">ResetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotPrice">ResetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotType">ResetSpotType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataBase64">ResetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataReplaceOnChange">ResetUserDataReplaceOnChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidFrom">ResetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidUntil">ResetValidUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVolumeTags">ResetVolumeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetWaitForFulfillment">ResetWaitForFulfillment</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCapacityReservationSpecification` <a name="PutCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification"></a>

```go
func PutCapacityReservationSpecification(value SpotInstanceRequestCapacityReservationSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---

##### `PutCreditSpecification` <a name="PutCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification"></a>

```go
func PutCreditSpecification(value SpotInstanceRequestCreditSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---

##### `PutEbsBlockDevice` <a name="PutEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice"></a>

```go
func PutEbsBlockDevice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnclaveOptions` <a name="PutEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions"></a>

```go
func PutEnclaveOptions(value SpotInstanceRequestEnclaveOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---

##### `PutEphemeralBlockDevice` <a name="PutEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice"></a>

```go
func PutEphemeralBlockDevice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate"></a>

```go
func PutLaunchTemplate(value SpotInstanceRequestLaunchTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---

##### `PutMaintenanceOptions` <a name="PutMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions"></a>

```go
func PutMaintenanceOptions(value SpotInstanceRequestMaintenanceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions"></a>

```go
func PutMetadataOptions(value SpotInstanceRequestMetadataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrivateDnsNameOptions` <a name="PutPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions"></a>

```go
func PutPrivateDnsNameOptions(value SpotInstanceRequestPrivateDnsNameOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---

##### `PutRootBlockDevice` <a name="PutRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice"></a>

```go
func PutRootBlockDevice(value SpotInstanceRequestRootBlockDevice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts"></a>

```go
func PutTimeouts(value SpotInstanceRequestTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

---

##### `ResetAmi` <a name="ResetAmi" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAmi"></a>

```go
func ResetAmi()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAssociatePublicIpAddress"></a>

```go
func ResetAssociatePublicIpAddress()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBlockDurationMinutes` <a name="ResetBlockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetBlockDurationMinutes"></a>

```go
func ResetBlockDurationMinutes()
```

##### `ResetCapacityReservationSpecification` <a name="ResetCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCapacityReservationSpecification"></a>

```go
func ResetCapacityReservationSpecification()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuCoreCount"></a>

```go
func ResetCpuCoreCount()
```

##### `ResetCpuThreadsPerCore` <a name="ResetCpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuThreadsPerCore"></a>

```go
func ResetCpuThreadsPerCore()
```

##### `ResetCreditSpecification` <a name="ResetCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCreditSpecification"></a>

```go
func ResetCreditSpecification()
```

##### `ResetDisableApiStop` <a name="ResetDisableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiStop"></a>

```go
func ResetDisableApiStop()
```

##### `ResetDisableApiTermination` <a name="ResetDisableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiTermination"></a>

```go
func ResetDisableApiTermination()
```

##### `ResetEbsBlockDevice` <a name="ResetEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsBlockDevice"></a>

```go
func ResetEbsBlockDevice()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetEnclaveOptions` <a name="ResetEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEnclaveOptions"></a>

```go
func ResetEnclaveOptions()
```

##### `ResetEphemeralBlockDevice` <a name="ResetEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEphemeralBlockDevice"></a>

```go
func ResetEphemeralBlockDevice()
```

##### `ResetFetchPasswordData` <a name="ResetFetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetFetchPasswordData"></a>

```go
func ResetFetchPasswordData()
```

##### `ResetHibernation` <a name="ResetHibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHibernation"></a>

```go
func ResetHibernation()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostId"></a>

```go
func ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostResourceGroupArn"></a>

```go
func ResetHostResourceGroupArn()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIamInstanceProfile"></a>

```go
func ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceInitiatedShutdownBehavior` <a name="ResetInstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInitiatedShutdownBehavior"></a>

```go
func ResetInstanceInitiatedShutdownBehavior()
```

##### `ResetInstanceInterruptionBehavior` <a name="ResetInstanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInterruptionBehavior"></a>

```go
func ResetInstanceInterruptionBehavior()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6AddressCount"></a>

```go
func ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6Addresses"></a>

```go
func ResetIpv6Addresses()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetLaunchGroup` <a name="ResetLaunchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchGroup"></a>

```go
func ResetLaunchGroup()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchTemplate"></a>

```go
func ResetLaunchTemplate()
```

##### `ResetMaintenanceOptions` <a name="ResetMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMaintenanceOptions"></a>

```go
func ResetMaintenanceOptions()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMetadataOptions"></a>

```go
func ResetMetadataOptions()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetPlacementGroup` <a name="ResetPlacementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementGroup"></a>

```go
func ResetPlacementGroup()
```

##### `ResetPlacementPartitionNumber` <a name="ResetPlacementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementPartitionNumber"></a>

```go
func ResetPlacementPartitionNumber()
```

##### `ResetPrivateDnsNameOptions` <a name="ResetPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateDnsNameOptions"></a>

```go
func ResetPrivateDnsNameOptions()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetRootBlockDevice` <a name="ResetRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetRootBlockDevice"></a>

```go
func ResetRootBlockDevice()
```

##### `ResetSecondaryPrivateIps` <a name="ResetSecondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecondaryPrivateIps"></a>

```go
func ResetSecondaryPrivateIps()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSourceDestCheck` <a name="ResetSourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSourceDestCheck"></a>

```go
func ResetSourceDestCheck()
```

##### `ResetSpotPrice` <a name="ResetSpotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotPrice"></a>

```go
func ResetSpotPrice()
```

##### `ResetSpotType` <a name="ResetSpotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotType"></a>

```go
func ResetSpotType()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTenancy"></a>

```go
func ResetTenancy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetUserDataBase64` <a name="ResetUserDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataBase64"></a>

```go
func ResetUserDataBase64()
```

##### `ResetUserDataReplaceOnChange` <a name="ResetUserDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataReplaceOnChange"></a>

```go
func ResetUserDataReplaceOnChange()
```

##### `ResetValidFrom` <a name="ResetValidFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidFrom"></a>

```go
func ResetValidFrom()
```

##### `ResetValidUntil` <a name="ResetValidUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidUntil"></a>

```go
func ResetValidUntil()
```

##### `ResetVolumeTags` <a name="ResetVolumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVolumeTags"></a>

```go
func ResetVolumeTags()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

##### `ResetWaitForFulfillment` <a name="ResetWaitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetWaitForFulfillment"></a>

```go
func ResetWaitForFulfillment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.SpotInstanceRequest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.SpotInstanceRequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.SpotInstanceRequest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference">SpotInstanceRequestCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference">SpotInstanceRequestCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList">SpotInstanceRequestEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference">SpotInstanceRequestEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList">SpotInstanceRequestEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceState">InstanceState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference">SpotInstanceRequestLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference">SpotInstanceRequestMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference">SpotInstanceRequestMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList">SpotInstanceRequestNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.passwordData">PasswordData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.primaryNetworkInterfaceId">PrimaryNetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDns">PrivateDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference">SpotInstanceRequestPrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicDns">PublicDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDevice">RootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference">SpotInstanceRequestRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotBidStatus">SpotBidStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotInstanceId">SpotInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotRequestState">SpotRequestState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference">SpotInstanceRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.amiInput">AmiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutesInput">BlockDurationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecificationInput">CapacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCoreInput">CpuThreadsPerCoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecificationInput">CreditSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStopInput">DisableApiStopInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTerminationInput">DisableApiTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDeviceInput">EbsBlockDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptionsInput">EnclaveOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDeviceInput">EphemeralBlockDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordDataInput">FetchPasswordDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernationInput">HibernationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostIdInput">HostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehaviorInput">InstanceInitiatedShutdownBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehaviorInput">InstanceInterruptionBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroupInput">LaunchGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptionsInput">MaintenanceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoringInput">MonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroupInput">PlacementGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumberInput">PlacementPartitionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptionsInput">PrivateDnsNameOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDeviceInput">RootBlockDeviceInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIpsInput">SecondaryPrivateIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheckInput">SourceDestCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPriceInput">SpotPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotTypeInput">SpotTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64Input">UserDataBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChangeInput">UserDataReplaceOnChangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFromInput">ValidFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntilInput">ValidUntilInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTagsInput">VolumeTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillmentInput">WaitForFulfillmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ami">Ami</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCore">CpuThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStop">DisableApiStop</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTermination">DisableApiTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordData">FetchPasswordData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernation">Hibernation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroup">LaunchGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoring">Monitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroup">PlacementGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumber">PlacementPartitionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIps">SecondaryPrivateIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheck">SourceDestCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPrice">SpotPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotType">SpotType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64">UserDataBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChange">UserDataReplaceOnChange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFrom">ValidFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntil">ValidUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTags">VolumeTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillment">WaitForFulfillment</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecification"></a>

```go
func CapacityReservationSpecification() SpotInstanceRequestCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference">SpotInstanceRequestCapacityReservationSpecificationOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecification"></a>

```go
func CreditSpecification() SpotInstanceRequestCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference">SpotInstanceRequestCreditSpecificationOutputReference</a>

---

##### `EbsBlockDevice`<sup>Required</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDevice"></a>

```go
func EbsBlockDevice() SpotInstanceRequestEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList">SpotInstanceRequestEbsBlockDeviceList</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptions"></a>

```go
func EnclaveOptions() SpotInstanceRequestEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference">SpotInstanceRequestEnclaveOptionsOutputReference</a>

---

##### `EphemeralBlockDevice`<sup>Required</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDevice"></a>

```go
func EphemeralBlockDevice() SpotInstanceRequestEphemeralBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList">SpotInstanceRequestEphemeralBlockDeviceList</a>

---

##### `InstanceState`<sup>Required</sup> <a name="InstanceState" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceState"></a>

```go
func InstanceState() *string
```

- *Type:* *string

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplate"></a>

```go
func LaunchTemplate() SpotInstanceRequestLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference">SpotInstanceRequestLaunchTemplateOutputReference</a>

---

##### `MaintenanceOptions`<sup>Required</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptions"></a>

```go
func MaintenanceOptions() SpotInstanceRequestMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference">SpotInstanceRequestMaintenanceOptionsOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptions"></a>

```go
func MetadataOptions() SpotInstanceRequestMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference">SpotInstanceRequestMetadataOptionsOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterface"></a>

```go
func NetworkInterface() SpotInstanceRequestNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList">SpotInstanceRequestNetworkInterfaceList</a>

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `PasswordData`<sup>Required</sup> <a name="PasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.passwordData"></a>

```go
func PasswordData() *string
```

- *Type:* *string

---

##### `PrimaryNetworkInterfaceId`<sup>Required</sup> <a name="PrimaryNetworkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.primaryNetworkInterfaceId"></a>

```go
func PrimaryNetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateDns`<sup>Required</sup> <a name="PrivateDns" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDns"></a>

```go
func PrivateDns() *string
```

- *Type:* *string

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptions"></a>

```go
func PrivateDnsNameOptions() SpotInstanceRequestPrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference">SpotInstanceRequestPrivateDnsNameOptionsOutputReference</a>

---

##### `PublicDns`<sup>Required</sup> <a name="PublicDns" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicDns"></a>

```go
func PublicDns() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `RootBlockDevice`<sup>Required</sup> <a name="RootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDevice"></a>

```go
func RootBlockDevice() SpotInstanceRequestRootBlockDeviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference">SpotInstanceRequestRootBlockDeviceOutputReference</a>

---

##### `SpotBidStatus`<sup>Required</sup> <a name="SpotBidStatus" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotBidStatus"></a>

```go
func SpotBidStatus() *string
```

- *Type:* *string

---

##### `SpotInstanceId`<sup>Required</sup> <a name="SpotInstanceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotInstanceId"></a>

```go
func SpotInstanceId() *string
```

- *Type:* *string

---

##### `SpotRequestState`<sup>Required</sup> <a name="SpotRequestState" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotRequestState"></a>

```go
func SpotRequestState() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeouts"></a>

```go
func Timeouts() SpotInstanceRequestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference">SpotInstanceRequestTimeoutsOutputReference</a>

---

##### `AmiInput`<sup>Optional</sup> <a name="AmiInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.amiInput"></a>

```go
func AmiInput() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddressInput"></a>

```go
func AssociatePublicIpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BlockDurationMinutesInput`<sup>Optional</sup> <a name="BlockDurationMinutesInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutesInput"></a>

```go
func BlockDurationMinutesInput() *f64
```

- *Type:* *f64

---

##### `CapacityReservationSpecificationInput`<sup>Optional</sup> <a name="CapacityReservationSpecificationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecificationInput"></a>

```go
func CapacityReservationSpecificationInput() SpotInstanceRequestCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `CpuThreadsPerCoreInput`<sup>Optional</sup> <a name="CpuThreadsPerCoreInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCoreInput"></a>

```go
func CpuThreadsPerCoreInput() *f64
```

- *Type:* *f64

---

##### `CreditSpecificationInput`<sup>Optional</sup> <a name="CreditSpecificationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecificationInput"></a>

```go
func CreditSpecificationInput() SpotInstanceRequestCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---

##### `DisableApiStopInput`<sup>Optional</sup> <a name="DisableApiStopInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStopInput"></a>

```go
func DisableApiStopInput() interface{}
```

- *Type:* interface{}

---

##### `DisableApiTerminationInput`<sup>Optional</sup> <a name="DisableApiTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTerminationInput"></a>

```go
func DisableApiTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `EbsBlockDeviceInput`<sup>Optional</sup> <a name="EbsBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDeviceInput"></a>

```go
func EbsBlockDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `EnclaveOptionsInput`<sup>Optional</sup> <a name="EnclaveOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptionsInput"></a>

```go
func EnclaveOptionsInput() SpotInstanceRequestEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---

##### `EphemeralBlockDeviceInput`<sup>Optional</sup> <a name="EphemeralBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDeviceInput"></a>

```go
func EphemeralBlockDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `FetchPasswordDataInput`<sup>Optional</sup> <a name="FetchPasswordDataInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordDataInput"></a>

```go
func FetchPasswordDataInput() interface{}
```

- *Type:* interface{}

---

##### `HibernationInput`<sup>Optional</sup> <a name="HibernationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernationInput"></a>

```go
func HibernationInput() interface{}
```

- *Type:* interface{}

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostIdInput"></a>

```go
func HostIdInput() *string
```

- *Type:* *string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArnInput"></a>

```go
func HostResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehaviorInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehaviorInput"></a>

```go
func InstanceInitiatedShutdownBehaviorInput() *string
```

- *Type:* *string

---

##### `InstanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="InstanceInterruptionBehaviorInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehaviorInput"></a>

```go
func InstanceInterruptionBehaviorInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCountInput"></a>

```go
func Ipv6AddressCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressesInput"></a>

```go
func Ipv6AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `LaunchGroupInput`<sup>Optional</sup> <a name="LaunchGroupInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroupInput"></a>

```go
func LaunchGroupInput() *string
```

- *Type:* *string

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplateInput"></a>

```go
func LaunchTemplateInput() SpotInstanceRequestLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---

##### `MaintenanceOptionsInput`<sup>Optional</sup> <a name="MaintenanceOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptionsInput"></a>

```go
func MaintenanceOptionsInput() SpotInstanceRequestMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptionsInput"></a>

```go
func MetadataOptionsInput() SpotInstanceRequestMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoringInput"></a>

```go
func MonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementGroupInput`<sup>Optional</sup> <a name="PlacementGroupInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroupInput"></a>

```go
func PlacementGroupInput() *string
```

- *Type:* *string

---

##### `PlacementPartitionNumberInput`<sup>Optional</sup> <a name="PlacementPartitionNumberInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumberInput"></a>

```go
func PlacementPartitionNumberInput() *f64
```

- *Type:* *f64

---

##### `PrivateDnsNameOptionsInput`<sup>Optional</sup> <a name="PrivateDnsNameOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptionsInput"></a>

```go
func PrivateDnsNameOptionsInput() SpotInstanceRequestPrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `RootBlockDeviceInput`<sup>Optional</sup> <a name="RootBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDeviceInput"></a>

```go
func RootBlockDeviceInput() SpotInstanceRequestRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---

##### `SecondaryPrivateIpsInput`<sup>Optional</sup> <a name="SecondaryPrivateIpsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIpsInput"></a>

```go
func SecondaryPrivateIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDestCheckInput`<sup>Optional</sup> <a name="SourceDestCheckInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheckInput"></a>

```go
func SourceDestCheckInput() interface{}
```

- *Type:* interface{}

---

##### `SpotPriceInput`<sup>Optional</sup> <a name="SpotPriceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPriceInput"></a>

```go
func SpotPriceInput() *string
```

- *Type:* *string

---

##### `SpotTypeInput`<sup>Optional</sup> <a name="SpotTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotTypeInput"></a>

```go
func SpotTypeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataBase64Input`<sup>Optional</sup> <a name="UserDataBase64Input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64Input"></a>

```go
func UserDataBase64Input() *string
```

- *Type:* *string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `UserDataReplaceOnChangeInput`<sup>Optional</sup> <a name="UserDataReplaceOnChangeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChangeInput"></a>

```go
func UserDataReplaceOnChangeInput() interface{}
```

- *Type:* interface{}

---

##### `ValidFromInput`<sup>Optional</sup> <a name="ValidFromInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFromInput"></a>

```go
func ValidFromInput() *string
```

- *Type:* *string

---

##### `ValidUntilInput`<sup>Optional</sup> <a name="ValidUntilInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntilInput"></a>

```go
func ValidUntilInput() *string
```

- *Type:* *string

---

##### `VolumeTagsInput`<sup>Optional</sup> <a name="VolumeTagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTagsInput"></a>

```go
func VolumeTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WaitForFulfillmentInput`<sup>Optional</sup> <a name="WaitForFulfillmentInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillmentInput"></a>

```go
func WaitForFulfillmentInput() interface{}
```

- *Type:* interface{}

---

##### `Ami`<sup>Required</sup> <a name="Ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ami"></a>

```go
func Ami() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BlockDurationMinutes`<sup>Required</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutes"></a>

```go
func BlockDurationMinutes() *f64
```

- *Type:* *f64

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CpuThreadsPerCore`<sup>Required</sup> <a name="CpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCore"></a>

```go
func CpuThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `DisableApiStop`<sup>Required</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStop"></a>

```go
func DisableApiStop() interface{}
```

- *Type:* interface{}

---

##### `DisableApiTermination`<sup>Required</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTermination"></a>

```go
func DisableApiTermination() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimized"></a>

```go
func EbsOptimized() interface{}
```

- *Type:* interface{}

---

##### `FetchPasswordData`<sup>Required</sup> <a name="FetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordData"></a>

```go
func FetchPasswordData() interface{}
```

- *Type:* interface{}

---

##### `Hibernation`<sup>Required</sup> <a name="Hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernation"></a>

```go
func Hibernation() interface{}
```

- *Type:* interface{}

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArn"></a>

```go
func HostResourceGroupArn() *string
```

- *Type:* *string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehavior"></a>

```go
func InstanceInitiatedShutdownBehavior() *string
```

- *Type:* *string

---

##### `InstanceInterruptionBehavior`<sup>Required</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehavior"></a>

```go
func InstanceInterruptionBehavior() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `LaunchGroup`<sup>Required</sup> <a name="LaunchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroup"></a>

```go
func LaunchGroup() *string
```

- *Type:* *string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoring"></a>

```go
func Monitoring() interface{}
```

- *Type:* interface{}

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroup"></a>

```go
func PlacementGroup() *string
```

- *Type:* *string

---

##### `PlacementPartitionNumber`<sup>Required</sup> <a name="PlacementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumber"></a>

```go
func PlacementPartitionNumber() *f64
```

- *Type:* *f64

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `SecondaryPrivateIps`<sup>Required</sup> <a name="SecondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIps"></a>

```go
func SecondaryPrivateIps() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDestCheck`<sup>Required</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheck"></a>

```go
func SourceDestCheck() interface{}
```

- *Type:* interface{}

---

##### `SpotPrice`<sup>Required</sup> <a name="SpotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPrice"></a>

```go
func SpotPrice() *string
```

- *Type:* *string

---

##### `SpotType`<sup>Required</sup> <a name="SpotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotType"></a>

```go
func SpotType() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `UserDataBase64`<sup>Required</sup> <a name="UserDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64"></a>

```go
func UserDataBase64() *string
```

- *Type:* *string

---

##### `UserDataReplaceOnChange`<sup>Required</sup> <a name="UserDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChange"></a>

```go
func UserDataReplaceOnChange() interface{}
```

- *Type:* interface{}

---

##### `ValidFrom`<sup>Required</sup> <a name="ValidFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFrom"></a>

```go
func ValidFrom() *string
```

- *Type:* *string

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntil"></a>

```go
func ValidUntil() *string
```

- *Type:* *string

---

##### `VolumeTags`<sup>Required</sup> <a name="VolumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTags"></a>

```go
func VolumeTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `WaitForFulfillment`<sup>Required</sup> <a name="WaitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillment"></a>

```go
func WaitForFulfillment() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpotInstanceRequestCapacityReservationSpecification <a name="SpotInstanceRequestCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestCapacityReservationSpecification {
	CapacityReservationPreference: *string,
	CapacityReservationTarget: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationPreference"></a>

```go
CapacityReservationPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}.

---

##### `CapacityReservationTarget`<sup>Optional</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationTarget"></a>

```go
CapacityReservationTarget SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}

---

### SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget <a name="SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget {
	CapacityReservationId: *string,
	CapacityReservationResourceGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}. |

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}.

---

##### `CapacityReservationResourceGroupArn`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```go
CapacityReservationResourceGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}.

---

### SpotInstanceRequestConfig <a name="SpotInstanceRequestConfig" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Ami: *string,
	AssociatePublicIpAddress: interface{},
	AvailabilityZone: *string,
	BlockDurationMinutes: *f64,
	CapacityReservationSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification,
	CpuCoreCount: *f64,
	CpuThreadsPerCore: *f64,
	CreditSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification,
	DisableApiStop: interface{},
	DisableApiTermination: interface{},
	EbsBlockDevice: interface{},
	EbsOptimized: interface{},
	EnclaveOptions: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions,
	EphemeralBlockDevice: interface{},
	FetchPasswordData: interface{},
	Hibernation: interface{},
	HostId: *string,
	HostResourceGroupArn: *string,
	IamInstanceProfile: *string,
	Id: *string,
	InstanceInitiatedShutdownBehavior: *string,
	InstanceInterruptionBehavior: *string,
	InstanceType: *string,
	Ipv6AddressCount: *f64,
	Ipv6Addresses: *[]*string,
	KeyName: *string,
	LaunchGroup: *string,
	LaunchTemplate: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate,
	MaintenanceOptions: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions,
	MetadataOptions: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions,
	Monitoring: interface{},
	NetworkInterface: interface{},
	PlacementGroup: *string,
	PlacementPartitionNumber: *f64,
	PrivateDnsNameOptions: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions,
	PrivateIp: *string,
	RootBlockDevice: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice,
	SecondaryPrivateIps: *[]*string,
	SecurityGroups: *[]*string,
	SourceDestCheck: interface{},
	SpotPrice: *string,
	SpotType: *string,
	SubnetId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Tenancy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.spotInstanceRequest.SpotInstanceRequestTimeouts,
	UserData: *string,
	UserDataBase64: *string,
	UserDataReplaceOnChange: interface{},
	ValidFrom: *string,
	ValidUntil: *string,
	VolumeTags: *map[string]*string,
	VpcSecurityGroupIds: *[]*string,
	WaitForFulfillment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ami">Ami</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuThreadsPerCore">CpuThreadsPerCore</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiStop">DisableApiStop</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiTermination">DisableApiTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code>interface{}</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code>interface{}</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.fetchPasswordData">FetchPasswordData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hibernation">Hibernation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostId">HostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchGroup">LaunchGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.monitoring">Monitoring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementGroup">PlacementGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementPartitionNumber">PlacementPartitionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.rootBlockDevice">RootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.secondaryPrivateIps">SecondaryPrivateIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.sourceDestCheck">SourceDestCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotPrice">SpotPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotType">SpotType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tenancy">Tenancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataBase64">UserDataBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataReplaceOnChange">UserDataReplaceOnChange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validFrom">ValidFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validUntil">ValidUntil</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.volumeTags">VolumeTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.waitForFulfillment">WaitForFulfillment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ami`<sup>Optional</sup> <a name="Ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ami"></a>

```go
Ami *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.associatePublicIpAddress"></a>

```go
AssociatePublicIpAddress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}.

---

##### `BlockDurationMinutes`<sup>Optional</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.blockDurationMinutes"></a>

```go
BlockDurationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}.

---

##### `CapacityReservationSpecification`<sup>Optional</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.capacityReservationSpecification"></a>

```go
CapacityReservationSpecification SpotInstanceRequestCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}.

---

##### `CpuThreadsPerCore`<sup>Optional</sup> <a name="CpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuThreadsPerCore"></a>

```go
CpuThreadsPerCore *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}.

---

##### `CreditSpecification`<sup>Optional</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.creditSpecification"></a>

```go
CreditSpecification SpotInstanceRequestCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#credit_specification SpotInstanceRequest#credit_specification}

---

##### `DisableApiStop`<sup>Optional</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiStop"></a>

```go
DisableApiStop interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}.

---

##### `DisableApiTermination`<sup>Optional</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiTermination"></a>

```go
DisableApiTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}.

---

##### `EbsBlockDevice`<sup>Optional</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsBlockDevice"></a>

```go
EbsBlockDevice interface{}
```

- *Type:* interface{}

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_block_device SpotInstanceRequest#ebs_block_device}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsOptimized"></a>

```go
EbsOptimized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}.

---

##### `EnclaveOptions`<sup>Optional</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.enclaveOptions"></a>

```go
EnclaveOptions SpotInstanceRequestEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enclave_options SpotInstanceRequest#enclave_options}

---

##### `EphemeralBlockDevice`<sup>Optional</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ephemeralBlockDevice"></a>

```go
EphemeralBlockDevice interface{}
```

- *Type:* interface{}

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}

---

##### `FetchPasswordData`<sup>Optional</sup> <a name="FetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.fetchPasswordData"></a>

```go
FetchPasswordData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}.

---

##### `Hibernation`<sup>Optional</sup> <a name="Hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hibernation"></a>

```go
Hibernation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}.

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostId"></a>

```go
HostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}.

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostResourceGroupArn"></a>

```go
HostResourceGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.iamInstanceProfile"></a>

```go
IamInstanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInitiatedShutdownBehavior"></a>

```go
InstanceInitiatedShutdownBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}.

---

##### `InstanceInterruptionBehavior`<sup>Optional</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInterruptionBehavior"></a>

```go
InstanceInterruptionBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6AddressCount"></a>

```go
Ipv6AddressCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6Addresses"></a>

```go
Ipv6Addresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}.

---

##### `LaunchGroup`<sup>Optional</sup> <a name="LaunchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchGroup"></a>

```go
LaunchGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}.

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchTemplate"></a>

```go
LaunchTemplate SpotInstanceRequestLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_template SpotInstanceRequest#launch_template}

---

##### `MaintenanceOptions`<sup>Optional</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.maintenanceOptions"></a>

```go
MaintenanceOptions SpotInstanceRequestMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#maintenance_options SpotInstanceRequest#maintenance_options}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.metadataOptions"></a>

```go
MetadataOptions SpotInstanceRequestMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#metadata_options SpotInstanceRequest#metadata_options}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.monitoring"></a>

```go
Monitoring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface SpotInstanceRequest#network_interface}

---

##### `PlacementGroup`<sup>Optional</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementGroup"></a>

```go
PlacementGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}.

---

##### `PlacementPartitionNumber`<sup>Optional</sup> <a name="PlacementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementPartitionNumber"></a>

```go
PlacementPartitionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}.

---

##### `PrivateDnsNameOptions`<sup>Optional</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateDnsNameOptions"></a>

```go
PrivateDnsNameOptions SpotInstanceRequestPrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_dns_name_options SpotInstanceRequest#private_dns_name_options}

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}.

---

##### `RootBlockDevice`<sup>Optional</sup> <a name="RootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.rootBlockDevice"></a>

```go
RootBlockDevice SpotInstanceRequestRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#root_block_device SpotInstanceRequest#root_block_device}

---

##### `SecondaryPrivateIps`<sup>Optional</sup> <a name="SecondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.secondaryPrivateIps"></a>

```go
SecondaryPrivateIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}.

---

##### `SourceDestCheck`<sup>Optional</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.sourceDestCheck"></a>

```go
SourceDestCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}.

---

##### `SpotPrice`<sup>Optional</sup> <a name="SpotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotPrice"></a>

```go
SpotPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}.

---

##### `SpotType`<sup>Optional</sup> <a name="SpotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotType"></a>

```go
SpotType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.timeouts"></a>

```go
Timeouts SpotInstanceRequestTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#timeouts SpotInstanceRequest#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}.

---

##### `UserDataBase64`<sup>Optional</sup> <a name="UserDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataBase64"></a>

```go
UserDataBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}.

---

##### `UserDataReplaceOnChange`<sup>Optional</sup> <a name="UserDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataReplaceOnChange"></a>

```go
UserDataReplaceOnChange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}.

---

##### `ValidFrom`<sup>Optional</sup> <a name="ValidFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validFrom"></a>

```go
ValidFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}.

---

##### `ValidUntil`<sup>Optional</sup> <a name="ValidUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validUntil"></a>

```go
ValidUntil *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}.

---

##### `VolumeTags`<sup>Optional</sup> <a name="VolumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.volumeTags"></a>

```go
VolumeTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}.

---

##### `WaitForFulfillment`<sup>Optional</sup> <a name="WaitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.waitForFulfillment"></a>

```go
WaitForFulfillment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}.

---

### SpotInstanceRequestCreditSpecification <a name="SpotInstanceRequestCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestCreditSpecification {
	CpuCredits: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}. |

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.property.cpuCredits"></a>

```go
CpuCredits *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}.

---

### SpotInstanceRequestEbsBlockDevice <a name="SpotInstanceRequestEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestEbsBlockDevice {
	DeviceName: *string,
	DeleteOnTermination: interface{},
	Encrypted: interface{},
	Iops: *f64,
	KmsKeyId: *string,
	SnapshotId: *string,
	Tags: *map[string]*string,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

### SpotInstanceRequestEnclaveOptions <a name="SpotInstanceRequestEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestEnclaveOptions {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}.

---

### SpotInstanceRequestEphemeralBlockDevice <a name="SpotInstanceRequestEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestEphemeralBlockDevice {
	DeviceName: *string,
	NoDevice: interface{},
	VirtualName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.noDevice">NoDevice</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#no_device SpotInstanceRequest#no_device}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.virtualName">VirtualName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}.

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.noDevice"></a>

```go
NoDevice interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#no_device SpotInstanceRequest#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.virtualName"></a>

```go
VirtualName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}.

---

### SpotInstanceRequestLaunchTemplate <a name="SpotInstanceRequestLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestLaunchTemplate {
	Id: *string,
	Name: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}.

---

### SpotInstanceRequestMaintenanceOptions <a name="SpotInstanceRequestMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestMaintenanceOptions {
	AutoRecovery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}. |

---

##### `AutoRecovery`<sup>Optional</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.property.autoRecovery"></a>

```go
AutoRecovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}.

---

### SpotInstanceRequestMetadataOptions <a name="SpotInstanceRequestMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestMetadataOptions {
	HttpEndpoint: *string,
	HttpPutResponseHopLimit: *f64,
	HttpTokens: *string,
	InstanceMetadataTags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpEndpoint"></a>

```go
HttpEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}.

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}.

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.instanceMetadataTags"></a>

```go
InstanceMetadataTags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}.

---

### SpotInstanceRequestNetworkInterface <a name="SpotInstanceRequestNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestNetworkInterface {
	DeviceIndex: *f64,
	NetworkInterfaceId: *string,
	DeleteOnTermination: interface{},
	NetworkCardIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_index SpotInstanceRequest#device_index}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkCardIndex">NetworkCardIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}. |

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deviceIndex"></a>

```go
DeviceIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_index SpotInstanceRequest#device_index}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `NetworkCardIndex`<sup>Optional</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkCardIndex"></a>

```go
NetworkCardIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}.

---

### SpotInstanceRequestPrivateDnsNameOptions <a name="SpotInstanceRequestPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestPrivateDnsNameOptions {
	EnableResourceNameDnsAaaaRecord: interface{},
	EnableResourceNameDnsARecord: interface{},
	HostnameType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.hostnameType">HostnameType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}. |

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```go
EnableResourceNameDnsAaaaRecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}.

---

##### `EnableResourceNameDnsARecord`<sup>Optional</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```go
EnableResourceNameDnsARecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}.

---

##### `HostnameType`<sup>Optional</sup> <a name="HostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.hostnameType"></a>

```go
HostnameType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}.

---

### SpotInstanceRequestRootBlockDevice <a name="SpotInstanceRequestRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestRootBlockDevice {
	DeleteOnTermination: interface{},
	Encrypted: interface{},
	Iops: *f64,
	KmsKeyId: *string,
	Tags: *map[string]*string,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

### SpotInstanceRequestTimeouts <a name="SpotInstanceRequestTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

&spotinstancerequest.SpotInstanceRequestTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">ResetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetCapacityReservationResourceGroupArn` <a name="ResetCapacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```go
func ResetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">CapacityReservationResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArnInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```go
func CapacityReservationResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```go
func CapacityReservationResourceGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---


### SpotInstanceRequestCapacityReservationSpecificationOutputReference <a name="SpotInstanceRequestCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestCapacityReservationSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestCapacityReservationSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">PutCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">ResetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">ResetCapacityReservationTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationTarget` <a name="PutCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```go
func PutCapacityReservationTarget(value SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```go
func ResetCapacityReservationPreference()
```

##### `ResetCapacityReservationTarget` <a name="ResetCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```go
func ResetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">CapacityReservationTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```go
func CapacityReservationPreferenceInput() *string
```

- *Type:* *string

---

##### `CapacityReservationTargetInput`<sup>Optional</sup> <a name="CapacityReservationTargetInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```go
func CapacityReservationTargetInput() SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---


### SpotInstanceRequestCreditSpecificationOutputReference <a name="SpotInstanceRequestCreditSpecificationOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestCreditSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestCreditSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resetCpuCredits">ResetCpuCredits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resetCpuCredits"></a>

```go
func ResetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```go
func CpuCreditsInput() *string
```

- *Type:* *string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCredits"></a>

```go
func CpuCredits() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---


### SpotInstanceRequestEbsBlockDeviceList <a name="SpotInstanceRequestEbsBlockDeviceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestEbsBlockDeviceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SpotInstanceRequestEbsBlockDeviceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get"></a>

```go
func Get(index *f64) SpotInstanceRequestEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpotInstanceRequestEbsBlockDeviceOutputReference <a name="SpotInstanceRequestEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestEbsBlockDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SpotInstanceRequestEbsBlockDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpotInstanceRequestEnclaveOptionsOutputReference <a name="SpotInstanceRequestEnclaveOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestEnclaveOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestEnclaveOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---


### SpotInstanceRequestEphemeralBlockDeviceList <a name="SpotInstanceRequestEphemeralBlockDeviceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestEphemeralBlockDeviceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SpotInstanceRequestEphemeralBlockDeviceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get"></a>

```go
func Get(index *f64) SpotInstanceRequestEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpotInstanceRequestEphemeralBlockDeviceOutputReference <a name="SpotInstanceRequestEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestEphemeralBlockDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SpotInstanceRequestEphemeralBlockDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```go
func ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```go
func ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDevice">NoDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```go
func NoDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```go
func VirtualNameInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```go
func NoDevice() interface{}
```

- *Type:* interface{}

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpotInstanceRequestLaunchTemplateOutputReference <a name="SpotInstanceRequestLaunchTemplateOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---


### SpotInstanceRequestMaintenanceOptionsOutputReference <a name="SpotInstanceRequestMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestMaintenanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestMaintenanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resetAutoRecovery">ResetAutoRecovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRecovery` <a name="ResetAutoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```go
func ResetAutoRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecoveryInput">AutoRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRecoveryInput`<sup>Optional</sup> <a name="AutoRecoveryInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```go
func AutoRecoveryInput() *string
```

- *Type:* *string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```go
func AutoRecovery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---


### SpotInstanceRequestMetadataOptionsOutputReference <a name="SpotInstanceRequestMetadataOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetInstanceMetadataTags">ResetInstanceMetadataTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpTokens"></a>

```go
func ResetHttpTokens()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```go
func ResetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```go
func InstanceMetadataTagsInput() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```go
func InstanceMetadataTags() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---


### SpotInstanceRequestNetworkInterfaceList <a name="SpotInstanceRequestNetworkInterfaceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SpotInstanceRequestNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get"></a>

```go
func Get(index *f64) SpotInstanceRequestNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpotInstanceRequestNetworkInterfaceOutputReference <a name="SpotInstanceRequestNetworkInterfaceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SpotInstanceRequestNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetNetworkCardIndex">ResetNetworkCardIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetNetworkCardIndex` <a name="ResetNetworkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetNetworkCardIndex"></a>

```go
func ResetNetworkCardIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndexInput">NetworkCardIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```go
func DeviceIndexInput() *f64
```

- *Type:* *f64

---

##### `NetworkCardIndexInput`<sup>Optional</sup> <a name="NetworkCardIndexInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndexInput"></a>

```go
func NetworkCardIndexInput() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndex"></a>

```go
func NetworkCardIndex() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpotInstanceRequestPrivateDnsNameOptionsOutputReference <a name="SpotInstanceRequestPrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestPrivateDnsNameOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestPrivateDnsNameOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">ResetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">ResetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetHostnameType">ResetHostnameType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResourceNameDnsAaaaRecord` <a name="ResetEnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```go
func ResetEnableResourceNameDnsAaaaRecord()
```

##### `ResetEnableResourceNameDnsARecord` <a name="ResetEnableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```go
func ResetEnableResourceNameDnsARecord()
```

##### `ResetHostnameType` <a name="ResetHostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```go
func ResetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">EnableResourceNameDnsAaaaRecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">EnableResourceNameDnsARecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">HostnameTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```go
func EnableResourceNameDnsAaaaRecordInput() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```go
func EnableResourceNameDnsARecordInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameTypeInput`<sup>Optional</sup> <a name="HostnameTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```go
func HostnameTypeInput() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```go
func EnableResourceNameDnsAaaaRecord() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```go
func EnableResourceNameDnsARecord() interface{}
```

- *Type:* interface{}

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```go
func HostnameType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestPrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---


### SpotInstanceRequestRootBlockDeviceOutputReference <a name="SpotInstanceRequestRootBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestRootBlockDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestRootBlockDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() SpotInstanceRequestRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---


### SpotInstanceRequestTimeoutsOutputReference <a name="SpotInstanceRequestTimeoutsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/spotinstancerequest"

spotinstancerequest.NewSpotInstanceRequestTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpotInstanceRequestTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



