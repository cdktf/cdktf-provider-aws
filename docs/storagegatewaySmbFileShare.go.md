# `storagegatewaySmbFileShare` Submodule <a name="`storagegatewaySmbFileShare` Submodule" id="@cdktf/provider-aws.storagegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewaySmbFileShare <a name="StoragegatewaySmbFileShare" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share aws_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.NewStoragegatewaySmbFileShare(scope Construct, id *string, config StoragegatewaySmbFileShareConfig) StoragegatewaySmbFileShare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig">StoragegatewaySmbFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCacheAttributes` <a name="PutCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes"></a>

```go
func PutCacheAttributes(value StoragegatewaySmbFileShareCacheAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts"></a>

```go
func PutTimeouts(value StoragegatewaySmbFileShareTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

---

##### `ResetAccessBasedEnumeration` <a name="ResetAccessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration"></a>

```go
func ResetAccessBasedEnumeration()
```

##### `ResetAdminUserList` <a name="ResetAdminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList"></a>

```go
func ResetAdminUserList()
```

##### `ResetAuditDestinationArn` <a name="ResetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn"></a>

```go
func ResetAuditDestinationArn()
```

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion"></a>

```go
func ResetBucketRegion()
```

##### `ResetCacheAttributes` <a name="ResetCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes"></a>

```go
func ResetCacheAttributes()
```

##### `ResetCaseSensitivity` <a name="ResetCaseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity"></a>

```go
func ResetCaseSensitivity()
```

##### `ResetDefaultStorageClass` <a name="ResetDefaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass"></a>

```go
func ResetDefaultStorageClass()
```

##### `ResetFileShareName` <a name="ResetFileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName"></a>

```go
func ResetFileShareName()
```

##### `ResetGuessMimeTypeEnabled` <a name="ResetGuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled"></a>

```go
func ResetGuessMimeTypeEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetId"></a>

```go
func ResetId()
```

##### `ResetInvalidUserList` <a name="ResetInvalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList"></a>

```go
func ResetInvalidUserList()
```

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted"></a>

```go
func ResetKmsEncrypted()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetNotificationPolicy` <a name="ResetNotificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy"></a>

```go
func ResetNotificationPolicy()
```

##### `ResetObjectAcl` <a name="ResetObjectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl"></a>

```go
func ResetObjectAcl()
```

##### `ResetOplocksEnabled` <a name="ResetOplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled"></a>

```go
func ResetOplocksEnabled()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetRequesterPays` <a name="ResetRequesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays"></a>

```go
func ResetRequesterPays()
```

##### `ResetSmbAclEnabled` <a name="ResetSmbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbAclEnabled"></a>

```go
func ResetSmbAclEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValidUserList` <a name="ResetValidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList"></a>

```go
func ResetValidUserList()
```

##### `ResetVpcEndpointDnsName` <a name="ResetVpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName"></a>

```go
func ResetVpcEndpointDnsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.StoragegatewaySmbFileShare_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.StoragegatewaySmbFileShare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.StoragegatewaySmbFileShare_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId">FileshareId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput">AccessBasedEnumerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput">AdminUserListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput">AuditDestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput">AuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput">BucketRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput">CacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput">CaseSensitivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput">DefaultStorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput">FileShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput">GatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput">GuessMimeTypeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput">InvalidUserListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput">LocationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput">NotificationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput">ObjectAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput">OplocksEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput">RequesterPaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput">SmbAclEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput">ValidUserListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput">VpcEndpointDnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration">AccessBasedEnumeration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList">AdminUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication">Authentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity">CaseSensitivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName">FileShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList">InvalidUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted">KmsEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy">NotificationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl">ObjectAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled">OplocksEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays">RequesterPays</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled">SmbAclEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList">ValidUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CacheAttributes`<sup>Required</sup> <a name="CacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes"></a>

```go
func CacheAttributes() StoragegatewaySmbFileShareCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `FileshareId`<sup>Required</sup> <a name="FileshareId" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileshareId"></a>

```go
func FileshareId() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeouts"></a>

```go
func Timeouts() StoragegatewaySmbFileShareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference">StoragegatewaySmbFileShareTimeoutsOutputReference</a>

---

##### `AccessBasedEnumerationInput`<sup>Optional</sup> <a name="AccessBasedEnumerationInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput"></a>

```go
func AccessBasedEnumerationInput() interface{}
```

- *Type:* interface{}

---

##### `AdminUserListInput`<sup>Optional</sup> <a name="AdminUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput"></a>

```go
func AdminUserListInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditDestinationArnInput`<sup>Optional</sup> <a name="AuditDestinationArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput"></a>

```go
func AuditDestinationArnInput() *string
```

- *Type:* *string

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput"></a>

```go
func AuthenticationInput() *string
```

- *Type:* *string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput"></a>

```go
func BucketRegionInput() *string
```

- *Type:* *string

---

##### `CacheAttributesInput`<sup>Optional</sup> <a name="CacheAttributesInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput"></a>

```go
func CacheAttributesInput() StoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `CaseSensitivityInput`<sup>Optional</sup> <a name="CaseSensitivityInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput"></a>

```go
func CaseSensitivityInput() *string
```

- *Type:* *string

---

##### `DefaultStorageClassInput`<sup>Optional</sup> <a name="DefaultStorageClassInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput"></a>

```go
func DefaultStorageClassInput() *string
```

- *Type:* *string

---

##### `FileShareNameInput`<sup>Optional</sup> <a name="FileShareNameInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput"></a>

```go
func FileShareNameInput() *string
```

- *Type:* *string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput"></a>

```go
func GatewayArnInput() *string
```

- *Type:* *string

---

##### `GuessMimeTypeEnabledInput`<sup>Optional</sup> <a name="GuessMimeTypeEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput"></a>

```go
func GuessMimeTypeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InvalidUserListInput`<sup>Optional</sup> <a name="InvalidUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput"></a>

```go
func InvalidUserListInput() *[]*string
```

- *Type:* *[]*string

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput"></a>

```go
func KmsEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `LocationArnInput`<sup>Optional</sup> <a name="LocationArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput"></a>

```go
func LocationArnInput() *string
```

- *Type:* *string

---

##### `NotificationPolicyInput`<sup>Optional</sup> <a name="NotificationPolicyInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput"></a>

```go
func NotificationPolicyInput() *string
```

- *Type:* *string

---

##### `ObjectAclInput`<sup>Optional</sup> <a name="ObjectAclInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput"></a>

```go
func ObjectAclInput() *string
```

- *Type:* *string

---

##### `OplocksEnabledInput`<sup>Optional</sup> <a name="OplocksEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput"></a>

```go
func OplocksEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `RequesterPaysInput`<sup>Optional</sup> <a name="RequesterPaysInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput"></a>

```go
func RequesterPaysInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SmbAclEnabledInput`<sup>Optional</sup> <a name="SmbAclEnabledInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabledInput"></a>

```go
func SmbAclEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidUserListInput`<sup>Optional</sup> <a name="ValidUserListInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput"></a>

```go
func ValidUserListInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointDnsNameInput`<sup>Optional</sup> <a name="VpcEndpointDnsNameInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput"></a>

```go
func VpcEndpointDnsNameInput() *string
```

- *Type:* *string

---

##### `AccessBasedEnumeration`<sup>Required</sup> <a name="AccessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```go
func AccessBasedEnumeration() interface{}
```

- *Type:* interface{}

---

##### `AdminUserList`<sup>Required</sup> <a name="AdminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList"></a>

```go
func AdminUserList() *[]*string
```

- *Type:* *[]*string

---

##### `AuditDestinationArn`<sup>Required</sup> <a name="AuditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```go
func AuditDestinationArn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication"></a>

```go
func Authentication() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `CaseSensitivity`<sup>Required</sup> <a name="CaseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity"></a>

```go
func CaseSensitivity() *string
```

- *Type:* *string

---

##### `DefaultStorageClass`<sup>Required</sup> <a name="DefaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```go
func DefaultStorageClass() *string
```

- *Type:* *string

---

##### `FileShareName`<sup>Required</sup> <a name="FileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName"></a>

```go
func FileShareName() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `GuessMimeTypeEnabled`<sup>Required</sup> <a name="GuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```go
func GuessMimeTypeEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InvalidUserList`<sup>Required</sup> <a name="InvalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList"></a>

```go
func InvalidUserList() *[]*string
```

- *Type:* *[]*string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```go
func KmsEncrypted() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `NotificationPolicy`<sup>Required</sup> <a name="NotificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy"></a>

```go
func NotificationPolicy() *string
```

- *Type:* *string

---

##### `ObjectAcl`<sup>Required</sup> <a name="ObjectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl"></a>

```go
func ObjectAcl() *string
```

- *Type:* *string

---

##### `OplocksEnabled`<sup>Required</sup> <a name="OplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```go
func OplocksEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays"></a>

```go
func RequesterPays() interface{}
```

- *Type:* interface{}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SmbAclEnabled`<sup>Required</sup> <a name="SmbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbAclEnabled"></a>

```go
func SmbAclEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ValidUserList`<sup>Required</sup> <a name="ValidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList"></a>

```go
func ValidUserList() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointDnsName`<sup>Required</sup> <a name="VpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```go
func VpcEndpointDnsName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewaySmbFileShareCacheAttributes <a name="StoragegatewaySmbFileShareCacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

&storagegatewaysmbfileshare.StoragegatewaySmbFileShareCacheAttributes {
	CacheStaleTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}. |

---

##### `CacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```go
CacheStaleTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}.

