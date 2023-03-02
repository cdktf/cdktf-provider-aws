# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-aws.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy aws_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ObjectCopy(Construct Scope, string Id, S3ObjectCopyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutGrant` <a name="PutGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant"></a>

```csharp
private void PutGrant(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant.parameter.value"></a>

- *Type:* object

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetBucketKeyEnabled` <a name="ResetBucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled"></a>

```csharp
private void ResetBucketKeyEnabled()
```

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetCopyIfMatch` <a name="ResetCopyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```csharp
private void ResetCopyIfMatch()
```

##### `ResetCopyIfModifiedSince` <a name="ResetCopyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```csharp
private void ResetCopyIfModifiedSince()
```

##### `ResetCopyIfNoneMatch` <a name="ResetCopyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```csharp
private void ResetCopyIfNoneMatch()
```

##### `ResetCopyIfUnmodifiedSince` <a name="ResetCopyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```csharp
private void ResetCopyIfUnmodifiedSince()
```

##### `ResetCustomerAlgorithm` <a name="ResetCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm"></a>

```csharp
private void ResetCustomerAlgorithm()
```

##### `ResetCustomerKey` <a name="ResetCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey"></a>

```csharp
private void ResetCustomerKey()
```

##### `ResetCustomerKeyMd5` <a name="ResetCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5"></a>

```csharp
private void ResetCustomerKeyMd5()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetExpectedSourceBucketOwner` <a name="ResetExpectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner"></a>

```csharp
private void ResetExpectedSourceBucketOwner()
```

##### `ResetExpires` <a name="ResetExpires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```csharp
private void ResetExpires()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetGrant` <a name="ResetGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant"></a>

```csharp
private void ResetGrant()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsEncryptionContext` <a name="ResetKmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext"></a>

```csharp
private void ResetKmsEncryptionContext()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataDirective` <a name="ResetMetadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```csharp
private void ResetMetadataDirective()
```

##### `ResetObjectLockLegalHoldStatus` <a name="ResetObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus"></a>

```csharp
private void ResetObjectLockLegalHoldStatus()
```

##### `ResetObjectLockMode` <a name="ResetObjectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```csharp
private void ResetObjectLockMode()
```

##### `ResetObjectLockRetainUntilDate` <a name="ResetObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```csharp
private void ResetObjectLockRetainUntilDate()
```

##### `ResetRequestPayer` <a name="ResetRequestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer"></a>

```csharp
private void ResetRequestPayer()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```csharp
private void ResetServerSideEncryption()
```

##### `ResetSourceCustomerAlgorithm` <a name="ResetSourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```csharp
private void ResetSourceCustomerAlgorithm()
```

##### `ResetSourceCustomerKey` <a name="ResetSourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```csharp
private void ResetSourceCustomerKey()
```

##### `ResetSourceCustomerKeyMd5` <a name="ResetSourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```csharp
private void ResetSourceCustomerKeyMd5()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetTaggingDirective` <a name="ResetTaggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```csharp
private void ResetTaggingDirective()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWebsiteRedirect` <a name="ResetWebsiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```csharp
private void ResetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ObjectCopy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ObjectCopy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ObjectCopy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant">Grant</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged">RequestCharged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId">SourceVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput">BucketKeyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">CopyIfMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">CopyIfModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">CopyIfNoneMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">CopyIfUnmodifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput">CustomerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput">CustomerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input">CustomerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput">ExpectedSourceBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput">ExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput">GrantInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput">KmsEncryptionContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">MetadataDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput">ObjectLockLegalHoldStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">ObjectLockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">ObjectLockRetainUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput">RequestPayerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">SourceCustomerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">SourceCustomerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">SourceCustomerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">TaggingDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">WebsiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">CopyIfMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">CopyIfModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">CopyIfNoneMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">CopyIfUnmodifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm">CustomerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey">CustomerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5">CustomerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner">ExpectedSourceBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires">Expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext">KmsEncryptionContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">MetadataDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">ObjectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer">RequestPayer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">SourceCustomerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">SourceCustomerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">SourceCustomerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">TaggingDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">WebsiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant"></a>

