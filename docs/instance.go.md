# `instance` Submodule <a name="`instance` Submodule" id="@cdktf/provider-aws.instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Instance <a name="Instance" id="@cdktf/provider-aws.instance.Instance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance aws_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.Instance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstance(scope Construct, id *string, config InstanceConfig) Instance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceConfig">InstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceConfig">InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification">PutCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putCreditSpecification">PutCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEbsBlockDevice">PutEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEnclaveOptions">PutEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice">PutEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putMaintenanceOptions">PutMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions">PutPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putRootBlockDevice">PutRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAmi">ResetAmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCapacityReservationSpecification">ResetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCpuThreadsPerCore">ResetCpuThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetCreditSpecification">ResetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetDisableApiStop">ResetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetDisableApiTermination">ResetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEbsBlockDevice">ResetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEnclaveOptions">ResetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetEphemeralBlockDevice">ResetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetFetchPasswordData">ResetFetchPasswordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHibernation">ResetHibernation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetHostResourceGroupArn">ResetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetInstanceInitiatedShutdownBehavior">ResetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMaintenanceOptions">ResetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPlacementGroup">ResetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPlacementPartitionNumber">ResetPlacementPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPrivateDnsNameOptions">ResetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetRootBlockDevice">ResetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSecondaryPrivateIps">ResetSecondaryPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSourceDestCheck">ResetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserDataBase64">ResetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetUserDataReplaceOnChange">ResetUserDataReplaceOnChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetVolumeTags">ResetVolumeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.Instance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.instance.Instance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.instance.Instance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.instance.Instance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.instance.Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.instance.Instance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.instance.Instance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.instance.Instance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.Instance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.Instance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.Instance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.Instance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.Instance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCapacityReservationSpecification` <a name="PutCapacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification"></a>