---

### StoragegatewaySmbFileShareConfig <a name="StoragegatewaySmbFileShareConfig" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

&storagegatewaysmbfileshare.StoragegatewaySmbFileShareConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayArn: *string,
	LocationArn: *string,
	RoleArn: *string,
	AccessBasedEnumeration: interface{},
	AdminUserList: *[]*string,
	AuditDestinationArn: *string,
	Authentication: *string,
	BucketRegion: *string,
	CacheAttributes: github.com/cdktf/cdktf-provider-aws-go/aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes,
	CaseSensitivity: *string,
	DefaultStorageClass: *string,
	FileShareName: *string,
	GuessMimeTypeEnabled: interface{},
	Id: *string,
	InvalidUserList: *[]*string,
	KmsEncrypted: interface{},
	KmsKeyArn: *string,
	NotificationPolicy: *string,
	ObjectAcl: *string,
	OplocksEnabled: interface{},
	ReadOnly: interface{},
	RequesterPays: interface{},
	SmbAclEnabled: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts,
	ValidUserList: *[]*string,
	VpcEndpointDnsName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn">LocationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration">AccessBasedEnumeration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList">AdminUserList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication">Authentication</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity">CaseSensitivity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName">FileShareName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList">InvalidUserList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy">NotificationPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl">ObjectAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled">OplocksEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays">RequesterPays</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled">SmbAclEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList">ValidUserList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn"></a>

