# `spotInstanceRequest` Submodule <a name="`spotInstanceRequest` Submodule" id="@cdktf/provider-aws.spotInstanceRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotInstanceRequest <a name="SpotInstanceRequest" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request aws_spot_instance_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequest(scope: Construct, id: string, config?: SpotInstanceRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig">SpotInstanceRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig">SpotInstanceRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification">putCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification">putCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions">putEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions">putMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions">putPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice">putRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAmi">resetAmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetBlockDurationMinutes">resetBlockDurationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCapacityReservationSpecification">resetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuThreadsPerCore">resetCpuThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCreditSpecification">resetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiStop">resetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiTermination">resetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEnclaveOptions">resetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetFetchPasswordData">resetFetchPasswordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHibernation">resetHibernation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostResourceGroupArn">resetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInitiatedShutdownBehavior">resetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInterruptionBehavior">resetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchGroup">resetLaunchGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMaintenanceOptions">resetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementPartitionNumber">resetPlacementPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateDnsNameOptions">resetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetRootBlockDevice">resetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecondaryPrivateIps">resetSecondaryPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSourceDestCheck">resetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotType">resetSpotType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataBase64">resetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataReplaceOnChange">resetUserDataReplaceOnChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidFrom">resetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidUntil">resetValidUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVolumeTags">resetVolumeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetWaitForFulfillment">resetWaitForFulfillment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCapacityReservationSpecification` <a name="putCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification"></a>

