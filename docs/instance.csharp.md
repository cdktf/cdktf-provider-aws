# `instance` Submodule <a name="`instance` Submodule" id="@cdktf/provider-aws.instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Instance <a name="Instance" id="@cdktf/provider-aws.instance.Instance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance aws_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.Instance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Instance(Construct Scope, string Id, InstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceConfig">InstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.instance.Instance.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.instance.Instance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.instance.Instance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.instance.Instance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.instance.Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.instance.Instance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.instance.Instance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.instance.Instance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.Instance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.Instance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.Instance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.Instance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.Instance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCapacityReservationSpecification` <a name="PutCapacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification"></a>

```csharp
private void PutCapacityReservationSpecification(InstanceCapacityReservationSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `PutCreditSpecification` <a name="PutCreditSpecification" id="@cdktf/provider-aws.instance.Instance.putCreditSpecification"></a>

```csharp
private void PutCreditSpecification(InstanceCreditSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `PutEbsBlockDevice` <a name="PutEbsBlockDevice" id="@cdktf/provider-aws.instance.Instance.putEbsBlockDevice"></a>

```csharp
private void PutEbsBlockDevice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putEbsBlockDevice.parameter.value"></a>

- *Type:* object

---

##### `PutEnclaveOptions` <a name="PutEnclaveOptions" id="@cdktf/provider-aws.instance.Instance.putEnclaveOptions"></a>

```csharp
private void PutEnclaveOptions(InstanceEnclaveOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `PutEphemeralBlockDevice` <a name="PutEphemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice"></a>

```csharp
private void PutEphemeralBlockDevice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* object

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate"></a>

```csharp
private void PutLaunchTemplate(InstanceLaunchTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `PutMaintenanceOptions` <a name="PutMaintenanceOptions" id="@cdktf/provider-aws.instance.Instance.putMaintenanceOptions"></a>

```csharp
private void PutMaintenanceOptions(InstanceMaintenanceOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(InstanceMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-aws.instance.Instance.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutPrivateDnsNameOptions` <a name="PutPrivateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions"></a>

```csharp
private void PutPrivateDnsNameOptions(InstancePrivateDnsNameOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---

##### `PutRootBlockDevice` <a name="PutRootBlockDevice" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice"></a>

```csharp
private void PutRootBlockDevice(InstanceRootBlockDevice Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putRootBlockDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.instance.Instance.putTimeouts"></a>

```csharp
private void PutTimeouts(InstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

---

##### `ResetAmi` <a name="ResetAmi" id="@cdktf/provider-aws.instance.Instance.resetAmi"></a>

```csharp
private void ResetAmi()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-aws.instance.Instance.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.instance.Instance.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetCapacityReservationSpecification` <a name="ResetCapacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.resetCapacityReservationSpecification"></a>

```csharp
private void ResetCapacityReservationSpecification()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktf/provider-aws.instance.Instance.resetCpuCoreCount"></a>

```csharp
private void ResetCpuCoreCount()
```

##### `ResetCpuThreadsPerCore` <a name="ResetCpuThreadsPerCore" id="@cdktf/provider-aws.instance.Instance.resetCpuThreadsPerCore"></a>

```csharp
private void ResetCpuThreadsPerCore()
```

##### `ResetCreditSpecification` <a name="ResetCreditSpecification" id="@cdktf/provider-aws.instance.Instance.resetCreditSpecification"></a>

```csharp
private void ResetCreditSpecification()
```

##### `ResetDisableApiStop` <a name="ResetDisableApiStop" id="@cdktf/provider-aws.instance.Instance.resetDisableApiStop"></a>

```csharp
private void ResetDisableApiStop()
```

##### `ResetDisableApiTermination` <a name="ResetDisableApiTermination" id="@cdktf/provider-aws.instance.Instance.resetDisableApiTermination"></a>

```csharp
private void ResetDisableApiTermination()
```

##### `ResetEbsBlockDevice` <a name="ResetEbsBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetEbsBlockDevice"></a>

```csharp
private void ResetEbsBlockDevice()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-aws.instance.Instance.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetEnclaveOptions` <a name="ResetEnclaveOptions" id="@cdktf/provider-aws.instance.Instance.resetEnclaveOptions"></a>

```csharp
private void ResetEnclaveOptions()
```

##### `ResetEphemeralBlockDevice` <a name="ResetEphemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetEphemeralBlockDevice"></a>

```csharp
private void ResetEphemeralBlockDevice()
```

##### `ResetFetchPasswordData` <a name="ResetFetchPasswordData" id="@cdktf/provider-aws.instance.Instance.resetFetchPasswordData"></a>

```csharp
private void ResetFetchPasswordData()
```

##### `ResetHibernation` <a name="ResetHibernation" id="@cdktf/provider-aws.instance.Instance.resetHibernation"></a>

```csharp
private void ResetHibernation()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktf/provider-aws.instance.Instance.resetHostId"></a>

```csharp
private void ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktf/provider-aws.instance.Instance.resetHostResourceGroupArn"></a>

```csharp
private void ResetHostResourceGroupArn()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-aws.instance.Instance.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.instance.Instance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceInitiatedShutdownBehavior` <a name="ResetInstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.Instance.resetInstanceInitiatedShutdownBehavior"></a>

```csharp
private void ResetInstanceInitiatedShutdownBehavior()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.instance.Instance.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktf/provider-aws.instance.Instance.resetIpv6AddressCount"></a>

```csharp
private void ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-aws.instance.Instance.resetIpv6Addresses"></a>

```csharp
private void ResetIpv6Addresses()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-aws.instance.Instance.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktf/provider-aws.instance.Instance.resetLaunchTemplate"></a>

```csharp
private void ResetLaunchTemplate()
```

##### `ResetMaintenanceOptions` <a name="ResetMaintenanceOptions" id="@cdktf/provider-aws.instance.Instance.resetMaintenanceOptions"></a>

```csharp
private void ResetMaintenanceOptions()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktf/provider-aws.instance.Instance.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-aws.instance.Instance.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-aws.instance.Instance.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetPlacementGroup` <a name="ResetPlacementGroup" id="@cdktf/provider-aws.instance.Instance.resetPlacementGroup"></a>

```csharp
private void ResetPlacementGroup()
```

##### `ResetPlacementPartitionNumber` <a name="ResetPlacementPartitionNumber" id="@cdktf/provider-aws.instance.Instance.resetPlacementPartitionNumber"></a>

```csharp
private void ResetPlacementPartitionNumber()
```

##### `ResetPrivateDnsNameOptions` <a name="ResetPrivateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.resetPrivateDnsNameOptions"></a>

```csharp
private void ResetPrivateDnsNameOptions()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-aws.instance.Instance.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetRootBlockDevice` <a name="ResetRootBlockDevice" id="@cdktf/provider-aws.instance.Instance.resetRootBlockDevice"></a>

```csharp
private void ResetRootBlockDevice()
```

##### `ResetSecondaryPrivateIps` <a name="ResetSecondaryPrivateIps" id="@cdktf/provider-aws.instance.Instance.resetSecondaryPrivateIps"></a>

```csharp
private void ResetSecondaryPrivateIps()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.instance.Instance.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSourceDestCheck` <a name="ResetSourceDestCheck" id="@cdktf/provider-aws.instance.Instance.resetSourceDestCheck"></a>

```csharp
private void ResetSourceDestCheck()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.instance.Instance.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.instance.Instance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.instance.Instance.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-aws.instance.Instance.resetTenancy"></a>

```csharp
private void ResetTenancy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.instance.Instance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-aws.instance.Instance.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetUserDataBase64` <a name="ResetUserDataBase64" id="@cdktf/provider-aws.instance.Instance.resetUserDataBase64"></a>

```csharp
private void ResetUserDataBase64()
```

##### `ResetUserDataReplaceOnChange` <a name="ResetUserDataReplaceOnChange" id="@cdktf/provider-aws.instance.Instance.resetUserDataReplaceOnChange"></a>

```csharp
private void ResetUserDataReplaceOnChange()
```

##### `ResetVolumeTags` <a name="ResetVolumeTags" id="@cdktf/provider-aws.instance.Instance.resetVolumeTags"></a>

```csharp
private void ResetVolumeTags()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.instance.Instance.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.instance.Instance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Instance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.instance.Instance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.instance.Instance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Instance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.instance.Instance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.instance.Instance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Instance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.instance.Instance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceState">InstanceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference">InstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.passwordData">PasswordData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.primaryNetworkInterfaceId">PrimaryNetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDns">PrivateDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference">InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.publicDns">PublicDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.publicIp">PublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.rootBlockDevice">RootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.amiInput">AmiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecificationInput">CapacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCoreInput">CpuThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.creditSpecificationInput">CreditSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiStopInput">DisableApiStopInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiTerminationInput">DisableApiTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsBlockDeviceInput">EbsBlockDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.enclaveOptionsInput">EnclaveOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDeviceInput">EphemeralBlockDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fetchPasswordDataInput">FetchPasswordDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hibernationInput">HibernationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostIdInput">HostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehaviorInput">InstanceInitiatedShutdownBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.maintenanceOptionsInput">MaintenanceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.monitoringInput">MonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementGroupInput">PlacementGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementPartitionNumberInput">PlacementPartitionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptionsInput">PrivateDnsNameOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.rootBlockDeviceInput">RootBlockDeviceInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIpsInput">SecondaryPrivateIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.sourceDestCheckInput">SourceDestCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataBase64Input">UserDataBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChangeInput">UserDataReplaceOnChangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.volumeTagsInput">VolumeTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ami">Ami</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCore">CpuThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiStop">DisableApiStop</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.disableApiTermination">DisableApiTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.fetchPasswordData">FetchPasswordData</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hibernation">Hibernation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.monitoring">Monitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.placementPartitionNumber">PlacementPartitionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIps">SecondaryPrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.sourceDestCheck">SourceDestCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataBase64">UserDataBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChange">UserDataReplaceOnChange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.volumeTags">VolumeTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.instance.Instance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.instance.Instance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.Instance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.instance.Instance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.instance.Instance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.instance.Instance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.instance.Instance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.instance.Instance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.instance.Instance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.instance.Instance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.instance.Instance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.instance.Instance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.instance.Instance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.instance.Instance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.instance.Instance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecification"></a>

```csharp
public InstanceCapacityReservationSpecificationOutputReference CapacityReservationSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.instance.Instance.property.creditSpecification"></a>

```csharp
public InstanceCreditSpecificationOutputReference CreditSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a>

---

##### `EbsBlockDevice`<sup>Required</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.ebsBlockDevice"></a>

```csharp
public InstanceEbsBlockDeviceList EbsBlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.instance.Instance.property.enclaveOptions"></a>

```csharp
public InstanceEnclaveOptionsOutputReference EnclaveOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a>

---

##### `EphemeralBlockDevice`<sup>Required</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDevice"></a>

```csharp
public InstanceEphemeralBlockDeviceList EphemeralBlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a>

---

##### `InstanceState`<sup>Required</sup> <a name="InstanceState" id="@cdktf/provider-aws.instance.Instance.property.instanceState"></a>

```csharp
public string InstanceState { get; }
```

- *Type:* string

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.instance.Instance.property.launchTemplate"></a>

```csharp
public InstanceLaunchTemplateOutputReference LaunchTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a>

---

##### `MaintenanceOptions`<sup>Required</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.instance.Instance.property.maintenanceOptions"></a>

```csharp
public InstanceMaintenanceOptionsOutputReference MaintenanceOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference">InstanceMaintenanceOptionsOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.instance.Instance.property.metadataOptions"></a>

```csharp
public InstanceMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-aws.instance.Instance.property.networkInterface"></a>

```csharp
public InstanceNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a>

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.instance.Instance.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `PasswordData`<sup>Required</sup> <a name="PasswordData" id="@cdktf/provider-aws.instance.Instance.property.passwordData"></a>

```csharp
public string PasswordData { get; }
```

- *Type:* string

---

##### `PrimaryNetworkInterfaceId`<sup>Required</sup> <a name="PrimaryNetworkInterfaceId" id="@cdktf/provider-aws.instance.Instance.property.primaryNetworkInterfaceId"></a>

```csharp
public string PrimaryNetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PrivateDns`<sup>Required</sup> <a name="PrivateDns" id="@cdktf/provider-aws.instance.Instance.property.privateDns"></a>

```csharp
public string PrivateDns { get; }
```

- *Type:* string

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptions"></a>

```csharp
public InstancePrivateDnsNameOptionsOutputReference PrivateDnsNameOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference">InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `PublicDns`<sup>Required</sup> <a name="PublicDns" id="@cdktf/provider-aws.instance.Instance.property.publicDns"></a>

```csharp
public string PublicDns { get; }
```

- *Type:* string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-aws.instance.Instance.property.publicIp"></a>

```csharp
public string PublicIp { get; }
```

- *Type:* string

---

##### `RootBlockDevice`<sup>Required</sup> <a name="RootBlockDevice" id="@cdktf/provider-aws.instance.Instance.property.rootBlockDevice"></a>

```csharp
public InstanceRootBlockDeviceOutputReference RootBlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.instance.Instance.property.timeouts"></a>

```csharp
public InstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a>

---

##### `AmiInput`<sup>Optional</sup> <a name="AmiInput" id="@cdktf/provider-aws.instance.Instance.property.amiInput"></a>

```csharp
public string AmiInput { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddressInput"></a>

```csharp
public object AssociatePublicIpAddressInput { get; }
```

- *Type:* object

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.instance.Instance.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `CapacityReservationSpecificationInput`<sup>Optional</sup> <a name="CapacityReservationSpecificationInput" id="@cdktf/provider-aws.instance.Instance.property.capacityReservationSpecificationInput"></a>

```csharp
public InstanceCapacityReservationSpecification CapacityReservationSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktf/provider-aws.instance.Instance.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `CpuThreadsPerCoreInput`<sup>Optional</sup> <a name="CpuThreadsPerCoreInput" id="@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCoreInput"></a>

```csharp
public double CpuThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `CreditSpecificationInput`<sup>Optional</sup> <a name="CreditSpecificationInput" id="@cdktf/provider-aws.instance.Instance.property.creditSpecificationInput"></a>

```csharp
public InstanceCreditSpecification CreditSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `DisableApiStopInput`<sup>Optional</sup> <a name="DisableApiStopInput" id="@cdktf/provider-aws.instance.Instance.property.disableApiStopInput"></a>

```csharp
public object DisableApiStopInput { get; }
```

- *Type:* object

---

##### `DisableApiTerminationInput`<sup>Optional</sup> <a name="DisableApiTerminationInput" id="@cdktf/provider-aws.instance.Instance.property.disableApiTerminationInput"></a>

```csharp
public object DisableApiTerminationInput { get; }
```

- *Type:* object

---

##### `EbsBlockDeviceInput`<sup>Optional</sup> <a name="EbsBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.ebsBlockDeviceInput"></a>

```csharp
public object EbsBlockDeviceInput { get; }
```

- *Type:* object

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-aws.instance.Instance.property.ebsOptimizedInput"></a>

```csharp
public object EbsOptimizedInput { get; }
```

- *Type:* object

---

##### `EnclaveOptionsInput`<sup>Optional</sup> <a name="EnclaveOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.enclaveOptionsInput"></a>

```csharp
public InstanceEnclaveOptions EnclaveOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `EphemeralBlockDeviceInput`<sup>Optional</sup> <a name="EphemeralBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.ephemeralBlockDeviceInput"></a>

```csharp
public object EphemeralBlockDeviceInput { get; }
```

- *Type:* object

---

##### `FetchPasswordDataInput`<sup>Optional</sup> <a name="FetchPasswordDataInput" id="@cdktf/provider-aws.instance.Instance.property.fetchPasswordDataInput"></a>

```csharp
public object FetchPasswordDataInput { get; }
```

- *Type:* object

---

##### `HibernationInput`<sup>Optional</sup> <a name="HibernationInput" id="@cdktf/provider-aws.instance.Instance.property.hibernationInput"></a>

```csharp
public object HibernationInput { get; }
```

- *Type:* object

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktf/provider-aws.instance.Instance.property.hostIdInput"></a>

```csharp
public string HostIdInput { get; }
```

- *Type:* string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArnInput"></a>

```csharp
public string HostResourceGroupArnInput { get; }
```

- *Type:* string

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-aws.instance.Instance.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.instance.Instance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehaviorInput" id="@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```csharp
public string InstanceInitiatedShutdownBehaviorInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.instance.Instance.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressCountInput"></a>

```csharp
public double Ipv6AddressCountInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressesInput"></a>

```csharp
public string[] Ipv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-aws.instance.Instance.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.instance.Instance.property.launchTemplateInput"></a>

```csharp
public InstanceLaunchTemplate LaunchTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `MaintenanceOptionsInput`<sup>Optional</sup> <a name="MaintenanceOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.maintenanceOptionsInput"></a>

```csharp
public InstanceMaintenanceOptions MaintenanceOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.metadataOptionsInput"></a>

```csharp
public InstanceMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-aws.instance.Instance.property.monitoringInput"></a>

```csharp
public object MonitoringInput { get; }
```

- *Type:* object

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-aws.instance.Instance.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `PlacementGroupInput`<sup>Optional</sup> <a name="PlacementGroupInput" id="@cdktf/provider-aws.instance.Instance.property.placementGroupInput"></a>

```csharp
public string PlacementGroupInput { get; }
```

- *Type:* string

---

##### `PlacementPartitionNumberInput`<sup>Optional</sup> <a name="PlacementPartitionNumberInput" id="@cdktf/provider-aws.instance.Instance.property.placementPartitionNumberInput"></a>

```csharp
public double PlacementPartitionNumberInput { get; }
```

- *Type:* double

---

##### `PrivateDnsNameOptionsInput`<sup>Optional</sup> <a name="PrivateDnsNameOptionsInput" id="@cdktf/provider-aws.instance.Instance.property.privateDnsNameOptionsInput"></a>

```csharp
public InstancePrivateDnsNameOptions PrivateDnsNameOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-aws.instance.Instance.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `RootBlockDeviceInput`<sup>Optional</sup> <a name="RootBlockDeviceInput" id="@cdktf/provider-aws.instance.Instance.property.rootBlockDeviceInput"></a>

```csharp
public InstanceRootBlockDevice RootBlockDeviceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `SecondaryPrivateIpsInput`<sup>Optional</sup> <a name="SecondaryPrivateIpsInput" id="@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIpsInput"></a>

```csharp
public string[] SecondaryPrivateIpsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.instance.Instance.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SourceDestCheckInput`<sup>Optional</sup> <a name="SourceDestCheckInput" id="@cdktf/provider-aws.instance.Instance.property.sourceDestCheckInput"></a>

```csharp
public object SourceDestCheckInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.instance.Instance.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.instance.Instance.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.instance.Instance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-aws.instance.Instance.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.instance.Instance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserDataBase64Input`<sup>Optional</sup> <a name="UserDataBase64Input" id="@cdktf/provider-aws.instance.Instance.property.userDataBase64Input"></a>

```csharp
public string UserDataBase64Input { get; }
```

- *Type:* string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-aws.instance.Instance.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `UserDataReplaceOnChangeInput`<sup>Optional</sup> <a name="UserDataReplaceOnChangeInput" id="@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChangeInput"></a>

```csharp
public object UserDataReplaceOnChangeInput { get; }
```

- *Type:* object

---

##### `VolumeTagsInput`<sup>Optional</sup> <a name="VolumeTagsInput" id="@cdktf/provider-aws.instance.Instance.property.volumeTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VolumeTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `Ami`<sup>Required</sup> <a name="Ami" id="@cdktf/provider-aws.instance.Instance.property.ami"></a>

```csharp
public string Ami { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.instance.Instance.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; }
```

- *Type:* object

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.instance.Instance.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-aws.instance.Instance.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CpuThreadsPerCore`<sup>Required</sup> <a name="CpuThreadsPerCore" id="@cdktf/provider-aws.instance.Instance.property.cpuThreadsPerCore"></a>

```csharp
public double CpuThreadsPerCore { get; }
```

- *Type:* double

---

##### `DisableApiStop`<sup>Required</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.instance.Instance.property.disableApiStop"></a>

```csharp
public object DisableApiStop { get; }
```

- *Type:* object

---

##### `DisableApiTermination`<sup>Required</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.instance.Instance.property.disableApiTermination"></a>

```csharp
public object DisableApiTermination { get; }
```

- *Type:* object

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.instance.Instance.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; }
```

- *Type:* object

---

##### `FetchPasswordData`<sup>Required</sup> <a name="FetchPasswordData" id="@cdktf/provider-aws.instance.Instance.property.fetchPasswordData"></a>

```csharp
public object FetchPasswordData { get; }
```

- *Type:* object

---

##### `Hibernation`<sup>Required</sup> <a name="Hibernation" id="@cdktf/provider-aws.instance.Instance.property.hibernation"></a>

```csharp
public object Hibernation { get; }
```

- *Type:* object

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-aws.instance.Instance.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.instance.Instance.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; }
```

- *Type:* string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.instance.Instance.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.instance.Instance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.Instance.property.instanceInitiatedShutdownBehavior"></a>

```csharp
public string InstanceInitiatedShutdownBehavior { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.instance.Instance.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.instance.Instance.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; }
```

- *Type:* double

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.instance.Instance.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; }
```

- *Type:* string[]

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-aws.instance.Instance.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-aws.instance.Instance.property.monitoring"></a>

```csharp
public object Monitoring { get; }
```

- *Type:* object

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.instance.Instance.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; }
```

- *Type:* string

---

##### `PlacementPartitionNumber`<sup>Required</sup> <a name="PlacementPartitionNumber" id="@cdktf/provider-aws.instance.Instance.property.placementPartitionNumber"></a>

```csharp
public double PlacementPartitionNumber { get; }
```

- *Type:* double

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-aws.instance.Instance.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `SecondaryPrivateIps`<sup>Required</sup> <a name="SecondaryPrivateIps" id="@cdktf/provider-aws.instance.Instance.property.secondaryPrivateIps"></a>

```csharp
public string[] SecondaryPrivateIps { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.instance.Instance.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SourceDestCheck`<sup>Required</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.instance.Instance.property.sourceDestCheck"></a>

```csharp
public object SourceDestCheck { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.instance.Instance.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.instance.Instance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.instance.Instance.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.instance.Instance.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-aws.instance.Instance.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `UserDataBase64`<sup>Required</sup> <a name="UserDataBase64" id="@cdktf/provider-aws.instance.Instance.property.userDataBase64"></a>

```csharp
public string UserDataBase64 { get; }
```

- *Type:* string

---

##### `UserDataReplaceOnChange`<sup>Required</sup> <a name="UserDataReplaceOnChange" id="@cdktf/provider-aws.instance.Instance.property.userDataReplaceOnChange"></a>

```csharp
public object UserDataReplaceOnChange { get; }
```

- *Type:* object

---

##### `VolumeTags`<sup>Required</sup> <a name="VolumeTags" id="@cdktf/provider-aws.instance.Instance.property.volumeTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VolumeTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.instance.Instance.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.Instance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.instance.Instance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceCapacityReservationSpecification <a name="InstanceCapacityReservationSpecification" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceCapacityReservationSpecification {
    string CapacityReservationPreference = null,
    InstanceCapacityReservationSpecificationCapacityReservationTarget CapacityReservationTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference"></a>

```csharp
public string CapacityReservationPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_preference Instance#capacity_reservation_preference}.

---

##### `CapacityReservationTarget`<sup>Optional</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget"></a>

```csharp
public InstanceCapacityReservationSpecificationCapacityReservationTarget CapacityReservationTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_target Instance#capacity_reservation_target}

---

### InstanceCapacityReservationSpecificationCapacityReservationTarget <a name="InstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceCapacityReservationSpecificationCapacityReservationTarget {
    string CapacityReservationId = null,
    string CapacityReservationResourceGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}. |

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_id Instance#capacity_reservation_id}.

---

##### `CapacityReservationResourceGroupArn`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```csharp
public string CapacityReservationResourceGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}.

---

### InstanceConfig <a name="InstanceConfig" id="@cdktf/provider-aws.instance.InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Ami = null,
    object AssociatePublicIpAddress = null,
    string AvailabilityZone = null,
    InstanceCapacityReservationSpecification CapacityReservationSpecification = null,
    double CpuCoreCount = null,
    double CpuThreadsPerCore = null,
    InstanceCreditSpecification CreditSpecification = null,
    object DisableApiStop = null,
    object DisableApiTermination = null,
    object EbsBlockDevice = null,
    object EbsOptimized = null,
    InstanceEnclaveOptions EnclaveOptions = null,
    object EphemeralBlockDevice = null,
    object FetchPasswordData = null,
    object Hibernation = null,
    string HostId = null,
    string HostResourceGroupArn = null,
    string IamInstanceProfile = null,
    string Id = null,
    string InstanceInitiatedShutdownBehavior = null,
    string InstanceType = null,
    double Ipv6AddressCount = null,
    string[] Ipv6Addresses = null,
    string KeyName = null,
    InstanceLaunchTemplate LaunchTemplate = null,
    InstanceMaintenanceOptions MaintenanceOptions = null,
    InstanceMetadataOptions MetadataOptions = null,
    object Monitoring = null,
    object NetworkInterface = null,
    string PlacementGroup = null,
    double PlacementPartitionNumber = null,
    InstancePrivateDnsNameOptions PrivateDnsNameOptions = null,
    string PrivateIp = null,
    InstanceRootBlockDevice RootBlockDevice = null,
    string[] SecondaryPrivateIps = null,
    string[] SecurityGroups = null,
    object SourceDestCheck = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string Tenancy = null,
    InstanceTimeouts Timeouts = null,
    string UserData = null,
    string UserDataBase64 = null,
    object UserDataReplaceOnChange = null,
    System.Collections.Generic.IDictionary<string, string> VolumeTags = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ami">Ami</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.cpuThreadsPerCore">CpuThreadsPerCore</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.disableApiStop">DisableApiStop</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.disableApiTermination">DisableApiTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code>object</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code>object</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.fetchPasswordData">FetchPasswordData</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hibernation">Hibernation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hostId">HostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.monitoring">Monitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.placementPartitionNumber">PlacementPartitionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.rootBlockDevice">RootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.secondaryPrivateIps">SecondaryPrivateIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.sourceDestCheck">SourceDestCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.tenancy">Tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userDataBase64">UserDataBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.userDataReplaceOnChange">UserDataReplaceOnChange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.volumeTags">VolumeTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.instance.InstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.instance.InstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.instance.InstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.instance.InstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.instance.InstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.instance.InstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.instance.InstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Ami`<sup>Optional</sup> <a name="Ami" id="@cdktf/provider-aws.instance.InstanceConfig.property.ami"></a>

```csharp
public string Ami { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ami Instance#ami}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.instance.InstanceConfig.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#associate_public_ip_address Instance#associate_public_ip_address}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.instance.InstanceConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#availability_zone Instance#availability_zone}.

---

##### `CapacityReservationSpecification`<sup>Optional</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.instance.InstanceConfig.property.capacityReservationSpecification"></a>

```csharp
public InstanceCapacityReservationSpecification CapacityReservationSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#capacity_reservation_specification Instance#capacity_reservation_specification}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktf/provider-aws.instance.InstanceConfig.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_core_count Instance#cpu_core_count}.

---

##### `CpuThreadsPerCore`<sup>Optional</sup> <a name="CpuThreadsPerCore" id="@cdktf/provider-aws.instance.InstanceConfig.property.cpuThreadsPerCore"></a>

```csharp
public double CpuThreadsPerCore { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_threads_per_core Instance#cpu_threads_per_core}.

---

##### `CreditSpecification`<sup>Optional</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.instance.InstanceConfig.property.creditSpecification"></a>

```csharp
public InstanceCreditSpecification CreditSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#credit_specification Instance#credit_specification}

---

##### `DisableApiStop`<sup>Optional</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.instance.InstanceConfig.property.disableApiStop"></a>

```csharp
public object DisableApiStop { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_stop Instance#disable_api_stop}.

---

##### `DisableApiTermination`<sup>Optional</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.instance.InstanceConfig.property.disableApiTermination"></a>

```csharp
public object DisableApiTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#disable_api_termination Instance#disable_api_termination}.

---

##### `EbsBlockDevice`<sup>Optional</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.ebsBlockDevice"></a>

```csharp
public object EbsBlockDevice { get; set; }
```

- *Type:* object

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_block_device Instance#ebs_block_device}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.instance.InstanceConfig.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ebs_optimized Instance#ebs_optimized}.

---

##### `EnclaveOptions`<sup>Optional</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.enclaveOptions"></a>

```csharp
public InstanceEnclaveOptions EnclaveOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enclave_options Instance#enclave_options}

---

##### `EphemeralBlockDevice`<sup>Optional</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.ephemeralBlockDevice"></a>

```csharp
public object EphemeralBlockDevice { get; set; }
```

- *Type:* object

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ephemeral_block_device Instance#ephemeral_block_device}

---

##### `FetchPasswordData`<sup>Optional</sup> <a name="FetchPasswordData" id="@cdktf/provider-aws.instance.InstanceConfig.property.fetchPasswordData"></a>

```csharp
public object FetchPasswordData { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#get_password_data Instance#get_password_data}.

---

##### `Hibernation`<sup>Optional</sup> <a name="Hibernation" id="@cdktf/provider-aws.instance.InstanceConfig.property.hibernation"></a>

```csharp
public object Hibernation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hibernation Instance#hibernation}.

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktf/provider-aws.instance.InstanceConfig.property.hostId"></a>

```csharp
public string HostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_id Instance#host_id}.

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceConfig.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#host_resource_group_arn Instance#host_resource_group_arn}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.instance.InstanceConfig.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iam_instance_profile Instance#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.instance.InstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```csharp
public string InstanceInitiatedShutdownBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.instance.InstanceConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_type Instance#instance_type}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.instance.InstanceConfig.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_address_count Instance#ipv6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.instance.InstanceConfig.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#ipv6_addresses Instance#ipv6_addresses}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-aws.instance.InstanceConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#key_name Instance#key_name}.

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.instance.InstanceConfig.property.launchTemplate"></a>

```csharp
public InstanceLaunchTemplate LaunchTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#launch_template Instance#launch_template}

---

##### `MaintenanceOptions`<sup>Optional</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.maintenanceOptions"></a>

```csharp
public InstanceMaintenanceOptions MaintenanceOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#maintenance_options Instance#maintenance_options}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.metadataOptions"></a>

```csharp
public InstanceMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#metadata_options Instance#metadata_options}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-aws.instance.InstanceConfig.property.monitoring"></a>

```csharp
public object Monitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#monitoring Instance#monitoring}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-aws.instance.InstanceConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface Instance#network_interface}

---

##### `PlacementGroup`<sup>Optional</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.instance.InstanceConfig.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_group Instance#placement_group}.

---

##### `PlacementPartitionNumber`<sup>Optional</sup> <a name="PlacementPartitionNumber" id="@cdktf/provider-aws.instance.InstanceConfig.property.placementPartitionNumber"></a>

```csharp
public double PlacementPartitionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#placement_partition_number Instance#placement_partition_number}.

---

##### `PrivateDnsNameOptions`<sup>Optional</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.instance.InstanceConfig.property.privateDnsNameOptions"></a>

```csharp
public InstancePrivateDnsNameOptions PrivateDnsNameOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_dns_name_options Instance#private_dns_name_options}

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-aws.instance.InstanceConfig.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#private_ip Instance#private_ip}.

---

##### `RootBlockDevice`<sup>Optional</sup> <a name="RootBlockDevice" id="@cdktf/provider-aws.instance.InstanceConfig.property.rootBlockDevice"></a>

```csharp
public InstanceRootBlockDevice RootBlockDevice { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#root_block_device Instance#root_block_device}

---

##### `SecondaryPrivateIps`<sup>Optional</sup> <a name="SecondaryPrivateIps" id="@cdktf/provider-aws.instance.InstanceConfig.property.secondaryPrivateIps"></a>

```csharp
public string[] SecondaryPrivateIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#secondary_private_ips Instance#secondary_private_ips}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.instance.InstanceConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#security_groups Instance#security_groups}.

---

##### `SourceDestCheck`<sup>Optional</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.instance.InstanceConfig.property.sourceDestCheck"></a>

```csharp
public object SourceDestCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#source_dest_check Instance#source_dest_check}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.instance.InstanceConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#subnet_id Instance#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.instance.InstanceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags_all Instance#tags_all}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-aws.instance.InstanceConfig.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tenancy Instance#tenancy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.instance.InstanceConfig.property.timeouts"></a>

```csharp
public InstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceTimeouts">InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#timeouts Instance#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-aws.instance.InstanceConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data Instance#user_data}.

---

##### `UserDataBase64`<sup>Optional</sup> <a name="UserDataBase64" id="@cdktf/provider-aws.instance.InstanceConfig.property.userDataBase64"></a>

```csharp
public string UserDataBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_base64 Instance#user_data_base64}.

---

##### `UserDataReplaceOnChange`<sup>Optional</sup> <a name="UserDataReplaceOnChange" id="@cdktf/provider-aws.instance.InstanceConfig.property.userDataReplaceOnChange"></a>

```csharp
public object UserDataReplaceOnChange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#user_data_replace_on_change Instance#user_data_replace_on_change}.

---

##### `VolumeTags`<sup>Optional</sup> <a name="VolumeTags" id="@cdktf/provider-aws.instance.InstanceConfig.property.volumeTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VolumeTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_tags Instance#volume_tags}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.instance.InstanceConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#vpc_security_group_ids Instance#vpc_security_group_ids}.

---

### InstanceCreditSpecification <a name="InstanceCreditSpecification" id="@cdktf/provider-aws.instance.InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceCreditSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceCreditSpecification {
    string CpuCredits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification.property.cpuCredits">CpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}. |

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecification.property.cpuCredits"></a>

```csharp
public string CpuCredits { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#cpu_credits Instance#cpu_credits}.

---

### InstanceEbsBlockDevice <a name="InstanceEbsBlockDevice" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceEbsBlockDevice {
    string DeviceName,
    object DeleteOnTermination = null,
    object Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    string SnapshotId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#snapshot_id Instance#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#snapshot_id Instance#snapshot_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDevice.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

### InstanceEnclaveOptions <a name="InstanceEnclaveOptions" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceEnclaveOptions {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptions.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enabled Instance#enabled}.

---

### InstanceEphemeralBlockDevice <a name="InstanceEphemeralBlockDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceEphemeralBlockDevice {
    string DeviceName,
    object NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.noDevice">NoDevice</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#no_device Instance#no_device}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.virtualName">VirtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#virtual_name Instance#virtual_name}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_name Instance#device_name}.

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.noDevice"></a>

```csharp
public object NoDevice { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#no_device Instance#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDevice.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#virtual_name Instance#virtual_name}.

---

### InstanceLaunchTemplate <a name="InstanceLaunchTemplate" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceLaunchTemplate {
    string Id = null,
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#name Instance#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplate.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#version Instance#version}.

---

### InstanceMaintenanceOptions <a name="InstanceMaintenanceOptions" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceMaintenanceOptions {
    string AutoRecovery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions.property.autoRecovery">AutoRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}. |

---

##### `AutoRecovery`<sup>Optional</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptions.property.autoRecovery"></a>

```csharp
public string AutoRecovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#auto_recovery Instance#auto_recovery}.

---

### InstanceMetadataOptions <a name="InstanceMetadataOptions" id="@cdktf/provider-aws.instance.InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceMetadataOptions {
    string HttpEndpoint = null,
    double HttpPutResponseHopLimit = null,
    string HttpTokens = null,
    string InstanceMetadataTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_endpoint Instance#http_endpoint}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}.

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#http_tokens Instance#http_tokens}.

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptions.property.instanceMetadataTags"></a>

```csharp
public string InstanceMetadataTags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#instance_metadata_tags Instance#instance_metadata_tags}.

---

### InstanceNetworkInterface <a name="InstanceNetworkInterface" id="@cdktf/provider-aws.instance.InstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceNetworkInterface {
    double DeviceIndex,
    string NetworkInterfaceId,
    object DeleteOnTermination = null,
    double NetworkCardIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_index Instance#device_index}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface_id Instance#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkCardIndex">NetworkCardIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_card_index Instance#network_card_index}. |

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#device_index Instance#device_index}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_interface_id Instance#network_interface_id}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `NetworkCardIndex`<sup>Optional</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterface.property.networkCardIndex"></a>

```csharp
public double NetworkCardIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#network_card_index Instance#network_card_index}.

---

### InstancePrivateDnsNameOptions <a name="InstancePrivateDnsNameOptions" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstancePrivateDnsNameOptions {
    object EnableResourceNameDnsAaaaRecord = null,
    object EnableResourceNameDnsARecord = null,
    string HostnameType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.hostnameType">HostnameType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}. |

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```csharp
public object EnableResourceNameDnsAaaaRecord { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}.

---

##### `EnableResourceNameDnsARecord`<sup>Optional</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```csharp
public object EnableResourceNameDnsARecord { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}.

---

##### `HostnameType`<sup>Optional</sup> <a name="HostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions.property.hostnameType"></a>

```csharp
public string HostnameType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#hostname_type Instance#hostname_type}.

---

### InstanceRootBlockDevice <a name="InstanceRootBlockDevice" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceRootBlockDevice {
    object DeleteOnTermination = null,
    object Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#encrypted Instance#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#iops Instance#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#kms_key_id Instance#kms_key_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#tags Instance#tags}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#throughput Instance#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_size Instance#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDevice.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#volume_type Instance#volume_type}.

---

### InstanceTimeouts <a name="InstanceTimeouts" id="@cdktf/provider-aws.instance.InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.instance.InstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#create Instance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#delete Instance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.instance.InstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance#update Instance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```csharp
private void ResetCapacityReservationId()
```

##### `ResetCapacityReservationResourceGroupArn` <a name="ResetCapacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```csharp
private void ResetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">CapacityReservationResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```csharp
public string CapacityReservationIdInput { get; }
```

- *Type:* string

---

##### `CapacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArnInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```csharp
public string CapacityReservationResourceGroupArnInput { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```csharp
public string CapacityReservationResourceGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```csharp
public InstanceCapacityReservationSpecificationCapacityReservationTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### InstanceCapacityReservationSpecificationOutputReference <a name="InstanceCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceCapacityReservationSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationTarget` <a name="PutCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```csharp
private void PutCapacityReservationTarget(InstanceCapacityReservationSpecificationCapacityReservationTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```csharp
private void ResetCapacityReservationPreference()
```

##### `ResetCapacityReservationTarget` <a name="ResetCapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```csharp
private void ResetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">CapacityReservationTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```csharp
public InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference CapacityReservationTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```csharp
public string CapacityReservationPreferenceInput { get; }
```

- *Type:* string

---

##### `CapacityReservationTargetInput`<sup>Optional</sup> <a name="CapacityReservationTargetInput" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```csharp
public InstanceCapacityReservationSpecificationCapacityReservationTarget CapacityReservationTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```csharp
public string CapacityReservationPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```csharp
public InstanceCapacityReservationSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---


### InstanceCreditSpecificationOutputReference <a name="InstanceCreditSpecificationOutputReference" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceCreditSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```csharp
private void ResetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```csharp
public string CpuCreditsInput { get; }
```

- *Type:* string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```csharp
public string CpuCredits { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```csharp
public InstanceCreditSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---


### InstanceEbsBlockDeviceList <a name="InstanceEbsBlockDeviceList" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceEbsBlockDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get"></a>

```csharp
private InstanceEbsBlockDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstanceEbsBlockDeviceOutputReference <a name="InstanceEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceEbsBlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstanceEnclaveOptionsOutputReference <a name="InstanceEnclaveOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceEnclaveOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```csharp
public InstanceEnclaveOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---


### InstanceEphemeralBlockDeviceList <a name="InstanceEphemeralBlockDeviceList" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceEphemeralBlockDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get"></a>

```csharp
private InstanceEphemeralBlockDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstanceEphemeralBlockDeviceOutputReference <a name="InstanceEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceEphemeralBlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice">NoDevice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```csharp
public object NoDeviceInput { get; }
```

- *Type:* object

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```csharp
public object NoDevice { get; }
```

- *Type:* object

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstanceLaunchTemplateOutputReference <a name="InstanceLaunchTemplateOutputReference" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public InstanceLaunchTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---


### InstanceMaintenanceOptionsOutputReference <a name="InstanceMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceMaintenanceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRecovery` <a name="ResetAutoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```csharp
private void ResetAutoRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput">AutoRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecovery">AutoRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRecoveryInput`<sup>Optional</sup> <a name="AutoRecoveryInput" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```csharp
public string AutoRecoveryInput { get; }
```

- *Type:* string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```csharp
public string AutoRecovery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```csharp
public InstanceMaintenanceOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMaintenanceOptions">InstanceMaintenanceOptions</a>

---


### InstanceMetadataOptionsOutputReference <a name="InstanceMetadataOptionsOutputReference" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```csharp
private void ResetHttpEndpoint()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```csharp
private void ResetHttpTokens()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```csharp
private void ResetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```csharp
public string HttpEndpointInput { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```csharp
public string InstanceMetadataTagsInput { get; }
```

- *Type:* string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```csharp
public string InstanceMetadataTags { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public InstanceMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---


### InstanceNetworkInterfaceList <a name="InstanceNetworkInterfaceList" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get"></a>

```csharp
private InstanceNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstanceNetworkInterfaceOutputReference <a name="InstanceNetworkInterfaceOutputReference" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetNetworkCardIndex` <a name="ResetNetworkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.resetNetworkCardIndex"></a>

```csharp
private void ResetNetworkCardIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndexInput">NetworkCardIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```csharp
public double DeviceIndexInput { get; }
```

- *Type:* double

---

##### `NetworkCardIndexInput`<sup>Optional</sup> <a name="NetworkCardIndexInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndexInput"></a>

```csharp
public double NetworkCardIndexInput { get; }
```

- *Type:* double

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; }
```

- *Type:* double

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkCardIndex"></a>

```csharp
public double NetworkCardIndex { get; }
```

- *Type:* double

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstancePrivateDnsNameOptionsOutputReference <a name="InstancePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstancePrivateDnsNameOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResourceNameDnsAaaaRecord` <a name="ResetEnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```csharp
private void ResetEnableResourceNameDnsAaaaRecord()
```

##### `ResetEnableResourceNameDnsARecord` <a name="ResetEnableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```csharp
private void ResetEnableResourceNameDnsARecord()
```

##### `ResetHostnameType` <a name="ResetHostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```csharp
private void ResetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">EnableResourceNameDnsAaaaRecordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">EnableResourceNameDnsARecordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">HostnameTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```csharp
public object EnableResourceNameDnsAaaaRecordInput { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```csharp
public object EnableResourceNameDnsARecordInput { get; }
```

- *Type:* object

---

##### `HostnameTypeInput`<sup>Optional</sup> <a name="HostnameTypeInput" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```csharp
public string HostnameTypeInput { get; }
```

- *Type:* string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```csharp
public object EnableResourceNameDnsAaaaRecord { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```csharp
public object EnableResourceNameDnsARecord { get; }
```

- *Type:* object

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```csharp
public string HostnameType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```csharp
public InstancePrivateDnsNameOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstancePrivateDnsNameOptions">InstancePrivateDnsNameOptions</a>

---


### InstanceRootBlockDeviceOutputReference <a name="InstanceRootBlockDeviceOutputReference" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceRootBlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceRootBlockDeviceOutputReference.property.internalValue"></a>

```csharp
public InstanceRootBlockDevice InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---


### InstanceTimeoutsOutputReference <a name="InstanceTimeoutsOutputReference" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.instance.InstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