```go
func PutCapacityReservationSpecification(value InstanceCapacityReservationSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `PutCreditSpecification` <a name="PutCreditSpecification" id="@cdktf/provider-aws.instance.Instance.putCreditSpecification"></a>

```go
func PutCreditSpecification(value InstanceCreditSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `PutEbsBlockDevice` <a name="PutEbsBlockDevice" id="@cdktf/provider-aws.instance.Instance.putEbsBlockDevice"></a>

```go
func PutEbsBlockDevice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putEbsBlockDevice.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnclaveOptions` <a name="PutEnclaveOptions" id="@cdktf/provider-aws.instance.Instance.putEnclaveOptions"></a>

```go
func PutEnclaveOptions(value InstanceEnclaveOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `PutEphemeralBlockDevice` <a name="PutEphemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice"></a>

```go
func PutEphemeralBlockDevice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate"></a>

```go
func PutLaunchTemplate(value InstanceLaunchTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `PutMaintenanceOptions` <a name="PutMaintenanceOptions" id="@cdktf/provider-aws.instance.Instance.putMaintenanceOptions"></a>

```go
func PutMaintenanceOptions(value InstanceMaintenanceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions"></a>

```go
func PutMetadataOptions(value InstanceMetadataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-aws.instance.Instance.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrivateDnsNameOptions` <a name="PutPrivateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions"></a>

```go
func PutPrivateDnsNameOptions(value InstancePrivateDnsNameOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---

##### `PutRootBlockDevice` <a name="PutRootBlockDevice" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice"></a>

```go
func PutRootBlockDevice(value InstanceRootBlockDevice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.instance.Instance.putTimeouts"></a>

```go
func PutTimeouts(value InstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

---

##### `ResetAmi` <a name="ResetAmi" id="@cdktf/provider-aws.instance.Instance.resetAmi"></a>

```go
func ResetAmi()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-aws.instance.Instance.resetAssociatePublicIpAddress"></a>

```go
func ResetAssociatePublicIpAddress()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.instance.Instance.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetCapacityReservationSpecification` <a name="ResetCapacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.resetCapacityReservationSpecification"></a>

```go
func ResetCapacityReservationSpecification()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktf/provider-aws.instance.Instance.resetCpuCoreCount"></a>

```go
func ResetCpuCoreCount()
```

##### `ResetCpuThreadsPerCore` <a name="ResetCpuThreadsPerCore" id="@cdktf/provider-aws.instance.Instance.resetCpuThreadsPerCore"></a>

```go
func ResetCpuThreadsPerCore()
```

##### `ResetCreditSpecification` <a name="ResetCreditSpecification" id="@cdktf/provider-aws.instance.Instance.resetCreditSpecification"></a>

```go
func ResetCreditSpecification()
```

##### `ResetDisableApiStop` <a name="ResetDisableApiStop" id="@cdktf/provider-aws.instance.Instance.resetDisableApiStop"></a>

```go
func ResetDisableApiStop()
```

##### `ResetDisableApiTermination` <a name="ResetDisableApiTermination" id="@cdktf/provider-aws.instance.Instance.resetDisableApiTermination"></a>

```go
func ResetDisableApiTermination()
```

##### `ResetEbsBlockDevice` <a name="ResetEbsBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetEbsBlockDevice"></a>

```go
func ResetEbsBlockDevice()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-aws.instance.Instance.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetEnclaveOptions` <a name="ResetEnclaveOptions" id="@cdktf/provider-aws.instance.Instance.resetEnclaveOptions"></a>

```go
func ResetEnclaveOptions()
```

##### `ResetEphemeralBlockDevice` <a name="ResetEphemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetEphemeralBlockDevice"></a>

```go
func ResetEphemeralBlockDevice()
```

##### `ResetFetchPasswordData` <a name="ResetFetchPasswordData" id="@cdktf/provider-aws.instance.Instance.resetFetchPasswordData"></a>

```go
func ResetFetchPasswordData()
```

##### `ResetHibernation` <a name="ResetHibernation" id="@cdktf/provider-aws.instance.Instance.resetHibernation"></a>

```go
func ResetHibernation()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktf/provider-aws.instance.Instance.resetHostId"></a>

```go
func ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktf/provider-aws.instance.Instance.resetHostResourceGroupArn"></a>

```go
func ResetHostResourceGroupArn()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-aws.instance.Instance.resetIamInstanceProfile"></a>

```go
func ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.instance.Instance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceInitiatedShutdownBehavior` <a name="ResetInstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.Instance.resetInstanceInitiatedShutdownBehavior"></a>

```go
func ResetInstanceInitiatedShutdownBehavior()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.instance.Instance.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktf/provider-aws.instance.Instance.resetIpv6AddressCount"></a>

```go
func ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-aws.instance.Instance.resetIpv6Addresses"></a>

```go
func ResetIpv6Addresses()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-aws.instance.Instance.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktf/provider-aws.instance.Instance.resetLaunchTemplate"></a>

```go
func ResetLaunchTemplate()
```

##### `ResetMaintenanceOptions` <a name="ResetMaintenanceOptions" id="@cdktf/provider-aws.instance.Instance.resetMaintenanceOptions"></a>

```go
func ResetMaintenanceOptions()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktf/provider-aws.instance.Instance.resetMetadataOptions"></a>

```go
func ResetMetadataOptions()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-aws.instance.Instance.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-aws.instance.Instance.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetPlacementGroup` <a name="ResetPlacementGroup" id="@cdktf/provider-aws.instance.Instance.resetPlacementGroup"></a>

```go
func ResetPlacementGroup()
```

##### `ResetPlacementPartitionNumber` <a name="ResetPlacementPartitionNumber" id="@cdktf/provider-aws.instance.Instance.resetPlacementPartitionNumber"></a>

```go
func ResetPlacementPartitionNumber()
```

##### `ResetPrivateDnsNameOptions` <a name="ResetPrivateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.resetPrivateDnsNameOptions"></a>

```go
func ResetPrivateDnsNameOptions()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-aws.instance.Instance.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetRootBlockDevice` <a name="ResetRootBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetRootBlockDevice"></a>

```go
func ResetRootBlockDevice()
```

##### `ResetSecondaryPrivateIps` <a name="ResetSecondaryPrivateIps" id="@cdktf/provider-aws.instance.Instance.resetSecondaryPrivateIps"></a>

```go
func ResetSecondaryPrivateIps()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.instance.Instance.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSourceDestCheck` <a name="ResetSourceDestCheck" id="@cdktf/provider-aws.instance.Instance.resetSourceDestCheck"></a>

```go
func ResetSourceDestCheck()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.instance.Instance.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.instance.Instance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.instance.Instance.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-aws.instance.Instance.resetTenancy"></a>

```go
func ResetTenancy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.instance.Instance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-aws.instance.Instance.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetUserDataBase64` <a name="ResetUserDataBase64" id="@cdktf/provider-aws.instance.Instance.resetUserDataBase64"></a>

```go
func ResetUserDataBase64()
```

##### `ResetUserDataReplaceOnChange` <a name="ResetUserDataReplaceOnChange" id="@cdktf/provider-aws.instance.Instance.resetUserDataReplaceOnChange"></a>

```go
func ResetUserDataReplaceOnChange()
```

##### `ResetVolumeTags` <a name="ResetVolumeTags" id="@cdktf/provider-aws.instance.Instance.resetVolumeTags"></a>

```go
func ResetVolumeTags()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.instance.Instance.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.instance.Instance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.Instance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.instance.Instance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.instance.Instance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.Instance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.instance.Instance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.instance.Instance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.Instance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.instance.Instance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceState">InstanceState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference">InstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.passwordData">PasswordData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.primaryNetworkInterfaceId">PrimaryNetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDns">PrivateDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference">InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.publicDns">PublicDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.rootBlockDevice">RootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.amiInput">AmiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecificationInput">CapacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCoreInput">CpuThreadsPerCoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.creditSpecificationInput">CreditSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiStopInput">DisableApiStopInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiTerminationInput">DisableApiTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsBlockDeviceInput">EbsBlockDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.enclaveOptionsInput">EnclaveOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDeviceInput">EphemeralBlockDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fetchPasswordDataInput">FetchPasswordDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hibernationInput">HibernationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostIdInput">HostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehaviorInput">InstanceInitiatedShutdownBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.maintenanceOptionsInput">MaintenanceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.monitoringInput">MonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementGroupInput">PlacementGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementPartitionNumberInput">PlacementPartitionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptionsInput">PrivateDnsNameOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.rootBlockDeviceInput">RootBlockDeviceInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIpsInput">SecondaryPrivateIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.sourceDestCheckInput">SourceDestCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataBase64Input">UserDataBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChangeInput">UserDataReplaceOnChangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.volumeTagsInput">VolumeTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ami">Ami</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCore">CpuThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiStop">DisableApiStop</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiTermination">DisableApiTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fetchPasswordData">FetchPasswordData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hibernation">Hibernation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.monitoring">Monitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementGroup">PlacementGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementPartitionNumber">PlacementPartitionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIps">SecondaryPrivateIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.sourceDestCheck">SourceDestCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataBase64">UserDataBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChange">UserDataReplaceOnChange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.volumeTags">VolumeTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.instance.Instance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.instance.Instance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.Instance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.instance.Instance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.instance.Instance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.instance.Instance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.instance.Instance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.instance.Instance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.instance.Instance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.instance.Instance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.instance.Instance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.instance.Instance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.instance.Instance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.instance.Instance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.instance.Instance.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecification"></a>

```go
func CapacityReservationSpecification() InstanceCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.instance.Instance.property.creditSpecification"></a>

```go
func CreditSpecification() InstanceCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a>

---

##### `EbsBlockDevice`<sup>Required</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.ebsBlockDevice"></a>

```go
func EbsBlockDevice() InstanceEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.instance.Instance.property.enclaveOptions"></a>

```go
func EnclaveOptions() InstanceEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a>

---

##### `EphemeralBlockDevice`<sup>Required</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDevice"></a>

```go
func EphemeralBlockDevice() InstanceEphemeralBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a>

---

##### `InstanceState`<sup>Required</sup> <a name="InstanceState" id="@cdktf/provider-aws.instance.Instance.property.instanceState"></a>

```go
func InstanceState() *string
```

- *Type:* *string

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.instance.Instance.property.launchTemplate"></a>

```go
func LaunchTemplate() InstanceLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a>

---

##### `MaintenanceOptions`<sup>Required</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.instance.Instance.property.maintenanceOptions"></a>

```go
func MaintenanceOptions() InstanceMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference">InstanceMaintenanceOptionsOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.instance.Instance.property.metadataOptions"></a>

```go
func MetadataOptions() InstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-aws.instance.Instance.property.networkInterface"></a>

```go
func NetworkInterface() InstanceNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a>

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.instance.Instance.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `PasswordData`<sup>Required</sup> <a name="PasswordData" id="@cdktf/provider-aws.instance.Instance.property.passwordData"></a>

```go
func PasswordData() *string
```

- *Type:* *string

---

##### `PrimaryNetworkInterfaceId`<sup>Required</sup> <a name="PrimaryNetworkInterfaceId" id="@cdktf/provider-aws.instance.Instance.property.primaryNetworkInterfaceId"></a>

```go
func PrimaryNetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateDns`<sup>Required</sup> <a name="PrivateDns" id="@cdktf/provider-aws.instance.Instance.property.privateDns"></a>

```go
func PrivateDns() *string
```

- *Type:* *string

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptions"></a>

```go
func PrivateDnsNameOptions() InstancePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference">InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `PublicDns`<sup>Required</sup> <a name="PublicDns" id="@cdktf/provider-aws.instance.Instance.property.publicDns"></a>

```go
func PublicDns() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-aws.instance.Instance.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `RootBlockDevice`<sup>Required</sup> <a name="RootBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.rootBlockDevice"></a>

```go
func RootBlockDevice() InstanceRootBlockDeviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.instance.Instance.property.timeouts"></a>

```go
func Timeouts() InstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a>

---

##### `AmiInput`<sup>Optional</sup> <a name="AmiInput" id="@cdktf/provider-aws.instance.Instance.property.amiInput"></a>

```go
func AmiInput() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddressInput"></a>

```go
func AssociatePublicIpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.instance.Instance.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `CapacityReservationSpecificationInput`<sup>Optional</sup> <a name="CapacityReservationSpecificationInput" id="@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecificationInput"></a>

```go
func CapacityReservationSpecificationInput() InstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktf/provider-aws.instance.Instance.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `CpuThreadsPerCoreInput`<sup>Optional</sup> <a name="CpuThreadsPerCoreInput" id="@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCoreInput"></a>

```go
func CpuThreadsPerCoreInput() *f64
```

- *Type:* *f64

---

##### `CreditSpecificationInput`<sup>Optional</sup> <a name="CreditSpecificationInput" id="@cdktf/provider-aws.instance.Instance.property.creditSpecificationInput"></a>

```go
func CreditSpecificationInput() InstanceCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `DisableApiStopInput`<sup>Optional</sup> <a name="DisableApiStopInput" id="@cdktf/provider-aws.instance.Instance.property.disableApiStopInput"></a>

```go
func DisableApiStopInput() interface{}
```

- *Type:* interface{}

---

##### `DisableApiTerminationInput`<sup>Optional</sup> <a name="DisableApiTerminationInput" id="@cdktf/provider-aws.instance.Instance.property.disableApiTerminationInput"></a>

```go
func DisableApiTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `EbsBlockDeviceInput`<sup>Optional</sup> <a name="EbsBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.ebsBlockDeviceInput"></a>

```go
func EbsBlockDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-aws.instance.Instance.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `EnclaveOptionsInput`<sup>Optional</sup> <a name="EnclaveOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.enclaveOptionsInput"></a>

```go
func EnclaveOptionsInput() InstanceEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `EphemeralBlockDeviceInput`<sup>Optional</sup> <a name="EphemeralBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDeviceInput"></a>

```go
func EphemeralBlockDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `FetchPasswordDataInput`<sup>Optional</sup> <a name="FetchPasswordDataInput" id="@cdktf/provider-aws.instance.Instance.property.fetchPasswordDataInput"></a>

```go
func FetchPasswordDataInput() interface{}
```

- *Type:* interface{}

---

##### `HibernationInput`<sup>Optional</sup> <a name="HibernationInput" id="@cdktf/provider-aws.instance.Instance.property.hibernationInput"></a>

```go
func HibernationInput() interface{}
```

- *Type:* interface{}

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktf/provider-aws.instance.Instance.property.hostIdInput"></a>

```go
func HostIdInput() *string
```

- *Type:* *string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArnInput"></a>

```go
func HostResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-aws.instance.Instance.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.instance.Instance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehaviorInput" id="@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```go
func InstanceInitiatedShutdownBehaviorInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.instance.Instance.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressCountInput"></a>

```go
func Ipv6AddressCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressesInput"></a>

```go
func Ipv6AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-aws.instance.Instance.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.instance.Instance.property.launchTemplateInput"></a>

```go
func LaunchTemplateInput() InstanceLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `MaintenanceOptionsInput`<sup>Optional</sup> <a name="MaintenanceOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.maintenanceOptionsInput"></a>

```go
func MaintenanceOptionsInput() InstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.metadataOptionsInput"></a>

```go
func MetadataOptionsInput() InstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-aws.instance.Instance.property.monitoringInput"></a>

```go
func MonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-aws.instance.Instance.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementGroupInput`<sup>Optional</sup> <a name="PlacementGroupInput" id="@cdktf/provider-aws.instance.Instance.property.placementGroupInput"></a>

```go
func PlacementGroupInput() *string
```

- *Type:* *string

---

##### `PlacementPartitionNumberInput`<sup>Optional</sup> <a name="PlacementPartitionNumberInput" id="@cdktf/provider-aws.instance.Instance.property.placementPartitionNumberInput"></a>

```go
func PlacementPartitionNumberInput() *f64
```

- *Type:* *f64

---

##### `PrivateDnsNameOptionsInput`<sup>Optional</sup> <a name="PrivateDnsNameOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptionsInput"></a>

```go
func PrivateDnsNameOptionsInput() InstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-aws.instance.Instance.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `RootBlockDeviceInput`<sup>Optional</sup> <a name="RootBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.rootBlockDeviceInput"></a>

```go
func RootBlockDeviceInput() InstanceRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `SecondaryPrivateIpsInput`<sup>Optional</sup> <a name="SecondaryPrivateIpsInput" id="@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIpsInput"></a>

```go
func SecondaryPrivateIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.instance.Instance.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDestCheckInput`<sup>Optional</sup> <a name="SourceDestCheckInput" id="@cdktf/provider-aws.instance.Instance.property.sourceDestCheckInput"></a>

```go
func SourceDestCheckInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.instance.Instance.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.instance.Instance.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.instance.Instance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-aws.instance.Instance.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.instance.Instance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataBase64Input`<sup>Optional</sup> <a name="UserDataBase64Input" id="@cdktf/provider-aws.instance.Instance.property.userDataBase64Input"></a>

```go
func UserDataBase64Input() *string
```

- *Type:* *string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-aws.instance.Instance.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `UserDataReplaceOnChangeInput`<sup>Optional</sup> <a name="UserDataReplaceOnChangeInput" id="@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChangeInput"></a>

```go
func UserDataReplaceOnChangeInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeTagsInput`<sup>Optional</sup> <a name="VolumeTagsInput" id="@cdktf/provider-aws.instance.Instance.property.volumeTagsInput"></a>

```go
func VolumeTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ami`<sup>Required</sup> <a name="Ami" id="@cdktf/provider-aws.instance.Instance.property.ami"></a>

```go
func Ami() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.instance.Instance.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-aws.instance.Instance.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CpuThreadsPerCore`<sup>Required</sup> <a name="CpuThreadsPerCore" id="@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCore"></a>

```go
func CpuThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `DisableApiStop`<sup>Required</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.instance.Instance.property.disableApiStop"></a>

```go
func DisableApiStop() interface{}
```

- *Type:* interface{}

---

##### `DisableApiTermination`<sup>Required</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.instance.Instance.property.disableApiTermination"></a>

```go
func DisableApiTermination() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.instance.Instance.property.ebsOptimized"></a>

```go
func EbsOptimized() interface{}
```

- *Type:* interface{}

---

##### `FetchPasswordData`<sup>Required</sup> <a name="FetchPasswordData" id="@cdktf/provider-aws.instance.Instance.property.fetchPasswordData"></a>

```go
func FetchPasswordData() interface{}
```

- *Type:* interface{}

---

##### `Hibernation`<sup>Required</sup> <a name="Hibernation" id="@cdktf/provider-aws.instance.Instance.property.hibernation"></a>

```go
func Hibernation() interface{}
```

- *Type:* interface{}

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-aws.instance.Instance.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArn"></a>

```go
func HostResourceGroupArn() *string
```

- *Type:* *string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.instance.Instance.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.instance.Instance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehavior"></a>

```go
func InstanceInitiatedShutdownBehavior() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.instance.Instance.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.instance.Instance.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-aws.instance.Instance.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-aws.instance.Instance.property.monitoring"></a>

```go
func Monitoring() interface{}
```

- *Type:* interface{}

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.instance.Instance.property.placementGroup"></a>

```go
func PlacementGroup() *string
```

- *Type:* *string

---

##### `PlacementPartitionNumber`<sup>Required</sup> <a name="PlacementPartitionNumber" id="@cdktf/provider-aws.instance.Instance.property.placementPartitionNumber"></a>

```go
func PlacementPartitionNumber() *f64
```

- *Type:* *f64

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-aws.instance.Instance.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `SecondaryPrivateIps`<sup>Required</sup> <a name="SecondaryPrivateIps" id="@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIps"></a>

```go
func SecondaryPrivateIps() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.instance.Instance.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDestCheck`<sup>Required</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.instance.Instance.property.sourceDestCheck"></a>

```go
func SourceDestCheck() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.instance.Instance.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.instance.Instance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.instance.Instance.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.instance.Instance.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-aws.instance.Instance.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `UserDataBase64`<sup>Required</sup> <a name="UserDataBase64" id="@cdktf/provider-aws.instance.Instance.property.userDataBase64"></a>

```go
func UserDataBase64() *string
```

- *Type:* *string

---

##### `UserDataReplaceOnChange`<sup>Required</sup> <a name="UserDataReplaceOnChange" id="@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChange"></a>

```go
func UserDataReplaceOnChange() interface{}
```

- *Type:* interface{}

---

##### `VolumeTags`<sup>Required</sup> <a name="VolumeTags" id="@cdktf/provider-aws.instance.Instance.property.volumeTags"></a>

```go
func VolumeTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.instance.Instance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceCapacityReservationSpecification <a name="InstanceCapacityReservationSpecification" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceCapacityReservationSpecification {
	CapacityReservationPreference: *string,
	CapacityReservationTarget: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference"></a>

```go
CapacityReservationPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}.

---

##### `CapacityReservationTarget`<sup>Optional</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget"></a>

```go
CapacityReservationTarget InstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_target Instance#capacity_reservation_target}

---

### InstanceCapacityReservationSpecificationCapacityReservationTarget <a name="InstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceCapacityReservationSpecificationCapacityReservationTarget {
	CapacityReservationId: *string,
	CapacityReservationResourceGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}. |

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}.

---

##### `CapacityReservationResourceGroupArn`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```go
CapacityReservationResourceGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}.

---

### InstanceConfig <a name="InstanceConfig" id="@cdktf/provider-aws.instance.InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceConfig {
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
	CapacityReservationSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceCapacityReservationSpecification,
	CpuCoreCount: *f64,
	CpuThreadsPerCore: *f64,
	CreditSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceCreditSpecification,
	DisableApiStop: interface{},
	DisableApiTermination: interface{},
	EbsBlockDevice: interface{},
	EbsOptimized: interface{},
	EnclaveOptions: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceEnclaveOptions,
	EphemeralBlockDevice: interface{},
	FetchPasswordData: interface{},
	Hibernation: interface{},
	HostId: *string,
	HostResourceGroupArn: *string,
	IamInstanceProfile: *string,
	Id: *string,
	InstanceInitiatedShutdownBehavior: *string,
	InstanceType: *string,
	Ipv6AddressCount: *f64,
	Ipv6Addresses: *[]*string,
	KeyName: *string,
	LaunchTemplate: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceLaunchTemplate,
	MaintenanceOptions: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceMaintenanceOptions,
	MetadataOptions: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceMetadataOptions,
	Monitoring: interface{},
	NetworkInterface: interface{},
	PlacementGroup: *string,
	PlacementPartitionNumber: *f64,
	PrivateDnsNameOptions: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstancePrivateDnsNameOptions,
	PrivateIp: *string,
	RootBlockDevice: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceRootBlockDevice,
	SecondaryPrivateIps: *[]*string,
	SecurityGroups: *[]*string,
	SourceDestCheck: interface{},
	SubnetId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Tenancy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.instance.InstanceTimeouts,
	UserData: *string,
	UserDataBase64: *string,
	UserDataReplaceOnChange: interface{},
	VolumeTags: *map[string]*string,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ami">Ami</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.cpuThreadsPerCore">CpuThreadsPerCore</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.disableApiStop">DisableApiStop</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.disableApiTermination">DisableApiTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code>interface{}</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code>interface{}</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.fetchPasswordData">FetchPasswordData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hibernation">Hibernation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hostId">HostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.monitoring">Monitoring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.placementGroup">PlacementGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.placementPartitionNumber">PlacementPartitionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.rootBlockDevice">RootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.secondaryPrivateIps">SecondaryPrivateIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.sourceDestCheck">SourceDestCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tenancy">Tenancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userDataBase64">UserDataBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userDataReplaceOnChange">UserDataReplaceOnChange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.volumeTags">VolumeTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.instance.InstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.instance.InstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.instance.InstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.instance.InstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.instance.InstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.instance.InstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.instance.InstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ami`<sup>Optional</sup> <a name="Ami" id="@cdktf/provider-aws.instance.InstanceConfig.property.ami"></a>

```go
Ami *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.instance.InstanceConfig.property.associatePublicIpAddress"></a>

```go
AssociatePublicIpAddress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.instance.InstanceConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}.