```csharp
public S3ObjectCopyGrantList Grant { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a>

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `RequestCharged`<sup>Required</sup> <a name="RequestCharged" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged"></a>

```csharp
public IResolvable RequestCharged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SourceVersionId`<sup>Required</sup> <a name="SourceVersionId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId"></a>

```csharp
public string SourceVersionId { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketKeyEnabledInput`<sup>Optional</sup> <a name="BucketKeyEnabledInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput"></a>

```csharp
public object BucketKeyEnabledInput { get; }
```

- *Type:* object

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `CopyIfMatchInput`<sup>Optional</sup> <a name="CopyIfMatchInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```csharp
public string CopyIfMatchInput { get; }
```

- *Type:* string

---

##### `CopyIfModifiedSinceInput`<sup>Optional</sup> <a name="CopyIfModifiedSinceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```csharp
public string CopyIfModifiedSinceInput { get; }
```

- *Type:* string

---

##### `CopyIfNoneMatchInput`<sup>Optional</sup> <a name="CopyIfNoneMatchInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```csharp
public string CopyIfNoneMatchInput { get; }
```

- *Type:* string

---

##### `CopyIfUnmodifiedSinceInput`<sup>Optional</sup> <a name="CopyIfUnmodifiedSinceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```csharp
public string CopyIfUnmodifiedSinceInput { get; }
```

- *Type:* string

---

##### `CustomerAlgorithmInput`<sup>Optional</sup> <a name="CustomerAlgorithmInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput"></a>

```csharp
public string CustomerAlgorithmInput { get; }
```

- *Type:* string

---

##### `CustomerKeyInput`<sup>Optional</sup> <a name="CustomerKeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput"></a>

```csharp
public string CustomerKeyInput { get; }
```

- *Type:* string

---

##### `CustomerKeyMd5Input`<sup>Optional</sup> <a name="CustomerKeyMd5Input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input"></a>

```csharp
public string CustomerKeyMd5Input { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `ExpectedSourceBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedSourceBucketOwnerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput"></a>

```csharp
public string ExpectedSourceBucketOwnerInput { get; }
```

- *Type:* string

---

##### `ExpiresInput`<sup>Optional</sup> <a name="ExpiresInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```csharp
public string ExpiresInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `GrantInput`<sup>Optional</sup> <a name="GrantInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput"></a>

```csharp
public object GrantInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KmsEncryptionContextInput`<sup>Optional</sup> <a name="KmsEncryptionContextInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput"></a>

```csharp
public string KmsEncryptionContextInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MetadataDirectiveInput`<sup>Optional</sup> <a name="MetadataDirectiveInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```csharp
public string MetadataDirectiveInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ObjectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatusInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput"></a>

```csharp
public string ObjectLockLegalHoldStatusInput { get; }
```

- *Type:* string

---

##### `ObjectLockModeInput`<sup>Optional</sup> <a name="ObjectLockModeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```csharp
public string ObjectLockModeInput { get; }
```

- *Type:* string

---

##### `ObjectLockRetainUntilDateInput`<sup>Optional</sup> <a name="ObjectLockRetainUntilDateInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```csharp
public string ObjectLockRetainUntilDateInput { get; }
```

- *Type:* string

---

##### `RequestPayerInput`<sup>Optional</sup> <a name="RequestPayerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput"></a>

```csharp
public string RequestPayerInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```csharp
public string ServerSideEncryptionInput { get; }
```

- *Type:* string

---

##### `SourceCustomerAlgorithmInput`<sup>Optional</sup> <a name="SourceCustomerAlgorithmInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```csharp
public string SourceCustomerAlgorithmInput { get; }
```

- *Type:* string

---

##### `SourceCustomerKeyInput`<sup>Optional</sup> <a name="SourceCustomerKeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```csharp
public string SourceCustomerKeyInput { get; }
```

- *Type:* string

---

##### `SourceCustomerKeyMd5Input`<sup>Optional</sup> <a name="SourceCustomerKeyMd5Input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```csharp
public string SourceCustomerKeyMd5Input { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TaggingDirectiveInput`<sup>Optional</sup> <a name="TaggingDirectiveInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```csharp
public string TaggingDirectiveInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteRedirectInput`<sup>Optional</sup> <a name="WebsiteRedirectInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```csharp
public string WebsiteRedirectInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketKeyEnabled`<sup>Required</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled"></a>

```csharp
public object BucketKeyEnabled { get; }
```

- *Type:* object

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CopyIfMatch`<sup>Required</sup> <a name="CopyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```csharp
public string CopyIfMatch { get; }
```

- *Type:* string

---

##### `CopyIfModifiedSince`<sup>Required</sup> <a name="CopyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```csharp
public string CopyIfModifiedSince { get; }
```

- *Type:* string

---

##### `CopyIfNoneMatch`<sup>Required</sup> <a name="CopyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```csharp
public string CopyIfNoneMatch { get; }
```

- *Type:* string

---

##### `CopyIfUnmodifiedSince`<sup>Required</sup> <a name="CopyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```csharp
public string CopyIfUnmodifiedSince { get; }
```

- *Type:* string

---

##### `CustomerAlgorithm`<sup>Required</sup> <a name="CustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm"></a>

```csharp
public string CustomerAlgorithm { get; }
```

- *Type:* string

---

##### `CustomerKey`<sup>Required</sup> <a name="CustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey"></a>

```csharp
public string CustomerKey { get; }
```

- *Type:* string

---

##### `CustomerKeyMd5`<sup>Required</sup> <a name="CustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5"></a>

```csharp
public string CustomerKeyMd5 { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `ExpectedSourceBucketOwner`<sup>Required</sup> <a name="ExpectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner"></a>

```csharp
public string ExpectedSourceBucketOwner { get; }
```

- *Type:* string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```csharp
public string Expires { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KmsEncryptionContext`<sup>Required</sup> <a name="KmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext"></a>

```csharp
public string KmsEncryptionContext { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataDirective`<sup>Required</sup> <a name="MetadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```csharp
public string MetadataDirective { get; }
```

- *Type:* string

---

##### `ObjectLockLegalHoldStatus`<sup>Required</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus"></a>

```csharp
public string ObjectLockLegalHoldStatus { get; }
```

- *Type:* string

---

##### `ObjectLockMode`<sup>Required</sup> <a name="ObjectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```csharp
public string ObjectLockMode { get; }
```

- *Type:* string

---

##### `ObjectLockRetainUntilDate`<sup>Required</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```csharp
public string ObjectLockRetainUntilDate { get; }
```

- *Type:* string

---

##### `RequestPayer`<sup>Required</sup> <a name="RequestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer"></a>

```csharp
public string RequestPayer { get; }
```

- *Type:* string

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceCustomerAlgorithm`<sup>Required</sup> <a name="SourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```csharp
public string SourceCustomerAlgorithm { get; }
```

- *Type:* string

---

##### `SourceCustomerKey`<sup>Required</sup> <a name="SourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```csharp
public string SourceCustomerKey { get; }
```

- *Type:* string

---

##### `SourceCustomerKeyMd5`<sup>Required</sup> <a name="SourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```csharp
public string SourceCustomerKeyMd5 { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `TaggingDirective`<sup>Required</sup> <a name="TaggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```csharp
public string TaggingDirective { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteRedirect`<sup>Required</sup> <a name="WebsiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```csharp
public string WebsiteRedirect { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ObjectCopyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Key,
    string Source,
    string Acl = null,
    object BucketKeyEnabled = null,
    string CacheControl = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentType = null,
    string CopyIfMatch = null,
    string CopyIfModifiedSince = null,
    string CopyIfNoneMatch = null,
    string CopyIfUnmodifiedSince = null,
    string CustomerAlgorithm = null,
    string CustomerKey = null,
    string CustomerKeyMd5 = null,
    string ExpectedBucketOwner = null,
    string ExpectedSourceBucketOwner = null,
    string Expires = null,
    object ForceDestroy = null,
    object Grant = null,
    string Id = null,
    string KmsEncryptionContext = null,
    string KmsKeyId = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string MetadataDirective = null,
    string ObjectLockLegalHoldStatus = null,
    string ObjectLockMode = null,
    string ObjectLockRetainUntilDate = null,
    string RequestPayer = null,
    string ServerSideEncryption = null,
    string SourceCustomerAlgorithm = null,
    string SourceCustomerKey = null,
    string SourceCustomerKeyMd5 = null,
    string StorageClass = null,
    string TaggingDirective = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string WebsiteRedirect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl">Acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">CacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">CopyIfMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">CopyIfModifiedSince</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">CopyIfNoneMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">CopyIfUnmodifiedSince</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm">CustomerAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey">CustomerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5">CustomerKeyMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner">ExpectedSourceBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires">Expires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant">Grant</a></code> | <code>object</code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext">KmsEncryptionContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">MetadataDirective</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">ObjectLockMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer">RequestPayer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">SourceCustomerAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">SourceCustomerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">SourceCustomerKeyMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">TaggingDirective</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">WebsiteRedirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}.

---

##### `BucketKeyEnabled`<sup>Optional</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled"></a>

```csharp
public object BucketKeyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}.

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}.

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}.

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}.

---

##### `CopyIfMatch`<sup>Optional</sup> <a name="CopyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```csharp
public string CopyIfMatch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}.

---

##### `CopyIfModifiedSince`<sup>Optional</sup> <a name="CopyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```csharp
public string CopyIfModifiedSince { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}.

---

##### `CopyIfNoneMatch`<sup>Optional</sup> <a name="CopyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```csharp
public string CopyIfNoneMatch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}.

---

##### `CopyIfUnmodifiedSince`<sup>Optional</sup> <a name="CopyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```csharp
public string CopyIfUnmodifiedSince { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}.

---

##### `CustomerAlgorithm`<sup>Optional</sup> <a name="CustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm"></a>

```csharp
public string CustomerAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}.

---

##### `CustomerKey`<sup>Optional</sup> <a name="CustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey"></a>

```csharp
public string CustomerKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}.

---

##### `CustomerKeyMd5`<sup>Optional</sup> <a name="CustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5"></a>

```csharp
public string CustomerKeyMd5 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}.

---

##### `ExpectedSourceBucketOwner`<sup>Optional</sup> <a name="ExpectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner"></a>

```csharp
public string ExpectedSourceBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}.

---

##### `Expires`<sup>Optional</sup> <a name="Expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```csharp
public string Expires { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}.

---

##### `Grant`<sup>Optional</sup> <a name="Grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant"></a>

```csharp
public object Grant { get; set; }
```

- *Type:* object

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#grant S3ObjectCopy#grant}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsEncryptionContext`<sup>Optional</sup> <a name="KmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext"></a>

```csharp
public string KmsEncryptionContext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}.

---

##### `MetadataDirective`<sup>Optional</sup> <a name="MetadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```csharp
public string MetadataDirective { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}.

---

##### `ObjectLockLegalHoldStatus`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus"></a>

```csharp
public string ObjectLockLegalHoldStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}.

---

##### `ObjectLockMode`<sup>Optional</sup> <a name="ObjectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```csharp
public string ObjectLockMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}.

---

##### `ObjectLockRetainUntilDate`<sup>Optional</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```csharp
public string ObjectLockRetainUntilDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}.

---

##### `RequestPayer`<sup>Optional</sup> <a name="RequestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer"></a>

```csharp
public string RequestPayer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}.

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}.

---

##### `SourceCustomerAlgorithm`<sup>Optional</sup> <a name="SourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```csharp
public string SourceCustomerAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}.

---

##### `SourceCustomerKey`<sup>Optional</sup> <a name="SourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```csharp
public string SourceCustomerKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}.

---

##### `SourceCustomerKeyMd5`<sup>Optional</sup> <a name="SourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```csharp
public string SourceCustomerKeyMd5 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}.

---

##### `TaggingDirective`<sup>Optional</sup> <a name="TaggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```csharp
public string TaggingDirective { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}.

---

##### `WebsiteRedirect`<sup>Optional</sup> <a name="WebsiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```csharp
public string WebsiteRedirect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}.

---

### S3ObjectCopyGrant <a name="S3ObjectCopyGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ObjectCopyGrant {
    string[] Permissions,
    string Type,
    string Email = null,
    string Id = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions">Permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectCopyGrantList <a name="S3ObjectCopyGrantList" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ObjectCopyGrantList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get"></a>

```csharp
private S3ObjectCopyGrantOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3ObjectCopyGrantOutputReference <a name="S3ObjectCopyGrantOutputReference" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ObjectCopyGrantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



