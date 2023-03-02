# `storagegatewaySmbFileShare` Submodule <a name="`storagegatewaySmbFileShare` Submodule" id="@cdktf/provider-aws.storagegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewaySmbFileShare <a name="StoragegatewaySmbFileShare" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share aws_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewaySmbFileShare(Construct Scope, string Id, StoragegatewaySmbFileShareConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig">StoragegatewaySmbFileShareConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig">StoragegatewaySmbFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes">PutCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration">ResetAccessBasedEnumeration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList">ResetAdminUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn">ResetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes">ResetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity">ResetCaseSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass">ResetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName">ResetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled">ResetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList">ResetInvalidUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted">ResetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy">ResetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl">ResetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled">ResetOplocksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays">ResetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled">ResetSmbAclEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList">ResetValidUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName">ResetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCacheAttributes` <a name="PutCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes"></a>

```csharp
private void PutCacheAttributes(StoragegatewaySmbFileShareCacheAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts"></a>

```csharp
private void PutTimeouts(StoragegatewaySmbFileShareTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

---

##### `ResetAccessBasedEnumeration` <a name="ResetAccessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration"></a>

```csharp
private void ResetAccessBasedEnumeration()
```

##### `ResetAdminUserList` <a name="ResetAdminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList"></a>

```csharp
private void ResetAdminUserList()
```

##### `ResetAuditDestinationArn` <a name="ResetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn"></a>

```csharp
private void ResetAuditDestinationArn()
```

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion"></a>

```csharp
private void ResetBucketRegion()
```

##### `ResetCacheAttributes` <a name="ResetCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes"></a>

```csharp
private void ResetCacheAttributes()
```

##### `ResetCaseSensitivity` <a name="ResetCaseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity"></a>

```csharp
private void ResetCaseSensitivity()
```

##### `ResetDefaultStorageClass` <a name="ResetDefaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass"></a>

```csharp
private void ResetDefaultStorageClass()
```

##### `ResetFileShareName` <a name="ResetFileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName"></a>

```csharp
private void ResetFileShareName()
```

##### `ResetGuessMimeTypeEnabled` <a name="ResetGuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled"></a>

```csharp
private void ResetGuessMimeTypeEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInvalidUserList` <a name="ResetInvalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList"></a>

```csharp
private void ResetInvalidUserList()
```

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted"></a>

```csharp
private void ResetKmsEncrypted()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetNotificationPolicy` <a name="ResetNotificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy"></a>

```csharp
private void ResetNotificationPolicy()
```

##### `ResetObjectAcl` <a name="ResetObjectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl"></a>

```csharp
private void ResetObjectAcl()
```

##### `ResetOplocksEnabled` <a name="ResetOplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled"></a>

```csharp
private void ResetOplocksEnabled()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetRequesterPays` <a name="ResetRequesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays"></a>

```csharp
private void ResetRequesterPays()
```

##### `ResetSmbAclEnabled` <a name="ResetSmbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled"></a>

```csharp
private void ResetSmbAclEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidUserList` <a name="ResetValidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList"></a>

```csharp
private void ResetValidUserList()
```

##### `ResetVpcEndpointDnsName` <a name="ResetVpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName"></a>

```csharp
private void ResetVpcEndpointDnsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewaySmbFileShare.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewaySmbFileShare.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewaySmbFileShare.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId">FileshareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput">AccessBasedEnumerationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput">AdminUserListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput">AuditDestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput">AuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput">BucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput">CacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput">CaseSensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput">DefaultStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput">FileShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput">GatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput">GuessMimeTypeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput">InvalidUserListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput">LocationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput">NotificationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput">ObjectAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput">OplocksEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput">RequesterPaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput">SmbAclEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput">ValidUserListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput">VpcEndpointDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration">AccessBasedEnumeration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList">AdminUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication">Authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity">CaseSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName">FileShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList">InvalidUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted">KmsEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn">LocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy">NotificationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl">ObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled">OplocksEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays">RequesterPays</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled">SmbAclEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList">ValidUserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CacheAttributes`<sup>Required</sup> <a name="CacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes"></a>

```csharp
public StoragegatewaySmbFileShareCacheAttributesOutputReference CacheAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `FileshareId`<sup>Required</sup> <a name="FileshareId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId"></a>

```csharp
public string FileshareId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts"></a>

```csharp
public StoragegatewaySmbFileShareTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a>

---

##### `AccessBasedEnumerationInput`<sup>Optional</sup> <a name="AccessBasedEnumerationInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput"></a>

```csharp
public object AccessBasedEnumerationInput { get; }
```

- *Type:* object

---

##### `AdminUserListInput`<sup>Optional</sup> <a name="AdminUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput"></a>

```csharp
public string[] AdminUserListInput { get; }
```

- *Type:* string[]

---

##### `AuditDestinationArnInput`<sup>Optional</sup> <a name="AuditDestinationArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput"></a>

```csharp
public string AuditDestinationArnInput { get; }
```

- *Type:* string

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput"></a>

```csharp
public string AuthenticationInput { get; }
```

- *Type:* string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput"></a>

```csharp
public string BucketRegionInput { get; }
```

- *Type:* string

---

##### `CacheAttributesInput`<sup>Optional</sup> <a name="CacheAttributesInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput"></a>

```csharp
public StoragegatewaySmbFileShareCacheAttributes CacheAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `CaseSensitivityInput`<sup>Optional</sup> <a name="CaseSensitivityInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput"></a>

```csharp
public string CaseSensitivityInput { get; }
```

- *Type:* string

---

##### `DefaultStorageClassInput`<sup>Optional</sup> <a name="DefaultStorageClassInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput"></a>

```csharp
public string DefaultStorageClassInput { get; }
```

- *Type:* string

---

##### `FileShareNameInput`<sup>Optional</sup> <a name="FileShareNameInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput"></a>

```csharp
public string FileShareNameInput { get; }
```

- *Type:* string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput"></a>

```csharp
public string GatewayArnInput { get; }
```

- *Type:* string

---

##### `GuessMimeTypeEnabledInput`<sup>Optional</sup> <a name="GuessMimeTypeEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput"></a>

```csharp
public object GuessMimeTypeEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InvalidUserListInput`<sup>Optional</sup> <a name="InvalidUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput"></a>

```csharp
public string[] InvalidUserListInput { get; }
```

- *Type:* string[]

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput"></a>

```csharp
public object KmsEncryptedInput { get; }
```

- *Type:* object

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `LocationArnInput`<sup>Optional</sup> <a name="LocationArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput"></a>

```csharp
public string LocationArnInput { get; }
```

- *Type:* string

---

##### `NotificationPolicyInput`<sup>Optional</sup> <a name="NotificationPolicyInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput"></a>

```csharp
public string NotificationPolicyInput { get; }
```

- *Type:* string

---

##### `ObjectAclInput`<sup>Optional</sup> <a name="ObjectAclInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput"></a>

```csharp
public string ObjectAclInput { get; }
```

- *Type:* string

---

##### `OplocksEnabledInput`<sup>Optional</sup> <a name="OplocksEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput"></a>

```csharp
public object OplocksEnabledInput { get; }
```

- *Type:* object

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `RequesterPaysInput`<sup>Optional</sup> <a name="RequesterPaysInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput"></a>

```csharp
public object RequesterPaysInput { get; }
```

- *Type:* object

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SmbAclEnabledInput`<sup>Optional</sup> <a name="SmbAclEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput"></a>

```csharp
public object SmbAclEnabledInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidUserListInput`<sup>Optional</sup> <a name="ValidUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput"></a>

```csharp
public string[] ValidUserListInput { get; }
```

- *Type:* string[]

---

##### `VpcEndpointDnsNameInput`<sup>Optional</sup> <a name="VpcEndpointDnsNameInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput"></a>

```csharp
public string VpcEndpointDnsNameInput { get; }
```

- *Type:* string

---

##### `AccessBasedEnumeration`<sup>Required</sup> <a name="AccessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```csharp
public object AccessBasedEnumeration { get; }
```

- *Type:* object

---

##### `AdminUserList`<sup>Required</sup> <a name="AdminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList"></a>

```csharp
public string[] AdminUserList { get; }
```

- *Type:* string[]

---

##### `AuditDestinationArn`<sup>Required</sup> <a name="AuditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```csharp
public string AuditDestinationArn { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication"></a>

```csharp
public string Authentication { get; }
```

- *Type:* string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; }
```

- *Type:* string

---

##### `CaseSensitivity`<sup>Required</sup> <a name="CaseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity"></a>

```csharp
public string CaseSensitivity { get; }
```

- *Type:* string

---

##### `DefaultStorageClass`<sup>Required</sup> <a name="DefaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```csharp
public string DefaultStorageClass { get; }
```

- *Type:* string

---

##### `FileShareName`<sup>Required</sup> <a name="FileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName"></a>

```csharp
public string FileShareName { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `GuessMimeTypeEnabled`<sup>Required</sup> <a name="GuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```csharp
public object GuessMimeTypeEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InvalidUserList`<sup>Required</sup> <a name="InvalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList"></a>

```csharp
public string[] InvalidUserList { get; }
```

- *Type:* string[]

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```csharp
public object KmsEncrypted { get; }
```

- *Type:* object

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn"></a>

```csharp
public string LocationArn { get; }
```

- *Type:* string

---

##### `NotificationPolicy`<sup>Required</sup> <a name="NotificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy"></a>

```csharp
public string NotificationPolicy { get; }
```

- *Type:* string

---

##### `ObjectAcl`<sup>Required</sup> <a name="ObjectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl"></a>

```csharp
public string ObjectAcl { get; }
```

- *Type:* string

---

##### `OplocksEnabled`<sup>Required</sup> <a name="OplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```csharp
public object OplocksEnabled { get; }
```

- *Type:* object

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays"></a>

```csharp
public object RequesterPays { get; }
```

- *Type:* object

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SmbAclEnabled`<sup>Required</sup> <a name="SmbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled"></a>

```csharp
public object SmbAclEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidUserList`<sup>Required</sup> <a name="ValidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList"></a>

```csharp
public string[] ValidUserList { get; }
```

- *Type:* string[]

---

##### `VpcEndpointDnsName`<sup>Required</sup> <a name="VpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```csharp
public string VpcEndpointDnsName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewaySmbFileShareCacheAttributes <a name="StoragegatewaySmbFileShareCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewaySmbFileShareCacheAttributes {
    double CacheStaleTimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}. |

---

##### `CacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```csharp
public double CacheStaleTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}.