---

##### `CapacityReservationSpecification`<sup>Optional</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.instance.InstanceConfig.property.capacityReservationSpecification"></a>

```go
CapacityReservationSpecification InstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_specification Instance#capacity_reservation_specification}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktf/provider-aws.instance.InstanceConfig.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}.

---

##### `CpuThreadsPerCore`<sup>Optional</sup> <a name="CpuThreadsPerCore" id="@cdktf/provider-aws.instance.InstanceConfig.property.cpuThreadsPerCore"></a>

```go
CpuThreadsPerCore *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}.

---

##### `CreditSpecification`<sup>Optional</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.instance.InstanceConfig.property.creditSpecification"></a>

```go
CreditSpecification InstanceCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#credit_specification Instance#credit_specification}

---

##### `DisableApiStop`<sup>Optional</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.instance.InstanceConfig.property.disableApiStop"></a>

```go
DisableApiStop interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}.

---

##### `DisableApiTermination`<sup>Optional</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.instance.InstanceConfig.property.disableApiTermination"></a>

```go
DisableApiTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}.

---

##### `EbsBlockDevice`<sup>Optional</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.ebsBlockDevice"></a>

```go
EbsBlockDevice interface{}
```

- *Type:* interface{}

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_block_device Instance#ebs_block_device}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.instance.InstanceConfig.property.ebsOptimized"></a>

```go
EbsOptimized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}.