```typescript
public putCapacityReservationSpecification(value: SpotInstanceRequestCapacityReservationSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---

##### `putCreditSpecification` <a name="putCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification"></a>

```typescript
public putCreditSpecification(value: SpotInstanceRequestCreditSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice"></a>

```typescript
public putEbsBlockDevice(value: IResolvable | SpotInstanceRequestEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>[]

---

##### `putEnclaveOptions` <a name="putEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions"></a>

```typescript
public putEnclaveOptions(value: SpotInstanceRequestEnclaveOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice"></a>

```typescript
public putEphemeralBlockDevice(value: IResolvable | SpotInstanceRequestEphemeralBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>[]

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate"></a>

```typescript
public putLaunchTemplate(value: SpotInstanceRequestLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---

##### `putMaintenanceOptions` <a name="putMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions"></a>

```typescript
public putMaintenanceOptions(value: SpotInstanceRequestMaintenanceOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions"></a>

```typescript
public putMetadataOptions(value: SpotInstanceRequestMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | SpotInstanceRequestNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>[]

---

##### `putPrivateDnsNameOptions` <a name="putPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions"></a>

```typescript
public putPrivateDnsNameOptions(value: SpotInstanceRequestPrivateDnsNameOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---

##### `putRootBlockDevice` <a name="putRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice"></a>

```typescript
public putRootBlockDevice(value: SpotInstanceRequestRootBlockDevice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putRootBlockDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts"></a>

```typescript
public putTimeouts(value: SpotInstanceRequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

---

##### `resetAmi` <a name="resetAmi" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAmi"></a>

```typescript
public resetAmi(): void
```

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBlockDurationMinutes` <a name="resetBlockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetBlockDurationMinutes"></a>

```typescript
public resetBlockDurationMinutes(): void
```

##### `resetCapacityReservationSpecification` <a name="resetCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCapacityReservationSpecification"></a>

```typescript
public resetCapacityReservationSpecification(): void
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuCoreCount"></a>

```typescript
public resetCpuCoreCount(): void
```

##### `resetCpuThreadsPerCore` <a name="resetCpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCpuThreadsPerCore"></a>

```typescript
public resetCpuThreadsPerCore(): void
```

##### `resetCreditSpecification` <a name="resetCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetCreditSpecification"></a>

```typescript
public resetCreditSpecification(): void
```

##### `resetDisableApiStop` <a name="resetDisableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiStop"></a>

```typescript
public resetDisableApiStop(): void
```

##### `resetDisableApiTermination` <a name="resetDisableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetDisableApiTermination"></a>

```typescript
public resetDisableApiTermination(): void
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsBlockDevice"></a>

```typescript
public resetEbsBlockDevice(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetEnclaveOptions` <a name="resetEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEnclaveOptions"></a>

```typescript
public resetEnclaveOptions(): void
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetEphemeralBlockDevice"></a>

```typescript
public resetEphemeralBlockDevice(): void
```

##### `resetFetchPasswordData` <a name="resetFetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetFetchPasswordData"></a>

```typescript
public resetFetchPasswordData(): void
```

##### `resetHibernation` <a name="resetHibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHibernation"></a>

```typescript
public resetHibernation(): void
```

##### `resetHostId` <a name="resetHostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostId"></a>

```typescript
public resetHostId(): void
```

##### `resetHostResourceGroupArn` <a name="resetHostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetHostResourceGroupArn"></a>

```typescript
public resetHostResourceGroupArn(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceInitiatedShutdownBehavior` <a name="resetInstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInitiatedShutdownBehavior"></a>

```typescript
public resetInstanceInitiatedShutdownBehavior(): void
```

##### `resetInstanceInterruptionBehavior` <a name="resetInstanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceInterruptionBehavior"></a>

```typescript
public resetInstanceInterruptionBehavior(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6AddressCount"></a>

```typescript
public resetIpv6AddressCount(): void
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetIpv6Addresses"></a>

```typescript
public resetIpv6Addresses(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetLaunchGroup` <a name="resetLaunchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchGroup"></a>

```typescript
public resetLaunchGroup(): void
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetLaunchTemplate"></a>

```typescript
public resetLaunchTemplate(): void
```

##### `resetMaintenanceOptions` <a name="resetMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMaintenanceOptions"></a>

```typescript
public resetMaintenanceOptions(): void
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMetadataOptions"></a>

```typescript
public resetMetadataOptions(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementGroup"></a>

```typescript
public resetPlacementGroup(): void
```

##### `resetPlacementPartitionNumber` <a name="resetPlacementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPlacementPartitionNumber"></a>

```typescript
public resetPlacementPartitionNumber(): void
```

##### `resetPrivateDnsNameOptions` <a name="resetPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateDnsNameOptions"></a>

```typescript
public resetPrivateDnsNameOptions(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetRootBlockDevice` <a name="resetRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetRootBlockDevice"></a>

```typescript
public resetRootBlockDevice(): void
```

##### `resetSecondaryPrivateIps` <a name="resetSecondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecondaryPrivateIps"></a>

```typescript
public resetSecondaryPrivateIps(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSourceDestCheck` <a name="resetSourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSourceDestCheck"></a>

```typescript
public resetSourceDestCheck(): void
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotPrice"></a>

```typescript
public resetSpotPrice(): void
```

##### `resetSpotType` <a name="resetSpotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSpotType"></a>

```typescript
public resetSpotType(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTenancy"></a>

```typescript
public resetTenancy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetUserDataBase64` <a name="resetUserDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataBase64"></a>

```typescript
public resetUserDataBase64(): void
```

##### `resetUserDataReplaceOnChange` <a name="resetUserDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetUserDataReplaceOnChange"></a>

```typescript
public resetUserDataReplaceOnChange(): void
```

##### `resetValidFrom` <a name="resetValidFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidFrom"></a>

```typescript
public resetValidFrom(): void
```

##### `resetValidUntil` <a name="resetValidUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetValidUntil"></a>

```typescript
public resetValidUntil(): void
```

##### `resetVolumeTags` <a name="resetVolumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVolumeTags"></a>

```typescript
public resetVolumeTags(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

##### `resetWaitForFulfillment` <a name="resetWaitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.resetWaitForFulfillment"></a>

```typescript
public resetWaitForFulfillment(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isConstruct"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

spotInstanceRequest.SpotInstanceRequest.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

spotInstanceRequest.SpotInstanceRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

spotInstanceRequest.SpotInstanceRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference">SpotInstanceRequestCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference">SpotInstanceRequestCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList">SpotInstanceRequestEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference">SpotInstanceRequestEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList">SpotInstanceRequestEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceState">instanceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference">SpotInstanceRequestLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference">SpotInstanceRequestMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference">SpotInstanceRequestMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList">SpotInstanceRequestNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.passwordData">passwordData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.primaryNetworkInterfaceId">primaryNetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDns">privateDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference">SpotInstanceRequestPrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicDns">publicDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference">SpotInstanceRequestRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotBidStatus">spotBidStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotInstanceId">spotInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotRequestState">spotRequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference">SpotInstanceRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.amiInput">amiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutesInput">blockDurationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecificationInput">capacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCoreInput">cpuThreadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecificationInput">creditSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStopInput">disableApiStopInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTerminationInput">disableApiTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptionsInput">enclaveOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordDataInput">fetchPasswordDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernationInput">hibernationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArnInput">hostResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehaviorInput">instanceInitiatedShutdownBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehaviorInput">instanceInterruptionBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroupInput">launchGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptionsInput">maintenanceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoringInput">monitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroupInput">placementGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumberInput">placementPartitionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptionsInput">privateDnsNameOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDeviceInput">rootBlockDeviceInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIpsInput">secondaryPrivateIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheckInput">sourceDestCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPriceInput">spotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotTypeInput">spotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64Input">userDataBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChangeInput">userDataReplaceOnChangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFromInput">validFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntilInput">validUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTagsInput">volumeTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillmentInput">waitForFulfillmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ami">ami</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStop">disableApiStop</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordData">fetchPasswordData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernation">hibernation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroup">launchGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoring">monitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroup">placementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumber">placementPartitionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheck">sourceDestCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPrice">spotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotType">spotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64">userDataBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChange">userDataReplaceOnChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFrom">validFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntil">validUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTags">volumeTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillment">waitForFulfillment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: SpotInstanceRequestCapacityReservationSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference">SpotInstanceRequestCapacityReservationSpecificationOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: SpotInstanceRequestCreditSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference">SpotInstanceRequestCreditSpecificationOutputReference</a>

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: SpotInstanceRequestEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList">SpotInstanceRequestEbsBlockDeviceList</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: SpotInstanceRequestEnclaveOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference">SpotInstanceRequestEnclaveOptionsOutputReference</a>

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: SpotInstanceRequestEphemeralBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList">SpotInstanceRequestEphemeralBlockDeviceList</a>

---

##### `instanceState`<sup>Required</sup> <a name="instanceState" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceState"></a>

```typescript
public readonly instanceState: string;
```

- *Type:* string

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: SpotInstanceRequestLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference">SpotInstanceRequestLaunchTemplateOutputReference</a>

---

##### `maintenanceOptions`<sup>Required</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptions"></a>

```typescript
public readonly maintenanceOptions: SpotInstanceRequestMaintenanceOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference">SpotInstanceRequestMaintenanceOptionsOutputReference</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: SpotInstanceRequestMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference">SpotInstanceRequestMetadataOptionsOutputReference</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterface"></a>

```typescript
public readonly networkInterface: SpotInstanceRequestNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList">SpotInstanceRequestNetworkInterfaceList</a>

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `passwordData`<sup>Required</sup> <a name="passwordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.passwordData"></a>

```typescript
public readonly passwordData: string;
```

- *Type:* string

---

##### `primaryNetworkInterfaceId`<sup>Required</sup> <a name="primaryNetworkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.primaryNetworkInterfaceId"></a>

```typescript
public readonly primaryNetworkInterfaceId: string;
```

- *Type:* string

---

##### `privateDns`<sup>Required</sup> <a name="privateDns" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDns"></a>

```typescript
public readonly privateDns: string;
```

- *Type:* string

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptions"></a>

```typescript
public readonly privateDnsNameOptions: SpotInstanceRequestPrivateDnsNameOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference">SpotInstanceRequestPrivateDnsNameOptionsOutputReference</a>

---

##### `publicDns`<sup>Required</sup> <a name="publicDns" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicDns"></a>

```typescript
public readonly publicDns: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `rootBlockDevice`<sup>Required</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: SpotInstanceRequestRootBlockDeviceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference">SpotInstanceRequestRootBlockDeviceOutputReference</a>

---

##### `spotBidStatus`<sup>Required</sup> <a name="spotBidStatus" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotBidStatus"></a>

```typescript
public readonly spotBidStatus: string;
```

- *Type:* string

---

##### `spotInstanceId`<sup>Required</sup> <a name="spotInstanceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotInstanceId"></a>

```typescript
public readonly spotInstanceId: string;
```

- *Type:* string

---

##### `spotRequestState`<sup>Required</sup> <a name="spotRequestState" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotRequestState"></a>

```typescript
public readonly spotRequestState: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeouts"></a>

```typescript
public readonly timeouts: SpotInstanceRequestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference">SpotInstanceRequestTimeoutsOutputReference</a>

---

##### `amiInput`<sup>Optional</sup> <a name="amiInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.amiInput"></a>

```typescript
public readonly amiInput: string;
```

- *Type:* string

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `blockDurationMinutesInput`<sup>Optional</sup> <a name="blockDurationMinutesInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutesInput"></a>

```typescript
public readonly blockDurationMinutesInput: number;
```

- *Type:* number

---

##### `capacityReservationSpecificationInput`<sup>Optional</sup> <a name="capacityReservationSpecificationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.capacityReservationSpecificationInput"></a>

```typescript
public readonly capacityReservationSpecificationInput: SpotInstanceRequestCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `cpuThreadsPerCoreInput`<sup>Optional</sup> <a name="cpuThreadsPerCoreInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCoreInput"></a>

```typescript
public readonly cpuThreadsPerCoreInput: number;
```

- *Type:* number

---

##### `creditSpecificationInput`<sup>Optional</sup> <a name="creditSpecificationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.creditSpecificationInput"></a>

```typescript
public readonly creditSpecificationInput: SpotInstanceRequestCreditSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---

##### `disableApiStopInput`<sup>Optional</sup> <a name="disableApiStopInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStopInput"></a>

```typescript
public readonly disableApiStopInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableApiTerminationInput`<sup>Optional</sup> <a name="disableApiTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTerminationInput"></a>

```typescript
public readonly disableApiTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsBlockDeviceInput"></a>

```typescript
public readonly ebsBlockDeviceInput: IResolvable | SpotInstanceRequestEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>[]

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enclaveOptionsInput`<sup>Optional</sup> <a name="enclaveOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.enclaveOptionsInput"></a>

```typescript
public readonly enclaveOptionsInput: SpotInstanceRequestEnclaveOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ephemeralBlockDeviceInput"></a>

```typescript
public readonly ephemeralBlockDeviceInput: IResolvable | SpotInstanceRequestEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>[]

---

##### `fetchPasswordDataInput`<sup>Optional</sup> <a name="fetchPasswordDataInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordDataInput"></a>

```typescript
public readonly fetchPasswordDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hibernationInput`<sup>Optional</sup> <a name="hibernationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernationInput"></a>

```typescript
public readonly hibernationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `hostResourceGroupArnInput`<sup>Optional</sup> <a name="hostResourceGroupArnInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArnInput"></a>

```typescript
public readonly hostResourceGroupArnInput: string;
```

- *Type:* string

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehaviorInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehaviorInput"></a>

```typescript
public readonly instanceInitiatedShutdownBehaviorInput: string;
```

- *Type:* string

---

##### `instanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="instanceInterruptionBehaviorInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehaviorInput"></a>

```typescript
public readonly instanceInterruptionBehaviorInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCountInput"></a>

```typescript
public readonly ipv6AddressCountInput: number;
```

- *Type:* number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressesInput"></a>

```typescript
public readonly ipv6AddressesInput: string[];
```

- *Type:* string[]

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `launchGroupInput`<sup>Optional</sup> <a name="launchGroupInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroupInput"></a>

```typescript
public readonly launchGroupInput: string;
```

- *Type:* string

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchTemplateInput"></a>

```typescript
public readonly launchTemplateInput: SpotInstanceRequestLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---

##### `maintenanceOptionsInput`<sup>Optional</sup> <a name="maintenanceOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.maintenanceOptionsInput"></a>

```typescript
public readonly maintenanceOptionsInput: SpotInstanceRequestMaintenanceOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.metadataOptionsInput"></a>

```typescript
public readonly metadataOptionsInput: SpotInstanceRequestMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | SpotInstanceRequestNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>[]

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroupInput"></a>

```typescript
public readonly placementGroupInput: string;
```

- *Type:* string

---

##### `placementPartitionNumberInput`<sup>Optional</sup> <a name="placementPartitionNumberInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumberInput"></a>

```typescript
public readonly placementPartitionNumberInput: number;
```

- *Type:* number

---

##### `privateDnsNameOptionsInput`<sup>Optional</sup> <a name="privateDnsNameOptionsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateDnsNameOptionsInput"></a>

```typescript
public readonly privateDnsNameOptionsInput: SpotInstanceRequestPrivateDnsNameOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `rootBlockDeviceInput`<sup>Optional</sup> <a name="rootBlockDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.rootBlockDeviceInput"></a>

```typescript
public readonly rootBlockDeviceInput: SpotInstanceRequestRootBlockDevice;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---

##### `secondaryPrivateIpsInput`<sup>Optional</sup> <a name="secondaryPrivateIpsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIpsInput"></a>

```typescript
public readonly secondaryPrivateIpsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `sourceDestCheckInput`<sup>Optional</sup> <a name="sourceDestCheckInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheckInput"></a>

```typescript
public readonly sourceDestCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPriceInput"></a>

```typescript
public readonly spotPriceInput: string;
```

- *Type:* string

---

##### `spotTypeInput`<sup>Optional</sup> <a name="spotTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotTypeInput"></a>

```typescript
public readonly spotTypeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SpotInstanceRequestTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a> | cdktf.IResolvable

---

##### `userDataBase64Input`<sup>Optional</sup> <a name="userDataBase64Input" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64Input"></a>

```typescript
public readonly userDataBase64Input: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `userDataReplaceOnChangeInput`<sup>Optional</sup> <a name="userDataReplaceOnChangeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChangeInput"></a>

```typescript
public readonly userDataReplaceOnChangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validFromInput`<sup>Optional</sup> <a name="validFromInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFromInput"></a>

```typescript
public readonly validFromInput: string;
```

- *Type:* string

---

##### `validUntilInput`<sup>Optional</sup> <a name="validUntilInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntilInput"></a>

```typescript
public readonly validUntilInput: string;
```

- *Type:* string

---

##### `volumeTagsInput`<sup>Optional</sup> <a name="volumeTagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTagsInput"></a>

```typescript
public readonly volumeTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `waitForFulfillmentInput`<sup>Optional</sup> <a name="waitForFulfillmentInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillmentInput"></a>

```typescript
public readonly waitForFulfillmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* string

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `cpuThreadsPerCore`<sup>Required</sup> <a name="cpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.cpuThreadsPerCore"></a>

```typescript
public readonly cpuThreadsPerCore: number;
```

- *Type:* number

---

##### `disableApiStop`<sup>Required</sup> <a name="disableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiStop"></a>

```typescript
public readonly disableApiStop: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchPasswordData`<sup>Required</sup> <a name="fetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.fetchPasswordData"></a>

```typescript
public readonly fetchPasswordData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hibernation`<sup>Required</sup> <a name="hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hibernation"></a>

```typescript
public readonly hibernation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

---

##### `instanceInterruptionBehavior`<sup>Required</sup> <a name="instanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceInterruptionBehavior"></a>

```typescript
public readonly instanceInterruptionBehavior: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `launchGroup`<sup>Required</sup> <a name="launchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.launchGroup"></a>

```typescript
public readonly launchGroup: string;
```

- *Type:* string

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

---

##### `placementPartitionNumber`<sup>Required</sup> <a name="placementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.placementPartitionNumber"></a>

```typescript
public readonly placementPartitionNumber: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `secondaryPrivateIps`<sup>Required</sup> <a name="secondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.secondaryPrivateIps"></a>

```typescript
public readonly secondaryPrivateIps: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.sourceDestCheck"></a>

```typescript
public readonly sourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

---

##### `spotType`<sup>Required</sup> <a name="spotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.spotType"></a>

```typescript
public readonly spotType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `userDataBase64`<sup>Required</sup> <a name="userDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataBase64"></a>

```typescript
public readonly userDataBase64: string;
```

- *Type:* string

---

##### `userDataReplaceOnChange`<sup>Required</sup> <a name="userDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.userDataReplaceOnChange"></a>

```typescript
public readonly userDataReplaceOnChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validFrom"></a>

```typescript
public readonly validFrom: string;
```

- *Type:* string

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

---

##### `volumeTags`<sup>Required</sup> <a name="volumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.volumeTags"></a>

```typescript
public readonly volumeTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `waitForFulfillment`<sup>Required</sup> <a name="waitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.waitForFulfillment"></a>

```typescript
public readonly waitForFulfillment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpotInstanceRequestCapacityReservationSpecification <a name="SpotInstanceRequestCapacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestCapacityReservationSpecification: spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `capacityReservationPreference`<sup>Optional</sup> <a name="capacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}.

---

##### `capacityReservationTarget`<sup>Optional</sup> <a name="capacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}

---

### SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget <a name="SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget: spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}. |

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}.

---

##### `capacityReservationResourceGroupArn`<sup>Optional</sup> <a name="capacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```typescript
public readonly capacityReservationResourceGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}.

---

### SpotInstanceRequestConfig <a name="SpotInstanceRequestConfig" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestConfig: spotInstanceRequest.SpotInstanceRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ami">ami</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiStop">disableApiStop</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>[]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>[]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.fetchPasswordData">fetchPasswordData</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hibernation">hibernation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostId">hostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchGroup">launchGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.monitoring">monitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementGroup">placementGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementPartitionNumber">placementPartitionNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.sourceDestCheck">sourceDestCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotPrice">spotPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotType">spotType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tenancy">tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataBase64">userDataBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataReplaceOnChange">userDataReplaceOnChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validFrom">validFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validUntil">validUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.volumeTags">volumeTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.waitForFulfillment">waitForFulfillment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ami SpotInstanceRequest#ami}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}.

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}.

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: SpotInstanceRequestCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}.

---

##### `cpuThreadsPerCore`<sup>Optional</sup> <a name="cpuThreadsPerCore" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.cpuThreadsPerCore"></a>

```typescript
public readonly cpuThreadsPerCore: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: SpotInstanceRequestCreditSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#credit_specification SpotInstanceRequest#credit_specification}

---

##### `disableApiStop`<sup>Optional</sup> <a name="disableApiStop" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiStop"></a>

```typescript
public readonly disableApiStop: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: IResolvable | SpotInstanceRequestEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>[]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_block_device SpotInstanceRequest#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: SpotInstanceRequestEnclaveOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enclave_options SpotInstanceRequest#enclave_options}

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: IResolvable | SpotInstanceRequestEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>[]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}

---

##### `fetchPasswordData`<sup>Optional</sup> <a name="fetchPasswordData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.fetchPasswordData"></a>

```typescript
public readonly fetchPasswordData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hibernation"></a>

```typescript
public readonly hibernation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hibernation SpotInstanceRequest#hibernation}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_id SpotInstanceRequest#host_id}.

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}.

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}.

---

##### `instanceInterruptionBehavior`<sup>Optional</sup> <a name="instanceInterruptionBehavior" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceInterruptionBehavior"></a>

```typescript
public readonly instanceInterruptionBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_type SpotInstanceRequest#instance_type}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#key_name SpotInstanceRequest#key_name}.

---

##### `launchGroup`<sup>Optional</sup> <a name="launchGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchGroup"></a>

```typescript
public readonly launchGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_group SpotInstanceRequest#launch_group}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: SpotInstanceRequestLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#launch_template SpotInstanceRequest#launch_template}

---

##### `maintenanceOptions`<sup>Optional</sup> <a name="maintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.maintenanceOptions"></a>

```typescript
public readonly maintenanceOptions: SpotInstanceRequestMaintenanceOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#maintenance_options SpotInstanceRequest#maintenance_options}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: SpotInstanceRequestMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#metadata_options SpotInstanceRequest#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#monitoring SpotInstanceRequest#monitoring}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | SpotInstanceRequestNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface SpotInstanceRequest#network_interface}

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_group SpotInstanceRequest#placement_group}.

---

##### `placementPartitionNumber`<sup>Optional</sup> <a name="placementPartitionNumber" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.placementPartitionNumber"></a>

```typescript
public readonly placementPartitionNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}.

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateDnsNameOptions"></a>

```typescript
public readonly privateDnsNameOptions: SpotInstanceRequestPrivateDnsNameOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_dns_name_options SpotInstanceRequest#private_dns_name_options}

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#private_ip SpotInstanceRequest#private_ip}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: SpotInstanceRequestRootBlockDevice;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#root_block_device SpotInstanceRequest#root_block_device}

---

##### `secondaryPrivateIps`<sup>Optional</sup> <a name="secondaryPrivateIps" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.secondaryPrivateIps"></a>

```typescript
public readonly secondaryPrivateIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#security_groups SpotInstanceRequest#security_groups}.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.sourceDestCheck"></a>

```typescript
public readonly sourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}.

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_price SpotInstanceRequest#spot_price}.

---

##### `spotType`<sup>Optional</sup> <a name="spotType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.spotType"></a>

```typescript
public readonly spotType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#spot_type SpotInstanceRequest#spot_type}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags_all SpotInstanceRequest#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tenancy SpotInstanceRequest#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpotInstanceRequestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#timeouts SpotInstanceRequest#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data SpotInstanceRequest#user_data}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataBase64"></a>

```typescript
public readonly userDataBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}.

---

##### `userDataReplaceOnChange`<sup>Optional</sup> <a name="userDataReplaceOnChange" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.userDataReplaceOnChange"></a>

```typescript
public readonly userDataReplaceOnChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}.

---

##### `validFrom`<sup>Optional</sup> <a name="validFrom" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validFrom"></a>

```typescript
public readonly validFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_from SpotInstanceRequest#valid_from}.

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#valid_until SpotInstanceRequest#valid_until}.

---

##### `volumeTags`<sup>Optional</sup> <a name="volumeTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.volumeTags"></a>

```typescript
public readonly volumeTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}.

---

##### `waitForFulfillment`<sup>Optional</sup> <a name="waitForFulfillment" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestConfig.property.waitForFulfillment"></a>

```typescript
public readonly waitForFulfillment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}.

---

### SpotInstanceRequestCreditSpecification <a name="SpotInstanceRequestCreditSpecification" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestCreditSpecification: spotInstanceRequest.SpotInstanceRequestCreditSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}. |

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}.

---

### SpotInstanceRequestEbsBlockDevice <a name="SpotInstanceRequestEbsBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestEbsBlockDevice: spotInstanceRequest.SpotInstanceRequestEbsBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

### SpotInstanceRequestEnclaveOptions <a name="SpotInstanceRequestEnclaveOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestEnclaveOptions: spotInstanceRequest.SpotInstanceRequestEnclaveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enabled SpotInstanceRequest#enabled}.

---

### SpotInstanceRequestEphemeralBlockDevice <a name="SpotInstanceRequestEphemeralBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestEphemeralBlockDevice: spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.noDevice">noDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#no_device SpotInstanceRequest#no_device}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_name SpotInstanceRequest#device_name}.

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.noDevice"></a>

```typescript
public readonly noDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#no_device SpotInstanceRequest#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}.

---

### SpotInstanceRequestLaunchTemplate <a name="SpotInstanceRequestLaunchTemplate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestLaunchTemplate: spotInstanceRequest.SpotInstanceRequestLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#id SpotInstanceRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#name SpotInstanceRequest#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#version SpotInstanceRequest#version}.

---

### SpotInstanceRequestMaintenanceOptions <a name="SpotInstanceRequestMaintenanceOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestMaintenanceOptions: spotInstanceRequest.SpotInstanceRequestMaintenanceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.property.autoRecovery">autoRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}. |

---

##### `autoRecovery`<sup>Optional</sup> <a name="autoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions.property.autoRecovery"></a>

```typescript
public readonly autoRecovery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}.

---

### SpotInstanceRequestMetadataOptions <a name="SpotInstanceRequestMetadataOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestMetadataOptions: spotInstanceRequest.SpotInstanceRequestMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}.

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}.

---

### SpotInstanceRequestNetworkInterface <a name="SpotInstanceRequestNetworkInterface" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestNetworkInterface: spotInstanceRequest.SpotInstanceRequestNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_index SpotInstanceRequest#device_index}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkCardIndex">networkCardIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}. |

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#device_index SpotInstanceRequest#device_index}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `networkCardIndex`<sup>Optional</sup> <a name="networkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface.property.networkCardIndex"></a>

```typescript
public readonly networkCardIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}.

---

### SpotInstanceRequestPrivateDnsNameOptions <a name="SpotInstanceRequestPrivateDnsNameOptions" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestPrivateDnsNameOptions: spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.hostnameType">hostnameType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}. |

---

##### `enableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecord: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}.

---

##### `enableResourceNameDnsARecord`<sup>Optional</sup> <a name="enableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```typescript
public readonly enableResourceNameDnsARecord: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}.

