# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-aws.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy aws_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3objectcopy"

s3objectcopy.NewS3ObjectCopy(scope Construct, id *string, config S3ObjectCopyConfig) S3ObjectCopy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant">PutGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled">ResetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">ResetCopyIfMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">ResetCopyIfModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">ResetCopyIfNoneMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">ResetCopyIfUnmodifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm">ResetCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey">ResetCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5">ResetCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner">ResetExpectedSourceBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires">ResetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant">ResetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext">ResetKmsEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">ResetMetadataDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus">ResetObjectLockLegalHoldStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">ResetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">ResetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer">ResetRequestPayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">ResetSourceCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">ResetSourceCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">ResetSourceCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">ResetTaggingDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">ResetWebsiteRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGrant` <a name="PutGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant"></a>

```go
func PutGrant(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl"></a>

```go
func ResetAcl()
```

##### `ResetBucketKeyEnabled` <a name="ResetBucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled"></a>

```go
func ResetBucketKeyEnabled()
```

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```go
func ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```go
func ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```go
func ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```go
func ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetCopyIfMatch` <a name="ResetCopyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```go
func ResetCopyIfMatch()
```

##### `ResetCopyIfModifiedSince` <a name="ResetCopyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```go
func ResetCopyIfModifiedSince()
```

##### `ResetCopyIfNoneMatch` <a name="ResetCopyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```go
func ResetCopyIfNoneMatch()
```

##### `ResetCopyIfUnmodifiedSince` <a name="ResetCopyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```go
func ResetCopyIfUnmodifiedSince()
```

##### `ResetCustomerAlgorithm` <a name="ResetCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm"></a>

```go
func ResetCustomerAlgorithm()
```

##### `ResetCustomerKey` <a name="ResetCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey"></a>

```go
func ResetCustomerKey()
```

##### `ResetCustomerKeyMd5` <a name="ResetCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5"></a>

```go
func ResetCustomerKeyMd5()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetExpectedSourceBucketOwner` <a name="ResetExpectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner"></a>

```go
func ResetExpectedSourceBucketOwner()
```

##### `ResetExpires` <a name="ResetExpires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```go
func ResetExpires()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetGrant` <a name="ResetGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant"></a>

```go
func ResetGrant()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsEncryptionContext` <a name="ResetKmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext"></a>

```go
func ResetKmsEncryptionContext()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetadataDirective` <a name="ResetMetadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```go
func ResetMetadataDirective()
```

##### `ResetObjectLockLegalHoldStatus` <a name="ResetObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus"></a>

```go
func ResetObjectLockLegalHoldStatus()
```

##### `ResetObjectLockMode` <a name="ResetObjectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```go
func ResetObjectLockMode()
```

##### `ResetObjectLockRetainUntilDate` <a name="ResetObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```go
func ResetObjectLockRetainUntilDate()
```

##### `ResetRequestPayer` <a name="ResetRequestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer"></a>

```go
func ResetRequestPayer()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```go
func ResetServerSideEncryption()
```

##### `ResetSourceCustomerAlgorithm` <a name="ResetSourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```go
func ResetSourceCustomerAlgorithm()
```

##### `ResetSourceCustomerKey` <a name="ResetSourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```go
func ResetSourceCustomerKey()
```

##### `ResetSourceCustomerKeyMd5` <a name="ResetSourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```go
func ResetSourceCustomerKeyMd5()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```go
func ResetStorageClass()
```

##### `ResetTaggingDirective` <a name="ResetTaggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```go
func ResetTaggingDirective()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetWebsiteRedirect` <a name="ResetWebsiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```go
func ResetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3objectcopy"

s3objectcopy.S3ObjectCopy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3objectcopy"

s3objectcopy.S3ObjectCopy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3objectcopy"

s3objectcopy.S3ObjectCopy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant">Grant</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged">RequestCharged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId">SourceVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput">AclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput">BucketKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">CacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">CopyIfMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">CopyIfModifiedSinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">CopyIfNoneMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">CopyIfUnmodifiedSinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput">CustomerAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput">CustomerKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input">CustomerKeyMd5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput">ExpectedSourceBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput">ExpiresInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput">GrantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput">KmsEncryptionContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">MetadataDirectiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput">ObjectLockLegalHoldStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">ObjectLockModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">ObjectLockRetainUntilDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput">RequestPayerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">SourceCustomerAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">SourceCustomerKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">SourceCustomerKeyMd5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">TaggingDirectiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">WebsiteRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl">Acl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">CopyIfMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">CopyIfModifiedSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">CopyIfNoneMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">CopyIfUnmodifiedSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm">CustomerAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey">CustomerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5">CustomerKeyMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner">ExpectedSourceBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext">KmsEncryptionContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">MetadataDirective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">ObjectLockMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer">RequestPayer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">SourceCustomerAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">SourceCustomerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">SourceCustomerKeyMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">TaggingDirective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">WebsiteRedirect</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant"></a>