---

##### `EnclaveOptions`<sup>Optional</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.enclaveOptions"></a>

```go
EnclaveOptions InstanceEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enclave_options Instance#enclave_options}

---

##### `EphemeralBlockDevice`<sup>Optional</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.ephemeralBlockDevice"></a>

```go
EphemeralBlockDevice interface{}
```

- *Type:* interface{}

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ephemeral_block_device Instance#ephemeral_block_device}

---

##### `FetchPasswordData`<sup>Optional</sup> <a name="FetchPasswordData" id="@cdktf/provider-aws.instance.InstanceConfig.property.fetchPasswordData"></a>

```go
FetchPasswordData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}.

---

##### `Hibernation`<sup>Optional</sup> <a name="Hibernation" id="@cdktf/provider-aws.instance.InstanceConfig.property.hibernation"></a>

```go
Hibernation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}.

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktf/provider-aws.instance.InstanceConfig.property.hostId"></a>

```go
HostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}.

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceConfig.property.hostResourceGroupArn"></a>

```go
HostResourceGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.instance.InstanceConfig.property.iamInstanceProfile"></a>

```go
IamInstanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.instance.InstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```go
InstanceInitiatedShutdownBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.instance.InstanceConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.instance.InstanceConfig.property.ipv6AddressCount"></a>

```go
Ipv6AddressCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.instance.InstanceConfig.property.ipv6Addresses"></a>