---

### StoragegatewaySmbFileShareConfig <a name="StoragegatewaySmbFileShareConfig" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewaySmbFileShareConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GatewayArn,
    string LocationArn,
    string RoleArn,
    object AccessBasedEnumeration = null,
    string[] AdminUserList = null,
    string AuditDestinationArn = null,
    string Authentication = null,
    string BucketRegion = null,
    StoragegatewaySmbFileShareCacheAttributes CacheAttributes = null,
    string CaseSensitivity = null,
    string DefaultStorageClass = null,
    string FileShareName = null,
    object GuessMimeTypeEnabled = null,
    string Id = null,
    string[] InvalidUserList = null,
    object KmsEncrypted = null,
    string KmsKeyArn = null,
    string NotificationPolicy = null,
    string ObjectAcl = null,
    object OplocksEnabled = null,
    object ReadOnly = null,
    object RequesterPays = null,
    object SmbAclEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    StoragegatewaySmbFileShareTimeouts Timeouts = null,
    string[] ValidUserList = null,
    string VpcEndpointDnsName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn">LocationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration">AccessBasedEnumeration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList">AdminUserList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication">Authentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity">CaseSensitivity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName">FileShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList">InvalidUserList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy">NotificationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl">ObjectAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled">OplocksEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly">ReadOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays">RequesterPays</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled">SmbAclEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList">ValidUserList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}.

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn"></a>