```go
func Grant() S3ObjectCopyGrantList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a>

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `RequestCharged`<sup>Required</sup> <a name="RequestCharged" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged"></a>

```go
func RequestCharged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SourceVersionId`<sup>Required</sup> <a name="SourceVersionId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId"></a>

```go
func SourceVersionId() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput"></a>

```go
func AclInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `BucketKeyEnabledInput`<sup>Optional</sup> <a name="BucketKeyEnabledInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput"></a>

```go
func BucketKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```go
func CacheControlInput() *string
```

- *Type:* *string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```go
func ContentDispositionInput() *string
```

- *Type:* *string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```go
func ContentEncodingInput() *string
```

- *Type:* *string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```go
func ContentLanguageInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `CopyIfMatchInput`<sup>Optional</sup> <a name="CopyIfMatchInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```go
func CopyIfMatchInput() *string
```

- *Type:* *string

---

##### `CopyIfModifiedSinceInput`<sup>Optional</sup> <a name="CopyIfModifiedSinceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```go
func CopyIfModifiedSinceInput() *string
```

- *Type:* *string

---

##### `CopyIfNoneMatchInput`<sup>Optional</sup> <a name="CopyIfNoneMatchInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```go
func CopyIfNoneMatchInput() *string
```

- *Type:* *string

---

##### `CopyIfUnmodifiedSinceInput`<sup>Optional</sup> <a name="CopyIfUnmodifiedSinceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```go
func CopyIfUnmodifiedSinceInput() *string
```

- *Type:* *string

---

##### `CustomerAlgorithmInput`<sup>Optional</sup> <a name="CustomerAlgorithmInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput"></a>

```go
func CustomerAlgorithmInput() *string
```

- *Type:* *string

---

##### `CustomerKeyInput`<sup>Optional</sup> <a name="CustomerKeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput"></a>

```go
func CustomerKeyInput() *string
```

- *Type:* *string

---

##### `CustomerKeyMd5Input`<sup>Optional</sup> <a name="CustomerKeyMd5Input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input"></a>

```go
func CustomerKeyMd5Input() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `ExpectedSourceBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedSourceBucketOwnerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput"></a>

```go
func ExpectedSourceBucketOwnerInput() *string
```

- *Type:* *string

---

##### `ExpiresInput`<sup>Optional</sup> <a name="ExpiresInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```go
func ExpiresInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `GrantInput`<sup>Optional</sup> <a name="GrantInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput"></a>

```go
func GrantInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `KmsEncryptionContextInput`<sup>Optional</sup> <a name="KmsEncryptionContextInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput"></a>

```go
func KmsEncryptionContextInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MetadataDirectiveInput`<sup>Optional</sup> <a name="MetadataDirectiveInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```go
func MetadataDirectiveInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ObjectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatusInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput"></a>

```go
func ObjectLockLegalHoldStatusInput() *string
```

- *Type:* *string

---

##### `ObjectLockModeInput`<sup>Optional</sup> <a name="ObjectLockModeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```go
func ObjectLockModeInput() *string
```

- *Type:* *string

---

##### `ObjectLockRetainUntilDateInput`<sup>Optional</sup> <a name="ObjectLockRetainUntilDateInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```go
func ObjectLockRetainUntilDateInput() *string
```

- *Type:* *string

---

##### `RequestPayerInput`<sup>Optional</sup> <a name="RequestPayerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput"></a>

```go
func RequestPayerInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```go
func ServerSideEncryptionInput() *string
```

- *Type:* *string

---