```go
GatewayArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}.

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn"></a>

```go
LocationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}.

---

##### `AccessBasedEnumeration`<sup>Optional</sup> <a name="AccessBasedEnumeration" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration"></a>

```go
AccessBasedEnumeration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}.

---

##### `AdminUserList`<sup>Optional</sup> <a name="AdminUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList"></a>

```go
AdminUserList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}.

---

##### `AuditDestinationArn`<sup>Optional</sup> <a name="AuditDestinationArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn"></a>

```go
AuditDestinationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication"></a>

```go
Authentication *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}.

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion"></a>

```go
BucketRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}.

---

##### `CacheAttributes`<sup>Optional</sup> <a name="CacheAttributes" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes"></a>

```go
CacheAttributes StoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `CaseSensitivity`<sup>Optional</sup> <a name="CaseSensitivity" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity"></a>

```go
CaseSensitivity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}.

---

##### `DefaultStorageClass`<sup>Optional</sup> <a name="DefaultStorageClass" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass"></a>

```go
DefaultStorageClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}.

---

##### `FileShareName`<sup>Optional</sup> <a name="FileShareName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName"></a>

```go
FileShareName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}.

---

##### `GuessMimeTypeEnabled`<sup>Optional</sup> <a name="GuessMimeTypeEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled"></a>

```go
GuessMimeTypeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InvalidUserList`<sup>Optional</sup> <a name="InvalidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList"></a>

```go
InvalidUserList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}.

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted"></a>

```go
KmsEncrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}.

---

##### `NotificationPolicy`<sup>Optional</sup> <a name="NotificationPolicy" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy"></a>

```go
NotificationPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}.

---

##### `ObjectAcl`<sup>Optional</sup> <a name="ObjectAcl" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl"></a>

```go
ObjectAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}.

---

##### `OplocksEnabled`<sup>Optional</sup> <a name="OplocksEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled"></a>

```go
OplocksEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}.

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}.

---

##### `RequesterPays`<sup>Optional</sup> <a name="RequesterPays" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays"></a>

```go
RequesterPays interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}.

---

##### `SmbAclEnabled`<sup>Optional</sup> <a name="SmbAclEnabled" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbAclEnabled"></a>

```go
SmbAclEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.timeouts"></a>

```go
Timeouts StoragegatewaySmbFileShareTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts">StoragegatewaySmbFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#timeouts StoragegatewaySmbFileShare#timeouts}

---

##### `ValidUserList`<sup>Optional</sup> <a name="ValidUserList" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList"></a>

```go
ValidUserList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}.

---

##### `VpcEndpointDnsName`<sup>Optional</sup> <a name="VpcEndpointDnsName" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName"></a>

```go
VpcEndpointDnsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}.

---

### StoragegatewaySmbFileShareTimeouts <a name="StoragegatewaySmbFileShareTimeouts" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

&storagegatewaysmbfileshare.StoragegatewaySmbFileShareTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewaySmbFileShareCacheAttributesOutputReference <a name="StoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.NewStoragegatewaySmbFileShareCacheAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StoragegatewaySmbFileShareCacheAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheStaleTimeoutInSeconds` <a name="ResetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```go
func ResetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">CacheStaleTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="CacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```go
func CacheStaleTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `CacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```go
func CacheStaleTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() StoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---


### StoragegatewaySmbFileShareTimeoutsOutputReference <a name="StoragegatewaySmbFileShareTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.NewStoragegatewaySmbFileShareTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StoragegatewaySmbFileShareTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