```go
Ipv6Addresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-aws.instance.InstanceConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}.

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.instance.InstanceConfig.property.launchTemplate"></a>

```go
LaunchTemplate InstanceLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#launch_template Instance#launch_template}

---

##### `MaintenanceOptions`<sup>Optional</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.maintenanceOptions"></a>

```go
MaintenanceOptions InstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#maintenance_options Instance#maintenance_options}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.metadataOptions"></a>

```go
MetadataOptions InstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#metadata_options Instance#metadata_options}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-aws.instance.InstanceConfig.property.monitoring"></a>

```go
Monitoring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-aws.instance.InstanceConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface Instance#network_interface}

---

##### `PlacementGroup`<sup>Optional</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.instance.InstanceConfig.property.placementGroup"></a>

```go
PlacementGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}.

---

##### `PlacementPartitionNumber`<sup>Optional</sup> <a name="PlacementPartitionNumber" id="@cdktf/provider-aws.instance.InstanceConfig.property.placementPartitionNumber"></a>

```go
PlacementPartitionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}.

---

##### `PrivateDnsNameOptions`<sup>Optional</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.privateDnsNameOptions"></a>

```go
PrivateDnsNameOptions InstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_dns_name_options Instance#private_dns_name_options}

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-aws.instance.InstanceConfig.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}.