```csharp
public string LocationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}.

---

##### `AccessBasedEnumeration`<sup>Optional</sup> <a name="AccessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration"></a>

```csharp
public object AccessBasedEnumeration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}.

---

##### `AdminUserList`<sup>Optional</sup> <a name="AdminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList"></a>

```csharp
public string[] AdminUserList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}.

---

##### `AuditDestinationArn`<sup>Optional</sup> <a name="AuditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn"></a>

```csharp
public string AuditDestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication"></a>

```csharp
public string Authentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}.

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}.

---

##### `CacheAttributes`<sup>Optional</sup> <a name="CacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes"></a>

```csharp
public StoragegatewaySmbFileShareCacheAttributes CacheAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `CaseSensitivity`<sup>Optional</sup> <a name="CaseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity"></a>

```csharp
public string CaseSensitivity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}.

---

##### `DefaultStorageClass`<sup>Optional</sup> <a name="DefaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass"></a>

```csharp
public string DefaultStorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}.

---

##### `FileShareName`<sup>Optional</sup> <a name="FileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName"></a>

```csharp
public string FileShareName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}.

---

##### `GuessMimeTypeEnabled`<sup>Optional</sup> <a name="GuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled"></a>

```csharp
public object GuessMimeTypeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InvalidUserList`<sup>Optional</sup> <a name="InvalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList"></a>

```csharp
public string[] InvalidUserList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}.

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted"></a>

```csharp
public object KmsEncrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}.

---

##### `NotificationPolicy`<sup>Optional</sup> <a name="NotificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy"></a>

```csharp
public string NotificationPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}.

---

##### `ObjectAcl`<sup>Optional</sup> <a name="ObjectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl"></a>

```csharp
public string ObjectAcl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}.

---

##### `OplocksEnabled`<sup>Optional</sup> <a name="OplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled"></a>

```csharp
public object OplocksEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}.

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}.

---

##### `RequesterPays`<sup>Optional</sup> <a name="RequesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays"></a>

```csharp
public object RequesterPays { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}.

---

##### `SmbAclEnabled`<sup>Optional</sup> <a name="SmbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled"></a>

```csharp
public object SmbAclEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts"></a>

```csharp
public StoragegatewaySmbFileShareTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#timeouts StoragegatewaySmbFileShare#timeouts}

---

##### `ValidUserList`<sup>Optional</sup> <a name="ValidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList"></a>

```csharp
public string[] ValidUserList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}.

---

##### `VpcEndpointDnsName`<sup>Optional</sup> <a name="VpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName"></a>

```csharp
public string VpcEndpointDnsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}.

---

### StoragegatewaySmbFileShareTimeouts <a name="StoragegatewaySmbFileShareTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewaySmbFileShareTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewaySmbFileShareCacheAttributesOutputReference <a name="StoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewaySmbFileShareCacheAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">ResetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheStaleTimeoutInSeconds` <a name="ResetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```csharp
private void ResetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">CacheStaleTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="CacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```csharp
public double CacheStaleTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `CacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```csharp
public double CacheStaleTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```csharp
public StoragegatewaySmbFileShareCacheAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---


### StoragegatewaySmbFileShareTimeoutsOutputReference <a name="StoragegatewaySmbFileShareTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewaySmbFileShareTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