---

##### `hostnameType`<sup>Optional</sup> <a name="hostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions.property.hostnameType"></a>

```typescript
public readonly hostnameType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}.

---

### SpotInstanceRequestRootBlockDevice <a name="SpotInstanceRequestRootBlockDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestRootBlockDevice: spotInstanceRequest.SpotInstanceRequestRootBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#encrypted SpotInstanceRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#iops SpotInstanceRequest#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#tags SpotInstanceRequest#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#throughput SpotInstanceRequest#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_size SpotInstanceRequest#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#volume_type SpotInstanceRequest#volume_type}.

---

### SpotInstanceRequestTimeouts <a name="SpotInstanceRequestTimeouts" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

const spotInstanceRequestTimeouts: spotInstanceRequest.SpotInstanceRequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#create SpotInstanceRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request#delete SpotInstanceRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">resetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```

##### `resetCapacityReservationResourceGroupArn` <a name="resetCapacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```typescript
public resetCapacityReservationResourceGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">capacityReservationResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `capacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="capacityReservationResourceGroupArnInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```typescript
public readonly capacityReservationResourceGroupArnInput: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `capacityReservationResourceGroupArn`<sup>Required</sup> <a name="capacityReservationResourceGroupArn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```typescript
public readonly capacityReservationResourceGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---