---

##### `RootBlockDevice`<sup>Optional</sup> <a name="RootBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.rootBlockDevice"></a>

```go
RootBlockDevice InstanceRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#root_block_device Instance#root_block_device}

---

##### `SecondaryPrivateIps`<sup>Optional</sup> <a name="SecondaryPrivateIps" id="@cdktf/provider-aws.instance.InstanceConfig.property.secondaryPrivateIps"></a>

```go
SecondaryPrivateIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.instance.InstanceConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}.

---

##### `SourceDestCheck`<sup>Optional</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.instance.InstanceConfig.property.sourceDestCheck"></a>

```go
SourceDestCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.instance.InstanceConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.instance.InstanceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-aws.instance.InstanceConfig.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.instance.InstanceConfig.property.timeouts"></a>

```go
Timeouts InstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#timeouts Instance#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-aws.instance.InstanceConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}.

---

##### `UserDataBase64`<sup>Optional</sup> <a name="UserDataBase64" id="@cdktf/provider-aws.instance.InstanceConfig.property.userDataBase64"></a>

```go
UserDataBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}.

---

##### `UserDataReplaceOnChange`<sup>Optional</sup> <a name="UserDataReplaceOnChange" id="@cdktf/provider-aws.instance.InstanceConfig.property.userDataReplaceOnChange"></a>

```go
UserDataReplaceOnChange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}.