##### `SourceCustomerAlgorithmInput`<sup>Optional</sup> <a name="SourceCustomerAlgorithmInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```go
func SourceCustomerAlgorithmInput() *string
```

- *Type:* *string

---

##### `SourceCustomerKeyInput`<sup>Optional</sup> <a name="SourceCustomerKeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```go
func SourceCustomerKeyInput() *string
```

- *Type:* *string

---

##### `SourceCustomerKeyMd5Input`<sup>Optional</sup> <a name="SourceCustomerKeyMd5Input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```go
func SourceCustomerKeyMd5Input() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `TaggingDirectiveInput`<sup>Optional</sup> <a name="TaggingDirectiveInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```go
func TaggingDirectiveInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebsiteRedirectInput`<sup>Optional</sup> <a name="WebsiteRedirectInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```go
func WebsiteRedirectInput() *string
```

- *Type:* *string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl"></a>

```go
func Acl() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketKeyEnabled`<sup>Required</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled"></a>

```go
func BucketKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `CopyIfMatch`<sup>Required</sup> <a name="CopyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```go
func CopyIfMatch() *string
```

- *Type:* *string

---

##### `CopyIfModifiedSince`<sup>Required</sup> <a name="CopyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```go
func CopyIfModifiedSince() *string
```

- *Type:* *string

---

##### `CopyIfNoneMatch`<sup>Required</sup> <a name="CopyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```go
func CopyIfNoneMatch() *string
```

- *Type:* *string

---

##### `CopyIfUnmodifiedSince`<sup>Required</sup> <a name="CopyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```go
func CopyIfUnmodifiedSince() *string
```

- *Type:* *string

---

##### `CustomerAlgorithm`<sup>Required</sup> <a name="CustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm"></a>

```go
func CustomerAlgorithm() *string
```

- *Type:* *string

---

##### `CustomerKey`<sup>Required</sup> <a name="CustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey"></a>

```go
func CustomerKey() *string
```

- *Type:* *string

---

##### `CustomerKeyMd5`<sup>Required</sup> <a name="CustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5"></a>

```go
func CustomerKeyMd5() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `ExpectedSourceBucketOwner`<sup>Required</sup> <a name="ExpectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner"></a>

```go
func ExpectedSourceBucketOwner() *string
```

- *Type:* *string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KmsEncryptionContext`<sup>Required</sup> <a name="KmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext"></a>

```go
func KmsEncryptionContext() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataDirective`<sup>Required</sup> <a name="MetadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```go
func MetadataDirective() *string
```

- *Type:* *string

---

##### `ObjectLockLegalHoldStatus`<sup>Required</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus"></a>

```go
func ObjectLockLegalHoldStatus() *string
```

- *Type:* *string

---

##### `ObjectLockMode`<sup>Required</sup> <a name="ObjectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```go
func ObjectLockMode() *string
```

- *Type:* *string

---

##### `ObjectLockRetainUntilDate`<sup>Required</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```go
func ObjectLockRetainUntilDate() *string
```

- *Type:* *string

---

##### `RequestPayer`<sup>Required</sup> <a name="RequestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer"></a>

```go
func RequestPayer() *string
```

- *Type:* *string

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```go
func ServerSideEncryption() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceCustomerAlgorithm`<sup>Required</sup> <a name="SourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```go
func SourceCustomerAlgorithm() *string
```

- *Type:* *string

---

##### `SourceCustomerKey`<sup>Required</sup> <a name="SourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```go
func SourceCustomerKey() *string
```

- *Type:* *string

---

##### `SourceCustomerKeyMd5`<sup>Required</sup> <a name="SourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```go
func SourceCustomerKeyMd5() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `TaggingDirective`<sup>Required</sup> <a name="TaggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```go
func TaggingDirective() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebsiteRedirect`<sup>Required</sup> <a name="WebsiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```go
func WebsiteRedirect() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3objectcopy"

&s3objectcopy.S3ObjectCopyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Key: *string,
	Source: *string,
	Acl: *string,
	BucketKeyEnabled: interface{},
	CacheControl: *string,
	ContentDisposition: *string,
	ContentEncoding: *string,
	ContentLanguage: *string,
	ContentType: *string,
	CopyIfMatch: *string,
	CopyIfModifiedSince: *string,
	CopyIfNoneMatch: *string,
	CopyIfUnmodifiedSince: *string,
	CustomerAlgorithm: *string,
	CustomerKey: *string,
	CustomerKeyMd5: *string,
	ExpectedBucketOwner: *string,
	ExpectedSourceBucketOwner: *string,
	Expires: *string,
	ForceDestroy: interface{},
	Grant: interface{},
	Id: *string,
	KmsEncryptionContext: *string,
	KmsKeyId: *string,
	Metadata: *map[string]*string,
	MetadataDirective: *string,
	ObjectLockLegalHoldStatus: *string,
	ObjectLockMode: *string,
	ObjectLockRetainUntilDate: *string,
	RequestPayer: *string,
	ServerSideEncryption: *string,
	SourceCustomerAlgorithm: *string,
	SourceCustomerKey: *string,
	SourceCustomerKeyMd5: *string,
	StorageClass: *string,
	TaggingDirective: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	WebsiteRedirect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl">Acl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">CacheControl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">CopyIfMatch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">CopyIfModifiedSince</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">CopyIfNoneMatch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">CopyIfUnmodifiedSince</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm">CustomerAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey">CustomerKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5">CustomerKeyMd5</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner">ExpectedSourceBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires">Expires</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant">Grant</a></code> | <code>interface{}</code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext">KmsEncryptionContext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">MetadataDirective</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">ObjectLockMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer">RequestPayer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">SourceCustomerAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">SourceCustomerKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">SourceCustomerKeyMd5</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">StorageClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">TaggingDirective</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">WebsiteRedirect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl"></a>