### SpotInstanceRequestCapacityReservationSpecificationOutputReference <a name="SpotInstanceRequestCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">putCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">resetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">resetCapacityReservationTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityReservationTarget` <a name="putCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```typescript
public putCapacityReservationTarget(value: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `resetCapacityReservationPreference` <a name="resetCapacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```typescript
public resetCapacityReservationPreference(): void
```

##### `resetCapacityReservationTarget` <a name="resetCapacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```typescript
public resetCapacityReservationTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacityReservationPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacityReservationTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacityReservationPreferenceInput`<sup>Optional</sup> <a name="capacityReservationPreferenceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```typescript
public readonly capacityReservationPreferenceInput: string;
```

- *Type:* string

---

##### `capacityReservationTargetInput`<sup>Optional</sup> <a name="capacityReservationTargetInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```typescript
public readonly capacityReservationTargetInput: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget">SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCapacityReservationSpecification">SpotInstanceRequestCapacityReservationSpecification</a>

---


### SpotInstanceRequestCreditSpecificationOutputReference <a name="SpotInstanceRequestCreditSpecificationOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resetCpuCredits">resetCpuCredits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCredits` <a name="resetCpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.resetCpuCredits"></a>

```typescript
public resetCpuCredits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```typescript
public readonly cpuCreditsInput: string;
```

- *Type:* string

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestCreditSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestCreditSpecification">SpotInstanceRequestCreditSpecification</a>

---


### SpotInstanceRequestEbsBlockDeviceList <a name="SpotInstanceRequestEbsBlockDeviceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): SpotInstanceRequestEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotInstanceRequestEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a>[]

---


### SpotInstanceRequestEbsBlockDeviceOutputReference <a name="SpotInstanceRequestEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestEbsBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEbsBlockDevice">SpotInstanceRequestEbsBlockDevice</a> | cdktf.IResolvable

---


### SpotInstanceRequestEnclaveOptionsOutputReference <a name="SpotInstanceRequestEnclaveOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestEnclaveOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEnclaveOptions">SpotInstanceRequestEnclaveOptions</a>

---


### SpotInstanceRequestEphemeralBlockDeviceList <a name="SpotInstanceRequestEphemeralBlockDeviceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get"></a>

```typescript
public get(index: number): SpotInstanceRequestEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotInstanceRequestEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a>[]

---


### SpotInstanceRequestEphemeralBlockDeviceOutputReference <a name="SpotInstanceRequestEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDevice">noDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestEphemeralBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestEphemeralBlockDevice">SpotInstanceRequestEphemeralBlockDevice</a> | cdktf.IResolvable

---


### SpotInstanceRequestLaunchTemplateOutputReference <a name="SpotInstanceRequestLaunchTemplateOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestLaunchTemplate">SpotInstanceRequestLaunchTemplate</a>

---


### SpotInstanceRequestMaintenanceOptionsOutputReference <a name="SpotInstanceRequestMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resetAutoRecovery">resetAutoRecovery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRecovery` <a name="resetAutoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```typescript
public resetAutoRecovery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecoveryInput">autoRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecovery">autoRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRecoveryInput`<sup>Optional</sup> <a name="autoRecoveryInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```typescript
public readonly autoRecoveryInput: string;
```

- *Type:* string

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```typescript
public readonly autoRecovery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestMaintenanceOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMaintenanceOptions">SpotInstanceRequestMaintenanceOptions</a>

---


### SpotInstanceRequestMetadataOptionsOutputReference <a name="SpotInstanceRequestMetadataOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetHttpTokens"></a>

```typescript
public resetHttpTokens(): void
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```typescript
public resetInstanceMetadataTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```typescript
public readonly instanceMetadataTagsInput: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestMetadataOptions">SpotInstanceRequestMetadataOptions</a>

---


### SpotInstanceRequestNetworkInterfaceList <a name="SpotInstanceRequestNetworkInterfaceList" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get"></a>

```typescript
public get(index: number): SpotInstanceRequestNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotInstanceRequestNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a>[]

---


### SpotInstanceRequestNetworkInterfaceOutputReference <a name="SpotInstanceRequestNetworkInterfaceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetNetworkCardIndex">resetNetworkCardIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetNetworkCardIndex` <a name="resetNetworkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.resetNetworkCardIndex"></a>

```typescript
public resetNetworkCardIndex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndexInput">networkCardIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```typescript
public readonly deviceIndexInput: number;
```

- *Type:* number

---

##### `networkCardIndexInput`<sup>Optional</sup> <a name="networkCardIndexInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndexInput"></a>

```typescript
public readonly networkCardIndexInput: number;
```

- *Type:* number

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkCardIndex"></a>

```typescript
public readonly networkCardIndex: number;
```

- *Type:* number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestNetworkInterface | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestNetworkInterface">SpotInstanceRequestNetworkInterface</a> | cdktf.IResolvable

---


### SpotInstanceRequestPrivateDnsNameOptionsOutputReference <a name="SpotInstanceRequestPrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">resetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">resetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetHostnameType">resetHostnameType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableResourceNameDnsAaaaRecord` <a name="resetEnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```typescript
public resetEnableResourceNameDnsAaaaRecord(): void
```

##### `resetEnableResourceNameDnsARecord` <a name="resetEnableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```typescript
public resetEnableResourceNameDnsARecord(): void
```

##### `resetHostnameType` <a name="resetHostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```typescript
public resetHostnameType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enableResourceNameDnsAaaaRecordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enableResourceNameDnsARecordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostnameTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsARecordInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```typescript
public readonly enableResourceNameDnsARecordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostnameTypeInput`<sup>Optional</sup> <a name="hostnameTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```typescript
public readonly hostnameTypeInput: string;
```

- *Type:* string

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecord: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```typescript
public readonly enableResourceNameDnsARecord: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```typescript
public readonly hostnameType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestPrivateDnsNameOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestPrivateDnsNameOptions">SpotInstanceRequestPrivateDnsNameOptions</a>

---


### SpotInstanceRequestRootBlockDeviceOutputReference <a name="SpotInstanceRequestRootBlockDeviceOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestRootBlockDevice;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestRootBlockDevice">SpotInstanceRequestRootBlockDevice</a>

---


### SpotInstanceRequestTimeoutsOutputReference <a name="SpotInstanceRequestTimeoutsOutputReference" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { spotInstanceRequest } from '@cdktf/provider-aws'

new spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotInstanceRequestTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.spotInstanceRequest.SpotInstanceRequestTimeouts">SpotInstanceRequestTimeouts</a> | cdktf.IResolvable

---