---

##### `VolumeTags`<sup>Optional</sup> <a name="VolumeTags" id="@cdktf/provider-aws.instance.InstanceConfig.property.volumeTags"></a>

```go
VolumeTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.instance.InstanceConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}.

---

### InstanceCreditSpecification <a name="InstanceCreditSpecification" id="@cdktf/provider-aws.instance.InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCreditSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceCreditSpecification {
	CpuCredits: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}. |

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecification.property.cpuCredits"></a>

```go
CpuCredits *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}.

---

### InstanceEbsBlockDevice <a name="InstanceEbsBlockDevice" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceEbsBlockDevice {
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
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#snapshot_id Instance#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#snapshot_id Instance#snapshot_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

### InstanceEnclaveOptions <a name="InstanceEnclaveOptions" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceEnclaveOptions {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}.

---

### InstanceEphemeralBlockDevice <a name="InstanceEphemeralBlockDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceEphemeralBlockDevice {
	DeviceName: *string,
	NoDevice: interface{},
	VirtualName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.noDevice">NoDevice</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#no_device Instance#no_device}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.virtualName">VirtualName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#virtual_name Instance#virtual_name}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}.

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.noDevice"></a>

```go
NoDevice interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#no_device Instance#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.virtualName"></a>

```go
VirtualName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#virtual_name Instance#virtual_name}.

---

### InstanceLaunchTemplate <a name="InstanceLaunchTemplate" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceLaunchTemplate {
	Id: *string,
	Name: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}.

---

### InstanceMaintenanceOptions <a name="InstanceMaintenanceOptions" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceMaintenanceOptions {
	AutoRecovery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}. |

---

##### `AutoRecovery`<sup>Optional</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions.property.autoRecovery"></a>

```go
AutoRecovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}.

---

### InstanceMetadataOptions <a name="InstanceMetadataOptions" id="@cdktf/provider-aws.instance.InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceMetadataOptions {
	HttpEndpoint: *string,
	HttpPutResponseHopLimit: *f64,
	HttpTokens: *string,
	InstanceMetadataTags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpEndpoint"></a>

```go
HttpEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}.

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}.

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.instanceMetadataTags"></a>

```go
InstanceMetadataTags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}.

---

### InstanceNetworkInterface <a name="InstanceNetworkInterface" id="@cdktf/provider-aws.instance.InstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceNetworkInterface {
	DeviceIndex: *f64,
	NetworkInterfaceId: *string,
	DeleteOnTermination: interface{},
	NetworkCardIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_index Instance#device_index}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface_id Instance#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkCardIndex">NetworkCardIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_card_index Instance#network_card_index}. |

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deviceIndex"></a>

```go
DeviceIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_index Instance#device_index}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface_id Instance#network_interface_id}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `NetworkCardIndex`<sup>Optional</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkCardIndex"></a>

```go
NetworkCardIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_card_index Instance#network_card_index}.

---

### InstancePrivateDnsNameOptions <a name="InstancePrivateDnsNameOptions" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstancePrivateDnsNameOptions {
	EnableResourceNameDnsAaaaRecord: interface{},
	EnableResourceNameDnsARecord: interface{},
	HostnameType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.hostnameType">HostnameType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}. |

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```go
EnableResourceNameDnsAaaaRecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}.

---

##### `EnableResourceNameDnsARecord`<sup>Optional</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```go
EnableResourceNameDnsARecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}.

---

##### `HostnameType`<sup>Optional</sup> <a name="HostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.hostnameType"></a>