```go
Acl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}.

---

##### `BucketKeyEnabled`<sup>Optional</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled"></a>

```go
BucketKeyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```go
CacheControl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}.

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```go
ContentDisposition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}.

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```go
ContentEncoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}.

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```go
ContentLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}.

---

##### `CopyIfMatch`<sup>Optional</sup> <a name="CopyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```go
CopyIfMatch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}.

---

##### `CopyIfModifiedSince`<sup>Optional</sup> <a name="CopyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```go
CopyIfModifiedSince *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}.

---

##### `CopyIfNoneMatch`<sup>Optional</sup> <a name="CopyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```go
CopyIfNoneMatch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}.

---

##### `CopyIfUnmodifiedSince`<sup>Optional</sup> <a name="CopyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```go
CopyIfUnmodifiedSince *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}.

---

##### `CustomerAlgorithm`<sup>Optional</sup> <a name="CustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm"></a>

```go
CustomerAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}.

---

##### `CustomerKey`<sup>Optional</sup> <a name="CustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey"></a>

```go
CustomerKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}.

---

##### `CustomerKeyMd5`<sup>Optional</sup> <a name="CustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5"></a>

```go
CustomerKeyMd5 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}.

---

##### `ExpectedSourceBucketOwner`<sup>Optional</sup> <a name="ExpectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner"></a>

```go
ExpectedSourceBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}.

---

##### `Expires`<sup>Optional</sup> <a name="Expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```go
Expires *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}.

---

##### `Grant`<sup>Optional</sup> <a name="Grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant"></a>

```go
Grant interface{}
```

- *Type:* interface{}

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#grant S3ObjectCopy#grant}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsEncryptionContext`<sup>Optional</sup> <a name="KmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext"></a>

```go
KmsEncryptionContext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}.

---

##### `MetadataDirective`<sup>Optional</sup> <a name="MetadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```go
MetadataDirective *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}.

---

##### `ObjectLockLegalHoldStatus`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus"></a>

```go
ObjectLockLegalHoldStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}.

---

##### `ObjectLockMode`<sup>Optional</sup> <a name="ObjectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```go
ObjectLockMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}.

---

##### `ObjectLockRetainUntilDate`<sup>Optional</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```go
ObjectLockRetainUntilDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}.

---

##### `RequestPayer`<sup>Optional</sup> <a name="RequestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer"></a>

```go
RequestPayer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}.

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```go
ServerSideEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}.

---

##### `SourceCustomerAlgorithm`<sup>Optional</sup> <a name="SourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```go
SourceCustomerAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}.

---

##### `SourceCustomerKey`<sup>Optional</sup> <a name="SourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```go
SourceCustomerKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}.

---

##### `SourceCustomerKeyMd5`<sup>Optional</sup> <a name="SourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```go
SourceCustomerKeyMd5 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}.

---

##### `TaggingDirective`<sup>Optional</sup> <a name="TaggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```go
TaggingDirective *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}.

---

##### `WebsiteRedirect`<sup>Optional</sup> <a name="WebsiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```go
WebsiteRedirect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}.

---

### S3ObjectCopyGrant <a name="S3ObjectCopyGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3objectcopy"

&s3objectcopy.S3ObjectCopyGrant {
	Permissions: *[]*string,
	Type: *string,
	Email: *string,
	Id: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions">Permissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectCopyGrantList <a name="S3ObjectCopyGrantList" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3objectcopy"

s3objectcopy.NewS3ObjectCopyGrantList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ObjectCopyGrantList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get"></a>

```go
func Get(index *f64) S3ObjectCopyGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ObjectCopyGrantOutputReference <a name="S3ObjectCopyGrantOutputReference" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3objectcopy"

s3objectcopy.NewS3ObjectCopyGrantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ObjectCopyGrantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



