# `storagegatewayGateway` Submodule <a name="`storagegatewayGateway` Submodule" id="@cdktf/provider-aws.storagegatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayGateway <a name="StoragegatewayGateway" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway aws_storagegateway_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGateway(Construct Scope, string Id, StoragegatewayGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig">StoragegatewayGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig">StoragegatewayGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime">PutMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings">PutSmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetActivationKey">ResetActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageDownloadRateLimitInBitsPerSec">ResetAverageDownloadRateLimitInBitsPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageUploadRateLimitInBitsPerSec">ResetAverageUploadRateLimitInBitsPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetCloudwatchLogGroupArn">ResetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayIpAddress">ResetGatewayIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayType">ResetGatewayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayVpcEndpoint">ResetGatewayVpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMaintenanceStartTime">ResetMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMediumChangerType">ResetMediumChangerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbActiveDirectorySettings">ResetSmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbFileShareVisibility">ResetSmbFileShareVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbGuestPassword">ResetSmbGuestPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbSecurityStrategy">ResetSmbSecurityStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTapeDriveType">ResetTapeDriveType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMaintenanceStartTime` <a name="PutMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime"></a>

```csharp
private void PutMaintenanceStartTime(StoragegatewayGatewayMaintenanceStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putMaintenanceStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---

##### `PutSmbActiveDirectorySettings` <a name="PutSmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings"></a>

```csharp
private void PutSmbActiveDirectorySettings(StoragegatewayGatewaySmbActiveDirectorySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putSmbActiveDirectorySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(StoragegatewayGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>

---

##### `ResetActivationKey` <a name="ResetActivationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetActivationKey"></a>

```csharp
private void ResetActivationKey()
```

##### `ResetAverageDownloadRateLimitInBitsPerSec` <a name="ResetAverageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageDownloadRateLimitInBitsPerSec"></a>

```csharp
private void ResetAverageDownloadRateLimitInBitsPerSec()
```

##### `ResetAverageUploadRateLimitInBitsPerSec` <a name="ResetAverageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetAverageUploadRateLimitInBitsPerSec"></a>

```csharp
private void ResetAverageUploadRateLimitInBitsPerSec()
```

##### `ResetCloudwatchLogGroupArn` <a name="ResetCloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetCloudwatchLogGroupArn"></a>

```csharp
private void ResetCloudwatchLogGroupArn()
```

##### `ResetGatewayIpAddress` <a name="ResetGatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayIpAddress"></a>

```csharp
private void ResetGatewayIpAddress()
```

##### `ResetGatewayType` <a name="ResetGatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayType"></a>

```csharp
private void ResetGatewayType()
```

##### `ResetGatewayVpcEndpoint` <a name="ResetGatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetGatewayVpcEndpoint"></a>

```csharp
private void ResetGatewayVpcEndpoint()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceStartTime` <a name="ResetMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMaintenanceStartTime"></a>

```csharp
private void ResetMaintenanceStartTime()
```

##### `ResetMediumChangerType` <a name="ResetMediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetMediumChangerType"></a>

```csharp
private void ResetMediumChangerType()
```

##### `ResetSmbActiveDirectorySettings` <a name="ResetSmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbActiveDirectorySettings"></a>

```csharp
private void ResetSmbActiveDirectorySettings()
```

##### `ResetSmbFileShareVisibility` <a name="ResetSmbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbFileShareVisibility"></a>

```csharp
private void ResetSmbFileShareVisibility()
```

##### `ResetSmbGuestPassword` <a name="ResetSmbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbGuestPassword"></a>

```csharp
private void ResetSmbGuestPassword()
```

##### `ResetSmbSecurityStrategy` <a name="ResetSmbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetSmbSecurityStrategy"></a>

```csharp
private void ResetSmbSecurityStrategy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTapeDriveType` <a name="ResetTapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTapeDriveType"></a>

```csharp
private void ResetTapeDriveType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.ec2InstanceId">Ec2InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNetworkInterface">GatewayNetworkInterface</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList">StoragegatewayGatewayGatewayNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.hostEnvironment">HostEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTime">MaintenanceStartTime</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference">StoragegatewayGatewayMaintenanceStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettings">SmbActiveDirectorySettings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference">StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference">StoragegatewayGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKeyInput">ActivationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSecInput">AverageDownloadRateLimitInBitsPerSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSecInput">AverageUploadRateLimitInBitsPerSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArnInput">CloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddressInput">GatewayIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNameInput">GatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezoneInput">GatewayTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTypeInput">GatewayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpointInput">GatewayVpcEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTimeInput">MaintenanceStartTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerTypeInput">MediumChangerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettingsInput">SmbActiveDirectorySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibilityInput">SmbFileShareVisibilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPasswordInput">SmbGuestPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategyInput">SmbSecurityStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveTypeInput">TapeDriveTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKey">ActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSec">AverageDownloadRateLimitInBitsPerSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSec">AverageUploadRateLimitInBitsPerSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddress">GatewayIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayName">GatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezone">GatewayTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayType">GatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpoint">GatewayVpcEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerType">MediumChangerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibility">SmbFileShareVisibility</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPassword">SmbGuestPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategy">SmbSecurityStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveType">TapeDriveType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Ec2InstanceId`<sup>Required</sup> <a name="Ec2InstanceId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.ec2InstanceId"></a>

```csharp
public string Ec2InstanceId { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `GatewayNetworkInterface`<sup>Required</sup> <a name="GatewayNetworkInterface" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNetworkInterface"></a>

```csharp
public StoragegatewayGatewayGatewayNetworkInterfaceList GatewayNetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList">StoragegatewayGatewayGatewayNetworkInterfaceList</a>

---

##### `HostEnvironment`<sup>Required</sup> <a name="HostEnvironment" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.hostEnvironment"></a>

```csharp
public string HostEnvironment { get; }
```

- *Type:* string

---

##### `MaintenanceStartTime`<sup>Required</sup> <a name="MaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTime"></a>

```csharp
public StoragegatewayGatewayMaintenanceStartTimeOutputReference MaintenanceStartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference">StoragegatewayGatewayMaintenanceStartTimeOutputReference</a>

---

##### `SmbActiveDirectorySettings`<sup>Required</sup> <a name="SmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettings"></a>

```csharp
public StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference SmbActiveDirectorySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference">StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeouts"></a>

```csharp
public StoragegatewayGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference">StoragegatewayGatewayTimeoutsOutputReference</a>

---

##### `ActivationKeyInput`<sup>Optional</sup> <a name="ActivationKeyInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKeyInput"></a>

```csharp
public string ActivationKeyInput { get; }
```

- *Type:* string

---

##### `AverageDownloadRateLimitInBitsPerSecInput`<sup>Optional</sup> <a name="AverageDownloadRateLimitInBitsPerSecInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSecInput"></a>

```csharp
public double AverageDownloadRateLimitInBitsPerSecInput { get; }
```

- *Type:* double

---

##### `AverageUploadRateLimitInBitsPerSecInput`<sup>Optional</sup> <a name="AverageUploadRateLimitInBitsPerSecInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSecInput"></a>

```csharp
public double AverageUploadRateLimitInBitsPerSecInput { get; }
```

- *Type:* double

---

##### `CloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogGroupArnInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArnInput"></a>

```csharp
public string CloudwatchLogGroupArnInput { get; }
```

- *Type:* string

---

##### `GatewayIpAddressInput`<sup>Optional</sup> <a name="GatewayIpAddressInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddressInput"></a>

```csharp
public string GatewayIpAddressInput { get; }
```

- *Type:* string

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayNameInput"></a>

```csharp
public string GatewayNameInput { get; }
```

- *Type:* string

---

##### `GatewayTimezoneInput`<sup>Optional</sup> <a name="GatewayTimezoneInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezoneInput"></a>

```csharp
public string GatewayTimezoneInput { get; }
```

- *Type:* string

---

##### `GatewayTypeInput`<sup>Optional</sup> <a name="GatewayTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTypeInput"></a>

```csharp
public string GatewayTypeInput { get; }
```

- *Type:* string

---

##### `GatewayVpcEndpointInput`<sup>Optional</sup> <a name="GatewayVpcEndpointInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpointInput"></a>

```csharp
public string GatewayVpcEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceStartTimeInput`<sup>Optional</sup> <a name="MaintenanceStartTimeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.maintenanceStartTimeInput"></a>

```csharp
public StoragegatewayGatewayMaintenanceStartTime MaintenanceStartTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---

##### `MediumChangerTypeInput`<sup>Optional</sup> <a name="MediumChangerTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerTypeInput"></a>

```csharp
public string MediumChangerTypeInput { get; }
```

- *Type:* string

---

##### `SmbActiveDirectorySettingsInput`<sup>Optional</sup> <a name="SmbActiveDirectorySettingsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbActiveDirectorySettingsInput"></a>

```csharp
public StoragegatewayGatewaySmbActiveDirectorySettings SmbActiveDirectorySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---

##### `SmbFileShareVisibilityInput`<sup>Optional</sup> <a name="SmbFileShareVisibilityInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibilityInput"></a>

```csharp
public object SmbFileShareVisibilityInput { get; }
```

- *Type:* object

---

##### `SmbGuestPasswordInput`<sup>Optional</sup> <a name="SmbGuestPasswordInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPasswordInput"></a>

```csharp
public string SmbGuestPasswordInput { get; }
```

- *Type:* string

---

##### `SmbSecurityStrategyInput`<sup>Optional</sup> <a name="SmbSecurityStrategyInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategyInput"></a>

```csharp
public string SmbSecurityStrategyInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TapeDriveTypeInput`<sup>Optional</sup> <a name="TapeDriveTypeInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveTypeInput"></a>

```csharp
public string TapeDriveTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ActivationKey`<sup>Required</sup> <a name="ActivationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.activationKey"></a>

```csharp
public string ActivationKey { get; }
```

- *Type:* string

---

##### `AverageDownloadRateLimitInBitsPerSec`<sup>Required</sup> <a name="AverageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageDownloadRateLimitInBitsPerSec"></a>

```csharp
public double AverageDownloadRateLimitInBitsPerSec { get; }
```

- *Type:* double

---

##### `AverageUploadRateLimitInBitsPerSec`<sup>Required</sup> <a name="AverageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.averageUploadRateLimitInBitsPerSec"></a>

```csharp
public double AverageUploadRateLimitInBitsPerSec { get; }
```

- *Type:* double

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `GatewayIpAddress`<sup>Required</sup> <a name="GatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayIpAddress"></a>

```csharp
public string GatewayIpAddress { get; }
```

- *Type:* string

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayName"></a>

```csharp
public string GatewayName { get; }
```

- *Type:* string

---

##### `GatewayTimezone`<sup>Required</sup> <a name="GatewayTimezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayTimezone"></a>

```csharp
public string GatewayTimezone { get; }
```

- *Type:* string

---

##### `GatewayType`<sup>Required</sup> <a name="GatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayType"></a>

```csharp
public string GatewayType { get; }
```

- *Type:* string

---

##### `GatewayVpcEndpoint`<sup>Required</sup> <a name="GatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.gatewayVpcEndpoint"></a>

```csharp
public string GatewayVpcEndpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MediumChangerType`<sup>Required</sup> <a name="MediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.mediumChangerType"></a>

```csharp
public string MediumChangerType { get; }
```

- *Type:* string

---

##### `SmbFileShareVisibility`<sup>Required</sup> <a name="SmbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbFileShareVisibility"></a>

```csharp
public object SmbFileShareVisibility { get; }
```

- *Type:* object

---

##### `SmbGuestPassword`<sup>Required</sup> <a name="SmbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbGuestPassword"></a>

```csharp
public string SmbGuestPassword { get; }
```

- *Type:* string

---

##### `SmbSecurityStrategy`<sup>Required</sup> <a name="SmbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.smbSecurityStrategy"></a>

```csharp
public string SmbSecurityStrategy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TapeDriveType`<sup>Required</sup> <a name="TapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tapeDriveType"></a>

```csharp
public string TapeDriveType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayGatewayConfig <a name="StoragegatewayGatewayConfig" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewayConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GatewayName,
    string GatewayTimezone,
    string ActivationKey = null,
    double AverageDownloadRateLimitInBitsPerSec = null,
    double AverageUploadRateLimitInBitsPerSec = null,
    string CloudwatchLogGroupArn = null,
    string GatewayIpAddress = null,
    string GatewayType = null,
    string GatewayVpcEndpoint = null,
    string Id = null,
    StoragegatewayGatewayMaintenanceStartTime MaintenanceStartTime = null,
    string MediumChangerType = null,
    StoragegatewayGatewaySmbActiveDirectorySettings SmbActiveDirectorySettings = null,
    object SmbFileShareVisibility = null,
    string SmbGuestPassword = null,
    string SmbSecurityStrategy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TapeDriveType = null,
    StoragegatewayGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayName">GatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayTimezone">GatewayTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.activationKey">ActivationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageDownloadRateLimitInBitsPerSec">AverageDownloadRateLimitInBitsPerSec</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageUploadRateLimitInBitsPerSec">AverageUploadRateLimitInBitsPerSec</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayIpAddress">GatewayIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayType">GatewayType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayVpcEndpoint">GatewayVpcEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.maintenanceStartTime">MaintenanceStartTime</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | maintenance_start_time block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.mediumChangerType">MediumChangerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbActiveDirectorySettings">SmbActiveDirectorySettings</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | smb_active_directory_settings block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbFileShareVisibility">SmbFileShareVisibility</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbGuestPassword">SmbGuestPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbSecurityStrategy">SmbSecurityStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tapeDriveType">TapeDriveType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayName"></a>

```csharp
public string GatewayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_name StoragegatewayGateway#gateway_name}.

---

##### `GatewayTimezone`<sup>Required</sup> <a name="GatewayTimezone" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayTimezone"></a>

```csharp
public string GatewayTimezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_timezone StoragegatewayGateway#gateway_timezone}.

---

##### `ActivationKey`<sup>Optional</sup> <a name="ActivationKey" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.activationKey"></a>

```csharp
public string ActivationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#activation_key StoragegatewayGateway#activation_key}.

---

##### `AverageDownloadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="AverageDownloadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageDownloadRateLimitInBitsPerSec"></a>

```csharp
public double AverageDownloadRateLimitInBitsPerSec { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}.

---

##### `AverageUploadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="AverageUploadRateLimitInBitsPerSec" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.averageUploadRateLimitInBitsPerSec"></a>

```csharp
public double AverageUploadRateLimitInBitsPerSec { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}.

---

##### `CloudwatchLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}.

---

##### `GatewayIpAddress`<sup>Optional</sup> <a name="GatewayIpAddress" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayIpAddress"></a>

```csharp
public string GatewayIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_ip_address StoragegatewayGateway#gateway_ip_address}.

---

##### `GatewayType`<sup>Optional</sup> <a name="GatewayType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayType"></a>

```csharp
public string GatewayType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_type StoragegatewayGateway#gateway_type}.

---

##### `GatewayVpcEndpoint`<sup>Optional</sup> <a name="GatewayVpcEndpoint" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.gatewayVpcEndpoint"></a>

```csharp
public string GatewayVpcEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#id StoragegatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceStartTime`<sup>Optional</sup> <a name="MaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.maintenanceStartTime"></a>

```csharp
public StoragegatewayGatewayMaintenanceStartTime MaintenanceStartTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

maintenance_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#maintenance_start_time StoragegatewayGateway#maintenance_start_time}

---

##### `MediumChangerType`<sup>Optional</sup> <a name="MediumChangerType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.mediumChangerType"></a>

```csharp
public string MediumChangerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#medium_changer_type StoragegatewayGateway#medium_changer_type}.

---

##### `SmbActiveDirectorySettings`<sup>Optional</sup> <a name="SmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbActiveDirectorySettings"></a>

```csharp
public StoragegatewayGatewaySmbActiveDirectorySettings SmbActiveDirectorySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

smb_active_directory_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}

---

##### `SmbFileShareVisibility`<sup>Optional</sup> <a name="SmbFileShareVisibility" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbFileShareVisibility"></a>

```csharp
public object SmbFileShareVisibility { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}.

---

##### `SmbGuestPassword`<sup>Optional</sup> <a name="SmbGuestPassword" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbGuestPassword"></a>

```csharp
public string SmbGuestPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_guest_password StoragegatewayGateway#smb_guest_password}.

---

##### `SmbSecurityStrategy`<sup>Optional</sup> <a name="SmbSecurityStrategy" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.smbSecurityStrategy"></a>

```csharp
public string SmbSecurityStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#smb_security_strategy StoragegatewayGateway#smb_security_strategy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags StoragegatewayGateway#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tags_all StoragegatewayGateway#tags_all}.

---

##### `TapeDriveType`<sup>Optional</sup> <a name="TapeDriveType" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.tapeDriveType"></a>

```csharp
public string TapeDriveType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#tape_drive_type StoragegatewayGateway#tape_drive_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayConfig.property.timeouts"></a>

```csharp
public StoragegatewayGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts">StoragegatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeouts StoragegatewayGateway#timeouts}

---

### StoragegatewayGatewayGatewayNetworkInterface <a name="StoragegatewayGatewayGatewayNetworkInterface" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewayGatewayNetworkInterface {

};
```


### StoragegatewayGatewayMaintenanceStartTime <a name="StoragegatewayGatewayMaintenanceStartTime" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewayMaintenanceStartTime {
    double HourOfDay,
    string DayOfMonth = null,
    string DayOfWeek = null,
    double MinuteOfHour = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfMonth">DayOfMonth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}. |

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#hour_of_day StoragegatewayGateway#hour_of_day}.

---

##### `DayOfMonth`<sup>Optional</sup> <a name="DayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfMonth"></a>

```csharp
public string DayOfMonth { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_month StoragegatewayGateway#day_of_month}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#day_of_week StoragegatewayGateway#day_of_week}.

---

##### `MinuteOfHour`<sup>Optional</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#minute_of_hour StoragegatewayGateway#minute_of_hour}.

---

### StoragegatewayGatewaySmbActiveDirectorySettings <a name="StoragegatewayGatewaySmbActiveDirectorySettings" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewaySmbActiveDirectorySettings {
    string DomainName,
    string Password,
    string Username,
    string[] DomainControllers = null,
    string OrganizationalUnit = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainControllers">DomainControllers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_name StoragegatewayGateway#domain_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#password StoragegatewayGateway#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#username StoragegatewayGateway#username}.

---

##### `DomainControllers`<sup>Optional</sup> <a name="DomainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.domainControllers"></a>

```csharp
public string[] DomainControllers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#domain_controllers StoragegatewayGateway#domain_controllers}.

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#organizational_unit StoragegatewayGateway#organizational_unit}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}.

---

### StoragegatewayGatewayTimeouts <a name="StoragegatewayGatewayTimeouts" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewayTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway#create StoragegatewayGateway#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayGatewayGatewayNetworkInterfaceList <a name="StoragegatewayGatewayGatewayNetworkInterfaceList" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewayGatewayNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get"></a>

```csharp
private StoragegatewayGatewayGatewayNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StoragegatewayGatewayGatewayNetworkInterfaceOutputReference <a name="StoragegatewayGatewayGatewayNetworkInterfaceOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewayGatewayNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface">StoragegatewayGatewayGatewayNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public StoragegatewayGatewayGatewayNetworkInterface InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayGatewayNetworkInterface">StoragegatewayGatewayGatewayNetworkInterface</a>

---


### StoragegatewayGatewayMaintenanceStartTimeOutputReference <a name="StoragegatewayGatewayMaintenanceStartTimeOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewayMaintenanceStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfMonth">ResetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetMinuteOfHour">ResetMinuteOfHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOfMonth` <a name="ResetDayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfMonth"></a>

```csharp
private void ResetDayOfMonth()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetMinuteOfHour` <a name="ResetMinuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.resetMinuteOfHour"></a>

```csharp
private void ResetMinuteOfHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonthInput">DayOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHourInput">MinuteOfHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfMonthInput`<sup>Optional</sup> <a name="DayOfMonthInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonthInput"></a>

```csharp
public string DayOfMonthInput { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `MinuteOfHourInput`<sup>Optional</sup> <a name="MinuteOfHourInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHourInput"></a>

```csharp
public double MinuteOfHourInput { get; }
```

- *Type:* double

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfMonth"></a>

```csharp
public string DayOfMonth { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTimeOutputReference.property.internalValue"></a>

```csharp
public StoragegatewayGatewayMaintenanceStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayMaintenanceStartTime">StoragegatewayGatewayMaintenanceStartTime</a>

---


### StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference <a name="StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetDomainControllers">ResetDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainControllers` <a name="ResetDomainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetDomainControllers"></a>

```csharp
private void ResetDomainControllers()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetOrganizationalUnit"></a>

```csharp
private void ResetOrganizationalUnit()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.activeDirectoryStatus">ActiveDirectoryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllersInput">DomainControllersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllers">DomainControllers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryStatus`<sup>Required</sup> <a name="ActiveDirectoryStatus" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.activeDirectoryStatus"></a>

```csharp
public string ActiveDirectoryStatus { get; }
```

- *Type:* string

---

##### `DomainControllersInput`<sup>Optional</sup> <a name="DomainControllersInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllersInput"></a>

```csharp
public string[] DomainControllersInput { get; }
```

- *Type:* string[]

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnitInput"></a>

```csharp
public string OrganizationalUnitInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DomainControllers`<sup>Required</sup> <a name="DomainControllers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainControllers"></a>

```csharp
public string[] DomainControllers { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference.property.internalValue"></a>

```csharp
public StoragegatewayGatewaySmbActiveDirectorySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewaySmbActiveDirectorySettings">StoragegatewayGatewaySmbActiveDirectorySettings</a>

---


### StoragegatewayGatewayTimeoutsOutputReference <a name="StoragegatewayGatewayTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewayGateway.StoragegatewayGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