```go
HostnameType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}.

---

### InstanceRootBlockDevice <a name="InstanceRootBlockDevice" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceRootBlockDevice {
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
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

### InstanceTimeouts <a name="InstanceTimeouts" id="@cdktf/provider-aws.instance.InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

&instance.InstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">ResetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetCapacityReservationResourceGroupArn` <a name="ResetCapacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```go
func ResetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">CapacityReservationResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArnInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```go
func CapacityReservationResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```go
func CapacityReservationResourceGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() InstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### InstanceCapacityReservationSpecificationOutputReference <a name="InstanceCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceCapacityReservationSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceCapacityReservationSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">PutCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">ResetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">ResetCapacityReservationTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationTarget` <a name="PutCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```go
func PutCapacityReservationTarget(value InstanceCapacityReservationSpecificationCapacityReservationTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```go
func ResetCapacityReservationPreference()
```

##### `ResetCapacityReservationTarget` <a name="ResetCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```go
func ResetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">CapacityReservationTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```go
func CapacityReservationPreferenceInput() *string
```

- *Type:* *string

---

##### `CapacityReservationTargetInput`<sup>Optional</sup> <a name="CapacityReservationTargetInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```go
func CapacityReservationTargetInput() InstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() InstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---


### InstanceCreditSpecificationOutputReference <a name="InstanceCreditSpecificationOutputReference" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceCreditSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceCreditSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits">ResetCpuCredits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```go
func ResetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```go
func CpuCreditsInput() *string
```

- *Type:* *string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```go
func CpuCredits() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() InstanceCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---


### InstanceEbsBlockDeviceList <a name="InstanceEbsBlockDeviceList" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceEbsBlockDeviceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) InstanceEbsBlockDeviceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get"></a>

```go
func Get(index *f64) InstanceEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InstanceEbsBlockDeviceOutputReference <a name="InstanceEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceEbsBlockDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) InstanceEbsBlockDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InstanceEnclaveOptionsOutputReference <a name="InstanceEnclaveOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceEnclaveOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceEnclaveOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() InstanceEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---


### InstanceEphemeralBlockDeviceList <a name="InstanceEphemeralBlockDeviceList" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceEphemeralBlockDeviceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) InstanceEphemeralBlockDeviceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get"></a>

```go
func Get(index *f64) InstanceEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InstanceEphemeralBlockDeviceOutputReference <a name="InstanceEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceEphemeralBlockDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) InstanceEphemeralBlockDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```go
func ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```go
func ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice">NoDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```go
func NoDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```go
func VirtualNameInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```go
func NoDevice() interface{}
```

- *Type:* interface{}

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InstanceLaunchTemplateOutputReference <a name="InstanceLaunchTemplateOutputReference" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() InstanceLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---


### InstanceMaintenanceOptionsOutputReference <a name="InstanceMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceMaintenanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceMaintenanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resetAutoRecovery">ResetAutoRecovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRecovery` <a name="ResetAutoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```go
func ResetAutoRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput">AutoRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRecoveryInput`<sup>Optional</sup> <a name="AutoRecoveryInput" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```go
func AutoRecoveryInput() *string
```

- *Type:* *string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```go
func AutoRecovery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() InstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---


### InstanceMetadataOptionsOutputReference <a name="InstanceMetadataOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">ResetInstanceMetadataTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```go
func ResetHttpTokens()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```go
func ResetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```go
func InstanceMetadataTagsInput() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```go
func InstanceMetadataTags() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() InstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---


### InstanceNetworkInterfaceList <a name="InstanceNetworkInterfaceList" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) InstanceNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get"></a>

```go
func Get(index *f64) InstanceNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InstanceNetworkInterfaceOutputReference <a name="InstanceNetworkInterfaceOutputReference" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) InstanceNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetNetworkCardIndex">ResetNetworkCardIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetNetworkCardIndex` <a name="ResetNetworkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetNetworkCardIndex"></a>

```go
func ResetNetworkCardIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndexInput">NetworkCardIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```go
func DeviceIndexInput() *f64
```

- *Type:* *f64

---

##### `NetworkCardIndexInput`<sup>Optional</sup> <a name="NetworkCardIndexInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndexInput"></a>

```go
func NetworkCardIndexInput() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndex"></a>

```go
func NetworkCardIndex() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InstancePrivateDnsNameOptionsOutputReference <a name="InstancePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstancePrivateDnsNameOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstancePrivateDnsNameOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">ResetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">ResetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetHostnameType">ResetHostnameType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResourceNameDnsAaaaRecord` <a name="ResetEnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```go
func ResetEnableResourceNameDnsAaaaRecord()
```

##### `ResetEnableResourceNameDnsARecord` <a name="ResetEnableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```go
func ResetEnableResourceNameDnsARecord()
```

##### `ResetHostnameType` <a name="ResetHostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```go
func ResetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">EnableResourceNameDnsAaaaRecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">EnableResourceNameDnsARecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">HostnameTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```go
func EnableResourceNameDnsAaaaRecordInput() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```go
func EnableResourceNameDnsARecordInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameTypeInput`<sup>Optional</sup> <a name="HostnameTypeInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```go
func HostnameTypeInput() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```go
func EnableResourceNameDnsAaaaRecord() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```go
func EnableResourceNameDnsARecord() interface{}
```

- *Type:* interface{}

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```go
func HostnameType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() InstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---


### InstanceRootBlockDeviceOutputReference <a name="InstanceRootBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceRootBlockDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceRootBlockDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() InstanceRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---


### InstanceTimeoutsOutputReference <a name="InstanceTimeoutsOutputReference" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/instance"

instance.NewInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



